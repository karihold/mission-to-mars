import "./timeline.scss";
import React from "react";

const Timeline = () => {
  return (
    <>
      <form class="newsletter-form">
        <div class="newsletter-container">
          <h1 class="newsletter-headline">Subscribe to our Newsletter</h1>
          <p class="newsletter-text">No spam, we promise</p>
        </div>

        <div class="newsletter-container" style="background-color:white">
          <input type="text" placeholder="Name" name="name" required class="input-text-news" />
          <input type="text" placeholder="Email address" name="mail" required class="input-text-news" />
          <label class="news-label">
            <input type="checkbox" checked="checked" name="subscribe" class="input-checkbox-news" />
            Weekly Newsletter
          </label>
          <label class="news-label">
            <input type="checkbox" checked="checked" name="subscribe" class="input-checkbox-news" /> Agree to terms and
            conditions
          </label>
        </div>
        <div class="newsletter-button-container">
          <input type="submit" value="Subscribe" class="input-submit-news" />
          <input type="submit" value="No Thanks" class="input-submit-news" />
        </div>
      </form>
    </>
  );
};

export default Timeline;
