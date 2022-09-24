import { useState, useEffect } from "react";

// export interface ScrollPosition {
//   scrollY: number;
// }

export default function useWindowScroll(): number {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    function updatePosition() {
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition);
    };
  });

  return scrollY;
}
