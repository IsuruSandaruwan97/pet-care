import type { CSSProperties } from "react";

type PawMarkProps = {
  className?: string;
  style?: CSSProperties;
};

export function PawMark({ className = "", style }: PawMarkProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      style={style}
      viewBox="0 0 100 100"
    >
      <ellipse cx="50" cy="64" rx="26" ry="22" fill="currentColor" />
      <circle cx="24" cy="38" r="11" fill="currentColor" />
      <circle cx="42" cy="22" r="11" fill="currentColor" />
      <circle cx="62" cy="23" r="11" fill="currentColor" />
      <circle cx="80" cy="40" r="11" fill="currentColor" />
    </svg>
  );
}
