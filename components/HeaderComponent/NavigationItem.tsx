import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSpring, animated } from "react-spring";
import useWindowScroll from "../../hooks/useWindowScroll";
import { Link } from "../../redux/slices/navigationSlice";
import { selectNavigationSlice } from "../../redux/store";

import classes from "./header.module.css";

interface NavigationItemProps {
  link: Link;
  style: Record<string, any>;
  download?: boolean;
}

const NavigationItem = ({
  link,

  style,
}: NavigationItemProps) => {
  const scrollY = useWindowScroll();
  const { activeSection } = useSelector(selectNavigationSlice);
  // const props = useSpring({
  //   from: { transform: "translateY(-100px)", opacity: 0 },
  //   to: {
  //     transform: !headerIsHidden ? "translateY(0px)" : "translateY(-100px)",
  //     opacity: !headerIsHidden ? 1 : 0,
  //   },
  // });

  const [isActiveLink, setIsActiveLink] = useState(false);
  // const [, setY] = useSpring(() => ({ y: 0 }));

  useEffect(() => {
    if (link.url.toLocaleLowerCase() === activeSection) {
      setIsActiveLink(true);
    } else {
      setIsActiveLink(false);
    }
  }, [activeSection]);

  const handleClickNav = () => {
    const element = document.getElementById(`${link.url}`)!;
    let offsetDistance = element.getBoundingClientRect().top;
    window.scrollTo(0, offsetDistance);
    // setIsActiveLink(true);
  };

  return (
    <animated.li
      className={`${classes["navigation-item"]}  ${
        isActiveLink ? classes["navigation-item--active"] : ""
      }`}
      style={style}
    >
      {/* {link === "download cv" && profile ? (
        <a className="navigation-link" href={`${profile!.cvURL}`} download>
          {link}
        </a>
      ) : ( */}
      <a
        className="navigation-link"
        href={`#${link.url}`}
        onClick={handleClickNav}
      >
        {link.label}
      </a>
    </animated.li>
  );
};

export default NavigationItem;
