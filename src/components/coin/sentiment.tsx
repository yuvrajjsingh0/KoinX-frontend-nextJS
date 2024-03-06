import React from "react";
import KeyEventsCarousel from "./KeyEventsCarousel";
import ToolTip from "../common/Tooltip";

const Sentiment = () => {
  return (
    <div className="container mt-5">
      <div className="">
        <p className="text-[24px] font-semibold">Sentiment</p>

        <div className="py-4">
          <div className="flex gap-4 items-center">
            <h1 className="text-[18px] font-semibold text-[#000000b7]">
              Key Events
            </h1>
            <ToolTip />
          </div>
        </div>

        <KeyEventsCarousel />

        <div className="mt-5 flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <h1 className="text-[18px] font-semibold text-[#000000b7]">
              Analyst Estimates
            </h1>
            <ToolTip />
          </div>

          <div className="flex items-center gap-12">
            <div className="w-[120px] h-[120px] bg-[#aced963d] rounded-full flex items-center justify-center text-[30px] text-[#379e15bc] ">
              76%
            </div>

            <div className="w-[85%] flex flex-col gap-2">
              <div className="flex gap-4 ">
                <p className="text-[#00000087] items-center w-[30px]">Buy</p>
                <div className="w-[100%] flex items-center gap-2">
                  <div className=" bg-[#5dab5d] h-[10px] w-[76%] rounded" />
                  <p className="text-[#00000087]">76%</p>
                </div>
              </div>
              <div className="flex gap-4 ">
                <p className="text-[#00000087] items-center w-[30px]">Hold</p>
                <div className="w-[100%] flex items-center gap-2">
                  <div className="w-[8%] bg-[#80808084] h-[10px] rounded" />
                  <p className="text-[#00000087]">8%</p>
                </div>
              </div>
              <div className="flex gap-4 ">
                <p className="text-[#00000087] items-center w-[30px]">Sell</p>
                <div className="w-[100%] flex items-center gap-2">
                  <div className="w-[16%] bg-[#e14242] h-[10px] rounded" />
                  <p className="text-[#00000087]">16%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
