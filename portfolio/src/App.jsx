import { lazy, useEffect } from "react";
import { initGA, logPageView } from "./analytics";
import "./App.css";
import "swiper/css";
import "swiper/css/navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/home";
const HomeComponent = lazy(() => import("./pages/home"));

function App() {
  useEffect(() => {
    initGA();
    logPageView();
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="*" element={<HomeComponent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
