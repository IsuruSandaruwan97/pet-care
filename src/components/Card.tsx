import type { ElementType, HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  as?: ElementType;
  children: ReactNode;
  tilt?: boolean;
  className?: string;
  unstyled?: boolean;
  [key: string]: unknown;
};

export function Card({
  as: Component = "div",
  children,
  tilt = false,
  className = "",
  unstyled = false,
  ...props
}: CardProps) {
  if (unstyled) {
    return (
      <Component className={className} {...props}>
        {children}
      </Component>
    );
  }

  return (
    <Component
      className={`${tilt ? "tilt-card" : ""} rounded-2xl border border-outline-variant/30 bg-surface ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
