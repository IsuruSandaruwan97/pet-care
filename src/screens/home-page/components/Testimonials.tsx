import {
  Carousel,
  MotionCard,
  Section,
  SectionTitle,
} from "@/components/atoms";
import { staggerVariants } from "@/constants";
import { testimonials } from "@/data";
import { motion } from "motion/react";

function TestimonialStar() {
  return (
    <span className="hp-star-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
      </svg>
    </span>
  );
}

export function Testimonials() {
  return (
    <Section className="hp-section hp-testimonials-section" id="testimonials">
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
            <Carousel
              autoplay
              autoplayDelay={1800}
              autoplaySpeed={900}
              breakpoints={{ mobile: 1, tablet: 2, desktop: 3 }}
              getKey={([, name], index) => `${name}-${index}`}
              items={testimonials}
              loop
              nextLabel="Next testimonial"
              previousLabel="Previous testimonial"
              pagination
              renderItem={([quote, name, initials]) => (
                <MotionCard className="hp-testimonial-card hp-tilt-card">
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
              )}
            />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
