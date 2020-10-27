import React from "react";
import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

import styles from "./Header.scss";

export const HeaderComponent = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/projects" activeClassName="active">
              Projects
            </NavLink>
          </li>
          {/* <li>
            <NavLink exact to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default withStyles(styles)(HeaderComponent);
