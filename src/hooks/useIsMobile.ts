import { useEffect, useState } from "react";

export function useIsMobile(breakpoint = 820) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const updateIsMobile = () => setIsMobile(query.matches);

    updateIsMobile();
    query.addEventListener("change", updateIsMobile);

    return () => query.removeEventListener("change", updateIsMobile);
  }, [breakpoint]);

  return isMobile;
}
