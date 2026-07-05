import type { HTMLAttributes, ReactNode } from "react";

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  className?: string;
};

export function Section({ children, className = "", ...props }: SectionProps) {
  return (
    <section className={className} {...props}>
      {children}
    </section>
  );
}
