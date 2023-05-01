import { useDispatch, useSelector } from "react-redux";
import "./Manage.css";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";


function Manage() {
  const manage = useSelector((state) => state.manage);
  const dispatch = useDispatch();
  const handleStop = () => {
    dispatch({ type: "STOP_PROGRAM", payload: "Manage" });
  };
  const handleMinimize = () => {
    dispatch({ type: "MINIMIZE_PROGRAM", payload: "Manage" });
  };
  const handleResize = () => {
    manage == 3
      ? dispatch({ type: "START_PROGRAM", payload: "Manage" })
      : dispatch({ type: "RESIZE_PROGRAM", payload: "Manage" });
  };
  return (
    <>
      <ProgramContainer
        title="Yönetim"
        handleStop={handleStop}
        handleMinimize={handleMinimize}
        handleResize={handleResize}
        status={manage}
      >
        
      </ProgramContainer>
    </>
  );
}

export default Manage;
