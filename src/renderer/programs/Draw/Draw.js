import { useDispatch, useSelector } from "react-redux";
import "../Programs.css";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";
import CanvasDraw from "react-canvas-draw";

function Draw() {
  const draw = useSelector((state) => state.draw);
  const dispatch = useDispatch();
  const handleStop = () => {
    dispatch({ type: "STOP_PROGRAM", payload: "Draw" });
  };
  const handleMinimize = () => {
    dispatch({ type: "MINIMIZE_PROGRAM", payload: "Draw" });
  };
  const handleResize = () => {
    draw == 3
      ? dispatch({ type: "START_PROGRAM", payload: "Draw" })
      : dispatch({ type: "RESIZE_PROGRAM", payload: "Draw" });
  };
  return (
    <>
      <ProgramContainer
        title="Çizim"
        handleStop={handleStop}
        handleMinimize={handleMinimize}
        handleResize={handleResize}
        status={draw}
        width={1500}
        height={800}
        disable="true"
      >
        <>
          <CanvasDraw
            hideGridX
            hideGridY
            canvasWidth={1500}
            canvasHeight={800}
          />
        </>
      </ProgramContainer>
    </>
  );
}

export default Draw;
