import React from "react";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import Greeting from "./Greeting";
import GridContent from "../../components/GridContentWrapper/GridContent";

const HelloSection = () => {
  return (
    <SectionWrapper sectionID={"hello"}>
      <GridContent type="header">
        <Greeting />
      </GridContent>
    </SectionWrapper>
  );
};

export default HelloSection;
