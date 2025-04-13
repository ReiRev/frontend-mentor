import Divider from "@/components/Divider";
import FAQ from "@/components/FAQ";
import React from "react";

export default function Home() {
  const faqItems = [
    {
      question: "What is Frontend Mentor, and how will it help me?",
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building.",
    },
    {
      question: "Is Frontend Mentor free?",
      answer:
        "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    },
    {
      question: "Can I use Frontend Mentor projects in my portfolio?",
      answer:
        "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    },
    {
      question: "How can I get help if I'm stuck on a challenge?",
      answer:
        "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
  ];
  return (
    <>
      <div className="w-full md:w-[600px] mt-[130px] md:mt-[167.5px] mx-auto p-[24px] md:p-[40px] space-y-[24px] md:space-y-[32px] rounded-[8px] md:rounded-[16px] bg-white shadow-[0_32px_56px_rgba(80,0,118,0.1)]">
        <div className="space-x-[24px] flex items-center">
          <img
            src="./icon-star.svg"
            alt="star"
            width={24}
            height={24}
            className="h-[24px] w-[24px] md:h-[40px] md:w-[40px]"
          />
          <h1 className="font-bold text-[32px] leading-[38px] text-purple-950 md:text-[56px] md:leading-[66px]">
            FAQs
          </h1>
        </div>
        <Divider color="white" className="md:hidden" />
        <div className="space-y-[20px] md:space-y-[24px]">
          {faqItems.map(({ answer, question }, index) => (
            <React.Fragment key={index}>
              <FAQ answer={answer} question={question} defaultOpen={index === 0} />
              {index !== faqItems.length - 1 && <Divider color="purple-100" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
