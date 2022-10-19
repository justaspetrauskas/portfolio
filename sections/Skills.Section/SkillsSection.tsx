import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { config, useTransition } from "react-spring";
import ButtonGroup from "../../components/ButtonGroup.tsx/ButtonGroup";
import PillButton from "../../components/PillButton/PillButton";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import SkillCard from "../../components/SkillsWrapper/SkillCard";
import SkillsWrapper from "../../components/SkillsWrapper/SkillsWrapper";
import useOnScreen from "../../hooks/useOnScreen";
import { selectNavigationSlice, selectProfileState } from "../../redux/store";
const skillCategories = [
  { title: "All", value: "all" },
  { title: "Front-end", value: "front-end" },
  { title: "Back-end", value: "back-end" },
  { title: "Others", value: "others" },
  { title: "Graphic Design", value: "graphicDesign" },
  { title: "Language", value: "language" },
];
const SkillsSection = () => {
  const skillsRef: any = useRef(null);
  const profile = useSelector(selectProfileState);
  const { activeSection } = useSelector(selectNavigationSlice);

  const [showingSkills, setShowingSkills] = useState<Record<string, any>[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");

  const [sectionOnScreen, setOnScreen] = useState(false);

  const dispatch = useDispatch();
  // const sectionRef: any = useRef<HTMLDivElement>(null);

  // Call the hook passing in ref and root margin
  // In this case it would only be considered onScreen if more ...
  // ... than 300px of element is visible.
  const onScreen: boolean = useOnScreen<HTMLDivElement>(skillsRef, "-300px");

  useEffect(() => {
    if (onScreen) {
      // dispatch(setActiveSection(sectionRef.current.id));
      setOnScreen(true);
    } else {
      setOnScreen(false);
    }
  }, [onScreen]);

  useEffect(() => {
    if (profile) {
      setShowingSkills(profile!.skills);
    }
  }, [profile]);

  const skills = useTransition(sectionOnScreen ? showingSkills : [], {
    trail: 200 / showingSkills.length,
    config: config.gentle,
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1, height: 100 },
    leave: { opacity: 0, height: 0 },
  });

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
    <SectionWrapper sectionID={"skills"} sectionRef={skillsRef}>
      <SectionHeader position="left" title={"Skills"} />
      <ButtonGroup>
        {skillCategories.map((el: Record<string, any>, index: number) => (
          <PillButton
            key={index}
            type={"transparent"}
            active={el.value === activeCategory}
            title={el.title}
            clickHandler={() => filterSkills(el.value)}
          />
        ))}
      </ButtonGroup>
      <SkillsWrapper>
        {skills((style, item) => (
          <SkillCard data={item} key={item._id} style={style} />
        ))}
      </SkillsWrapper>
    </SectionWrapper>
  );
};

export default SkillsSection;
