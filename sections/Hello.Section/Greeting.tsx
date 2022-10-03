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
        <PortableText portableText={profile!.hello} />
        <div className={style["action-buttons--row"]}>
          <PortfolioLink
            link={"#contact"}
            label={"Download CV"}
            type={"outlined"}
          />

          {/* <Button buttonType="link" type="filled">
            <span>Say Hi</span>
          </Button> */}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Greeting;
