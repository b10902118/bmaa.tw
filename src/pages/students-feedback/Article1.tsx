import React from "react";

const StudentsFeedback: React.FC = () => {
  return (
    <>
      {/* Main Container */}
      <article className="max-w-[88%] lg:max-w-[77%] 2xl:max-w-[66%] mx-auto px-6 md:px-10 lg:px-24 py-10 mt-16 lg:mt-18">
        {/* Header Section */}
        <header className="mb-10">
          <h1 className="font-['Playfair_Display',_serif] font-bold text-[#332d2d] leading-[1.8] mb-4 text-[40px] md:text-[44px] lg:text-[58px] text-left">
            身心的變「畫」
          </h1>
          <h3 className="font-['Playfair_Display',_serif] font-bold text-[#808080] text-[20px] md:text-[24px] lg:text-[37px] leading-[1.8]">
            劉盈瑩（臺大身心中軸覺察進階班學員）
          </h3>
          <div className="mt-8 border-t border-black w-full py-4"></div>
        </header>

        {/* Intro Paragraphs */}
        <section className="space-y-6 text-[20px] leading-[1.8] text-justify-custom">
          <p>
            大四的時候在台大修了連韻文老師一學期的身心中軸與正念覺察課程，在這學期之中我慢慢感受到許多身心的改變。
          </p>
          <p>
            在生理上，發現自己對身體感覺的敏感度增加、對疼痛不舒服或是緊繃及放鬆的覺察上升、比較能控制自己身體的動作，也比以前懂得傾聽自己生理的需求。
          </p>
          <p>
            在心理層面，我的彈性變比較大，後設腦袋也變得比較能溝通、講道理，脾氣變好一點點：就算亂發脾氣也能覺察「我是在亂發脾氣啊～」。
          </p>
          <p>
            此外，我也深深感受到身心越來越能夠連結，開始懂得傾聽並相信身體告訴我的事情，也會嘗試在人際互動及做決策時多相信感覺、直覺、相信自己，減少了許多以前腦袋裡常常出現的恐懼及擔憂。還有非常多身心上的覺察與感悟，這次我用圖畫來跟大家分享。
          </p>
        </section>

        {/* Process Section */}
        <section className="mt-12 space-y-6 text-[20px] leading-[1.8] text-justify-custom">
          <p>
            自國中就很少畫畫，但這次直覺可以透過畫畫讓身體告訴我「練習BMAA的心得」！這次我用彩色旋轉蠟筆畫畫、想畫的東西是一開始有個主題的構想，接著就丟給身體自由發揮了！至於顏色的部分，因為我的旋轉蠟筆每支有四個顏色，所以我是憑直覺選色系，至於到底會畫出什麼顏色也就任憑其自由出現。
          </p>
          <p>
            我總共畫了三張畫作為修畢一學期BMAA初階班的紀錄，以下我想分享的為其中兩張。
          </p>
        </section>

        {/* Artwork 1: Body */}
        <section className="mt-16">
          <h2 className="font-['Lato',_sans-serif] font-bold text-[#588157] text-[28px] md:text-[36px] mb-8">
            首先第一張是《身》
          </h2>

          <div className="flex justify-center mb-10 bg-[#62592C21] p-4 md:p-8">
            <img
              src="https://i0.wp.com/bmaa.tw/wp-content/uploads/2022/08/282204402_408182604546238_3067350791013366974_n.jpg?fit=983%2C1350&ssl=1"
              alt="身"
              className="w-full md:max-w-[46%] h-auto shadow-sm"
            />
          </div>

          <div className="space-y-6 text-[20px] leading-[1.8]">
            <p>
              練習到期末這兩週，發現自己開始可以感覺到身體的好多地方，就想說那我來幫自己畫一張我的身體圖好了！於是有了《
              <strong className="font-bold">身</strong>
              》。畫了一個大腦，因為我們不停的在用腦袋（用太多！）。
            </p>
            <p>
              身體有好多地方有紫粉的標記，是最近明顯感受到不舒服需要舒緩的地方。有一些箭頭的部分，代表是背後有一些不舒服的地方。左右兩邊髂腰肌在去年開始健身加上姿勢不良，長期以來會疼痛，因此下筆就還滿大力的（也不是我自己控制要畫很大力的！超酷！）。
            </p>
            <p>
              胸前心輪的位置在某次上課時老師看我的呼吸胸部都不會動，就有幫我摸一摸、告訴我「我已經夠好了」，當下我也是爆哭，所以畫了一顆愛心做紀錄！
            </p>
            <p>
              三張畫當中這是第一張，也是我最喜歡的畫。這是人類史上第一張為劉盈瑩紀錄的身體圖，值得裱框放在博物館展覽！
              非常鼓勵大家在練習一陣子、有了覺察後也幫自己的身體留下一些紀錄。
            </p>
          </div>
        </section>

        {/* Artwork 2: Tree */}
        <section className="mt-20">
          <h2 className="font-['Lato',_sans-serif] font-bold text-[#588157] text-[28px] md:text-[36px] leading-snug md:leading-tight mb-8">
            第二張是《樹枝、樹葉、舞》
          </h2>

          <div className="flex justify-center mb-10 bg-[#62592C21] p-4 md:p-8">
            <img
              src="https://i0.wp.com/bmaa.tw/wp-content/uploads/2022/08/282248925_401371718571482_4337501221231642394_n.jpg?fit=931%2C1350&ssl=1"
              alt="樹枝、樹葉、舞"
              className="w-full md:max-w-[46%] h-auto shadow-sm"
            />
          </div>

          <div className="space-y-6 text-[20px] leading-[1.8]">
            <p>我從以前就還滿喜歡樹，但也不太會慢下腳步來欣賞他們。</p>
            <p>大四開始時常跑台大上課，因為沒有腳踏車所以常常會在台大漫步。</p>
            <p>
              可能是秋冬到了、練BMAA也到了一個階段，我開始被路上的樹枝和樹葉吸引，好喜歡抬頭看樹枝的伸展以及陽光從樹葉、樹枝縫隙間竄出和樹葉、樹枝一起呈現的明暗。
            </p>
            <p>
              台大很棒（但很不自然）的地方就是在一條路上種了超級多種不同的樹，所以走過去時都有不同的樹葉樹枝光影可以看！
            </p>
            <p>
              我原本想在樹底下畫了一個在跳舞的小女孩，在畫的時候想像我每次看著樹，心情就會像隨他們跳舞、非常輕鬆的感覺。
            </p>
            <p>
              但畫完之後我發現自己畫了一個上半身在跳舞，但下半身沒有動起來的小女孩。仔細想想發現我好像就是在這樣的狀態吧！目前還在「想隨著自己、隨著輕盈的感覺起舞，但還有非常多的東西放不下」的狀態，還未真正能夠「鬆」！
            </p>
            <p>
              不過都是過程啦～持續練BMAA下次一定能畫出跳起來的女孩ＸＤ！能夠從自己的畫中這樣覺察自我，真的是一種和自己很棒的交流～
            </p>
          </div>
        </section>

        {/* Conclusion */}
        <footer className="mt-20 text-[20px] leading-[1.8]">
          <p>
            以上是我上完這學期BMAA後的部分心得分享。真的很感謝緣分讓我遇到連老師、BMAA、以及一起上課的同學～大家都一起在過程中體驗生活、認識自己，真的超級幸福的！
          </p>
        </footer>

        {/* Bottom Spacer */}
        <div className="h-[100px]"></div>
      </article>
    </>
  );
};

export default StudentsFeedback;
