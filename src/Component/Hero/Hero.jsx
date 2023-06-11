import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* HERO LEFT SECTIONS */}
        <div className="hero-left flexColStart">
          <div className="hero-title">
            <div className="orange-circle"></div>
            <h1>
              Discover <br /> Most Suitable <br /> Property
            </h1>
          </div>
          <div className="hero-discription flexColStart">
            <span className="secondaryText">
              Find a variety of properties that suit you very easilty
            </span>
            <span className="secondaryText">
              Forget all difficulties in finding a residence for you
            </span>
          </div>
          <div className="search-bar flexCenter">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">search</button>
          </div>
          <div className="stats flexCenter">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={88000} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">PREMIUM PRODUCT</span>
            </div>
            <div className="flexColStart stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">HAPPY CUSTOMERS</span>
            </div>
            <div className="flexColStart stat">
              <span>
                <CountUp end={28} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">AWARD WINNINGS</span>
            </div>
          </div>
        </div>
        {/* HERO RIGHT SECTIONS */}
        <div className="hero-right flexCenter">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
