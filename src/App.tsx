"use client";

import { Icon } from "@/components/Icon";
import { classNames } from "@/utils/classNames";
import { useEffect, useRef, useState, type CSSProperties } from "react";

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
  ["stethoscope", "Experienced, Caring Vets", "Every member of our team is licensed, certified, and genuinely loves animals."],
  ["biotech", "Modern Equipment", "On-site diagnostics mean faster answers and faster treatment."],
  ["favorite", "Fear-Free Approach", "We use gentle handling techniques to keep visits low-stress for nervous pets."],
  ["receipt_long", "Transparent Pricing", "No hidden fees. You'll always know the cost before we proceed."],
  ["schedule", "24/7 Emergency Access", "Because emergencies don't wait for business hours."],
  ["assignment", "Personalized Care Plans", "No cookie-cutter treatment. Every pet gets a plan built around their needs."],
];

const services = [
  ["verified_user", "Wellness & Preventive Care", "Annual checkups, vaccinations, parasite prevention, and early-detection screenings to keep small problems from becoming big ones.", false],
  ["vaccines", "Vaccinations", "Core and lifestyle vaccines for puppies, kittens, and adult pets, tailored to age, breed, and lifestyle.", false],
  ["sentiment_satisfied", "Dental Care", "Professional cleanings, dental X-rays, and extractions to keep teeth and gums healthy.", false],
  ["content_cut", "Surgery", "From spay/neuter to soft-tissue surgeries, performed with modern equipment and full anesthetic monitoring.", true],
  ["emergency_home", "Emergency & Urgent Care", "Same-day appointments and a 24-hour emergency line for accidents or sudden illness.", true],
  ["science", "Diagnostics & Lab Services", "On-site bloodwork, X-rays, ultrasound, and lab testing for fast, accurate diagnoses.", false],
  ["pets", "Senior Pet Care", "Specialized wellness plans for aging cats and dogs, including arthritis management and organ health monitoring.", false],
  ["auto_awesome", "Grooming", "Baths, haircuts, nail trims, and ear cleaning to keep your pet looking and feeling their best.", false],
  ["home", "Boarding & Daycare", "Safe, supervised overnight boarding and daytime play while you're away or at work.", false],
  ["nutrition", "Nutrition Counseling", "Personalized diet plans for weight management, allergies, and breed-specific nutritional needs.", false],
  ["qr_code_scanner", "Microchipping", "Quick, painless microchipping so your pet can always find their way home.", false],
  ["videocam", "In-Home & Telehealth Visits", "Virtual consultations and at-home visits for pets who do better outside a clinic setting.", false],
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
  ["Dr. Sarah Mitchell, DVM", "Lead Veterinarian · 15 yrs", "Specializing in internal medicine and senior pet wellness, Dr. Mitchell has a soft spot for grumpy old cats and the families who love them.", "TEAM HEADSHOT - Dr. Mitchell", "https://lh3.googleusercontent.com/aida-public/AB6AXuDIGJRcfSy0vpsMmHarG4TcFAy783nsmtvOsM3sU48IpBBJtTetIfh9XLWXOoox7LT193_ppDUk89_GEUic0-a1cEiaNOQPERTZVy6tCGFKeq-P8odww9U85Em0H18j-rT38Hm2ECncK1c3qAJmZKNQSptiD73SvOL2u6kDxnaH3uBivlSnpIeuCzRtFXJsBijquVa_QT-SHZd8ikMmZhOXcTgL5DpkKpyXe4AmRxlPYCjfjQV8CJynjC7Ftpil4LG4Xm9VOC8bEIES"],
  ["Dr. James Okafor, DVM", "Surgical Specialist · 10 yrs", "Dr. Okafor leads our surgical team, with a particular focus on orthopedic and soft-tissue procedures for dogs of all sizes.", "TEAM HEADSHOT - Dr. Okafor", "https://lh3.googleusercontent.com/aida-public/AB6AXuB4Bjz90oWgfmYOry5M-jfDf-R5z8YCdkmNw45LozmTqP8Q_5NxtRDvkrvbS5J1U86px3fHhjXRQhMCb1vJnNxJPQtj07so1liW-m2-hdlCWXrsHZBoAID-sRXeO0IOE6uy6EmAeYI38LExEV4zMJdgh41hbmVOo5f1UmgiLmSI3_aNzTZfZxSifDZYH-CdAwnN6209m9KfSnC_t725-LLeeoHWZkTXc1g_p0tZCoVypg8LwspF_eH2AJaeMDaOu-Dv2lEwCHqnIvaK"],
  ["Dr. Priya Nair, DVM", "Feline & Exotic Care · 8 yrs", "A self-described cat whisperer, Dr. Nair has built her career around fear-free handling techniques for anxious feline patients.", "TEAM HEADSHOT - Dr. Nair", "https://lh3.googleusercontent.com/aida-public/AB6AXuAzRHD-rOZYWkagNsKvDkZDU1XNKZZ-x3Rh4ELT1o2kgA6NGPCFdwcPbGANii9QnDVBXe7Z-LKTO9FER6smRTErCMCeXRW3ItVtG4j6xguzTZ86c-G1Agz7JKtiXBFda95nvQdzae4tQOhTfiHb4THzhBamj9DnLML5yo9vY2h47d-bOgBZZVNbLp2pK4SxQ1Y7AHAzh5OCxUj9f3TrfjaCahYpfkjzIoLZQxZS43poAICqqiPWlVsNfQB62DktLI3RBIC8DRbLTveo"],
  ["Dr. Michael Chen, DVM", "Emergency & Critical Care · 12 yrs", "Dr. Chen heads our emergency department, bringing calm, decisive care to high-stress situations.", "TEAM HEADSHOT - Dr. Chen", "https://lh3.googleusercontent.com/aida-public/AB6AXuBkO3mS6_QnCeAgbF5Jcgp6Ee_e-I8ivFFWczy-Y39kLGUwYu1_6rSdHuY94LH6VIy9q4TguHNmnpgt0O5c_riGYUrqSVuZbfL2vIsTKd3nyrNRCRY8a2MBkDQ7wUJLvG7jg6g7HYXxwtj-uZeGEJJTIyASnjpqZSq1YClGIoQCq4CsGgZRmkfipOpxN2LrIwRu_jUlILv6I3BrEh3iWEss2APjHBKfS9q2VSHuzOv2Z3hPxVrROivcUTDX-CcZ4gvTelazuk9Evz4G"],
];

