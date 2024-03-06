import { useCurrencyData } from "@/util/context/CurrencyDataProvider";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CoinsCard from "@/components/common/CoinsCard";
import Coin from "@/util/types/Coin";

const AllCoins = () => {
  const { trendingCoinsList } = useCurrencyData();

  return (
    <div className="p-4 bg-white flex flex-col gap-4 xl:w-[100vw] xl:mt-12 xl:absolute xl:left-0 xl:p-[50px]">
      <div className="flex flex-col gap-1 sm:gap-4">
        <p className="text-[22px] font-semibold">You May Also Like</p>
        <div className="w-full flex gap-2 overflow-x-scroll">
          {trendingCoinsList?.map((item: Coin, index: number) => {
            return <CoinsCard item={item} key={index} />;
          })}
        </div>
      </div>
      <div className="flex flex-col gap-1 sm:gap-4">
        <p className="text-[22px] font-semibold">Trending Coins</p>
        <div className="w-full flex gap-2 overflow-x-auto">
          {trendingCoinsList?.map((item: Coin, index: number) => {
            return <CoinsCard item={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AllCoins;
