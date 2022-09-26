import React from "react";
import { useTransition } from "react-spring";
import NavigationItem from "./NavigationItem";
import style from "./header.module.css";
import { Link } from "./Header";
import { link } from "fs/promises";

interface ScreenNavigationProps {
  links: Link[];
  headerIsHidden: boolean;
}
const ScreenNavigation = ({ links, headerIsHidden }: ScreenNavigationProps) => {
  const linkTransitions = useTransition(headerIsHidden ? [] : links, {
    key: (item: any) => item.id,
    from: { opacity: 0, transform: "translateY(-100px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(-100px)" },
    config: { mass: 8, tension: 1500, friction: 100 },
    // delay: 200,
    trail: 400 / links.length,
  });

  return (
    <ul className={style["navbar-navigation"]}>
      {linkTransitions((style, item) => (
        <NavigationItem link={item} style={style} />
      ))}
    </ul>
  );
};

export default ScreenNavigation;
