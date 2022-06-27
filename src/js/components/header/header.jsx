import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <ul className="nav-ul">
          <li className="nav-item">
            <Link className="nav-item-link" to="/">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-item-link" to="/launch">
              LAUNCH
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-item-link" to="/timeline">
              TIMELINE
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-item-link" to="/lifeonmars">
              LIFE ON MARS
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
