import { useDispatch, useSelector } from "react-redux";
import "../Programs.css";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";
import { TextField } from "@mui/material";

function Notes() {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const handleStop = () => {
    dispatch({ type: "STOP_PROGRAM", payload: "Notes" });
  };
  const handleMinimize = () => {
    dispatch({ type: "MINIMIZE_PROGRAM", payload: "Notes" });
  };
  const handleResize = () => {
    notes == 3
      ? dispatch({ type: "START_PROGRAM", payload: "Notes" })
      : dispatch({ type: "RESIZE_PROGRAM", payload: "Notes" });
  };
  return (
    <>
      <ProgramContainer
        title="Notlar"
        handleStop={handleStop}
        handleMinimize={handleMinimize}
        handleResize={handleResize}
        status={notes}
      >
        <>
            <TextField sx={{backgroundColor:"red",width:"100%"}}/>
        </>
      </ProgramContainer>
    </>
  );
}

export default Notes;
