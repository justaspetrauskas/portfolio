import React from "react";
import style from "./submit.module.css";

interface SubmitButtonProps {
  disabled: boolean;

  messageStatus: "IDLE" | "SENT" | "ERROR";
}
const SubmitButton = ({
  disabled = false,
  messageStatus = "IDLE",
}: SubmitButtonProps) => {
  return (
    <button
      className={`${style["submit"]} ${
        messageStatus === "SENT" ? style["submitted"] : ""
      }`}
      type="submit"
      disabled={disabled}
    >
      <div
        className={`${style["submit-content"]} ${
          messageStatus === "SENT" ? style["submitted-content"] : ""
        }`}
      >
        <p>{messageStatus === "SENT" ? "Thank you!" : "Send"}</p>
        {/* {submitted && (
          <i className={style["submit-icon"]}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
              <path fill="transparent" d="M14.1 27.2l7.1 7.2 16.7-16.8"></path>
            </svg>
          </i>
        )} */}
      </div>
    </button>
  );
};

export default SubmitButton;
