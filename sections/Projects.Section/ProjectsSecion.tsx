import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProjectSlider from "../../components/ProjectSlider/ProjectSlider";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import { selectProfileState } from "../../redux/store";

const ProjectsSecion = () => {
  const profile = useSelector(selectProfileState);
  // useEffect(() => {
  //     if (profile) {
  //       console.log(profile);
  //       setShowingSkills(profile!.skills);
  //     }
  //   }, [profile]);
  return (
    <SectionWrapper sectionID={"projects"}>
      <SectionHeader position="left" title={"Projects"} />
      <ProjectSlider />
    </SectionWrapper>
  );
};

export default ProjectsSecion;
