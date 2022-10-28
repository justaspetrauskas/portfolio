import React, { useEffect } from "react";
import ContentRow from "../../components/ContentRow/ContentRow";
import { SocialLink } from "../../types/types.profile";
import LinkCard from "./LinkCard";


interface SocialLinksProps {
  links: SocialLink[];
}
const SocialLinks = ({ links }: SocialLinksProps) => {
  return (
    <ContentRow>
      {links.map((link: SocialLink) => (
        <LinkCard key={link._key} link={link} />
      ))}
    </ContentRow>
  );
};

export default SocialLinks;
