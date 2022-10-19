import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContentRow from "../../components/ContentRow/ContentRow";
import GridContent from "../../components/GridContentWrapper/GridContent";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import useOnScreen from "../../hooks/useOnScreen";
import { selectProfileState } from "../../redux/store";
import SocialLinks from "./SocialLinks";

const ContactSection = () => {
  const contactRef: any = useRef<HTMLDivElement>(null);
  const profile = useSelector(selectProfileState);
  const onScreen = useOnScreen(contactRef, "-300px");

  useEffect(() => {
    if (profile) console.log(profile!.socialLinks);
  }, [profile]);

  return (
    <SectionWrapper sectionID={"contact"} sectionRef={contactRef}>
      {profile && (
        <GridContent type="main">
          <div className="flex flex-col items-center justify-between gap-y-4">
            <SectionHeader title={"Contact me"} position={"center"} />
            {/* socials */}
            <SocialLinks links={profile.socialLinks} />
          </div>

          <ContactForm />
        </GridContent>
      )}
    </SectionWrapper>
  );
};

export default ContactSection;
