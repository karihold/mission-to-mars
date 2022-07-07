import React, { ReactElement, useEffect } from "react";
import { createPortal } from "react-dom";

import "./starry-background.scss";

const portalTarget = document.querySelector("#render");

function createStarryBackgroundContainer(): HTMLDivElement {
  const container = document.createElement("div");
  container.className = "starry-background";

  return container;
}

const StarryBackground = (): ReactElement => {
  const starryBackgroundContainer = createStarryBackgroundContainer();

  useEffect(() => {
    portalTarget?.prepend(starryBackgroundContainer);

    return () => {
      portalTarget?.removeChild(starryBackgroundContainer);
    };
  }, []);

  return createPortal(
    <div className="starry-background">
      <div className="shooting-star-container">
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>
      <div className="shooting-star-container">
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>
      <div className="shooting-star-container">
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>
      <div className="stars"></div>
      <div className="twinkle-mask"></div>
      <div className="twinkle-mask-2"></div>
      <div className="clouds"></div>

      <div className="fog-container">
        <div className="fog"></div>
      </div>
    </div>,
    starryBackgroundContainer
  );
};

export default StarryBackground;
