import React from "react";
import Draggable from "react-draggable";
import { GrClose } from "react-icons/gr";
import { FaRegWindowMinimize } from "react-icons/fa";
import { IoIosQrScanner } from "react-icons/io";
import { TfiClose } from "react-icons/tfi";

import { useDispatch, useSelector } from "react-redux";

import "../Programs.css";

function Options() {
    const options = useSelector((state) => state.options);
    const dispatch = useDispatch();
    const handleStop = () => {
        console.log("stop");
        dispatch({ type: "STOP_PROGRAM", payload: "Ayarlar" });
      };
      const handleMinimize = () => {
        console.log("minimize");
        dispatch({ type: "MINIMIZE_PROGRAM", payload: "Ayarlar" });
      };

  return (
    <>
      {options == 1 && (
        <Draggable handle=".program-header">
          <div className="program-container">
            <div className="program-header">
              Seçenekler
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
            <div className="read-container">
              <div className="read-text">Seçenekler</div>
            </div>
          </div>
        </Draggable>
      )}
    </>
  );
}

export default Options;
