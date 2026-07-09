"use client";

import { Button, Icon, MotionCard, Reveal, Section } from "@/components/atoms";
import { Footer, Header } from "@/components/organisms";
import Image from "next/image";
import "./styles.css";

const plans = [
  {
    title: "Newcomer",
    age: "Ages 0-1 Year",
    price: "$49",
    icon: "child_care",
    action: "Start Plan",
    popular: false,
    urgent: false,
    features: [
      "All Puppy/Kitten Vaccines",
      "3 Wellness Exams",
      "Fecal Exams & Deworming",
      "Microchipping",
    ],
  },
  {
    title: "Annual",
    age: "Ages 1-7 Years",
    price: "$65",
    icon: "favorite",
    action: "Select Annual",
    popular: true,
    urgent: false,
    features: [
      "Annual Core Vaccinations",
      "Unlimited Exam Visits",
      "Annual Lab Work",
      "10% Dental Discount",
      "Flea & Tick Prevention",
    ],
  },
  {
    title: "Senior",
    age: "Ages 7+ Years",
    price: "$89",
    icon: "elderly_woman",
    action: "Start Plan",
    popular: false,
    urgent: false,
    features: [
      "Bi-Annual Blood Panels",
      "Urinalysis & Kidney Check",
      "Blood Pressure Monitoring",
      "Nutrition Consults",
      "Early Disease Screening",
    ],
  },
  {
    title: "Priority",
    age: "All Ages",
    price: "$120",
    icon: "emergency",
    action: "Get Priority",
    popular: false,
    urgent: true,
    features: [
      "24/7 Urgent Care Access",
      "Includes All Annual Services",
      "Diagnostic Imaging (X-Ray)",
      "Hospitalization Coverage",
    ],
  },
] as const;

const comparisonRows = [
  ["Routine Exams", "3/year", "Unlimited", "Unlimited", "Unlimited"],
  ["Core Vaccines", "check", "check", "check", "check"],
  ["Diagnostic Lab Work", "close", "check", "Comprehensive", "Comprehensive"],
  ["Dental Cleaning", "Discounted", "10% Off", "15% Off", "Included"],
  ["Radiology/Ultrasound", "close", "close", "1/year", "Unlimited"],
] as const;

const faqItems = [
  [
    "How does billing work?",
    "Plans are billed on a monthly recurring basis via credit card or direct bank transfer. Your first month is prorated based on your sign-up date, and you can manage your billing preferences through our owner portal.",
  ],
  [
    "Is this pet insurance?",
    "No, wellness plans are different from insurance. Insurance covers unpredictable accidents and illnesses, while our Wellness Plans cover the routine, preventive care that keeps your pet healthy. Many clients use both for total protection.",
  ],
  [
    "Can I cancel or change my plan?",
    "Wellness plans are annual agreements. You can upgrade your plan at any time. If you need to cancel before the year is up, we simply charge the difference between the monthly payments made and the retail value of the services already used.",
  ],
  [
    "Do you offer payment plans for surgeries?",
    "Yes! For large medical expenses not covered by wellness plans, we partner with CareCredit and Scratchpay to offer flexible, low-interest payment options.",
  ],
] as const;

const valueImage = "/api/media/value-image";

function ComparisonValue({
  value,
  highlighted,
}: {
  value: string;
  highlighted?: boolean;
}) {
  if (value === "check") {
    return <Icon name="check" className="hp-pricing-check" />;
  }

  if (value === "close") {
    return <Icon name="close" className="hp-pricing-close" />;
  }

  return (
    <span className={highlighted ? "hp-pricing-strong" : ""}>{value}</span>
  );
}

