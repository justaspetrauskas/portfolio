import React from "react";
import classes from "./skillCard.module.css";
import { animated } from "react-spring";

interface SkillCardProps {
  data: Record<string, any>;
  style: Record<string, any>;
}
const SkillCard = ({ data, style }: SkillCardProps) => {
  return (
    <animated.div className={classes["wrapper"]} style={style}>
      <div className={classes["image-wrapper"]}>
        <img
          src={data.skillIcon.secure_url}
          alt={data.skillTitle}
          loading="lazy"
        />
      </div>
      <span>{data.skillTitle}</span>
    </animated.div>
  );
};

export default SkillCard;
