import React from "react";
import dynamic from "next/dynamic";

import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import Greeting from "./Greeting";

import GridContent from "../../components/GridContentWrapper/GridContent";

import Canvas from "../../components/GreetingCanvas/Canvas";
import { RichText } from "../../types/types.profile";

const HelloSection = () => {
  return (
    <SectionWrapper sectionID={"hello"}>
      <Greeting />
      <Canvas />
    </SectionWrapper>
  );
};

export default HelloSection;
