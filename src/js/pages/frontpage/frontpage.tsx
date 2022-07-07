import React, { ReactElement } from "react";

import "./frontpage.scss";

import StarryBackground from "@components/starry-background/starry-background";

const portalTarget = document.querySelector("#render");

const Frontpage = (): ReactElement => {
  return (
    <>
      <StarryBackground />
      <div className="frontpage-title-div">
        <h1 className="frontpage-title-h1">Mission to mars</h1>
        <button className="frontpage-title-button">Follow our journey!</button>
      </div>
    </>
  );
};

export default Frontpage;
