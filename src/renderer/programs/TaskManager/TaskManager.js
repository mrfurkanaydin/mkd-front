import { useDispatch, useSelector } from "react-redux";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";
import TaskManagerItem from "renderer/components/TaskManagerItem/TaskManagerItem";

function TaskManager() {
  const read = useSelector((state) => state.read);
  const write = useSelector((state) => state.write);
  const listen = useSelector((state) => state.listen);
  const watch = useSelector((state) => state.watch);
  const game = useSelector((state) => state.game);
  const manage = useSelector((state) => state.manage);
  const options = useSelector((state) => state.options);
  const taskManager = useSelector((state) => state.taskManager);
  const calculator = useSelector((state) => state.calculator);
  const draw = useSelector((state) => state.draw);
  const notes = useSelector((state) => state.notes);
  const terminal = useSelector((state) => state.terminal);
  const snake = useSelector((state) => state.snake);
  const tetris = useSelector((state) => state.tetris);
  const puzzle = useSelector((state) => state.puzzle);
  const xox = useSelector((state) => state.xox);
  const card = useSelector((state) => state.card);
  const dispatch = useDispatch();
  const handleStop = () => {
    dispatch({ type: "STOP_PROGRAM", payload: "TaskManager" });
  };
  const handleMinimize = () => {
    dispatch({ type: "MINIMIZE_PROGRAM", payload: "TaskManager" });
  };
  const handleResize = () => {
    taskManager == 3
      ? dispatch({ type: "START_PROGRAM", payload: "TaskManager" })
      : dispatch({ type: "RESIZE_PROGRAM", payload: "TaskManager" });
  };

  return (
    <>
      <ProgramContainer
        title="Görev Yöneticisi"
        handleStop={handleStop}
        handleMinimize={handleMinimize}
        handleResize={handleResize}
        status={taskManager}
        width={500}
        height={"70%"}
        disable={true}
      >
        <>
          {taskManager !== 0 && (
            <TaskManagerItem name="Görev Yöneticisi" type="TaskManager" />
          )}
          {read !== 0 && <TaskManagerItem name="Okuma" type="Read" />}
          {write !== 0 && <TaskManagerItem name="Yazma" type="Write" />}
          {listen !== 0 && <TaskManagerItem name="Dinleme" type="Listen" />}
          {watch !== 0 && <TaskManagerItem name="İzleme" type="Watch" />}
          {game !== 0 && <TaskManagerItem name="Oyun" type="Game" />}
          {manage !== 0 && <TaskManagerItem name="Yönetim" type="Manage" />}
          {options !== 0 && <TaskManagerItem name="Ayarlar" type="Options" />}
          {calculator !== 0 && (
            <TaskManagerItem name="Hesap Makinesi" type="Calculator" />
          )}
          {draw !== 0 && <TaskManagerItem name="Çizim" type="Draw" />}
          {notes !== 0 && <TaskManagerItem name="Notlar" type="Notes" />}
          {terminal !== 0 && (
            <TaskManagerItem name="Terminal" type="Terminal" />
          )}
          {snake !== 0 && (
            <TaskManagerItem name="Yılan Oyunu" type="Snake" />
          )}
          {tetris !== 0 && (
            <TaskManagerItem name="Tetris Oyunu" type="Tetris" />
          )}
          {puzzle !== 0 && (
            <TaskManagerItem name="Yapboz Oyunu" type="Puzzle" />
          )}
          {xox !== 0 && (
            <TaskManagerItem name="Tic Tac Toe Oyunu" type="XOX" />
          )}
          {card !== 0 && (
            <TaskManagerItem name="Kart Oyunu" type="Card" />
          )}
        </>
      </ProgramContainer>
    </>
  );
}

export default TaskManager;
