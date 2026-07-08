"use client";

import { PawMark } from "@/components/atoms";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import "@/components/organisms/perloader/styles.css";

type PreloaderProps = {
  onComplete?: () => void;
};

const preloadPaws = [
  { x: 6, y: 66, size: 44, rotate: -24, delay: 0 },
  { x: 74, y: 40, size: 52, rotate: -14, delay: 0.14 },
  { x: 146, y: 64, size: 60, rotate: -24, delay: 0.28 },
  { x: 222, y: 36, size: 68, rotate: -14, delay: 0.42 },
  { x: 298, y: 60, size: 76, rotate: -24, delay: 0.56 },
] as const;

export function Preloader({ onComplete }: PreloaderProps) {
  const [isLeaving, setIsLeaving] = useState(false);
  const [isMounted, setIsMounted] = useState(true);
  const completeRef = useRef(onComplete);

  useEffect(() => {
    completeRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const shouldReduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const hideDelay = shouldReduceMotion ? 400 : 2200;
    const hideTimer = window.setTimeout(() => setIsLeaving(true), hideDelay);
    const unmountTimer = window.setTimeout(() => {
      setIsMounted(false);
      completeRef.current?.();
    }, hideDelay + 750);

    return () => {
      window.clearTimeout(hideTimer);
      window.clearTimeout(unmountTimer);
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      aria-label="Happy Paws loading"
      aria-live="polite"
      className={`hp-preloader${isLeaving ? " hp-preloader-leaving" : ""}`}
      role="status"
    >
      <div className="hp-preloader-paws" aria-hidden="true">
        {preloadPaws.map((paw) => (
          <div
            className="hp-preloader-paw"
            key={`${paw.x}-${paw.y}`}
            style={
              {
                "--pl-x": `${paw.x}px`,
                "--pl-y": `${paw.y}px`,
                "--pl-size": `${paw.size}px`,
                "--pl-rotate": `${paw.rotate}deg`,
                "--pl-delay": `${paw.delay}s`,
              } as CSSProperties
            }
          >
            <PawMark />
          </div>
        ))}
      </div>
      <div className="hp-preloader-brand">Happy Paws</div>
      <div className="hp-preloader-subtitle">Veterinary &amp; Pet Care</div>
    </div>
  );
}
