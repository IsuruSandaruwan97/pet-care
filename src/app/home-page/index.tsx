"use client";

import {
  CustomCursor,
  RightClickGuard,
  ScrollProgress,
  ScrollToTop,
} from "@/components/atoms";

import { rightClickGuardEnabled } from "@constants";
import { Header, Footer } from "@/components/organisms";
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
} from "@/app/home-page/components";

export default function HomePage() {
  return (
    <div className="hp-page">
      <CustomCursor />
      <ScrollProgress />
      <RightClickGuard enabled={rightClickGuardEnabled} />
      <Header />
      <Hero />
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
      <ScrollToTop />
    </div>
  );
}
