"use client";

import {
  Button,
  Icon,
  MotionCard,
  Reveal,
  Section,
  Stagger,
  PawMark,
} from "@/components/atoms";
import { Footer, Header } from "@/components/organisms";
import { pricing } from "@/data";
import { classNames } from "@/utils";
import Image from "next/image";
import "./styles.css";

const trustItems = [
  ["verified_user", "AAHA-style care standards"],
  ["schedule", "Open 7 days a week"],
  ["favorite", "Fear-free handling"],
] as const;

const wellnessImage = "/api/media/wellness";

export const bentoServices = [
  {
    id: "wellness",
    icon: "favorite",
    title: "Wellness Exams",
    text: "Preventative care is the cornerstone of a long, happy life. Our comprehensive wellness exams include physical assessment, nutritional counseling, and lifestyle-based health planning tailored for your pet.",
    tone: "feature",
    image: wellnessImage,
  },
  {
    id: "emergency",
    icon: "emergency",
    title: "Emergency Care",
    text: "Critical situations require immediate action. We provide priority emergency triage during clinic hours.",
    tone: "urgent",
  },
  {
    id: "diagnostics",
    icon: "biotech",
    title: "Advanced Diagnostics",
    text: "In-house lab, digital X-rays, and ultrasound for rapid results and accurate diagnosis.",
    tone: "compact",
  },
  {
    id: "vaccinations",
    icon: "vaccines",
    title: "Vaccinations",
    text: "Core and lifestyle vaccines to protect against rabies, distemper, and common regional threats.",
    tone: "compact",
  },
  {
    id: "surgery",
    icon: "medication",
    title: "Surgical Suite",
    text: "From routine spay/neuter to complex soft tissue surgeries performed by experienced hands.",
    tone: "compact",
  },
  {
    id: "dental",
    icon: "dentistry",
    title: "Dental Health",
    text: "Professional cleaning, extractions, and oral health assessments for fresh breath and pain-free eating.",
    tone: "compact",
  },
  {
    id: "virtual-consults",
    icon: "videocam",
    title: "Virtual Consults",
    text: "Can't make it to the clinic? Our telehealth service allows for initial screenings and follow-ups from the comfort of your home.",
    tone: "wide",
    badge: "New Service",
    features: [
      ["videocam", "HD Video"],
      ["chat", "Direct Chat"],
    ],
  },
  {
    id: "grooming",
    icon: "content_cut",
    title: "Grooming",
    text: "Therapeutic baths, breed-specific clips, and nail trims for the well-kept companion.",
    tone: "small",
  },
  {
    id: "boarding",
    icon: "hotel",
    title: "Boarding",
    text: "A safe, medically-supervised home away from home with plenty of love and playtime.",
    tone: "small",
  },
  {
    id: "senior-care",
    icon: "elderly",
    title: "Senior Care",
    text: "Specialized monitoring and pain management for our aging friends to ensure comfort.",
    tone: "small",
  },
  {
    id: "nutrition",
    icon: "restaurant",
    title: "Nutrition",
    text: "Custom diet plans and prescription foods to manage allergies, weight, and chronic illness.",
    tone: "small",
  },
  {
    id: "microchipping",
    icon: "qr_code_2",
    title: "Microchipping",
    text: "Permanent identification for peace of mind. A simple, painless procedure.",
    tone: "accent",
  },
  {
    id: "pharmacy",
    icon: "pill",
    title: "In-House Pharmacy",
    text: "Quick access to prescription medications and heartworm preventatives.",
    tone: "pharmacy",
  },
] as const;

