import { BsPerson } from "react-icons/bs";
import ClickPick from "../../assets/clickpick_icon.png";
import { useEffect, useState } from "react";
import ClickPickPort1 from "../../assets/ClickPickPort.png";
import ClickPickPort2 from "../../assets/ClickPickPort2.png";
import { gsap } from "gsap";
import {
  FaAngleRight,
  FaAngleLeft,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";
function PortClick() {
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
          - 여행지 추천 사이트 -
        </p>
        {/* 소제목 및 설명 */}
        <p className="opacity-70 mt-4">
          현재 여행지의 실시간 사진 정보를 나눌 수 있는 사이트입니다.
        </p>
        {/* 이미지 */}
        <div className=" w-full sm:flex-col flex sm:h-[100vh] h-[50vh] my-4">
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
                      <img src={ClickPickPort1} className="" alt="" />
                      <img src={ClickPickPort2} className="" alt="" />
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
          <div className="flex-1 flex items-center justify-center">
            <div className="w-2/3 sm:w-full gap-5 flex text-left flex-col">
              <div className="w-full flex justify-center items-center">
                <img src={ClickPick} alt="" />
              </div>
              {/* 목표 */}
              <p>
                처음으로 다른 개발자들과 소통하며 웹을 제작해본 팀
                프로젝트입니다. 프론트엔드 2명과 백엔드 1명이서 소통하여
                제작하였습니다. 백엔드의 작업 환경 및 배포, 다양한 경험을 한
                순간이였습니다. 추가로 다른 사람의 코드를 직접적으로 볼 수
                있다는 점과, 코드 컨벤션을 맞출 수 있다는 점에서 정말 배울 것이
                많았으며, 새로운 프레임워크의 도전을 할 수 있는 경험과 정말
                탄탄한 코드를 작성해준 프론트엔드 사수분께 보고 배운점이 정말
                많습니다. 이 프로젝트를 계기로 좀 더 성장의 발판에 기댈 수 있는
                시간이 되었으며, 앞으로 성장해 나갈 제 목표입니다.
              </p>
              <div className="border opacity-70"></div>
            </div>
          </div>
        </div>
        {/* Stack */}
        <div className="w-full ">
          <div className="whitespace-nowrap gap-2 w-full flex justify-end gap-1">
            <div className="flex gap-2 flex-col">
              <div className="rounded-full  border px-2 flex items-center">
                <p>Recoil</p>
              </div>
              <div className="rounded-full border px-2 flex items-center">
                <p>Next.js</p>
              </div>
              <div className="rounded-full border px-2 flex items-center">
                <p>Tailwind</p>
              </div>
              <div className="rounded-full border px-2 flex items-center">
                <p>Axios</p>
              </div>
              <div className="rounded-full border px-2 flex items-center">
                <p>ReactQuery</p>
              </div>
            </div>
            <div className="flex gap-2 flex-col">
              <div className="rounded-full border px-2 flex items-center">
                <p>FRAMER-MOTION</p>
              </div>
              <div className="rounded-full border px-2 flex items-center">
                <p>APEXCHARTS</p>
              </div>
              <div className="rounded-full border px-2 flex items-center">
                <p>CKEDITOR5</p>
              </div>
              <div className="rounded-full border px-2 flex items-center">
                <p>Styled Components</p>
              </div>
            </div>
          </div>
          <div className="flex-col opacity-70 flex text-end">
            <p>제작기간 : 4개월</p>
            <p>2024-05</p>
          </div>

          <div className="flex mt-4 absolute">
            <div>
              <div className="flex justify-center sm:justify-start items-center gap-2">
                <p>인원수 : </p>
                <div className="flex">
                  <BsPerson size={24} />
                  <BsPerson size={24} />
                  <BsPerson size={24} />
                </div>
              </div>
              <div className="mt-4 sm:mt-2 opacity-70 flex justify-center items-center">
                <BsPerson size={18} />
                <p className="text-sm  font-nanum-square-neo-Light">
                  아이콘의 개수당 인원수를 의미합니다.
                </p>
              </div>
            </div>
          </div>
          {/* Read Me */}
          {/* <div className="w-full h-full sm:pr-0 items-center flex justify-end pr-12">
            <button className=" sm-my-0 opacity-70 my-2 rounded-full p-1 px-2 text-base font-nanum-square-neo-Bold">
              Read Me.
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default PortClick;
