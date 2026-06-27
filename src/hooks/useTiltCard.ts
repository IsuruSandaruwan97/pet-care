import { useCallback } from "react";

export function useTiltCard() {
  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLElement>) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  }, []);

  const handleMouseLeave = useCallback((event: React.MouseEvent<HTMLElement>) => {
    event.currentTarget.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
  }, []);

  return { handleMouseLeave, handleMouseMove };
}
