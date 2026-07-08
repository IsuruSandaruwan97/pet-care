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

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.14 }}
      variants={staggerVariants}
    >
      {children}
    </motion.div>
  );
}
