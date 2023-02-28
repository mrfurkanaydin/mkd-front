import React, { useState } from "react";
import "./TaskBar.css";
import masterMenu from "../../../assets/mastermenu.png";

function TaskBar() {
  const [showMenu, setShowMenu] = useState(false);
  const handleOpen = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      {showMenu && (
        <div className="taskbar-open">
          <div>taskbar open</div>
        </div>
      )}

      <div className="taskbar-band">
        <div className="taskbar-items">
          <button className={showMenu ? 'taskbar-item-button-active' : "taskbar-item-button"} onClick={handleOpen}>
            <img src={masterMenu} className="mastermenu-style" />
          </button>
        </div>
      </div>
    </>
  );
}

export default TaskBar;
