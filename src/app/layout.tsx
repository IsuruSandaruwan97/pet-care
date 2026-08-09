import type { Metadata } from "next";
import "./globals.css";
import "@/components/organisms/perloader/styles.css";
import { buildStructuredData, rootMetadata } from "@/config/seo";

import {
  CustomCursor,
  RightClickGuard,
  ScrollProgress,
  ScrollToTop,
} from "@/components/atoms";

export const metadata: Metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const rightClickGuardEnabled =
    process.env.NEXT_PUBLIC_RIGHT_CLICK_GUARD === "true";
  const structuredData = buildStructuredData();

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
