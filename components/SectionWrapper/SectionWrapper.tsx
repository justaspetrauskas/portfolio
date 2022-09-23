import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import style from "../../styles/section.module.css";

interface SectionWrapperProps {
  children?: React.ReactNode;
  sectionID: string;
  bgColor?: string;
}

const SectionWrapper = ({
  children,
  sectionID,
  bgColor,
}: SectionWrapperProps) => {
  return (
    <section
      className={style["section-wrapper"]}
      id={`${sectionID.toLocaleLowerCase()}-section`}
      style={{ background: bgColor ? bgColor : "transparent" }}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
