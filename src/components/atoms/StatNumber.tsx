import { parseStatValue } from "@/utils";
import { useInView, useReducedMotion } from "motion/react";
import { useRef, useState, useEffect } from "react";

export function StatNumber({ value }: { value: string }) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.8 });
  const shouldReduceMotion = useReducedMotion();
  const { target, suffix } = parseStatValue(value);
  const [displayValue, setDisplayValue] = useState(
    shouldReduceMotion ? target : 0,
  );

  useEffect(() => {
    if (!isInView) {
      return;
    }

    if (shouldReduceMotion || target === 0) {
      setDisplayValue(target);
      return;
    }

    const duration = 1400;
    const startTime = window.performance.now();
    let frameId = 0;

    const update = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setDisplayValue(Math.round(target * easedProgress));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(update);
      }
    };

    frameId = window.requestAnimationFrame(update);

    return () => window.cancelAnimationFrame(frameId);
  }, [isInView, shouldReduceMotion, target]);

  return (
    <strong ref={ref}>
      {displayValue.toLocaleString()}
      {suffix}
    </strong>
  );
}
