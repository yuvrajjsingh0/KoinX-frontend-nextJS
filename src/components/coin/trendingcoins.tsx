"use client";

import React from "react";
import Image from "next/image";
import ProfitIndicator from "@/components/common/ProfitIndicator"
import { useCurrencyData } from "@/util/context/CurrencyDataProvider";
import Coin from "@/util/types/Coin";

const TrendingCoins = () => {
  const { trendingCoinsList } = useCurrencyData();

  return (
    <div className="section-container mt-5 p-4 bg-white flex flex-col gap-4">
      <p className="text-[20px] font-semibold">Trending Coins (24h)</p>
      <div className="flex flex-col gap-6">
        {trendingCoinsList?.slice(0, 3).map((item: Coin, index: number) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex gap-2">
              <Image
                src={item.image}
                width={24}
                height={24}
                alt="bitcoin logo"
              />
              <p className="font-medium">{`${item?.name} (${item.symbol})`}</p>
            </div>
            <ProfitIndicator text={item.changePerc} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCoins;
