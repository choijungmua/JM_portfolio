import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import JavaWeb from "./routes/JavaWeb";
import "./index.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/JavaWeb" element={<JavaWeb />} />
      </Routes>
    </Router>
  );
}

export default App;
