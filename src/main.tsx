import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import BMAA from "./components/BMAA";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BMAA />
  </StrictMode>,
);
