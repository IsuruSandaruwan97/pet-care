"use client";

import {
  Button,
  Icon,
  MotionCard,
  Reveal,
  Section,
  Stagger,
} from "@/components/atoms";
import { Footer, Header } from "@/components/organisms";
import Image from "next/image";
import "./styles.css";

const stats = [
  ["15+", "Years Experience"],
  ["6", "Expert Vets"],
  ["98%", "Happy Patients"],
] as const;

const trustPoints = [
  ["verified_user", "AAHA-aligned standards"],
  ["favorite", "Fear-free handling"],
  ["science", "Modern diagnostics"],
] as const;

const philosophy = [
  [
    "stethoscope",
    "Whole-Pet Wellness",
    "We don't just treat symptoms; we look at nutrition, behavior, and environment to ensure holistic health.",
  ],
  [
    "chat",
    "Transparent Medicine",
    "Clear communication is our priority. We empower you with the knowledge to make the best decisions.",
  ],
  [
    "favorite",
    "Stress-Free Visits",
    "Our clinic is designed to be a calm oasis, utilizing Fear Free techniques for every interaction.",
  ],
  [
    "verified_user",
    "Inclusive Care",
    "Every animal, regardless of breed or background, deserves elite medical attention and kindness.",
  ],
] as const;

const milestones = [
  ["2009", "Opened as a neighborhood clinic with one exam room."],
  ["2016", "Expanded diagnostics, surgery, and dental care under one roof."],
  ["Today", "A six-vet team serving cats, dogs, and the families who love them."],
] as const;

const images = {
  hero:
    "https://lh3.googleusercontent.com/aida/AP1WRLtIUDGCB6xZ03fWM9HFXPlcQqGiA8cSFColRmqU7HI8OVCTaSowNJLqOIos7EPwep97XKtonP9cynwMOOH7GSIbUg1b8J3PJLyLswji9_gx8cJjnsNB-jiULsI4Rtyuyhxx2jYJ-PYUaa8sKkuW-uo4zDkwhqNcMCgw6BRnE-ImclOnx0aEQFbjkTp8A5f29_HD6aujurbeVVpnPXddPxD8U80IAx_-YjpFMhaYNb3ttxm9nXBJQSg5De_H",
  clinic:
    "https://lh3.googleusercontent.com/aida/AP1WRLstm07UrrcNsl2iL9PVuiqf3SYI_1kiXMdXCHzp-IhokhMi7BAWOHdM7hqF7C3_lqb0-zbjXXwkg5gCu9_WMTBhj9cJssFPHQmJCfK4CwYeX0fq1E3YH6uuB7LTebu6RcSBm9AOHiIKXfsWtpkFgQrwaU36bk7PnMkkcy7gKdeHkJeY21NkoqMZuOyFWGf9z1kYKtNcJ1HltX6dTv1Pep5fvzkU5xxm7UKwyYJ7sNtfK7dwoyWjXUclB6tz",
  founder:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCGePegwtNT2uI-ibTSoXpW3kLo6PDYkkoV6MX5NwCAM6hB6KZCADThpea5SSIzeyJhuxMi-RLo8n_dXqjA56avXcJdmkrjJK3wL1vG-abMvZKVrzk2FMyGbxEJqfS3pS6EVLwnQ-Q0tNa5lfI89r9q4OsXejA607eUcmBDCs82g3gB9dTA3YGEN1TRy6zFDr2el2en9r-qY9RKEuPevCh1RwjYRWVnxptOfSj-2dYtaidiBqaCs4MQH_Rid1COGsvtHIdTde7jjLPv",
};

