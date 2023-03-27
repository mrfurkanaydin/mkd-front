import { useDispatch, useSelector } from "react-redux";
import "../Programs.css";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";
import { TextField } from "@mui/material";

function Terminal() {
  const terminal = useSelector((state) => state.terminal);
  const dispatch = useDispatch();
  const handleStop = () => {
    dispatch({ type: "STOP_PROGRAM", payload: "Terminal" });
  };
  const handleMinimize = () => {
    dispatch({ type: "MINIMIZE_PROGRAM", payload: "Terminal" });
  };
  const handleResize = () => {
    terminal == 3
      ? dispatch({ type: "START_PROGRAM", payload: "Terminal" })
      : dispatch({ type: "RESIZE_PROGRAM", payload: "Terminal" });
  };
  return (
    <>
      <ProgramContainer
        title="Terminal"
        handleStop={handleStop}
        handleMinimize={handleMinimize}
        handleResize={handleResize}
        status={terminal}
        disable="true"
        width={1000}
      >
        <>
          <button>terminalmiş</button>
          <TextField
            sx={{
              backgroundColor: "green",
              width: "96%",
              margin: "20px",
              borderRadius: "20px",
              position:"absolute",
              bottom:0,
              left:0
            }}
          />
        </>
      </ProgramContainer>
    </>
  );
}

export default Terminal;
