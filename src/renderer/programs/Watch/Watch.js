import { useDispatch, useSelector } from "react-redux";
import "./Watch.css";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";
import YoutubeEmbed from "renderer/components/YoutubeEmbed/YoutubeEmbed";
import { differenceInMinutes } from "date-fns";
import { useEffect, useState } from "react";
import timerUtil from "renderer/utils/timer";

function Watch() {
  const [firstDate, setFirstDate] = useState();
  const watch = useSelector((state) => state.watch);
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (user.role == "student" && (watch == 1 || watch == 3)) {
      const date = new Date();
      setFirstDate(date);
    }
  }, [watch == 1 || watch == 3]);
  const dispatch = useDispatch();
  const handleStop = () => {
    dispatch({ type: "STOP_PROGRAM", payload: "Watch" });
    const date = new Date();
    const timer = differenceInMinutes(date, firstDate);
    timerUtil(timer, user.id, "İzleme");
  };
  const handleMinimize = () => {
    dispatch({ type: "MINIMIZE_PROGRAM", payload: "Watch" });
    const date = new Date();
    const timer = differenceInMinutes(date, firstDate);
    timerUtil(timer, user.id, "İzleme");
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
        containerWidth="100%"
        containerHeight="calc(100% - 40px)"
      >
        <div className="watch-container">
          <YoutubeEmbed embedId="rokGy0huYEA" />
          <YoutubeEmbed embedId="F8BFSVjpRv8" />
          <YoutubeEmbed embedId="4Dnut5W9dpw" />
        </div>
      </ProgramContainer>
    </>
  );
}

export default Watch;
