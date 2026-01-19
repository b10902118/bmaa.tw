import React from "react";
import Title from "../../components/Title";

const adultResearch = [
  {
    image:
      "https://i0.wp.com/bmaa.tw/wp-content/uploads/2022/09/5.jpg?fit=640%2C427&ssl=1",
    title: "四周身心中軸覺察課程提升社區成人的腦力及持續性注意力",
    tags: "#社區成人 #認知功能 #持續性注意力",
    description:
      "在一項以社區成人（20 至50歲）為研究對象的研究中，我們發現接受四周短期身心中軸覺察練習的參與者，在工作記憶廣度（是一種腦力的指標，相當於電腦中的記憶體，也就是大腦能同時維持、處理多少訊息的能力）與持續性注意力皆有顯著的提升……",
    link: "/evidence-1",
  },
  {
    image:
      "https://i0.wp.com/bmaa.tw/wp-content/uploads/2022/09/smile.jpg?fit=640%2C427&ssl=1",
    title: "短期身心中軸覺察課程讓大學生更能穩定自己的情緒",
    tags: "#台大學生 #2周9小時 #憂鬱 #情緒調節 #身體覺察中介",
    description:
      "在過往的心理健康調查中，大學生比起其他年齡層的族群普遍有更高比例的情緒困擾，大學時的年齡階段也正是憂鬱、焦慮發病的高峰期。本研究設計一套九小時的簡短課程，檢驗身心中軸覺察練習是否能提升大學生調節情緒的能力……",
    link: "/evidence-2",
  },
  {
    image:
      "https://i0.wp.com/bmaa.tw/wp-content/uploads/2022/09/plant.jpg?fit=640%2C427&ssl=1",
    title: "六周身心中軸覺察課程幫助國小教師調適壓力",
    tags: "#國小教師 #壓力知覺 #心理韌性 #減少負面情緒 #提升睡眠品質",
    description:
      "國小是奠基孩童學習能力、生活習慣以及培養品德的重要階段，教師在這個階段扮演著重要角色。筆者從父母的經驗分享中了解到國小教師其實除了教書之外，很大一部分需要去處理學生各種突發狀況，也需要承受來自家長、學校等多方壓力……",
    link: "/evidence-3",
  },
  {
    image:
      "https://i0.wp.com/bmaa.tw/wp-content/uploads/2022/09/heart.jpg?fit=640%2C427&ssl=1",
    title: "十周身心中軸覺察課程讓大學生安頓身心、找回自我",
    tags: "#台大學生 #學生反思報告 ＃身心困擾 ＃自我探索與認識 ＃自我安頓",
    description:
      "這幾年不論是在課程或者研究所收的資料都顯示台大學生的身心困擾不容忽視。在本研究所收集的66名學生參與者中，課前有高達1/4的同學的量表分數落在中重度憂鬱，更有1/3的同學落在中重度焦慮，近2/3的同學睡眠品質不佳……",
    link: "/evidence-4",
  },
  {
    image:
      "https://i0.wp.com/bmaa.tw/wp-content/uploads/2022/08/pexe2.jpg?fit=640%2C427&ssl=1",
    title:
      "面對未來的不確定性，總擔心害怕著什麼嗎？五分鐘的專注呼吸幫助你暫時擺脫煩憂！",
    tags: "#擔憂 #焦慮 #放空呼吸 #減少干擾思慮 #不耗腦力",
    description:
      "不知道大家做事做到一半覺得做不下去，腦海中出現揮之不去的煩憂或一些干擾自己的想法時，都會做些什麼事情幫助自己回到當下呢？ 我們研究發現5-10分鐘，以身心中軸覺察的原則進行「放空呼吸」練習，能有效減少煩惱或干擾思緒出現的頻率…..",
    link: "/evidence-5",
  },
];

const childResearch = [
  {
    image:
      "https://i0.wp.com/bmaa.tw/wp-content/uploads/2022/09/3.jpg?fit=640%2C427&ssl=1",
    title:
      "獲得天啟的敬天之舞：四個月的雅樂舞訓練提升國小孩童的創造力及身體協調能力",
    tags: "#佾舞 #創造力 #身體協調",
    description:
      "我們與台北市大龍國小的佾舞隊合作，檢驗目前在祭孔典禮上常見的「佾舞」對小學生的創造力以及身體協調能力的效果。經過四個月的佾舞訓練後，相較於沒有經過任何訓練的對照組，練習佾舞的學生在創造力測驗表現以及身體協調能力皆有顯著提升……",
    link: "/evidence-6",
  },
  {
    image:
      "https://i0.wp.com/bmaa.tw/wp-content/uploads/2022/09/4.jpg?fit=640%2C427&ssl=1",
    title: "四周的暑期身心中軸覺察課程提升孩童的持續性注意力及腦力",
    tags: "#國小孩童 #夏令營 #注意力缺失 #提升持續性注意力",
    description:
      "衛福部2015年的一項調查顯示，有三分之一的孩童（三、五、七年級）至少符合一個精神疾病的診斷標準，其中又以注意力不足過動症所佔的比例最高（約10%），顯見「是否能專心地投入在一件事情上」是現在孩子的一大考驗……",
    link: "/evidence-7",
  },
  {
    image:
      "https://i0.wp.com/bmaa.tw/wp-content/uploads/2022/08/child-play.jpg?fit=640%2C427&ssl=1",
    title: "國小入班教學：11周的身心中軸覺察課程幫助孩童更能覺察身體、處理情緒",
    tags: "#國小孩童 #入班教學 #呼吸放鬆 #身體覺察",
    description:
      "根據一項臺灣調查顯示，近年來小朋友的情緒問題越來越嚴重，煩惱、焦躁都越來越常見。因此，在班級導師的共同協力之下，我們進入學校教學11周，想看看身心中軸覺察練習能不能幫助他們……",
    link: "/evidence-8",
  },
];

