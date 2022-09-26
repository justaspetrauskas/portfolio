import React from "react";
import style from "./container.module.css";

interface GridContentProps {
  type: "main" | "header";
  children: React.ReactNode;
}

const GridContent = ({ type = "main", children }: GridContentProps) => {
  return (
    <div className={[style["content-grid"], style[`grid-${type}`]].join(" ")}>
      {children}
    </div>
  );
};

export default GridContent;
