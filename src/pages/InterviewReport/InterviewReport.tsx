import React from "react";
import Title from "../../components/Title";
import MoreButton from "../../components/MoreButton";

interface Article {
  image: string;
  alt: string;
  title: string;
  source: string;
  content: string[];
  link: string;
}
// Article data array
const articles: Article[] = [
  {
    image:
      "https://i0.wp.com/bmaa.tw/wp-content/uploads/2022/09/h3.jpg?fit=640%2C446&ssl=1",
    alt: "心理學與雅樂舞的邂逅",
    title: "心理學與雅樂舞的邂逅，臺大連韻文帶你從「身體覺察」找回幸福感",
    source: "人文島嶼 知識專欄",
    content: [
      "「大分心時代」下的我們，每天面對大量的外界刺激，疲於反應，大腦瘋狂轉動，卻離自己的感受與心很遠，回過神來才發現身、心滿是疲憊。該怎麼辦呢？台灣大學心理系連韻文副教授說：「覺察（awareness）才能帶來改變，找回身心合一與幸福感」。",
    ],
    link: "https://humanityisland.nccu.edu.tw/yunnwenlien/",
  },
  {
    image:
      "https://i0.wp.com/bmaa.tw/wp-content/uploads/2022/09/3558632-2.jpg?fit=640%2C427&ssl=1",
    alt: "連韻文：身體正不正",
    title: "連韻文：身體正不正，不只是姿勢問題",
    source: "親子天下",
    content: [
      "雅樂學者陳玉秀老師解構傳統雅樂舞（祭孔的佾舞是其中一種），強調注意力能夠時時回到「中心軸」，身體鬆沉，力量下放至尾椎，保持「尾閭中正」。幾位練習佾舞超過一年的六年級學童說：「早自習練習佾舞後會一整天感到平和舒適，比練習之前更能專注。」",
      "「身心中軸覺察」訓練課程解構雅樂舞練習，簡單的動作就可以達到身體恢復鬆柔的效果。中年級學童經過短期學習，腦力資源與注意力表現都有時提升，一般成人練習後也有同樣的效果。",
    ],
    link: "https://www.parenting.com.tw/article/5071388",
  },
];

const InterviewSection: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <section className="pt-[4vh] pb-[8vh]">
      <div className="flex flex-col gap-8 items-center lg:grid lg:grid-cols-[3fr_5fr] lg:gap-x-8 lg:items-start">
        {/* Image */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={article.image}
            alt={article.alt}
            className="w-full max-h-[33vh] rounded-[22px] object-cover"
            loading="lazy"
          />
        </div>
        {/* Content */}
        <div className="flex w-full flex-col">
          <h2 className="mb-5 text-2xl font-bold leading-[1.5em] text-[#4A2704] lg:text-3xl">
            {article.title}
          </h2>
          <p className="mb-5 text-[20px] font-bold text-[#808080]">
            {article.source}
          </p>
          <div className="mb-5 text-[20px] leading-relaxed tracking-[1.3px] text-[#333333]">
            {article.content.map((p, i) => (
              <p className="mb-4" key={i}>
                {p}
              </p>
            ))}
          </div>
          <MoreButton text="閱讀更多" href={article.link} />
        </div>
      </div>
    </section>
  );
};

const InterviewReport: React.FC = () => {
  return (
    <>
      <Title title="採訪報導" color="orange" />
      <main className="max-w-[88%] lg:max-w-[77%] 2xl:max-w-[66%] mx-auto px-6 md:px-10 lg:px-24 py-10">
        {articles.map((article, idx) => (
          <InterviewSection key={idx} article={article} />
        ))}
      </main>
    </>
  );
};

export default InterviewReport;
