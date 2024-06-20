"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderButton = ({ containerStyles, btnStyles, IconStyles }) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button className={btnStyles}>
        <PiCaretLeftBold
          className={IconStyles}
          onClick={() => swiper.slidePrev()}
        />
      </button>
      <button className={btnStyles}>
        <PiCaretRightBold
          className={IconStyles}
          onClick={() => swiper.slideNext()}
        />
      </button>
    </div>
  );
};

export default WorkSliderButton;
