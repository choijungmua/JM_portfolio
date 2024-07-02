// copyright - Choi Jung mu
// 2024-04-18 Update
// 업데이트 내용
// gsap로 메인화면 꾸미기

// import the React
import React, { useEffect } from "react";
// import the section
import NightSky from "../components/UI/NightSky";
import SubAbout from "../components/About/SubAbout";
// import The gsap
import MainText from "../components/HomeComp/MainText";
import SkilledBy from "../components/HomeComp/SkilledBy";
import Footer from "../components/HomeComp/Footer";
import PortFolio from "../components/PortFolio/PortFolio";
// import AboutMe from "../components/AboutMe";
import gsap from "gsap";

function Home() {
  useEffect(() => {
    gsap.set(".mouseCursor", { xPercent: -50, yPercent: -50 });

    const cursor = document.querySelector(".mouseCursor");

    const handleMouseMove = (e) => {
      if (cursor) {
        const container = cursor.closest(".Ct");
        if (container) {
          container.style.cursor = "none";
        }
        gsap.to(cursor, {
          duration: 0.1,
          x: e.clientX,
          y: e.clientY,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="bg-black  cursor-none text-white relative">
        <div className="Ct mouseCursor opacity-70 fixed w-8 h-8 bg-white rounded-full z-10 pointer-events-none"></div>
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
        {/* PortFolio */}
        <PortFolio />
        <Footer />
        {/* Contact Me! */}
      </div>
    </>
  );
}

export default Home;
