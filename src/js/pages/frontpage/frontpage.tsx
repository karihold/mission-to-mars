import React, { ReactElement } from "react";
import "./frontpage.scss";
import StarryBackground from "@components/starry-background/starry-background";
import NewsletterPrompt from "@components/newsletter-prompt/newsletter-prompt";

const portalTarget = document.querySelector("#render");

const Frontpage = (): ReactElement => {
  return (
    <>
      <StarryBackground />
      <section className="frontpage-title-section">
        <h1 className="frontpage-title-h1">Mission to mars</h1>
        <a href="newsletter" className="frontpage-title-newsletter-button">
          Follow our journey!
        </a>
      </section>
      <section className="frontpage-links">
        <a href="/launch" className="launch-frontpage-link">
          Launch
        </a>
        <a href="/timeline" className="timeline-frontpage-link">
          Timeline
        </a>
        <a href="/lifeonmars" className="lifeonmars-frontpage-link">
          Life on Mars
        </a>
        <NewsletterPrompt />
      </section>
    </>
  );
};

export default Frontpage;
