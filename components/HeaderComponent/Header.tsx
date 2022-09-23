import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectActiveLink } from "../../redux/store";

// components
import style from "./header.module.css";
import Logo from "../LogoContainer/index";
import ScreenNavigation from "./ScreenNavigation";

const links = [
  { label: "hello", url: "hello" },
  { label: "me", url: "me" },
  { label: "projects", url: "projects" },
  { label: "contact", url: "contact" },
];

const Header = () => {
  const activeSection = useSelector(selectActiveLink);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [scrollValue, setScrollValue] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768) {
        scrollValue > window.scrollY ? setIsHidden(false) : setIsHidden(true);
        setScrollValue(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`${style["container"]} ${isHidden ? "hidden" : ""}`}
      ref={headerRef}
    >
      <div className={style["nav-container"]}>
        <Logo />
        <ScreenNavigation links={links} />
        {/* <Hamburger /> */}
      </div>
      {/* <MobileNavigation links={links} /> */}
    </header>
  );
};

export default Header;
