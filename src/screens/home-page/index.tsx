"use client";

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
} from "@/screens/home-page/components";

export default function HomePage() {
  return (
    <div className="hp-page">
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
    </div>
  );
}
