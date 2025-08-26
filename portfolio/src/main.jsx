import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18n.js";
import "./index.css";
import App from "./App.jsx";
import FallbackLoader from "./components/fallbackLoader.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <React.Suspense fallback={<FallbackLoader />}>
      <App />
    </React.Suspense>
  </StrictMode>
);
