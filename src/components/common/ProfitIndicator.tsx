import React from "react";
import ArrowVector from "@/assets/ArrowVector.svg";
import ArrowVectorRed from "@/assets/ArrowVectorRed.svg";

import Image from "next/image";

const ProfitIndicator = ({ text }: any) => {
  const percentage = parseFloat(text);

  const Indicator = () => {
    if (percentage >= 0) {
      return (
        <div className="flex px-2 bg-[#9de7b662] gap-2  items-center  rounded text-[14px] sm:text-[16px] ">
          <div className="min-w-[14px]">
            <Image src={ArrowVector} alt="" className="w-full" />
          </div>
          <p className="text-[#6fb787]">{`${percentage}%`}</p>
        </div>
      );
    } else {
      return (
        <div className="flex px-2 bg-[#ff585862] gap-2  rounded text-[14px] sm:text-[16px] ">
          <Image
            src={ArrowVectorRed}
            width={14}
            alt=""
            className="rotate-180"
          />
          <p className="text-[#e74747]">{`${percentage}%`}</p>
        </div>
      );
    }
  };

  return <Indicator />;
};

export default ProfitIndicator;
