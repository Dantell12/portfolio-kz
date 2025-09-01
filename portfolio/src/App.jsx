import { lazy, useEffect } from "react";
import { initGA, logPageView } from "./analytics";
import "./App.css";
import "swiper/css";
import "swiper/css/navigation";
const HomeComponent = lazy(() => import("./pages/home"));

function App() {
  useEffect(() => {
    initGA();
    logPageView();
  }, []);
  return (
    <>
      <HomeComponent />
    </>
  );
}

export default App;
