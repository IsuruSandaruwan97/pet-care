import HomePage from "@/screens/home-page";
import { buildFaqStructuredData, createPageMetadata } from "@/config/seo";

export const metadata = createPageMetadata("/");

export default function Home() {
  const faqStructuredData = buildFaqStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <HomePage />
    </>
  );
}
