import React from "react";
import style from "./contentRow.module.css";

interface ContentRowProps {
  children: React.ReactNode;
}

const ContentRow = ({ children }: ContentRowProps) => {
  return <div className={style.contentRow}>{children}</div>;
};

export default ContentRow;
