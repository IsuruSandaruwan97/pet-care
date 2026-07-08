import { Section, SectionTitle, Profile } from "@/components/atoms";
import { team } from "@/data";

export function Team() {
  return (
    <Section className="hp-section hp-team" id="team">
      <div className="hp-container">
        <SectionTitle eyebrow="Our Vets" title="Meet the Care Team" />
        <div className="hp-team-grid">
          {team.map(([name, role, bio, label, image]) => {
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
          })}
        </div>
      </div>
    </Section>
  );
}
