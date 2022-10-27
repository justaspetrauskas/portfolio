import React from "react";
import classes from "./skillCard.module.css";
import { animated } from "react-spring";
import { Skill } from "../../types/types.profile";

interface SkillCardProps {
  data: Skill;
  style: Record<string, any>;
}
const SkillCard = ({ data, style }: SkillCardProps) => {
  return (
    <animated.div className={classes["wrapper"]} style={style}>
      <div className={classes["image-wrapper"]}>
        <img src={data.iconUrl} alt={data.title} loading="lazy" />
      </div>
      <span>{data.title}</span>
    </animated.div>
  );
};

export default SkillCard;
