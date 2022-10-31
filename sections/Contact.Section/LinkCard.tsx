import React, { useEffect } from "react";
import { ILink } from "./SocialLinks";
import classes from "./contact.module.css";

import { FaGithub, FaLinkedin } from "react-icons/fa";

interface LinkCardProps {
  link: ILink;
}
interface ILinkIcon {
  linkType: string;
  size: number;
}
const LinkIcon = ({ linkType, size }: ILinkIcon) => {
  switch (linkType) {
    case "linkedin":
      return <FaLinkedin size={size} fill={"#282828"} />;

    case "github":
      return <FaGithub size={size} fill={"#282828"} />;
    default:
      return <FaLinkedin size={size} fill={"#282828"} />;
  }
};

const LinkCard = ({ link }: LinkCardProps) => {
  return (
    <a
      href={link.url}
      rel="external"
      target="_blank"
      className={classes.linkCard}
    >
      <LinkIcon linkType={link.type} size={26} />
    </a>
  );
};

export default LinkCard;
