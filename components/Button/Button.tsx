import React from "react";
import style from "./button.module.css";
interface ButtonProps {
  children?: React.ReactNode;
  type?: "filled" | "outlined";
  label?: string;
  buttonType?: "submit" | "button" | "link";
  link?: string;
}
const Button = ({
  children,
  type,
  label,
  buttonType = "button",
  link,
}: ButtonProps) => {
  switch (buttonType) {
    case "link":
      return (
        <a
          href={link}
          className={`${style["link-button"]} ${
            type === "filled" ? style["link-filled"] : ""
          }`}
        >
          {label || children}
        </a>
      );
  }
  if (children) {
    return (
      <button
        type={buttonType}
        className={`${style["action-button"]} ${
          type === "filled"
            ? style["action-button--filled"]
            : style["action-button--outlined"]
        }`}
      >
        {children}
      </button>
    );
  } else {
    return (
      <button
        className={`${style["action-button"]} ${
          type === "filled"
            ? style["action-button--filled"]
            : style["action-button--outlined"]
        }`}
      >
        {label}
      </button>
    );
  }
};

export default Button;
