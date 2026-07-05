"use client";

import { Icon } from "@/components/Icon";
import { classNames } from "@/utils/classNames";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "motion/react";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import RightClickGuard from "./components/RightClickGuard";

const heroVideo = "/assets/videos/hero_banner_video.mp4";

const aboutImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAfByICx8e7P0fiZEgfp31qJcVyviGCWUl_gomgSkQ_T7kqbKHljuHwcLAh64FIIyoC_M_zmQk8pwdbs5ujf-ugvUc7rDG1Vf0xiii0IHbjk8YUD_4Zt_54MG8ZxziFXHKPuo2ynjY4HU8YxUGLfMU1ReraUnRhqkBvudYP0W3wrxxinTOAYHrG4ZslX9oG1iExUZQ7YQHpWjMgKqn5LFHwtjmiWG9JgzZnXY6FLYZ8rCM9Wcgv81w9_tG44s8q-adECZW9A72zm7Gb";

const navLinks = [
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

const trustChips = [
  "15+ Years of Experience",
  "10,000+ Happy Pets Treated",
  "Certified & Licensed Veterinarians",
  "Same-Day Appointments Available",
];

const stats = [
  ["15+", "Years Serving the Community"],
  ["6", "Certified Veterinarians on Staff"],
  ["98%", "Client Satisfaction Rate"],
  ["24/7", "Emergency Support"],
];

const whyCards = [
  [
    "stethoscope",
    "Experienced, Caring Vets",
    "Every member of our team is licensed, certified, and genuinely loves animals.",
  ],
  [
    "biotech",
    "Modern Equipment",
    "On-site diagnostics mean faster answers and faster treatment.",
  ],
  [
    "favorite",
    "Fear-Free Approach",
    "We use gentle handling techniques to keep visits low-stress for nervous pets.",
  ],
  [
    "receipt_long",
    "Transparent Pricing",
    "No hidden fees. You'll always know the cost before we proceed.",
  ],
  [
    "schedule",
    "24/7 Emergency Access",
    "Because emergencies don't wait for business hours.",
  ],
  [
    "assignment",
    "Personalized Care Plans",
    "No cookie-cutter treatment. Every pet gets a plan built around their needs.",
  ],
];

const services = [
  [
    "verified_user",
    "Wellness & Preventive Care",
    "Annual checkups, vaccinations, parasite prevention, and early-detection screenings to keep small problems from becoming big ones.",
    false,
  ],
  [
    "vaccines",
    "Vaccinations",
    "Core and lifestyle vaccines for puppies, kittens, and adult pets, tailored to age, breed, and lifestyle.",
    false,
  ],
  [
    "sentiment_satisfied",
    "Dental Care",
    "Professional cleanings, dental X-rays, and extractions to keep teeth and gums healthy.",
    false,
  ],
  [
    "content_cut",
    "Surgery",
    "From spay/neuter to soft-tissue surgeries, performed with modern equipment and full anesthetic monitoring.",
    false,
  ],
  [
    "emergency_home",
    "Emergency & Urgent Care",
    "Same-day appointments and a 24-hour emergency line for accidents or sudden illness.",
    true,
  ],
  [
    "science",
    "Diagnostics & Lab Services",
    "On-site bloodwork, X-rays, ultrasound, and lab testing for fast, accurate diagnoses.",
    false,
  ],
  [
    "orthopedics",
    "Senior Pet Care",
    "Specialized wellness plans for aging cats and dogs, including arthritis management and organ health monitoring.",
    false,
  ],
  [
    "auto_awesome",
    "Grooming",
    "Baths, haircuts, nail trims, and ear cleaning to keep your pet looking and feeling their best.",
    false,
  ],
  [
    "home",
    "Boarding & Daycare",
    "Safe, supervised overnight boarding and daytime play while you're away or at work.",
    false,
  ],
  [
    "nutrition",
    "Nutrition Counseling",
    "Personalized diet plans for weight management, allergies, and breed-specific nutritional needs.",
    false,
  ],
  [
    "qr_code_scanner",
    "Microchipping",
    "Quick, painless microchipping so your pet can always find their way home.",
    false,
  ],
  [
    "videocam",
    "In-Home & Telehealth Visits",
    "Virtual consultations and at-home visits for pets who do better outside a clinic setting.",
    false,
  ],
] as const;

const facilities = [
  [
    "Reception Area",
    "A warm and welcoming space designed for comfort.",
    "https://lh3.googleusercontent.com/aida/AP1WRLstm07UrrcNsl2iL9PVuiqf3SYI_1kiXMdXCHzp-IhokhMi7BAWOHdM7hqF7C3_lqb0-zbjXXwkg5gCu9_WMTBhj9cJssFPHQmJCfK4CwYeX0fq1E3YH6uuB7LTebu6RcSBm9AOHiIKXfsWtpkFgQrwaU36bk7PnMkkcy7gKdeHkJeY21NkoqMZuOyFWGf9z1kYKtNcJ1HltX6dTv1Pep5fvzkU5xxm7UKwyYJ7sNtfK7dwoyWjXUclB6tz",
  ],
  [
    "Exam Room",
    "Modern diagnostics in a fear-free clinical setting.",
    "https://lh3.googleusercontent.com/aida/AP1WRLu8n2pgKiS32AsLBkSJP4oKkuOqL_noGj1Tyz1VYzTgq2_5ZHnDBqwxn30zFwlkvz3VOqH_YcUBw0yrDThWcYxlXAq7SWzNwD60sWHu3pEBEhgQQy_MUNEQ_iaAkSFD6xmrAAB6iMU3vRTnIV1sqXrfakPyvB3Jg1Dp_p8_xcnWmrQLydPt9pGyZybqmcOeeOepJiPZkR1loXZBThlTes6uidHaVqgQxOItcRJS_Pbrr4IgUKMj49pPh0U",
  ],
  [
    "Surgical Suite",
    "Advanced technology for precise and safe procedures.",
    "https://lh3.googleusercontent.com/aida/AP1WRLvl9Lw9Jqd24nQMHcO_5pAjplyBfr0RV3YXS4BjF_NNzYdX-zWQ8yekAYDVNOFwHkKZzfutF_QjJuhuThQnNeiZHoiIzpuU92oTBLcs68oeOr7e0VnEDPW0T55a4zwnFrjk8IPAf--d507QlpGVy0rGZ6Xar2nhdsWX8IggbbqQ85coZ-chjh7tBpW1e9VhLh5D4XxdnjHss2XCKQhQ4OR0o-RKXhBFqJz6BY9vPjkwIcQXlV-Xxu77XRus",
  ],
];

const team = [
  [
    "Dr. Sarah Mitchell, DVM",
    "Lead Veterinarian - 15 yrs",
    "Specializing in internal medicine and senior pet wellness, Dr. Mitchell has a soft spot for grumpy old cats and the families who love them.",
    "TEAM HEADSHOT - Dr. Mitchell",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDIGJRcfSy0vpsMmHarG4TcFAy783nsmtvOsM3sU48IpBBJtTetIfh9XLWXOoox7LT193_ppDUk89_GEUic0-a1cEiaNOQPERTZVy6tCGFKeq-P8odww9U85Em0H18j-rT38Hm2ECncK1c3qAJmZKNQSptiD73SvOL2u6kDxnaH3uBivlSnpIeuCzRtFXJsBijquVa_QT-SHZd8ikMmZhOXcTgL5DpkKpyXe4AmRxlPYCjfjQV8CJynjC7Ftpil4LG4Xm9VOC8bEIES",
  ],
  [
    "Dr. James Okafor, DVM",
    "Surgical Specialist - 10 yrs",
    "Dr. Okafor leads our surgical team, with a particular focus on orthopedic and soft-tissue procedures for dogs of all sizes.",
    "TEAM HEADSHOT - Dr. Okafor",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB4Bjz90oWgfmYOry5M-jfDf-R5z8YCdkmNw45LozmTqP8Q_5NxtRDvkrvbS5J1U86px3fHhjXRQhMCb1vJnNxJPQtj07so1liW-m2-hdlCWXrsHZBoAID-sRXeO0IOE6uy6EmAeYI38LExEV4zMJdgh41hbmVOo5f1UmgiLmSI3_aNzTZfZxSifDZYH-CdAwnN6209m9KfSnC_t725-LLeeoHWZkTXc1g_p0tZCoVypg8LwspF_eH2AJaeMDaOu-Dv2lEwCHqnIvaK",
  ],
  [
    "Dr. Priya Nair, DVM",
    "Feline & Exotic Care - 8 yrs",
    "A self-described cat whisperer, Dr. Nair has built her career around fear-free handling techniques for anxious feline patients.",
    "TEAM HEADSHOT - Dr. Nair",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAzRHD-rOZYWkagNsKvDkZDU1XNKZZ-x3Rh4ELT1o2kgA6NGPCFdwcPbGANii9QnDVBXe7Z-LKTO9FER6smRTErCMCeXRW3ItVtG4j6xguzTZ86c-G1Agz7JKtiXBFda95nvQdzae4tQOhTfiHb4THzhBamj9DnLML5yo9vY2h47d-bOgBZZVNbLp2pK4SxQ1Y7AHAzh5OCxUj9f3TrfjaCahYpfkjzIoLZQxZS43poAICqqiPWlVsNfQB62DktLI3RBIC8DRbLTveo",
  ],
  [
    "Dr. Michael Chen, DVM",
    "Emergency & Critical Care - 12 yrs",
    "Dr. Chen heads our emergency department, bringing calm, decisive care to high-stress situations.",
    "TEAM HEADSHOT - Dr. Chen",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBkO3mS6_QnCeAgbF5Jcgp6Ee_e-I8ivFFWczy-Y39kLGUwYu1_6rSdHuY94LH6VIy9q4TguHNmnpgt0O5c_riGYUrqSVuZbfL2vIsTKd3nyrNRCRY8a2MBkDQ7wUJLvG7jg6g7HYXxwtj-uZeGEJJTIyASnjpqZSq1YClGIoQCq4CsGgZRmkfipOpxN2LrIwRu_jUlILv6I3BrEh3iWEss2APjHBKfS9q2VSHuzOv2Z3hPxVrROivcUTDX-CcZ4gvTelazuk9Evz4G",
  ],
];

const pricing = [
  [
    "\u{1F436}",
    "Puppy & Kitten Starter",
    "$129",
    "",
    [
      "Initial health exam",
      "First round of core vaccinations",
      "Deworming treatment",
      "Microchipping",
      "Nutrition & care consultation",
    ],
    false,
  ],
  [
    "\u{1F43E}",
    "Annual Wellness",
    "$189",
    "/year",
    [
      "Annual physical exam",
      "Core vaccinations",
      "Parasite prevention screening",
      "Bloodwork panel",
      "Dental check",
    ],
    true,
  ],
  [
    "\u{1F9B4}",
    "Senior Pet Care",
    "$229",
    "/year",
    [
      "Comprehensive senior wellness exam",
      "Bloodwork & organ function panel",
      "Joint & mobility assessment",
      "Dental evaluation",
      "Personalized nutrition plan",
    ],
    false,
  ],
  [
    "\u{1F6A8}",
    "Emergency Visit",
    "$95",
    "start",
    ["Final cost depends on diagnostics and treatment required."],
    false,
  ],
] as const;

const testimonials = [
  [
    "They treated my 14-year-old lab like she was their own. I've never felt so confident in a vet's hands.",
    "Amanda R.",
    "AR",
  ],
  [
    "Our cat hates vet visits, but the team here somehow made it stress-free for both of us.",
    "David L.",
    "DL",
  ],
  [
    "Fast, honest, and affordable. They explained every option before we made a decision.",
    "Priyanka S.",
    "PS",
  ],
  [
    "We had a middle-of-the-night emergency and they picked up immediately. Forever grateful.",
    "Marcus T.",
    "MT",
  ],
];

const tips = [
  "5 Signs Your Cat Might Be in Pain (That Owners Often Miss)",
  "Puppy's First Year: A Complete Vaccination Timeline",
  "Is Your Dog Overweight? How to Tell and What to Do",
  "Senior Cat Care: What Changes After Age 10",
  "Dental Disease in Dogs: Why Bad Breath Is a Warning Sign",
  "How to Choose the Right Food for Your Pet's Life Stage",
];

const faqs = [
  [
    "Do I need an appointment, or can I walk in?",
    "We recommend booking ahead to minimize wait times, but we accept urgent walk-ins whenever possible.",
  ],
  [
    "Do you treat emergencies after hours?",
    "Yes, our 24/7 emergency line connects you directly with on-call veterinary staff.",
  ],
  [
    "What payment methods do you accept?",
    "We accept all major credit cards, debit, and offer flexible payment plans for larger treatments.",
  ],
  [
    "Do you treat pets other than cats and dogs?",
    "Our primary focus is cats and dogs, though we can advise on referrals for exotic pet care.",
  ],
  [
    "How do I get my pet's medical records?",
    "Simply call or email our front desk, and we'll send records to you or a new provider directly.",
  ],
];

function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}