/**
 * Sub-component for individual research items
 */
const ResearchCard: React.FC<{
  image: string;
  title: string;
  tags: string;
  description: string;
  link: string;
}> = ({ image, title, tags, description, link }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
      {/* Image Container */}
      <div className="flex justify-center w-full lg:w-[32.8%] flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="max-h-[25vh] w-auto rounded-[20px] shadow-none object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="w-full lg:w-[67.2%] flex flex-col">
        <h3 className="text-[26px] font-bold text-black font-['Lato',sans-serif] leading-[1.5em] mb-3 lg:pl-[4%] tracking-normal">
          {title}
        </h3>
        <p className="text-[#588157] text-[18px] lg:text-[24px] font-bold italic mb-5 lg:pl-[4%] lg:leading-none">
          <span className="font-normal text-[14pt]">{tags}</span>
        </p>
        <p className="text-[16px] font-bold text-[#64686d] font-['微軟正黑體',sans-serif] mb-6 lg:pl-[4%] text-justify">
          {description}
        </p>

        {/* Read More Button */}
        <div className="flex justify-end">
          <a
            href={link}
            className="group flex items-center justify-center gap-2 px-5 py-2.5 bg-[#6B705C]/[0.87] hover:bg-[#6B705C] text-white text-[16px] font-['Roboto_Slab',serif] rounded-[20px] transition-all duration-300 transform hover:scale-110 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] border border-[#6B705C]/[0.87]"
          >
            <span className="flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              閱讀更多
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

/**
 * ScientificEvidence Component
 * A plug-and-play React component using Tailwind CSS.
 * Replaces FontAwesome with standard SVG paths for zero-dependency "plug-and-play" usage.
 */
const Evidence: React.FC = () => {
  return (
    <>
      <Title title="科學證據" color="green" />
      <div className="bg-[#f9f5f2] text-[#64686d] font-['Lora',serif] leading-relaxed antialiased">
        {/* Intro Section */}
        <section className="px-[10%] pt-10">
          <div className="max-w-[88%] lg:max-w-[77%] 2xl:max-w-[66%] mx-auto py-10">
            <p className="text-[#333300] text-[20px] lg:text-[24px] leading-[1.9em] mb-8">
              在教學之外，我們也致力於透過心理學詞彙描繪身心中軸覺察練習課程與當中部分技巧帶來的「身心提升效果」，並以實徵研究分別針對成人、孩童進行檢驗。
              <span className="font-bold">
                多年來累積的研究證據支持身心中軸覺察練習有助於：
              </span>
            </p>

            <ul className="pl-[2%] space-y-3">
              {[
                "紓壓、好眠",
                "增進持續性注意力及注意力彈性",
                "降低憂鬱、焦慮",
                "增進調控情緒的能力",
                "提升對於身體的覺察能力",
              ].map((text, idx) => (
                <li
                  key={idx}
                  className="flex items-center text-[#64686d] font-semibold text-[1.2em] lg:text-[22px] tracking-tight"
                >
                  <span className="text-[#798A6E] mr-3">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Adult Research Section */}
        <section className="mt-16">
          <div className="bg-[#B3AC8929] px-[10%] py-12">
            <div className="max-w-[88%] lg:max-w-[77%] 2xl:max-w-[66%] mx-auto py-10">
              <h2 className="text-[38px] font-black text-[#588157] mb-8">
                成人研究
              </h2>

              <div className="space-y-16">
                {adultResearch.map((item, idx) => (
                  <ResearchCard key={idx} {...item} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/*<Divider />*/}

        {/* Children Research Section */}
        <section className="bg-[#CDD3B9A1] px-[10%] pb-20">
          <div className="max-w-[88%] lg:max-w-[77%] 2xl:max-w-[66%] mx-auto py-10">
            <h2 className="text-[38px] font-black text-[#588157] pt-12 mb-8">
              兒童研究
            </h2>

            <div className="space-y-16">
              {childResearch.map((item, idx) => (
                <ResearchCard key={idx} {...item} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

// ugly so not used
/*
const Divider: React.FC = () => (
  <div className="bg-gradient-to-b from-[#B3AC8929] via-[#CDD3B9A1] to-[#CDD3B9A1] px-[10%] py-4">
    <div className="border-t-[1px] border-[#798A6E] relative h-5">
      <div
        className="absolute inset-0 w-full h-full opacity-100"
        style={{
          maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 26' fill='black'%3E%3Cpath d='M54,1.6V26h-9V2.5L54,1.6z M69,1.6v23.3L60,26V1.6H69z M24,1.6v23.5l-9-0.6V1.6H24z M30,0l9,0.7v24.5h-9V0z M9,2.5v22H0V3.7L9,2.5z M75,1.6l9,0.9v22h-9V1.6z M99,2.7v21.7h-9V3.8L99,2.7z M114,3.8v20.7l-9-0.5V3.8L114,3.8z'/%3E%3C/svg%3E")`,
          maskRepeat: "repeat-x",
          backgroundColor: "#798A6E",
        }}
      />
    </div>
  </div>
);
*/

export default Evidence;
