import React, { MutableRefObject, useEffect, useState } from "react";

// Hook
export default function useOnScreen<T extends Element>(
  ref: MutableRefObject<HTMLDivElement | null>,
  rootMargin: string = "0px"
) {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState<boolean>(false);
  const [sectionId, setSectionId] = useState<string>("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
        const intersectingTargetId = entry.target.id;
        if (intersectingTargetId !== sectionId) {
          setSectionId(entry.target.id);
        }
      },
      {
        rootMargin,
      }
    );
    if (ref && ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref && ref.current) {
        observer.unobserve(ref!.current);
      }
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return { isIntersecting, sectionId };
}
