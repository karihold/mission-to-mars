import React, { ReactElement } from "react";
import "./timeline.scss";

const Timeline = (): ReactElement => {
  return (
    <>
      <section className="top-image">
        <div className="top-text">
          <h1 className="top-h1">TIMELINE</h1>
          <a href="newsletter" className="frontpage-title-newsletter-button">
            Follow our journey!
          </a>
        </div>
      </section>
      <section className="timeline-section">
        <ul className="timeline">
          <li className="timeline-item">
            <h2 className="timeline-item-title">2016: SpaceX announced plans to fly its earliest missions to Mars.</h2>
            <p className="timeline-item-text">
              SpaceX announced plans to fly its earliest missions to Mars using its Falcon Heavy launch vehicle prior to
              the completion, and first launch, of any ITS vehicle
            </p>
          </li>
          <li className="timeline-item">
            <h2 className="timeline-item-title">2016: Colonization of mars.</h2>
            <p className="timeline-item-text">
              Since 2016, SpaceX publicly announced a comprehensive vision to begin the colonization of Mars, by
              proposing to develop a high-capacity timeline infrastructure.
            </p>
          </li>
          <li className="timeline-item">
            <h2 className="timeline-item-title">2017: Updated vehicle design.</h2>
            <p className="timeline-item-text">
              On 29 September 2017, Elon Musk announced an updated vehicle design for the Mars mission at the
              International Astronautical Congress. The replacement vehicle for this mission is called BFR (Big Falcon
              Rocket). BFR will provide the capability for on-orbit activity like satellite delivery, servicing the
              International Space Station, Moon missions, as well as Mars missions.
            </p>
          </li>
          <li className="timeline-item">
            <h2 className="timeline-item-title">2019: Booster tests and orbital testing.</h2>
            <p className="timeline-item-text">
              {" "}
              The BFR is currently under construction, and is planned to start sub-orbital flight testing in 2019.
            </p>
          </li>
          <li className="timeline-item">
            <h2 className="timeline-item-title">2020: First cargo mission to mars.</h2>
            <p className="timeline-item-text">
              The objectives for the first mission will be to confirm water resources, identify hazards, and put in
              place initial power, mining, and life support infrastructure.
            </p>
          </li>
          <li className="timeline-item">
            <h2 className="timeline-item-title">2023: Private lunar mission.</h2>
            <p className="timeline-item-text">
              On September 17, 2018, SpaceX announced fashion innovator and globally recognized art curator Yusaku
              Maezawa will be the company’s first private passenger to fly around the Moon in 2023.
            </p>
          </li>
          <li className="timeline-item">
            <h2 className="timeline-item-title">2024: Second mission: both cargo and crew.</h2>
            <p className="timeline-item-text">
              Primary objectives of building a propellant depot and preparing for future crew flights. The ships from
              these initial missions will also serve as the beginnings of the first Mars base, from which we can build a
              thriving city and eventually a self-sustaining civilization on Mars.
            </p>
          </li>
        </ul>
      </section>
      <section className="timeline-newsletter-section">
        <a href="/newsletter" className="newsletter-frontpage-link">
          <span>Join our </span>
          <span>newsletter</span>
        </a>
      </section>
    </>
  );
};

export default Timeline;
