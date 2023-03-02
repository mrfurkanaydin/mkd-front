import React, { useState } from "react";
import Draggable, { DraggableCore } from "react-draggable";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Read from "renderer/programs/Read/Read";
import "./HubItems.css";
{
  /* <link
  href="https://fonts.googleapis.com/css?family=Poppins"
  rel="stylesheet"
></link>; */
}
function HubItems({ icon, name }) {
  const dispatch = useDispatch();
  const handleStart = () => {
    dispatch({ type: "START_PROGRAM", payload: name});
  };
  return (
      <button className="hubitem-container" onClick={handleStart}>
        <img className="hubitem-image" src={icon} />
        <div className="hubitem-text">{name}</div>
      </button>
  );
}

export default HubItems;
