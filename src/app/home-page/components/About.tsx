import {
  Section,
  Reveal,
  RevealCard,
  CrossfadeLoopVideo,
  Stagger,
  StatNumber,
} from "@/components/atoms";
import { certifiedVetsVideo, itemVariants } from "@/constants";
import { stats } from "@/data";
import { motion } from "motion/react";
import { type MouseEvent } from "react";

export function About() {
  const handleVideoCardMove = (event: MouseEvent<HTMLElement>) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const pointerX = event.clientX - rect.left;
    const pointerY = event.clientY - rect.top;
    const rotateY = (pointerX / rect.width - 0.5) * 8;
    const rotateX = -(pointerY / rect.height - 0.5) * 8;

    card.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(10px)`;
    card.style.boxShadow = "0 22px 46px rgba(27,67,50,.18)";
  };

  const handleVideoCardLeave = (event: MouseEvent<HTMLElement>) => {
    event.currentTarget.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)";
    event.currentTarget.style.boxShadow = "";
  };

  return (
    <Section className="hp-section hp-about" id="about">
      <div className="hp-container hp-about-grid">
        <Reveal>
          <span className="hp-eyebrow">About Happy Paws</span>
          <h2>Veterinary care that feels calm, clear, and personal.</h2>
          <p>
            Happy Paws was built for pet parents who want expert medical care
            without the cold clinic feeling. Our team blends modern diagnostics,
            thoughtful communication, and low-stress handling so every visit
            feels easier for pets and people.
          </p>
          <div className="hp-about-list">
            <span>AAHA-aligned care standards</span>
            <span>Fear-free handling techniques</span>
            <span>Transparent treatment estimates</span>
          </div>
        </Reveal>
        <RevealCard className="hp-about-media-wrap">
          <div
            className="hp-about-card"
            onMouseLeave={handleVideoCardLeave}
            onMouseMove={handleVideoCardMove}
          >
            <CrossfadeLoopVideo
              ariaLabel="Certified veterinarians caring for a pet"
              src={certifiedVetsVideo}
            />
          </div>
          <div className="hp-about-card-badge">6 Certified Vets on Staff</div>
        </RevealCard>
      </div>
      <div className="hp-stats">
        <Stagger className="hp-container">
          {stats.map(([value, label]) => (
            <motion.div key={label} variants={itemVariants}>
              <StatNumber value={value} />
              <span>{label}</span>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
