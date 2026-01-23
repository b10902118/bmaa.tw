import React from "react";
import Title from "../../components/Title";

// Section data array
const newsSections = [
  {
    image: "/assets/image/BMAA.jpg",
    imageAlt: "BMAA Logo",
    title: "【台灣身心中軸覺察與提升學會】公開徵求會員",
    description: (
      <>
        發起人
        連韻文君已經向內政部提出申請籌組「台灣身心中軸覺察與提升學會」社會團體，依法准予籌組(臺內團字第1140286703號)，茲公開徵求會員。有意成為會員者請點下方按鈕，以了解本會宗旨及入會方式…
      </>
    ),
    cta: {
      href: "https://forms.gle/47yZ47nzUTni6VeVA",
      label: "了解更多",
    },
  },
  // Add more section objects here if needed
];

const NewsSection: React.FC<{
  image: string;
  imageAlt: string;
  title: string;
  description: React.ReactNode;
  cta: { href: string; label: string };
}> = ({ image, imageAlt, title, description, cta }) => {
  return (
    <section>
      <div className="flex flex-wrap">
        {/* Image Column */}
        <div className="w-full lg:w-[36.583%] p-[10px] flex items-start">
          <div className="flex justify-center w-full">
            <img
              src={image}
              alt={imageAlt}
              className="max-h-[25vh] w-auto rounded-[22px] shadow-none inline-block align-middle border-none"
            />
          </div>
        </div>

        {/* Text Content Column */}
        <div className="w-full lg:w-[63.417%] p-[10px] flex flex-col justify-start">
          {/* Title */}
          <div className="mb-5 transition-all duration-400">
            <h2 className="font-['Lato',_sans-serif] font-bold text-[#4A2704] leading-[1.5em] text-[24px] lg:text-[36px] m-0 text-justify lg:text-left">
              {title}
            </h2>
          </div>

          {/* Description */}
          <div className="mb-5 transition-all duration-400">
            <p className="m-0 text-[20px] leading-[1.8] font-bold text-[#808080]">
              {description}
            </p>
          </div>

          {/* CTA Button */}
          <div className="text-center lg:text-right transition-all duration-400">
            <a href={cta.href} className="inline-block group outline-none">
              <button
                className="
                      bg-transparent
                      text-black
                      font-bold
                      text-[16px]
                      leading-[1.3em]
                      py-4 px-4
                      rounded-[20px]
                      border border-[#6B705CDE]
                      transition-all
                      duration-300
                      group-hover:scale-110
                      group-hover:bg-[#6B705C]
                      group-hover:text-white
                      group-focus:scale-110
                      group-focus:bg-[#6B705C]
                      group-focus:text-white
                      group-active:scale-110
                    "
              >
                {cta.label}
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const News: React.FC = () => {
  return (
    <>
      <Title title={title} color="orange" />
      <div className="max-w-[88%] lg:max-w-[77%] 2xl:max-w-[66%] mx-auto px-6 md:px-10 lg:px-24 pb-20 mt-16 lg:mt-18">
        {newsSections.map((section, idx) => (
          <NewsSection key={idx} {...section} />
        ))}
      </div>
    </>
  );
};

export const title = "最新消息";
export default News;
