import React from "react";

const Evidence1: React.FC = () => {
  return (
    <>
      {/* Main Content Container */}
      <main className="relative -mt-20 lg:-mt-32 max-w-[88%] lg:max-w-[77%] 2xl:max-w-[66%] mx-auto px-6 md:px-10 lg:px-24 pb-20 pt-12 lg:pt-20 mt-16 lg:mt-18">
        {/* Title */}
        <header className="mb-6">
          <h1 className="text-[#1E1E20ED] font-semibold text-[25px] lg:text-[33px] leading-[1.4] lg:leading-[49px] tracking-normal">
            四周身心中軸覺察課程提升社區成人的腦力及持續性注意力
          </h1>
        </header>

        {/* Divider */}
        <div className="w-full border-t border-black my-8 opacity-20"></div>

        {/* Featured Image */}
        <figure className="mb-10 overflow-hidden rounded-sm">
          <img
            src="https://i0.wp.com/bmaa.tw/wp-content/uploads/2022/09/5.jpg?fit=1536%2C1024&ssl=1"
            alt="Community Adult Learning"
            className="w-full max-h-[33vh] object-cover rounded-lg"
            loading="lazy"
          />
        </figure>

        {/* Article Body */}
        <article className="text-xl leading-relaxed text-black space-y-8">
          <p>
            在一項以社區成人（20 至 50
            歲）為研究對象的研究中，我們發現接受四周短期身心中軸覺察練習的參與者，在工作記憶廣度（是一種腦力的指標，相當於電腦中的記憶體，也就是大腦能同時維持、處理多少訊息的能力）與持續性注意力以及正念特質（個人專注當下與覺察的傾向）皆有顯著的提升。
          </p>

          <p>
            在這個研究中，身心中軸課程的訓練時間（12
            小時）比多數文獻上提及的正念訓練課程（通常是 10 天約 100
            小時的高強度密集訓練）還要更短
            <strong className="font-bold">
              ，但卻仍然得到對於工作記憶廣度以及維持性注意力有顯著提升的效果，這意味著身心中軸是一個相對有效率的練習法。
            </strong>
          </p>

          {/* Hashtags */}
          <div className="pt-8 space-x-3 text-[#008080] font-medium">
            <span>#社區成人</span>
            <span>#認知功能</span>
            <span>#持續性注意力</span>
          </div>

          {/* Citation */}
          <footer className="pt-8 border-t border-gray-100">
            <p className="text-[16px] leading-normal text-gray-500 font-sans italic">
              Teng, S.-C., & Lien, Y.-W. (2016). What Confucius practiced is
              good for your mind: Examining the effect of a contemplative
              practice in Confucian tradition on executive functions.
              <span className="italic ml-1">
                Consciousness and Cognition, 42,
              </span>{" "}
              204–215.
            </p>
          </footer>
        </article>
      </main>

      {/* Footer Spacer (Simulating the 90px spacer) */}
      <div className="h-[90px]"></div>
    </>
  );
};

export default Evidence1;
