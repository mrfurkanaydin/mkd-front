import React from "react";

import { useDispatch, useSelector } from "react-redux";
import "./Read.css";
import "../Programs.css";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";

function Read() {
  const read = useSelector((state) => state.read);
  const dispatch = useDispatch();
  const handleStop = () => {
    dispatch({ type: "STOP_PROGRAM", payload: "Okuma" });
  };
  const handleMinimize = () => {
    dispatch({ type: "MINIMIZE_PROGRAM", payload: "Okuma" });
  };
  const handleResize = () => {
    read == 3
      ? dispatch({ type: "START_PROGRAM", payload: "Okuma" })
      : dispatch({ type: "RESIZE_PROGRAM", payload: "Okuma" });
  };
  return (
    <>
      <ProgramContainer 
        title="Okuma"
        handleStop={handleStop}
        handleMinimize={handleMinimize}
        handleResize={handleResize}
        status={read}
      >
        <div>Read</div>
      </ProgramContainer>
    </>
  );
}

export default Read;
