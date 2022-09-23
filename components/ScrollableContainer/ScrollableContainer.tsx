import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

interface ScrollableContainerProps {
  children: React.ReactNode;
  offset: number;
  scrollSpeed: number;
}

const ScrollableContainer = ({
  children,
  offset,
  scrollSpeed,
}: ScrollableContainerProps) => {
  return (
    <ParallaxLayer offset={offset} speed={scrollSpeed}>
      {children}
    </ParallaxLayer>
  );
};

export default ScrollableContainer;
