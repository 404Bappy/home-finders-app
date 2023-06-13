import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <sapn className="primaryText">Get Started With Homyz</sapn>
          <sapn className="secondaryText">
            Subscribe and find super attractive price quotes from us.
            <br /> Find your residence soon
          </sapn>

          <button className="button">
            <a href="mailto:mbappy254@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
