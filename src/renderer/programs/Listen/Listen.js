import { useDispatch, useSelector } from "react-redux";
import "./Listen.css";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";
import { differenceInSeconds } from "date-fns";
import { useEffect, useState } from "react";
import timerUtil from "renderer/utils/timer";

function Listen() {
  const listen = useSelector((state) => state.listen);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [firstDate, setFirstDate] = useState();
  useEffect(() => {
    if (user.role == "student" && (listen == 1 || listen == 3)) {
      const date = new Date();
      setFirstDate(date);
    }
  }, [listen == 1 || listen == 3]);
  const handleStop = () => {
    dispatch({ type: "STOP_PROGRAM", payload: "Listen" });
    const date = new Date();
    const timer = differenceInSeconds(date, firstDate);
    timerUtil(timer, user.id, "Dinleme");
  };
  const handleMinimize = () => {
    dispatch({ type: "MINIMIZE_PROGRAM", payload: "Listen" });
    const date = new Date();
    const timer = differenceInSeconds(date, firstDate);
    timerUtil(timer, user.id, "Dinleme");
  };
  const handleResize = () => {
    listen == 3
      ? dispatch({ type: "START_PROGRAM", payload: "Listen" })
      : dispatch({ type: "RESIZE_PROGRAM", payload: "Listen" });
  };
  return (
    <>
      <ProgramContainer
        title="Dinleme"
        handleStop={handleStop}
        handleMinimize={handleMinimize}
        handleResize={handleResize}
        status={listen}
      >
        <>LİSTEN</>
      </ProgramContainer>
    </>
  );
}

export default Listen;
