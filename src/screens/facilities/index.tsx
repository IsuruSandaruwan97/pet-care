"use client";

import {
  Button,
  Icon,
  Reveal,
  Section,
  Stagger,
} from "@/components/atoms";
import { Footer, Header } from "@/components/organisms";
import type { MouseEvent } from "react";
import Image from "next/image";
import "./styles.css";

const images = {
  reception:
    "https://lh3.googleusercontent.com/aida/AP1WRLu7l29Hxd1Cs8rogz9asH1BVVke0QjKVJCNOUiYJNqbQkvyOoF0SmhxDCnuoFPEmVFXJyukgrNrHkI9dDIsto5RFW9os7dvb_kzqk64nVA3kJc0j5hGPuqb479G-gDIBKkyQXCBlvsT6aRvn2SuceTjoM7n1dviD4TDnLpaImSvx6aQNMsmiCDZ-ohDdTcy5JwjZ2izxuJFFilwwqZ_aELTMqh9SCeLfOZAVv4MPaTqUVdflObOC9EjeXgg",
  exam:
    "https://lh3.googleusercontent.com/aida/AP1WRLuYvY3QZByAeW63RCQYFDtpJV_-c0QVQ3VyuYPbhj-eeJbws5-dV4BNsTLAhv1ynrDRs0NiCYgEG3p-bXrxnoc8IfYctk9MIE67ew-VCAeEbPMlAHZ-WSus0mk-8eNBLzzQt351BfcC6P9Em9UlhWm1lAW969HRy_DeXWEnopJWSUnlkefy9FYsHwiHMOJ1hY-k3k-_IhHidSm9JmQhY78FKRZrjlKUhZs65zxlX0bY6n35rpp2IUPzUXw",
  surgery:
    "https://lh3.googleusercontent.com/aida/AP1WRLv2asYItA-zVmYQF24QI5Q0QT6xjwqb9JJdKIUMm91zNrJ_4wb4EDezrlhKFfD90F3RDWubrM9AcC4YlQtFCUanUjMXYwfeW-31xsze21KuaF41QWPWuh1fBr5ktd51nTqAiSNdluiY6NlPbQm-eAPXtlLSSbaVs004VRoeTZUZ-wLNXdNeIzheT19O4Px0qKeN0pQZGfxnhewubLZWKnE3Zf5g_b5yN6xwT_JY5AeXl1sl7lgz2FInu9XC",
  boarding:
    "https://lh3.googleusercontent.com/aida/AP1WRLsRfZSXtMgquP8u0lNMKHvDdmnEA6PJQpBCJbZ8APA-esmfLcDqPGhPnWKwXB58xuXkFbJvTYEdZkGiJpfuYyJP2MHPDvk_G10IYn8RmgBSK2mH1QesFh778faN8H2I3znrzMUni0Kgp6xaxKeBoMfn12nMZqKlfXHK2v_DZX0-TEYgFRJWNWpiSPzA4bP-hQpNGnbYRoAuxWpe3B-JbRhsbGxChEfGhwLAXacjeal3uO5xwUgMmLutyozf",
};

const principles = [
  {
    icon: "auto_awesome",
    title: "Biophilic Design",
    text: "Integrating nature, soft light, and warm materials to soothe animal instincts.",
  },
  {
    icon: "science",
    title: "Climate Controlled",
    text: "Precise air filtration and temperature control for safer recovery and comfort.",
  },
] as const;

const facilityCards = [
  {
    title: "Reception & Waiting",
    badge: "Stress-Free Zone",
    image: images.reception,
    alt: "Happy Paws reception and waiting area",
    text: "Our greeting area features acoustic dampening and species-specific seating to ensure a calm transition from car to clinic. Soft wood textures and natural light create a welcoming lounge experience for both you and your pet.",
    features: ["Separated cat/dog zones", "Refreshment station"],
  },
  {
    title: "Advanced Exam Rooms",
    badge: "Calm Interiors",
    image: images.exam,
    alt: "Advanced veterinary exam room",
    text: "Featuring calming sage green walls proven to reduce animal anxiety, our exam rooms are equipped with integrated digital diagnostics. Everything is designed to keep the vet and pet together for less separation stress.",
    features: ["Smart monitor integration", "Non-slip tables"],
  },
  {
    title: "Surgical Suite",
    badge: "High-Tech Sterile",
    image: images.surgery,
    alt: "Modern veterinary surgical suite",
    text: "Our surgical theatre meets the highest human-grade sterility standards. Equipped with advanced anesthetic monitoring and precision laser surgery tools for faster recovery times and less pain.",
    features: ["Oxygen-controlled air", "Multi-parameter monitoring"],
  },
  {
    title: "Comfort Boarding",
    badge: "Home-Like Cozy",
    image: images.boarding,
    alt: "Comfortable pet boarding room",
    text: "Spacious, private kennels featuring orthopaedic bedding and soft ambient lighting. Our overnight stays are supervised by medically trained staff who provide the warmth of home with the safety of a clinic.",
    features: ["Sound-dampened walls", "Webcam access for owners"],
  },
] as const;

