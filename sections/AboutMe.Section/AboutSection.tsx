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
import Article from "../../components/Article/Article";
import { useTrail, useTransition } from "react-spring";
import useOnScreen from "../../hooks/useOnScreen";

const AboutSection = () => {
  const profile = useSelector(selectProfileState);

  const [showingSkills, setShowingSkills] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    if (profile) {
      console.log(profile!);
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
      <SectionHeader position="left" title={"About Me"} />
      <div className="relative w-full">
        {profile &&
          profile!.aboutMe.map((item: any, index: number) => (
            <Article article={item} index={index} key={index} />
          ))}
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
