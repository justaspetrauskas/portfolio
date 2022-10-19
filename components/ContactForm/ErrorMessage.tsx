import React from "react";
import classes from "./contactForm.module.css";
interface ErrorMessageProps {
  error: Record<string, any>;
  label: string;
}
const ErrorMessage = ({ error, label }: ErrorMessageProps) => {
  switch (error.type) {
    case "required":
      return (
        <label className={`${classes["error-msg"]}`}>{label} is required</label>
      );
    case "maxLength":
      return (
        <label className={`${classes["error-msg"]}`}>
          {label} is a bit too long, make it shorter
        </label>
      );
    case "pattern":
      return (
        <label className={`${classes["error-msg"]}`}>
          {label} is not following the pattern
        </label>
      );
    default:
      return (
        <label className={`${classes["error-msg"]}`}>{label} is required</label>
      );
  }
};

export default ErrorMessage;
