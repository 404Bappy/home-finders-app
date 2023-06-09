import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import { SliderSettingsPRO } from "../../utils/sidercommon";
import data from "../../utils/slider.json";

const Residencies = () => {
  return (
    <section className="residencies-wraper">
      <div className="paddings innerWidth residencies-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>

        <Swiper {...SliderSettingsPRO}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="r-card flexColStart">
                <img src={card.image} alt="home" />

                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>

                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-btn">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
