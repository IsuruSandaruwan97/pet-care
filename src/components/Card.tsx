import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  tilt?: boolean;
  className?: string;
};

export function Card({ children, tilt = false, className = "", ...props }: CardProps) {
  return (
    <div
      className={`${tilt ? "tilt-card" : ""} rounded-2xl border border-outline-variant/30 bg-surface ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
