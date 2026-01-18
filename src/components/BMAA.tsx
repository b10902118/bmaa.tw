import HeroSection from "./HeroSection";
import Header from "./Header";
import IntroSection from "./IntroSection";
import DesireSection from "./DesireSection";
import CourseHighlights from "./CourseHighlights";
import StudentTestimonials from "./StudentTestimonials";
import CoreCourses from "./CoreCourses";
import RecentCourses from "./RecentCourses";
import FAQSection from "./FAQSection";
import PartnersSection from "./PartnersSection";
import Footer from "./Footer";

const BMAA = () => {
  return (
    <div className="min-h-screen bg-[#F9F5F2] font-serif text-[#64686d] selection:bg-[#6B705C] selection:text-white">
      <Header />

      <main>
        <HeroSection />
        <IntroSection />
        <DesireSection />
        <CourseHighlights />
        <StudentTestimonials />
        <CoreCourses />
        <RecentCourses />
        <FAQSection />
        <PartnersSection />
      </main>

      <Footer />
    </div>
  );
};

export default BMAA;
