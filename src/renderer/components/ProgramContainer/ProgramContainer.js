import React from "react";
import Draggable from "react-draggable";
import { FaRegWindowMinimize } from "react-icons/fa";
import { IoIosQrScanner } from "react-icons/io";
import { TfiClose } from "react-icons/tfi";
import "./ProgramContainer.css";
function ProgramContainer({
  children,
  title,
  handleMinimize,
  handleResize,
  handleStop,
  status
}) {
  return (
    <div>
      {status == 1 && (
        <div handle=".program-header">
          <div className="program-container">
            <div className="program-header">
              <div className="program-title">{title}</div>
              <div className="program-header-buttons">
                <button
                  className="program-header-button"
                  onClick={handleMinimize}
                  style={{ backgroundColor: "#ffc400", marginRight: "5px" }}
                >
                  <FaRegWindowMinimize />
                </button>
                <button
                  className="program-header-button"
                  onClick={handleResize}
                  style={{ backgroundColor: "#689f38", marginRight: "5px" }}
                >
                  <IoIosQrScanner />
                </button>
                <button
                  className="program-header-button"
                  onClick={handleStop}
                  style={{ backgroundColor: "#b71c1c" }}
                >
                  <TfiClose />
                </button>
              </div>
            </div>
            <div className="container">{children}</div>
          </div>
        </div>
      )}
      {status == 3 && (
        <Draggable handle=".program-header-resize">
          <div className="program-container-resize">
            <div className="program-header-resize">
              <div className="program-title">{title}</div>
              <div className="program-header-buttons">
                <button
                  className="program-header-button"
                  onClick={handleMinimize}
                  style={{ backgroundColor: "#ffc400", marginRight: "5px" }}
                >
                  <FaRegWindowMinimize />
                </button>
                <button
                  className="program-header-button"
                  onClick={handleResize}
                  style={{ backgroundColor: "#689f38", marginRight: "5px" }}
                >
                  <IoIosQrScanner />
                </button>
                <button
                  className="program-header-button"
                  onClick={handleStop}
                  style={{ backgroundColor: "#b71c1c" }}
                >
                  <TfiClose />
                </button>
              </div>
            </div>
            <div className="container">{children}</div>
          </div>
        </Draggable>
      )}
    </div>
  );
}

export default ProgramContainer;
