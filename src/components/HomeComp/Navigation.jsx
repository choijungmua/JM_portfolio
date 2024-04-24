function Navigation() {
  return (
    // 사이드바
    <div className="w-full sticky top-10 flex justify-center">
      <div className="w-1/4">
        {/* 원 4개 */}
        <div className="justify-between flex relative">
          <div className="w-full border-t-2 mt-1 flex absolute" />
          <div className=" w-[20px] h-[10px] bg-white rounded-full hover:w-[40px] flex justify-center">
            <p className="whitespace-nowrap mt-4 animate-pulse">Home</p>
          </div>{" "}
          <div className="w-[20px] h-[10px] bg-white rounded-full hover:w-[40px] flex justify-center">
            <p className="whitespace-nowrap mt-4 animate-pulse">Skill</p>
          </div>{" "}
          <div className="w-[20px] h-[10px] bg-white rounded-full hover:w-[40px] flex justify-center">
            <p className="whitespace-nowrap mt-4 animate-pulse">Portfoilo</p>
          </div>{" "}
          <div className="w-[20px] h-[10px]  bg-white rounded-full hover:w-[40px] flex justify-center">
            <p className="whitespace-nowrap mt-4 animate-pulse">About</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navigation;
