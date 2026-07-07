import { Section, Icon, Stagger, PawMark } from "@/components/atoms";
import { FloatingPaws } from "@/components/molecules";
import { heroVideo, staggerVariants, itemVariants } from "@/constants";
import { trustChips } from "@/data";
import { motion } from "motion/react";

export function Hero() {
  return (
    <Section className="hp-hero" id="home">
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
        animate="visible"
        variants={staggerVariants}
      >
        <h1>
          <motion.span variants={itemVariants}>
            Compassionate Care for Your
          </motion.span>
          <motion.span variants={itemVariants}>
            <em>Cats and Dogs</em>, Every Step of the Way
          </motion.span>
        </h1>
        <motion.p variants={itemVariants}>
          From routine checkups to emergency care, our experienced veterinary
          team treats your pets like family - because they're family to you.
        </motion.p>
        <motion.div className="hp-hero-actions" variants={itemVariants}>
          <motion.a
            className="hp-cta hp-cta-lg"
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            Book an Appointment
          </motion.a>
          <motion.a
            className="hp-call"
            href="tel:5551234567"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Icon name="call" /> Call Us: (555) 123-4567
          </motion.a>
        </motion.div>
      </motion.div>
      <Stagger className="hp-trust">
        {trustChips.map((chip) => (
          <motion.div
            className="hp-trust-chip"
            key={chip}
            variants={itemVariants}
          >
            <PawMark /> {chip}
          </motion.div>
        ))}
      </Stagger>
    </Section>
  );
}
