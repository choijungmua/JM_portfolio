import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase"; // Firebase 설정 가져오기

// Footer 컴포넌트
function Footer() {
  const [dataList, setDataList] = useState([]);

  // 비동기적으로 데이터 가져오기
  const fetchData = async () => {
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
    fetchData();
  }, []);

  return (
    <div className="endPort mt-12 w-[100vw] h-[100vh]">
      <div className="w-full flex flex-col items-center h-full">
        <p className="mt-12">방명록</p>
        <div className="w-[50vw]">
          {/* 배열 출력하기 */}
          {dataList.length > 0 ? (
            dataList.map((item, index) => (
              <div key={index}>
                {Object.entries(item).map(([key, value]) => (
                  <p key={key}>
                    Key: {key}, Value: {value}
                  </p>
                ))}
              </div>
            ))
          ) : (
            <p>데이터를 불러오는 중입니다...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Footer;
