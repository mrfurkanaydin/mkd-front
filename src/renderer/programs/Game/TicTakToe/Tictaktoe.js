import { useDispatch, useSelector } from "react-redux";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";
import { differenceInSeconds } from "date-fns";
import { useEffect, useState } from "react";
import timerUtil from "renderer/utils/timer";
import "./Tictaktoe.css";
import Square from "./Square";
function Tictaktoe() {
  const xox = useSelector((state) => state.xox);
  const dispatch = useDispatch();
  const [firstDate, setFirstDate] = useState();
  const user = useSelector((state) => state.user);
  let isGameOver = false;
  let statusPlayer;
  let gameStatus;
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  const [startGame, setStartGame] = useState(false);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);
  const [computerPlay, setComputerPlay] = useState(false);
  const [numberOfTurnsLeft, setNumberOfTurnsLeft] = useState(9);
  const winner = calculateWinner(squares);
  winner
    ? (statusPlayer = winner)
    : (statusPlayer = "Player Turn: " + (xTurn ? "X" : "O"));

  const gamePlay = (bool) => {
    if (bool) {
      setComputerPlay(true);
      setStartGame(true);
    } else if (!bool) {
      setComputerPlay(false);
      setStartGame(true);
    }
  };

  const handleClick = (i) => {
    if (isGameOver || squares[i] !== null) return;
    let squaresCopy = [...squares];
    squaresCopy[i] = xTurn ? "X" : !computerPlay && "O";
    const newNumberOfTurnsLeft = numberOfTurnsLeft - 1;
    setNumberOfTurnsLeft(newNumberOfTurnsLeft);
    setXTurn(computerPlay ? false : !xTurn);
    setSquares(squaresCopy);
  };

  const playWithComputer = () => {
    if (!computerPlay || isGameOver || xTurn || numberOfTurnsLeft === 0) return;
    let squaresCopy = [...squares];
    let numberOfTurnsLeftCopy = numberOfTurnsLeft - 1;
    const randomIndex = Math.ceil(Math.random() * 9);
    if (squares[randomIndex] === null) {
      squaresCopy[randomIndex] = "O";
      setSquares(squaresCopy);
      setXTurn(true);
      setNumberOfTurnsLeft(numberOfTurnsLeftCopy);
    } else {
      playWithComputer();
    }
  };

  useEffect(playWithComputer);

  function calculateWinner(squares) {
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        isGameOver = true;
        gameStatus = "Oyun Bitti!";
        return `Kazanan: ${squares[a]}`;
      }
    }

    if (numberOfTurnsLeft === 0) {
      isGameOver = true;
      gameStatus = "Oyun Bitti!";
      return "Berabere";
    }

    return null;
  }

  const restartGame = () => {
    setStartGame(false);
    setSquares(Array(9).fill(null));
    setNumberOfTurnsLeft(9);
    setXTurn(true);
    isGameOver = false;
    gameStatus = "Sıra: X";
  };
  useEffect(() => {
    if (user.role == "student" && (xox == 1 || xox == 3)) {
      const date = new Date();
      setFirstDate(date);
    }
  }, [xox == 1 || xox == 3]);
  const handleStop = () => {
    dispatch({ type: "STOP_PROGRAM", payload: "XOX" });
    const date = new Date();
    const timer = differenceInSeconds(date, firstDate);
    timerUtil(timer, user.id, "TicTacToe Oyunu");
  };
  const handleMinimize = () => {
    dispatch({ type: "MINIMIZE_PROGRAM", payload: "XOX" });
    const date = new Date();
    const timer = differenceInSeconds(date, firstDate);
    timerUtil(timer, user.id, "Tictaktoe Oyunu");
  };
  const handleResize = () => {
    xox == 3
      ? dispatch({ type: "START_PROGRAM", payload: "XOX" })
      : dispatch({ type: "RESIZE_PROGRAM", payload: "XOX" });
  };
  return (
    <>
      <ProgramContainer
        title="Tic Tac Toe Oyunu"
        handleStop={handleStop}
        handleMinimize={handleMinimize}
        handleResize={handleResize}
        status={xox}
        disable={true}
        containerWidth="100%"
        containerHeight="calc(100% - 40px)"
      >
        <div className="tetris-container">
          <>
            {!startGame ? (
              <div className="startGame">
                <h1>Tic Tac Toe</h1>
                <div className="startGameOptions">
                  <button className="playButton" onClick={() => gamePlay(true)}>
                    Oyna
                  </button>
                </div>
              </div>
            ) : (
              <div className="game">
                <h3>{statusPlayer}</h3>
                <div className="board">
                  {squares.map((square, index) => {
                    return (
                      <Square
                        value={square}
                        onClick={() => handleClick(index)}
                        key={index}
                      />
                    );
                  })}
                </div>
                <h4 className="gameStatus">{gameStatus}</h4>
                {isGameOver && (
                  <button className="restartGame" onClick={() => restartGame()}>
                    Yeniden Oyna
                  </button>
                )}
              </div>
            )}
          </>
        </div>
      </ProgramContainer>
    </>
  );
}

export default Tictaktoe;
