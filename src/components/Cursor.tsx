"use client";

import { useEffect, useRef } from "react";
import { PawMark } from "@/components/PawMark";

const interactiveSelector = [
  "a",
  "button",
  "input",
  "textarea",
  "select",
  "label",
  "summary",
  '[role="button"]',
  '[tabindex]:not([tabindex="-1"])',
].join(",");

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const canUseCustomCursor = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;

    if (!cursor || !canUseCustomCursor) {
      return;
    }

    let frameId = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    const updateCursorPosition = () => {
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      frameId = 0;
    };

    const queueCursorPosition = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(updateCursorPosition);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType && event.pointerType !== "mouse") {
        return;
      }

      x = event.clientX;
      y = event.clientY;
      cursor.classList.add("hp-custom-cursor-visible");
      cursor.classList.toggle(
        "hp-custom-cursor-interactive",
        Boolean((event.target as Element | null)?.closest(interactiveSelector)),
      );
      queueCursorPosition();
    };

    const handlePointerDown = () => {
      cursor.classList.add("hp-custom-cursor-pressed");
    };

    const handlePointerUp = () => {
      cursor.classList.remove("hp-custom-cursor-pressed");
    };

    const handlePointerLeave = () => {
      cursor.classList.remove("hp-custom-cursor-visible");
    };

    document.body.classList.add("hp-custom-cursor-enabled");
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      document.body.classList.remove("hp-custom-cursor-enabled");
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      document.documentElement.removeEventListener(
        "mouseleave",
        handlePointerLeave,
      );

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <div className="hp-custom-cursor" ref={cursorRef} aria-hidden="true">
      <PawMark className="hp-custom-cursor-paw" />
    </div>
  );
}
