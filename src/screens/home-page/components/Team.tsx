import {
  Button,
  Carousel,
  Section,
  SectionTitle,
  Profile,
} from "@/components/atoms";
import { team } from "@/data";
import { useIsMobile } from "@/hooks";

export function Team() {
  const isMobile = useIsMobile();
  return (
    <Section className="hp-section hp-team" id="team">
      <div className="hp-container">
        <SectionTitle eyebrow="Our Vets" title="Meet the Care Team" />
        <Carousel
          className="hp-team-carousel"
          getKey={([name]) => name}
          items={team}
          loop={false}
          pagination={isMobile}
          autoplay={isMobile}
          nextLabel="Next team member"
          previousLabel="Previous team member"
          showArrows={false}
          breakpoints={{ mobile: 1, tablet: 4, desktop: 4 }}
          renderItem={([name, role, bio, label, image]) => {
            const imageURL = `/api/media/team-${image.toLowerCase()}`;

            return (
              <Profile
                bio={bio}
                image={imageURL}
                key={name}
                label={label}
                name={name}
                role={role}
                variant="happyPaws"
              />
            );
          }}
        />
        <div className="hp-team-more">
          <Button href="/our-vets" variant="outline">
            See More
          </Button>
        </div>
      </div>
    </Section>
  );
}
