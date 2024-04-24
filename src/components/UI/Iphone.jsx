import CSS from "../../assets/CSS.png";
function Iphone() {
  return (
    <div className="flex justify-center gap-6">
      <div className="w-[250px] h-[500px] border-2 shadow-xl border-rose-300 bg-white relative flex flex-col justify-center items-center rounded-3xl">
        <div className="w-[5px] h-[5px] rounded-full opacity-70 bg-black mb-2"></div>
        <div className="w-full flex justify-center items-center">
          <div className="w-[5px] h-[5px]  bg-black  rounded-full mr-24 absolute " />
          <div className=" h-[4px] rounded-full opacity-70 bg-black w-1/4"></div>
        </div>
        <div className="w-[230px] flex-col gap-5 bg-black flex justify-center items-center h-[350px] mt-12">
          <p className="font-nanum-square-neo-heavy text-2xl">CSS</p>
          <img src={CSS} alt="" />
        </div>
        <div className="bg-black w-[50px] h-[50px] mt-5 rounded-full"></div>
      </div>
    </div>
  );
}
export default Iphone;
