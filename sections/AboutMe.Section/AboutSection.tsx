import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import ImageContainer from "../../components/ImageContainer/ImageWrapper";
import { selectProfileState } from "../../redux/store";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import GridContent from "../../components/GridContentWrapper/GridContent";
import PortableTextComponent from "../../components/PortableText/PortableTextComponent";
import SkillsWrapper from "../../components/SkillsWrapper/SkillsWrapper";
import SkillCard from "../../components/SkillsWrapper/SkillCard";
import PillButton from "../../components/PillButton/PillButton";
import ContentRow from "../../components/ContentRow/ContentRow";
import ButtonGroup from "../../components/ButtonGroup.tsx/ButtonGroup";

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
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    if (profile) {
      console.log(profile!.skills);
      setShowingSkills(profile!.skills);
    }
  }, [profile]);

  const filterSkills = (category: string) => {
    setActiveCategory(category);
    // if (category === "all") {
    //   setShowingSkills(profile.skills);
    // } else {
    //   const filteredValues = profile.skills.filter(
    //     (el: Record<string, any>) => el.category === category
    //   );
    //   setShowingSkills(filteredValues);
    // }
  };
  return (
    <SectionWrapper sectionID={"me"}>
      {profile && (
        <div className="min-h-screen">
          <div className="h-screen flex flex-col items-center justify-center">
            <div className="flex flex-row gap-4">
              <div className="flex flex-col">
                <SectionHeader position="left" title={"About Me"} />
                <div className="pr-24">
                  <PortableTextComponent portableText={profile!.aboutMe} />
                </div>
              </div>

              <div className="rounded-md overflow-hidden p-15 flex items-center justify-center">
                <img
                  src={profile!.profileImageURL}
                  style={{ width: "80%" }}
                  className="saturate-50 brightness-40"
                  alt="profile"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="h-screen flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center relative h-full">
              <SectionHeader position="center" title={"Skills"} />
              <ButtonGroup>
                {skillCategories.map(
                  (el: Record<string, any>, index: number) => (
                    <PillButton
                      key={index}
                      type={"transparent"}
                      active={el.value === activeCategory}
                      title={el.title}
                      clickHandler={() => filterSkills(el.value)}
                    />
                  )
                )}
              </ButtonGroup>
            </div>
            <SkillsWrapper>
              {showingSkills.map((el: Record<string, any>) => (
                <SkillCard data={el} key={el._id} />
              ))}
            </SkillsWrapper>
          </div>
        </div>
      )}
      {/* <div className="flex flex-col justify-center items-center h-full w-full">
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
      </div> */}

      {/* <SkillsWrapper>
            {showingSkills.map((el: Record<string, any>) => (
              <SkillCard data={el} key={el._id} />
            ))}
          </SkillsWrapper> */}
    </SectionWrapper>
  );
};

export default AboutSection;
