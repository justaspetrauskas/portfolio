import React, { useEffect, useState } from "react";
import { Project } from "../../types/types.profile";
import classes from "./slider.module.css";
import { animated } from "react-spring";

import { FaGithub, FaGlobe } from "react-icons/fa";

interface CardLinkProps {
  link: string;
}

const CardLink = ({ link }: CardLinkProps) => {
  const [hostname, setHostname] = useState("");

  const domain = new URL(link).hostname.split(".");
  const github = domain.includes("github");

  if (link.includes("github")) {
    return (
      <a className={classes["single-link"]} href={link}>
        <div className={classes["single-link--inner"]}>
          <FaGithub size={18} />
          <span>Code</span>
        </div>
      </a>
    );
  } else {
    return (
      <a href={link} className={classes["single-link"]}>
        <div className={classes["single-link--inner"]}>
          <FaGlobe size={18} />
          <span>Live</span>
        </div>
      </a>
    );
  }
};

interface SliderItemProps {
  project: Project;
  style: Record<string, any>;
}
const SliderItem = ({ project, style }: SliderItemProps) => {
  return (
    <animated.li className={classes["project"]} style={style}>
      {/* {project.imageUrl?} */}
      <div className={classes["image-container"]}>
        {/* ...or title */}
        <div className={classes["image-title"]}>
          <h4>{project.title}</h4>
        </div>
      </div>

      {/* content body p-5 */}
      <div className={classes["body"]}>
        <div className={classes["title"]}>
          <h6>{project.title}</h6>
          <p>{project.subtitle}</p>
        </div>

        {/* break */}
        {/* <div className={classes["breakline"]}></div> */}
        {/* links with icons live/github */}
        <div className={classes["links"]}>
          {project.links.map((link, index) => (
            <CardLink link={link} key={index} />
          ))}
        </div>
        {/* tags */}
        <div className={classes["tags"]}>
          {project.tags.map((tag, index) => (
            <span className={classes["single-tag"]} key={index}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </animated.li>
  );
};

export default SliderItem;
