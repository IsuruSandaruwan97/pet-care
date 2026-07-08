"use client";

import { Header, Footer, Preloader } from "@/components/organisms";
import { useCallback, useState } from "react";
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

export default function HomePage() {
  const [isIntroReady, setIsIntroReady] = useState(false);
  const handlePreloaderComplete = useCallback(() => {
    setIsIntroReady(true);
  }, []);

  return (
    <div className="hp-page">
      <Preloader onComplete={handlePreloaderComplete} />
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
