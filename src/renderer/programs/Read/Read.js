import React from "react";

import { useDispatch, useSelector } from "react-redux";
import "./Read.css";
import "../Programs.css";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";

function Read() {
  const [msg, setMsg] = React.useState();
  const read = useSelector((state) => state.read);
  const dispatch = useDispatch();
  const handleStop = () => {
    dispatch({ type: "STOP_PROGRAM", payload: "Read" });
  };
  const handleMinimize = () => {
    dispatch({ type: "MINIMIZE_PROGRAM", payload: "Read" });
  };
  const handleResize = () => {
    read == 3
      ? dispatch({ type: "START_PROGRAM", payload: "Read" })
      : dispatch({ type: "RESIZE_PROGRAM", payload: "Read" });
  };
  const handleClick = () => {
    window.electron.ipcRenderer.sendMessage("ipc", ["ping"]);
    window.electron.ipcRenderer.once("ipc", (arg) => {
      // eslint-disable-next-line no-console
      setMsg(arg);
      // console.log(arg);
    });
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
        <div style={{"color": "white"}}>
          <button onClick={handleClick}>merhaba</button>
          {msg}
        </div>
      </ProgramContainer>
    </>
  );
}

export default Read;
