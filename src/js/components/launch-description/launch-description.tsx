import React, { ReactElement } from "react";

import "./launch-description.scss";

interface LaunchDescriptionProps {
  nextPlannedMission: string;
  launchTime: string;
  rocket: string;
  launchSite: string;
  description: string;
  image: string;
  imageAlt: string;
}

const LaunchDescription = ({
  nextPlannedMission,
  launchTime,
  rocket,
  launchSite,
  description,
  image,
  imageAlt,
}: LaunchDescriptionProps) => {
  return (
    <section className="launch-main">
      <article className="launch-mission-article">
        <div className="launch-mission-text-div">
          <h2 className="launch-mission-title">Next Planned Mission:{nextPlannedMission}</h2>
          <h3 className="launch-mission-subheader">Launch time: {launchTime}</h3>
          <p className="launchmission-subheader">Rocket: {rocket}</p>
          <p className="launch-mission-p">Launch site: {launchSite}</p>
          <p className="launch-mission-p">{description}</p>
        </div>
        <img className="launch-mission-img" src={image} alt={imageAlt} />
      </article>
    </section>
  );
};

export default LaunchDescription;
