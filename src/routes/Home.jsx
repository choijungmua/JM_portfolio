// copyright - Choi Jung mu
// 2024-04-18 Update
//  업데이트 내용
//  gsap로 메인화면 꾸미기

// import the React
import React from "react";
import { useState } from "react";
// import the section
import NightSky from "../components/UI/NightSky";
import SubAbout from "../components/About/SubAbout";
// import The gsap
import MainText from "../components/HomeComp/MainText";
import SkilledBy from "../components/HomeComp/SkilledBy";
import Footer from "../components/HomeComp/Footer";
import PortFolio from "../components/PortFolio/PortFolio";
// import AboutMe from "../components/AboutMe";

function Home() {
  return (
    <div className=" bg-black text-white ">
      <NightSky />
      {/* Navigation */}
      {/* MainPage */}

      <MainText />
      {/* About Me */}
      {/* <AboutMe /> */}
      {/* SubAbout */}
      <SubAbout />
      {/* <Footer /> */}
      {/* Skills */}
      <SkilledBy />
      {/* PortPoilo */}
      <PortFolio />
      <Footer />
      {/* Contact Me! */}
    </div>
  );
}
export default Home;
