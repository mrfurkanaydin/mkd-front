import React from "react";
import styles from "./TaskManagerItem.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";

function TaskManagerItem({ name, type }) {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch({ type: "STOP_PROGRAM", payload: type });
  };
  return (
    <div className="TaskManagerContainer">
      <h1>{name}</h1>
      <AiFillCloseCircle onClick={handleClose} size={30} />
    </div>
  );
}

export default TaskManagerItem;
