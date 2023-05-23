import { useDispatch, useSelector } from "react-redux";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";
import { differenceInSeconds } from "date-fns";
import { useEffect, useState } from "react";
import timerUtil from "renderer/utils/timer";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import MemoryGame from "react-card-memory-game";

function Puzzle() {
  const puzzle = useSelector((state) => state.puzzle);
  const dispatch = useDispatch();
  const [firstDate, setFirstDate] = useState();
  const [random, setRandom] = useState(Math.random());

  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (user.role == "student" && (puzzle == 1 || puzzle == 3)) {
      const date = new Date();
      setFirstDate(date);
      setRandom(Math.random());
    }
  }, [puzzle == 1 || puzzle == 3]);
  const handleStop = () => {
    dispatch({ type: "STOP_PROGRAM", payload: "Puzzle" });
    const date = new Date();
    const timer = differenceInSeconds(date, firstDate);
    timerUtil(timer, user.id, "Puzzle Oyunu");
  };
  const handleMinimize = () => {
    dispatch({ type: "MINIMIZE_PROGRAM", payload: "Puzzle" });
    const date = new Date();
    const timer = differenceInSeconds(date, firstDate);
    timerUtil(timer, user.id, "Puzzle Oyunu");
  };
  const handleResize = () => {
    puzzle == 3
      ? dispatch({ type: "START_PROGRAM", payload: "Puzzle" })
      : dispatch({ type: "RESIZE_PROGRAM", payload: "Puzzle" });
  };
  console.log(random * 10);
  return (
    <>
      <ProgramContainer
        title="Puzzle Oyunu"
        handleStop={handleStop}
        handleMinimize={handleMinimize}
        handleResize={handleResize}
        status={puzzle}
        disable={true}
        containerWidth="100%"
        containerHeight="calc(100% - 40px)"
      >
        <div className="tetris-container">
          <>
            <JigsawPuzzle
              imageSrc={
                "https://loremflickr.com/1920/1080/travel,city,animals/all?random=" +
                Number(random * 10)
              }
              onSolved={() => alert("Solved!")}
            />
          </>
        </div>
      </ProgramContainer>
    </>
  );
}

export default Puzzle;
