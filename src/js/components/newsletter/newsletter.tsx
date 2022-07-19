import React, { ReactElement } from "react";
import "./newsletter.scss";

const Timeline = (): ReactElement => {
  return (
    <>
      <form className="newsletter-form">
        <div className="newsletter-container">
          <h1 className="newsletter-headline">Subscribe to our Newsletter</h1>
          <p className="newsletter-text">No spam, we promise</p>
        </div>

        <div className="newsletter-container" style={{ backgroundColor: "white" }}>
          <input type="text" placeholder="Name" name="name" required className="input-text-news" />
          <input type="text" placeholder="Email address" name="mail" required className="input-text-news" />
          <label className="news-label">
            <input type="checkbox" checked={true} name="subscribe" className="input-checkbox-news" />
            Weekly Newsletter
          </label>
          <label className="news-label">
            <input type="checkbox" checked={true} name="subscribe" className="input-checkbox-news" /> Agree to terms and
            conditions
          </label>
        </div>
        <div className="newsletter-button-container">
          <input type="submit" value="Subscribe" className="input-submit-news" />
          <input type="submit" value="No Thanks" className="input-submit-news" />
        </div>
      </form>
    </>
  );
};

export default Timeline;
