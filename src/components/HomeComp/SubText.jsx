import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Profile from "../../assets/Profile.jpg";

gsap.registerPlugin(ScrollTrigger);

function SubText() {
  useEffect(() => {
    // ScrollTrigger를 사용하여 스크롤 위치를 조절하여 가로 스크롤 시뮬레이션
    gsap.to(".work ul", {
      x: () =>
        -(document.querySelector(".work ul").offsetWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: ".work",
        start: "center center",
        end: "+=300%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div>
      <section className="work h-screen border border-red-200 overflow-x-auto">
        <ul className="flex py-[3%] px-[30%]">
          <li className="w-[700px] p-[100px] flex-shrink-0">
            <div className="block w-[100%] relative">
              <div className="imgBox relative">
                <img src={Profile} alt="" className="w-[100%]" />
              </div>
              <div className="textBox absolute left-0 bottom-[10%] shadow-xl">
                <p className="title text-6xl">Site name</p>
                <p className="text en2 text-xl pl-[5px]">
                  UI/UX Design, web Publishing
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default SubText;
