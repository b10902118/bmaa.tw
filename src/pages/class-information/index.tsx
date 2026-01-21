import React from "react";
import Title from "../../components/Title";
import TribalDivider from "../../components/TribalDivider";
import MoreButton from "../../components/MoreButton";

interface CourseSectionProps {
  title: string;
  subtitle: string;
  descriptions: React.ReactNode[]; // Accepts array of <p> or text
  buttonHref: string;
  buttonText?: string;
  className?: string;
}

const courseSections = [
  {
    title: "基礎課程一",
    subtitle: "︱鬆動身心，開啟自我對話空間︱",
    descriptions: [
      <p className="text-[20px] leading-relaxed tracking-[0.3px]" key="desc1">
        基礎一以「鬆」為主軸，帶領你透過放鬆身體、放空意念，逐步回到身心的最佳狀態。在課程中，你將學習三個核心方法：
        （1）<span className="font-bold">調息靜觀技巧</span>
        ──幫助你淨空雜亂思緒，培養清明而專注的覺察； （2）
        <span className="font-bold">深層自我按摩</span>
        ──運用一顆網球搭配呼吸，舒緩緊繃僵硬的部位； （3）
        <span className="font-bold">靜觀下的動態練習</span>
        ──從身體末端開始逐步覺察能動性，並鬆開長期的慣性與糾結。
        <br />
        <br />
        最後將整合這些練習，帶你初步體驗「身心中軸覺察」──自我最具彈性與可能性的狀態。完成基礎一後，你將感受到更輕盈自在的身心、更佳的睡眠品質，以及對自我的更好掌握。這是中軸練習的起點，為後續更深入的探索與調控奠定基礎。
      </p>,
    ],
    buttonHref: "/#latest_level1",
  },
  {
    title: "基礎課程二",
    subtitle: "︱深化中軸，返回自我安頓的家︱",
    descriptions: [
      <p
        className="text-[20px] leading-relaxed tracking-[0.3px] mb-6"
        key="desc2a"
      >
        基礎二將帶領你進一步
        <span className="font-bold">穩定並深化身體中軸線</span>
        ，鬆動更靠近軀幹的關節，如胯、脊椎與膝關節，並放鬆肩胛與胯部，搭配深層自我按摩，讓身體恢復靈活與彈性、減輕身體的不適與干擾。同時，你也將學習到
        <span className="font-bold">身心中軸的動態原則</span>
        ，包括如何透過支點傳遞勁力，以及以特殊調息法鬆動深入鬆動內部的臟器，使鬱積於身體深處的壓力、情緒得以抒發，使氣血更能通透的流暢於全身，感受更深刻的輕鬆自在，而流暢的身心將幫助你能夠做到自己想要的事情。
      </p>,
      <p className="text-[20px] leading-relaxed tracking-[0.3px]" key="desc2b">
        此外，隨著練習的深入，你對於「心平氣和、耳聰目明」的狀態掌握會更加清晰，並理解其中的身心互動機制。最重要的是，你將學會如何把這份覺察與平衡帶入日常作息與自我照顧，讓自己在工作與生活各方面的挑戰中，更加自在、穩定而靈活。
      </p>,
    ],
    buttonHref: "/#latest_level2",
  },
  {
    title: "深化工作坊",
    subtitle: "︱主題式整合練習︱",
    descriptions: [
      <p className="text-[20px] leading-relaxed tracking-[0.3px]" key="desc3">
        包含提升肩胛骨、骨盆等部位之能動性，適合上過基礎一、二的學員深化練習，促進身心流動與持續突破。
      </p>,
    ],
    buttonHref: "/#latest_course",
  },
  {
    title: "深度自然體驗",
    subtitle: "︱打開感受，讓大自然為你充電︱",
    descriptions: [
      <p className="text-[20px] leading-relaxed tracking-[0.3px]" key="desc4">
        帶著課堂所學的身心中軸覺察技巧，徜徉於自然中，讓你卸下壓力與重擔，回到身心的家、也回到大自然的家
      </p>,
    ],
    buttonHref: "/#latest_course",
  },
];

const CourseSection: React.FC<CourseSectionProps> = ({
  title,
  subtitle,
  descriptions,
  buttonHref,
  buttonText = "近期課程",
}) => (
  <section className="mb-16 md:mt-20 text-center">
    <h2 className="text-[35px] font-extrabold text-[#588157] mb-5 leading-none">
      {title}
    </h2>
    <h3 className="font-sans text-[18px] md:text-[24px] font-semibold text-[#6A994E] mb-5 leading-none">
      {subtitle}
    </h3>
    <div className="text-left md:px-[6%] mt-4 mb-10">
      {descriptions.map((desc, i) => (
        <div key={i}>{desc}</div>
      ))}
    </div>
    <MoreButton text={buttonText} href={buttonHref} />
  </section>
);

/**
 * CourseIntroduction Component
 *
 * Replicates a sophisticated layout with custom typography (Lora/Lato),
 * specific olive/green color palettes, and custom SVG dividers.
 */
const ClassInformation = () => {
  return (
    <>
      <Title title={title} color="green" />
      <main className="max-w-[88%] lg:max-w-[77%] 2xl:max-w-[66%] mx-auto px-6 md:px-10 lg:px-24 py-10">
        {courseSections.map((section) => (
          <React.Fragment key={section.title}>
            <CourseSection {...section} />
            <TribalDivider />
          </React.Fragment>
        ))}
      </main>
    </>
  );
};

// For: src/pages/[...slug].astro:32
export const title = "課程介紹";
export default ClassInformation;