export function AboutUs() {
  return (
    <div className="hp-page hp-about-page">
      <Header />
      <main>
        <Section className="hp-about-story">
          <div className="hp-container hp-about-story-grid">
            <Reveal className="hp-about-story-copy">
              <span className="hp-about-kicker">
                <Icon name="verified" />
                Our Journey Since 2009
              </span>
              <h1>Veterinary care built around trust, comfort, and clarity.</h1>
              <p>
                In the winter of 2009, Dr. Sarah Miller realized her dream. In a
                small, sun-drenched storefront, Happy Paws was born from a
                simple belief: that veterinary care should feel less like a
                clinical appointment and more like a visit with family. What
                started as a solo practice has grown into a community
                cornerstone, built on the trust of thousands of local pet
                parents.
              </p>
              <div className="hp-about-hero-actions">
                <Button href="/#contact">Book an Appointment</Button>
                <Button href="/our-vets" variant="outline">
                  Meet Our Vets
                </Button>
              </div>
              <div className="hp-about-trust-row">
                {trustPoints.map(([icon, label]) => (
                  <span key={label}>
                    <Icon name={icon} />
                    {label}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal className="hp-about-story-media" delay={0.1}>
              <Image
                alt="Dr. Sarah with a cat"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 50vw"
                src={images.hero}
              />
              <div className="hp-about-stats">
                {stats.map(([value, label]) => (
                  <div key={label}>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Section>

        <Section className="hp-about-bento-section">
          <div className="hp-container hp-about-bento">
            <MotionCard className="hp-about-mission">
              <Icon name="verified_user" />
              <h2>Our Mission</h2>
              <p>
                To provide unparalleled veterinary excellence through a lens of
                compassion. We strive to be the advocate for those who cannot
                speak for themselves, ensuring every pet lives their longest,
                happiest life possible.
              </p>
              <a href="/#contact" aria-label="Book an appointment">
                <span>Start your pet's care plan</span>
                <Icon name="arrow_forward" />
              </a>
            </MotionCard>
            <div className="hp-about-care">
              <Icon name="favorite" />
              <strong>Care without compromise</strong>
              <span>Every visit is planned around comfort, safety, and clear next steps.</span>
            </div>
            <div className="hp-about-clinic-photo">
              <Image
                alt="Our Clinic"
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
                src={images.clinic}
              />
            </div>
            <MotionCard className="hp-about-philosophy">
              <h2>Our Philosophy</h2>
              <Stagger>
                {philosophy.map(([icon, title, text]) => (
                  <article key={title}>
                    <Icon name={icon} />
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                ))}
              </Stagger>
            </MotionCard>
          </div>
        </Section>

        <Section className="hp-about-love">
          <div className="hp-container hp-about-love-grid">
            <Reveal className="hp-about-love-inner">
              <span className="hp-eyebrow">Why We Love What We Do</span>
              <h2>We protect the bond between pets and their people.</h2>
              <blockquote>
                For us, it's not just a job. There's no greater reward than
                seeing a senior dog bound back into the lobby after surgery, or
                witnessing a family's first kitten wellness visit. That bond is
                a responsibility we carry with immense pride.
              </blockquote>
              <div className="hp-about-founder">
                <Image
                  alt="Dr. Sarah Miller"
                  height={64}
                  width={64}
                  src={images.founder}
                />
                <div>
                  <strong>Dr. Sarah Miller</strong>
                  <small>Founder &amp; Lead Veterinarian</small>
                </div>
              </div>
            </Reveal>
            <Stagger className="hp-about-timeline">
              {milestones.map(([year, text]) => (
                <MotionCard className="hp-about-timeline-item" key={year}>
                  <strong>{year}</strong>
                  <p>{text}</p>
                </MotionCard>
              ))}
            </Stagger>
          </div>
        </Section>

        <Section className="hp-about-final">
          <div className="hp-container">
            <div className="hp-about-final-card">
              <h2>Join Our Happy Paws Family</h2>
              <p>
                Experience the professional warmth and expert care your pet
                deserves. We're currently accepting new patients!
              </p>
              <div>
                <Button href="/#contact" variant="secondary">
                  <Icon name="calendar_month" />
                  Book Your First Visit
                </Button>
                <Button href="/facilities" variant="outline">
                  Tour Our Clinic
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
