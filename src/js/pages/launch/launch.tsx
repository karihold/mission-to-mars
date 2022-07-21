import React, { ReactElement } from "react";
import "./launch.scss";

import EarthRoundImage from "@assets/images/earth-round.jpg";
import LaunchImage from "@assets/images/launch.jpg";
import AstronautWhite from "@assets/images/astronaut-white.jpg";

import LaunchDescription from "@components/launch-description/launch-description";

const Launch = (): ReactElement => {
  return (
    <>
      <section className="top-image">
        <div className="top-text">
          <h1 className="top-h1">LAUNCH OVERVIEW</h1>
          <a href="newsletter" className="frontpage-title-newsletter-button">
            Follow our journey!
          </a>
        </div>
      </section>
      <section className="launch-main">
        <LaunchDescription
          nextPlannedMission="CRS-21"
          launchTime="06.12.2020 11:17 o'clock"
          rocket="Falcon 9"
          launchSite="Kennedy Space Center Historic Launch Complex 39A"
          description="SpaceX's 21st ISS resupply mission on behalf of NASA and the first under the CRS-2 contract, this mission brings essential supplies to the International Space Station using the cargo variant of SpaceX's Dragon 2 spacecraft. The external payload for this mission is the Nanoracks Bishop Airlock. Falcon 9 and Dragon launch from LC-39A, Kennedy Space Center and the booster is expected to land on an ASDS. The mission will be complete with return and recovery of the Dragon capsule and down cargo."
          image={EarthRoundImage}
          imageAlt="image of earth from space"
        />
        <LaunchDescription
          nextPlannedMission="Starlink-15 (v1.0)"
          launchTime="06.12.2020 11:17 o'clock"
          rocket="Falcon 9"
          launchSite="Kennedy Space Center Historic Launch Complex 39A"
          description="On Sunday, July 17 at 10:20 a.m. ET, SpaceX launched 53 Starlink satellites from Space Launch Complex 40 (SLC-40) at Cape Canaveral Space Force Station in Florida.
          This was the 13th flight for the Falcon 9 first stage booster supporting this mission, which previously launched Dragon’s first crew demonstration mission, the RADARSAT Constellation Mission, SXM-7, and now 10 Starlink missions."
          image={LaunchImage}
          imageAlt="image of earth from space"
        />
        <LaunchDescription
          nextPlannedMission=""
          launchTime="06.12.2020 11:17 o'clock"
          rocket="Falcon 9"
          launchSite="Kennedy Space Center Historic Launch Complex 39A"
          description="SpaceX's 21st ISS resupply mission on behalf of NASA and the first under the CRS-2 contract, this mission brings essential supplies to the International Space Station using the cargo variant of SpaceX's Dragon 2 spacecraft. The external payload for this mission is the Nanoracks Bishop Airlock. Falcon 9 and Dragon launch from LC-39A, Kennedy Space Center and the booster is expected to land on an ASDS. The mission will be complete with return and recovery of the Dragon capsule and down cargo."
          image={AstronautWhite}
          imageAlt="image of earth from space"
        />
        <a href="/newsletter" className="newsletter-frontpage-link">
          Join our newsletter
        </a>
      </section>
    </>
  );
};

export default Launch;
