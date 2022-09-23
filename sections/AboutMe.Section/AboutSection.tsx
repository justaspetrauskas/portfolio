import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import ImageContainer from "../../components/ImageContainer/ImageWrapper";
import { selectProfileState } from "../../redux/store";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import GridContent from "../../components/GridContentWrapper/GridContent";
import PortableTextComponent from "../../components/PortableText/PortableTextComponent";
import SkillsWrapper from "../../components/SkillsWrapper/SkillsWrapper";
import SkillCard from "../../components/SkillCard/SkillCard";
import PillButton from "../../components/PillButton/PillButton";
import ContentRow from "../../components/ContentRow/ContentRow";

const skillCategories = [
  { title: "All", value: "all" },
  { title: "Front-end", value: "front-end" },
  { title: "Back-end", value: "back-end" },
  { title: "Others", value: "others" },
  { title: "Graphic Design", value: "graphicDesign" },
  { title: "Language", value: "language" },
];

const AboutSection = () => {
  const profile = useSelector(selectProfileState);

  const [showingSkills, setShowingSkills] = useState([]);

  useEffect(() => {
    if (profile) {
      console.log(profile!.skills);
      setShowingSkills(profile!.skills);
    }
  }, [profile]);

  const filterSkills = (category: string) => {
    if (category === "all") {
      setShowingSkills(profile.skills);
    } else {
      const filteredValues = profile.skills.filter(
        (el: Record<string, any>) => el.category === category
      );
      setShowingSkills(filteredValues);
    }
  };
  return (
    <SectionWrapper sectionID={"me"}>
      {profile && (
        <GridContent type="main">
          <ImageContainer imageUrl={profile!.profileImageURL} />
          <div>
            <SectionHeader title={"About me"} />
            <PortableTextComponent portableText={profile!.aboutMe} />
          </div>

          <div className="flex flex-col justify-center items-center h-full w-full">
            <SectionHeader title={"Skills"} />
            <ContentRow>
              {skillCategories.map((el: Record<string, any>, index: number) => (
                <PillButton
                  key={index}
                  title={el.title}
                  clickHandler={() => filterSkills(el.value)}
                />
              ))}
            </ContentRow>
          </div>

          <SkillsWrapper>
            {showingSkills.map((el: Record<string, any>) => (
              <SkillCard data={el} key={el._id} />
            ))}
          </SkillsWrapper>
        </GridContent>
      )}
    </SectionWrapper>
  );
};

export default AboutSection;