export function Pricing() {
  return (
    <div className="hp-page hp-pricing-page">
      <Header />
      <main>
        <Section className="hp-pricing-hero">
          <div className="hp-container">
            <Reveal className="hp-pricing-hero-inner">
              <span>
                <Icon name="verified" />
                PREVENTIVE CARE FIRST
              </span>
              <h1>Wellness Plans for Life's Journey</h1>
              <p>
                Comprehensive health management for your furry family members.
                Proactive care that saves lives and keeps your wallet happy.
              </p>
            </Reveal>
          </div>
        </Section>

        <Section className="hp-pricing-tiers">
          <div className="hp-container hp-pricing-tier-grid">
            {plans.map((plan) => (
              <MotionCard
                className={`hp-pricing-tier${plan.popular ? " hp-pricing-tier-popular" : ""}${plan.urgent ? " hp-pricing-tier-urgent" : ""}`}
                key={plan.title}
              >
                {plan.popular ? (
                  <span className="hp-pricing-popular">POPULAR</span>
                ) : null}
                <div className="hp-pricing-tier-head">
                  <div>
                    <h3>{plan.title}</h3>
                    <p>{plan.age}</p>
                  </div>
                  <Icon name={plan.icon} />
                </div>
                <div className="hp-pricing-monthly">
                  <strong>{plan.price}</strong>
                  <span>/mo</span>
                </div>
                <ul>
                  {plan.features.map((feature, index) => (
                    <li
                      className={
                        plan.urgent && index === 0
                          ? "hp-pricing-urgent-feature"
                          : ""
                      }
                      key={feature}
                    >
                      <Icon
                        name={
                          plan.urgent && index === 0
                            ? "priority_high"
                            : "check_circle"
                        }
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  href="/#contact"
                  variant={plan.popular ? "secondary" : "primary"}
                >
                  {plan.action}
                </Button>
              </MotionCard>
            ))}
          </div>
        </Section>

        <Section className="hp-pricing-comparison">
          <div className="hp-container">
            <h2>Side-by-Side Comparison</h2>
            <div className="hp-pricing-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Care Features</th>
                    <th>Newcomer</th>
                    <th>Annual</th>
                    <th>Senior</th>
                    <th>Priority</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map(
                    ([feature, newcomer, annual, senior, priority]) => (
                      <tr key={feature}>
                        <td>{feature}</td>
                        {[newcomer, annual, senior, priority].map(
                          (value, index) => (
                            <td key={`${feature}-${index}`}>
                              <ComparisonValue
                                value={value}
                                highlighted={index === 1}
                              />
                            </td>
                          ),
                        )}
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </Section>

        <Section className="hp-pricing-value">
          <div className="hp-container hp-pricing-value-grid">
            <div className="hp-pricing-value-photo">
              <Image
                alt="A healthy Golden Retriever being hugged by a smiling veterinarian in a sunlit clinic."
                fill
                sizes="(max-width: 900px) 100vw, 66vw"
                src={valueImage}
              />
              <div />
              <article>
                <h3>Peace of Mind for Pet Parents</h3>
                <p>
                  Monthly wellness payments help you budget for the care your
                  pet needs without the stress of lump-sum bills.
                </p>
              </article>
            </div>
            <div className="hp-pricing-value-stack">
              <article>
                <Icon name="savings" />
                <h4>Save Up to 30%</h4>
                <p>
                  Our plans are designed to give you more care for less,
                  bundling essential services at significant discounts.
                </p>
              </article>
              <article>
                <Icon name="ecg_heart" />
                <h4>Early Detection</h4>
                <p>
                  80% of health issues caught during wellness exams are treated
                  successfully before becoming chronic.
                </p>
              </article>
            </div>
          </div>
        </Section>

        <Section className="hp-pricing-faq">
          <div className="hp-container">
            <h2>Your Questions, Answered</h2>
            <div>
              {faqItems.map(([question, answer]) => (
                <details key={question}>
                  <summary>
                    {question}
                    <Icon name="expand_more" />
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </Section>

        <Section className="hp-pricing-final">
          <div className="hp-container">
            <div className="hp-pricing-final-card">
              <h2>Ready to invest in their health?</h2>
              <p>
                Join the Happy Paws family today and give your pet the long,
                vibrant life they deserve.
              </p>
              <div>
                <Button href="/#contact">Enroll Online Now</Button>
                <Button href="/#contact" variant="outline">
                  Talk to a Specialist
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
