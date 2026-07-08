"use client";

import { Button, Icon, MotionCard, Reveal, Section } from "@/components/atoms";
import { Footer, Header } from "@/components/organisms";
import Image from "next/image";
import "./styles.css";

const leadVet = {
  name: "Dr. Sarah Mitchell",
  role: "Lead Veterinarian",
  image:
    "https://lh3.googleusercontent.com/aida/AP1WRLuMXUAWWle034_YRXjcF4wGzrusfHKceeQ3HY3_rOrsyhCSecSkScTKP3N6uYHK6PZRcUDJRN4O_OvaFCMXeHwP2FMmWAhNwm_MTCVKxhlAPpY354Cika62zVYdM0mBntTHqT7nD_bQOV54bE9lEMJy_9hM4X2rmGQ42tOvafVKnj-ddXzGw96r3NjrohLcHP9Nk9FkV-zby3jsFsm0W7Yg4JVhkfpucCnqU44rxV2Vwu85v3GHteqxkfE",
  specialties: ["Internal Medicine", "Geriatric Care", "20+ Years Experience"],
};

const vets = [
  {
    name: "Dr. James Okafor",
    role: "Chief Surgeon",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLvo0MsyoJ_SPbAOqtC_AuWFJ-VknezQF8oQD11dAc7_PSMCmhsv57Pjnq0r7hu3aVZ5iQ9alOFfrmJwae7PndG3TfnDstyFFwbicse-yOsr_tR3UJmrl40Hxu1-_uSJk-WRPCDiNyA8xNWr0TJ6nsATyAid1wg9y55uwzu2-rU3QBNLTl5Kq7BClarClY784i2Z_LZObhSj-qPc2LnEq6TNcR1RNEywIt11OGMArq6_cfkojGDgGYXGc4LO",
    text: "Specializing in orthopedic and soft tissue surgery with a focus on minimally invasive techniques for faster recovery.",
    quote:
      "Restoring mobility to a pet is like giving them their world back. That's why I do what I do.",
  },
  {
    name: "Dr. Priya Nair",
    role: "Feline Specialist",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLv_jLRyMm53v6RV-G9rOFiRWw_M3o6WwK2af7bSCVyxt91_UfQ2rzE65igPClaDIhUBLEvy89Sf3USWuIL1e3JhDIOIeeQx60qmDlxpffy_EX1clOl-6s012-EEXmhBgjE9foe9ZtlHaocJ4QZY1cIurL0eKxyHKbAWblwnBtPRuwALKH-SDKX8GoQtU90cJO5a_ZerfD9JqpKyodJwMaqQY7zgK15nBJSJM5aracn4tDNyoGQqH-W0HkYy",
    text: "An expert in cat behavior and internal medicine, dedicated to making clinical visits stress-free for our feline friends.",
    quote:
      "Cats require a different kind of patience and understanding. I love the challenge of winning their trust.",
  },
  {
    name: "Dr. Michael Chen",
    role: "ER Specialist",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLt-5QSZtFeGr1002bxFoLCiCF_qovf-87oCxPk-Po8fm7EDOHx3DJclz6WUAlzuoLPDvRjvpDrJaB5j4LJuEF4fC0ZOSODYXwOLU9501yK6M5fiqae_71ACLRC1U74n4hF9LlSir5jfkUHeZo2Yf1_IExIt7NFjnq6hovvDfMIZOyqY-NZtwHD3Wt2hdlHL7yCVYr8RCwcklK70vd5SuClzKiuhFhYSwwSeHDpfymZOewIGXZ3bzAeiLWc",
    text: "Dr. Chen heads our 24/7 critical care unit, providing calm expertise during the most stressful emergency situations.",
    quote:
      "In emergencies, every second counts. Being the calm in the storm for pets and owners is my calling.",
  },
] as const;

export function OurVets() {
  return (
    <div className="hp-page hp-vets-page">
      <Header />
      <main>
        <Section className="hp-vets-hero">
          <div className="hp-container">
            <Reveal>
              <span className="hp-vets-kicker">Expert Clinical Care</span>
              <h1>Meet the Heart of Happy Paws</h1>
              <p>
                A dedicated team of specialists combining advanced veterinary
                medicine with the gentle, compassionate touch your family
                deserves.
              </p>
            </Reveal>
          </div>
          <div className="hp-vets-orb" />
        </Section>

        <main className="hp-container hp-vets-main">
          <Reveal className="hp-vets-lead">
            <div className="hp-vets-lead-media">
              <Image
                alt={leadVet.name}
                fill
                priority
                sizes="(max-width: 820px) 100vw, 40vw"
                src={leadVet.image}
              />
              <span>{leadVet.role}</span>
            </div>
            <div className="hp-vets-lead-copy">
              <h2>{leadVet.name}</h2>
              <div className="hp-vets-tags">
                {leadVet.specialties.map((specialty) => (
                  <span key={specialty}>{specialty}</span>
                ))}
              </div>
              <p className="hp-vets-quote">
                "After two decades in practice, my philosophy remains simple: I
                treat every pet as if they were my own child, ensuring they feel
                safe, heard, and deeply cared for during every visit."
              </p>
              <div>
                <h3>Background</h3>
                <p>
                  Dr. Mitchell graduated top of her class from Cornell
                  University and has spent the last 15 years building Happy Paws
                  into a sanctuary for pet health. She specializes in chronic
                  disease management and the unique needs of senior animals.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="hp-vets-grid">
            {vets.map((vet) => (
              <MotionCard className="hp-vets-card" key={vet.name}>
                <div className="hp-vets-card-media">
                  <Image
                    alt={vet.name}
                    fill
                    sizes="(max-width: 820px) 100vw, 33vw"
                    src={vet.image}
                  />
                  <div>
                    <span>{vet.role}</span>
                  </div>
                </div>
                <div className="hp-vets-card-body">
                  <h3>{vet.name}</h3>
                  <p>{vet.text}</p>
                  <div className="hp-vets-why">
                    <strong>The "Why"</strong>
                    <p>"{vet.quote}"</p>
                  </div>
                </div>
              </MotionCard>
            ))}
          </div>

          <Section className="hp-vets-standard">
            <div>
              <h2>The Happy Paws Standard</h2>
              <p>
                Beyond their degrees and specialties, our vets share a singular
                commitment: the well-being of your family. We participate in
                ongoing research to ensure the latest treatments are always
                available for your pets.
              </p>
              <div className="hp-vets-standard-badges">
                <span>
                  <Icon name="verified" />
                  Board Certified
                </span>
                <span>
                  <Icon name="favorite" />
                  Fear Free Certified
                </span>
              </div>
            </div>
            <div className="hp-vets-join">
              <span>Join our family</span>
              <h3>Ready for a checkup?</h3>
              <p>Our team is ready to welcome you and your pet.</p>
              <Button href="/#contact" variant="secondary">
                Book Now
              </Button>
            </div>
          </Section>
        </main>
      </main>
      <Footer />
    </div>
  );
}
