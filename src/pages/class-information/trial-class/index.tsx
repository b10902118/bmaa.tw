import React from "react";

const TrialClass: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-[#f9f5f2] font-['Lora',_serif] text-[#64686d] leading-[1.8] selection:bg-[#f75691] selection:text-white">
        {/* Container to limit max-width on large screens like Elementor sections */}
        <div className="max-w-[88%] lg:max-w-[77%] 2xl:max-w-[66%] mx-auto px-6 md:px-10 lg:px-24 py-10">
          {/* Header Section */}
          <section className="pt-[3%] pb-0">
            <h2 className="font-['Lato',_sans-serif] font-bold text-[#332C2C] text-[24px] lg:text-[36px] leading-none m-0 pt-5 pb-2.5">
              身心中軸覺察體驗課【身心RESET · 向內覺察】
            </h2>
          </section>

          {/* Divider */}
          <div className="py-[15px]">
            <div className="border-t-[2.5px] border-double border-[#373937B5] w-full"></div>
          </div>

          {/* Banner Image */}
          <section className="w-full text-center">
            <img
              src="/assets/image/體驗課head-banner.jpg"
              alt="Course Banner"
              className="inline-block w-full max-w-[1080px] h-auto border border-[#F4E2CD] object-cover"
            />
          </section>

          {/* Introduction Section */}
          <section className="py-2.5">
            <h2 className="font-['Lora',_serif] font-normal text-[#588157] text-[30px] lg:text-[36px] leading-[1.8] m-0">
              如果你⋯⋯
            </h2>
            <div className="space-y-1 mt-2">
              <p className="text-[20px]">
                想學習如何放鬆或安頓身心，而能活在當下
              </p>
              <p className="text-[20px]">
                想擁有穩定的情緒與專注力，擁有油然而生的快樂與成就感
              </p>
              <p className="text-[20px]">
                想深度探索自己，而能真正地與自己連結或和解，擁有整合健全的自我
              </p>
              <p className="text-[20px]">
                想要突破瓶頸，而能持續自我精進與成長，開發潛能
              </p>
              <p className="text-[20px]">
                想探索身心關係，或對傳統文化身心觀或儒家的「修身」進路有興趣
              </p>
            </div>
            <h2 className="font-['Lora',_serif] font-normal text-[#588157] text-[30px] lg:text-[36px] leading-[1.8] mt-4">
              歡迎來體驗課一探究竟！
            </h2>
          </section>

          {/* Divider */}
          <div className="py-[15px]">
            <div className="border-t-[2.5px] border-double border-[#373937B5] w-full"></div>
          </div>

          {/* Instructor Section */}
          <section className="mt-[-2%] mb-[2%]">
            <h2 className="font-['Lato',_sans-serif] font-bold text-[#588157] text-[24px] lg:text-[36px] leading-none mb-2.5">
              講師：翁宛婷
            </h2>

            <div className="flex flex-col lg:flex-row gap-8 items-start py-2.5">
              {/* Instructor Image */}
              <div className="w-full lg:w-1/2 text-center">
                <img
                  src="/assets/image/宛婷.jpg"
                  alt="翁宛婷"
                  className="inline-block w-full max-w-[500px] h-auto rounded-[22px]"
                />
              </div>

              {/* Instructor Credentials */}
              <div className="w-full lg:w-1/2 text-[20px] uppercase">
                <div className="space-y-1">
                  <p className="flex items-center gap-2">🌱 臺大心理系 學士</p>
                  <p className="flex items-center gap-2">🌱 師大諮商所 碩士</p>
                  <p className="flex items-center gap-2">
                    🌱 臺灣大學心輔中心 兼任心理師
                  </p>
                  <p className="flex items-center gap-2">
                    🌱 我們心理諮商所 合作心理師
                  </p>
                  <p className="min-h-[1.8em]">&nbsp;</p>
                  <p className="flex items-start gap-2">
                    <span className="mt-1">🌱</span>
                    <span>
                      練習與研究身心中軸覺察超過十年，於社區、大學帶領團體課程與個別課程。團體課程帶領時數超過300小時，並嘗試融入身心中軸覺察於團體與個別心理諮商
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Related Experience Section */}
          <section className="py-2.5">
            <div className="border-t border-dashed border-black mb-5 py-[15px]"></div>

            <h3 className="font-['Lato',_sans-serif] font-bold text-[#588157] text-[36px] leading-[1.8] mb-5">
              相關經驗
            </h3>

            <div className="space-y-4 text-[20px] font-normal">
              <div>
                <p className="font-bold">【團體課程】</p>
                <p>✓ 臺灣大學『身心中軸覺察與正念：實作與文獻討論』課程講師</p>
                <p>✓ 臺灣大學『身心覺察與放鬆助眠工作坊』講師</p>
                <p>✓ 臺灣大學心輔中心『好眠小團體』團體帶領者</p>
                <p>
                  ✓ 臺灣大學心輔中心『身入你心：身心中軸覺察練習團體』團體帶領者
                </p>
                <p>
                  ✓
                  中原大學心理系『正念訓練的基礎實作』課程兼任講師（帶領BMAA實作）共4學期
                </p>
                <p>✓ 臺灣大學認知與身心提升研究室 BMAA研究相關課程帶領者</p>
                <p>✓ BMAA社區課程帶領者 共開設16班</p>
              </div>

              <div>
                <p className="font-bold">【演講】</p>
                <p>✓ 臺大擬態中心『身體舒壓工作坊』身心中軸覺察練習</p>
                <p>✓ 樹林高中『身心中軸與正念練習工作坊』</p>
                <p>✓ 森林保健協會『身心中軸覺察練習–給現代人的身心處方箋』</p>
              </div>

              <div>
                <p className="font-bold">【個別課程】</p>
                <p>
                  ✓
                  至今曾帶領憂鬱、焦慮症與多重障礙成人練習身心中軸覺察，協助其能調節情緒，回到平衡安頓的狀態，增進身心的彈性
                </p>
              </div>

              <div>
                <p className="font-bold">【相關研究】</p>
                <p>
                  ✓
                  碩士論文《探討短期動態身心覺察課程對國小教師內感覺覺察、心理韌性與壓力之介入成效》
                  ——研究發現6週18小時的身心中軸覺察課程能有效的提升國小教師的身體覺察（內感覺覺察）、心理韌性，並有效的降低壓力，此外情緒狀態也變得平穩、睡面品質提升，注意力也有所進步
                </p>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="py-[15px]">
            <div className="border-t-[2.5px] border-double border-[#373937B5] w-full"></div>
          </div>

          {/* Course Info Section */}
          <section className="mt-[-2%] mb-4">
            <h2 className="font-['Lato',_sans-serif] font-bold text-[#588157] text-[24px] lg:text-[36px] leading-none py-5">
              課程資訊
            </h2>
            <div className="space-y-1 text-[20px]">
              <h3 className="font-['Lora',_serif] font-normal text-[#64686d] text-[20px] leading-[1.8] m-0">
                【課程時間與地點】
              </h3>
              <p>✓ 時間：2026/01/17 (六) 14:00 – 15:30</p>
              <p>✓ 地點：古池蛙躍濺水聲（台北市大安區金山南路二段218號7樓）</p>
              <p>✓ 報名截止日：01/16（五）</p>

              <p className="pt-4 font-bold">【人數上限】</p>
              <p>8人以上開班，25人滿班。若超過滿班人數，將依繳費順序錄取</p>

              <p className="pt-4 font-bold">【課程費用】</p>
              <p>單人推廣價：500元/人</p>

              <p className="pt-4 font-bold">【合辦單位】</p>
              <p>
                古池蛙躍濺水聲（
                <a
                  href="https://www.instagram.com/oldpond_frogjumps/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6ab43e] hover:text-black transition-colors"
                >
                  Instagram
                </a>
                、
                <a
                  href="https://www.facebook.com/p/%E5%8F%A4%E6%B1%A0%E8%9B%99%E8%BA%8D%E6%BF%BA%E6%B0%B4%E8%81%B2Old-pond-frog-jumps-in-sound-of-water-61569822127432/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6ab43e] hover:text-black transition-colors"
                >
                  Facebook
                </a>
                ）
              </p>

              <p className="pt-4 font-bold">【注意事項】</p>
              <p>✓ 需自備瑜珈墊</p>
              <p>✓ 請穿著寬鬆便於活動的衣服</p>
              <p>✓ 課前避免服用刺激性飲料</p>
            </div>
          </section>

          {/* Divider */}
          <div className="py-[15px]">
            <div className="border-t-[2.5px] border-double border-[#373937B5] w-full"></div>
          </div>

          {/* Registration Section */}
          <section className="mt-[-2%] mb-[40px]">
            <h2 className="font-['Lato',_sans-serif] font-bold text-[#588157] text-[24px] lg:text-[36px] leading-none py-5">
              報名資訊
            </h2>
            <div className="space-y-4 text-[20px]">
              <div>
                <p className="font-bold">【報名方法】</p>
                <p>
                  1.填寫報名表單：
                  <a
                    href="https://forms.gle/cpXEgbWfEtBmPy8E6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6ab43e] hover:text-black transition-colors underline decoration-inherit"
                  >
                    https://forms.gle/cpXEgbWfEtBmPy8E6
                  </a>
                  ，並完成繳費
                </p>
                <p className="italic text-[18px]">
                  ※ 以「完成繳費」為報名成功之依據
                </p>
                <p>
                  2.請加入官方line帳號（ID:
                  @551ybjav），以利後續繳費資訊確認與課程聯繫
                </p>
              </div>

              <div>
                <p className="font-bold">【匯款帳戶】</p>
                <p>– 銀行代號：921</p>
                <p>– 戶名：蕃薯藤社會企業有限公司</p>
                <p>– 帳號：92103010000785</p>
                <p className="italic text-[18px]">
                  ※若有填寫匯款備註需求，格式請以參與者姓名作為開頭以方便核對
                </p>
              </div>

              <div>
                <p className="font-bold">【退費相關事宜】</p>
                <p>
                  –
                  如因不可抗力因素或報名人數不足，致無法開班，將全額退還報名費。
                </p>
                <p>
                  –
                  如因個人因素無法參與課程，2026/1/13前（含1/13）提出，報名費扣除10%手續事務費後退還。
                </p>
                <p>
                  – 1/14後（含1/14）退出，扣除35％手續事務費。開課後則不退費。
                </p>
              </div>
            </div>
          </section>

          {/* Final Divider */}
          <div className="py-[15px] pb-10">
            <div className="border-t-[2.5px] border-double border-[#373937B5] w-full"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrialClass;
