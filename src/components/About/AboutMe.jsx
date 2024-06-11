// import React and other necessary libraries
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Profile from "../../assets/Profile.jpg";
function AboutMe() {
  // Create a ref for the about section
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.to(".textAboutAnimation", {
      duration: 2,
      text: "Who Is JungMu?",
      scrollTrigger: {
        trigger: ".textContainer",
        scrub: 2,
        start: "top center",
        end: "bottom center",
        // markers: true,
      },
    });
  }, []);

  return (
    <div
      ref={aboutRef}
      className="flex w-[100vw] h-[100vh] relative flex-col justify-center items-center"
    >
      <div className="textContainer font-nanum-square-neo-heavy sm:text-2xl text-4xl flex w-full flex-col items-center justify-center">
        <p className="textAboutAnimation">Index</p>
      </div>
      <div className="aboutImg w-full h-full  flex justify-center">
        <div className="flex  justify-center w-[300px] items-center">
          <img src={Profile} className=" rounded-full" alt="" />
          <div className="absolute flex justify-center items-center -z-10">
            <div className="flex absolute justify-center items-center w-[150px] rounded-full h-[150px] bg-green-400">
              열정
            </div>
            <div className="flex absolute justify-center items-center w-[150px] rounded-full h-[150px] bg-violet-400">
              노력
            </div>
            <div className="flex absolute justify-center items-center w-[150px] rounded-full h-[150px] bg-red-400">
              성장
            </div>
            <div className="flex absolute justify-center items-center w-[150px] rounded-full h-[150px] bg-sky-400">
              꿈
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
