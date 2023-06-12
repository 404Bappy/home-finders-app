import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-wrapper">
      <div className="paddings innerWidth flexCenter Contact-Container">
        {/* LEFT SIDE OF CONTACT  */}
        <div className="c-left">left</div>

        {/* RIGHT SIDE OF CONTACT  */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contct.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
