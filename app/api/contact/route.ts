import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// --- Validation ----------------------------------------------------
const ContactSchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(200),
  company: z.string().max(200).optional().or(z.literal("")),
  project: z.string().min(10, "Tell us a bit more").max(5000),
  // honeypot — must be empty
  website: z.string().max(0).optional().or(z.literal("")),
  // time-trap — ms since the form was rendered
  startedAt: z.number().int().nonnegative(),
});

// --- Rate limit (best-effort, in-memory) ---------------------------
// On Vercel each lambda instance has its own Map; this is good
// enough as a first line of defence. Swap in Upstash when needed.
const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_PER_IP = 5;
const hits = new Map<string, number[]>();

function rateLimit(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_IP) return false;
  recent.push(now);
  hits.set(ip, recent);
  return true;
}

// --- Handler -------------------------------------------------------
export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const parsed = ContactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Invalid form data." },
      { status: 400 },
    );
  }

  const { name, email, company, project, website, startedAt } = parsed.data;

  // Honeypot — silently accept so bots think it worked
  if (website && website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  // Time-trap — humans take >2s to fill the form
  const elapsed = Date.now() - startedAt;
  if (elapsed < 2_000) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "paul@devpill.dk";
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "Devpill site <hello@devpill.dk>";

  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not configured");
    return NextResponse.json(
      { ok: false, error: "Mail service not configured." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New contact: ${name}${company ? ` (${company})` : ""}`,
      text: [
        `Name:    ${name}`,
        `Email:   ${email}`,
        `Company: ${company || "—"}`,
        `IP:      ${ip}`,
        "",
        "Project:",
        project,
      ].join("\n"),
    });
  } catch (err) {
    console.error("[contact] Resend error", err);
    return NextResponse.json(
      { ok: false, error: "Failed to send. Please email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
