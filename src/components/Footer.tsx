import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#6B705C] text-white">
      <div className="max-w-[1140px] mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8 mb-12">
          <h3 className="text-2xl font-bold">關於我們……</h3>
          <p className="text-[20px] leading-[1.8] font-light">
            我們是一群因練習身心中軸覺察而獲益良多的心理學研究者與相關專業人士。從人文關懷出發，以分享好東西的熱情以及科學探索的精神，協助現代人覺察身體與認識自己，啟動改變身心的力量，找回專注力與幸福感。我們相信，每個人都能獲得身心的平靜與安穩，進而實踐自我、與世界共好。
          </p>
          <div className="pt-4 flex justify-center">
            <a
              href="/contact-us"
              className="inline-block border-2 border-white px-10 py-3 rounded-full font-bold hover:bg-white hover:text-[#6B705C] transition-all transform hover:scale-105"
            >
              聯絡我們
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 pt-12 flex flex-col items-center gap-4 text-[10px] text-white/70 uppercase tracking-widest text-center">
          <a
            href="http://creativecommons.org/licenses/by-nd/4.0/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/assets/image/80x15.png"
              alt="CC License"
              className="mb-4"
            />
          </a>
          <p className="font-bold">
            本網站著作係採用創用 CC 姓名標示-禁止改作 4.0 國際 授權條款授權
          </p>
          <p>
            Icons in this website are from www.flaticon.com and
            https://www.irasutoya.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
