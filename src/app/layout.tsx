import type { Metadata } from "next";
import "./globals.css";

import {
  CustomCursor,
  RightClickGuard,
  ScrollProgress,
  ScrollToTop,
} from "@/components/atoms";

export const metadata: Metadata = {
  title: "Happy Paws | Compassionate Veterinary Care",
  description:
    "Professional and warm veterinary care for your beloved pets. Book your appointment today with our certified vets.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const rightClickGuardEnabled =
    process.env.NEXT_PUBLIC_APP_ENV === "production";
  return (
    <html className="scroll-smooth" lang="en">
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
      </head>
      <body className="bg-background text-on-background font-body-md selection:bg-secondary-container/30">
        <CustomCursor />
        <ScrollProgress />
        <RightClickGuard enabled={rightClickGuardEnabled} />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
