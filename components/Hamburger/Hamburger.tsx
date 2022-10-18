import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleNavigationStatus } from "../../redux/slices/navigationSlice";
import { selectSidebarState } from "../../redux/store";
import classess from "./hamburger.module.css";

const Hamburger = () => {
  const sidebarIsOpen = useSelector(selectSidebarState);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openSidebar = () => {
    dispatch(toggleNavigationStatus());
  };

  return (
    <button
      onClick={openSidebar}
      className={`${classess["burger-wrapper"]} 
      ${classess[`burger-${sidebarIsOpen ? "open" : "closed"}`]}
     `}
    >
      <span className={`${classess["burger-layer"]}`} />
      <span className={`${classess["burger-layer"]}`} />
      <span className={`${classess["burger-layer"]}`} />
    </button>
  );
};

export default Hamburger;
