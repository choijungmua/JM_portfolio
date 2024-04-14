import HomeTopIntro from "../components/HomeTopIntro";
import Navigation from "../components/Navigation";
import { useEffect, useRef, useState } from "react";
import React from "react";
import DesignedBy from ".././components/DesignedBy";
import { useRecoilValue } from "recoil";
import mouseHover from "../atoms/mouseHover";
import bgImg from "../assets/bg.jpg";
import AboutMe from "../components/AboutMe";
function Home() {
  const mouseHovered = useRecoilValue(mouseHover);

  // 페이지 전환
  const [xy, setxy] = useState({ x: 0, y: 0 });
  const handleWheel = useRef();
  const mouseHandler = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    setxy({ x: mouseX, y: mouseY });
  };
  useEffect(() => {
    const wheelChangeHandler = (e) => {
      e.preventDefault();
      const { scrollTop } = handleWheel.current;
      const pageHeight = window.innerHeight;
      const { deltaY } = e;

      if (deltaY > 0) {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          console.log("현재 1페이지, down");
          handleWheel.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          console.log("현재 2페이지, down");
          handleWheel.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          console.log("현재 3페이지, down");
          handleWheel.current.scrollTo({
            top: pageHeight * 3,
            left: 0,
            behavior: "smooth",
          });
        }
      } else {
        if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          console.log("현재 3페이지, up");
          handleWheel.current.scrollTo({
            top: -pageHeight * 3,
            left: 0,
            behavior: "smooth",
          });
        }
        if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          console.log("현재 2페이지, up");
          handleWheel.current.scrollTo({
            top: -pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
        }
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          console.log("현재 1페이지, up");
          handleWheel.current.scrollTo({
            top: -pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
        }
      }
    };

    const currentRef = handleWheel.current;
    currentRef.addEventListener("wheel", wheelChangeHandler);

    // 이벤트 리스너 해제
    return () => {
      currentRef.removeEventListener("wheel", wheelChangeHandler);
    };
  }, []);
  return (
    <div
      ref={handleWheel}
      //추가 cursor-none pointer-events-auto
      className="bg-[#262626] w-full overflow-y-auto h-screen "
      // onMouseMove={mouseHandler}
    >
      {/* 마우스 휠  */}
      <div
        className={`absolute bg-white z-50
        }  left-[-15px] 
        top-[-15px] rounded-full w-[30px] h-[30px]`}
        style={{ transform: `translate(${xy.x}px, ${xy.y}px)` }}
      />
      {/* 네비게이션 */}

      <Navigation />
      {/* 1 section */}
      <HomeTopIntro />
      {/* About Me */}
      <AboutMe />
    </div>
  );
}
export default Home;
