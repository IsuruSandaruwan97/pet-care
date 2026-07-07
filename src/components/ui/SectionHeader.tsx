type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  inverse?: boolean;
  accent?: "primary" | "secondary";
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  showDivider?: boolean;
  unstyled?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  inverse = false,
  accent = "secondary",
  className = "",
  eyebrowClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  showDivider = true,
  unstyled = false,
}: SectionHeaderProps) {
  if (unstyled) {
    return (
      <div className={className}>
        {eyebrow ? <span className={eyebrowClassName}>{eyebrow}</span> : null}
        <h2 className={titleClassName}>{title}</h2>
        {description ? <p className={descriptionClassName}>{description}</p> : null}
      </div>
    );
  }

  return (
    <div className={`mb-16 text-center ${className}`}>
      {eyebrow ? (
        <span className={`${inverse ? "text-secondary-container" : "text-secondary"} mb-4 block font-label-md uppercase tracking-widest ${eyebrowClassName}`}>
          {eyebrow}
        </span>
      ) : null}
      <h2 className={`mb-4 font-headline-lg ${inverse ? "text-white" : "text-primary"} ${titleClassName}`}>{title}</h2>
      {showDivider ? (
        <div className={`mx-auto h-1 w-24 rounded-full ${accent === "primary" ? "bg-primary" : "bg-secondary-container"}`} />
      ) : null}
      {description ? <p className={`mx-auto mt-6 max-w-2xl text-on-surface-variant ${descriptionClassName}`}>{description}</p> : null}
    </div>
  );
}
