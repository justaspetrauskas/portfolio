import React from "react";
import { useSelector } from "react-redux";
import { selectSidebarState } from "../../redux/store";
import { Link } from "./Header";
import classes from "./header.module.css";

interface MobileNavigationProps {
  links: Link[];
}

const MobileNavigation = ({ links }: MobileNavigationProps) => {
  const sidebarIsOpen = useSelector(selectSidebarState);
  return (
    <nav
      className={`${classes["mobile"]} ${
        sidebarIsOpen ? classes["mobile-open"] : classes["mobile-closed"]
      }`}
    >
      <div className={`${classes["mobile-container"]}`}>
        {links.map((link, index) => (
          <a>{link.label}</a>
        ))}
      </div>
    </nav>
  );
};

export default MobileNavigation;
