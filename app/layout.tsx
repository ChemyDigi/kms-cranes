import type { Metadata } from "next";
import { Barlow_Condensed, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import TelemetrySidebar from "@/components/TelemetrySidebar";
import CraneScrollHook from "@/components/CraneScrollHook";
import Footer from "@/components/Footer";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KMS Cranes | Heavy Machinery & Crane Hiring in Sri Lanka",
  description:
    "Professionals in the field of heavy machinery & crane hiring. We hire all types of RT cranes, forklifts, boom trucks, low beds for reasonable prices across Sri Lanka.",
  keywords: [
    "Crane Hire Sri Lanka",
    "RT Cranes Sri Lanka",
    "Crawler Cranes Colombo",
    "Boom Truck Hire",
    "Forklift Rental Sri Lanka",
    "Low Bed Trailer Transport",
    "KMS Cranes",
    "Heavy Lifting Engineering",
  ],
  openGraph: {
    title: "KMS Cranes | Heavy Machinery & Crane Hiring Sri Lanka",
    description:
      "RT Cranes, Crawler Cranes, Boom Trucks, Forklifts and Low Beds for hire at competitive rates across Sri Lanka.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-white text-zinc-900`}
    >
      <body className="min-h-screen flex flex-col relative overflow-x-hidden bg-white text-zinc-900">
        {/* Unique Industrial Navigation */}
        <Navigation />

        {/* 2D Scroll-Driven Crane Hook & Cable Lowering Rig */}
        <CraneScrollHook />

        {/* Floating Right Telemetry Dock (Liebherr Style) */}
        <TelemetrySidebar />

        {/* Main Content Area */}
        <main className="flex-1 w-full pt-18 sm:pt-20">{children}</main>

        {/* Industrial Blueprint Footer */}
        <Footer />
      </body>
    </html>
  );
}
