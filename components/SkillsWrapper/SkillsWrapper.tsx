import React from "react";
import style from "./skillsWrapper.module.css";
interface SkillsWrapperProps {
  children: React.ReactNode;
}
const SkillsWrapper = ({ children }: SkillsWrapperProps) => {
  return <div className={style.wrapper}>{children}</div>;
};

export default SkillsWrapper;
