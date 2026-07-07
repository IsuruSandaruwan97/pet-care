import { Section, SectionTitle, Stagger, MotionCard } from "@/components/atoms";
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
    </Section>
  );
}
