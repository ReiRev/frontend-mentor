"use client";

import { useSearchParams } from "next/navigation";

export default function ResultPage() {
  const searchParams = useSearchParams();
  const rating = searchParams.get("rating");

  return (
    <div className="px-[24px] py-[36px] text-center md:px-[32px] md:py-[44.5px]">
      <div className="flex flex-col items-center justify-center space-y-[24px] md:space-y-[32px]">
        <img
          src="./illustration-thank-you.svg"
          alt="thank you"
          className="h-[96px] w-[144px] md:h-[108px] md:w-[162px]"
        />
        <div className="flex h-[32px] w-fit items-center rounded-[22.5px] bg-gray-900 px-[16px] text-[14px] text-orange-500 md:text-[15px]">
          You selected {rating} out of 5
        </div>
        <div className="space-y-[16px]">
          <h1 className="text-heading">Thank you!</h1>
          <p className="text-paragraph text-gray-500">
            We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in
            touch!
          </p>
        </div>
      </div>
    </div>
  );
}
