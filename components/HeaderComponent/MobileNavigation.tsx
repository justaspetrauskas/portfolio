import React from "react";
import { Link } from "./Header";
import classes from "./header.module.css";

interface MobileNavigationProps {
  links: Link[];
}

const MobileNavigation = ({ links }: MobileNavigationProps) => {
  return <nav className={classes["mobile"]}>{links.map((link,index)=>(
    
  ))}</nav>;
};

export default MobileNavigation;
