import { useDispatch, useSelector } from "react-redux";
import "./Game.css";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";
import { useState } from "react";
import yilanOyunu from "../../../assets/yilan.png";
import yilanOyunu_dark from "../../../assets/yilan-dark.png";
import tetrisOyunu from "../../../assets/tetris.png";
import tetrisOyunu_dark from "../../../assets/tetris-dark.png";
import yabbozOyunu from "../../../assets/yapboz.png";
import yabbozOyunu_dark from "../../../assets/yapboz-dark.png";
import xoxOyunu from "../../../assets/xox.png";
import xoxOyunu_dark from "../../../assets/xox-dark.png";
import tangramOyunu from "../../../assets/tangram.png";
import tangramOyunu_dark from "../../../assets/tangram-dark.png";
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
        containerWidth="100%"
        containerHeight="calc(100% - 40px)"
      >
        <div className="game-container">
          <button onClick={() => handleOpenGame("Snake")} className={theme == 0 ? "game-button": "game-button-dark"}>
              <img className="game-img" src={theme == 0 ? yilanOyunu : yilanOyunu_dark} />
              <div className = { theme == 0 ? "game-text" : "game-text-dark"}>Yılan Oyunu</div>
            </button>
            <button onClick={() => handleOpenGame("Tetris")} className={theme == 0 ? "game-button": "game-button-dark"}>
              <img className="game-img"  src={theme == 0 ? tetrisOyunu : tetrisOyunu_dark} />
              <div className = { theme == 0 ? "game-text" : "game-text-dark"}>Tetris</div>
            </button>
            <button className={theme == 0 ? "game-button": "game-button-dark"}>
              <img onClick={() => handleOpenGame("Puzzle")} className="game-img" src={theme == 0 ? yabbozOyunu : yabbozOyunu_dark} />
              <div className = { theme == 0 ? "game-text" : "game-text-dark"}>Yapboz</div>
            </button>
            <button className={theme == 0 ? "game-button": "game-button-dark"}>
              <img onClick={() => handleOpenGame("XOX")} className="game-img" src={theme == 0 ? xoxOyunu : xoxOyunu_dark} />
              <div className = { theme == 0 ? "game-text" : "game-text-dark"}>XOX</div>
            </button>
            <button className={theme == 0 ? "game-button": "game-button-dark"}>
              <img onClick={() => handleOpenGame("Card")} className="game-img" src={theme == 0 ? tangramOyunu : tangramOyunu_dark} />
              <div className = { theme == 0 ? "game-text" : "game-text-dark"}>Kartlar</div>
            </button>
        </div>
      </ProgramContainer>
    </>
  );
}

export default Game;
