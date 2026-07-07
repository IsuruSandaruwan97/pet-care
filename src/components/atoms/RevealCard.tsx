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

  if (shouldReduceMotion) {
    return (
      <Card className={className} unstyled>
        {children}
      </Card>
    );
  }

  return (
    <Card
      as={motion.div}
      className={className}
      initial="hidden"
      transition={{ delay }}
      unstyled
      variants={itemVariants}
      viewport={{ once: true, amount: 0.18 }}
      whileInView="visible"
    >
      {children}
    </Card>
  );
}
