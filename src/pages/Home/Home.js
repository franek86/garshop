import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import Subscribe from "../../components/Subscribe/Subscribe";
import Card from "../../components/Card/Card";

import { Container, MainHeading, Section } from "../../Global.styled";
import { Newsletter, SliderImage, SliderCaption } from "./Home.style";

import { getAllProducts } from "../../actions/productActions";
import { getSliders } from "../../actions/sliderActions";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  const dispatch = useDispatch();
  const { new_collection } = useSelector((state) => state.productList);
  const { archive_products } = useSelector((state) => state.productList);
  const { slider } = useSelector((state) => state.silders);

  useEffect(() => {
    dispatch(getSliders());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllProducts());
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
        <Slider slidePerView={1}>
          {slider.map((s) => (
            <SwiperSlide key={s._id} className="slide">
              <Link to={`/products/${s._id}`}>
                <SliderImage
                  key={s._id}
                  src={s.image.formats.medium.url}
                  alt={s.image.alternativeText}
                />

                <SliderCaption bgColor={s.caption_background}>
                  {s.caption}
                </SliderCaption>
              </Link>
            </SwiperSlide>
          ))}
        </Slider>
      </Section>

      <Section>
        <MainHeading>New arrivals</MainHeading>

        <Slider
          slidePerView={1}
          breakpointsRule={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {new_collection.map((product) => (
            <SwiperSlide key={product._id} className="slide">
              <Card product={product} />
            </SwiperSlide>
          ))}
        </Slider>
      </Section>

      <Section>
        <MainHeading>Gar archive</MainHeading>

        <Slider
          slidePerView={1}
          breakpointsRule={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {archive_products.map((product) => (
            <SwiperSlide key={product._id} className="slide">
              <Card product={product} />
            </SwiperSlide>
          ))}
        </Slider>
      </Section>
    </Container>
  );
};

export default Home;
