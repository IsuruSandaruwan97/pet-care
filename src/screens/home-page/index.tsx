"use client";

import { Header, Footer, Preloader } from "@/components/organisms";
import { useCallback, useEffect, useState } from "react";
import {
  About,
  Contact,
  Facilities,
  FrequentlyAskedQuestions,
  Hero,
  PetCareTips,
  Pricing,
  Team,
  Testimonials,
  WhyChooseUs,
  Services,
} from "@/screens/home-page/components";

const PRELOADER_SEEN_KEY = "happy-paws-preloader-seen";

export default function HomePage() {
  const [isIntroReady, setIsIntroReady] = useState(false);
  const [shouldShowPreloader, setShouldShowPreloader] = useState(false);

  useEffect(() => {
    const navigationEntry = performance.getEntriesByType(
      "navigation",
    )[0] as PerformanceNavigationTiming | undefined;
    const isPageRefresh = navigationEntry?.type === "reload";
    const hasSeenPreloader =
      window.sessionStorage.getItem(PRELOADER_SEEN_KEY) === "true";
    const shouldShow = isPageRefresh || !hasSeenPreloader;

    setShouldShowPreloader(shouldShow);

    if (shouldShow) {
      window.sessionStorage.setItem(PRELOADER_SEEN_KEY, "true");
      return;
    }

    setIsIntroReady(true);
  }, []);

  const handlePreloaderComplete = useCallback(() => {
    setIsIntroReady(true);
    setShouldShowPreloader(false);
  }, []);

  return (
    <div className="hp-page">
      {shouldShowPreloader && (
        <Preloader onComplete={handlePreloaderComplete} />
      )}
      <Header />
      <Hero introReady={isIntroReady} />
      <About />
      <WhyChooseUs />
      <Services />
      <Facilities />
      <Team />
      <Pricing />
      <Testimonials />
      <PetCareTips />
      <FrequentlyAskedQuestions />
      <Contact />
      <Footer />
    </div>
  );
}
