import React from "react";
import { Link } from "react-router-dom";
import "./HubItems.css";

function HubItems({ icon, name }) {
  return (
    // <Link to={"/login"} className="hubitem-container">
    <div className="hubitem-container">
      <img className="hubitem-image" src={icon} />
      <div className="hubitem-text">{name}</div>
    </div>
    // </Link>
  );
}

export default HubItems;
