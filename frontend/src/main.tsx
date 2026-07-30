import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { BASE_PATH } from "@/config/routes.config";

/**
 * `basename` is derived from Vite's `base`, so route paths stay free of the
 * deployment prefix. Moving to a custom domain means changing `base` alone.
 */
createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={BASE_PATH}>
    <App />
  </BrowserRouter>,
);
