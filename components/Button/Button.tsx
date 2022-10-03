import React from "react";
import style from "./button.module.css";

interface ButtonProps {
  children?: React.ReactNode;
  type?: "filled" | "outlined";
  label?: string;
  buttonType?: "submit" | "button" | "reset";
  disabled?: boolean;
}
const Button = ({
  children,
  type,
  label,
  buttonType = "button",
}: ButtonProps) => {
  switch (buttonType) {
    case "submit":
      return (
        <button
          type={"submit"}
          className={`${style["action-button"]} ${style["button"]} ${
            type === "filled"
              ? style["action-button--filled"]
              : style["action-button--outlined"]
          }`}
        >
          {label}
        </button>
      );
    case "button":
      return (
        <button
          type={"button"}
          className={`${style["action-button"]} ${style["button"]} ${
            type === "filled"
              ? style["action-button--filled"]
              : style["action-button--outlined"]
          }`}
        >
          {label}
        </button>
      );
    case "reset":
      return (
        <button
          type={"button"}
          className={`${style["action-button"]} ${style["button"]} ${
            type === "filled"
              ? style["action-button--filled"]
              : style["action-button--outlined"]
          }`}
        >
          {label}
        </button>
      );
    default:
      return (
        <button
          type={buttonType}
          className={`${style["action-button"]} ${style["button"]} ${
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
