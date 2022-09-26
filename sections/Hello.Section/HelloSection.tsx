import React from "react";
import dynamic from "next/dynamic";

import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";
import Greeting from "./Greeting";

import GridContent from "../../components/GridContentWrapper/GridContent";

const GreetingCanvas = dynamic(
  () => import("../../components/GreetingCanvas/GreetingCanvas"),
  {
    ssr: false,
  }
);

const HelloSection = () => {
  return (
    <SectionWrapper sectionID={"hello"}>
      <Greeting />
      <GreetingCanvas />
    </SectionWrapper>
  );
};

export default HelloSection;
