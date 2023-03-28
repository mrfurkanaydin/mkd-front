import { useDispatch, useSelector } from "react-redux";
import "./Game.css";
import "../Programs.css";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";
import { Snake } from "react-snake-lib";
import Tetris from 'react-tetris-overlay';
import { useState } from "react";

function Game() {
  const [score,setScore] = useState()
  const game = useSelector((state) => state.game);
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
  const onScoreChange = (score)=>{
    setScore(score);
  }
  return (
    <>
      <ProgramContainer
        title="Oyun"
        handleStop={handleStop}
        handleMinimize={handleMinimize}
        handleResize={handleResize}
        status={game}
      >
        {/* <div style={{"height":"100%"}}> */}
          {/* {score} */}
          {/* <Snake
          width="100%"
          height="95%"
          onScoreChange={onScoreChange}
          // onGameOver={onGameOver}
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
          /> */}
          {/* <Tetris /> */}
        {/* </div> */}
      </ProgramContainer>
    </>
  );
}

export default Game;
