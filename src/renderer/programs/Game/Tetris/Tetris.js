import { useDispatch, useSelector } from "react-redux";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";
import Tetris from "react-tetris";
import { useState } from "react";
import "./Tetris.css";
function TetrisGame() {
  const [score, setScore] = useState();
  const tetris = useSelector((state) => state.tetris);
  const dispatch = useDispatch();
  const handleStop = () => {
    dispatch({ type: "STOP_PROGRAM", payload: "Tetris" });
  };
  const handleMinimize = () => {
    dispatch({ type: "MINIMIZE_PROGRAM", payload: "Tetris" });
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
            {({
              Gameboard,
              PieceQueue,
              points,
              state,
              controller
            }) => (
              <div className="tetris-vertical-center">
                <div>
                  <p className="tetris-texts">Puan: {points}</p>
                </div>
                <Gameboard />
                <PieceQueue />
                {state === "LOST" && (
                  <div>
                    <h2 className="tetris-texts">Kaybettin</h2>
                    <button className="tetris-button" onClick={controller.restart}>Yeni Oyun</button>
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
