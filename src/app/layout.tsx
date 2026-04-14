import type { Metadata } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.caiocoach.com"),
  title: "CAIO Coach | AI Leadership Coaching",
  description:
    "AI leadership coaching for founders and executives. Build the capabilities the AI era demands. From the founder of AI Officer Institute.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="69abe0a5-ceba-4740-a90d-2bb2f198a4a9"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
