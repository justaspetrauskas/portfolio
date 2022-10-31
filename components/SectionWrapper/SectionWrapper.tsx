import React, { useEffect, useRef, useState, MutableRefObject } from "react";
import { useDispatch, useSelector } from "react-redux";
import useOnScreen from "../../hooks/useOnScreen";
import { setActiveSection } from "../../redux/slices/navigationSlice";

import style from "./section.module.css";

interface SectionWrapperProps {
  children?: React.ReactNode;
  sectionID: string;
  bgColor?: string;
  sectionRef?: any;
  direction?: "row" | "column";
  fullwidth?: boolean;
}

const SectionWrapper = ({
  children,
  sectionID,
  bgColor,
  direction = "column",
  fullwidth = false,
}: SectionWrapperProps) => {
  const dispatch = useDispatch();
  const sectionRef = useRef<any>(null);
  const { sectionId, isIntersecting } = useOnScreen(sectionRef, "-300px");

  useEffect(() => {
    if (isIntersecting) {
      // createglobalState
      dispatch(setActiveSection(sectionId));
      console.log("Active Section", sectionId);
    }
  }, [isIntersecting]);
  return (
    <section
      className={`${style["section-wrapper"]} ${style["flex-section"]}`}
      id={`${sectionID.toLocaleLowerCase()}`}
      style={{ background: bgColor ? bgColor : "transparent" }}
      ref={sectionRef}
    >
      <div
        className={`${
          fullwidth ? style["fullwidth-container"] : style.container
        } ${direction === "row" ? style.row : style.column}`}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
