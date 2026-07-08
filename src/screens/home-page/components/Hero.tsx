import { Section, Icon, PawMark } from "@/components/atoms";
import { FloatingPaws } from "@/components/molecules";
import {
  heroVideo,
  staggerVariants,
  itemVariants,
  revealTransition,
} from "@/constants";
import { trustChips } from "@/data";
import { motion } from "motion/react";

const heroTypingCompleteDelay = 3.2;

type HeroProps = {
  introReady?: boolean;
};

const delayedHeroItemVariants = {
  hidden: itemVariants.hidden,
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      ...revealTransition,
      delay: heroTypingCompleteDelay,
    },
  },
};

export function Hero({ introReady = true }: HeroProps) {
  return (
    <Section
      className={`hp-hero${introReady ? " hp-hero-ready" : ""}`}
      id="home"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="hp-hero-video"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="hp-hero-overlay" />
      <FloatingPaws variant="hero" />
      <motion.div
        className="hp-hero-content"
        initial="hidden"
        animate={introReady ? "visible" : "hidden"}
        variants={staggerVariants}
      >
        <h1>
          <motion.span
            className="hp-type-line hp-type-line-one"
            variants={itemVariants}
          >
            Compassionate Care
          </motion.span>
          <motion.span
            className="hp-type-line hp-type-line-two"
            variants={itemVariants}
          >
            for Your
          </motion.span>
          <motion.span
            className="hp-type-line hp-type-line-three"
            variants={itemVariants}
          >
            <em>Cats and Dogs</em>, Every
          </motion.span>
          <motion.span
            className="hp-type-line hp-type-line-four"
            variants={itemVariants}
          >
            Step of the Way
          </motion.span>
        </h1>
        <motion.p variants={delayedHeroItemVariants}>
          From routine checkups to emergency care, our experienced veterinary
          team treats your pets like family - because they're family to you.
        </motion.p>
        <motion.div
          className="hp-hero-actions"
          variants={delayedHeroItemVariants}
        >
          <motion.a
            className="hp-cta hp-cta-lg"
            href="#contact"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.96, y: 0 }}
          >
            Book an Appointment
          </motion.a>
          <motion.a
            className="hp-call"
            href="tel:5551234567"
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97, y: 0 }}
          >
            <Icon name="call" /> Call Us: (555) 123-4567
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.div
        className="hp-trust"
        initial="hidden"
        animate={introReady ? "visible" : "hidden"}
        variants={staggerVariants}
      >
        {trustChips.map((chip) => (
          <motion.div
            className="hp-trust-chip"
            key={chip}
            variants={delayedHeroItemVariants}
            whileHover={{ y: -5, scale: 1.03 }}
          >
            <PawMark /> {chip}
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
