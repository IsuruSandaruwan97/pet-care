import {
  Section,
  SectionTitle,
  MotionCard,
  Button,
  Icon,
} from "@/components/atoms";
import { staggerVariants } from "@/constants";
import { testimonials } from "@/data";
import { useReducedMotion, motion } from "motion/react";
import { useRef, useEffect } from "react";

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
            <Button
              onClick={() => scroll(-1)}
              variant="unstyled"
              aria-label="Previous testimonial"
            >
              <Icon name="chevron_left" />
            </Button>
            <Button
              onClick={() => scroll(1)}
              variant="unstyled"
              aria-label="Next testimonial"
            >
              <Icon name="chevron_right" />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
