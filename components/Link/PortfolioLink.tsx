import React from "react";
import style from "./link.module.css";

interface ILink {
  label?: string;
  link: string;
  download?: boolean;
  type: "filled" | "outlined" | "none";
  buttonStyle?: "primary" | "secondary";
  children?: React.ReactNode;
}

const PortfolioLink = ({
  children,
  label,
  link,
  download = false,
  buttonStyle = "primary",
  type,
}: ILink) => {
  if (children) {
    return (
      <a
        href={link}
        target="_blank"
        download={download}
        className={`${style.link}  ${
          style[`btn link-${buttonStyle}  ${style[`link-${type}`]}`]
        }`}
      >
        {children}
      </a>
    );
  } else {
    return (
      <a
        href={link}
        target="_blank"
        download={download}
        className={` ${style.btn} ${style[`link-${type}`]}`}
      >
        {label}
      </a>
    );
  }
};

export default PortfolioLink;
