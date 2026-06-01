import { useEffect, useRef, useState } from "react";

/**
 * Returns a ref to attach to any element.
 * When that element enters the viewport, `visible` flips to true.
 * Supports: threshold (0–1), rootMargin, triggerOnce (default true).
 */
export function useScrollReveal({
  threshold = 0.18,
  rootMargin = "0px 0px -60px 0px",
  triggerOnce = true,
} = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (triggerOnce) observer.unobserve(el);
        } else if (!triggerOnce) {
          setVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, visible };
}