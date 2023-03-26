import { useDispatch, useSelector } from "react-redux";
import "./Listen.css";
import "../Programs.css";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";
import CanvasDraw from "react-canvas-draw";

function Listen() {
  const listen = useSelector((state) => state.listen);
  const dispatch = useDispatch();
  const handleStop = () => {
    dispatch({ type: "STOP_PROGRAM", payload: "Listen" });
  };
  const handleMinimize = () => {
    dispatch({ type: "MINIMIZE_PROGRAM", payload: "Listen" });
  };
  const handleResize = () => {
    listen == 3
      ? dispatch({ type: "START_PROGRAM", payload: "Listen" })
      : dispatch({ type: "RESIZE_PROGRAM", payload: "Listen" });
  };
  return (
    <>
      <ProgramContainer
        title="Listen"
        handleStop={handleStop}
        handleMinimize={handleMinimize}
        handleResize={handleResize}
        status={listen}
      >
        <>
          <CanvasDraw hideGridX hideGridY />
        </>
      </ProgramContainer>
    </>
  );
}

export default Listen;
