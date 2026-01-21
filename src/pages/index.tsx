import HeroSection from "./Home/HeroSection";
import IntroSection from "./Home/IntroSection";
import DesireSection from "./Home/DesireSection";
import CourseHighlights from "./Home/CourseHighlights";
import StudentTestimonials from "./Home/StudentTestimonials";
import CoreCourses from "./Home/CoreCourses";
import RecentCourses from "./Home/RecentCourses";
import FAQSection from "./Home/FAQSection";
import PartnersSection from "./Home/PartnersSection";

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

export const title = "臺灣身心中軸覺察發展中心︱身心共好，找回放鬆安穩的自己";
export default Home;
