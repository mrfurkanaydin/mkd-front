import { useDispatch, useSelector } from "react-redux";
import "./Game.css";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";
import { useState } from "react";

function Game() {
  const [score, setScore] = useState();
  const game = useSelector((state) => state.game);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleStop = () => {
    dispatch({ type: "STOP_PROGRAM", payload: "Game" });
  };
  const handleMinimize = () => {
    dispatch({ type: "MINIMIZE_PROGRAM", payload: "Game" });
  };
  const handleResize = () => {
    game == 3
      ? dispatch({ type: "START_PROGRAM", payload: "Game" })
      : dispatch({ type: "RESIZE_PROGRAM", payload: "Game" });
  };
  const onScoreChange = (score) => {
    setScore(score);
  };
  const handleOpenGame = (game) => {
    dispatch({ type: "START_PROGRAM", payload: game });
  };
  return (
    <>
      <ProgramContainer
        title="Oyun"
        handleStop={handleStop}
        handleMinimize={handleMinimize}
        handleResize={handleResize}
        status={game}
      >
        <div className="game-container">
          <button
            className={theme == 0 ? "game-button" : "game-button-dark"}
            onClick={() => handleOpenGame("Snake")}
          >
            Yılan Oyunu
          </button>
          <button
            className={theme == 0 ? "game-button" : "game-button-dark"}
            onClick={() => handleOpenGame("Tetris")}
          >
            Tetris
          </button>
        </div>
      </ProgramContainer>
    </>
  );
}

export default Game;
