import { useEffect, useState, useRef } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase"; // Firebase 설정 가져오기
import { doc, setDoc } from "firebase/firestore";
import gsap from "gsap";
function Footer() {
  // 배열로 방명록의 List값 저장
  const [dataList, setDataList] = useState([]);
  const footerTimeLine = gsap.timeline();
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
    // Footer 진입 시 opacity 값 변경
    gsap.to(".guestWrite", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".guestWrite",
        start: "20% center",
        end: "40% center",
        duration: 1,
        scrub: 1,
        // markers: true,
      },
    });
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

  return (
    <>
      <div className="guestWriteContainer">
        <div className="guestWrite opacity-0 flex-col absolute z-10 mt-12 w-[100vw] h-[100vh] flex justify-center items-center">
          <div className="p-2 flex w-[700px]  justify-center h-[50px] flex-col items-center text-center overflow-hidden rounded-xl font-nanum-square-neo-heavy text-4xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            <p className="footerTL1 absolute">시청해주셔서 감사합니다.</p>
            <p className="footerTL2 absolute opacity-0">재미있게 보셨다면</p>
            <p className="footerTL3 absolute opacity-1 overflow-hidden">
              방명록과 연락도 남겨주세요
            </p>
          </div>
          <form action="" className="flex items-center flex-col gap-2">
            <p className="mt-12">방명록</p>
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
      <div className="guestViewContainer mt-12 w-[100vw] h-[100vh] opacity-0">
        <div className="w-full flex flex-col items-center h-full">
          <div className="w-[50vw] flex flex-col items-center">
            {/* 배열 출력하기 */}
            {dataList.length > 0 ? (
              dataList.map((item, index) => (
                <div key={index}>
                  {Object.entries(item).map(([key, value]) => (
                    <div
                      className="mt-2 text-base flex justify-center gap-2 items-center"
                      key={key}
                    >
                      <p className="w-[150px] h-[30px]">이름:{key}</p>
                      <p className="w-[150px] h-[30px]">내용:{value}</p>
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
