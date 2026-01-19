import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PageContainer from "./components/PageContainer";
import Home from "./pages/Home";
import ClassInformation from "./pages/ClassInformation/ClassInformation";
import StudentFeedback from "./pages/StudentsFeedback/StudentsFeedback";
import InterviewReport from "./pages/InterviewReport";
import Header from "./components/Header";
import Footer from "./components/Footer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <PageContainer>
      <InterviewReport />
    </PageContainer>
    <Footer />
  </StrictMode>,
);
