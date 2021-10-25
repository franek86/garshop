import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper } from "swiper/react";

// swiper bundle styles
import "swiper/swiper-bundle.min.css";

// swiper core styles
import "swiper/swiper.min.css";

// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

const Slider = ({ slidePerView, children }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={slidePerView}
      navigation={true}
      autoplay={{ delay: 1000 }}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {children}
    </Swiper>
  );
};

export default Slider;
