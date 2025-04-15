import React from "react";

export default function Button({
  children,
  className = "",
}: Readonly<React.PropsWithChildren<{ className?: string }>>) {
  return (
    <a
      href="#"
      className={`bg-dark-gray-blue vertical-align block h-[56px] justify-center rounded-[128px] text-center font-bold leading-[56px] text-white transition-all duration-300 hover:bg-[linear-gradient(180deg,#7755ff_0%,#6943ff_0.01%,#2f2ce9_100%)] ${className}`}
    >
      {children}
    </a>
  );
}
