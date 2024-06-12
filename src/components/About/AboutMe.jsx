// import React and other necessary libraries
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Profile from "../../assets/Profile.jpg";
function AboutMe() {
  // Create a ref for the about section
  const aboutRef = useRef(null);
  const aboutTextTimeLine = gsap.timeline();
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
    gsap.to(".a", {
      x: 300,
      y: 100,
      opacity: 1,
      scrollTrigger: {
        trigger: ".aboutImg",
        scrub: 2,
        start: "top center",
        end: "20% center",
        // markers: true,
      },
    });
    gsap.to(".b", {
      x: -300,
      y: 100,
      opacity: 1,
      scrollTrigger: {
        trigger: ".aboutImg",
        scrub: 2,
        start: "top center",
        end: "20% center",
        // markers: true,
      },
    });
    gsap.to(".c", {
      x: 300,
      y: -100,
      opacity: 1,
      scrollTrigger: {
        trigger: ".aboutImg",
        scrub: 2,
        start: "top center",
        end: "20% center",
        // markers: true,
      },
    });
    gsap.to(".d", {
      x: -300,
      y: -100,
      opacity: 1,
      scrollTrigger: {
        trigger: ".aboutImg",
        scrub: 2,
        start: "top center",
        end: "20% center",
        // markers: true,
      },
    });
  }, []);

  const aboutImgClick = () => {
    gsap.to(".a", {
      opacity: 0,
      display: "none",
    });
    gsap.to(".b", {
      opacity: 0,
      display: "none",
    });
    gsap.to(".c", {
      opacity: 0,
      display: "none",
    });
    gsap.to(".d", {
      opacity: 0,
      display: "none",
    });
    gsap.to(".im", {
      x: -300,
    });
    aboutTextTimeLine.to(".aboutText1", {
      duration: 2,
      text: "안녕하십니까 저는 프론트엔드 개발자 최정무입니다.",
    });
    aboutTextTimeLine.to(".aboutText2", {
      duration: 2,
      text: "저는 의미있는 배움과 좋은 성장을 이루기 위해 개발합니다.",
    });
    aboutTextTimeLine.to(".aboutText3", {
      duration: 2,
      text: "개발에 진정성 있게 다가가고 싶고 더 많은 것을 배우고 싶습니다.",
    });
  };
  return (
    <div
      ref={aboutRef}
      className="flex w-[100vw] h-[100vh] relative flex-col justify-center items-center"
    >
      <div className="textContainer font-nanum-square-neo-heavy sm:text-2xl text-4xl flex w-full flex-col items-center justify-center">
        <p className="mt-24 textAboutAnimation">Index</p>
        <p className="text-base font-nanum-square-neo-Light mt-2">
          각 아이콘을 클릭해보세요.
        </p>
      </div>
      <div className="aboutImg w-full h-full  flex justify-center">
        <div className="w-full  relative h-full flex justify-center items-center">
          <div className="flex  justify-center w-[300px] items-center">
            <img
              src={Profile}
              onClick={aboutImgClick}
              className="im rounded-full"
              alt=""
            />

            <div className="absolute flex justify-center items-center">
              <div className="a opacity-0 flex absolute justify-center items-center w-[150px] rounded-full h-[150px] bg-green-400">
                열정
              </div>
              <div className="b opacity-0 flex absolute justify-center items-center w-[150px] rounded-full h-[150px] bg-violet-400">
                노력
              </div>
              <div className="c opacity-0 flex absolute justify-center items-center w-[150px] rounded-full h-[150px] bg-red-400">
                성장
              </div>
              <div className="d opacity-0 flex absolute justify-center items-center w-[150px] rounded-full h-[150px] bg-sky-400">
                꿈
              </div>
            </div>
          </div>
          <div className="flex overflow-hidden flex-col absolute ml-72">
            <p className="aboutText1"></p>
            <p className="aboutText2"></p>
            <p className="aboutText3"></p>
            <div className="flex w-full justify-center">
              <p>ㅎㅇ</p>
              <p>ㅂㅇ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
