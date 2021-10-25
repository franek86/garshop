import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SwiperSlide } from "swiper/react";
import Subscribe from "../../components/Subscribe/Subscribe";
import Product from "../../components/Product/Product";

import { Container, Section } from "../../Global.styled";
import { Newsletter, SliderImage, SliderCaption } from "./Home.style";

// import { getAllProducts } from "../../actions/productActions";
import { getSliders } from "../../actions/sliderActions";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  const [slidePerView, setSlidePerView] = useState(1);

  const dispatch = useDispatch();
  // const { products } = useSelector((state) => state.productList);
  const { slider } = useSelector((state) => state.silders);

  useEffect(() => {
    // dispatch(getAllProducts());
    dispatch(getSliders());
  }, [dispatch]);

  return (
    <Container>
      <Section
        marginBottom="20px"
        padding="30px 2% 30px 2%"
        bgColor={({ theme }) => theme.colors.yellowColor}
      >
        <Newsletter>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            bibendum condimentum sapien vel efficitur.
          </p>
          <Subscribe />
        </Newsletter>
      </Section>

      <Section>
        <Slider slidePerView={slidePerView}>
          {slider.map((s) => (
            <SwiperSlide key={s.id} className="slide">
              {s.image.map((img) => (
                <SliderImage
                  key={img.id}
                  src={`${img.formats.medium.url}`}
                  alt={img.alternativeText}
                />
              ))}
              <SliderCaption bgColor={s.caption_background}>
                {s.caption}
              </SliderCaption>
            </SwiperSlide>
          ))}
        </Slider>
      </Section>
    </Container>
  );
};

export default Home;
