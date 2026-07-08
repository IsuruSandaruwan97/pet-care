import { Variants } from "motion";

export const heroVideo = "/assets/videos/hero_banner_video.mp4";

export const certifiedVetsVideo = "/assets/videos/certified_vets.mp4";
export const videoLoopFadeSeconds = 0.55;

export const navLinks = [
  ["Home", "#home"],
  ["About Us", "#about"],
  ["Services", "#services"],
  ["Facilities", "#facilities"],
  ["Our Vets", "#team"],
  ["Pet Care Tips", "#tips"],
  ["Pricing", "#pricing"],
  ["Testimonials", "#testimonials"],
  ["Contact", "#contact"],
] as const;

export const revealTransition = {
  duration: 0.7,
  ease: [0.16, 1, 0.3, 1],
} as const;

export const staggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: revealTransition,
  },
};
