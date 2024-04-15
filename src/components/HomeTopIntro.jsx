import { RxNotionLogo } from "react-icons/rx";
import { AiFillGithub } from "react-icons/ai";
import { useState } from "react";
import { CgChevronDoubleDown } from "react-icons/cg";
import Profile from "../assets/Profile.jpg";
import { ReactTyped } from "react-typed";
import FrontEndHover from "../assets/FrontEndHover.gif";
import Fire from "../assets/Fire.gif";
import styled, { keyframes } from "styled-components";
import wiretext from "../assets/wiretext.svg";
import whitewire from "../assets/whitewire.svg";
import wire from "../assets/wire.svg";
import { useEffect } from "react";
// const textMove = keyframes`
// 0% {
//   transform: translateX(150vw);

// }
// }
// 100% {
//   transform: translateX(-50vw);

// }
// `;
// const StyledAnimation = styled.div`
//   width: 250%;
//   rotate: 12deg;
//   animation: ${textMove} 24s infinite;
// `;
// const textMove2 = keyframes`
// 0% {
//   transform: translateX(150vw);

// }
// }
// 100% {
//   transform: translateX(150vw);

// }
// `;
// const StyledAnimation2 = styled.div`
//   width: 250%;
//   rotate: 340deg;
//   animation: ${textMove2} 15s infinite;
// `;

function HomeTopIntro() {
  const [frontEndMouseHover, setFrontEndMouseHover] = useState(1);
  const [fireHover, setFireHover] = useState(1);
  const HandleFrontEndHover = (e) => {
    setFrontEndMouseHover((hover) => !hover);
  };
  const HandleFrontEndLeave = (e) => {
    setFrontEndMouseHover((hover) => !hover);
  };
  const HandleFireHover = (e) => {
    setFireHover((hover) => !hover);
  };
  const HandleFireLeave = (e) => {
    setFireHover((hover) => !hover);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@h0rn0chse/night-sky/dist/bundle.min.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="text-white w-full overflow-hidden relative h-full flex-col justify-center items-center flex">
      {/* <StyledAnimation className="text-green-400 flex items-center font-nanum-square-neo-heavy text-9xl absolute opacity-20">
        개발 잘하고싶다~
      </StyledAnimation>
      <StyledAnimation2 className="text-green-400 flex items-center font-nanum-square-neo-heavy text-9xl absolute opacity-20">
        노력하자~
      </StyledAnimation2> */}
      <div className="w-full h-full absolute">
        <night-sky
          id="nightSky"
          className="w-[full] h-[full] overflow-hidden absolute"
          layers="3"
          density="20"
          velocity-x="40"
          velocity-y="40"
          star-color="#FFF"
          background-color="transparent"
        ></night-sky>
      </div>
      <div className=" absolute flex w-full">
        <img src={whitewire} alt="" className="w-[500px] mt-72  opacity-10" />
        <img
          src={wiretext}
          alt=""
          className="w-[600px] mt-[-200px] opacity-50"
        />
        <img
          src={wire}
          alt=""
          className="absolute right-0 w-[800px] top-40  opacity-20"
        />
      </div>
      <div className="flex">
        <div className="flex flex-col">
          <p>웹으로 세상을 바꾸고 싶은 최정무의</p>

          <div className="border-b-2 my-1 relative" />

          <p className="font-nanum-square-neo-heavy text-6xl">
            GROW
            <span className="text-green-400 absolute ml-2"> DEVELOPER</span>
            <span className="text-green-400 absolute mt-1.5 ml-1.5 opacity-15">
              DEVELOPER
            </span>
            <span className="opacity-0">DEVELOPER</span>
          </p>
          <p className="font-nanum-square-neo-light text-6xl text-right">
            PORTPOLIO
          </p>
        </div>
      </div>
      <div className="flex relative justify-center w-full mt-4">
        <div className="rounded-[100px] w-[300px] flex h-[400px]  overflow-hidden items-center">
          <img
            src={
              !frontEndMouseHover ? FrontEndHover : !fireHover ? Fire : Profile
            }
            className="h-full"
          />
        </div>
        <div className="flex justify-center flex-col text-center px-6">
          <ReactTyped
            strings={["안녕하세요 프론트엔드 개발자 최정무입니다 :)"]}
            typeSpeed={60}
            backSpeed={10}
            loop
            className="mb-4 text-xl font-nanum-square-neo-Bold"
          />
          <div className="text-left ml-6">
            <p>배움을 즐기고 그것을 바탕으로 문제를 해결하는 마음으로</p>
            <p className="mb-2">
              공부하는{" "}
              <span
                onMouseOver={HandleFrontEndHover}
                onMouseLeave={HandleFrontEndLeave}
                className=" animate-pulse text-green-400 font-nanum-square-neo-Bold hover:text-xl hover:animate-none"
              >
                프론트엔드
              </span>{" "}
              최정무입니다.
            </p>
            <p>저는 3개월 간 독학으로 다양한 공부를 해왔습니다.</p>
            <p>이 경험을 통해 React,Next.js등 많은 동작에 대해 공부하였고</p>
            <p>
              노력하면 더 성장할 수 있다는{" "}
              <span
                className="animate-pulse text-green-400 font-nanum-square-neo-Bold hover:text-xl hover:animate-none"
                onMouseOver={HandleFireHover}
                onMouseLeave={HandleFireLeave}
              >
                열정
              </span>
              을 가지고 있습니다.
            </p>
          </div>
          <div className="flex justify-center gap-5 mt-16">
            <div className="rounded-2xl border-2 border-white flex justify-center items-center "></div>
            {/* <BsInstagram size={25} /> */}
            <div className="flex gap-6 items-center justify-center">
              <span className="flex flex-col  items-center justify-center text-xs gap-1">
                <RxNotionLogo size={25} className="hover:size-8" />
                <p className="">Notion</p>
              </span>
              <span className="flex flex-col items-center justify-center text-xs gap-1">
                <AiFillGithub size={25} className="hover:size-8" />
                <p className=" ">GitHub</p>
              </span>
            </div>
            <div className="rounded-2xl border-2 border-white "></div>
          </div>
        </div>
        {/* <div className="rounded-full w-[340px] h-[340px] bg-white opacity-20 absolute" />
        <div className="rounded-full w-[400px] h-[400px] bg-[#22a68e] opacity-20 absolute" />
      </div>
      <div className="z-[10] rounded-2xl shadow-2xl bg-[#24282e] w-[400px] flex-col gap-3 pt-24 h-[400px] flex justify-center items-center">
        <p className="font-nanum-square-neo-heavy mt-24 text-4xl ">
          CHOI JUNGMU
        </p>
        <p>FRONTEND DEVELOPER</p>
        <div className="flex gap-5 mt-16">
          <BsInstagram size={20} />
          <RxNotionLogo size={20} />
          <AiFillGithub size={20} />
        </div>
      </div>
      <div className="">
        <p>프론트엔드로서의 나란?</p>
      </div> */}
      </div>
      <div className="bottom-12 absolute animate-bounce flex flex-col items-center justify-center">
        <p className="text-xs mb-[-6px] font-nanum-square-neo-Light">더보기</p>
        <CgChevronDoubleDown size={28} />
      </div>
    </div>
  );
}

export default HomeTopIntro;
