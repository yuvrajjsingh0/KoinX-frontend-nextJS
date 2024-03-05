import React from "react";
import Image from "next/image";
import BitcoinLogo from "@/assets/Bitcoin.svg.webp";
import ArrowVector from "@/assets/ArrowVector.svg";
import PriceChart from "../common/PriceChart";

const Charts = () => {
  return (
    <div className="container">
      <div className="flex items-center gap-2">
        <div className="w-[40px]">
          <Image
            src={BitcoinLogo}
            //
            alt="bitcoin logo"
          />
        </div>
        <p className="text-[24px] font-semibold flex items-center gap-2">
          Bitcoin
          <span className="text-[14px] opacity-[0.5]">BTC</span>
        </p>
        <div className="ml-[10px] bg-slate-400 text-white rounded-lg p-2">
          Rank #1
        </div>
      </div>

      <div className="py-8 gap-8 rounded border borderBottom">
        <div className="flex items-center gap-8">
          <p className="text-[24px] font-semibold">$46,953.04</p>
          <div className="flex items-center gap-3">
            <div className="flex px-2 bg-[#9de7b67d] gap-2  rounded">
              <Image src={ArrowVector} width={14} alt="" />
              <p className="text-[#6fb787]">2.51%</p>
            </div>
            <p className="text-[14px] opacity-[0.5]">(24H)</p>
          </div>
        </div>

        <p>$39,42,343</p>
      </div>

      <div>
        <div className="pt-5 pb-5 flex flex-col lg:flex-row justify-between lg:items-center">
          <div className="py-2">
            <p className="font-semibold ">Bitcoin Price Chart (USD)</p>
          </div>
          <div className="flex gap-3">
            <button className="daysButton">1H</button>
            <button className="daysButton">24H</button>
            <button className="daysButton">7D</button>
            <button className="daysButton">1M</button>
            <button className="daysButton">3M</button>
            <button className="daysButton">6M</button>
            <button className="daysButton">1Y</button>
            <button className="daysButton">ALL</button>
          </div>
        </div>
        <div className="h-[50vh]">
          <PriceChart />
        </div>
      </div>
    </div>
  );
};

export default Charts;
