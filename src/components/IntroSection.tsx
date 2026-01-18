const IntroSection = () => {
  return (
    <section
      id="start"
      className="py-16 lg:py-24 bg-[#E1B28D]/10 scroll-mt-16 lg:scroll-mt-24"
    >
      <div className="max-w-[88%] lg:max-w-[77%] 2xl:max-w-[66%] mx-auto px-4 grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-black mb-6 leading-tight">
            結合東方古老智慧與科學實證
          </h2>
          <div className="space-y-6 text-lg lg:text-[20px] leading-[2] font-light">
            <p>
              身心中軸覺察練習，以東亞禮樂傳統的身心整合觀為基礎，結合心理學與正念相關知識，讓身體中正放鬆、思緒淨空。
            </p>
            <p>
              藉由不同的身體動態練習，覺察並鬆動身心糾結，帶領你探索與瞭解身心狀態，傾聽身體與心靈的需求，重新擁抱自己。
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative rounded-2xl overflow-hidden max-h-[33vh] shadow-2xl aspect-video">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              src="/assets/video/demo.mp4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
