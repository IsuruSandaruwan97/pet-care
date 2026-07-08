import {
  Button,
  Section,
  SectionTitle,
  Stagger,
  MotionCard,
} from "@/components/atoms";
import { facilities } from "@/data";

export function Facilities() {
  return (
    <Section className="hp-section hp-cream" id="facilities">
      <div className="hp-container">
        <SectionTitle
          eyebrow="Clinic Spaces"
          title="Designed for Comfort and Clarity"
        />
        <Stagger className="hp-facilities">
          {facilities.map(([title, text, visual]) => (
            <MotionCard className="hp-facility-card" key={title}>
              <div
                aria-label={title}
                className={`hp-facility-visual hp-facility-${visual}`}
                role="img"
              >
                <span>{title}</span>
              </div>
              <div className="hp-facility-body">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </MotionCard>
          ))}
        </Stagger>
        <div className="hp-facilities-more">
          <Button href="/facilities" variant="outline">
            View All Facilities
          </Button>
        </div>
      </div>
    </Section>
  );
}
