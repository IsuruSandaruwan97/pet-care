import { itemVariants } from "@/constants";
import { motion } from "motion/react";
import { ReactNode } from "react";
import { Card } from "./Card";

export function MotionCard({
  children,
  className = "",
  onBlur,
  onFocus,
  onMouseEnter,
  onMouseLeave,
  "aria-hidden": ariaHidden,
}: {
  children: ReactNode;
  className?: string;
  onBlur?: () => void;
  onFocus?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  "aria-hidden"?: boolean;
}) {
  return (
    <Card
      as={motion.article}
      aria-hidden={ariaHidden}
      className={className}
      onBlur={onBlur}
      onFocus={onFocus}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      unstyled
      variants={itemVariants}
      whileHover={{ y: -6, scale: 1.015 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
    >
      {children}
    </Card>
  );
}
