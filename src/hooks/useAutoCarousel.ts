import { useCallback, useEffect, useRef, useState } from "react";

export function useAutoCarousel(itemCount: number, interval = 4000) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scrollToIndex = useCallback((index: number) => {
    const carousel = carouselRef.current;
    const item = carousel?.querySelectorAll<HTMLElement>(".carousel-item")[index];

    if (!carousel || !item) return;

    carousel.scrollLeft = item.offsetLeft - (carousel.offsetWidth - item.offsetWidth) / 2;
    setActiveIndex(index);
  }, []);

  const scrollCarousel = useCallback(
    (direction: "left" | "right") => {
      const nextIndex =
        direction === "left" ? (activeIndex - 1 + itemCount) % itemCount : (activeIndex + 1) % itemCount;
      scrollToIndex(nextIndex);
    },
    [activeIndex, itemCount, scrollToIndex],
  );

  const handleManualInteraction = useCallback(
    (callback: () => void) => {
      setIsPaused(true);
      callback();
      window.setTimeout(() => setIsPaused(false), interval);
    },
    [interval],
  );

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const index = Math.round(carousel.scrollLeft / carousel.offsetWidth);
      setActiveIndex(Math.min(Math.max(index, 0), itemCount - 1));
    };

    carousel.addEventListener("scroll", handleScroll);
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, [itemCount]);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => scrollCarousel("right"), interval);
    return () => window.clearInterval(timer);
  }, [interval, isPaused, scrollCarousel]);

  return {
    activeIndex,
    carouselRef,
    handleManualInteraction,
    scrollCarousel,
    scrollToIndex,
    setIsPaused,
  };
}
