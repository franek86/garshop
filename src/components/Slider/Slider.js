import React, { useRef } from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper } from "swiper/react";

// swiper bundle styles
import "swiper/swiper-bundle.min.css";
import "swiper/components/effect-fade/effect-fade.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import { SwiperNavigationWrapper } from "./Slider.style";
SwiperCore.use([Navigation, Pagination, Autoplay]);

const Slider = ({ slidePerView, children }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = React.useRef(null);
  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={slidePerView}
        navigation={{
          prevEl: prevRef.current ? prevRef.current : undefined,
          nextEl: nextRef.current ? nextRef.current : undefined,
        }}
        pagination={{ el: paginationRef.current, clickable: true }}
        autoplay={{ delay: 8000 }}
        speed={1000}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.update();
        }}
      >
        {children}
      </Swiper>
      <SwiperNavigationWrapper>
        <div className="pagination-container">
          <div ref={paginationRef} className="swiper-pagination"></div>
        </div>
        <div className="navigation-container">
          <div ref={prevRef} className="swiper-button-prev"></div>
          <div ref={nextRef} className="swiper-button-next"></div>
        </div>
      </SwiperNavigationWrapper>
    </>
  );
};

export default Slider;
