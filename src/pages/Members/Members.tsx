import React from "react";
import Title from "../../components/Title";

/**
 * TeamMemberCard Component
 */
const TeamMemberCard = ({
  name,
  image,
  motto,
  credentials,
}: {
  name: string;
  image: string;
  motto?: string | React.ReactNode;
  credentials: string[];
}) => (
  <div className="flex flex-col items-center text-center p-4">
    {/* Image with 30% border radius and custom shadow */}
    <div className="mb-5 relative">
      <img
        src={image}
        alt={name}
        className="w-[150px] h-[150px] object-cover rounded-[30%] shadow-[0_0_0_4px_rgba(215,173,138,0.72)]"
      />
    </div>

    {/* Name */}
    <h3 className="text-[24px] md:text-[24px] font-bold text-[#363634] mb-2 font-serif leading-[1.8]">
      {name}
    </h3>

    {/* Motto/Quote */}
    {motto && (
      <div className="text-[#d18f5c] text-[20px] font-bold mb-4 min-h-[3rem] flex flex-col justify-center">
        {motto}
      </div>
    )}

    {/* Credentials */}
    <div className="space-y-1">
      {credentials.map((cred, idx) => (
        <h4
          key={idx}
          className="text-[#808080] text-base font-bold leading-[1.8] font-serif"
        >
          {cred}
        </h4>
      ))}
    </div>
  </div>
);

const SectionTitle = ({ title }: { title: string }) => (
  <div className="w-full py-8">
    <div className="border-b-[5px] border-[#CDAC9D] pb-1 inline-block min-w-[150px] pr-8">
      <h2 className="text-[30px] md:text-[36px] font-bold text-[#3C3C24] tracking-[1.5px] font-sans whitespace-nowrap">
        {title}
      </h2>
    </div>
  </div>
);

const Members: React.FC = () => {
  return (
    <>
      <Title title="團隊成員" color="orange" />

      <div className="max-w-[88%] lg:max-w-[77%] 2xl:max-w-[66%] mx-auto px-6 md:px-10 lg:px-24 py-10">
        {/* Lecturer Section (講師群) */}
        <section className="py-10">
          <SectionTitle title="講師群" />
          <div className="max-w-[1140px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8">
            <TeamMemberCard
              name="翁宛婷"
              image="/assets/image/宛婷_無框.jpg"
              motto="快樂。自在。安適"
              credentials={[
                "心理學碩士",
                "臺灣師範大學教育心理與輔導所",
                "諮商心理師",
                "諮心字第004917號",
              ]}
            />
            <TeamMemberCard
              name="李茂寧"
              image="/assets/image/茂寧大頭近照.jpg"
              motto={
                <>
                  覺察身體就是與自己同在，
                  <br />
                  也是改變的開始
                </>
              }
              credentials={["心理學碩士", "臺灣大學心理學研究所"]}
            />
            <TeamMemberCard
              name="吳玲甄"
              image="/assets/image/玲甄_無框.jpg"
              motto={
                <>
                  渴望冒險卻又渴望安定，
                  <br />
                  在中軸探索的旅途中找到了平衡的可能
                </>
              }
              credentials={["心理學碩士", "臺灣大學心理學研究所", "臨床心理師"]}
            />
            <TeamMemberCard
              name="鄧善娟"
              image="/assets/image/善娟_無框.jpg"
              motto={
                <>
                  回歸本心
                  <br />
                  找回自由自在
                </>
              }
              credentials={["心理學博士", "臺灣大學心理學研究所"]}
            />
            <TeamMemberCard
              name="許惟智"
              image="/assets/image/惟智_無框.jpg"
              motto={
                <>
                  慢慢找回
                  <br />
                  身心平衡的節奏
                </>
              }
              credentials={["心理學碩士", "臺灣大學心理學研究所"]}
            />
            <TeamMemberCard
              name="魏里耘"
              image="/assets/image/S__9969680-1.jpg"
              motto={
                <>
                  一起找回
                  <br />
                  身心安適的家
                </>
              }
              credentials={["心理學碩士", "臺灣大學心理學研究所", "臨床心理師"]}
            />
          </div>
        </section>

        {/* Seed Lecturer Section (種子講師) */}
        <section className="py-10">
          <SectionTitle title="種子講師" />
          <div className="max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-8">
            <TeamMemberCard
              name="朱玉正"
              image="/assets/image/玉正_無框.jpg"
              motto="^_^"
              credentials={["心理學博士", "臺灣大學心理學研究所"]}
            />
            <TeamMemberCard
              name="林佳瑤"
              image="/assets/image/佳瑤_無框.jpg"
              motto="釋放身體的沉重，心靈也會變得自由，前方便豁然開朗"
              credentials={[
                "心理學碩士",
                "中國醫藥大學神經科學與認知科學研究所",
              ]}
            />
            <TeamMemberCard
              name="夏軒寧"
              image="/assets/image/軒寧形象照-1.jpg"
              motto={
                <>
                  重新認識自己，
                  <br />
                  建構身心安適的「家」
                </>
              }
              credentials={["臺灣大學心理所臨床組碩士班"]}
            />
            <TeamMemberCard
              name="劉盈瑩"
              image="/assets/image/盈瑩ㄉ美照-2.jpg"
              motto="紮根・行動・順流・自在"
              credentials={["臺灣師範大學教育學系 學士"]}
            />
            <TeamMemberCard
              name="張媛涵"
              image="/assets/image/媛涵形象照02.png"
              motto="心是行動的本源"
              credentials={["臺灣大學經濟系 學士"]}
            />
          </div>
        </section>

        {/* Advisory Section (研發與教學顧問) */}
        <section className="py-10">
          <SectionTitle title="研發與教學顧問" />
          <div className="max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-8">
            <TeamMemberCard
              name="連韻文"
              image="/assets/image/1.jpg"
              credentials={[
                "臺灣大學心理系暨研究所 副教授",
                "心理學博士",
                "美國加州大學洛杉磯分校",
              ]}
            />
            <TeamMemberCard
              name="葉理豪"
              image="/assets/image/F58372A6-23EC-4D82-BE2E-61F20234F55B.jpeg"
              motto="Staring into my soul"
              credentials={[
                "中原大學心理學系 副教授",
                "心理學博士",
                "美國德州大學艾爾巴索分校",
              ]}
            />
            <TeamMemberCard
              name="許儷絹"
              image="/assets/image/許老師_無框.jpg"
              motto={
                <>
                  歡喜的看待每一天，
                  <br />
                  熱忱的接待每件來到生命的人事物!
                </>
              }
              credentials={[
                "中國醫藥大學醫學系社會醫學科 副教授",
                "心理學博士",
                "台灣大學心理學研究所",
              ]}
            />
            <TeamMemberCard
              name="田意民"
              image="/assets/image/田老師_無框.jpg"
              motto={
                <>
                  身心合一
                  <br />
                  開啟內心的小宇宙
                </>
              }
              credentials={[
                "中山醫學大學心理系 助理教授",
                "心理學博士",
                "中正大學心理學研究所",
              ]}
            />
          </div>
        </section>

        {/* Yi Dance Section (佾舞指導) */}
        <section className="py-10 pb-32">
          <SectionTitle title="佾舞指導" />
          <div className="max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-8">
            <TeamMemberCard
              name="郭翰"
              image="/assets/image/211565.jpg"
              motto="末端傳力 • 行氣連貫 • 中軸靈動"
              credentials={["醫學工程碩士", "台灣大學電機工程研究所"]}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Members;
