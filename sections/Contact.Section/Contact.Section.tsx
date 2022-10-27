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
  // const onScreen = useOnScreen(contactRef, "-300px");

  // useEffect(() => {
  //   if (profile) console.log(profile!.socialLinks);
  // }, [profile]);

  return (
    <SectionWrapper sectionID={"contact"}>
      <div className="flex flex-col w-full items-center justify-strecth gap-y-4">
        <SectionHeader title={"Contact me"} position={"center"} />
        {/* Subtitle */}
        {/* socials */}
        <SocialLinks links={profile.socialLinks} />
      </div>

      <ContactForm />
    </SectionWrapper>
  );
};

export default ContactSection;
