"use client";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Icon } from "@/components/Icon";
import { Profile } from "@/components/Profile";
import { SectionHeader } from "@/components/SectionHeader";
import { useAutoCarousel } from "@/hooks/useAutoCarousel";
import { useScrolledHeader } from "@/hooks/useScrolledHeader";
import { useTiltCard } from "@/hooks/useTiltCard";
import { classNames } from "@/utils/classNames";
import { useState } from "react";

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC2A3Q86ty2x5EcGTczYeqksNc6WbFIYWZuSucE2XMYCaqtg6LetqaqNgTVaQQwNifn8VcWcQgvx7X4PpLwrWPz_J7d4buKsMAsTHVOhzKiOtlNCbFu-5vTF3Cmx5zxp1AisqJLHOmaDbPSBjbdv5lkB2N-7pZ50ql9uwQKHwZ0NESqOQO3i8zAjnwrqjYRWz779CO0WzlDp7FMhC3DlY3iE9_gpHaNOen2oed-grSqSCv_givrk11oqhyhwCSTXY0N4vmtpELLLg2X";

const aboutImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAfByICx8e7P0fiZEgfp31qJcVyviGCWUl_gomgSkQ_T7kqbKHljuHwcLAh64FIIyoC_M_zmQk8pwdbs5ujf-ugvUc7rDG1Vf0xiii0IHbjk8YUD_4Zt_54MG8ZxziFXHKPuo2ynjY4HU8YxUGLfMU1ReraUnRhqkBvudYP0W3wrxxinTOAYHrG4ZslX9oG1iExUZQ7YQHpWjMgKqn5LFHwtjmiWG9JgzZnXY6FLYZ8rCM9Wcgv81w9_tG44s8q-adECZW9A72zm7Gb";

const navItems = [
  ["Home", "#home"],
  ["About Us", "#about"],
  ["Services", "#services"],
  ["Facilities", "#facilities"],
  ["Our Vets", "#team"],
  ["Pricing", "#pricing"],
  ["Testimonials", "#testimonials"],
  ["Contact", "#contact"],
] as const;

const trustBadges = [
  ["verified", "15+ Years Experience"],
  ["pets", "10,000+ Happy Pets"],
  ["medical_services", "Certified Vets"],
  ["event_available", "Same-Day Appointments"],
];

const stats = [
  ["15+", "Years of Service"],
  ["6", "Certified Vets"],
  ["98%", "Patient Satisfaction"],
  ["24/7", "Emergency Support"],
];

const reasons = [
  ["medical_information", "Experienced Vets", "Our team brings decades of combined experience across all veterinary specialties."],
  ["biotech", "Modern Equipment", "Full diagnostic lab, digital radiography, and laser surgery tools on-site."],
  ["spa", "Fear-Free Approach", "We prioritize low-stress handling techniques to keep your pets calm and happy."],
  ["receipt_long", "Transparent Pricing", "Clear estimates before every procedure. No hidden fees or surprise costs."],
  ["e911_emergency", "24/7 Emergency", "A dedicated team is always on call for life-threatening situations."],
  ["volunteer_activism", "Personalized Plans", "Wellness strategies tailored to your pet's breed, age, and lifestyle."],
];

