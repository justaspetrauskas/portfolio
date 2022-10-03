import React, { useEffect } from "react";
import ContentRow from "../../components/ContentRow/ContentRow";
import LinkCard from "./LinkCard";

export interface ILink {
  title: string;
  type: string;
  url: string;
  _key: string;
  _type: string;
}
interface SocialLinksProps {
  links: ILink[];
}
const SocialLinks = ({ links }: SocialLinksProps) => {
  return (
    <ContentRow>
      {links.map((link: ILink) => (
        <LinkCard key={link._key} link={link} />
      ))}
    </ContentRow>
  );
};

export default SocialLinks;
