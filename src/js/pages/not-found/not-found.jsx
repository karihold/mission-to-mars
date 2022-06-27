import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./not-found.scss";

const NotFound = () => {
  const { pathname } = useLocation();

  return (
    <p className="not-found-text">
      Woops! The page <em>{pathname}</em> does unfortunately, not exist -{" "}
      <Link className="not-found-back-link" to="/">
        Go back to the frontpage
      </Link>
    </p>
  );
};

export default NotFound;
