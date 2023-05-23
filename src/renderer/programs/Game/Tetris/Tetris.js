import { useDispatch, useSelector } from "react-redux";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";
import Tetris from "react-tetris";
import { differenceInMinutes } from "date-fns";
import { useEffect, useState } from "react";
import timerUtil from "renderer/utils/timer";
import "./Tetris.css";

function TetrisGame() {
  const [score, setScore] = useState();
  const tetris = useSelector((state) => state.tetris);
  const dispatch = useDispatch();
  const [firstDate, setFirstDate] = useState();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (user.role == "student" && (tetris == 1 || tetris == 3)) {
      const date = new Date();
      setFirstDate(date);
    }
  }, [tetris == 1 || tetris == 3]);
  const handleStop = () => {
    dispatch({ type: "STOP_PROGRAM", payload: "Tetris" });
    const date = new Date();
    const timer = differenceInMinutes(date, firstDate);
    timerUtil(timer, user.id, "Tetris Oyunu");
  };
  const handleMinimize = () => {
    dispatch({ type: "MINIMIZE_PROGRAM", payload: "Tetris" });
    const date = new Date();
    const timer = differenceInMinutes(date, firstDate);
    timerUtil(timer, user.id, "Tetris Oyunu");
  };
  const handleResize = () => {
    tetris == 3
      ? dispatch({ type: "START_PROGRAM", payload: "Tetris" })
      : dispatch({ type: "RESIZE_PROGRAM", payload: "Tetris" });
  };

  return (
    <>
      <ProgramContainer
        title="Tetris Oyunu"
        handleStop={handleStop}
        handleMinimize={handleMinimize}
        handleResize={handleResize}
        status={tetris}
        disable={true}
      >
        <div className="tetris-container">
          <Tetris
            keyboardControls={{
              // Default values shown here. These will be used if no
              // `keyboardControls` prop is provided.
              down: "MOVE_DOWN",
              left: "MOVE_LEFT",
              right: "MOVE_RIGHT",
              space: "HARD_DROP",
              z: "FLIP_COUNTERCLOCKWISE",
              x: "FLIP_CLOCKWISE",
              up: "FLIP_CLOCKWISE",
              p: "TOGGLE_PAUSE",
              c: "HOLD",
              shift: "HOLD"
            }}
          >
            {({ Gameboard, PieceQueue, points, state, controller }) => (
              <div className="tetris-vertical-center">
                <div>
                  <p className="tetris-texts">Puan: {points}</p>
                </div>
                <Gameboard />
                <PieceQueue />
                {state === "LOST" && (
                  <div>
                    <h2 className="tetris-texts">Kaybettin</h2>
                    <button
                      className="tetris-button"
                      onClick={controller.restart}
                    >
                      Yeni Oyun
                    </button>
                  </div>
                )}
              </div>
            )}
          </Tetris>
        </div>
      </ProgramContainer>
    </>
  );
}

export default TetrisGame;
