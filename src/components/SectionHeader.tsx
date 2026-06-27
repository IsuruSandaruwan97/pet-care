type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  inverse?: boolean;
  accent?: "primary" | "secondary";
};

export function SectionHeader({ eyebrow, title, description, inverse = false, accent = "secondary" }: SectionHeaderProps) {
  return (
    <div className="mb-16 text-center">
      {eyebrow ? (
        <span className={`${inverse ? "text-secondary-container" : "text-secondary"} mb-4 block font-label-md uppercase tracking-widest`}>
          {eyebrow}
        </span>
      ) : null}
      <h2 className={`mb-4 font-headline-lg ${inverse ? "text-white" : "text-primary"}`}>{title}</h2>
      <div className={`mx-auto h-1 w-24 rounded-full ${accent === "primary" ? "bg-primary" : "bg-secondary-container"}`} />
      {description ? <p className="mx-auto mt-6 max-w-2xl text-on-surface-variant">{description}</p> : null}
    </div>
  );
}