export function Facilities() {
  const handleFacilityCardMove = (event: MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleFacilityCardLeave = (event: MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <div className="hp-page hp-facilities-page">
      <Header />
      <main>
        <Section className="hp-facilities-hero">
          <Image
            alt="Happy Paws reception"
            className="hp-facilities-hero-image"
            fill
            priority
            sizes="100vw"
            src={images.reception}
          />
          <div className="hp-facilities-hero-overlay" />
          <div className="hp-container hp-facilities-hero-content">
            <Reveal>
              <span className="hp-facilities-kicker">Excellence in Care</span>
              <h1>A World-Class Environment for World-Class Care</h1>
              <p>
                Discover our purpose-built veterinary facility designed with
                your pet's emotional and physical well-being as our highest
                priority.
              </p>
              <div className="hp-facilities-hero-actions">
                <Button href="#facility-spaces" variant="secondary">
                  Explore Spaces
                </Button>
                <Button href="#virtual-tour" variant="outline">
                  <Icon name="videocam" className="hp-facilities-leading-icon" />
                  Virtual Tour
                </Button>
              </div>
            </Reveal>
          </div>
        </Section>

        <Section className="hp-facilities-philosophy">
          <div className="hp-container hp-facilities-philosophy-grid">
            <Reveal className="hp-facilities-philosophy-copy">
              <h2>Built for Better Healing</h2>
              <p>
                At Happy Paws, we believe the environment is a crucial component
                of the healing process. Our facility isn't just about high-tech
                equipment; it's about creating a Fear-Free atmosphere that
                minimizes stress for our patients.
              </p>
              <div className="hp-facilities-principles">
                {principles.map((principle) => (
                  <article key={principle.title}>
                    <Icon name={principle.icon} />
                    <h3>{principle.title}</h3>
                    <p>{principle.text}</p>
                  </article>
                ))}
              </div>
            </Reveal>
            <Reveal className="hp-facilities-philosophy-media" delay={0.1}>
              <div>
                <strong>0%</strong>
                <span>Patient stress policy implementation in all design choices.</span>
              </div>
            </Reveal>
          </div>
        </Section>

        <section className="hp-facilities-extract" id="facility-spaces">
          <div className="hp-facilities-extract-head">
            <h2>Designed for Every Need</h2>
            <p>
              From the first moment you walk in to the most advanced surgical
              procedures, our clinic is optimized for safety, precision, and
              comfort.
            </p>
          </div>
          <div className="hp-facilities-extract-grid">
            {facilityCards.map((facility) => (
              <div
                className="hp-facilities-extract-card"
                key={facility.title}
                onMouseLeave={handleFacilityCardLeave}
                onMouseMove={handleFacilityCardMove}
              >
                <div className="hp-facilities-extract-image">
                  <img alt={facility.alt} src={facility.image} />
                </div>
                <div className="hp-facilities-extract-body">
                  <div className="hp-facilities-extract-title">
                    <h3>{facility.title}</h3>
                    <span>{facility.badge}</span>
                  </div>
                  <p>{facility.text}</p>
                  <ul>
                    {facility.features.map((feature) => (
                      <li key={feature}>
                        <span className="material-symbols-outlined">
                          check_circle
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Section className="hp-facilities-final" id="virtual-tour">
          <div className="hp-container">
            <div className="hp-facilities-final-card">
              <h2>Experience the Difference in Person</h2>
              <p>
                We invite you to take a tour of our facilities or schedule your
                pet's next wellness check in an environment designed
                specifically for their happiness.
              </p>
              <div>
                <Button href="/#contact" variant="secondary">
                  Book an Appointment
                  <Icon name="calendar_month" />
                </Button>
                <Button href="/#contact" variant="outline">
                  Take a Virtual Tour
                  <Icon name="videocam" />
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
