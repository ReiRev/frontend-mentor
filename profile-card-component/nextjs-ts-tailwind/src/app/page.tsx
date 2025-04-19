import bgPatternCard from "./bg-pattern-card.svg";

export default function Home() {
  return (
    <main
      className="mx-auto w-[326px] space-y-[24px] rounded-[15px] bg-white pt-[140px] lg:w-[350px]"
      style={{
        backgroundImage: `url(${bgPatternCard.src})`,
        backgroundSize: "100% 140px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
      }}
    >
      <img
        src="./image-victor.jpg"
        alt=""
        className="mx-auto mt-[-48px] block h-[96px] w-[96px] rounded-full border-[5px] border-white"
      />
      <div className="mx-auto space-y-[8px] text-center">
        <h1 className="flex items-center justify-center space-x-[9px] align-text-top text-[18px] font-bold leading-[23px]">
          <span className="inline">Victor Crest</span>
          <span className="text-dark-gray font-normal">26</span>
        </h1>
        <span className="text-dark-gray block text-[14px] leading-[18px]">London</span>
      </div>
      <div className="border-dark-gray flex items-center justify-center space-x-[38px] border-t-[1px] py-[24px] text-center">
        <div>
          <span className="block px-[2px] pb-[3px] text-[18px] font-bold leading-[22px]">803K</span>
          <span className="text-dark-gray block text-[10px] tracking-[1.5px]">Likes</span>
        </div>
        <div>
          <span className="block px-[2px] pb-[3px] text-[18px] font-bold leading-[22px]">803K</span>
          <span className="text-dark-gray block text-[10px] tracking-[1.5px]">Likes</span>
        </div>
        <div>
          <span className="block px-[2px] pb-[3px] text-[18px] font-bold leading-[22px]">803K</span>
          <span className="text-dark-gray block text-[10px] tracking-[1.5px]">Likes</span>
        </div>
      </div>
    </main>
  );
}
