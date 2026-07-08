import type { Metadata } from "next";
import "./globals.css";
import {
  CustomCursor,
  RightClickGuard,
  ScrollProgress,
  ScrollToTop,
} from "@/components/atoms";
import { rightClickGuardEnabled } from "@/constants";

export const metadata: Metadata = {
  title: "Happy Paws | Compassionate Veterinary Care",
  description:
    "Professional and warm veterinary care for your beloved pets. Book your appointment today with our certified vets.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
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
        <style
          dangerouslySetInnerHTML={{
            __html: `
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400 800;
  font-display: swap;
  src: url("/assets/fonts/inter-latin-400-800.woff2") format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: "Inter Fallback";
  src: local("Arial");
  size-adjust: 107%;
  ascent-override: 90%;
  descent-override: 22%;
  line-gap-override: 0%;
}
@font-face {
  font-family: "Fraunces";
  font-style: normal;
  font-weight: 500 600;
  font-display: swap;
  src: url("/assets/fonts/fraunces-latin-500-600.woff2") format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: "Fraunces";
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url("/assets/fonts/fraunces-latin-italic-400.woff2") format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: "Fraunces Fallback";
  src: local("Georgia");
  size-adjust: 95%;
  ascent-override: 95%;
  descent-override: 24%;
  line-gap-override: 0%;
}
:root {
  --font-inter: "Inter", "Inter Fallback", Arial, sans-serif;
  --font-fraunces: "Fraunces", "Fraunces Fallback", Georgia, serif;
}`,
          }}
        />
        <link
          rel="preload"
          href="/assets/videos/certified_vets.mp4"
          as="video"
          type="video/mp4"
        />
        <link
          rel="preload"
          href="/assets/videos/hero_banner_video.mp4"
          as="video"
          type="video/mp4"
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
