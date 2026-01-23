import React from "react";
import HeroSection from "./HeroSection";

/**
 * Good Points Component
 * Based on the translated Elementor HTML/CSS to React + Tailwind
 */
const GoodPoints: React.FC = () => {
  return (
    <>
      <HeroSection />

      {/* Main Content Area */}
      <main className="max-w-[88%] lg:max-w-[77%] 2xl:max-w-[66%] mx-auto py-10">
        {/* Title Section */}
        <section className="mt-12 mb-8 lg:mb-16">
          <h2 className="text-[#000000] font-black text-[38px] leading-[1.2em] lg:leading-none text-left mb-10">
            陪伴您一生的身心練習
          </h2>

          <div className="grid grid-cols-1 gap-12">
            {/* Feature Block 1 */}
            <div>
              <h3 className="text-[#000000BA] font-semibold text-[22px] font-['Lato',_sans-serif] mb-4">
                由身體切入，兼顧身與心
              </h3>
              <ul className="space-y-3">
                <ListItem text="不只是頭腦「知道」，身體也「體會」到" />
                <ListItem text="沒有「應該」怎樣，改變發自內在" />
                <ListItem text="聆聽身體的聲音、重新探索與認識自己" />
              </ul>
            </div>

            {/* Feature Block 2 */}
            <div>
              <h3 className="text-[#000000BA] font-semibold text-[22px] font-['Lato',_sans-serif] mb-4">
                手把手教學，將練習融入日常
              </h3>
              <ul className="space-y-3">
                <ListItem text="結構化、精緻教學" />
                <ListItem text="與生活結合，容易落實與運用在日常作息與行動" />
                <ListItem text="不只給你魚吃，還教你釣魚的方法！" />
                <ListItem text="掌握原則，引領自己一生的提升與成長" />
                <ListItem text="搭配日常小道具、複習影音檔、紙本講義、與免費線上複習" />
              </ul>
            </div>
          </div>
        </section>

        {/* Psychology Section */}
        <section className="flex flex-col lg:flex-row gap-10 my-24 items-stretch">
          <div className="w-full lg:w-1/2">
            <div className="aspect-w-4 aspect-h-3 w-full h-full">
              <img
                src="/assets/image/IMG_0618-scaled.jpg"
                alt="Practice Session"
                className="w-full h-full max-h-[30vh] lg:max-h-none object-cover rounded-[22px] shadow-sm"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-[#000000] font-black text-[38px] leading-[1.2em] lg:leading-none mb-8 lg:mb-12">
              結合心理學與靜觀科學
            </h2>
            <div className="space-y-6 text-[20px] leading-[2em] lg:leading-[1.5em]">
              <p>
                因養育身心有特殊狀況的女兒，臺大心理系連韻文老師在因緣際會下，受到陳玉秀教授啟發，共同以東方傳統的身心原則來理解與幫助女兒的身心發展，也讓她對於東方的身心觀與身心互相的影響產生興趣。
              </p>
              <p>
                從2008年起，連韻文老師逐步帶領研究團隊進行各種短期課程設計，並以「身心中軸覺察」（Body-Mind
                Axial Awareness,
                BMAA）為名，進行科學研究，驗證並紀錄身心中軸覺察課程與內觀技巧對成人與學童的身心提升效果。
              </p>
              <p>
                在證據逐漸累積下，2014年開始連韻文老師首次在臺大心理系開設「身心中軸與覺察」課程。除了將課程更為結構化，更適合台灣的大學生與成人外，也納入研究團隊之結果與心得，以及心理學有關靜觀或正念科學的發現，並考量現在台灣人的身心需求與特色，在教學技巧與理論上持續翻新、調整。
              </p>
            </div>
          </div>
        </section>

        {/* Tradition Section */}
        <section className="flex flex-col-reverse lg:flex-row gap-10 my-24 items-stretch">
          <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pr-[4%]">
            <h2 className="text-[#000000] font-black text-[38px] leading-[1.2em] lg:leading-none mb-8 lg:mb-12">
              起源於雅樂與禮樂傳統
            </h2>

            <div className="mb-10">
              <h3 className="text-[#000000BA] font-semibold text-[22px] mb-4">
                傳統文化的身心整合觀
              </h3>
              <div className="space-y-4 text-[20px] leading-[2em] lg:leading-[1.5em]">
                <p>
                  東亞傳統文化認為身心乃一體，要調養心性，必得從「修身」做起。這樣的觀念與技能可溯源至三千多年前夏商周三代的禮樂傳統。
                </p>
                <p>
                  禮樂是指古代朝廷祭天時的禮儀與樂舞，後者即為「雅樂」或「雅樂舞」。根據《禮記。樂記》的記載，雅樂可以使人「耳聰目明，血氣和平」，回到身心本源「靜」的狀態，以求祭祀時達到與天相通的「天人合一」狀態。是後來道家與儒家所推崇的理想生命樣態，也轉化成個人身心精進的道路與技能，為東亞文化淵遠流長的傳統與最重要的文化精髓。
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-[#000000BA] font-semibold text-[22px] mb-4">
                雅樂舞身心動態原則
              </h3>
              <div className="space-y-4 text-[20px] leading-[2em] lg:leading-[1.5em]">
                <p>
                  雅樂舞的特色是端正的身軀，鬆而不垮，收神且專注覺察，在動態中達到身心靜定狀態。在中國或東亞國家其他傳統藝術與技藝上，如太極拳等武術、書法、南管、
                  古琴，劍道、甚至推拿按摩的手法或等都可看類似的強調或原則，目前少數僅存樂舞仍以文化財的形式保存在日韓與越南等地
                  。
                </p>
                <p>
                  身心中軸覺察練習以「
                  <span className="font-bold">雅樂身心動態原則</span>
                  」為設計核心。該原則是文化大學體育系退休教授陳玉秀四十年來對雅樂舞體證與還原研究的心血結晶。她多年前於韓國國立雅樂院學習雅樂舞，曾經驗到一種自我消融，身心全然合一，舒暢清明的超越經驗，因此驅動了他對雅樂舞逾四十年的深具原創性與貢獻的探索（閱讀更多陳玉秀老師的著作：
                  <a
                    href="https://books.google.com.tw/books/about/雅樂舞的白話文.html?id=K_qOAAAACAAJ&redir_esc=y"
                    className="text-[#6ab43e] hover:text-black transition-colors"
                  >
                    雅樂舞的白話文
                  </a>
                  <a
                    href="https://www.pubu.com.tw/ebook/23213?_l=zh-tw"
                    className="text-[#6ab43e] hover:text-black transition-colors"
                  >
                    雅樂舞與身心的鬱閼
                  </a>
                  <a
                    href="https://www.pubu.com.tw/ebook/23212"
                    className="text-[#6ab43e] hover:text-black transition-colors"
                  >
                    身心量覺的迴路
                  </a>
                  ）。
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-2 flex items-stretch">
            <div className="aspect-w-3 aspect-h-5 w-full h-full">
              <img
                src="/assets/image/B54B479D-E981-4557-8D25-B55613D96DC3.jpeg"
                alt="Traditional Practice"
                className="w-full h-full max-h-[30vh] lg:max-h-none object-cover rounded-[22px] shadow-sm"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

/**
 * Helper component for list items with icons
 */
const ListItem: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-start text-left">
    <span className="mr-3 mt-1 flex-shrink-0">
      <svg
        className="w-5 h-5 text-[#64686d]"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
          clipRule="evenodd"
        />
      </svg>
    </span>
    <span className="text-[20px] leading-[1.4]">{text}</span>
  </li>
);

export const title = "身心中軸覺察特色";
export default GoodPoints;
