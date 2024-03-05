import React from "react";
import ProgressBarGradient from "../ui/ProgressBarGradient";
import Fundamentals from "./Fundamentals";

const Performance = () => {
  return (
    <div className="container flex flex-col gap-10">
      <div className="flex flex-col gap-8">
        <p className="text-[24px] font-semibold">Performance</p>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2 items-start">
            <p className="text-[14px] text-[#00000095]">Today's Low</p>
            <p className="text-[18px] text-[#000000c8] font-medium">
              46,930.22
            </p>
          </div>
          <ProgressBarGradient />
          <div className="flex flex-col gap-2 items-end">
            <p className="text-[14px] text-[#00000095]">Today's High</p>
            <p className="text-[18px] text-[#000000c8] font-medium">
              49,343.83
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2 items-start">
            <p className="text-[14px] text-[#00000095]">52W Low</p>
            <p className="text-[18px] text-[#000000c8] font-medium">
              16,930.22
            </p>
          </div>
          <div className="flex-grow h-[6px] bg-gradient-heat mx-8 rounded-lg" />
          <div className="flex flex-col gap-2 items-end">
            <p className="text-[14px] text-[#00000095]">52W High</p>
            <p className="text-[18px] text-[#000000c8] font-medium">
              49,743.83
            </p>
          </div>
        </div>
      </div>

      <Fundamentals />
    </div>
  );
};

export default Performance;
