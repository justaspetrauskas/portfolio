import React from "react";
import { useSelector } from "react-redux";
import { selectScrollState } from "../../redux/store";
import style from "../../styles/sectionHeader.module.css";

interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
  const velocity = useSelector(selectScrollState);

  return (
    <div
      className={style["section-header"]}
      // style={{
      //   transform: `translateY(${velocity.velocityVal * 270}px)`,
      // }}
    >
      <span className={style["section-header--text"]}>
        {title}
        {/* <span className="section-header--text-decoration" /> */}
      </span>
    </div>
  );
};

export default SectionHeader;
