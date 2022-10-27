import groq from "groq";
import Head from "next/head";
import Image from "next/image";
import sanityClient from "../client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProfileData } from "../redux/slices/profileSlice";
import Header from "../components/HeaderComponent/Header";
import HelloSection from "../sections/Hello.Section/HelloSection";
import AboutSection from "../sections/AboutMe.Section/AboutSection";
import ContactSection from "../sections/Contact.Section/Contact.Section";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ScrollableContainer from "../components/ScrollableContainer/ScrollableContainer";

import useWindowSize, { Size } from "../hooks/useWindowSize";
import useWindowScroll from "../hooks/useWindowScroll";
import SkillsSection from "../sections/Skills.Section/SkillsSection";
import { Profile } from "../types/types.profile";
import ProjectsSecion from "../sections/Projects.Section/ProjectsSecion";

type dataStatus = "idle" | "error" | "success";

interface HomeProps {
  profileData: Profile;
  dataStatus: dataStatus;
}
const Home = ({ profileData, dataStatus }: HomeProps) => {
  const windowSize: Size = useWindowSize();
  const scrollPosition = useWindowScroll();
  const dispatch = useDispatch();

  // console.log(scrollPosition);

  useEffect(() => {
    if (dataStatus === "success" && profileData) {
      dispatch(setProfileData(profileData));
    }
  }, [profileData, dataStatus]);

  return (
    <div>
      <Head>
        <title>Justas: Front-end developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {dataStatus === "success" && (
        <main className="relative">
          <HelloSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSecion />

          <ContactSection />

          {/* <ParallaxLayer
            offset={1}
            speed={1.5}
            style={{ backgroundColor: "#ff6d6d" }}
          /> */}
        </main>
      )}
    </div>
  );
};

export async function getStaticProps() {
  const params = { profileId: process.env.NEXT_PUBLIC_SANITY_PROFILEID };
  const query = groq`*[_type == "profile" && _id == $profileId]{
    "greeting":greeting[],
    firstName,
    lastName,
    
    "socialLinks":socialLinks[]{_key,title,url,_type},
    "profileImageUrl":profileImage.asset->url,
    "cvURL":cv.asset->url,
    // education[]->{title,description,university},
    // experience[]->{jobTitle,company,description,startDate,endDate,tag[]->{skillTitle}},
    // education[]->{title,description,university,startDate,endDate},
    aboutMe[]->{title,"text":text[],"iconUrl":textIcon.secure_url},
    skills[]->{_id,"title":skillTitle,category,"iconUrl":skillIcon.secure_url}}`;

  // make try and catch block, status error
  let profileData: Profile | null = null;
  let dataStatus: dataStatus = "idle";

  try {
    const response: Profile[] = await sanityClient.fetch(query, params);
    if (response) {
      profileData = response[0];
      dataStatus = "success";
    }
  } catch (err) {
    dataStatus = "error";
  }

  return {
    props: {
      profileData,
      dataStatus,
    },
  };
}

export default Home;
