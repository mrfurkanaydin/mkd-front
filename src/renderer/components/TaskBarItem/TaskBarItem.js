import React from "react";
import { useDispatch } from "react-redux";
import "./TaskBarItem.css";
function TaskBarItem({ name, icon, status }) {
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch({ type: "START_PROGRAM", payload: name });
  };

  return (
    <div>
      <button className={status == 1 ? "taskbar-item-active" : "taskbar-item"} onClick={handleOpen}>
        <img src={icon} className="taskbar-item-img" />
      </button>
    </div>
  );
}

export default TaskBarItem;
