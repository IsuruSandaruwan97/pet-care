import {
  Carousel,
  Section,
  SectionTitle,
  MotionCard,
  Reveal,
  Button,
} from "@/components/atoms";
import { pricing } from "@/data";
import { useIsMobile } from "@/hooks";
import { classNames } from "@/utils";
import { motion } from "motion/react";

export function Pricing() {
  const isMobile = useIsMobile();
  return (
    <Section className="hp-section hp-pricing-section" id="pricing">
      <div className="hp-container">
        <SectionTitle title="Simple, Transparent Pricing" />
        <Carousel
          className="hp-pricing-carousel"
          getKey={([, name]) => name}
          items={pricing}
          loop={false}
          pagination={isMobile}
          autoplay={false}
          showArrows={false}
          breakpoints={{ mobile: 1, tablet: 4, desktop: 4 }}
          nextLabel="Next pricing plan"
          previousLabel="Previous pricing plan"
          renderItem={([emoji, name, price, per, features, popular]) => (
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
          )}
        />
        <Reveal className="hp-pricing-note">
          All packages can be customized. Ask our front desk about multi-pet
          discounts and payment plans.
        </Reveal>
        <Reveal className="hp-pricing-more">
          <Button href="/pricing" variant="secondary">
            See All Plans
          </Button>
        </Reveal>
      </div>
    </Section>
  );
}
