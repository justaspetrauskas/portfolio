import React, { useEffect, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import useWindowSize, { Size } from "../../hooks/useWindowSize";

interface ScrollableContainerProps {
  children: React.ReactNode;
}

const ScrollableContainer = ({ children }: ScrollableContainerProps) => {
  const scrollContainer = useRef<HTMLDivElement | null>(null);
  const size: Size = useWindowSize();

  const scrollConfigs = {
    ease: 0.05,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  useEffect(() => {
    if (scrollContainer && scrollContainer.current) {
      document.body.style.height = `${
        scrollContainer.current.getBoundingClientRect().height
      }px`;
    }
  }, [size.height]);

  // run scrollrender when page is loaded
  useEffect(() => {
    requestAnimationFrame(() => smoothScrolling());
  }, []);

  const smoothScrolling = () => {
    scrollConfigs.current = window.scrollY;
    scrollConfigs.previous +=
      (scrollConfigs.current - scrollConfigs.previous) * scrollConfigs.ease;
    scrollConfigs.rounded = Math.round(scrollConfigs.previous * 100) / 100;

    // console.log("scroll value", scrollConfigs.rounded);

    const difference = scrollConfigs.current - scrollConfigs.rounded;
    // to use for other effects
    const acceleration = difference / size.width!;

    if (scrollContainer) {
      scrollContainer.current!.style.transform = `translate3d(0, -${scrollConfigs.rounded}px, 0)`;
    }

    //loop
    requestAnimationFrame(() => smoothScrolling());
  };

  return <div ref={scrollContainer}>{children}</div>;
};

export default ScrollableContainer;
