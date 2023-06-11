import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* HERO LEFT SECTIONS */}
        <div className="hero-left">
          <div className="hero-title">
            <h1>
              Discover <br /> Most Suitable <br /> Property
            </h1>
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
