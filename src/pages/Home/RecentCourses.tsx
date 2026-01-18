type Course =
  | {
      img: string;
      open: false;
    }
  | {
      img: string;
      open: true;
      link: string;
    };

const trialClasses: Course[] = [
  {
    img: "/assets/image/courses/260117古池蛙.png",
    open: true,
    link: "/class-information/trial-class/2026spring_1/",
  },
  {
    img: "/assets/image/courses/2025冬季體驗課-忠孝新生1.jpg",
    open: false,
  },
  {
    img: "/assets/image/courses/2025冬季體驗課-古亭.jpg",
    open: false,
  },
];

const foundationCourses: Course[] = [
  { img: "/assets/image/courses/2512220里耘1.jpg", open: false },
  { img: "/assets/image/courses/251122惟智.jpg", open: false },
];

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <div className="border-2 border-[#6B705C]/20 rounded-[23px] overflow-hidden flex flex-col group">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={course.img}
          alt="Course"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6 text-center mt-auto">
        <a
          href={course.open ? course.link : "#"}
          className={`inline-block px-8 py-2 rounded-full font-bold transition-all ${
            course.open
              ? "border border-[#6B705C] text-black hover:bg-[#6B705C] hover:text-white"
              : "bg-[#6B705C]/80 text-white cursor-not-allowed"
          }`}
        >
          {course.open ? "開放報名中" : "報名截止"}
        </a>
      </div>
    </div>
  );
};

const RecentCourses = () => {
  return (
    <section className="py-15 lg:py-20">
      <div className="max-w-[88%] lg:max-w-[77%] 2xl:max-w-[66%] mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-black mb-4">近期課程</h2>
        <p className="text-[20px] mb-12">
          如果您感興趣的課程目前未開課，歡迎您{" "}
          <a href="/contact-us/" className="text-[#87a350] underline">
            聯絡我們
          </a>
          ，開課後我們會在第一時間通知您喔
        </p>

        {/* Trial Classes */}
        <h3 className="text-3xl font-bold text-[#588157] mb-8 border-b-2 border-[#588157]/20 pb-2">
          體驗課
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {trialClasses.map((course, idx) => (
            <CourseCard key={idx} course={course} />
          ))}
        </div>

        {/* Foundation I */}
        <h3 className="text-3xl font-bold text-[#588157] mb-8 border-b-2 border-[#588157]/20 pb-2">
          基礎課程（一）
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foundationCourses.map((course, idx) => (
            <CourseCard key={idx} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentCourses;
