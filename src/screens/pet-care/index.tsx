"use client";

import {
  Button,
  Icon,
  MotionCard,
  PawMark,
  Reveal,
  Section,
  Stagger,
} from "@/components/atoms";
import { Footer, Header } from "@/components/organisms";
import Image from "next/image";
import "./styles.css";

const heroImage = "/api/media/pet-care";

const featuredGuides = [
  {
    icon: "favorite",
    title: "5 Signs Your Pet May Be in Pain",
    text: "Subtle behavior changes, hiding, appetite shifts, and mobility issues can be early signs that your pet needs a checkup.",
    tag: "Health",
  },
  {
    icon: "vaccines",
    title: "Puppy and Kitten Vaccine Timeline",
    text: "A clear month-by-month guide to core vaccines, parasite prevention, and first-year wellness visits.",
    tag: "New Pets",
  },
  {
    icon: "nutrition",
    title: "Choosing Food by Life Stage",
    text: "What to look for in puppy, adult, senior, weight-control, and sensitive-stomach diets.",
    tag: "Nutrition",
  },
] as const;

const careTopics = [
  [
    "dentistry",
    "Dental Care",
    "Bad breath, gum redness, and chewing changes can signal oral pain.",
  ],
  [
    "restaurant",
    "Healthy Weight",
    "Simple body-condition checks help prevent diabetes and joint strain.",
  ],
  [
    "elderly",
    "Senior Pets",
    "Older pets benefit from twice-yearly checks and early lab screening.",
  ],
  [
    "content_cut",
    "Grooming",
    "Skin, coat, nails, and ears all give clues about overall health.",
  ],
  [
    "qr_code_2",
    "Safety",
    "Microchips, ID tags, and safe routines help pets find their way home.",
  ],
  [
    "emergency",
    "Urgent Signs",
    "Know when vomiting, breathing changes, or collapse needs immediate care.",
  ],
] as const;

const seasonalChecklist = [
  "Refresh flea, tick, and heartworm prevention before peak season.",
  "Check paws after hot pavement, long walks, or wet weather.",
  "Keep vaccines and boarding records ready before travel.",
  "Watch food portions when routines change during holidays.",
] as const;

const emergencySigns = [
  "Trouble breathing or repeated coughing",
  "Repeated vomiting or diarrhea",
  "Collapse, seizures, or extreme weakness",
  "Bloated abdomen or unproductive retching",
] as const;

export function PetCare() {
  return (
    <div className="hp-page hp-pet-care-page">
      <Header />
      <main>
        <Section className="hp-pet-care-hero">
          <PawMark className="hp-pet-care-hero-paw" />
          <div className="hp-container hp-pet-care-hero-grid">
            <Reveal className="hp-pet-care-hero-copy">
              <span className="hp-pet-care-kicker">
                <Icon name="verified" />
                Vet-Guided Pet Care
              </span>
              <h1>Practical advice for healthier cats and dogs.</h1>
              <p>
                Clear, clinic-tested guidance from the Happy Paws team, built to
                help you spot concerns early, plan preventive care, and make
                confident everyday decisions for your pet.
              </p>
              <div className="hp-pet-care-actions">
                <Button href="#guides">Browse Guides</Button>
                <Button href="/#contact" variant="outline">
                  Ask a Vet
                </Button>
              </div>
            </Reveal>
            <Reveal className="hp-pet-care-hero-media" delay={0.1}>
              <Image
                alt="A veterinarian gently examining a healthy dog in a warm clinic."
                fill
                priority
                sizes="(max-width: 900px) 100vw, 45vw"
                src={heroImage}
              />
              <div className="hp-pet-care-hero-card">
                <Icon name="ecg_heart" />
                <span>Early care prevents bigger problems.</span>
              </div>
            </Reveal>
          </div>
        </Section>

        <Section className="hp-pet-care-guides" id="guides">
          <div className="hp-container">
            <Reveal className="hp-pet-care-section-head">
              <span className="hp-eyebrow">Featured Guides</span>
              <h2>Start with the questions pet parents ask most.</h2>
            </Reveal>
            <Stagger className="hp-pet-care-featured-grid">
              {featuredGuides.map((guide) => (
                <MotionCard
                  className="hp-pet-care-featured-card"
                  key={guide.title}
                >
                  <div>
                    <Icon name={guide.icon} />
                    <span>{guide.tag}</span>
                  </div>
                  <h3>{guide.title}</h3>
                  <p>{guide.text}</p>
                  <a href="/#contact">
                    Talk to our team
                    <Icon name="arrow_forward" />
                  </a>
                </MotionCard>
              ))}
            </Stagger>
          </div>
        </Section>

        <Section className="hp-pet-care-topics">
          <div className="hp-container hp-pet-care-topics-grid">
            <Reveal className="hp-pet-care-topic-copy">
              <span className="hp-eyebrow">Care Library</span>
              <h2>Everyday habits that support long-term health.</h2>
              <p>
                Pet care works best when small decisions become steady habits.
                These topic areas help you know what to watch, when to adjust,
                and when to schedule an exam.
              </p>
            </Reveal>
            <Stagger className="hp-pet-care-topic-list">
              {careTopics.map(([icon, title, text]) => (
                <MotionCard className="hp-pet-care-topic-card" key={title}>
                  <Icon name={icon} />
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </MotionCard>
              ))}
            </Stagger>
          </div>
        </Section>

        <Section className="hp-pet-care-seasonal">
          <div className="hp-container hp-pet-care-seasonal-grid">
            <Reveal className="hp-pet-care-checklist">
              <span className="hp-eyebrow">Seasonal Checklist</span>
              <h2>Keep care simple when routines change.</h2>
              <ul>
                {seasonalChecklist.map((item) => (
                  <li key={item}>
                    <Icon name="check_circle" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="hp-pet-care-alert" delay={0.1}>
              <Icon name="emergency" />
              <h2>Call us urgently if you notice these signs.</h2>
              <div>
                {emergencySigns.map((sign) => (
                  <span key={sign}>{sign}</span>
                ))}
              </div>
              <Button href="tel:+15551234567" variant="secondary">
                Call Emergency Line
              </Button>
            </Reveal>
          </div>
        </Section>

        <Section className="hp-pet-care-final">
          <div className="hp-container">
            <div className="hp-pet-care-final-card">
              <h2>Need advice specific to your pet?</h2>
              <p>
                Our team can help turn general care tips into a plan that fits
                your pet's age, breed, lifestyle, and medical history.
              </p>
              <div>
                <Button href="/#contact">Book a Wellness Visit</Button>
                <Button href="/services" variant="outline">
                  View Services
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
