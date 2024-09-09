import { RefObject, useEffect, useMemo, useState } from "react";

export default function useOnScreen(ref: RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(() => {
    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      return new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting);
      });
    }

    // {
    //   root: null, // viewport
    //   rootMargin: "0px", // no margin
    //   threshold: 0.5, // 50% of target visible
    // }
    return null;
  }, []);

  useEffect(() => {
    if (!observer || !ref.current) return;

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [observer, ref]);

  return isIntersecting;
}
