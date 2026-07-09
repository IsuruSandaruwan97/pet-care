import {
  Button,
  Section,
  SectionTitle,
  Stagger,
  MotionCard,
} from "@/components/atoms";
import { facilities } from "@/data";
import Image from "next/image";

const facilityImages: Partial<Record<(typeof facilities)[number][2], string>> =
  {};

export function Facilities() {
  return (
    <Section className="hp-section hp-cream" id="facilities">
      <div className="hp-container">
        <SectionTitle
          eyebrow="Clinic Spaces"
          title="Designed for Comfort and Clarity"
        />
        <Stagger className="hp-facilities">
          {facilities.map(([title, text, visual, image]) => {
            return (
              <MotionCard className="hp-facility-card" key={title}>
                <div
                  aria-label={title}
                  className={`hp-facility-visual hp-facility-${visual}`}
                  role="img"
                >
                  {image ? (
                    <Image
                      alt=""
                      className="hp-facility-image"
                      fill
                      sizes="(max-width: 900px) 100vw, 33vw"
                      src={image}
                    />
                  ) : null}
                </div>
                <div className="hp-facility-body">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </MotionCard>
            );
          })}
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
