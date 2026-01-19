import { ChevronRight } from "lucide-react";
import MoreButton from "../../components/MoreButton";

const CoreCourses = () => {
  const courses = [
    {
      title: "基礎課程(一)",
      subtitle: "鬆動身與心",
      icon: "/assets/image/icons/water.png",
      items: [
        "調息靜觀技巧：讓大腦安靜及身心放鬆的關鍵",
        "簡易自我按摩方法：緩解緊繃僵硬的身體",
        "靜觀下的動態練習：深入自我探索、鬆動身心慣性",
        "身心中軸狀態初體驗：回到身心的最佳預設狀態",
      ],
    },
    {
      title: "基礎課程(二)",
      subtitle: "返回身心安頓的家",
      icon: "/assets/image/icons/mountain-road.png",
      items: [
        "深化身心中軸狀態：培養身心穩定力量",
        "漸入核心的鬆動：鬆胯展脊、開展靈活自在",
        "運用身心中軸動態原則：深入化解身心糾結",
        "融入生活的自我照顧：讓最佳狀態成為日常",
      ],
    },
    {
      title: "深化工作坊",
      subtitle: "主題式整合練習",
      icon: "/assets/image/icons/undulating-arrow-1.png",
      items: [
        "主題式練習：如提升肩胛骨、骨盆等部位之能動性",
        "練習再深化：促進身心流動與持續突破",
      ],
    },
  ];

  // Helper to split by ： and bold the title part
  const renderItem = (item: string) => {
    const [title, ...rest] = item.split("：");
    if (rest.length === 0) return <span>{item}</span>;
    return (
      <span className="text-xl">
        <b>{title}：</b>
        {rest.join("：")}
      </span>
    );
  };

  return (
    <section className="py-15 lg:py-20 bg-[#E1B28D]/10">
      <div className="max-w-[88%] lg:max-w-[77%] 2xl:max-w-[66%] mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-black mb-16">核心課程</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-10">
          {courses.map((course, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <img
                src={course.icon}
                alt={course.title}
                className="w-32 h-32 mb-6 object-contain"
              />
              <h3 className="text-3xl font-bold text-[#588157] mb-2">
                {course.title}
              </h3>
              <h4 className="text-2xl font-bold text-[#588157] mb-8">
                {course.subtitle}
              </h4>
              <ul className="text-left space-y-4">
                {course.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-2 text-[18px]">
                    <ChevronRight
                      className="w-6 h-6 shrink-0 mt-1"
                      strokeWidth={5}
                    />
                    {renderItem(item)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <MoreButton text="點我看更多" href="/class-information" />
      </div>
    </section>
  );
};

export default CoreCourses;
