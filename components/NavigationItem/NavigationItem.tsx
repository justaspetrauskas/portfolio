import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectActiveLink } from "../../redux/store";

import style from "./navigationItem.module.css";

interface NavigationItemProps {
  item: number;
  link: Record<string, any>;
}

const NavigationItem = ({ item, link }: NavigationItemProps) => {
  const currentActiveLink = useSelector(selectActiveLink);
  const [isActiveLink, setIsActiveLink] = useState(false);

  useEffect(() => {
    if (currentActiveLink)
      // console.log("Current active link: " + currentActiveLink);
      setIsActiveLink(currentActiveLink === link.toLocaleLowerCase());
  }, [currentActiveLink, link]);

  const handleClickNav = () => {
    const scrollToId = `${link.toLocaleLowerCase()}-section`;
    document.getElementById(scrollToId)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <li
      className={`${style["navigation-item"]} ${
        isActiveLink ? style["navigation-item--active"] : ""
      }`}
      style={{
        transition: `transform ${item * 0.2}s cubic-bezier(0.5, 0, 0, 1)`,
      }}
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
    </li>
  );
};

export default NavigationItem;
