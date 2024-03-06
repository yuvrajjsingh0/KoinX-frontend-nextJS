import React from "react";
import ToolTip from "../common/Tooltip";

const Fundamentals = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <h1 className="text-[20px] font-semibold">Fundamentals</h1>
        <ToolTip />
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-20">
        <div className="flex flex-col flex-grow">
          <div className="flex flex-grow justify-between py-4 items-center borderBottom h-[50px]">
            <p className="font-medium text-[#00000086]">Bitcoin Price</p>
            <p className="text-[14px] font-medium">$16,815.46</p>
          </div>
          <div className="flex flex-grow justify-between py-4 items-center borderBottom h-[50px]">
            <p className="font-medium text-[#00000086]">24 Low / 24h High</p>
            <p className="text-[14px] font-medium">$16,382.07 / $16,874.12</p>
          </div>

          <div className="flex flex-grow justify-between py-4 items-center borderBottom h-[50px]">
            <p className="font-medium text-[#00000086]">7d Low / 7d High</p>
            <p className="text-[14px] font-medium">$16,382.07 / $16,874.12</p>
          </div>
          <div className="flex flex-grow justify-between py-4 items-center borderBottom h-[50px]">
            <p className="font-medium text-[#00000086]">Trading Volume</p>
            <p className="text-[14px] font-medium">$23,249,202,782</p>
          </div>
          <div className="flex flex-grow justify-between py-4 items-center borderBottom h-[50px]">
            <p className="font-medium text-[#00000086]">Market Cap Rank</p>
            <p className="text-[14px] font-medium">#1</p>
          </div>
        </div>

        <div className="flex flex-col flex-grow ">
          <div className="flex flex-grow justify-between py-4 items-center borderBottom h-[50px]">
            <p className="font-medium text-[#00000086]">Market Cap</p>
            <p className="text-[14px] font-medium">$323,507,290,047</p>
          </div>
          <div className="flex flex-grow justify-between py-4 items-center borderBottom h-[50px]">
            <p className="font-medium text-[#00000086]">Market Cap Dominance</p>
            <p className="text-[14px] font-medium">38.343%</p>
          </div>

          <div className="flex flex-grow justify-between py-4 items-center borderBottom h-[50px]">
            <p className="font-medium text-[#00000086]">Volume / Market Cap</p>
            <p className="text-[14px] font-medium">0.0718</p>
          </div>
          <div className="flex flex-grow justify-between py-4 items-center borderBottom h-[50px]">
            <p className="font-medium text-[#00000086]">All-Time High</p>
            <div className="text-end">
              <div className="flex gap-4 justify-end">
                <p className="text-[14px] font-medium">$69,044.77</p>
                <p className="text-[14px] font-medium  text-red-500">-75.6%</p>
              </div>
              <p className="text-[12px]">Nov 10, 2021 (about 1 year)</p>
            </div>
          </div>
          <div className="flex flex-grow justify-between py-4 items-center borderBottom h-[50px]">
            <p className="font-medium text-[#00000086]">All-Time Low</p>
            <div className="text-end">
              <div className="flex gap-4 justify-end">
                <p className="text-[14px] font-medium">$67.81</p>
                <p className="text-[14px] font-medium  text-green-500">
                  24729.1%
                </p>
              </div>
              <p className="text-[12px]">Jul 06, 2013 (over 9 year)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fundamentals;
