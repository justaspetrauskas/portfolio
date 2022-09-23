import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContentRow from "../../components/ContentRow/ContentRow";
import GridContent from "../../components/GridContentWrapper/GridContent";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import { selectProfileState } from "../../redux/store";

const ContactSection = () => {
  const profile = useSelector(selectProfileState);

  useEffect(() => {
    if (profile) console.log(profile!.socialLinks);
  }, [profile]);

  return (
    <SectionWrapper sectionID={"contact"}>
      {profile && (
        <GridContent type="main">
          <div>
            <SectionHeader title={"Contact me"} />
            {/* socials */}
            {/* {profile.socialLinks && <ContentRow>{profile.socialLinks.map((link:Record<string,any>)=>())}</ContentRow> } */}
          </div>

          <ContactForm />
        </GridContent>
      )}
    </SectionWrapper>
  );
};

export default ContactSection;
