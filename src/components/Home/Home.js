import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./Home.scss";

import Link from "../Link/Link";
import Icon from "../Icon/Icon";

export const HomeComponent = () => {
  return (
    <section className="Home">
      <h2>My name is Damien Holden and I'm a Software Engineer</h2>
      <p>I specialise in frontend development</p>
      <div className="Home__Link">
        <Link children="See my projects" asButton href="/projects" color="#ffffff"/>
        <Link children="Contact Me" asButton href="/contact" color="#ffffff" />
      </div>
      <div className="Home__Social">
      <Link href="https://www.linkedin.com/in/damienholden/" target="_blank" color="#ffffff">
        <Icon icon="linkedin"/>
      </Link>
      <Link href="https://github.com/damienholden" target="_blank" color="#ffffff">
        <Icon icon="github"/>
      </Link>
      </div>
    </section>
  );
};

export default withStyles(styles)(HomeComponent);
