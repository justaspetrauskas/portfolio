import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useOnScreen from "../../hooks/useOnScreen";
import { setActiveSection } from "../../redux/slices/navigationSlice";

import style from "./section.module.css";

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
  const dispatch = useDispatch();
  const sectionRef: any = useRef<HTMLDivElement>();
  // Call the hook passing in ref and root margin
  // In this case it would only be considered onScreen if more ...
  // ... than 300px of element is visible.
  // const onScreen: boolean = useOnScreen<HTMLDivElement>(sectionRef, "-300px");

  // useEffect(() => {
  //   if (onScreen) {
  //     dispatch(setActiveSection(sectionRef.current.id));
  //   }
  // }, [onScreen]);

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
