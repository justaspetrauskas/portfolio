import React from "react";
import style from "./skillCard.module.css";

interface SkillCardProps {
  data: Record<string, any>;
}
const SkillCard = ({ data }: SkillCardProps) => {
  return (
    <div className={style["skillCard-wrapper"]}>
      <div className={style["skillCard-image-wrapper"]}>
        <img
          src={data.skillIcon.secure_url}
          alt={data.skillTitle}
          loading="lazy"
        />
      </div>
      <span>{data.skillTitle}</span>
    </div>
  );
};

export default SkillCard;
