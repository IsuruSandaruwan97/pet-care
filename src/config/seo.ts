import type { Metadata } from "next";
import { faqs } from "@/data";
import { getAbsoluteUrl, routes, siteConfig } from "@/config/site";

export const seoKeywords = [
  "nextjs pet care template",
  "nextjs veterinary template",
  "next js pet care website template",
  "next.js veterinary website template",
  "nextjs vet clinic template",
  "veterinary website template",
  "pet care website template",
  "pet clinic website template",
  "vet clinic website template",
  "animal hospital website template",
  "veterinary clinic website design",
  "pet care website design",
  "veterinary website design",
  "react pet care template",
  "react veterinary template",
  "tailwind pet care template",
  "tailwind veterinary template",
  "typescript veterinary website",
  "responsive veterinary website template",
  "responsive pet care website template",
  "pet care landing page template",
  "veterinary landing page template",
  "modern veterinary website template",
  "modern pet care website template",
  "seo ready pet care template",
  "seo ready veterinary template",
  "appointment booking veterinary template",
  "pet hospital website template",
  "dog cat vet website template",
  "veterinary clinic nextjs template",
  "pet care nextjs template",
  "html pet care website template",
  "premium pet care template",
  "premium veterinary template",
  "veterinary website theme",
  "pet care website theme",
  "animal care website template",
  "veterinarian website template",
  "pet care website ui",
  "veterinary website ui kit",
  "pet care web design template",
  "veterinary clinic html template",
] as const;

export type SeoImage = {
  path: string;
  caption: string;
  title?: string;
};

export const pageSeoImages: Record<string, SeoImage[]> = {
  "/": [
    {
      path: "/api/media/pet-care",
      caption:
        "Pet care and veterinary website template homepage preview with modern clinic design",
      title: "Next.js Pet Care Website Template Preview",
    },
    {
      path: "/assets/hero/golden-retriever.png",
      caption:
        "Veterinary website template hero section with golden retriever layout design",
      title: "Pet Care Website Template Hero Design",
    },
    {
      path: "/assets/hero/dachshund.png",
      caption:
        "Responsive pet clinic website template hero panel with dachshund imagery",
      title: "Veterinary Clinic Template Hero Panel",
    },
    {
      path: "/assets/hero/cat.png",
      caption:
        "Pet care website template hero section with cat-focused veterinary design",
      title: "Pet Care Template Hero Cat Panel",
    },
    {
      path: "/assets/hero/cat-house.png",
      caption:
        "Modern veterinary website template feature card with pet care imagery",
      title: "Veterinary Website Template Feature Card",
    },
    {
      path: "/assets/hero/product-review.png",
      caption:
        "Pet care website template review and trust section design preview",
      title: "Pet Clinic Website Template Trust Section",
    },
    {
      path: "/assets/hero/customer-avatar.png",
      caption:
        "Veterinary website template customer avatar and social proof UI element",
      title: "Pet Care Template Social Proof UI",
    },
    {
      path: "/api/media/facilities",
      caption:
        "Veterinary clinic facilities section in pet care website template preview",
      title: "Facilities Section - Pet Care Template",
    },
    {
      path: "/api/media/reception",
      caption:
        "Veterinary reception area design in pet clinic website template demo",
      title: "Reception Area - Veterinary Website Template",
    },
  ],
  "/about-us": [
    {
      path: "/api/media/dr-sarah",
      caption:
        "About page layout in Next.js veterinary website template with veterinarian hero image",
      title: "About Page - Veterinary Website Template",
    },
    {
      path: "/api/media/our-clinic",
      caption:
        "Clinic photo gallery block in pet care website template about page design",
      title: "Clinic Gallery - Pet Care Website Template",
    },
    {
      path: "/api/media/founder",
      caption:
        "Founder profile section in veterinary clinic website template preview",
      title: "Founder Profile - Vet Clinic Template",
    },
  ],
  "/services": [
    {
      path: "/api/media/wellness",
      caption:
        "Services page bento layout in responsive veterinary website template preview",
      title: "Services Page - Next.js Veterinary Template",
    },
  ],
  "/facilities": [
    {
      path: "/api/media/facilities",
      caption:
        "Facilities hero image in pet hospital website template design preview",
      title: "Facilities Hero - Pet Care Website Template",
    },
    {
      path: "/api/media/reception",
      caption:
        "Reception and waiting room layout in veterinary clinic website template",
      title: "Reception Layout - Veterinary Template",
    },
    {
      path: "/api/media/exam",
      caption:
        "Exam room section design in modern pet care website template preview",
      title: "Exam Room - Pet Clinic Website Template",
    },
    {
      path: "/api/media/surgery",
      caption:
        "Surgical suite page design in premium veterinary website template",
      title: "Surgery Suite - Veterinary Website Template",
    },
    {
      path: "/api/media/boarding",
      caption:
        "Pet boarding section in animal hospital website template preview",
      title: "Boarding Section - Pet Care Template",
    },
  ],
  "/our-vets": [
    {
      path: "/api/media/team-sm",
      caption:
        "Lead veterinarian profile layout in pet care website template team page",
      title: "Vet Profile - Veterinary Website Template",
    },
    {
      path: "/api/media/team-jo",
      caption:
        "Veterinary team member card design in Next.js pet clinic website template",
      title: "Team Card - Pet Care Website Template",
    },
    {
      path: "/api/media/team-pn",
      caption:
        "Feline specialist profile in responsive veterinary website template",
      title: "Specialist Profile - Vet Website Template",
    },
    {
      path: "/api/media/team-mc",
      caption:
        "Emergency vet profile section in modern veterinary website template demo",
      title: "Emergency Vet Profile - Pet Care Template",
    },
  ],
  "/pet-care": [
    {
      path: "/api/media/cat-in-pain",
      caption:
        "Pet care tips blog card design in veterinary website template preview",
      title: "Pet Care Tips Card - Website Template",
    },
    {
      path: "/api/media/first-year-puppy",
      caption:
        "Puppy care article layout in SEO-ready pet care website template",
      title: "Pet Care Article - Next.js Template",
    },
    {
      path: "/api/media/over-weight",
      caption:
        "Dog wellness article card in pet clinic website template design",
      title: "Wellness Article - Veterinary Template",
    },
    {
      path: "/api/media/senior-cat",
      caption:
        "Senior cat care content block in pet care website template preview",
      title: "Senior Pet Content - Website Template",
    },
    {
      path: "/api/media/dental-disease",
      caption:
        "Dental care article layout in veterinary clinic website template",
      title: "Dental Care Article - Pet Care Template",
    },
    {
      path: "/api/media/right-food",
      caption:
        "Pet nutrition article card in modern veterinary website template demo",
      title: "Nutrition Article - Vet Website Template",
    },
  ],
  "/pricing": [
    {
      path: "/api/media/value-image",
      caption:
        "Pricing packages layout in pet care website template with transparent plan cards",
      title: "Pricing Page - Pet Care Website Template",
    },
    {
      path: "/api/media/pet-care",
      caption:
        "Pet care pricing and conversion section in veterinary website template",
      title: "Pricing Section - Veterinary Website Template",
    },
  ],
};

