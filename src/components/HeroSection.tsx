import { ChevronDown } from "lucide-react";

/**
 * HeroSection Component
 * Translated from Elementor HTML/CSS to Tailwind CSS + React
 */
const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center-top bg-position-[center_top_10%] transition-transform duration-1000"
        style={{
          backgroundImage:
            'url("/assets/image/169787839_10158607295594652_5746760532255582471_n.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/15"></div>
      </div>

      <div className="relative z-10 text-center mt-[5%] px-4 max-w-4xl">
        <h1 className="text-4xl lg:text-[50px] font-black text-white leading-tight mb-6">
          身心共好，找回放鬆安穩的自己
        </h1>
        <p className="text-lg lg:text-[17px] text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto">
          身體疲倦時，讓自己好好地休息 ｜ 面對壓力時，讓自己能夠從容應對 ｜
          喚醒覺察與感受，重獲掌控力與幸福感
        </p>
        <a
          href="#start"
          className="inline-flex items-center gap-2 bg-[#6B705C]/70 hover:bg-[#6B705C] text-white px-8 py-3 rounded-full font-bold transition-all border border-white/20"
        >
          開始探索 <ChevronDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
