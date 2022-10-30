import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { config, useTransition } from "react-spring";
import ButtonGroup from "../../components/ButtonGroup.tsx/ButtonGroup";
import PillButton from "../../components/PillButton/PillButton";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import SkillSelector from "../../components/SkillSelector/SkillSelector";
import SkillCard from "../../components/SkillsWrapper/SkillCard";
import SkillsWrapper from "../../components/SkillsWrapper/SkillsWrapper";
import useOnScreen from "../../hooks/useOnScreen";
import { selectNavigationSlice, selectProfileState } from "../../redux/store";
import { Skill } from "../../types/types.profile";
import { OptionType } from "../../types/types.select";

const skillCategories: OptionType[] = [
  { label: "All", value: "all" },
  { label: "Front-end", value: "front-end" },
  { label: "Back-end", value: "back-end" },
  { label: "Others", value: "others" },
  { label: "Graphic Design", value: "graphicDesign" },
  { label: "Language", value: "language" },
];
const SkillsSection = () => {
  const skillsRef: any = useRef(null);
  const profile = useSelector(selectProfileState);
  const { activeSection } = useSelector(selectNavigationSlice);

  const [showingSkills, setShowingSkills] = useState<Skill[]>([]);
  const [activeCategory, setActiveCategory] = useState<OptionType>({
    label: "All",
    value: "all",
  });

  const [sectionOnScreen, setOnScreen] = useState(true);

  const dispatch = useDispatch();
  // const sectionRef: any = useRef<HTMLDivElement>(null);

  // Call the hook passing in ref and root margin
  // In this case it would only be considered onScreen if more ...
  // ... than 300px of element is visible.

  // useEffect(() => {
  //   if (onScreen) {
  //     // dispatch(setActiveSection(sectionRef.current.id));
  //     setOnScreen(true);
  //   } else {
  //     setOnScreen(false);
  //   }
  // }, [onScreen]);

  useEffect(() => {
    if (profile) {
      setShowingSkills(profile.skills);
    }
  }, [profile]);

  useEffect(() => {
    if (profile) {
      if (activeCategory.value === "all") {
        setShowingSkills(profile.skills);
      } else {
        const filteredValues = profile.skills.filter(
          (el: Skill) => el.category === activeCategory.value
        );
        setShowingSkills(filteredValues);
      }
    }
  }, [profile, activeCategory]);

  const skills = useTransition(sectionOnScreen ? showingSkills : [], {
    trail: 200 / showingSkills.length,
    config: config.gentle,
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1, height: 100 },
    leave: { height: 0, display: "none" },
  });

  const handleSelect = (option: any) => {
    console.log(option);
    setActiveCategory(option);
  };
  return (
    <SectionWrapper sectionID={"skills"}>
      <SectionHeader position="left" title={"Skills"} />
      <ButtonGroup>
        {skillCategories.map((el: Record<string, any>, index: number) => (
          <PillButton
            key={index}
            type={"transparent"}
            active={el.value === activeCategory.value}
            title={el.label}
            clickHandler={() => handleSelect(el)}
          />
        ))}
      </ButtonGroup>
      <SkillSelector
        options={skillCategories}
        selectedValue={activeCategory}
        handleSelect={handleSelect}
      />
      <SkillsWrapper>
        {skills((style, item) => (
          <SkillCard data={item} key={item._id.split("-")[1]} style={style} />
        ))}
      </SkillsWrapper>
    </SectionWrapper>
  );
};

export default SkillsSection;