const facilities = [
  [
    "Reception Area",
    "A warm and welcoming space designed for comfort.",
    "Reception Area",
    "https://lh3.googleusercontent.com/aida/AP1WRLstm07UrrcNsl2iL9PVuiqf3SYI_1kiXMdXCHzp-IhokhMi7BAWOHdM7hqF7C3_lqb0-zbjXXwkg5gCu9_WMTBhj9cJssFPHQmJCfK4CwYeX0fq1E3YH6uuB7LTebu6RcSBm9AOHiIKXfsWtpkFgQrwaU36bk7PnMkkcy7gKdeHkJeY21NkoqMZuOyFWGf9z1kYKtNcJ1HltX6dTv1Pep5fvzkU5xxm7UKwyYJ7sNtfK7dwoyWjXUclB6tz",
  ],
  [
    "Exam Room",
    "Modern diagnostics in a fear-free clinical setting.",
    "Examination Room",
    "https://lh3.googleusercontent.com/aida/AP1WRLu8n2pgKiS32AsLBkSJP4oKkuOqL_noGj1Tyz1VYzTgq2_5ZHnDBqwxn30zFwlkvz3VOqH_YcUBw0yrDThWcYxlXAq7SWzNwD60sWHu3pEBEhgQQy_MUNEQ_iaAkSFD6xmrAAB6iMU3vRTnIV1sqXrfakPyvB3Jg1Dp_p8_xcnWmrQLydPt9pGyZybqmcOeeOepJiPZkR1loXZBThlTes6uidHaVqgQxOItcRJS_Pbrr4IgUKMj49pPh0U",
  ],
  [
    "Surgical Suite",
    "Advanced technology for precise and safe procedures.",
    "Surgical Suite",
    "https://lh3.googleusercontent.com/aida/AP1WRLvl9Lw9Jqd24nQMHcO_5pAjplyBfr0RV3YXS4BjF_NNzYdX-zWQ8yekAYDVNOFwHkKZzfutF_QjJuhuThQnNeiZHoiIzpuU92oTBLcs68oeOr7e0VnEDPW0T55a4zwnFrjk8IPAf--d507QlpGVy0rGZ6Xar2nhdsWX8IggbbqQ85coZ-chjh7tBpW1e9VhLh5D4XxdnjHss2XCKQhQ4OR0o-RKXhBFqJz6BY9vPjkwIcQXlV-Xxu77XRus",
  ],
  [
    "Boarding Area",
    "A safe and comfortable home away from home.",
    "Pet Boarding",
    "https://lh3.googleusercontent.com/aida/AP1WRLseK3bofexSvgJvdn7gyEJrV8lR3_Q1gHJQMyg2MzVABlj2944VdsUntmyjt6Tt23iEpjiWXRDT6WM0IxBYrCqg81y0i_YTmn943MrrWLA5_f5Szm2aVArH3Tm2OAqw87wnldTbrFzp9e0XWuVBHkDHiZnh4MhnNWzVG_jUb_jKt0CGcoUJs868F0-hgK8YR3M0A97k-HzqPYfohaxUte5cOX6-J_x-BlogtJMq2ZLPME8CesP177rfAy56",
  ],
];

const services = [
  ["health_metrics", "Wellness", "Routine exams and preventive care for all life stages."],
  ["vaccines", "Vaccines", "Essential immunization tailored to lifestyle."],
  ["dentistry", "Dental", "Professional cleaning and oral surgery."],
  ["microwave", "Diagnostics", "In-house bloodwork and imaging results."],
  ["medication", "Pharmacy", ""],
  ["radiology", "X-Ray", ""],
  ["nutrition", "Nutrition", ""],
  ["history_edu", "Microchipping", ""],
  ["potted_plant", "Hospice", ""],
];

const team = [
  [
    "Dr. Sarah Mitchell",
    "Chief Medical Officer",
    "Expert in senior pet care and orthopedic surgery with 22 years in practice.",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDIGJRcfSy0vpsMmHarG4TcFAy783nsmtvOsM3sU48IpBBJtTetIfh9XLWXOoox7LT193_ppDUk89_GEUic0-a1cEiaNOQPERTZVy6tCGFKeq-P8odww9U85Em0H18j-rT38Hm2ECncK1c3qAJmZKNQSptiD73SvOL2u6kDxnaH3uBivlSnpIeuCzRtFXJsBijquVa_QT-SHZd8ikMmZhOXcTgL5DpkKpyXe4AmRxlPYCjfjQV8CJynjC7Ftpil4LG4Xm9VOC8bEIES",
  ],
  [
    "Dr. James Okafor",
    "Lead Surgeon",
    "Specializing in soft tissue reconstruction and feline internal medicine.",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB4Bjz90oWgfmYOry5M-jfDf-R5z8YCdkmNw45LozmTqP8Q_5NxtRDvkrvbS5J1U86px3fHhjXRQhMCb1vJnNxJPQtj07so1liW-m2-hdlCWXrsHZBoAID-sRXeO0IOE6uy6EmAeYI38LExEV4zMJdgh41hbmVOo5f1UmgiLmSI3_aNzTZfZxSifDZYH-CdAwnN6209m9KfSnC_t725-LLeeoHWZkTXc1g_p0tZCoVypg8LwspF_eH2AJaeMDaOu-Dv2lEwCHqnIvaK",
  ],
  [
    "Dr. Priya Nair",
    "Dermatology Specialist",
    "World-renowned for treating chronic allergies and skin conditions in high-performance breeds.",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAzRHD-rOZYWkagNsKvDkZDU1XNKZZ-x3Rh4ELT1o2kgA6NGPCFdwcPbGANii9QnDVBXe7Z-LKTO9FER6smRTErCMCeXRW3ItVtG4j6xguzTZ86c-G1Agz7JKtiXBFda95nvQdzae4tQOhTfiHb4THzhBamj9DnLML5yo9vY2h47d-bOgBZZVNbLp2pK4SxQ1Y7AHAzh5OCxUj9f3TrfjaCahYpfkjzIoLZQxZS43poAICqqiPWlVsNfQB62DktLI3RBIC8DRbLTveo",
  ],
  [
    "Dr. Michael Chen",
    "ER & Critical Care",
    "Expert in feline emergency care and metabolic trauma management.",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBkO3mS6_QnCeAgbF5Jcgp6Ee_e-I8ivFFWczy-Y39kLGUwYu1_6rSdHuY94LH6VIy9q4TguHNmnpgt0O5c_riGYUrqSVuZbfL2vIsTKd3nyrNRCRY8a2MBkDQ7wUJLvG7jg6g7HYXxwtj-uZeGEJJTIyASnjpqZSq1YClGIoQCq4CsGgZRmkfipOpxN2LrIwRu_jUlILv6I3BrEh3iWEss2APjHBKfS9q2VSHuzOv2Z3hPxVrROivcUTDX-CcZ4gvTelazuk9Evz4G",
  ],
];

