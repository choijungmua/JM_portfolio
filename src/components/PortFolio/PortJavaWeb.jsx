import { BsPerson } from "react-icons/bs";
import blackjava from "../../assets/blackjava.jpg";
import javaPort1 from "../../assets/javaport.png";
import javaPort2 from "../../assets/javaport2.png";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import {
  FaAngleRight,
  FaAngleLeft,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";

function PortJavaWeb() {
  const [javaPage, setJavaPage] = useState(1);
  const AngleLeft = () => {
    setJavaPage(1);
    gsap.to("#javaImg", {
      x: "0",
    });
  };
  const AngleRight = () => {
    setJavaPage(2);
    gsap.to("#javaImg", {
      x: "-100%",
    });
  };
  return (
    <section id="topProject" className="w-full h-full z-10">
      <div className="border-t-2 border-dashed opacity-70 my-4" />
      <div className="mt-12 text-center">
        {/* 큰 제목 */}
        <p className="font-nanum-square-neo-bold text-xl">
          - 투두리스트 및 다양한 기능을 가진 바닐라 웹 -
        </p>
        {/* 소제목 및 설명 */}
        <p className="opacity-70 mt-4">투두리스트 및 다양한 바닐라 자바 웹</p>
        {/* 이미지 */}
        <div className=" w-full flex sm:flex-col sm:h-[100vh] h-[50vh] my-4">
          <div className="flex flex-1 justify-center items-center">
            <div className="w-[10px] px-4 h-full  flex justify-center items-center">
              <div className=" flex items-center justify-center">
                <FaAngleLeft
                  size={20}
                  onClick={AngleLeft}
                  className="hover:size-6"
                />
              </div>
            </div>
            <div className="w-1/2 sm:w-full flex justify-center">
              <div className="flex justify-center ">
                <div className="flex-col flex">
                  <div className="flex overflow-hidden ">
                    <div id="javaImg" className=" flex ">
                      <img src={javaPort1} className="" alt="" />
                      <img src={javaPort2} className="" alt="" />
                    </div>
                  </div>
                  <div className="z-10 justify-center items-end">
                    {javaPage}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[10px] px-4 h-full  flex justify-center items-center">
              <div className=" flex items-center justify-center">
                <FaAngleRight
                  size={20}
                  onClick={AngleRight}
                  className="hover:size-6"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="w-2/3 sm:w-full gap-5 flex text-left flex-col">
              <div className="w-full flex justify-center items-center">
                <div className="w-1/3">
                  <img src={blackjava} alt="" />
                </div>
              </div>
              {/* 목표 */}
              <p>
                저를 처음으로 개발의 매력을 빠지게 한 자바스크립트 웹입니다.
              </p>
              <p>
                HTML과 CSS JAVASCRIPT 세 동작을 이루어 만들어 냈으며, fetch를
                이용하여 현재 위치의 날씨정보를 얻어 올 수 있었으며, 새로고침 할
                때마다 랜덤으로 바뀌는 배경화면과, 명언들이 바뀌며 투두리스트를
                구현하였습니다.
              </p>
              <div className="border opacity-70"></div>
              <div className="flex-col opacity-70 flex text-end">
                <p>제작기간 : 1개월</p>
                <p>2024-02</p>
              </div>
            </div>
          </div>
        </div>
        {/* Stack */}
        <div className="w-full">
          <div className="w-full flex justify-end gap-1">
            <div className="rounded-full  border px-2 flex items-center">
              <p>HTML</p>
            </div>
            <div className="rounded-full border px-2 flex items-center">
              <p>CSS</p>
            </div>
            <div className="rounded-full border px-2 flex items-center">
              <p>JAVASCRIPT</p>
            </div>
          </div>

          <div className="flex absolute">
            <div>
              <div className="flex justify-center sm:justify-start items-center gap-2">
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
          {/* <div className="w-full h-full items-center flex justify-end sm:pr-0 pr-12">
            <button className="opacity-70 my-2 sm-my-0 rounded-full p-1 px-2 text-base font-nanum-square-neo-Bold">
              Read Me.
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default PortJavaWeb;
