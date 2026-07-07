import {
  Section,
  SectionTitle,
  Stagger,
  MotionCard,
  IconBadge,
} from "@/components/atoms";
import { whyCards } from "@/data";

export function WhyChooseUs() {
  return (
    <Section className="hp-section hp-cream hp-why">
      <div className="hp-container">
        <SectionTitle title="Why Pet Parents Trust Us" />
        <Stagger className="hp-card-grid">
          {whyCards.map(([icon, title, text]) => (
            <MotionCard className="hp-card hp-tilt-card" key={title}>
              <IconBadge icon={icon} />
              <h3>{title}</h3>
              <p>{text}</p>
            </MotionCard>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
