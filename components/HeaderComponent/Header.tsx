import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

// components
import style from "./header.module.css";
import Logo from "../LogoContainer/index";
import ScreenNavigation from "./ScreenNavigation";
import useWindowScroll from "../../hooks/useWindowScroll";

import { useSpring, animated, config } from "react-spring";
import MobileNavigation from "./MobileNavigation/MobileNavigation";
import Hamburger from "../Hamburger/Hamburger";
import { selectNavigationSlice, selectSidebarState } from "../../redux/store";

const Header = () => {
  // const activeSection = useSelector(selectActiveLink);

  const sidebarIsOpen = useSelector(selectSidebarState);
  const { links } = useSelector(selectNavigationSlice);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const scrollY = useWindowScroll();
  const [scrollValue, setScrollValue] = useState(scrollY);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    setIsHidden(scrollValue > scrollY);
    setScrollValue(scrollY);

    if (scrollY === 0) {
      setIsHidden(false);
      setScrollValue(scrollY);
    }
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
        <ScreenNavigation links={links} headerIsHidden={isHidden} />

        <MobileNavigation links={links} />
      </div>
      {/* <MobileNavigation links={links} /> */}
    </header>
  );
};

export default Header;
