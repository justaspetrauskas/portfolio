import React from "react";
import { useSelector } from "react-redux";
import {
  useSprings,
  animated,
  useSpringRef,
  useTransition,
  useSpring,
  config,
  useChain,
} from "react-spring";
import { Link } from "../../../redux/slices/navigationSlice";
import { selectSidebarState } from "../../../redux/store";
import Hamburger from "../../Hamburger/Hamburger";

import classes from "./mobileNav.module.css";

interface MobileNavigationProps {
  links: Link[];
}

const MobileNavigation = ({ links }: MobileNavigationProps) => {
  const sidebarIsOpen = useSelector(selectSidebarState);
  const springsRef = useSpringRef();

  const linkTransitions = useTransition(!sidebarIsOpen ? [] : links, {
    key: (item: any) => item.id,
    ref: springsRef,
    from: { opacity: 0, transform: "translateX(100%)" },
    enter: { opacity: 1, transform: "translateX(0px)" },
    leave: { opacity: 0, transform: "translateX(100%)" },
    config: { mass: 8, tension: 1500, friction: 100 },
    trail: 200 / links.length,
  });

  const springApi = useSpringRef();
  const rest = useSpring({
    ref: springApi,
    config: { mass: 1, tension: 180, friction: 25 },
    from: {
      transform: "translateX(100%)",
      opacity: 0,
    },
    to: {
      transform: sidebarIsOpen ? "translateX(0%)" : "translateX(100%)",
      opacity: 1,
    },
  });

  useChain(sidebarIsOpen ? [springApi, springsRef] : [springsRef, springApi]);

  return (
    <>
      <Hamburger />
      <animated.nav className={`${classes["mobile"]}`} style={{ ...rest }}>
        <div className={`${classes["mobile-container"]}`}>
          {linkTransitions((style, item) => (
            <animated.a
              className={`${classes["nav-item"]}`}
              href={`#${item.url}`}
              style={{ ...style }}
            >
              {item.label}
            </animated.a>
          ))}
        </div>
      </animated.nav>
    </>
  );
};

export default MobileNavigation;
