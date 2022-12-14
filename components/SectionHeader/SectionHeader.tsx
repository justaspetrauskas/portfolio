import React from "react";
import { useSelector } from "react-redux";
import { selectScrollState } from "../../redux/store";
import style from "./sectionHeader.module.css";

interface SectionHeaderProps {
  title: string;
  position: "center" | "left" | "right";
  fullwidth: boolean;
}

const SectionHeader = ({
  title,
  position = "center",
  fullwidth = false,
}: SectionHeaderProps) => {
  const velocity = useSelector(selectScrollState);

  return (
    <div
      className={`${style["section-header"]} ${
        fullwidth ? style["fullwidth"] : ""
      }`}
      // style={{
      //   transform: `translateY(${velocity.velocityVal * 270}px)`,
      // }}
    >
      <h1 className={`${style["section-header--text"]} ${style[position]}`}>
        {title}
        {/* <span className="section-header--text-decoration" /> */}
      </h1>
    </div>
  );
};

export default SectionHeader;
