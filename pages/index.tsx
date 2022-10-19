import groq from "groq";
import Head from "next/head";
import Image from "next/image";
import sanityClient from "../client";
import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile, setProfileData } from "../redux/slices/profileSlice";
import Header from "../components/HeaderComponent/Header";
import HelloSection from "../sections/Hello.Section/HelloSection";
import AboutSection from "../sections/AboutMe.Section/AboutSection";
import ContactSection from "../sections/Contact.Section/Contact.Section";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ScrollableContainer from "../components/ScrollableContainer/ScrollableContainer";

import useWindowSize, { Size } from "../hooks/useWindowSize";
import useWindowScroll from "../hooks/useWindowScroll";
import SkillsSection from "../sections/Skills.Section/SkillsSection";

interface HomeProps {
  profileData: any;
}
const Home = ({ profileData }: HomeProps) => {
  const windowSize: Size = useWindowSize();
  const scrollPosition = useWindowScroll();
  const dispatch = useDispatch();

  // console.log(scrollPosition);

  useEffect(() => {
    dispatch(setProfileData(profileData));
  }, [profileData]);

  return (
    <div>
      <Head>
        <title>Justas: Front-end developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative">
        <HelloSection />
        <AboutSection />
        <SkillsSection />
        {/* <HelloSection id={"6"} />
          <HelloSection id={"7"} /> */}
        <ContactSection />

        {/* <ParallaxLayer
            offset={1}
            speed={1.5}
            style={{ backgroundColor: "#ff6d6d" }}
          /> */}
      </main>

      {/* <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer> */}
    </div>
  );
};

export async function getStaticProps() {
  const params = { profileId: process.env.NEXT_PUBLIC_SANITY_PROFILEID };
  const query = groq`*[_type == "profile" && _id == $profileId]{
    "hello":greeting,firstName,lastName,currentLocation,socialLinks,
    "profileImageURL":profileImage.asset->url,
    "cvURL":cv.asset->url,education[]->{title,description,university},
    experience[]->{jobTitle,company,description,startDate,endDate,tag[]->{skillTitle}},
    education[]->{title,description,university,startDate,endDate},
    aboutMe[]->{title,text,textIcon{secure_url}},
    skills[]->{_id,skillTitle,skillIcon,category,skillIcon{secure_url}}}`;
  const profileData = await sanityClient.fetch(query, params);

  return {
    props: {
      profileData,
    },
  };
}

export default Home;
