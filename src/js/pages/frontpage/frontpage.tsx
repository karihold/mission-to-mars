import React, { ReactElement } from "react";
import "./frontpage.scss";
import StarryBackground from "@components/starry-background/starry-background";

const portalTarget = document.querySelector("#render");

const Frontpage = (): ReactElement => {
  return (
    <>
      <StarryBackground />
      <section className="frontpage-title-section">
        <h1 className="frontpage-title-h1">Mission to mars</h1>
        <a href="newsletter" className="frontpage-title-button">
          Follow our journey!
        </a>
      </section>
      <section className="frontpage-links">
        <a href="/launch" className="launch-frontpage-link">
          Launch Overview
        </a>
        <a href="/transportation" className="transportation-frontpage-link">
          Transportation
        </a>
        <a href="/lifeonmars" className="lifeonmars-frontpage-link">
          Life on Mars
        </a>
      </section>
    </>
  );
};

export default Frontpage;
