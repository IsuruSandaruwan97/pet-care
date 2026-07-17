import type { Metadata } from "next";
import "./globals.css";
import "@/components/organisms/perloader/styles.css";
import { siteConfig } from "@/config/site";
import { faqs, services } from "@/data";

import {
  CustomCursor,
  RightClickGuard,
  ScrollProgress,
  ScrollToTop,
} from "@/components/atoms";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.seo.title,
    template: siteConfig.seo.template,
  },
  description: siteConfig.seo.description,
  applicationName: siteConfig.name,
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.seo.ogImage }],
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.seo.ogImage],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const rightClickGuardEnabled =
    process.env.NEXT_PUBLIC_RIGHT_CLICK_GUARD === "true";
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "VeterinaryCare",
        "@id": `${siteConfig.url}/#business`,
        name: siteConfig.legalName,
        url: siteConfig.url,
        image: `${siteConfig.url}${siteConfig.seo.ogImage}`,
        description: siteConfig.description,
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.region,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.country,
        },
        openingHours: siteConfig.hours.schema,
        sameAs: Object.values(siteConfig.socialLinks).filter(
          (link) => link !== "#",
        ),
      },
      {
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
      },
      ...services.map(([, name, description]) => ({
        "@type": "Service",
        provider: { "@id": `${siteConfig.url}/#business` },
        serviceType: name,
        name,
        description,
        areaServed: siteConfig.address.country,
      })),
    ],
  };

  return (
    <html className="scroll-smooth" data-scroll-behavior="smooth" lang="en">
      <head>
        <link
          rel="preload"
          href="/assets/fonts/inter-latin-400-800.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/assets/fonts/fraunces-latin-500-600.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-background font-body-md selection:bg-secondary-container/30">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <CustomCursor />
        <ScrollProgress />
        <RightClickGuard enabled={rightClickGuardEnabled} />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
