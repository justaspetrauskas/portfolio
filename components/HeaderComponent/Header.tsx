import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

// components
import style from "./header.module.css";
import Logo from "../LogoContainer/index";
import ScreenNavigation from "./ScreenNavigation";
import useWindowScroll from "../../hooks/useWindowScroll";

import { useSpring, animated, config } from "react-spring";
import MobileNavigation from "./MobileNavigation";
import Hamburger from "../Hamburger/Hamburger";
import { selectSidebarState } from "../../redux/store";

export interface Link {
  id: number;
  label: string;
  url: string;
}

const links: Link[] = [
  { label: "hello", url: "hello", id: 1 },
  { label: "me", url: "me", id: 2 },
  { label: "projects", url: "projects", id: 3 },
  { label: "contact", url: "contact", id: 4 },
];

const Header = () => {
  // const activeSection = useSelector(selectActiveLink);

  const sidebarIsOpen = useSelector(selectSidebarState);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const scrollY = useWindowScroll();
  const [scrollValue, setScrollValue] = useState(500);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    scrollY >= scrollValue ? setIsHidden(true) : setIsHidden(false);
    // give some space before hiding the header
    if (scrollY >= scrollValue + 20) setScrollValue(scrollY);
  }, [scrollY]);

  // Setup animation for nav element

  return (
    <header
      className={`${style["container"]} ${
        isHidden ? style["hidden-container"] : ""
      }`}
      ref={headerRef}
      // style={springProps}
    >
      <div className={style["nav-container"]}>
        <Logo />
        {/* <ScreenNavigation links={links} headerIsHidden={isHidden} /> */}
        <Hamburger />
        {sidebarIsOpen && <MobileNavigation links={links} />}
      </div>
      {/* <MobileNavigation links={links} /> */}
    </header>
  );
};

export default Header;
