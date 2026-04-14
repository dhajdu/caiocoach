import type { Metadata } from "next";
import FrameworksClient from "./FrameworksClient";

export const metadata: Metadata = {
  title: "100 Business Frameworks - CAIO Coach",
  description:
    "100 business frameworks from the world's top universities. Search, filter, and copy AI prompts to apply any framework instantly.",
  openGraph: {
    title: "100 Business Frameworks from the World's Top Universities",
    description:
      "You don't need to memorize frameworks. You need to know they exist. Ask AI to teach you. Apply immediately.",
    type: "website",
    url: "https://www.caiocoach.com/resources/100-business-frameworks",
  },
};

export default function BusinessFrameworksPage() {
  return <FrameworksClient />;
}
