import { useDispatch, useSelector } from "react-redux";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";
import "./Write.css";
import "../Programs.css";

function Write() {
  const write = useSelector((state) => state.write);
  const dispatch = useDispatch();
  const handleStop = () => {
    dispatch({ type: "STOP_PROGRAM", payload: "Write" });
  };
  const handleMinimize = () => {
    dispatch({ type: "MINIMIZE_PROGRAM", payload: "Write" });
  };
  const handleResize = () => {
    write == 3
      ? dispatch({ type: "START_PROGRAM", payload: "Write" })
      : dispatch({ type: "RESIZE_PROGRAM", payload: "Write" });
  };
  return (
    <>
      <ProgramContainer
        title="Write"
        handleStop={handleStop}
        handleMinimize={handleMinimize}
        handleResize={handleResize}
        status={write}
      >
        <div>Write</div>
      </ProgramContainer>
    </>
  );
}

export default Write
