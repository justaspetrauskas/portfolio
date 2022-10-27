import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper";

import { selectProfileState } from "../../redux/store";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

import Article from "../../components/Article/Article";

import style from "./about.module.css";

import { useTrail, useTransition } from "react-spring";
import useOnScreen from "../../hooks/useOnScreen";

const AboutSection = () => {
  const profile = useSelector(selectProfileState);

  return (
    <SectionWrapper sectionID={"me"}>
      <SectionHeader position="left" title={"About Me"} />
      <div className={`${style.wrapper}`}>
        {profile &&
          profile!.aboutMe.map((item: any, index: number) => (
            <Article article={item} index={index} key={index} />
          ))}
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