const plans = [
  ["Newcomer", "$89", "/visit", ["Comprehensive Exam", "Basic Vitals Check", "Core Vaccines"], "Select Plan", false],
  ["Wellness Plan", "$45", "/month", ["2 Comprehensive Exams", "All Core Vaccines", "10% Off Procedures"], "Sign Up Now", true],
  ["Senior Care", "$65", "/month", ["Quarterly Screenings", "Bloodwork Panels", "Mobility Support"], "Select Plan", false],
  ["Emergency", "$199", "/entry", ["Immediate Triage", "Critical Monitoring", "Specialist Consult"], "Contact ER", false],
] as const;

const testimonials = [
  ["Happy Paws saved my dog's life after a late-night accident. Dr. Mitchell and her team were incredible, kept me updated every hour. Truly the best clinic in the city.", "Elena Rodriguez", "Bella's Mom", "bg-primary-fixed"],
  ["The fear-free approach is real. My cat used to hide for days after a vet visit, but here she's calm and happy. I won't go anywhere else.", "Mark Thompson", "Luna's Dad", "bg-secondary-fixed"],
  ["Transparent pricing made it so much easier for us to plan for our senior dog's dental surgery. No surprises, just amazing care.", "Sarah Jenkins", "Max's Mom", "bg-tertiary-fixed"],
];

const articles = [
  ["pets", "Wellness", "Summer Safety: Keeping Your Dog Cool", "Learn the signs of heatstroke and how to provide shade and hydration during the peak of summer.", "from-primary-fixed/40 to-secondary-fixed/40"],
  ["nutrition", "Nutrition", "Grain-Free or Traditional Diet?", "We break down the latest veterinary research on grain-free diets for different breeds.", "from-tertiary-fixed/40 to-primary-fixed/40"],
];

const faqs = [
  ["How do I prepare for my first visit?", "Please bring any previous medical records and a list of current medications. Arrive 10 minutes early to fill out registration forms."],
  ["Do you offer financing plans?", "Yes, we accept CareCredit and Scratchpay for medical financing. We also offer monthly wellness plans."],
  ["What counts as an emergency?", "Difficulty breathing, severe bleeding, sudden inability to walk, or ingestion of toxic substances are immediate emergencies."],
];

function Logo({ small = false }: { small?: boolean }) {
  return (
    <div className="flex items-center gap-sm">
      <div className={classNames("flex rounded-full bg-primary text-secondary-container", small ? "h-8 w-8" : "h-10 w-10")}>
        <Icon name="pets" className={classNames("m-auto", small ? "text-[18px]" : "text-[22px]")} />
      </div>
      <span className="font-headline-md font-bold tracking-tight text-primary">Happy Paws</span>
    </div>
  );
}

