import React from "react";
import style from "../../styles/pill-button.module.css";

interface PillButtonProps {
  title: string;
  clickHandler: () => void;
}

const PillButton = ({ clickHandler, title }: PillButtonProps) => {
  return (
    <button className={style.pillButton} onClick={clickHandler}>
      {title}
    </button>
  );
};

export default PillButton;
