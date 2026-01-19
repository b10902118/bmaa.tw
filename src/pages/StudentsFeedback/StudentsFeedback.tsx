import React from "react";
import Title from "../../components/Title";
import TribalDivider from "../../components/TribalDivider";

const feedbackEntries = [
  {
    image: "/assets/image/女生1-1-1.png",
    name: "劉盈瑩",
    role: ["臺大身心中軸覺察", "進階班學員"],
    title: "身心的變「畫」",
    excerpt:
      "透過畫畫讓身體告訴我「練習BMAA的心得」！這次我用彩色旋轉蠟筆畫畫、想畫的東西是一開始有個主題的構想，接著就丟給身體自由發揮了。首先第一張是《身》，畫了一個大腦，因為我們不停的在用腦袋（用太多！）。身體有好多地方有紫粉的標記，是最近明顯感受到不舒服需要舒緩的地方……",
    link: "/students-feedback/article-1",
  },
  {
    image: "/assets/image/男生2-2.png",
    name: "蔣秉軒",
    role: ["臺大身心中軸覺察", "進階班學員"],
    title: "認識自己是一輩子的事情",
    excerpt:
      "在這個世代，我們花了很多時間學習知識，但卻忘了認識自己。不知道你是不是也跟我一樣，問遍了所有人，看遍了所有書籍，卻還是不知道自己到底怎麼了。怎麼還是沒有很快樂、怎麼還是不滿足、又怎麼人生還是一樣找不到意義……",
    link: "/students-feedback/article-2",
  },
  {
    image: "/assets/image/女生1-1-1.png",
    name: "吳玲甄",
    role: ["身心中軸覺察課程講師/臨床心理師"],
    title: "中央山脈縱走：身心中軸覺察原則的體證",
    excerpt:
      "過去爬百岳都是滿滿的痛苦回憶，當時的我還不太知道該怎麼活用中軸原則在爬山，要嘛喘得上氣不接下氣，要嘛不知道該怎麼用力，頭一天就把膝蓋操到爆炸，讓我每每想到爬山既愛又恨。這是行程雖然是最挑戰的一次，但過去經驗的累績以及平常中軸的持續練習，讓我比較知道該如何爬山了！",
    link: "/students-feedback/article-3",
  },
  {
    image: "/assets/image/女生1-1-1.png",
    name: "陳力瑜",
    role: ["臺大身心中軸覺察初階班學員"],
    title: "因學會珍惜自己而變得勇敢",
    excerpt:
      "我成為一個努力的人，做很多事都是為了要忘記我自己，很多時候我成功做到了這件事，卻也有很多時候我害怕地躲起來，不想面對這個世界，同時卻也認為自己的逃避是可恥的，不斷責難自己，卻一直不知道該怎麼辦。 這學期我好像慢慢找到一個答案⋯⋯",
    link: "/students-feedback/article-4",
  },
];

const StudentFeedback: React.FC = () => {
  return (
    <>
      <Title title="學員心得" color="orange" />

      {/* Main Content Container */}
      <main className="max-w-[88%] lg:max-w-[77%] 2xl:max-w-[66%] mx-auto px-6 lg:px-8 py-12">
        {feedbackEntries.map((entry, idx) => (
          <React.Fragment key={entry.link}>
            <FeedbackEntry {...entry} />
            {idx < feedbackEntries.length - 1 && <TribalDivider />}
          </React.Fragment>
        ))}
      </main>
    </>
  );
};

/**
 * Feedback Entry Component
 */
interface FeedbackEntryProps {
  image: string;
  name: string;
  role: string[];
  title: string;
  excerpt: string;
  link: string;
}

const FeedbackEntry: React.FC<FeedbackEntryProps> = ({
  image,
  name,
  role,
  title,
  excerpt,
  link,
}) => {
  return (
    <section className="flex flex-wrap lg:flex-nowrap gap-8 mb-12">
      {/* Left Column: Avatar & Name */}
      <div className="w-full lg:w-[20%] flex flex-col items-center text-center">
        <div className="mb-5">
          <img
            src={image}
            alt={name}
            className="w-[150px] h-[150px] object-cover"
          />
        </div>
        <h2 className="font-bold text-[24px] lg:text-[36px] text-[#020101] leading-none mb-5">
          {name}
        </h2>
        <div className="px-[5%] text-[20px] leading-relaxed">
          {role.map((line, idx) => (
            <p key={idx} className="m-0">
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Right Column: Content */}
      <div className="w-full lg:w-[80%] flex flex-col">
        <h2 className="font-bold text-[24px] lg:text-[36px] text-[#33271B] leading-none mb-5 text-center lg:text-left pt-[3%]">
          {title}
        </h2>
        <div className="text-[20px] leading-relaxed mb-8 pt-[2%]">
          <p>{excerpt}</p>
        </div>

        {/* Button Wrapper */}
        <div className="text-center lg:text-right mt-auto">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-3 border border-[#6B705CDE] text-[#000000] font-bold rounded-[20px] 
                       hover:bg-[#6B705C] hover:text-white hover:scale-110 active:scale-110 
                       transition-all duration-300 text-[16px] leading-[1.3em]"
          >
            完整閱讀
          </a>
        </div>
      </div>
    </section>
  );
};

export default StudentFeedback;
