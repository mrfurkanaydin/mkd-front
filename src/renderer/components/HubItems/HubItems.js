import React from "react";
import "./HubItems.css";

function HubItems({ icon, name }) {
  return (
    <div className="hubitem-container">
      <img className="hubitem-image" src={icon} />
      <div>{name}</div>
    </div>
  );
}

export default HubItems;
