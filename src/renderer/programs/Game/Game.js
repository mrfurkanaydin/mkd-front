import React from "react";
import Draggable from "react-draggable";
import { GrClose } from "react-icons/gr";
import { FaRegWindowMinimize } from "react-icons/fa";
import { IoIosQrScanner } from "react-icons/io";
import { TfiClose } from "react-icons/tfi";

import { useDispatch, useSelector } from "react-redux";
import "./Game.css";
import "../Programs.css";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";

function Game() {
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
  return (
    <>
      <ProgramContainer
        title="Game"
        handleStop={handleStop}
        handleMinimize={handleMinimize}
        handleResize={handleResize}
        status={game}
      >
        <div>
          <button
            onClick={() => {
              // window.electron.store.set("foo", {
              //   bar: "baz"
              // });
              // window.electron.store.set("animated-icons", false);
              // or
              console.log(window.electron.store.get("animated-icons"));
            }}
          >
            Click Me!
          </button>
        </div>
      </ProgramContainer>
    </>
  );
}

export default Game;
