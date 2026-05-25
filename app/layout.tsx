import "./globals.css";
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Devpill — Boutique IT consultancy",
  description:
    "Devpill is a boutique IT consultancy in Copenhagen. Senior, hands-on engineering for cloud, data, AI and product work.",
  metadataBase: new URL("https://devpill.dk"),
  openGraph: {
    title: "Devpill — Boutique IT consultancy",
    description:
      "Senior engineering for cloud, data, AI and product work. Copenhagen, remote across EU.",
    type: "website",
  },
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
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
