import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import "./index.css";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
function App() {
  return (
    <Router>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </RecoilRoot>
    </Router>
  );
}
export default App;
