import React from "react";
import { NavLink } from "react-router-dom";

const NavigationLink = ({ path, exact, name }) => (
  <li>
    <NavLink
      to={path}
      exact={exact}
      className="navagationLink"
      activeClassName="activeLink"
    >
      {name}
    </NavLink>
  </li>
);

export default NavigationLink;