export function Services() {
  return (
    <div className="hp-page hp-services-page">
      <Header />
      <main>
        <Section className="hp-services-hero">
          <PawMark className="hp-services-hero-paw" />
          <div className="hp-container hp-services-hero-inner">
            <Reveal className="hp-services-hero-copy">
              <span className="hp-services-kicker">
                <Icon name="verified_user" />
                Compassionate Care
              </span>
              <h1>Expert Veterinary Care for Every Stage of Life</h1>
              <p>
                From routine wellness checkups to urgent support, diagnostics,
                surgery, grooming, and boarding, Happy Paws keeps your pet's
                care connected under one warm, professional roof.
              </p>
              <div className="hp-services-hero-actions">
                <Button href="/#contact">Book an Appointment</Button>
                <Button href="#service-list" variant="outline">
                  View Services
                </Button>
              </div>
            </Reveal>
          </div>
        </Section>

        <Section className="hp-services-section" id="service-list">
          <div className="hp-container">
            <Reveal className="hp-services-heading">
              <span className="hp-eyebrow">Services</span>
              <h2>Full-Service Care for Cats and Dogs</h2>
              <p>
                A focused overview of the clinical, everyday, and urgent care
                services available through our team.
              </p>
            </Reveal>

            <Stagger className="hp-services-bento">
              {bentoServices.map((service) => (
                <MotionCard
                  className={classNames(
                    "hp-services-card",
                    `hp-services-card-${service.tone}`,
                  )}
                  key={service.id}
                >
                  <div className="hp-services-card-copy" id={service.id}>
                    {"badge" in service ? (
                      <span className="hp-services-new-badge">
                        {service.badge}
                      </span>
                    ) : service.tone === "accent" ||
                      service.tone === "pharmacy" ? null : (
                      <Icon name={service.icon} />
                    )}
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    {"features" in service ? (
                      <div className="hp-services-feature-list">
                        {service.features.map(([icon, label]) => (
                          <span key={label}>
                            <Icon name={icon} />
                            {label}
                          </span>
                        ))}
                      </div>
                    ) : null}
                    {service.tone === "feature" ? (
                      <a className="hp-services-learn" href="/#contact">
                        <span>Learn more</span>
                        <Icon name="arrow_forward" />
                      </a>
                    ) : null}
                  </div>
                  {"image" in service ? (
                    <div className="hp-services-card-visual">
                      <Image
                        alt="A veterinarian softly examining a golden retriever in a warm modern clinic."
                        className="hp-services-card-image"
                        fill
                        sizes="(max-width: 720px) 100vw, (max-width: 1020px) 50vw, 33vw"
                        src={service.image}
                      />
                    </div>
                  ) : null}
                  {service.tone === "urgent" ? (
                    <a className="hp-services-call" href="tel:+15551234567">
                      Call Now: (555) PAW-HELP
                    </a>
                  ) : null}
                  {service.tone === "wide" ? (
                    <div
                      className="hp-services-virtual-visual"
                      aria-hidden="true"
                    >
                      <Icon name="laptop_mac" />
                    </div>
                  ) : null}
                  {service.tone === "accent" || service.tone === "pharmacy" ? (
                    <div className="hp-services-accent-icon" aria-hidden="true">
                      <Icon name={service.icon} />
                    </div>
                  ) : null}
                </MotionCard>
              ))}
            </Stagger>
          </div>
        </Section>

        <Section className="hp-services-plans" id="wellness-plans">
          <div className="hp-container">
            <Reveal className="hp-services-heading hp-services-heading-inverse">
              <span className="hp-eyebrow">Wellness Plans</span>
              <h2>Simple options for common care needs</h2>
              <p>
                These are starting points. We customize every plan after we know
                your pet's age, lifestyle, and medical history.
              </p>
            </Reveal>
            <Stagger className="hp-services-plan-grid">
              {pricing
                .slice(0, 3)
                .map(([emoji, name, price, per, features]) => (
                  <MotionCard className="hp-services-plan" key={name}>
                    <div className="hp-services-plan-icon">{emoji}</div>
                    <h3>{name}</h3>
                    <div className="hp-services-plan-price">
                      {price}
                      <span>{per}</span>
                    </div>
                    <ul>
                      {features.slice(0, 4).map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </MotionCard>
                ))}
            </Stagger>
          </div>
        </Section>

        <Section className="hp-services-cta">
          <div className="hp-container hp-services-cta-inner">
            <Reveal>
              <h2>Ready to prioritize your pet's health?</h2>
              <p>
                Secure your preferred appointment time and let our team guide
                the next step.
              </p>
              <div className="hp-services-cta-actions">
                <Button href="/#contact">Book an Appointment</Button>
                <Button href="/#pricing" variant="outline">
                  View Wellness Plans
                </Button>
              </div>
            </Reveal>
            <div className="hp-services-trust">
              {trustItems.map(([icon, label]) => (
                <span key={label}>
                  <Icon name={icon} />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
