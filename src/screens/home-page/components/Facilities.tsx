import {
  Button,
  Carousel,
  Section,
  SectionTitle,
  MotionCard,
} from "@/components/atoms";
import { facilities } from "@/data";
import { useIsMobile } from "@/hooks";
import Image from "next/image";

export function Facilities() {
  const isMobile = useIsMobile();
  return (
    <Section className="hp-section hp-cream" id="facilities">
      <div className="hp-container">
        <SectionTitle
          eyebrow="Clinic Spaces"
          title="Designed for Comfort and Clarity"
        />
        <Carousel
          className="hp-facilities-carousel"
          getKey={([title]) => title}
          items={facilities}
          loop={false}
          pagination={isMobile}
          autoplay={isMobile}
          showArrows={false}
          breakpoints={{ mobile: 1, tablet: 3, desktop: 3 }}
          nextLabel="Next facility"
          previousLabel="Previous facility"
          renderItem={([title, text, visual, image]) => {
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
          }}
        />
        <div className="hp-facilities-more">
          <Button href="/facilities" variant="outline">
            View All Facilities
          </Button>
        </div>
      </div>
    </Section>
  );
}
