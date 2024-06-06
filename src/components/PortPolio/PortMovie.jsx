import { BsPerson } from "react-icons/bs";
import MUFLIX from "../../assets/MUFLIX.jpg";
import { gsap } from "gsap";
import { useState } from "react";
import {
  FaAngleRight,
  FaAngleLeft,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";
import Muflix1 from "../../assets/MuflixPort.png";
import Muflix2 from "../../assets/MuflixPort2.png";
function PortMovie() {
  const [MoviePage, setMoviePage] = useState(1);
  const MovieAngleLeft = () => {
    setMoviePage(1);
    gsap.to("#MovieImg", {
      x: "0",
    });
  };
  const MovieAngleRight = () => {
    setMoviePage(2);
    gsap.to("#MovieImg", {
      x: "-100%",
    });
  };
  return (
    <section id="topProject" className=" w-full h-full z-10">
      <div className="border-t-2 border-dashed opacity-70 my-4" />
      <div className="mt-12 text-center">
        {/* 큰 제목 */}
        <p className="font-nanum-square-neo-bold text-xl">
          - 영화 추천 사이트 -
        </p>
        {/* 소제목 및 설명 */}
        <p className="opacity-70 mt-4">
          영화를 장르별로 나누며, 영화의 다양한 정보들을 얻을 수 있습니다.
        </p>
        {/* 이미지 */}
        <div className=" w-full flex h-[50vh] my-4">
          <div className="flex flex-1 justify-center items-center">
            <div className="w-[10px] px-4 h-full  flex justify-center items-center">
              <div className=" flex items-center justify-center">
                <FaAngleLeft
                  size={20}
                  onClick={MovieAngleLeft}
                  className="hover:size-6"
                />
              </div>
            </div>
            <div className="w-1/2 flex justify-center">
              <div className="flex justify-center ">
                <div className="flex-col flex">
                  <div className="flex overflow-hidden ">
                    <div id="MovieImg" className=" flex h-full ">
                      <img src={Muflix1} className="" alt="" />
                      <img src={Muflix2} className="" alt="" />
                    </div>
                  </div>
                  <div className="z-10 justify-center items-end">
                    {MoviePage}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[10px] px-4 h-full  flex justify-center items-center">
              <div className=" flex items-center justify-center">
                <FaAngleRight
                  size={20}
                  onClick={MovieAngleRight}
                  className="hover:size-6"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="w-2/3 gap-5 flex text-left flex-col">
              <div className="w-full flex justify-center items-center">
                <img src={MUFLIX} alt="" />
              </div>
              {/* 목표 */}
              <p>
                공공데이터의 영화 오픈소스를 받아와 다양한 영화를 받아와 다양한
                영화를 보여주는 웹을 제작하였습니다.
              </p>
              <p>
                Next.js와 다양한 CSS 프레임워크를 사용하기 위해 제작하였습니다.
                제작하면서 Next.js의 SSR의 개념에 대해서 잘 알게 되었고, Git으로
                배포도 경험 할 수 있었습니다.
              </p>
              <div className="border opacity-70"></div>
              <div className="flex-col opacity-70 flex text-end">
                <p>제작기간 : 1주일</p>
                <p>2024-04</p>
              </div>
            </div>
          </div>
        </div>
        {/* Stack */}
        <div className="w-full">
          <div className="w-full flex justify-end gap-1">
            <div className="rounded-full  border px-2 flex items-center">
              <p>React</p>
            </div>
            <div className="rounded-full border px-2 flex items-center">
              <p>Next.js</p>
            </div>
            <div className="rounded-full border px-2 flex items-center">
              <p>SCSS</p>
            </div>
            <div className="rounded-full border px-2 flex items-center">
              <p>Styled Component</p>
            </div>
          </div>
          <div className="flex absolute">
            <div>
              <div className="flex justify-center items-center gap-2">
                <p>인원수 : </p>
                <BsPerson size={24} />
              </div>
              <div className="mt-4 opacity-70 flex justify-center items-center">
                <BsPerson size={18} />
                <p className="text-sm font-nanum-square-neo-Light">
                  아이콘의 개수당 인원수를 의미합니다.
                </p>
              </div>
            </div>
          </div>
          {/* Read Me */}
          <div className="w-full h-full items-center flex justify-end pr-12">
            <button className=" opacity-70 my-2 rounded-full p-1 px-2 text-base font-nanum-square-neo-Bold">
              Read Me.
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortMovie;
