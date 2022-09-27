import React from "react";
import classess from "./buttonGroup.module.css";
interface ButtonGroupProps {
  children: React.ReactNode;
}
const ButtonGroup = ({ children }: ButtonGroupProps) => {
  return <div className={classess["container"]}>{children}</div>;
};

export default ButtonGroup;
