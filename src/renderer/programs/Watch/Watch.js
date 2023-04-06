import { useDispatch, useSelector } from "react-redux";
import "./Watch.css";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";

function Watch() {
  const watch = useSelector((state) => state.watch);
  const dispatch = useDispatch();
  const handleStop = () => {
    dispatch({ type: "STOP_PROGRAM", payload: "Watch" });
  };
  const handleMinimize = () => {
    dispatch({ type: "MINIMIZE_PROGRAM", payload: "Watch" });
  };
  const handleResize = () => {
    watch == 3
      ? dispatch({ type: "START_PROGRAM", payload: "Watch" })
      : dispatch({ type: "RESIZE_PROGRAM", payload: "Watch" });
  };
  return (
    <>
      <ProgramContainer 
        title="İzleme"
        handleStop={handleStop}
        handleMinimize={handleMinimize}
        handleResize={handleResize}
        status={watch}
      >
        <div>Watch</div>
      </ProgramContainer>
    </>
  );
}

export default Watch;
