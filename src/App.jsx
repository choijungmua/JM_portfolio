import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import "./index.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
gsap.registerPlugin(gsap, ScrollTrigger);
function App() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  });
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
export default App;
