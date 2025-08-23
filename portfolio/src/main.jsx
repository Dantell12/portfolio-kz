import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18n.js";
import "./index.css";
import App from "./App.jsx";
import FallbackLoader from "./components/fallBackLoader.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <React.Suspense fallback={<FallbackLoader></FallbackLoader>}>
      <App />
    </React.Suspense>
  </StrictMode>
);