function Navigation() {
  const isScrolled = useScrolledHeader();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <div className="hidden w-full items-center justify-between border-b border-primary-container/20 bg-primary px-margin-desktop py-2 text-label-sm text-on-primary md:flex">
        <div className="flex gap-md">
          <span className="flex items-center gap-xs"><Icon name="call" className="text-[16px]" /> (555) 123-4567</span>
          <span className="flex items-center gap-xs"><Icon name="schedule" className="text-[16px]" /> Mon-Sat: 8 AM-7 PM</span>
        </div>
        <span className="animate-pulse rounded-full bg-secondary-container px-3 py-1 font-bold text-on-secondary-container">
          24/7 Emergency Line
        </span>
      </div>
      <nav className={classNames("sticky top-0 z-50 w-full bg-surface/80 backdrop-blur-md transition-all duration-300", isScrolled && "shadow-lg")}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-margin-mobile py-4 md:px-margin-desktop">
          <a href="#home"><Logo /></a>
          <div className="hidden items-center gap-md lg:flex">
            {navItems.map(([label, href], index) => (
              <a
                className={classNames(
                  "font-label-md transition-colors hover:text-secondary",
                  index === 0 ? "border-b-2 border-primary pb-1 text-primary" : "text-on-surface-variant",
                )}
                href={href}
                key={label}
              >
                {label}
              </a>
            ))}
          </div>
          <Button className="hidden md:block" variant="secondary">Book an Appointment</Button>
          <button
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            className="text-primary lg:hidden"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            type="button"
          >
            <Icon name={isMobileMenuOpen ? "close" : "menu"} />
          </button>
        </div>
      </nav>
      <div
        className={classNames(
          "fixed inset-0 z-40 bg-primary/30 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          isMobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={closeMobileMenu}
      />
      <aside
        className={classNames(
          "fixed right-0 top-0 z-50 h-dvh w-[min(84vw,360px)] bg-surface px-margin-mobile py-6 shadow-2xl transition-transform duration-300 ease-out lg:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="mb-8 flex items-center justify-between">
          <Logo />
          <button aria-label="Close menu" className="text-primary" onClick={closeMobileMenu} type="button">
            <Icon name="close" />
          </button>
        </div>
        <div className="flex flex-col gap-1">
          {navItems.map(([label, href]) => (
            <a
              className="rounded-lg px-2 py-3 font-label-md text-primary transition-colors hover:bg-surface-container-low"
              href={href}
              key={label}
              onClick={closeMobileMenu}
            >
              {label}
            </a>
          ))}
          <Button className="mt-5 w-full" onClick={closeMobileMenu} variant="secondary">
            Book an Appointment
          </Button>
        </div>
      </aside>
    </>
  );
}

function Hero() {
  return (
    <header className="relative flex h-screen items-center justify-center overflow-hidden" id="home">
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full scale-105 bg-cover bg-center" style={{ backgroundImage: `url("${heroImage}")` }} />
        <div className="absolute inset-0 bg-primary/40 backdrop-brightness-50" />
      </div>
      <div className="relative z-10 mx-auto max-w-5xl px-margin-mobile text-center">
        <h1 className="mb-6 font-headline-xl-mobile leading-tight text-white md:font-headline-xl">
          Compassionate Care for Your <span className="text-secondary-container">Cats</span> and{" "}
          <span className="text-secondary-container">Dogs</span>, Every Step of the Way
        </h1>
        <p className="mx-auto mb-10 max-w-2xl font-body-lg text-white/90">
          From routine checkups to emergency care, our experienced veterinary team treats your pets like family.
        </p>
        <div className="flex flex-col items-center justify-center gap-md sm:flex-row">
          <Button className="w-full px-10 py-5 sm:w-auto" variant="secondary">Book an Appointment</Button>
          <Button className="flex w-full items-center justify-center gap-2 border-white/40 px-10 py-5 text-white backdrop-blur-sm hover:border-white sm:w-auto" variant="outline">
            <Icon name="call" /> Call Us Now
          </Button>
        </div>
      </div>
      <div className="absolute bottom-12 left-0 z-10 hidden w-full md:block">
        <div className="mx-auto flex max-w-7xl justify-between px-margin-desktop">
          {trustBadges.map(([name, label]) => (
            <div className="flex items-center gap-sm rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-white/80 backdrop-blur-md" key={label}>
              <Icon name={name} className="text-secondary-container" />
              <span className="text-label-md">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

function About() {
  const tilt = useTiltCard();

  return (
    <section className="relative bg-surface py-xl" id="about">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-xl px-margin-mobile md:grid-cols-2 md:px-margin-desktop">
        <div className="order-2 md:order-1">
          <span className="mb-4 block font-label-md uppercase tracking-widest text-secondary">Our Story</span>
          <h2 className="mb-6 font-headline-lg-mobile text-primary md:font-headline-lg">Expertise with a Heart</h2>
          <p className="mb-6 font-body-lg leading-relaxed text-on-surface-variant">
            At Happy Paws, we believe that pet healthcare is more than just clinical excellence. It is about the deep emotional bond between humans and their animal companions. Founded in 2009, our clinic has evolved into a sanctuary where state-of-the-art medical technology meets compassionate, fear-free care.
          </p>
          <p className="mb-8 font-body-md text-on-surface-variant">
            Our mission is to provide lifelong health and happiness for your pets through personalized wellness plans, advanced surgical precision, and a patient-first philosophy.
          </p>
          <div className="flex flex-wrap gap-sm">
            {["AAHA Accredited", "Fear-Free Certified"].map((label) => (
              <div className="flex items-center gap-2 rounded-lg border border-outline-variant bg-surface-container-low px-4 py-2 text-label-sm" key={label}>
                <Icon name="check_circle" className="text-sm text-primary" /> {label}
              </div>
            ))}
          </div>
        </div>
        <div className="relative order-1 md:order-2">
          <div className="tilt-card relative z-10 rotate-3 overflow-hidden rounded-2xl shadow-2xl" onMouseLeave={tilt.handleMouseLeave} onMouseMove={tilt.handleMouseMove}>
            <img className="aspect-[4/5] w-full object-cover" src={aboutImage} alt="Veterinarian holding a pet" />
            <div className="animate-float absolute right-6 top-6 rounded-full bg-secondary-container px-4 py-2 text-label-md font-bold text-on-secondary-container shadow-lg">
              6 Certified Vets
            </div>
          </div>
        </div>
      </div>
      <div className="mt-xl w-full overflow-hidden bg-primary py-lg">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-xl px-margin-mobile md:flex-row md:px-margin-desktop">
          {stats.map(([value, label]) => (
            <div className="text-center md:text-left" key={label}>
              <div className="mb-1 font-headline-lg font-bold text-secondary-container">{value}</div>
              <div className="font-label-md uppercase tracking-wider text-primary-fixed">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="bg-surface-container-low py-xl">
      <div className="mx-auto max-w-7xl px-margin-mobile md:px-margin-desktop">
        <SectionHeader title="Why Pet Parents Trust Us" />
        <div className="grid grid-cols-1 gap-md md:grid-cols-2 lg:grid-cols-3">
          {reasons.map(([iconName, title, text]) => (
            <Card className="p-xl transition-all hover:border-secondary" tilt key={title}>
              <Icon name={iconName} className="mb-6 text-4xl text-secondary" />
              <h3 className="mb-4 font-headline-md text-primary">{title}</h3>
              <p className="text-on-surface-variant">{text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Facilities() {
  const carousel = useAutoCarousel(facilities.length);

  return (
    <section className="bg-background py-xl" id="facilities">
      <div className="mx-auto max-w-7xl px-margin-mobile md:px-margin-desktop">
        <SectionHeader
          accent="primary"
          description="Discover the state-of-the-art clinical environment where your pets receive the highest standard of compassionate care."
          eyebrow="World-Class Environment"
          title="Our Facilities"
        />
        <div className="group relative" onMouseEnter={() => carousel.setIsPaused(true)} onMouseLeave={() => carousel.setIsPaused(false)}>
          <div ref={carousel.carouselRef} className="no-scrollbar flex cursor-grab snap-x snap-mandatory gap-gutter overflow-x-auto scroll-smooth pb-8 active:cursor-grabbing">
            {facilities.map(([title, description, alt, image]) => (
              <div className="carousel-item snap-center" key={title}>
                <div className="group/card relative aspect-[16/9] overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl">
                  <img alt={alt} className="h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-110" src={image} />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-primary/90 via-transparent to-transparent p-xl opacity-80 transition-opacity duration-500 md:opacity-0 md:group-hover/card:opacity-100">
                    <div className="translate-y-0 transition-transform duration-500 md:translate-y-4 md:group-hover/card:translate-y-0">
                      <h4 className="font-headline-md text-white">{title}</h4>
                      <p className="mt-2 text-sm text-white/80">{description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {(["left", "right"] as const).map((direction) => (
            <button
              className={classNames(
                "absolute top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary opacity-0 shadow-xl transition-all hover:bg-primary hover:text-white group-hover:opacity-100",
                direction === "left" ? "left-4" : "right-4",
              )}
              key={direction}
              onClick={() => carousel.handleManualInteraction(() => carousel.scrollCarousel(direction))}
              type="button"
            >
              <Icon name={direction === "left" ? "chevron_left" : "chevron_right"} />
            </button>
          ))}
          <div className="mt-4 flex justify-center gap-2">
            {facilities.map(([title], index) => (
              <button
                className={classNames("h-2.5 rounded-full transition-all duration-300", carousel.activeIndex === index ? "w-6 bg-primary" : "w-2.5 bg-outline-variant")}
                key={title}
                onClick={() => carousel.handleManualInteraction(() => carousel.scrollToIndex(index))}
                type="button"
                aria-label={`Go to ${title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="py-xl" id="services">
      <div className="mx-auto max-w-7xl px-margin-mobile md:px-margin-desktop">
        <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div>
            <span className="mb-4 block font-label-md uppercase tracking-widest text-secondary">Medical Specialties</span>
            <h2 className="font-headline-lg text-primary">Comprehensive Pet Services</h2>
          </div>
          <Button className="flex items-center gap-2 px-0 hover:gap-4" variant="ghost">View All Services <Icon name="arrow_forward" /></Button>
        </div>
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-4">
          <div className="group relative overflow-hidden rounded-2xl bg-primary p-xl text-white md:col-span-2">
            <div className="relative z-10">
              <Icon name="emergency_home" className="mb-6 text-5xl text-secondary-container" />
              <h3 className="mb-4 font-headline-md">Emergency Care</h3>
              <p className="mb-8 max-w-md text-white/80">Immediate critical care for life-threatening injuries or illnesses. Our ER team is ready 24/7 to provide life-saving intervention.</p>
              <Button variant="secondary">Learn More</Button>
            </div>
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-secondary/10 transition-transform duration-700 group-hover:scale-150" />
          </div>
          {services.slice(0, 3).map(([iconName, title, text]) => <ServiceCard iconName={iconName} title={title} text={text} key={title} />)}
          <div className="group relative overflow-hidden rounded-2xl bg-secondary-container p-xl text-on-secondary-container md:col-span-2">
            <div className="relative z-10">
              <Icon name="surgical" className="mb-6 text-5xl text-primary" />
              <h3 className="mb-4 font-headline-md">Advanced Surgery</h3>
              <p className="mb-8 max-w-md text-on-secondary-fixed-variant">From soft tissue to orthopedic procedures, our surgeons use the latest minimally invasive techniques.</p>
              <Button>View Facilities</Button>
            </div>
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-primary/10 transition-transform duration-700 group-hover:scale-150" />
          </div>
          {services.slice(3).map(([iconName, title, text]) => <ServiceCard iconName={iconName} title={title} text={text} key={title} />)}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ iconName, title, text }: { iconName: string; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-outline-variant/20 bg-mist p-xl transition-all hover:shadow-xl">
      <Icon name={iconName} className="mb-6 text-3xl text-primary" />
      <h4 className="mb-2 font-headline-md text-primary">{title}</h4>
      {text ? <p className="text-sm text-on-surface-variant">{text}</p> : null}
    </div>
  );
}

function Team() {
  return (
    <section className="relative overflow-hidden bg-primary py-xl" id="team">
      <div className="relative z-10 mx-auto max-w-7xl px-margin-mobile md:px-margin-desktop">
        <SectionHeader eyebrow="Meet Our Experts" inverse title="Our Dedicated Caregivers" />
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-4">
          {team.map(([name, role, bio, image]) => <Profile bio={bio} image={image} key={name} name={name} role={role} />)}
        </div>
      </div>
    </section>
  );
}

function PricingAndTestimonials() {
  return (
    <section className="overflow-hidden bg-surface-container-low py-xl" id="pricing">
      <div className="mx-auto max-w-7xl px-margin-mobile md:px-margin-desktop">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-headline-lg text-primary">Simple, Transparent Pricing</h2>
          <p className="text-on-surface-variant">Quality care should not come with hidden costs.</p>
        </div>
        <div className="mb-xl grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-4">
          {plans.map(([name, price, suffix, features, action, featured]) => (
            <div className={classNames("relative flex flex-col rounded-2xl p-xl", featured ? "z-10 scale-105 bg-primary text-white shadow-2xl" : "border border-outline-variant/30 bg-surface")} key={name}>
              {featured ? <div className="absolute right-10 top-0 -translate-y-1/2 rounded-full bg-secondary-container px-4 py-1 text-xs font-bold uppercase text-on-secondary-container">Popular</div> : null}
              <h4 className={classNames("mb-2 font-headline-md", featured ? "text-secondary-container" : "text-primary")}>{name}</h4>
              <div className={classNames("mb-6 text-4xl font-bold", featured ? "" : "text-primary")}>{price}<span className={classNames("text-label-sm font-normal", featured ? "text-white/70" : "text-on-surface-variant")}>{suffix}</span></div>
              <ul className="mb-10 flex-grow space-y-4">
                {features.map((feature) => (
                  <li className="flex items-center gap-2 text-sm" key={feature}>
                    <Icon name="check" className={classNames("text-[18px]", featured ? "text-secondary-container" : "text-primary")} /> {feature}
                  </li>
                ))}
              </ul>
              <Button variant={featured ? "secondary" : "outline"} className="w-full">{action}</Button>
            </div>
          ))}
        </div>
        <div className="relative mt-xl" id="testimonials">
          <div className="no-scrollbar flex snap-x gap-gutter overflow-x-auto pb-12">
            {testimonials.map(([quote, name, role, color]) => (
              <div className="min-w-[350px] snap-center rounded-2xl bg-mist p-xl md:min-w-[500px]" key={name}>
                <div className="mb-6 flex text-secondary-container">{Array.from({ length: 5 }, (_, index) => <Icon name="star" key={index} />)}</div>
                <p className="mb-6 font-body-lg italic text-primary">&quot;{quote}&quot;</p>
                <div className="flex items-center gap-sm">
                  <div className={`h-12 w-12 rounded-full ${color}`} />
                  <div>
                    <h5 className="font-label-md text-primary">{name}</h5>
                    <p className="text-label-sm text-on-surface-variant">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InsightsAndFaq() {
  return (
    <section className="py-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-xl px-margin-mobile md:px-margin-desktop lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="mb-12 font-headline-lg text-primary">Pet Care Insights</h2>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
            {articles.map(([iconName, category, title, text, gradient]) => (
              <div className="group cursor-pointer" key={title}>
                <div className="relative mb-6 h-48 overflow-hidden rounded-2xl bg-mist">
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
                  <div className="absolute inset-0 flex items-center justify-center opacity-40 transition-transform group-hover:scale-110">
                    <Icon name={iconName} className="text-7xl text-primary" />
                  </div>
                </div>
                <span className="mb-2 block font-label-sm text-secondary">{category}</span>
                <h4 className="mb-4 font-headline-md text-primary transition-colors group-hover:text-secondary">{title}</h4>
                <p className="line-clamp-2 text-sm text-on-surface-variant">{text}</p>
              </div>
            ))}
          </div>
          <Button className="mt-12 border border-outline-variant bg-mist text-primary hover:bg-white" variant="ghost">Read More Articles</Button>
        </div>
        <div className="h-fit rounded-2xl bg-surface-container-low p-xl">
          <h3 className="mb-8 font-headline-md text-primary">Frequently Asked</h3>
          <div className="space-y-6">
            {faqs.map(([question, answer], index) => (
              <div key={question}>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-label-md text-primary">
                    {question}
                    <Icon name="expand_more" className="transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-sm text-on-surface-variant">{answer}</p>
                </details>
                {index < faqs.length - 1 ? <div className="mt-6 h-px bg-outline-variant/30" /> : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="relative overflow-hidden bg-surface py-xl" id="contact">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-xl px-margin-mobile md:px-margin-desktop lg:grid-cols-2">
        <div className="rounded-2xl border border-outline-variant/20 bg-white p-xl shadow-xl">
          <h3 className="mb-8 font-headline-lg text-primary">Request an Appointment</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-md md:grid-cols-2">
              <Field label="Your Name" />
              <Field label="Pet Name" />
            </div>
            <label className="block">
              <span className="mb-2 block text-label-sm text-on-surface-variant">Service Needed</span>
              <select className="w-full rounded-xl border-none bg-mist p-4 transition-all focus:ring-2 focus:ring-primary">
                <option>Wellness Exam</option>
                <option>Vaccination</option>
                <option>Surgery Consult</option>
                <option>Dental Checkup</option>
              </select>
            </label>
            <label className="block">
              <span className="mb-2 block text-label-sm text-on-surface-variant">Message (Optional)</span>
              <textarea className="w-full rounded-xl border-none bg-mist p-4 transition-all focus:ring-2 focus:ring-primary" rows={4} />
            </label>
            <Button className="w-full py-4">Send Request</Button>
          </form>
        </div>
        <div className="rounded-2xl bg-primary p-xl text-white">
          <h3 className="mb-8 font-headline-md">Clinic Information</h3>
          <div className="space-y-6">
            <ContactInfo iconName="location_on" title="Main Clinic" lines={["123 Pet Lane, Healthville, ST 54321"]} />
            <ContactInfo iconName="call" title="Contact Numbers" lines={["Main: (555) 123-4567", "ER Line: (555) 999-0000"]} highlightLast />
            <ContactInfo iconName="mail" title="Email Support" lines={["care@happypaws.com"]} />
          </div>
          <div className="relative mt-10 h-48 overflow-hidden rounded-xl bg-white/10">
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
              <Icon name="map" className="text-6xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label }: { label: string }) {
  return (
    <label className="block">
      <span className="mb-2 block text-label-sm text-on-surface-variant">{label}</span>
      <input className="w-full rounded-xl border-none bg-mist p-4 transition-all focus:ring-2 focus:ring-primary" type="text" />
    </label>
  );
}

function ContactInfo({ iconName, title, lines, highlightLast = false }: { iconName: string; title: string; lines: string[]; highlightLast?: boolean }) {
  return (
    <div className="flex items-start gap-md">
      <Icon name={iconName} className="text-secondary-container" />
      <div>
        <h5 className="font-label-md">{title}</h5>
        {lines.map((line, index) => (
          <p className={highlightLast && index === lines.length - 1 ? "font-bold text-secondary-container" : "text-white/70"} key={line}>{line}</p>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-surface-container-low pb-10 pt-xl">
      <div className="relative z-10 mx-auto max-w-7xl px-margin-mobile md:px-margin-desktop">
        <div className="mb-16 grid grid-cols-1 gap-xl md:grid-cols-4">
          <div>
            <div className="mb-6"><Logo small /></div>
            <p className="mb-8 text-sm text-on-surface-variant">Providing professional warmth and expert clinical care for your pets since 2009.</p>
            <div className="flex gap-md">
              {["public", "thumb_up"].map((name) => (
                <a className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-all hover:bg-secondary" href="#" key={name}>
                  <Icon name={name} className="text-[20px]" />
                </a>
              ))}
            </div>
          </div>
          <FooterLinks title="Quick Links" links={["Home", "About Us", "Our Vets", "Testimonials"]} />
          <FooterLinks title="Services" links={["Wellness Plans", "Emergency Care", "Surgical Excellence", "Dental Hygiene"]} />
          <div>
            <h5 className="mb-6 font-label-md text-primary">Newsletter</h5>
            <p className="mb-4 text-sm text-on-surface-variant">Get monthly pet care tips delivered to your inbox.</p>
            <div className="flex gap-2">
              <input className="w-full rounded-full border border-outline-variant bg-white px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-primary" placeholder="Email Address" type="email" />
              <button className="flex items-center justify-center rounded-full bg-primary p-2 text-white" type="button">
                <Icon name="arrow_forward" className="text-[20px]" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-md border-t border-outline-variant pt-10 text-label-sm text-on-surface-variant md:flex-row">
          <span>© 2024 Happy Paws Veterinary Clinic. All rights reserved.</span>
          <div className="flex gap-md">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => <a className="hover:text-primary" href="#" key={link}>{link}</a>)}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h5 className="mb-6 font-label-md text-primary">{title}</h5>
      <ul className="space-y-4 text-sm text-on-surface-variant">
        {links.map((link) => <li key={link}><a className="transition-colors hover:text-secondary" href="#">{link}</a></li>)}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <WhyChooseUs />
      <Facilities />
      <Services />
      <Team />
      <PricingAndTestimonials />
      <InsightsAndFaq />
      <Contact />
      <Footer />
    </>
  );
}