const pricing = [
  ["🐶", "Puppy & Kitten Starter", "$129", "", ["Initial health exam", "First round of core vaccinations", "Deworming treatment", "Microchipping", "Nutrition & care consultation"], false],
  ["🐾", "Annual Wellness", "$189", "/year", ["Annual physical exam", "Core vaccinations", "Parasite prevention screening", "Bloodwork panel", "Dental check"], true],
  ["🦴", "Senior Pet Care", "$229", "/year", ["Comprehensive senior wellness exam", "Bloodwork & organ function panel", "Joint & mobility assessment", "Dental evaluation", "Personalized nutrition plan"], false],
  ["🚨", "Emergency Visit", "$95", "start", ["Final cost depends on diagnostics and treatment required."], false],
] as const;

const testimonials = [
  ["They treated my 14-year-old lab like she was their own. I've never felt so confident in a vet's hands.", "Amanda R.", "AR"],
  ["Our cat hates vet visits, but the team here somehow made it stress-free for both of us.", "David L.", "DL"],
  ["Fast, honest, and affordable. They explained every option before we made a decision.", "Priyanka S.", "PS"],
  ["We had a middle-of-the-night emergency and they picked up immediately. Forever grateful.", "Marcus T.", "MT"],
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
  ["Do I need an appointment, or can I walk in?", "We recommend booking ahead to minimize wait times, but we accept urgent walk-ins whenever possible."],
  ["Do you treat emergencies after hours?", "Yes, our 24/7 emergency line connects you directly with on-call veterinary staff."],
  ["What payment methods do you accept?", "We accept all major credit cards, debit, and offer flexible payment plans for larger treatments."],
  ["Do you treat pets other than cats and dogs?", "Our primary focus is cats and dogs, though we can advise on referrals for exotic pet care."],
  ["How do I get my pet's medical records?", "Simply call or email our front desk, and we'll send records to you or a new provider directly."],
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

function PawMark({ className = "", style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 100 100" aria-hidden="true">
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
        <span>📞 (555) 123-4567</span>
        <span>🕐 Mon-Sat: 8 AM-7 PM</span>
        <strong>🚨 24/7 Emergency Line</strong>
      </div>
      <nav className={classNames("hp-nav", scrolled && "hp-nav-scrolled")}>
        <a className="hp-brand" href="#home" onClick={() => setOpen(false)}>
          <PawMark className="hp-brand-mark" />
          <span>Happy Paws</span>
        </a>
        <div className="hp-navlinks">
          {navLinks.map(([label, href]) => (
            <a href={href} key={label}>{label}</a>
          ))}
        </div>
        <a className="hp-cta hp-nav-cta" href="#contact">Book an Appointment</a>
        <button className="hp-burger" type="button" aria-label="Menu" onClick={() => setOpen(true)}>
          <span />
          <span />
          <span />
        </button>
      </nav>
      {open ? (
        <div className="hp-mobile">
          <div className="hp-mobile-head">
            <span>Happy Paws</span>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close menu">×</button>
          </div>
          {navLinks.map(([label, href]) => (
            <a href={href} key={label} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="hp-cta" href="#contact" onClick={() => setOpen(false)}>Book an Appointment</a>
        </div>
      ) : null}
    </header>
  );
}

function Hero() {
  return (
    <section className="hp-hero" id="home">
      <video autoPlay muted loop playsInline preload="auto" className="hp-hero-video">
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="hp-hero-overlay" />
      <FloatingPaws variant="hero" />
      <div className="hp-hero-content">
        <h1>
          <span>Compassionate Care for Your</span>
          <span><em>Cats and Dogs</em>, Every Step of the Way</span>
        </h1>
        <p>From routine checkups to emergency care, our experienced veterinary team treats your pets like family - because they're family to you.</p>
        <div className="hp-hero-actions">
          <a className="hp-cta hp-cta-lg" href="#contact">Book an Appointment</a>
          <a className="hp-call" href="tel:5551234567"><Icon name="call" /> Call Us: (555) 123-4567</a>
        </div>
      </div>
      <div className="hp-trust">
        {trustChips.map((chip) => (
          <div className="hp-trust-chip" key={chip}><PawMark /> {chip}</div>
        ))}
      </div>
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
          style={{ left, top, width: size, height: size, opacity } as CSSProperties}
        />
      ))}
    </div>
  );
}

function SectionTitle({ eyebrow, title, inverse = false }: { eyebrow?: string; title: string; inverse?: boolean }) {
  return (
    <div className={classNames("hp-section-title", inverse && "hp-section-title-inverse")}>
      {eyebrow ? <span>{eyebrow}</span> : null}
      <h2>{title}</h2>
    </div>
  );
}

function About() {
  return (
    <section className="hp-section hp-about" id="about">
      <div className="hp-container hp-about-grid">
        <div>
          <span className="hp-eyebrow">About Happy Paws</span>
          <h2>Veterinary care that feels calm, clear, and personal.</h2>
          <p>
            Happy Paws was built for pet parents who want expert medical care without the cold clinic feeling. Our team blends modern diagnostics, thoughtful communication, and low-stress handling so every visit feels easier for pets and people.
          </p>
          <div className="hp-about-list">
            <span>AAHA-aligned care standards</span>
            <span>Fear-free handling techniques</span>
            <span>Transparent treatment estimates</span>
          </div>
        </div>
        <div className="hp-about-card hp-tilt-card">
          <img src={aboutImage} alt="Veterinarian holding a pet" />
          <div>6 Certified Vets</div>
        </div>
      </div>
      <div className="hp-stats">
        <div className="hp-container">
          {stats.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="hp-section hp-cream">
      <div className="hp-container">
        <SectionTitle title="Why Pet Parents Trust Us" />
        <div className="hp-card-grid">
          {whyCards.map(([icon, title, text]) => (
            <article className="hp-card hp-tilt-card" key={title}>
              <span className="hp-icon-badge"><Icon name={icon} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="hp-section" id="services">
      <div className="hp-container">
        <SectionTitle eyebrow="Services" title="Full-Service Care for Cats and Dogs" />
        <div className="hp-service-grid">
          {services.map(([icon, title, text, featured]) => (
            <article className={classNames("hp-service-card hp-tilt-card", featured && "hp-service-featured")} key={title}>
              <span className="hp-icon-badge"><Icon name={icon} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Facilities() {
  return (
    <section className="hp-section hp-cream" id="facilities">
      <div className="hp-container">
        <SectionTitle eyebrow="Clinic Spaces" title="Designed for Comfort and Clarity" />
        <div className="hp-facilities">
          {facilities.map(([title, text, image]) => (
            <article className="hp-facility-card" key={title}>
              <img src={image} alt={title} />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="hp-section hp-team" id="team">
      <div className="hp-container">
        <SectionTitle eyebrow="Our Vets" title="Meet the Care Team" inverse />
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
    <section className="hp-section hp-cream" id="pricing">
      <div className="hp-container">
        <SectionTitle eyebrow="Pricing" title="Simple, Transparent Care Options" />
        <div className="hp-pricing-grid">
          {pricing.map(([emoji, name, price, per, features, popular]) => (
            <article className={classNames("hp-price-card hp-tilt-card", popular && "hp-price-popular")} key={name}>
              {popular ? <span className="hp-popular">Popular</span> : null}
              <div className="hp-price-emoji">{emoji}</div>
              <h3>{name}</h3>
              <div className="hp-price">{price}<span>{per}</span></div>
              <ul>
                {features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <a href="#contact">{popular ? "Book Wellness" : "Get Started"}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (direction: number) => ref.current?.scrollBy({ left: direction * 352, behavior: "smooth" });

  return (
    <section className="hp-section" id="testimonials">
      <div className="hp-container">
        <div className="hp-title-row">
          <SectionTitle eyebrow="Testimonials" title="Stories from Happy Pet Parents" />
          <div className="hp-scroll-buttons">
            <button onClick={() => scroll(-1)} type="button" aria-label="Previous testimonial">‹</button>
            <button onClick={() => scroll(1)} type="button" aria-label="Next testimonial">›</button>
          </div>
        </div>
        <div className="hp-testimonials" ref={ref}>
          {testimonials.map(([quote, name, initials]) => (
            <article className="hp-testimonial-card" key={name}>
              <div className="hp-stars">★★★★★</div>
              <p>"{quote}"</p>
              <div>
                <span>{initials}</span>
                <strong>{name}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TipsAndFaq() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="hp-section hp-cream" id="tips">
      <div className="hp-container hp-tips-faq">
        <div>
          <SectionTitle eyebrow="Pet Care Tips" title="Helpful Reads for Everyday Care" />
          <div className="hp-tips-grid">
            {tips.map((tip) => (
              <article className="hp-tip-card" key={tip}>
                <span><Icon name="pets" /></span>
                <h3>{tip}</h3>
                <a href="#">Read Article</a>
              </article>
            ))}
          </div>
        </div>
        <div className="hp-faq">
          <h2>Frequently Asked</h2>
          {faqs.map(([question, answer], index) => (
            <div className="hp-faq-item" key={question}>
              <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                {question}
                <span>{openFaq === index ? "×" : "+"}</span>
              </button>
              <div className={classNames(openFaq === index && "hp-faq-open")}>
                <p>{answer}</p>
              </div>
            </div>
          ))}
        </div>
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
        <div>
          <SectionTitle eyebrow="Book a Visit" title="Request an Appointment" />
          <form className="hp-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
            <div className="hp-pet-toggle">
              <button className={classNames(pet === "dog" && "hp-selected")} onClick={() => setPet("dog")} type="button">Dog</button>
              <button className={classNames(pet === "cat" && "hp-selected")} onClick={() => setPet("cat")} type="button">Cat</button>
            </div>
            <div className="hp-form-row">
              <input placeholder="Your name" />
              <input placeholder="Pet name" />
            </div>
            <select defaultValue="">
              <option value="" disabled>Service needed</option>
              <option>Wellness & Preventive Care</option>
              <option>Emergency & Urgent Care</option>
              <option>Dental Care</option>
              <option>Grooming</option>
            </select>
            <textarea placeholder={`Tell us about your ${pet}`} rows={5} />
            <button className="hp-cta" type="submit">{submitted ? "Request Sent" : "Send Request"}</button>
          </form>
        </div>
        <aside className="hp-contact-card">
          <h3>Clinic Information</h3>
          <p><strong>Main Clinic</strong><br />123 Pet Lane, Healthville, ST 54321</p>
          <p><strong>Contact Numbers</strong><br />Main: (555) 123-4567<br /><span>ER Line: (555) 999-0000</span></p>
          <p><strong>Email Support</strong><br />care@happypaws.com</p>
          <div className="hp-map"><Icon name="map" /></div>
        </aside>
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
          <a className="hp-brand hp-footer-brand" href="#home"><PawMark className="hp-brand-mark" /> <span>Happy Paws</span></a>
          <p>Providing professional warmth and expert clinical care for your pets since 2009.</p>
        </div>
        <FooterLinks title="Quick Links" links={["Home", "About Us", "Services", "Our Vets", "Testimonials", "Contact"]} />
        <FooterLinks title="Services" links={["Wellness & Vaccinations", "Surgery", "Emergency Care", "Grooming", "Boarding", "Senior Pet Care"]} />
        <div>
          <h3>Newsletter</h3>
          <p>Get monthly pet care tips delivered to your inbox.</p>
          <div className="hp-newsletter">
            <input placeholder="Email Address" type="email" />
            <button type="button" aria-label="Subscribe">→</button>
          </div>
        </div>
      </div>
      <div className="hp-container hp-footer-bottom">
        <span>© 2024 Happy Paws Veterinary Clinic. All rights reserved.</span>
        <div><a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="#">Cookie Policy</a></div>
      </div>
    </footer>
  );
}

function FooterLinks({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {links.map((link) => <li key={link}><a href="#">{link}</a></li>)}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <div className="hp-page">
      <Header />
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Facilities />
      <Team />
      <Pricing />
      <Testimonials />
      <TipsAndFaq />
      <Contact />
      <Footer />
    </div>
  );
}
