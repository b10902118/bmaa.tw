/**
 * HeroSection Component
 * Translated from Elementor HTML/CSS to Tailwind CSS + React
 */
const HeroSection: React.FC = () => {
  return (
    <section
      className="relative h-[50vh] lg:h-screen flex items-center justify-center bg-cover"
      style={{
        backgroundImage:
          'url("/assets/image/Lovepik_com-605022858-Chinese-style-landscape-painting-background-1.jpg")',
      }}
    >
      <div className="container mx-auto px-6 py-12 lg:py-24">
        <div className="flex justify-end">
          <div className="w-full lg:w-3/4 text-right">
            <h1 className="text-[#000000] font-light leading-[2.4em] lg:leading-[1.9em] text-2xl lg:text-3xl xl:text-4xl lg:mx-[15%]">
              源自東亞的<span className="font-bold">禮樂傳統文化</span>
              <br />
              結合當代<span className="font-bold">心理學研究</span>
              <br />
              <span className="font-bold">針對現代人</span>
              的身心狀態與心理需求
            </h1>
          </div>
        </div>
      </div>

      {/* Bottom Wave Shape Divider */}
      <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] rotate-180 pointer-events-none">
        <svg
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="relative block w-[125%] h-[55px] left-1/2 -translate-x-1/2"
        >
          <path
            className="fill-[#F9F5F2] opacity-33"
            d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
          />
          <path
            className="fill-[#F9F5F2] opacity-66"
            d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
          />
          <path
            className="fill-[#F9F5F2]"
            d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
