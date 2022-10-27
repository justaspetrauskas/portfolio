import React from "react";
import style from "./skillSelector.module.css";
interface SkillSelectorProps {
  options: { title: string; value: string }[];
}
const SkillSelector = ({ options }: SkillSelectorProps) => {
  return (
    <select name="skills" id="skills" className={style.container}>
      {options.map((op, index) => (
        <option value={op.value}>{op.title}</option>
      ))}
    </select>
  );
};

export default SkillSelector;
