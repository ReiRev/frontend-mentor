import ScoreCard from "@/components/ScoreCard";
import Button from "@/components/Button";
import Data from "./data.json";

export default function Home() {
  return (
    <div className="">
      <main className="relative min-h-screen bg-white shadow-[0_30px_60px_0_rgba(61,108,236,0.15)] md:mx-auto md:flex md:min-h-0 md:w-[736px] md:rounded-[32px]">
        <div
          className="space-y-[24px] rounded-b-[32px] pb-[40px] pt-[24px] md:w-[368px] md:space-y-[35px] md:rounded-[32px] md:px-[54px] md:pb-[46px] md:pt-[38px]"
          style={{
            background: "var(--gradient-hero)",
          }}
        >
          <h1 className="text-light-lavender block text-center font-bold leading-[23px] md:text-[24px] md:leading-[31px]">
            Your Result
          </h1>
          <div className="from-violet-blue to-persian-blue mx-auto flex h-[140px] w-[140px] flex-col items-center justify-center rounded-full bg-gradient-to-b md:h-[200px] md:w-[200px] md:space-y-[4px]">
            <span className="block text-[56px] font-extrabold text-white md:text-[72px] md:leading-[72px]">76</span>
            <span className="text-light-lavender block text-[16px] font-bold leading-[23px] opacity-50 md:text-[18px]">
              of 100
            </span>
          </div>
          <div className="mx-auto space-y-[8px] px-[55px] text-center md:mt-[-7px] md:space-y-[14px] md:px-0 md:pb-[9px]">
            <h2 className="text-[24px] font-bold leading-[31px] text-white md:text-[32px] md:leading-[42px]">Great</h2>
            <p className="text-light-lavender text-[16px] font-medium leading-[21px] md:text-[18px] md:leading-[23px]">
              You scored higher than 65% of the people who have taken these tests.
            </p>
          </div>
        </div>
        <div className="space-y-[24px] bg-white px-[30px] pt-[24px] md:w-[368px] md:space-y-[28px] md:rounded-r-[32px] md:px-[40px] md:pt-[38px]">
          <h2 className="font-bold leading-[23px] md:text-[24px] md:leading-[31px]">Summary</h2>
          <div className="space-y-[16px]">
            {Data.map(({ category, score, icon }, index) => (
              <ScoreCard category={category} score={score} iconPath={icon} key={index} />
            ))}
          </div>
          <Button className="md:mt-[41px]">Continue</Button>
        </div>
      </main>
      <footer className="mx-auto mt-4 hidden h-full text-center text-xs text-gray-800 md:block">
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="text-[color:hsl(228,45%,44%)] underline"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/ReiRev" className="text-[color:hsl(228,45%,44%)] underline">
          ReiRev
        </a>
        .
      </footer>
    </div>
  );
}
