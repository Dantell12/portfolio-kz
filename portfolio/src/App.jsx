import { useEffect } from "react";
import { initGA, logPageView } from "./analytics";
import "./App.css";
import Home from "./pages/home";
import "swiper/css";
import "swiper/css/navigation";
function App() {
  useEffect(() => {
    initGA();
    logPageView();
  }, []);
  return (
    <>
      <Home />
    </>
  );
}

export default App;
