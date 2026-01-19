import HeroSection from "./HeroSection";
import IntroSection from "./IntroSection";
import DesireSection from "./DesireSection";
import CourseHighlights from "./CourseHighlights";
import StudentTestimonials from "./StudentTestimonials";
import CoreCourses from "./CoreCourses";
import RecentCourses from "./RecentCourses";
import FAQSection from "./FAQSection";
import PartnersSection from "./PartnersSection";

const Home = () => {
  return (
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
  );
};

export default Home;