export const allSeoImages = Object.values(pageSeoImages).flat();

export const getImageAlt = (caption: string) => caption;

export function createPageMetadata(
  path: string,
  options?: { keywords?: readonly string[] },
): Metadata {
  const route = routes.find((item) => item.path === path);

  if (!route) {
    return {};
  }

  const pageKeywords = [
    ...seoKeywords,
    ...(options?.keywords ?? route.keywords),
  ];
  const canonicalUrl = getAbsoluteUrl(route.path);
  const pageTitle =
    route.path === "/"
      ? siteConfig.seo.title
      : `${route.title} | ${siteConfig.template.shortName}`;
  const primaryImage =
    (pageSeoImages[route.path] ?? [allSeoImages[0]])[0] ?? allSeoImages[0];
  const ogImages = [
    {
      url: primaryImage.path,
      alt: primaryImage.caption,
    },
  ];

  return {
    title: route.title,
    description: route.description,
    keywords: pageKeywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: route.description,
      url: canonicalUrl,
      siteName: siteConfig.template.productName,
      locale: siteConfig.locale,
      type: "website",
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: route.description,
      images: ogImages.map((image) => image.url),
    },
  };
}

export function buildStructuredData() {
  const previewImages = allSeoImages.map((image) => getAbsoluteUrl(image.path));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.template.productName,
        description: siteConfig.seo.description,
        inLanguage: siteConfig.locale.replace("_", "-"),
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.template.author.name,
        url: siteConfig.template.author.url,
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${siteConfig.url}/#template`,
        name: siteConfig.template.productName,
        applicationCategory: "WebApplication",
        applicationSubCategory: "Website Template",
        operatingSystem: "Web",
        url: siteConfig.url,
        description: siteConfig.seo.description,
        image: previewImages,
        screenshot: previewImages.slice(0, 8),
        keywords: seoKeywords.join(", "),
        programmingLanguage: siteConfig.template.techStack,
        featureList: siteConfig.template.features,
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          url: siteConfig.template.purchaseUrl,
          price: siteConfig.template.price,
          priceCurrency: siteConfig.template.priceCurrency,
        },
        author: {
          "@id": `${siteConfig.url}/#organization`,
        },
      },
      {
        "@type": "ItemList",
        "@id": `${siteConfig.url}/#template-images`,
        name: "Pet Care and Veterinary Website Template Preview Images",
        itemListElement: allSeoImages.map((image, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "ImageObject",
            contentUrl: getAbsoluteUrl(image.path),
            name: image.title ?? image.caption,
            description: image.caption,
            thumbnailUrl: getAbsoluteUrl(image.path),
          },
        })),
      },
    ],
  };
}

export function buildFaqStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteConfig.url}/#faq`,
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.seo.title,
    template: siteConfig.seo.template,
  },
  description: siteConfig.seo.description,
  keywords: [...seoKeywords],
  applicationName: siteConfig.template.productName,
  category: siteConfig.template.category,
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
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    url: siteConfig.url,
    siteName: siteConfig.template.productName,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: siteConfig.seo.ogImage,
        alt: siteConfig.seo.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.seo.ogImage],
  },
  icons: {
    icon: [
      {
        url: "/favicon-96x96.png",
        type: "image/png",
        sizes: "96x96",
      },
      {
        url: "/favicon-48x48.png",
        type: "image/png",
        sizes: "48x48",
      },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/apple-touch-icon.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
  },
};
