import { useDispatch, useSelector } from "react-redux";
import "./Options.css";
import "../Programs.css";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";

function Options() {
  const options = useSelector((state) => state.options);
  const dispatch = useDispatch();
  const handleStop = () => {
    dispatch({ type: "STOP_PROGRAM", payload: "Options" });
  };
  const handleMinimize = () => {
    dispatch({ type: "MINIMIZE_PROGRAM", payload: "Options" });
  };
  const handleResize = () => {
    options == 3
      ? dispatch({ type: "START_PROGRAM", payload: "Options" })
      : dispatch({ type: "RESIZE_PROGRAM", payload: "Options" });
  };
  return (
    <>
      <ProgramContainer 
        title="Options"
        handleStop={handleStop}
        handleMinimize={handleMinimize}
        handleResize={handleResize}
        status={options}
      >
        <div>Options</div>
      </ProgramContainer>
    </>
  );
}

export default Options;
