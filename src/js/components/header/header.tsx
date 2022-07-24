import React, { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";

const Header = (): ReactElement => {
  return (
    <header className="header">
      <nav className="header-nav">
        <ul className="nav-ul">
          <li className="nav-item">
            <NavLink className="nav-item-link" to="/">
              HOME
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-item-link" to="/launch">
              LAUNCH
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-item-link" to="/timeline">
              TIMELINE
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-item-link" to="/lifeonmars">
              LIFE ON MARS
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
