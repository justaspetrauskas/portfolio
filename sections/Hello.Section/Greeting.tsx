import React, { useContext, useEffect } from "react";

import style from "../../styles/helloSection.module.css";
import { useSelector } from "react-redux";

import Button from "../../components/Button/Button";
import { selectProfileState } from "../../redux/store";
import PortableText from "../../components/PortableText/PortableTextComponent";

const Greeting = () => {
  const profile = useSelector(selectProfileState);

  if (profile) {
    return (
      <div
        className=" min-h-screen flex flex-col justify-center h-full"
        // style={{
        //   transform: `translateY(${velocity.velocityVal * 250}px)`,
        // }}
      >
        <div className={style["greeting-wrapper"]}>
          <PortableText portableText={profile!.hello} />
          <div className={style["action-buttons--row"]}>
            <Button buttonType="link">
              <span>Download My CV</span>
            </Button>

            <Button buttonType="link" type="filled">
              <span>Say Hi</span>
            </Button>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Greeting;
