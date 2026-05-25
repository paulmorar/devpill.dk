import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const SITE_URL = "https://devpill.dk";
const SITE_NAME = "Devpill";
const DEFAULT_TITLE = "Devpill — Boutique IT consultancy in Copenhagen";
const DEFAULT_DESCRIPTION =
  "Senior, hands-on engineering for cloud, data, AI and product work. A boutique IT consultancy in Copenhagen, working remote across the EU.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s — Devpill",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  generator: "Next.js",
  keywords: [
    "IT consultancy",
    "software consultancy",
    "boutique consultancy",
    "Copenhagen",
    "Denmark",
    "cloud engineering",
    "AWS",
    "Azure",
    "GCP",
    "Kubernetes",
    "platform engineering",
    "data platform",
    "data engineering",
    "AI engineering",
    "LLM",
    "fractional CTO",
    "product engineering",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Devpill ApS", url: SITE_URL }],
  creator: "Devpill ApS",
  publisher: "Devpill ApS",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    locale: "en_DK",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    creator: "@devpill_dk",
    site: "@devpill_dk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#05060a" },
    { media: "(prefers-color-scheme: light)", color: "#05060a" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Devpill ApS",
  legalName: "Devpill ApS",
  alternateName: "Devpill",
  url: SITE_URL,
  logo: `${SITE_URL}/icon`,
  description: DEFAULT_DESCRIPTION,
  email: "mailto:paul@devpill.dk",
  foundingDate: "2026",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Copenhagen",
    addressCountry: "DK",
  },
  areaServed: ["DK", "EU"],
  sameAs: [
    "https://www.linkedin.com/company/devpill",
    "https://github.com/devpill",
    "https://twitter.com/devpill_dk",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  publisher: { "@type": "Organization", name: "Devpill ApS" },
  inLanguage: "en",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable}`}>
      <body>
        <div className="relative flex min-h-screen flex-col overflow-x-clip">
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:text-ink-900"
          >
            Skip to content
          </a>
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