const revealTransition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] } as const;

const staggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: revealTransition,
  },
};

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={itemVariants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function Stagger({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.14 }}
      variants={staggerVariants}
    >
      {children}
    </motion.div>
  );
}

function MotionCard({
  children,
  className = "",
  onBlur,
  onFocus,
  onMouseEnter,
  onMouseLeave,
  "aria-hidden": ariaHidden,
}: {
  children: ReactNode;
  className?: string;
  onBlur?: () => void;
  onFocus?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  "aria-hidden"?: boolean;
}) {
  return (
    <motion.article
      aria-hidden={ariaHidden}
      className={className}
      onBlur={onBlur}
      onFocus={onFocus}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      variants={itemVariants}
      whileHover={{ y: -6, scale: 1.015 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
    >
      {children}
    </motion.article>
  );
}

function PawMark({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 100 100"
      aria-hidden="true"
    >
      <ellipse cx="50" cy="64" rx="26" ry="22" fill="currentColor" />
      <circle cx="24" cy="38" r="11" fill="currentColor" />
      <circle cx="42" cy="22" r="11" fill="currentColor" />
      <circle cx="62" cy="23" r="11" fill="currentColor" />
      <circle cx="80" cy="40" r="11" fill="currentColor" />
    </svg>
  );
}

function Header() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  return (
    <header className="hp-header">
      <div className="hp-topbar">
        <span>
          <Icon name="call" /> (555) 123-4567
        </span>
        <span>
          <Icon name="schedule" /> Mon-Sat: 8 AM-7 PM
        </span>
        <strong>
          <Icon name="emergency_home" /> 24/7 Emergency Line
        </strong>
      </div>
      <nav className={classNames("hp-nav", scrolled && "hp-nav-scrolled")}>
        <a className="hp-brand" href="#home" onClick={() => setOpen(false)}>
          <PawMark className="hp-brand-mark" />
          <span>Happy Paws</span>
        </a>
        <div className="hp-navlinks">
          {navLinks.map(([label, href]) => (
            <a href={href} key={label}>
              {label}
            </a>
          ))}
        </div>
        <a className="hp-cta hp-nav-cta" href="#contact">
          Book an Appointment
        </a>
        <button
          className="hp-burger"
          type="button"
          aria-label="Menu"
          onClick={() => setOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      <AnimatePresence>
        {open ? (
          <motion.div
            className="hp-mobile"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hp-mobile-head">
              <span>Happy Paws</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                x
              </button>
            </div>
            {navLinks.map(([label, href]) => (
              <a href={href} key={label} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
            <a
              className="hp-cta"
              href="#contact"
              onClick={() => setOpen(false)}
            >
              Book an Appointment
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section className="hp-hero" id="home">
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
    </section>
  );
}

function FloatingPaws({ variant }: { variant: "hero" | "footer" }) {
  const paws =
    variant === "hero"
      ? [
          ["6%", "20%", 84, 0.22, "hp-float-a"],
          ["82%", "15%", 70, 0.18, "hp-float-b"],
          ["14%", "66%", 58, 0.16, "hp-float-a"],
          ["74%", "60%", 96, 0.2, "hp-float-b"],
          ["46%", "12%", 46, 0.13, "hp-float-a"],
          ["32%", "78%", 64, 0.17, "hp-float-b"],
        ]
      : [
          ["4%", "18%", 70, 0.07, "hp-float-a"],
          ["40%", "58%", 54, 0.06, "hp-float-b"],
          ["68%", "12%", 60, 0.07, "hp-float-a"],
          ["88%", "52%", 46, 0.06, "hp-float-b"],
        ];

  return (
    <div className="hp-floating-paws">
      {paws.map(([left, top, size, opacity, animation], index) => (
        <PawMark
          className={String(animation)}
          key={`${left}-${top}`}
          style={
            { left, top, width: size, height: size, opacity } as CSSProperties
          }
        />
      ))}
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  inverse = false,
}: {
  eyebrow?: string;
  title: string;
  inverse?: boolean;
}) {
  return (
    <Reveal
      className={classNames(
        "hp-section-title",
        inverse && "hp-section-title-inverse",
      )}
    >
      {eyebrow ? <span>{eyebrow}</span> : null}
      <h2>{title}</h2>
    </Reveal>
  );
}

function About() {
  return (
    <section className="hp-section hp-about" id="about">
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
        <Reveal className="hp-about-card hp-tilt-card">
          <img src={aboutImage} alt="Veterinarian holding a pet" />
          <div>6 Certified Vets</div>
        </Reveal>
      </div>
      <div className="hp-stats">
        <Stagger className="hp-container">
          {stats.map(([value, label]) => (
            <motion.div key={label} variants={itemVariants}>
              <strong>{value}</strong>
              <span>{label}</span>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="hp-section hp-cream">
      <div className="hp-container">
        <SectionTitle title="Why Pet Parents Trust Us" />
        <Stagger className="hp-card-grid">
          {whyCards.map(([icon, title, text]) => (
            <MotionCard className="hp-card hp-tilt-card" key={title}>
              <span className="hp-icon-badge">
                <Icon name={icon} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </MotionCard>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="hp-section" id="services">
      <div className="hp-container">
        <SectionTitle
          eyebrow="Services"
          title="Full-Service Care for Cats and Dogs"
        />
        <Stagger className="hp-service-grid">
          {services.map(([icon, title, text, featured]) => (
            <MotionCard
              className={classNames(
                "hp-service-card hp-tilt-card",
                featured && "hp-service-featured",
              )}
              key={title}
            >
              <span className="hp-icon-badge">
                <Icon name={icon} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </MotionCard>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function Facilities() {
  return (
    <section className="hp-section hp-cream" id="facilities">
      <div className="hp-container">
        <SectionTitle
          eyebrow="Clinic Spaces"
          title="Designed for Comfort and Clarity"
        />
        <Stagger className="hp-facilities">
          {facilities.map(([title, text, image]) => (
            <MotionCard className="hp-facility-card" key={title}>
              <img src={image} alt={title} />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </MotionCard>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="hp-section hp-team" id="team">
      <div className="hp-container">
        <SectionTitle eyebrow="Our Vets" title="Meet the Care Team" />
        <div className="hp-team-grid">
          {team.map(([name, role, bio, label, image]) => (
            <article className="hp-team-card" key={name}>
              <div className="hp-team-inner">
                <div className="hp-team-front">
                  <img src={image} alt={name} />
                  <div>
                    <span>{label}</span>
                    <h3>{name}</h3>
                    <p>{role}</p>
                  </div>
                </div>
                <div className="hp-team-back">
                  <h3>{name}</h3>
                  <p>{bio}</p>
                  <a href="#contact">Book with this vet</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="hp-section hp-pricing-section" id="pricing">
      <div className="hp-container">
        <SectionTitle title="Simple, Transparent Pricing" />
        <Stagger className="hp-pricing-grid">
          {pricing.map(([emoji, name, price, per, features, popular]) => (
            <MotionCard
              className={classNames(
                "hp-price-card hp-tilt-card",
                popular && "hp-price-popular",
              )}
              key={name}
            >
              {popular ? (
                <span className="hp-popular">MOST POPULAR</span>
              ) : null}
              <div className="hp-price-icon">{emoji}</div>
              <h3>{name}</h3>
              <div className="hp-price">
                {price}
                <span>{per}</span>
              </div>
              <div className="hp-price-divider" />
              <ul>
                {features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Book This Package
              </motion.a>
            </MotionCard>
          ))}
        </Stagger>
        <Reveal className="hp-pricing-note">
          All packages can be customized. Ask our front desk about multi-pet
          discounts and payment plans.
        </Reveal>
      </div>
    </section>
  );
}

function TestimonialStar() {
  return (
    <span className="hp-star-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
      </svg>
    </span>
  );
}

function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const resumeTimeout = useRef<number | null>(null);
  const isHoverPaused = useRef(false);
  const isControlPaused = useRef(false);
  const trackPosition = useRef(0);
  const shouldReduceMotion = useReducedMotion();
  const setTrackPosition = (position: number) => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const loopPoint = track.scrollWidth / 2;

    if (loopPoint > 0) {
      while (position < 0) {
        position += loopPoint;
      }

      while (position >= loopPoint) {
        position -= loopPoint;
      }
    }

    trackPosition.current = position;
    track.style.transform = `translate3d(${-position}px, 0, 0)`;
  };

  const scroll = (direction: number) => {
    isControlPaused.current = true;
    setTrackPosition(trackPosition.current + direction * 352);

    if (resumeTimeout.current) {
      window.clearTimeout(resumeTimeout.current);
    }

    resumeTimeout.current = window.setTimeout(() => {
      isControlPaused.current = false;
    }, 900);
  };

  const pauseForHover = () => {
    isHoverPaused.current = true;
  };

  const resumeAfterHover = () => {
    isHoverPaused.current = false;
  };

  useEffect(() => {
    const track = trackRef.current;

    if (!track || shouldReduceMotion) {
      return;
    }

    let frame = 0;
    let lastTime = performance.now();

    const tick = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;
      const loopPoint = track.scrollWidth / 2;

      if (loopPoint > 0 && !isHoverPaused.current && !isControlPaused.current) {
        setTrackPosition(trackPosition.current + delta * 0.035);
      }

      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frame);
  }, [shouldReduceMotion]);

  useEffect(
    () => () => {
      if (resumeTimeout.current) {
        window.clearTimeout(resumeTimeout.current);
      }
    },
    [],
  );

  return (
    <section className="hp-section hp-testimonials-section" id="testimonials">
      <div className="hp-container">
        <SectionTitle
          eyebrow="Testimonials"
          title="Stories from Happy Pet Parents"
        />
        <div className="hp-testimonials-wrap">
          <motion.div
            className="hp-testimonials"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.14 }}
            variants={staggerVariants}
          >
            <div className="hp-testimonials-track" ref={trackRef}>
              {[...testimonials, ...testimonials].map(
                ([quote, name, initials], index) => (
                  <MotionCard
                    aria-hidden={index >= testimonials.length}
                    className="hp-testimonial-card hp-tilt-card"
                    key={`${name}-${index}`}
                    onBlur={resumeAfterHover}
                    onFocus={pauseForHover}
                    onMouseEnter={pauseForHover}
                    onMouseLeave={resumeAfterHover}
                  >
                    <div className="hp-stars">
                      {Array.from({ length: 5 }, (_, index) => (
                        <TestimonialStar key={index} />
                      ))}
                    </div>
                    <p>"{quote}"</p>
                    <div>
                      <span>{initials}</span>
                      <strong>{name}</strong>
                    </div>
                  </MotionCard>
                ),
              )}
            </div>
          </motion.div>
          <div className="hp-scroll-buttons">
            <button
              onClick={() => scroll(-1)}
              type="button"
              aria-label="Previous testimonial"
            >
              <Icon name="chevron_left" />
            </button>
            <button
              onClick={() => scroll(1)}
              type="button"
              aria-label="Next testimonial"
            >
              <Icon name="chevron_right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TipPawMark() {
  return (
    <svg
      aria-hidden="true"
      className="hp-tip-paw"
      viewBox="0 0 100 100"
      width="100%"
      height="100%"
    >
      <ellipse cx="50" cy="64" rx="26" ry="22" fill="currentColor" />
      <circle cx="24" cy="38" r="11" fill="currentColor" />
      <circle cx="42" cy="22" r="11" fill="currentColor" />
      <circle cx="62" cy="23" r="11" fill="currentColor" />
      <circle cx="80" cy="40" r="11" fill="currentColor" />
    </svg>
  );
}

function PetCareTips() {
  return (
    <section className="hp-section hp-pet-care-tips" id="tips">
      <div className="hp-container">
        <Reveal className="hp-reference-title">
          <h2>From Our Vets: Pet Care Tips &amp; Advice</h2>
        </Reveal>
        <Stagger className="hp-tips-grid">
          {tips.map((tip) => (
            <MotionCard className="hp-tip-card hp-tilt-card" key={tip}>
              <div className="hp-tip-visual">
                <TipPawMark />
              </div>
              <div className="hp-tip-body">
                <h3>{tip}</h3>
                <a href="#">Read More &rarr;</a>
              </div>
            </MotionCard>
          ))}
        </Stagger>
        <div className="hp-tips-more">
          <a href="#tips">Read More Pet Care Tips &rarr;</a>
        </div>
      </div>
    </section>
  );
}

function FrequentlyAskedQuestions() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="hp-section hp-faq-section">
      <div className="hp-container hp-faq-container">
        <Reveal className="hp-reference-title">
          <h2>Frequently Asked Questions</h2>
        </Reveal>
        <Stagger className="hp-faq-list">
          {faqs.map(([question, answer], index) => (
            <motion.div
              className="hp-faq-item"
              key={question}
              variants={itemVariants}
            >
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              >
                <span>{question}</span>
                <motion.span
                  animate={{ rotate: openFaq === index ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openFaq === index ? (
                  <motion.div
                    className="hp-faq-panel"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p>{answer}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function Contact() {
  const [pet, setPet] = useState<"dog" | "cat">("dog");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="hp-section hp-contact" id="contact">
      <div className="hp-container hp-contact-grid">
        <Reveal className="hp-contact-form-card">
          <h2>Ready to Book Your Pet&apos;s Visit?</h2>
          <p>
            Fill out the form below or give us a call - our front desk team will
            confirm your appointment within one business day.
          </p>
          {submitted ? (
            <div className="hp-contact-success">
              <div aria-hidden="true">&#128062;</div>
              <strong>Request received!</strong>
              <p>
                Our team will reach out within one business day to confirm.
              </p>
            </div>
          ) : (
            <form
              className="hp-form"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              <input placeholder="Pet Owner Name" />
              <input placeholder="Phone Number" />
              <input placeholder="Email Address" />
              <input placeholder="Pet Name" />
              <div>
                <div className="hp-pet-label">Pet Type</div>
                <div className="hp-pet-toggle">
                  <button
                    className={classNames(pet === "dog" && "hp-selected")}
                    onClick={() => setPet("dog")}
                    type="button"
                  >
                    &#128054; Dog
                  </button>
                  <button
                    className={classNames(pet === "cat" && "hp-selected")}
                    onClick={() => setPet("cat")}
                    type="button"
                  >
                    &#128049; Cat
                  </button>
                </div>
              </div>
              <select defaultValue="Reason for Visit - Wellness Exam">
                <option>Reason for Visit - Wellness Exam</option>
                <option>Vaccination</option>
                <option>Illness / Injury</option>
                <option>Surgery Consult</option>
                <option>Other</option>
              </select>
              <input type="datetime-local" />
              <textarea placeholder="Additional Notes" rows={3} />
              <button className="hp-contact-submit" type="submit">
                Request Appointment
              </button>
            </form>
          )}
        </Reveal>
        <Reveal className="hp-contact-info" delay={0.12}>
          <div className="hp-map">
            <div />
            <span>[ GOOGLE MAP EMBED ]</span>
          </div>
          <div className="hp-contact-details">
            <div>&#128205; 123 Main Street, Your City, ST 00000</div>
            <div>&#128222; (555) 123-4567</div>
            <div>&#9993;&#65039; hello@happypawsvet.com</div>
            <div>
              &#128336; Mon-Fri: 8 AM-7 PM &nbsp;|&nbsp; Sat: 9 AM-4 PM
              &nbsp;|&nbsp; Sun: Closed
            </div>
            <div>&#128680; 24/7 Emergency Line: (555) 999-0000</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="hp-footer">
      <FloatingPaws variant="footer" />
      <div className="hp-container hp-footer-grid">
        <div>
          <a className="hp-brand hp-footer-brand" href="#home">
            <PawMark className="hp-brand-mark" /> <span>Happy Paws</span>
          </a>
          <p>
            Compassionate care for your cats and dogs, every step of the way.
          </p>
          <div className="hp-footer-socials">
            <a href="#" aria-label="Facebook">
              <Icon name="facebook" />
            </a>
            <a href="#" aria-label="Instagram">
              <Icon name="photo_camera" />
            </a>
            <a href="#" aria-label="TikTok">
              <span aria-hidden="true">&#9834;</span>
            </a>
          </div>
        </div>
        <FooterLinks
          title="Quick Links"
          links={[
            ["Home", "#home"],
            ["About Us", "#about"],
            ["Services", "#services"],
            ["Our Vets", "#team"],
            ["Testimonials", "#testimonials"],
            ["Contact", "#contact"],
          ]}
        />
        <FooterLinks
          title="Services"
          links={[
            ["Wellness & Vaccinations", "#services"],
            ["Surgery", "#services"],
            ["Emergency Care", "#services"],
            ["Grooming", "#services"],
            ["Boarding", "#services"],
            ["Senior Pet Care", "#services"],
          ]}
        />
        <div>
          <h3>Newsletter</h3>
          <p>Get pet care tips straight to your inbox.</p>
          <div className="hp-newsletter">
            <input placeholder="Email" type="email" />
            <button type="button">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="hp-container hp-footer-bottom">
        <span>
          &copy; 2026 Happy Paws Veterinary &amp; Pet Care. All rights
          reserved.
        </span>
        <span>Privacy Policy &middot; Terms of Service &middot; Sitemap</span>
      </div>
    </footer>
  );
}

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: Array<[string, string]>;
}) {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {links.map(([label, href]) => (
          <li key={label}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <div className="hp-page">
      <RightClickGuard enabled={true} />
      <Header />
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Facilities />
      <Team />
      <Pricing />
      <Testimonials />
      <PetCareTips />
      <FrequentlyAskedQuestions />
      <Contact />
      <Footer />
    </div>
  );
}
