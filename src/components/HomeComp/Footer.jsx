import { useEffect, useState, useRef } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase"; // Firebase 설정 가져오기
import { doc, setDoc } from "firebase/firestore";
import gsap from "gsap";
import Me from "../../assets/Profile.jpg";
function Footer() {
  // 배열로 방명록의 List값 저장
  const [dataList, setDataList] = useState([]);
  const footerTimeLine = gsap.timeline();
  const footerEndingTimeLine = gsap.timeline();
  const fetchData = async () => {
    // 비동기 식으로 Firebase의 값 읽어오기
    try {
      const querySnapshot = await getDocs(collection(db, "guestBook")); // Firestore의 "Title" 컬렉션에서 데이터 가져오기

      const fetchedData = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const item = {};

        // 각 문서의 key와 value를 item 객체에 저장
        for (let key in data) {
          item[key] = data[key];
        }

        fetchedData.push(item); // 배열에 객체 추가
      });

      setDataList(fetchedData); // 상태 업데이트
    } catch (error) {
      console.error("Error fetching documents: ", error);
    }
  };

  // 컴포넌트가 처음 마운트될 때 fetchData 호출
  useEffect(() => {
    // 비동기 식으로 Firebase의 값 읽어오기
    fetchData();
  }, []);

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
  const [guestName, setGuestName] = useState("");
  const [guestContents, setGuestContents] = useState("");
  const onGuestNameValue = (e) => {
    e.preventDefault();
    setGuestName(e.target.value);
  };
  const onGuestContentsValue = (e) => {
    e.preventDefault();
    setGuestContents(e.target.value);
  };
  // 클릭 시 방명록 저장하기
  const onGuestSubmit = async (e) => {
    e.preventDefault();
    try {
      const collectionRef = collection(db, "guestBook"); // "guestBook" 컬렉션을 참조합니다.
      const docRef = doc(collectionRef); // 새로운 문서 참조를 만듭니다.
      const newDoc = await setDoc(docRef, {
        [guestName]: guestContents,
      }); // 문서에 데이터를 추가합니다.

      console.log("Document written with ID: ", newDoc.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
    gsap.to(".guestWriteContainer", {
      opacity: 0,
    });
    gsap.to(".guestViewContainer", {
      delay: 1,

      opacity: 1,
    });
  };

  const onClickGuestBook = () => {
    gsap.to(".CallMeFooter4", {
      opacity: 1,
      z: 10,
    });
    gsap.to(".CallMeFooter5", {
      opacity: 0,
      z: -10,
    });
  };
  const onClickContactMe = () => {
    gsap.to(".CallMeFooter5", {
      opacity: 1,
      z: 10,
    });
    gsap.to(".CallMeFooter4", {
      opacity: 0,
      z: -10,
    });
  };
  return (
    <>
      {/* 방명록 */}
      <div className="guestWriteContainer flex justify-center overflow-hidden">
        {/* 시청해주셔서 감사합니다. */}
        <div className="flex w-[100vw] h-[100vh] absolute justify-center items-center">
          <div className="FooterEndText font-nanum-square-neo-Bold text-3xl"></div>
        </div>
        {/*  */}
        <div className="flex text-center z-10 w-[80vw] h-[100vh] absolute justify-center items-center">
          <div className="flex  justify-center">
            <div className="w-[40vw] ">
              {/* 이남자의 포트폴리오 */}
              <p className="CallMeFooter1  opacity-0 font-nanum-square-neo-ExtraBold text-xl mb-4">
                이 남자의 포트폴리오가 맘에 드셨나요?
              </p>
              <div className="flex justify-center gap-5 items-center">
                {/* 연락바람 */}
                <div className=" flex flex-col">
                  <div className="CallMeFooter2 hover:text-2xl gap-2 items-center flex opacity-0">
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
            {/* 방문록 작성하기 */}
            <div className="CallMeFooter4 opacity-0">
              <div className="w-[40vw] h-full justify-center items-center flex">
                <div className="guestWrite ">
                  <form action="" className="flex gap-2">
                    <div className="flex gap-2 justify-center items-center">
                      <label htmlFor="name">이름</label>
                      <input
                        id="name"
                        type="text"
                        onChange={onGuestNameValue}
                        className="p-2 text-center text-black rounded-lg"
                      />
                    </div>
                    <div className="flex gap-2 justify-center items-center">
                      <label htmlFor="contents">내용</label>
                      <input
                        type="text"
                        id="contents"
                        onChange={onGuestContentsValue}
                        className="p-2 text-center text-black rounded-lg"
                      />
                    </div>
                    <button onClick={onGuestSubmit}>작성하기</button>
                  </form>
                </div>
              </div>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
      {/* 방문록 */}
      <div className="guestViewContainer text-center mt-12 w-[100vw] h-[100vh] opacity-0">
        <div className="w-full flex flex-col items-center h-full">
          <p className="text-yellow-400 my-4 font-nanum-square-neo-Bold text-xl">
            방명록 작성자 수{dataList.length + 1}
          </p>
          <div className="w-[50vw] flex flex-col items-center">
            <div className="mt-2 text-base flex justify-center gap-2 items-center">
              <p className="w-[100px] h-[30px]">이름:{guestName}</p>
              <p className="w-[300px] h-[30px]">내용:{guestContents}</p>
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
    </>
  );
}
export default Footer;
