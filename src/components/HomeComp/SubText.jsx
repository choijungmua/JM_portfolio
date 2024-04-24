import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Profile from "../../assets/Profile.jpg";
import { useGSAP } from "@gsap/react";
function SubText() {
  const container = useRef(null);
  const ulRef = useRef(null);
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  const sections = gsap.utils.toArray(".section");
  useGSAP(() => {
    // ScrollTrigger를 사용하여 스크롤 위치를 조절하여 가로 스크롤 시뮬레이션
    const ulElement = ulRef.current;
    if (!ulElement) return;

    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".work",
        start: "center center",
        end: "500%",
        pin: true,
        scrub: 1,
        markers: true,
        snap: {
          snapTo: 1 / (sections.length - 1),
          inertia: false,
          duration: { min: 0.1, max: 0.1 },
        },
        invalidateOnRefresh: true,
        // anticipatePin: 1,
      },
    });
  }, []);

  return (
    <div ref={container} className="overflow-hidden">
      <section className="z-10 work h-screen ">
        <ul ref={ulRef} className="flex flex-nowrap py-[3%] px-[30%] ">
          <li className="w-[600px] p-[100px] flex-shrink-0 section">
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
          </li>{" "}
          <li className="w-[600px] p-[100px] flex-shrink-0 section">
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
          </li>{" "}
          <li className="w-[600px] p-[100px] flex-shrink-0 section">
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
          </li>{" "}
          <li className="w-[600px] p-[100px] flex-shrink-0 section">
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
          </li>{" "}
          <li className="w-[600px] p-[100px] flex-shrink-0 section">
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
      <div className="w-[100vw] h-[300vh]"></div>
    </div>
  );
}

export default SubText;
