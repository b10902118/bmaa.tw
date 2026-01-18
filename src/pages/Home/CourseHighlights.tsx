import { Star } from "lucide-react";

const CourseHighlights = () => {
  const highlights = [
    "小班精緻教學個別化動作調整與諮詢",
    "清楚的動作原則教導，幫助你運用到日常生活中",
    "不定期舉辦免費線上團練",
    "提供分享討論平台，相互深化學習",
  ];

  return (
    <section className="py-15 lg:py-20 bg-[#E1B28D]/10">
      <div className="max-w-[88%] lg:max-w-[77%] 2xl:max-w-[66%] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-extrabold text-black mb-8">
            課程教學亮點
          </h2>
          <ul className="space-y-6">
            {highlights.map((text, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-[20px] tracking-wider"
              >
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400 mt-1 shrink-0" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          <div className="rounded-3xl overflow-hidden shadow-xl lg:border-8 border-white">
            <img
              src="/assets/image/teach.png"
              alt="指導"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHighlights;
