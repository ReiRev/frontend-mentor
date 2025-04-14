"use client";

import { useState } from "react";

export default function FAQ({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) {
  const [open, toggleOpen] = useState<boolean>(defaultOpen);
  return (
    <div className={`transition-all-300`}>
      <div className="flex items-center justify-between ">
        <h2
          className="font-semibold font-workSans text-[16px] md:text-[18px] leading-[19px] md:leading-[30px] hover:text-[#8D22C1] duration-300"
          onClick={() => toggleOpen(!open)}
        >
          {question}
        </h2>
        <div
          className={`transition-transform max-h-[30px] max-w-[30px] min-h-[30px] min-w-[30px] cursor-pointer ${
            open ? "rotate-180" : ""
          }`}
          onClick={() => toggleOpen(!open)}
        >
          <img
            src={open ? "./icon-minus.svg" : "./icon-plus.svg"}
            alt="toggle"
            width={30}
            height={30}
            className="w-full h-full"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <p
        className={`text-[14px] md:text-[16px] ${
          open ? "mt-[24px]" : ""
        } leading-[1.5] block text-purple-600 transition-all duration-300 overflow-hidden ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {answer}
      </p>
    </div>
  );
}
