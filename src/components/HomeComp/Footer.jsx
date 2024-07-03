import { useEffect, useState, useRef } from "react";

import gsap from "gsap";
import Me from "../../assets/Profile.jpg";
import { FaGithub } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";
import FooterContact from "./FooterBox/FooterContact";
import FooterGuestBook from "./FooterBox/FooterGuestBook";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase"; // Firebase 설정 가져오기
import { doc, setDoc } from "firebase/firestore";
function Footer() {
  // 배열로 방명록의 List값 저장
  const [dataList, setDataList] = useState([]);
  // TimeLine
  const footerTimeLine = gsap.timeline();
  const footerEndingTimeLine = gsap.timeline();
  useEffect(() => {
    // gsap timeline
    footerTimeLine.from(".footerTL1", {
      y: 100,
      duration: 0.5,
    });
    // gsap timeline
    footerTimeLine.to(".footerTL1", {
      delay: 0.2,
      x: 1000,
      opacity: 0,
      duration: 0.5,
    });
    footerTimeLine.to(".footerTL2", {
      delay: 0.2,
      opacity: 1,
      duration: 0.5,
    });
    footerTimeLine.to(".footerTL2", {
      delay: 0.2,
      scale: 0,
      duration: 0.5,
    });
    footerTimeLine.from(".footerTL3", {
      delay: 0.2,
      y: 1000,
      opacity: 0,
      duration: 0.5,
    });
    // Footer gsap End Timeline
    footerEndingTimeLine.to(".FooterEndText", {
      text: "시청해주셔서 감사합니다.",
      duration: 3,
    });
    footerEndingTimeLine.to(".FooterEndText", {
      delay: 1,
      opacity: 0,
    });
    footerEndingTimeLine.to(".CallMeFooter1", {
      delay: 0.2,
      opacity: 1,
    });
    footerEndingTimeLine.to(".CallMeFooter2", {
      delay: 0.2,
      opacity: 1,
    });
    footerEndingTimeLine.to(".CallMeFooter3", {
      delay: 0.2,
      opacity: 1,
    });
  }, []);

  const onClickGuestBook = () => {
    gsap.to(".CallMeFooter5", {
      display: "none",
      opacity: 0,
      z: -10,
    });
    gsap.to(".CallMeFooter4", {
      display: "block",
      opacity: 1,
      z: 10,
    });
  };
  const onClickContactMe = () => {
    gsap.to(".CallMeFooter4", {
      display: "none",
      opacity: 0,
      z: -10,
    });
    gsap.to(".CallMeFooter5", {
      display: "block",
      opacity: 1,
      z: 10,
    });
  };
  return (
    <>
      {/* 방문록 */}
      <div className="guestViewContainer absolute pointer-events-none text-center w-[100vw] h-[100vh] opacity-0">
        <div className="w-full flex flex-col items-center h-full">
          <p className="text-yellow-400 my-4 font-nanum-square-neo-Bold text-xl">
            방명록 작성자 수{dataList.length + 1}
          </p>
          <div className="w-[50vw] flex flex-col items-center">
            <div className="mt-2 text-base flex justify-center gap-2 items-center">
              {/* <p className="w-[100px] h-[30px]">이름:{guestName}</p>
              <p className="w-[300px] h-[30px]">내용:{guestContents}</p> */}
            </div>
            {/* 배열 출력하기 */}
            {dataList.length > 0 ? (
              dataList.map((item, index) => (
                <div key={index}>
                  {Object.entries(item).map(([key, value]) => (
                    <div
                      className="mt-2 text-base flex justify-center gap-2 items-center"
                      key={key}
                    >
                      <p className="w-[100px] h-[30px]">이름:{key}</p>
                      <p className="w-[300px] h-[30px]">내용:{value}</p>
                    </div>
                  ))}
                </div>
              ))
            ) : (
              <p>데이터를 불러오는 중입니다...</p>
            )}
          </div>
        </div>
      </div>
      {/* 방명록 */}
      <div className="guestWriteContainer flex justify-center overflow-hidden">
        {/* 시청해주셔서 감사합니다. */}
        <div className="flex w-[100vw] h-[100vh] justify-center items-center">
          <div className="FooterEndText font-nanum-square-neo-Bold text-3xl"></div>
        </div>
        {/*  */}
        <div className="flex text-center z-10 w-[80vw] h-[100vh] absolute justify-center items-center">
          <div className="flex items-center text-center flex-col">
            <div className="w-[40vw] ">
              {/* 이남자의 포트폴리오 */}
              <p className="CallMeFooter1 sm:text-base sm:font-nanum-square-neo-Regular sm:whitespace-nowrap opacity-0 font-nanum-square-neo-ExtraBold text-xl mb-4">
                이 남자의 포트폴리오가 맘에 드셨나요?
              </p>
              <div className="flex justify-center gap-5 items-center">
                {/* 연락바람 */}
                <div className=" flex flex-col relative">
                  <div className="CallMeFooter2  hover:text-2xl gap-2 items-center flex opacity-0">
                    <p
                      onClick={onClickContactMe}
                      className="text-lg hover:text-xl hover:font-nanum-square-neo-Bold"
                    >
                      📞Contact Me
                    </p>
                    <div className="text-xs opacity-80">{`>`}</div>
                  </div>
                  {/* 방명록 */}
                  <div className="CallMeFooter3 gap-2 items-center flex opacity-0">
                    <p
                      onClick={onClickGuestBook}
                      className="text-lg hover:text-xl hover:font-nanum-square-neo-Bold"
                    >
                      📕Write Guest Book
                    </p>
                    <div className="text-xs opacity-80">{`>`}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 w-full relative ">
              {/* 연락처 */}
              <FooterContact />
              {/* 방문록 작성하기 */}
              <FooterGuestBook />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
