import React, { useState, useRef } from "react";
import { ThumbsUp, ChevronLeft, ChevronRight } from "lucide-react";

const StudentTestimonials = () => {
  const testimonials = [
    {
      name: "佳儀",
      tag: "#好眠",
      content:
        "從小時候到現在，我睡覺幾乎不曾在半個小時內睡著，至少要翻兩個小時以上⋯⋯結果剛練的第一個禮拜，簡直不能說太幸福，我終於體會到秒睡的快樂。",
    },
    {
      name: "何昀",
      tag: "#情緒覺察 #韌性",
      content:
        "情緒與心理狀態上，身心中軸覺察沒有讓我免於低潮，但使我快速覺察自己的狀況不太好，並以「觀」的態度檢視自己的環境、壓力源，以及身心狀態，如此以來，便較不會耽溺於負面情緒中。",
    },
    {
      name: "銘章",
      tag: "#平靜 #壓力因應",
      content:
        "比起鬧哄哄的心智狀態，練習完 BMAA之後可以帶給我很大的平靜，讓我可以去面對即將到來的大風大浪。",
    },
    /*
    {
      name: "軒伃",
      tag: "#思考彈性",
      content:
        "思考變得有彈性之後，覺得自己的世界變開闊了，而不是只有一條路或一個方法非常狹隘，也反思到以前的我都畫地自限，很多事不一定是做不到，而是沒有想到更多的解決方法。",
    },
    {
      name: "家銓",
      tag: "#自我傾聽 #自我照顧",
      content:
        "以往我都將我的思考放在「應該」的枷鎖上，忙著去解決問題，卻忽略掉我內心最真摯的需求，我到底喜歡什麼、追求的是什麼。雖然起步得比別人晚，但至少開始去傾聽自己的聲音了。",
    },
    */
  ];

  return (
    <section className="py-15 lg:py-20">
      <div className="max-w-[88%] lg:max-w-[77%] 2xl:max-w-[66%] mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-black mb-12">
          體驗過的學員，他們分享到
        </h2>
        {/* overlay controls + swipe area */}
        <div className="relative">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 xl:px-4">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#F9F5F2] border-l-4 border-[#588157] shadow-sm transition-transform duration-300 ease-out"
              >
                <div className="flex items-center gap-2 mb-4">
                  <ThumbsUp className="w-5 h-5 text-[#588157]" />
                  <span className="text-[22px] font-bold text-[#588157]">
                    {item.name}
                  </span>
                </div>
                <p className="text-[#993300] font-bold mb-3">{item.tag}</p>
                <p className="text-[18px] leading-relaxed text-gray-700 italic">
                  "{item.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <a
          href="/student-feedback"
          className="inline-block border border-[#6B705C] text-black px-12 py-4 rounded-full font-bold hover:bg-[#6B705C] hover:text-white transition-all transform hover:scale-105"
        >
          點我看更多
        </a>
      </div>
    </section>
  );
};

export default StudentTestimonials;
