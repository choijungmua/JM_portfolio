function Navigation() {
  const liStyle = "border-x border-black p-1.5";
  return (
    <div className="bg-white w-full flex text-black py-[40px] justify-around">
      <p className="whitespace-nowrap items-center flex ">메인</p>
      <div className="flex w-full items-center">
        <ul className="flex gap-16 -black">
          <li className={liStyle}>Home</li>
          <li className={liStyle}>Skill</li>
          <li className={liStyle}>ㅁㄹ</li>
          <li className={liStyle}>ㅁㄹ</li>
        </ul>
        <p className="whitespace-nowrap items-center flex ">메인</p>
      </div>
    </div>
  );
}
export default Navigation;
