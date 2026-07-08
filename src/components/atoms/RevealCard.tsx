import { itemVariants } from "@/constants";
import { useReducedMotion, motion } from "motion/react";
import { ReactNode } from "react";
import { Card } from "./Card";

export function RevealCard({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Card
      as={motion.div}
      className={className}
      initial={shouldReduceMotion ? false : "hidden"}
      transition={{ delay }}
      unstyled
      variants={itemVariants}
      viewport={{ once: true, amount: 0.18 }}
      whileInView={shouldReduceMotion ? undefined : "visible"}
    >
      {children}
    </Card>
  );
}
