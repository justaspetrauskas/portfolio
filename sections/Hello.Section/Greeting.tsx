import React, { useContext, useEffect } from "react";

import style from "./helloSection.module.css";
import { useSelector } from "react-redux";

import Button from "../../components/Button/Button";
import { selectProfileState } from "../../redux/store";
import PortableText from "../../components/PortableText/PortableTextComponent";
import PortfolioLink from "../../components/Link/PortfolioLink";

const Greeting = () => {
  const profile = useSelector(selectProfileState);

  if (profile) {
    return (
      <div className={style["greeting-wrapper"]}>
        <PortableText portableText={profile!.greeting} />
        <div className={style["action-buttons--row"]}>
          <PortfolioLink
            link={profile!.cvURL}
            label={"Download CV"}
            type={"outlined"}
          />

          <PortfolioLink
            link={"#contact"}
            label={"Contact Me"}
            type={"filled"}
          />
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Greeting;
