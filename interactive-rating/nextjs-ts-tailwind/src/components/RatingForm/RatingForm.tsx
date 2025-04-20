"use client";

import React, { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function RatingCheckbox({
  children,
}: Readonly<{
  children: string;
}>) {
  return (
    <div>
      <input type="radio" id={children} name="rating" value={children} className="peer hidden" />
      <label
        htmlFor={children}
        className="flex h-[42px] w-[42px] appearance-none items-center justify-center rounded-full bg-gray-900 text-[16px] font-bold text-gray-500 duration-300 hover:bg-white hover:text-gray-900 peer-checked:bg-orange-500 peer-checked:text-gray-900 peer-checked:hover:bg-orange-500 md:h-[51px] md:w-[51px]"
      >
        {children}
      </label>
    </div>
  );
}

export default function RatingForm({ className = "" }: Readonly<{ className?: string }>) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      rating: {
        value: string;
      };
    };
    const params = new URLSearchParams(searchParams.toString());
    params.set("rating", target.rating.value);

    router.push(`/result?${params.toString()}`);
  }

  return (
    <Suspense>
      <form
        className={`my-[4.5px] space-y-[24px] md:mx-[7.5px] md:my-[2.5px] md:space-y-[32px] ${className}`}
        onSubmit={onSubmit}
      >
        <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-gray-900 md:h-[48px] md:w-[48px]">
          <img src="./icon-star.svg" alt="star" className="h-[13.33px] w-[13.96px] md:h-[16px] md:w-[16.75px]" />
        </div>
        <div className="space-y-[16px]">
          <h1 className="text-heading text-white">How did we do?</h1>
          <p className="text-paragraph text-gray-500">
            Please let us know how we did with your support request. All feedback is appreciated to help us improve our
            offering!
          </p>
          <div className="flex items-center justify-center space-x-[16px] md:space-x-[24px]">
            {[1, 2, 3, 4, 5].map((num) => (
              <RatingCheckbox key={num}>{num.toString()}</RatingCheckbox>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="inline w-full rounded-[22.5px] bg-orange-500 text-[14px] font-semibold uppercase leading-[45px] tracking-[1.87px] text-black duration-300 hover:bg-white"
        >
          submit
        </button>
      </form>
    </Suspense>
  );
}
