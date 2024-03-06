import React from "react";
import Image from "next/image";
import BitcoinLogo from "@/assets/Bitcoin.svg.webp";
import ArrowVector from "@/assets/ArrowVector.svg";
import PriceChart from "../common/PriceChart";
import { useCurrencyData } from "@/util/context/CurrencyDataProvider";
import ProfitIndicator from "../common/ProfitIndicator";

const PieChart = () => {
  return (
    <div className="w-[200px] h-[200px]">
      <div
        className="rounded-full relative flex items-center justify-center w-full h-full bg-[orange]"
        style={{
          backgroundImage: "conic-gradient(#0088ff 0% 70%,orange 30% 100%)",
        }}
      >
        <div className=" bg-white w-[70%] h-[67%] rounded-full " />
      </div>
    </div>
  );
};

const Charts = ({ data }:any) => {
  console.log(data);
  const { currencyCode }:any = useCurrencyData();

  return (
    <div className="p-[0px] rounded-md sm:p-[20px] bg-[#EFF2F5] sm:bg-white">
      <div className="flex items-center gap-2 bg-[#EFF2F] sm:bg-white pb-4 sm:py-0">
        <div className="w-[30px] sm:w-[40px]">
          {data?.image && (
            <Image src={data.image} alt="bitcoin logo" width={40} height={40} />
          )}
        </div>
        <p className="font-semibold flex items-center gap-2 text-[18px] sm:text-[24px]">
          {data.name}
          <span className="text-[12px] opacity-[0.5] sm:text-[14px]">
            {data.symbol?.toUpperCase()}
          </span>
        </p>
        <div className="ml-[10px] bg-slate-500 text-white rounded py-1 px-2 text-[14px] font-medium sm:text-[16px] sm:rounded-lg ">
          {`Rank #${data.rank}`}
        </div>
      </div>

      <div className="bg-white px-[20px] rounded-t-lg sm:px-[0] py-">
        <div className="py-4 gap-8 rounded border borderBottom  sm:py-8">
          <div className="flex items-center gap-8">
            <p className="text-[24px] font-semibold sm-2:text-[24px]">
              {`$${data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}`}
            </p>
            <div className="flex items-center gap-3">
              <ProfitIndicator text={data.changePerc} />
              <p className="text-[12px] opacity-[0.5] sm:text-[14px]">(24H)</p>
            </div>
          </div>

          <p>$39,42,343</p>
        </div>

        <div>
          <div className="pt-5 pb-5 flex flex-col  lg:flex-row justify-between lg:items-center">
            <div className="py-2">
              <p className="font-semibold text-[14px] sm:text-[16px]">
                {`${data.name} Price Chart (${currencyCode?.toUpperCase()})`}
              </p>
            </div>
            <div className="flex gap-1 sm:gap-3">
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
    </div>
  );
};

export { Charts, PieChart };
