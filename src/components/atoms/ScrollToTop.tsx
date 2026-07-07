"use client";

import { useEffect, useState } from "react";
import { Button } from "./Button";
import { Icon } from "./Icon";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 520);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      aria-label="Scroll back to top"
      className={`hp-scroll-top ${isVisible ? "hp-scroll-top-visible" : ""}`}
      onClick={scrollToTop}
      variant="unstyled"
    >
      <Icon name="keyboard_arrow_up" />
    </Button>
  );
}
