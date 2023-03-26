import { useDispatch, useSelector } from "react-redux";
import "../Programs.css";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";

function Calculator() {
  const calculator = useSelector((state) => state.calculator);
  const dispatch = useDispatch();
  const handleStop = () => {
    dispatch({ type: "STOP_PROGRAM", payload: "Calculator" });
  };
  const handleMinimize = () => {
    dispatch({ type: "MINIMIZE_PROGRAM", payload: "Calculator" });
  };
  const handleResize = () => {
    calculator == 3
      ? dispatch({ type: "START_PROGRAM", payload: "Calculator" })
      : dispatch({ type: "RESIZE_PROGRAM", payload: "Calculator" });
  };
  return (
    <>
      <ProgramContainer 
        title="Calculator"
        handleStop={handleStop}
        handleMinimize={handleMinimize}
        handleResize={handleResize}
        status={calculator}
      >
        <div>Calculator</div>
      </ProgramContainer>
    </>
  );
}

export default Calculator;
