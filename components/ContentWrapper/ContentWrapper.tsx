import React from "react";
import style from "../../styles/contentWrapper.module.css";

interface ContentWrapperProps {
  children: React.ReactNode;
}
const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return <div className="content-wrapper">{children}</div>;
};

export default ContentWrapper;
