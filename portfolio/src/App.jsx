import { lazy, useEffect } from "react";
import { initGA, logPageView } from "./analytics";
import "./App.css";
import "swiper/css";
import "swiper/css/navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/home";
import CalendarSection from "./pages/calendar";
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
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<CalendarSection />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
