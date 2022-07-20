import React, { ReactElement } from "react";
import "./launch.scss";
import earthRound from "@assets/images/earth-round.jpg";

const Launch = (): ReactElement => {
  return (
    <>
      <section className="top-image">
        <div className="top-text">
          <h1>LAUNCH OVERVIEW</h1>
          <button>Follow our journey!</button>
        </div>
      </section>
      <section className="launch-main">
        <article className="launch-mission-article">
          <h2 className="launch-mission-h2">Next Planned Mission: CRS-21</h2>
          <h3 className="launch-mission-h3">Launch time: 06.12.2020 11:17 o'clock</h3>
          <p className="launch-mission-p">Launch site: Kennedy Space Center Historic Launch Complex 39A Description</p>
          <p className="launch-mission-p">
            SpaceX's 21st ISS resupply mission on behalf of NASA and the first under the CRS-2 contract, this mission
            brings essential supplies to the International Space Station using the cargo variant of SpaceX's Dragon 2
            spacecraft. The external payload for this mission is the Nanoracks Bishop Airlock. Falcon 9 and Dragon
            launch from LC-39A, Kennedy Space Center and the booster is expected to land on an ASDS. The mission will be
            complete with return and recovery of the Dragon capsule and down cargo.
          </p>
          <img className="launch-mission-img" src={earthRound} />
        </article>
      </section>
    </>
  );
};

export default Launch;
