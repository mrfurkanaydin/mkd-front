import { useDispatch, useSelector } from "react-redux";
import "./Snake.css";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";
import { Snake } from "react-snake-lib";
import { useState } from "react";

function SnakeGame() {
  const [score, setScore] = useState();
  const [gameOver, setGameOver] = useState(false);
  const snake = useSelector((state) => state.snake);
  const dispatch = useDispatch();
  const handleStop = () => {
    dispatch({ type: "STOP_PROGRAM", payload: "Snake" });
  };
  const handleMinimize = () => {
    dispatch({ type: "MINIMIZE_PROGRAM", payload: "Snake" });
  };
  const handleResize = () => {
    snake == 3
      ? dispatch({ type: "START_PROGRAM", payload: "Snake" })
      : dispatch({ type: "RESIZE_PROGRAM", payload: "Snake" });
  };
  const onScoreChange = (score) => {
    setScore(score);
  };
  const onGameOver = () => {
    setGameOver(true);
  };
  return (
    <>
      <ProgramContainer
        title="Yılan Oyunu"
        handleStop={handleStop}
        handleMinimize={handleMinimize}
        handleResize={handleResize}
        status={snake}
        disable={true}
      >
        {gameOver ? (
          <div className="snake-gameover-content">
            <h1 className="snake-gameover-title">Oyun Bitti</h1>
            <h2 className="snake-gameover-score">Skorunuz: {score}</h2>
            <button
              className="snake-gameover-button"
              onClick={() => setGameOver(false)}
            >
              Tekrar Oyna
            </button>
          </div>
        ) : (
          <div style={{ height: "100%" }}>
            <div className="snake-score">Skor: {score}</div>
            <Snake
              width="100%"
              height="95%"
              onScoreChange={onScoreChange}
              onGameOver={onGameOver}
              // onGameStart={onGameStart}
              bgColor="silver"
              innerBorderColor="#b1b0b0"
              snakeSpeed={150}
              borderColor="black"
              snakeColor="#3e3e3e"
              snakeHeadColor="#1a1a1a"
              appleColor="tomato"
              borderRadius={5}
              snakeHeadRadius={1}
              borderWidth={0}
              shakeBoard={true}
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              size={20}
              startGameText="Oyuna Başla"
              startButtonStyle={{
                color: "white",
                padding: "6px 20px",
                backgroundColor: "#1a1a1a",
                borderRadius: "10px",
                fontSize: "17px",
                fontWeight: "600",
                cursor: "pointer"
              }}
              startButtonHoverStyle={{
                backgroundColor: "#4f4d4d"
              }}
              noWall={true}
            />
          </div>
        )}
      </ProgramContainer>
    </>
  );
}

export default SnakeGame;
