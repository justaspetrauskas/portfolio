import React from "react";
import style from "./pill-button.module.css";

interface PillButtonProps {
  title: string;
  type: "filled" | "transparent" | "outlined";
  active: boolean;
  clickHandler: () => void;
}

const PillButton = ({
  clickHandler,
  title,
  type = "transparent",
  active,
}: PillButtonProps) => {
  return (
    <button
      className={`${style.pillButton} ${style[type]} ${
        active ? style.active : ""
      }`}
      onClick={clickHandler}
    >
      {title}
    </button>
  );
};

export default PillButton;
