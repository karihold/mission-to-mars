import React, { ReactElement } from "react";
import "./lifeonmars.scss";
import AstronautBlack from "@assets/images/Astronaut-black.jpg";

const LifeOnMars = (): ReactElement => {
  return (
    <>
      <section className="top-image">
        <div className="top-text">
          <h1 className="top-h1">LIFE ON MARS</h1>
          <a href="newsletter" className="frontpage-title-newsletter-button">
            Follow our journey!
          </a>
        </div>
      </section>
      <section className="lifeonmars-main">
        <div className="lifeonmars-text-section">
          <h2 className="lifeonmars-h2">Why mars?</h2>
          <p className="lifeonmars-p">
            At an average distance of 140 million miles, Mars is one of Earth's closest habitable neighbors. Mars is
            about half again as far from the Sun as Earth is, so it still has decent sunlight. It is a little cold, but
            we can warm it up. Its atmosphere is primarily CO2 with some nitrogen and argon and a few other trace
            elements, which means that we can grow plants on Mars just by compressing the atmosphere. Gravity on Mars is
            about 38% of that of Earth, so you would be able to lift heavy things and bound around. Furthermore, the day
            is remarkably close to that of Earth.
          </p>
        </div>
        <img className="lifeonmars-img" src={AstronautBlack} alt="astronaut in black and white" />
      </section>
      <section className="lifeonmars-newsletter-section">
        <a href="/newsletter" className="newsletter-frontpage-link">
          <span>Join our </span>
          <span>newsletter</span>
        </a>
      </section>
    </>
  );
};

export default LifeOnMars;
