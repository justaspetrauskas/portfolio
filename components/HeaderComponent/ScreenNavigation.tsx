import React from "react";
import NavigationItem from "../NavigationItem/NavigationItem";
import style from "./header.module.css";

interface ScreenNavigationProps {
  links: Record<string, any>[];
}
const ScreenNavigation = ({ links }: ScreenNavigationProps) => {
  return (
    <ul className={style["navbar-navigation"]}>
      {links.map((link, index) => (
        <NavigationItem link={link} item={index + 1} key={index} />
      ))}
    </ul>
  );
};

export default ScreenNavigation;
