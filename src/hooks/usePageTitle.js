import { useEffect } from "react";

export function usePageTitle(title) {
  useEffect(() => {
    const base = "PixelPro Multimedia";
    document.title = title ? `${title} | ${base}` : base;
    return () => { document.title = base; };
  }, [title]);
}