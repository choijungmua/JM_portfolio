import React from "react";
import Profile from "../assets/Profile.jpg";
import BGIMG from "../assets/bgImg.jpg";
function HomeBottomIntro() {
  return (
    <div className="w-full flex justify-between h-full py-20">
      <div className="w-1/2 h-full -z-1">
        <div className="justify-center mx-auto relative items-center flex w-full h-full">
          <img src={BGIMG} className="w-full h-full flex" />
          <div className="absolute">
            {/* <div className="bg-white rounded-md right-0 top-10 text-right p-3 whitespace-nowrap">
                <p>일찍 일어나는 새가</p>
                <p>빨리 지치고 빨리 잡아먹힌다!!</p>
              </div> */}
            <img src={Profile} className="rounded-lg w-5/6 h-auto" />
          </div>
        </div>
      </div>
      <div className="flex  text-white w-1/2 h-full right-0 bg-black z-10 items-center justify-center">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-2xl pb-3">안녕하세요</h2>
          <p className="font-semibold">저는 프론트엔드 디벨로퍼에 도전하는</p>
          <p className="font-semibold">꿈을 찾아 나아가는 인재 최정무입니다.</p>
          <p className="font-semibold">
            다음에 뭐 쓸지 생각해 오는 것을 숙제로 잡자
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeBottomIntro;