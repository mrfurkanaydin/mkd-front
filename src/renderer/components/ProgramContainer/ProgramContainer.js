import React from "react";
import Draggable from "react-draggable";
import { FaRegWindowMinimize } from "react-icons/fa";
import { IoIosQrScanner } from "react-icons/io";
import { TfiClose } from "react-icons/tfi";
import { useSelector } from "react-redux";
import "./ProgramContainer.css";
function ProgramContainer({
  children,
  title,
  handleMinimize,
  handleResize,
  handleStop,
  status,
  width,
  height,
  disable,
  bgColor,
  containerWidth="100%",
  containerHeight="100%"
}) {
  const mouse = useSelector((state)=> state.mousePointer)
  return (
    <div>
      {status == 1 && (
        <div handle=".program-header">
          <div className="program-container" style={{backgroundColor:bgColor}}>
            <div className="program-header">
              <div className="program-title">{title}</div>
              <div className="program-header-buttons">
                <button
                  className={`program-header-button ${mouse && "mouse-none"}`}
                  onClick={handleMinimize}
                  style={{ backgroundColor: "#ffc400", marginRight: "5px" }}
                >
                  <FaRegWindowMinimize />
                </button>
                <button
                  className={`program-header-button ${mouse && "mouse-none"}`}
                  onClick={handleResize}
                  disabled={disable}
                  style={{ backgroundColor: "#689f38", marginRight: "5px" }}
                >
                  <IoIosQrScanner />
                </button>
                <button
                  className={`program-header-button ${mouse && "mouse-none"}`}
                  onClick={handleStop}
                  style={{ backgroundColor: "#b71c1c" }}
                >
                  <TfiClose />
                </button>
              </div>
            </div>
            <div className="container" style={{width:containerWidth,height:containerHeight}}>{children}</div>

          </div>
        </div>
      )}
      {status == 3 && (
        <Draggable

        handle=".program-header-resize">
          <div
            className="program-container-resize"
            style={{ width: width, height: height, backgroundColor:bgColor }}
          >
            <div className="program-header-resize">
              <div className="program-title">{title}</div>
              <div className="program-header-buttons">
                <button
                  className={`program-header-button ${mouse && "mouse-none"}`}
                  onClick={handleMinimize}
                  style={{ backgroundColor: "#ffc400", marginRight: "5px"}}
                >
                  <FaRegWindowMinimize />
                </button>
                <button
                  className={`program-header-button ${mouse && "mouse-none"}`}
                  onClick={handleResize}
                  disabled={disable}
                  style={{ backgroundColor: "#689f38", marginRight: "5px" }}
                >
                  <IoIosQrScanner />
                </button>
                <button
                  className={`program-header-button ${mouse && "mouse-none"}`}
                  onClick={handleStop}
                  style={{ backgroundColor: "#b71c1c" }}
                >
                  <TfiClose />
                </button>
              </div>
            </div>
            <div className="container" style={{width:containerWidth,height:containerHeight}}>{children}</div>
          </div>
        </Draggable>
      )}
    </div>
  );
}

export default ProgramContainer;
