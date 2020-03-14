import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Badge.style.css";

export default function Badge({ active }) {
  // <div className={`badge ${active ? 'active' : ''}`}>
  return (
    <div className={classNames("badge", { active })}>
      {active ? "active" : "inactive"}
    </div>
  );
}

Badge.propTypes = {
  active: PropTypes.bool.isRequired
};
