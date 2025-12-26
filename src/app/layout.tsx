import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Rheingold Royal Medica GmbH | Quality Pharmaceutical Import & Distribution",
    template: "%s | Rheingold Royal Medica",
  },
  description:
    "Your trusted partner for quality pharmaceutical imports. EDA & GMP certified products from Europe to MENA. 15+ years of excellence in pharmaceutical distribution. Based in Bad Homburg, Germany.",
  keywords: [
    "pharmaceutical import",
    "pharmaceutical distribution",
    "EDA certified",
    "GMP compliant",
    "European pharmaceuticals",
    "MENA pharmaceutical",
    "nutraceuticals",
    "hospital supplies",
    "medical products",
    "Rheingold Royal Medica",
    "Bad Homburg",
    "Germany",
  ],
  authors: [{ name: "Rheingold Royal Medica GmbH" }],
  creator: "Rheingold Royal Medica GmbH",
  publisher: "Rheingold Royal Medica GmbH",
  metadataBase: new URL("https://rheingold-medica.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rheingold-medica.com",
    siteName: "Rheingold Royal Medica",
    title: "Rheingold Royal Medica GmbH | Quality Pharmaceutical Import & Distribution",
    description:
      "Your trusted partner for quality pharmaceutical imports. EDA & GMP certified products from Europe to MENA. Based in Bad Homburg, Germany.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rheingold Royal Medica GmbH",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rheingold Royal Medica GmbH",
    description: "Quality Pharmaceutical Import & Distribution from Germany",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://rheingold-medica.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased bg-white text-gray-900" suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
