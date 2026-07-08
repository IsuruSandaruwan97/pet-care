import {
  Button,
  Section,
  SectionTitle,
  Stagger,
  MotionCard,
  IconBadge,
} from "@/components/atoms";
import { services } from "@/data";
import { classNames } from "@/utils";

export function Services() {
  return (
    <Section className="hp-section" id="services">
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
              <IconBadge icon={icon} />
              <h3>{title}</h3>
              <p>{text}</p>
            </MotionCard>
          ))}
        </Stagger>
        <div className="mt-10 flex justify-center">
          <Button href="/services">Explore all services</Button>
        </div>
      </div>
    </Section>
  );
}
