"use client";

import { Reveal, Stagger } from "@/components/atoms";
import { heroVideo, itemVariants } from "@/constants";
import { Pause, Play } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import styles from "./CareInAction.module.css";

export function CareInAction() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !prefersReducedMotion) {
          void video.play().then(() => setIsPlaying(true)).catch(() => {
            setIsPlaying(false);
          });
          return;
        }

        video.pause();
        setIsPlaying(false);
      },
      { threshold: 0.35 },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (video.paused) {
      void video.play().then(() => setIsPlaying(true)).catch(() => {
        setIsPlaying(false);
      });
      return;
    }

    video.pause();
    setIsPlaying(false);
  };

  return (
    <section className={styles.section} aria-labelledby="care-in-action-title">
      <div className={styles.container}>
        <Reveal className={styles.videoReveal}>
          <motion.div
            className={styles.videoCard}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
            whileHover={{ scale: 1.012, y: -6 }}
          >
            <video
              aria-label="Happy Paws veterinary team caring for pets"
              loop
              muted
              playsInline
              preload="metadata"
              ref={videoRef}
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
            <div className={styles.videoShade} />
            <button
              aria-label={isPlaying ? "Pause care video" : "Play care video"}
              className={styles.videoControl}
              onClick={togglePlayback}
              type="button"
            >
              {isPlaying ? (
                <Pause fill="currentColor" />
              ) : (
                <Play fill="currentColor" />
              )}
            </button>
            <div className={styles.videoLabel}>
              <span>Inside Happy Paws</span>
              <strong>Care that pets can feel</strong>
            </div>
          </motion.div>
        </Reveal>

        <Reveal className={styles.content} delay={0.12}>
          <span className={styles.eyebrow}>Compassionate Care in Action</span>
          <h2 id="care-in-action-title">
            Expertise for them. Peace of mind for you.
          </h2>
          <p>
            From routine checkups to urgent care, our experienced veterinary
            team combines modern medicine with gentle, low-stress handling.
            Every visit is built around your pet&apos;s comfort and your
            confidence.
          </p>
          <Stagger className={styles.listStagger}>
            <ul>
              <motion.li variants={itemVariants}>
                Fear-free handling techniques
              </motion.li>
              <motion.li variants={itemVariants}>
                Modern diagnostics and treatment
              </motion.li>
              <motion.li variants={itemVariants}>
                Clear guidance at every step
              </motion.li>
            </ul>
          </Stagger>
          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 18 }}
            transition={{ delay: 0.28, duration: 0.55 }}
            viewport={{ once: true, amount: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <a className={styles.primaryAction} href="#contact">
              Book an Appointment
            </a>
            <a className={styles.secondaryAction} href="/our-vets">
              Meet Our Vets
            </a>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
