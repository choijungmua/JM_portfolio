// copyright - Choi Jung mu
// 2024-07-04 Update
// 업데이트 내용
// GSAP - MouseMove

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
      // 마우스가 감지될 경우 gsap.to를 이용해 따라감.
      if (cursor) {
        gsap.to(cursor, {
          duration: 0.2,
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
        <div className="mouseCursor opacity-70 fixed w-8 h-8 bg-white rounded-full z-10 sm:hidden pointer-events-none"></div>
        <NightSky />
        {/* MainPage */}
        <MainText />
        {/* SubAbout */}
        <SubAbout />
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
