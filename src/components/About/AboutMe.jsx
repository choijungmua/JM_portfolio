// import React and other necessary libraries
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function AboutMe() {
  // Create a ref for the about section
  const aboutRef = useRef(null);

  useEffect(() => {
    const timeRound = gsap.timeline({ delay: 2 }); // 무한 반복하는 타임라인 생성

    timeRound.to("#roundMove", {
      rotationY: 180,
      x: "600px",
      yoyo: true,
      repeat: -1,
      duration: 4,
      ease: "power4.inOut",
    });

    gsap.to(".textAboutAnimation", {
      duration: 3,
      text: "Hello:)",
      scrollTrigger: {
        trigger: ".textContainer",
        scrub: 3,
        start: "bottom center",
        end: "bottom center",
        markers: true,
      },
    });
    return () => {
      timeRound.kill();
    };
  }, []);

  return (
    <div
      ref={aboutRef}
      className="flex w-[100vw] relative flex-col justify-center items-center"
    >
      <div className="textContainer text-[150px] lg:text-[80px] w-[70%] flex justify-center flex-col items-center font-nanum-square-neo-heavy">
        <p className="textAboutAnimation">gdgd</p>
        <div>
          <div className="w-[800px] lg:w-[600px] lg:h-[150px] h-[200px] bg-gray-900 rounded-full items-center flex">
            <div className="text-6xl w-full h-full justify-center items-center flex">
              #열정 #노력 #배움
            </div>
            <div
              id="roundMove"
              className="rounded-full opacity-30 bg-white flex w-[200px] lg:h-[150px] h-[200px] absolute"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
