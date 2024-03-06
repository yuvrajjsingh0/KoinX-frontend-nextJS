import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { MdKeyboardArrowRight } from "react-icons/md";
import KeyEvent from "../common/KeyEvent";

const KeyEventsCarousel = () => {
  const sliderContainerRef: any = useRef(null);

  const handleScrollLeft = () => {
    if (sliderContainerRef.current) {
      sliderContainerRef.current.scrollLeft -=
        sliderContainerRef.current.offsetWidth;
    }
  };

  const handleScrollRight = () => {
    if (sliderContainerRef.current) {
      sliderContainerRef.current.scrollLeft +=
        sliderContainerRef.current.offsetWidth;
    }
  };

  return (
    <div
      className="slider-container overflow-x-auto flex relative"
      ref={sliderContainerRef}
    >
      {[1, 2, 3, 4].map((item, index) => (
        <KeyEvent key={index} />
      ))}
      <button
        className="absolute top-0 bottom-0 right-0 flex items-center"
        onClick={handleScrollRight}
      >
        <MdKeyboardArrowRight size={32} />
      </button>
    </div>
  );
};

export default KeyEventsCarousel;