import { BsPerson } from "react-icons/bs";
import ClickPick from "../../assets/clickpick_icon.png";
import { FaRegStar } from "react-icons/fa";
import { useState } from "react";
import gsap from "gsap";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import PortImg from "../../assets/PortImg.png";
import PortImg2 from "../../assets/PortImg2.png";
import { AiFillGithub } from "react-icons/ai";
import { IoLogoVercel } from "react-icons/io5";
function PortPort() {
  const [clickPage, setClickPage] = useState(1);
  const clickAngleLeft = () => {
    setClickPage(1);
    gsap.to("#ClickImg", {
      x: "0",
    });
  };
  const clickAngleRight = () => {
    setClickPage(2);
    gsap.to("#ClickImg", {
      x: "-100%",
    });
  };
  return (
    <section id="topProject" className="w-full h-full z-10">
      <div className="border-t-2 border-dashed opacity-70 my-4" />
      <div className="mt-12 text-center">
        {/* 큰 제목 */}
        <p className="font-nanum-square-neo-bold text-xl">
          - 포트폴리오 사이트 -
        </p>
        {/* 소제목 및 설명 */}
        <p className="opacity-70 mt-4">지금 현재 보고있는 사이트입니다.</p>
        {/* 이미지 */}
        <div className=" w-full sm:flex-col flex sm:h-[100vh] h-[50vh] my-4">
          <div className="  flex flex-1 justify-center">
            <div className="flex flex-1 justify-center items-center">
              <div className="w-[10px] px-4 h-full  flex justify-center items-center">
                <div className=" flex items-center justify-center">
                  <FaAngleLeft
                    size={20}
                    onClick={clickAngleLeft}
                    className="hover:size-6"
                  />
                </div>
              </div>
              <div className="w-1/2 sm:w-full flex justify-center">
                <div className="flex justify-center ">
                  <div className="flex-col flex">
                    <div className="flex overflow-hidden ">
                      <div id="ClickImg" className=" flex ">
                        <img src={PortImg} className="" alt="" />
                        <img src={PortImg2} className="" alt="" />
                      </div>
                    </div>
                    <div className="z-10 justify-center items-end">
                      {clickPage}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[10px] px-4 h-full  flex justify-center items-center">
                <div className=" flex items-center justify-center">
                  <FaAngleRight
                    size={20}
                    onClick={clickAngleRight}
                    className="hover:size-6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="w-2/3 sm:w-full gap-5 flex text-left flex-col">
              <div className="w-full flex justify-center items-center">
                <FaRegStar size={60} />
              </div>
              {/* 목표 */}
              <p>
                여태 배운 것과 애니메이션 동작을 구현하는 GSAP를 결합하여 제작한
                웹 포트폴리오 입니다. 우주에 들어온 공간각을 주고싶어
                백그라운드에 밤하늘이 빛나는 별을 구현한 npm을 설치하여
                구현하였고, Recoil을 좀 더 활용하여 제작 해보았습니다.
              </p>
              <p>
                ScrollTrigger를 내 마음대로 사용하기 위해 많은 시도를 하여
                제작했습니다. 새로운 개념들이 부딪히며 끈기와 인내심을 가르쳐준
                웹입니다.
              </p>
              <div className="border opacity-70"></div>
              <div className="flex gap-4 justify-center items-center">

              <a
        href="https://github.com/choijungmua/JM_portfolio"
        className="flex flex-col items-center justify-center text-xs gap-1"
      >
        <AiFillGithub size={25} className="hover:size-8" />
        <p className=" ">GitHub</p>
      </a>
      <a
        href="https://dev-blog-3p8v.vercel.app/"
        className="flex flex-col items-center justify-center text-xs gap-1"
      >
        <IoLogoVercel  size={25} className="hover:size-8" />
        <p className=" ">Vercel</p>
      </a>
        </div>
              <div className="flex-col opacity-70 flex text-end">
                <p>제작기간 : 1개월</p>
                <p>2024-06</p>

              </div>
            </div>
          </div>
        </div>
        {/* Stack */}
        <div className="w-full">
          <div className="w-full flex justify-end gap-1">
            <div className="rounded-full  border px-2 flex items-center">
              <p>Recoil</p>
            </div>
            <div className="rounded-full border px-2 flex items-center">
              <p>React</p>
            </div>
            <div className="rounded-full border px-2 flex items-center">
              <p>Tailwind</p>
            </div>
            <div className="rounded-full border px-2 flex items-center">
              <p>GSAP</p>
            </div>
          </div>

          <div className="flex absolute">
            <div>
              <div className="mt-4 flex sm:justify-start justify-center items-center gap-2">
                <p>인원수 : </p>
                <div className="flex">
                  <BsPerson size={24} />
                </div>
              </div>
              <div className="mt-4 sm:mt-2 opacity-70 flex justify-center items-center">
                <BsPerson size={18} />
                <p className="text-sm font-nanum-square-neo-Light">
                  아이콘의 개수당 인원수를 의미합니다.
                </p>
              </div>
            </div>
          </div>
          {/* Read Me */}
          <div className="w-full h-full items-center flex justify-end sm:pr-0 pr-12">
            <button className=" opacity-70 sm-my-0 my-2 rounded-full p-1 px-2 text-base font-nanum-square-neo-Bold">
              Read Me.
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortPort;
