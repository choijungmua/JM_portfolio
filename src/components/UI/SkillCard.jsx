import CSS from "../../assets/CSS.png";
import "./../Styles/Animation.scss";
import { useState } from "react";
import { useRecoilState } from "recoil";
import gientCard from "../../atoms/gientCard";
import github from "../../assets/github.png";

function SkillCard({ MainText, SubText, Icon, Explain }) {
  const [Card, setCard] = useRecoilState(gientCard);
  const cardClick = () => {
    setCard((card) => !card);
  };
  return (
    <div className="w-full h-full cardContainer flex flex-start text-center text-black">
      <div onClick={cardClick} className="item w-full h-full rounded-3xl  ">
        <div className="front w-full h-full  rounded-3xl text-center bg-white text-black">
          <p>{MainText}</p>
          <p>{SubText}</p>
          {Icon === "github" && (
            <div>
              <img src={github} alt="" className="w-1/2 h-1/2" />
            </div>
          )}
        </div>
        <div className="back w-full h-full rounded-3xl ">
          <p>{Explain}</p>
        </div>
      </div>
    </div>
    // <div className="w-full h-full">
    //   {/* Front */}
    //   <div className="flex flex-col justify-center items-center w-full h-full">
    //     <div className="w-1/2 h-1/2 mt-12">
    //       <img src={CSS} alt="" className="" />
    //     </div>
    //     <div>
    //       <p className="text-white font-nanum-square-neo-Bold">CSS</p>
    //     </div>
    //   </div>
    //   {/* Back */}
    //   <div className="flex flex-col justify-center items-center w-full h-full">
    //     <div className="w-1/2 h-1/2 mt-12">
    //       <img src={CSS} alt="" className="" />
    //     </div>
    //     <div>
    //       <p className="text-white font-nanum-square-neo-Bold">CSS</p>
    //     </div>
    //   </div>
    // </div>
  );
}
export default SkillCard;
