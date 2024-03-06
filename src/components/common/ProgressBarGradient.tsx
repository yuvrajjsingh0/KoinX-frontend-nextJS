import React from "react";
import Image from "next/image";
import ArrowVectorBlack from "@/assets/ArrowVectorBlack.svg";

const ProgressBarGradient = () => {
  return (
    <div className="relative flex-grow h-[6px] bg-gradient-heat mx-8 rounded-lg">
      <div className="absolute flex flex-col top-[6px] gap-2 left-[60%] items-center">
        <Image src={ArrowVectorBlack} alt="|" width={12} height={12} />
        <p className="text-[14px] text-[#000000cc] ">$48,637.83</p>
      </div>
    </div>
  );
};

export default ProgressBarGradient;
