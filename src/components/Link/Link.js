import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import styles from "./Link.scss";

export const Link = (props) => {
  const { ariaLabel, children, className, asButton, href, target, color } = props;

  const getStyle = () => {
    const computedStyles = {
    };
    (color ? computedStyles.color = color : computedStyles.color = "#efefef" )

    if (asButton){
      computedStyles.marginTop = '40px';
      computedStyles.border = `1px solid ${color}`;
      computedStyles.background = 'transparent';
      computedStyles.borderRadius = '4px';
      computedStyles.fontWeight = '500';
    }
    return computedStyles;
  }
  return (
    <a
      className={classNames("Link" ,className, { 'Link__Button': asButton })}
      href={href}
      aria-label={`${ariaLabel ? `${ariaLabel}. ` : ""}`}
      style={getStyle()}
      title={typeof children === "string" ? children : undefined}
      target={target}
      rel="noopener noreferrer"
    >
      <span>{children}</span>
    </a>
  );
};
Link.propTypes = {
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  href: PropTypes.string,
  asButton: PropTypes.bool,
  target:PropTypes.string,
  color: PropTypes.string,
};

Link.defaultProps = {
  ariaLabel: null,
  asButton: false,
  children: null,
  className: null,
  href: "#",
  color: null,
  target:"_self",
};

export default withStyles(styles)(Link);
