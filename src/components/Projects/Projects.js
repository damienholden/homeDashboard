import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./Projects.scss";

export const ProjectsComponent = () => {
  return (
    <section className="Projects">
      <h2>Projects</h2>
    </section>
  );
};

export default withStyles(styles)(ProjectsComponent);
