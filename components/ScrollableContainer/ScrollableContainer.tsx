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
    ease: 0.1,
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

  const smoothScrolling = () => {
    scrollConfigs.current = window.scrollY;
    scrollConfigs.previous +=
      scrollConfigs.current - scrollConfigs.previous + scrollConfigs.ease;
    scrollConfigs.rounded = Math.round(scrollConfigs.previous * 100) / 100;

    const difference = scrollConfigs.current - scrollConfigs.rounded;
    // to use for other effects
    const acceleration = difference / size.width!;

    scrollContainer.current!.style.transform = `translate3d(0, -${scrollConfigs.rounded}px, 0)`;
    //loop vai raf
    requestAnimationFrame(() => smoothScrolling());
  };

  return <div ref={scrollContainer}>{children}</div>;
};

export default ScrollableContainer;
