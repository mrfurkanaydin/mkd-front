import React from "react";
import Draggable from "react-draggable";
import { GrClose } from "react-icons/gr";
import { FaRegWindowMinimize } from "react-icons/fa";
import { IoIosQrScanner } from "react-icons/io";
import { TfiClose } from "react-icons/tfi";

import { useDispatch, useSelector } from "react-redux";
import "./Read.css";
import "../Programs.css";

function Read() {
  const read = useSelector((state) => state.read);
  const dispatch = useDispatch();
  const handleStop = () => {
    dispatch({ type: "STOP_PROGRAM", payload: "Okuma" });
  };
  const handleMinimize = () => {
    dispatch({ type: "MINIMIZE_PROGRAM", payload: "Okuma" });
  };
  return (
    <>
      {read == 1 && (
        <div handle=".program-header">
          <div className="program-container">
            <div className="program-header">
              <div className="program-title">
              Okuma Programı
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
              <div className="read-text">Read</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Read;
