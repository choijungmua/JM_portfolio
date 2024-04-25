import CSS from "../../assets/CSS.png";
import "./../Styles/Animation.scss";
function SkillCard() {
  return (
    <div className="w-full h-full cardContainer flex justify-center items-center">
      <div className="item w-full h-full">
        <div className="front w-full h-full ">앞면</div>
        <div className="back w-full h-full">뒷면</div>
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
