import { classNames } from "@/utils";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function SectionTitle({
  eyebrow,
  title,
  inverse = false,
}: {
  eyebrow?: string;
  title: string;
  inverse?: boolean;
}) {
  return (
    <Reveal
      className={classNames(
        "hp-section-title",
        inverse && "hp-section-title-inverse",
      )}
    >
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        showDivider={false}
        unstyled
      />
    </Reveal>
  );
}
