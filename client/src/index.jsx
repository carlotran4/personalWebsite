import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import NavBar from "./NavBar.jsx";
import Home from "./Home.jsx";
import Projects from "./Projects.jsx";
import ParametricCurveAnimator from "./ParametricCurveAnimator.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="/projects/parametric-curve-animator" element={<ParametricCurveAnimator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
