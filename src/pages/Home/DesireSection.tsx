import { ChevronRight } from "lucide-react";
import MoreButton from "../../components/MoreButton";

const DesireSection = () => {
  const desires = [
    { img: "/assets/image/icons/healthy250.png", text: "身體舒暢不痠痛" },
    { img: "/assets/image/icons/sleep250.png", text: "好好睡一覺" },
    { img: "/assets/image/icons/learning250.png", text: "能專心、記憶好" },
    { img: "/assets/image/icons/peace-of-mind250.png", text: "情緒穩定不焦躁" },
  ];

  return (
    <section className="py-15 lg:py-20">
      <div className="max-w-[88%] lg:max-w-[77%] 2xl:max-w-[66%] mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-black mb-16">
          忙碌的生活中，或許你也想要
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {desires.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-30 h-30 md:w-36 md:h-36 lg:w-[150px] lg:h-[150px] overflow-hidden mb-6">
                <img
                  src={item.img}
                  alt={item.text}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-extrabold text-[#303030]">
                {item.text}
              </h3>
            </div>
          ))}
        </div>

        <div className="max-w-3xl text-xl mx-auto space-y-6 mb-12">
          <p className="font-bold text-[#333]">
            有時候，不是「你」的問題，而是
            <span className="text-[#be6e56]">「你的身體」沒了能動性</span>
            ，生活也失去彈性，讓你逐漸遠離沈穩平靜的狀態。
          </p>
          <p className="font-bold text-[#333] leading-relaxed">
            經心理學研究證實身心中軸覺察練習能
            <span className="text-[#be6e56]">提升睡眠品質</span>，讓你更
            <span className="text-[#be6e56]">專注</span>，
            <span className="text-[#be6e56]">提升腦力</span>
            ；增進正念覺察，幫助
            <span className="text-[#be6e56]">調節情緒</span>與
            <span className="text-[#be6e56]">因應壓力</span>，減輕憂鬱焦慮。
          </p>
        </div>
        <MoreButton text="了解更多研究結果" href="/evidence" />
      </div>
    </section>
  );
};

export default DesireSection;
