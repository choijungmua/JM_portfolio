import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import JavaWeb from "./routes/JavaWeb";
import "./index.css";

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [test, setTest] = useState();

  // 비동기 식으로 fetch
  async function getTest() {
    try {
      // document에 대한 참조 생성
      const docRef = doc(db, "Title", "1");
      // 참조에 대한 Snapshot 쿼리
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setTest(docSnap.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error getting document:", error);
    }
  }

  // 최초 마운트 시에 getTest 호출
  useEffect(() => {
    getTest();
    console.log(test);
  }, []);

  return (
    <>
      {test !== undefined && <div>{test.Name}</div>}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/JavaWeb" element={<JavaWeb />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
