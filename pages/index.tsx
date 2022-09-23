import groq from "groq";
import Head from "next/head";
import Image from "next/image";
import sanityClient from "../client";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile, setProfileData } from "../redux/slices/profileSlice";
import Header from "../components/HeaderComponent/Header";
import HelloSection from "../sections/Hello.Section/HelloSection";
import AboutSection from "../sections/AboutMe.Section/AboutSection";
import ContactSection from "../sections/Contact.Section/Contact.Section";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ScrollableContainer from "../components/ScrollableContainer/ScrollableContainer";

interface HomeProps {
  profileData: any;
}
const Home = ({ profileData }: HomeProps) => {
  const scrollContainerRef = useRef<any>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(profileData);
    dispatch(setProfileData(profileData));
  }, [profileData]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768) {
        // scrollValue > window.scrollY ? setIsHidden(false) : setIsHidden(true);
        // setScrollValue(window.scrollY);
        console.log(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    console.log(scrollContainerRef.current.getBoundingClientRect().top);
  });

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Justas: Front-end developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main
        className="fixed top-0 left-0 w-full h-screen"
        ref={scrollContainerRef}
      >
        <Parallax pages={4} style={{ top: "0", left: "0" }}>
          <ScrollableContainer offset={0} scrollSpeed={2.5}>
            <HelloSection />
          </ScrollableContainer>

          <ParallaxLayer
            offset={1}
            speed={3}
            style={{ backgroundColor: "#ff6d6d" }}
          />

          <ParallaxLayer
            offset={1}
            speed={0.5}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <p>Scroll up</p>
          </ParallaxLayer>
        </Parallax>
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
    "aboutMe":aboutMe,
    skills[]->{_id,skillTitle,skillIcon,category,skillIcon{secure_url}}}`;
  const profileData = await sanityClient.fetch(query, params);

  console.log(profileData);

  return {
    props: {
      profileData,
    },
  };
}

export default Home;
