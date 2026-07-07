import { CSSProperties } from "react";
import { PawMark } from "../atoms";

export function FloatingPaws({ variant }: { variant: "hero" | "footer" }) {
  const paws =
    variant === "hero"
      ? [
          ["6%", "20%", 84, 0.22, "hp-float-a"],
          ["82%", "15%", 70, 0.18, "hp-float-b"],
          ["14%", "66%", 58, 0.16, "hp-float-a"],
          ["74%", "60%", 96, 0.2, "hp-float-b"],
          ["46%", "12%", 46, 0.13, "hp-float-a"],
          ["32%", "78%", 64, 0.17, "hp-float-b"],
        ]
      : [
          ["4%", "18%", 70, 0.07, "hp-float-a"],
          ["40%", "58%", 54, 0.06, "hp-float-b"],
          ["68%", "12%", 60, 0.07, "hp-float-a"],
          ["88%", "52%", 46, 0.06, "hp-float-b"],
        ];

  return (
    <div className="hp-floating-paws">
      {paws.map(([left, top, size, opacity, animation], index) => (
        <PawMark
          className={String(animation)}
          key={`${left}-${top}`}
          style={
            { left, top, width: size, height: size, opacity } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
