import React from "react";
import Image from "next/image";
import Coin from "@/util/types/Coin";

const CoinsCard = ({ item }: {item: Coin}) => {
  return (
    <div className="border p-2 min-w-[200px] max-h-[158px] sm:min-w-[250px] sm:max-h-[158px] sm:p-4 rounded-lg">
      <div className="flex items-center">
        <div className="w-[20px] h-[20px] rounded-full bg-slate-500 overflow-hidden sm:w-[26px] sm:h-[26px]">
          <Image
            alt={item.name}
            src={item.image}
            className="w-full h-full object-cover"
            width={100}
            height={100}
          />
        </div>
        <p className="text-[12px] sm:text-[14px] px-1 font-medium">
          {item.symbol}
        </p>
        {item.changePerc >= 0 ? (
          <p className="px-1 text-[10px] sm:text-[12px] bg-[#9de7b662] text-[#6fb787] rounded">
            {`+${item.changePerc}`}
          </p>
        ) : (
          <p className="px-1 text-[10px] sm:text-[12px] bg-[#ff585862] text-[#e74747] rounded">
            -0.52%
          </p>
        )}
      </div>
      <div className="pt-2">
        <p className="text-[18px] font-medium">
          {item.price.length > 8 ? "$5.52" : item.price}
        </p>
        <div className="w-[80%]">
          <Image
            alt={item.name}
            src={item.sparkline!}
            width={10}
            height={40}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CoinsCard;
