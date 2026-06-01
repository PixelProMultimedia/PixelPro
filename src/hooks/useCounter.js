import { useEffect, useRef, useState } from "react";

/**
 * Animates a number from 0 → target when `start` becomes true.
 * duration: ms, easing: "ease" | "linear"
 */
export function useCounter(target, { duration = 1800, start = true } = {}) {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const numericTarget = parseFloat(target);

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numericTarget));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setCount(numericTarget);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [start, target, duration]);

  return count;
}