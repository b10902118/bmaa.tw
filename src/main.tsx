import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../../index.css";
import PageContainer from "./components/PageContainer";
import Home from "./pages";
import Header from "./components/Header";
import Footer from "./components/Footer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <PageContainer>
      <Home />
    </PageContainer>
    <Footer />
  </StrictMode>,
);
