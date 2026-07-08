import { Variants } from "motion";

export const heroVideo = "/api/media/hero-video";

export const certifiedVetsVideo = "/api/media/certified-vets-video";
export const videoLoopFadeSeconds = 0.55;

export const navLinks = [
  { label: "Home", section: "home" },
  { label: "About Us", section: "about", page: "about-us" },
  { label: "Services", section: "services", page: "services" },
  { label: "Facilities", section: "facilities", page: "facilities" },
  { label: "Our Vets", section: "team", page: "our-vets" },
  { label: "Pet Care Tips", section: "tips", page: "pet-care" },
  { label: "Pricing", section: "pricing", page: "pricing" },
  { label: "Testimonials", section: "testimonials" },
  { label: "Contact", section: "contact" },
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
