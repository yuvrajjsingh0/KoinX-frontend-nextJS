import { useCurrencyData } from "@/util/context/CurrencyDataProvider";
import React, { useEffect, useState } from "react";
import CoinsCard from "@/components/common/CoinsCard";
import Coin from "@/util/types/Coin";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const AllCoins = () => {
  const { trendingCoinsList } = useCurrencyData();
  const slider1: any = React.useRef(null);
  const slider2: any = React.useRef(null);

  function NextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "none",
          background: "red",
        }}
        onClick={onClick}
      />
    );
  }

  function PrevArrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "green" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="p-4 bg-white flex flex-col gap-4 xl:w-[100vw] xl:mt-12 xl:absolute xl:left-0 xl:p-[50px]">
      <div className="flex flex-col gap-1 sm:gap-4">
        <p className="text-[22px] font-semibold">You May Also Like</p>

        <div className="slider-container relative">
          <Slider ref={slider1} {...settings}>
            {trendingCoinsList?.map((item: Coin, index: number) => {
              return <CoinsCard item={item} key={index} />;
            })}
          </Slider>
          <button
            onClick={() => slider1?.current?.slickNext()}
            className=" absolute bg-[white] w-[30px] h-[30px] border rounded-full flex items-center justify-center top-[35%] right-0"
          >
            <MdKeyboardArrowRight className="scale-150" />
          </button>
          <button
            onClick={() => slider1?.current?.slickPrev()}
            className=" absolute bg-[white] w-[30px] h-[30px] border rounded-full xl:flex items-center justify-center top-[35%] left-[-2%] hidden"
          >
            <MdKeyboardArrowLeft className="scale-150" />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-1 sm:gap-4">
        <p className="text-[22px] font-semibold">You May Also Like</p>

        <div className="slider-container relative">
          <Slider ref={slider2} {...settings}>
            {trendingCoinsList?.map((item: Coin, index: number) => {
              return <CoinsCard item={item} key={index} />;
            })}
          </Slider>
          <button
            onClick={() => slider2?.current?.slickNext()}
            className=" absolute w-[30px] bg-[white] h-[30px] border rounded-full flex items-center justify-center top-[35%] right-0"
          >
            <MdKeyboardArrowRight className="scale-150" />
          </button>
          <button
            onClick={() => slider2?.current?.slickPrev()}
            className=" absolute w-[30px] bg-[white] h-[30px] border rounded-full xl:flex items-center justify-center top-[35%] left-[-2%] hidden "
          >
            <MdKeyboardArrowLeft className="scale-150" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default AllCoins;