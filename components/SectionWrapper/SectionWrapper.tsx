import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useOnScreen from "../../hooks/useOnScreen";
import { setActiveSection } from "../../redux/slices/navigationSlice";

import style from "./section.module.css";

interface SectionWrapperProps {
  children?: React.ReactNode;
  sectionID: string;
  bgColor?: string;
  sectionRef?: any;
}

const SectionWrapper = ({
  children,
  sectionID,
  bgColor,
  sectionRef,
}: SectionWrapperProps) => {
  return (
    <section
      className={`${style["section-wrapper"]} ${style["flex-section"]}`}
      id={`${sectionID.toLocaleLowerCase()}`}
      style={{ background: bgColor ? bgColor : "transparent" }}
      ref={sectionRef}
    >
      <div className={style.container}>{children}</div>
    </section>
  );
};

export default SectionWrapper;
