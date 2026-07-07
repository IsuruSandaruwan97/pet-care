import { staggerVariants } from "@/constants";
import { useReducedMotion, motion } from "motion/react";
import { ReactNode } from "react";

export function Stagger({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.14 }}
      variants={staggerVariants}
    >
      {children}
    </motion.div>
  );
}
