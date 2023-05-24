import { useDispatch, useSelector } from "react-redux";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";
import { differenceInSeconds } from "date-fns";
import { useEffect, useState } from "react";
import timerUtil from "renderer/utils/timer";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import MemoryGame from "react-card-memory-game";

function Card() {
  const card = useSelector((state) => state.card);
  const dispatch = useDispatch();
  const [firstDate, setFirstDate] = useState();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (user.role == "student" && (card == 1 || card == 3)) {
      const date = new Date();
      setFirstDate(date);
    }
  }, [card == 1 || card == 3]);
  const handleStop = () => {
    dispatch({ type: "STOP_PROGRAM", payload: "Card" });
    const date = new Date();
    const timer = differenceInSeconds(date, firstDate);
    timerUtil(timer, user.id, "Kart Oyunu");
  };
  const handleMinimize = () => {
    dispatch({ type: "MINIMIZE_PROGRAM", payload: "Card" });
    const date = new Date();
    const timer = differenceInSeconds(date, firstDate);
    timerUtil(timer, user.id, "Kart Oyunu");
  };
  const handleResize = () => {
    card == 3
      ? dispatch({ type: "START_PROGRAM", payload: "Card" })
      : dispatch({ type: "RESIZE_PROGRAM", payload: "Card" });
  };
  return (
    <>
      <ProgramContainer
        title="Kart Oyunu"
        handleStop={handleStop}
        handleMinimize={handleMinimize}
        handleResize={handleResize}
        status={card}
        disable={true}
        containerWidth="100%"
        containerHeight="calc(100% - 40px)"
      >
        <div className="tetris-container">
          <>
            <MemoryGame
              gridNumber={4}
              holeCardsColor={"#000"}
              foundCardsColor={"#412213"}
            />
          </>
        </div>
      </ProgramContainer>
    </>
  );
}

export default Card;
