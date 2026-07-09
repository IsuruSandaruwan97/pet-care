import {
  Section,
  Reveal,
  Stagger,
  MotionCard,
  PawMark,
} from "@/components/atoms";
import { tips } from "@/data";
import Image from "next/image";

export function PetCareTips() {
  return (
    <Section className="hp-section hp-pet-care-tips" id="tips">
      <div className="hp-container">
        <Reveal className="hp-reference-title">
          <h2>From Our Vets: Pet Care Tips &amp; Advice</h2>
        </Reveal>
        <Stagger className="hp-tips-grid">
          {tips.map((tip) => {
            return (
              <MotionCard className="hp-tip-card hp-tilt-card" key={tip.title}>
                <div className="hp-tip-visual">
                  {tip.image ? (
                    <Image
                      alt={tip.title}
                      className="hp-tip-image"
                      fill
                      sizes="(max-width: 900px) 100vw, 33vw"
                      src={tip.image}
                    />
                  ) : null}
                  <PawMark className="hp-tip-paw" />
                </div>
                <div className="hp-tip-body">
                  <h3>{tip.title}</h3>
                  <a href="/pet-care">Read More &rarr;</a>
                </div>
              </MotionCard>
            );
          })}
        </Stagger>
        <div className="hp-tips-more">
          <a href="/pet-care">Read More Pet Care Tips &rarr;</a>
        </div>
      </div>
    </Section>
  );
}
