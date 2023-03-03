import React from "react";
import Draggable from "react-draggable";
import { GrClose } from "react-icons/gr";
import { FaRegWindowMinimize } from "react-icons/fa";
import { IoIosQrScanner } from "react-icons/io";
import { TfiClose } from "react-icons/tfi";

import { useDispatch, useSelector } from "react-redux";
import "./Write.css";
import "../Programs.css";

function Draw() {
  const draw = useSelector((state) => state.draw);
  const dispatch = useDispatch();
  const handleStop = () => {
    console.log("stop");
    dispatch({ type: "STOP_PROGRAM", payload: "Yazma" });
  };
  const handleMinimize = () => {
    console.log("minimize");
    dispatch({ type: "MINIMIZE_PROGRAM", payload: "Yazma" });
  };
  return (
    <>
      {draw == 1 && (
        <div handle=".program-header">
          <div className="program-container">
            <div className="program-header">
              <div className="program-title">
              Yazma Programı
              </div>
              <div className="program-header-buttons">
                <button
                  className="program-header-button"
                  onClick={handleMinimize}
                >
                  <FaRegWindowMinimize />
                </button>
                <button className="program-header-button">
                  <IoIosQrScanner />
                </button>
                <button className="program-header-button" onClick={handleStop}>
                  <TfiClose />
                </button>
              </div>
            </div>
            <div className="read-container">
              <div className="read-text">Draw</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Draw
