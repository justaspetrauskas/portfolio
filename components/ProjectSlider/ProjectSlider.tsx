import React, { useState } from "react";
import { Project } from "../../types/types.profile";
import style from "./slider.module.css";
import SliderItem from "./SliderItem";

import { useSpring } from "react-spring";
import { useDrag } from "@use-gesture/react";

const projects: Project[] = [
  {
    title: "rick and morty",
    subtitle: "data about populara series",
    links: [
      "https://github.com/justaspetrauskas/rick-and-morty_data",
      "https://www.rickMorty.com",
    ],
    tags: ["slider", "react", "tailwind"],
  },
];
const THRESHOLD = 15;
const ProjectSlider = () => {
  const [animating, seAnimating] = useState(false);
  const [{ x }, set] = useSpring(() => ({ x: [0, 0] }));

  const bind = useDrag(({ movement: [mx] }) => {
    // block animation
    // if (animating) {
    //   return;
    // }
    let moveX = (mx / window.innerHeight) * 100;
    // if (moveX < -THRESHOLD) {
    //   moveX = -100;
    //   seAnimating(true);
    // }
    // if (moveX > THRESHOLD) {
    //   moveX = 100;
    //   seAnimating(true);
    // }
    set({ x: [moveX, 0] });
  });

  return (
    <ul className={style.container} {...bind()}>
      <SliderItem
        project={projects[0]}
        style={{
          transform: x.to((value) => `translate3d(${value}%,0px,0px)`),
        }}
      />
      <SliderItem
        project={projects[0]}
        style={{
          transform: x.to((value) => `translate3d(${value}%,0px,0px)`),
        }}
      />
      <SliderItem
        project={projects[0]}
        style={{
          transform: x.to((value) => `translate3d(${value}%,0px,0px)`),
        }}
      />
      <SliderItem
        project={projects[0]}
        style={{
          transform: x.to((value) => `translate3d(${value}%,0px,0px)`),
        }}
      />
      <SliderItem
        project={projects[0]}
        style={{
          transform: x.to((value) => `translate3d(${value}%,0px,0px)`),
        }}
      />
      <SliderItem
        project={projects[0]}
        style={{
          transform: x.to((value) => `translate3d(${value}%,0px,0px)`),
        }}
      />
      <SliderItem
        project={projects[0]}
        style={{
          transform: x.to((value) => `translate3d(${value}%,0px,0px)`),
        }}
      />
      <SliderItem
        project={projects[0]}
        style={{
          transform: x.to((value) => `translate3d(${value}%,0px,0px)`),
        }}
      />
    </ul>
  );
};

export default ProjectSlider;
