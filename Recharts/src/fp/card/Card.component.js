import React from "react";
import PropTypes from "prop-types";
import Badge from "../Badge/Badge.component";
import "./Card.style.css";

export default function Card({ title }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <Badge active />
    </div>
  );
}
Card.propTypes = {
  title: PropTypes.string.isRequired
};
