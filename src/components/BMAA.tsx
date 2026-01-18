import React from "react";
import HeroSection from "./Hero";
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

      {/* Global Style Inject for Smooth Scroll and Animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        html { scroll-behavior: smooth; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `,
        }}
      />
    </div>
  );
};

export default BMAA;
