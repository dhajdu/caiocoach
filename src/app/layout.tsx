import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

// Script import retained for the Umami analytics tag below.
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
  display: "swap",
  preload: true,
});

const SITE_URL = "https://www.caiocoach.com";
const OG_IMAGE = `${SITE_URL}/images/dave-portrait.webp`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CAIO Coach | AI Leadership Coaching",
    template: "%s | CAIO Coach",
  },
  description:
    "AI leadership coaching for founders and executives. Build the capabilities the AI era demands. From the founder of AI Officer Institute.",
  applicationName: "CAIO Coach",
  authors: [{ name: "Dave Hajdu", url: SITE_URL }],
  creator: "Dave Hajdu",
  publisher: "AI Officer Institute LLC",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "CAIO Coach",
    title: "CAIO Coach | AI Leadership Coaching",
    description:
      "AI leadership coaching for founders and executives. Build the capabilities the AI era demands.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "CAIO Coach" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CAIO Coach | AI Leadership Coaching",
    description:
      "AI leadership coaching for founders and executives. Build the capabilities the AI era demands.",
    images: [OG_IMAGE],
    creator: "@davehajdu",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}#organization`,
  name: "CAIO Coach",
  legalName: "AI Officer Institute LLC",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  email: "dave@edge8.ai",
  sameAs: [
    "https://www.ai-officer.com/membership",
    "https://www.linkedin.com/company/aiofficerinstitute/",
    "https://www.facebook.com/aiofficerinstitute",
    "https://www.instagram.com/aiofficerinstitute/",
  ],
  founder: { "@id": `${SITE_URL}#dave-hajdu` },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-206-395-8872",
      contactType: "customer support",
      areaServed: "US",
      availableLanguage: ["en"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+84-90-995-8581",
      contactType: "customer support",
      areaServed: "VN",
      availableLanguage: ["en"],
    },
  ],
};

const PERSON_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}#dave-hajdu`,
  name: "Dave Hajdu",
  jobTitle: "Founder & Chief AI Officer",
  url: SITE_URL,
  image: `${SITE_URL}/images/dave-portrait.webp`,
  email: "dave@edge8.ai",
  worksFor: { "@id": `${SITE_URL}#organization` },
  sameAs: [
    "https://www.linkedin.com/in/davehajdu",
    "https://www.linkedin.com/company/aiofficerinstitute/",
  ],
  knowsAbout: [
    "AI leadership",
    "Agentic AI",
    "Generative AI",
    "Executive coaching",
    "AI organizational design",
  ],
};

const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}#website`,
  url: SITE_URL,
  name: "CAIO Coach",
  description:
    "AI leadership coaching for founders and executives. Build the capabilities the AI era demands.",
  publisher: { "@id": `${SITE_URL}#organization` },
  inLanguage: "en-US",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-sans bg-navy text-white">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSONLD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSONLD) }}
        />
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="69abe0a5-ceba-4740-a90d-2bb2f198a4a9"
          strategy="afterInteractive"
        />
        <Analytics />
      </body>
    </html>
  );
}
