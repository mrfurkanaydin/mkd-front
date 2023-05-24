import masterMenu from "../../../assets/mastermenu.png";
import masterMenu_dark from "../../../assets/mastermenu-dark.png";
import TaskBarItem from "../TaskBarItem/TaskBarItem";
import okuma from "../../../assets/okuma.png";
import okumagif from "../../../assets/okuma.gif";
import yazma from "../../../assets/yazma.png";
import yazmagif from "../../../assets/yazma.gif";
import izleme from "../../../assets/izleme.png";
import izlemegif from "../../../assets/izleme.gif";
import oyun from "../../../assets/oyun.png";
import oyungif from "../../../assets/oyun.gif";
import yonetim from "../../../assets/yonetim.png";
import yonetimgif from "../../../assets/yonetim.gif";
import option from "../../../assets/secenekler.png";
import option_dark from "../../../assets/secenekler-dark.png";
import control from "../../../assets/kontrol.png";
import control_dark from "../../../assets/kontrol-dark.png";
import equipment from "../../../assets/donatilar.png";
import equipment_dark from "../../../assets/donatilar-dark.png";
import taskmanager from "../../../assets/taskmanager.png";
import taskmanager_dark from "../../../assets/taskmanager-dark.png";
import terminals from "../../../assets/terminal.png";
import terminals_dark from "../../../assets/terminal-dark.png";
import calculators from "../../../assets/hesapmakinesi.png";
import calculators_dark from "../../../assets/hesapmakinesi-dark.png";
import draws from "../../../assets/cizim.png";
import draws_dark from "../../../assets/cizim-dark.png";
import notess from "../../../assets/notlar.png";
import notess_dark from "../../../assets/notlar-dark.png";
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
import addStudents from "../../../assets/ogrenciEkle.png";
import addTeachers from "../../../assets/ogretmenEkle.png";
import listStudents from "../../../assets/ogrenciListele.png";
import listTeachers from "../../../assets/ogretmenListele.png";
import { useState } from "react";
import "./TaskBar.css";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { tr } from "date-fns/locale";

function TaskBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [controls, setControls] = useState(false);
  const [equip, setEquip] = useState(false);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const handleToggle = () => {
    setShowMenu(!showMenu);
    setControls(false);
    setEquip(false);
  };
  const handleControls = () => {
    setControls(!controls);
    setEquip(false);
  };
  const handleEquip = () => {
    setEquip(!equip);
    setControls(false);
  };
  const startOption = () => {
    dispatch({ type: "RESIZE_PROGRAM", payload: "Options" });
    handleToggle();
  };
  const startTaskManager = () => {
    dispatch({ type: "RESIZE_PROGRAM", payload: "TaskManager" });
    handleToggle();
  };
  const startCalculator = () => {
    dispatch({ type: "RESIZE_PROGRAM", payload: "Calculator" });
    handleToggle();
  };
  const startDraw = () => {
    dispatch({ type: "RESIZE_PROGRAM", payload: "Draw" });
    handleToggle();
  };
  const startNotes = () => {
    dispatch({ type: "RESIZE_PROGRAM", payload: "Notes" });
    handleToggle();
  };
  const startTerminal = () => {
    dispatch({ type: "RESIZE_PROGRAM", payload: "Terminal" });
    handleToggle();
  };
  const startDictinary = () => {
    dispatch({ type: "RESIZE_PROGRAM", payload: "Dictinary" });
    handleToggle();
  };

  const handleQuit = () => {
    window.electron.ipcRenderer.sendMessage("send-shutdown");
  };
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
  const tetris = useSelector((state) => state.tetris);
  const snake = useSelector((state) => state.snake);
  const puzzle = useSelector((state) => state.puzzle);
  const xox = useSelector((state) => state.xox);
  const card = useSelector((state) => state.card);
  const addStudent = useSelector((state) => state.addStudent);
  const addTeacher = useSelector((state) => state.addTeacher);
  const listStudent = useSelector((state) => state.listStudent);
  const listTeacher = useSelector((state) => state.listTeacher);
  const animatedIcons = useSelector((state) => state.animatedIcons);

  return (
    <>
      {showMenu && (
        <>
          <div className={theme == 0 ? "taskbar-open" : "taskbar-open-dark"}>
            <button
              onClick={startOption}
              className={
                theme == 0 ? "taskbar-open-item" : "taskbar-open-item-dark"
              }
            >
              <img
                className="taskbar-open-img"
                src={theme == 0 ? option : option_dark}
              />
              Seçenekler
            </button>
            <button
              onClick={handleEquip}
              className={
                equip
                  ? theme == 0
                    ? "taskbar-open-item-active"
                    : "taskbar-open-item-active-dark"
                  : theme == 0
                  ? "taskbar-open-item"
                  : "taskbar-open-item-dark"
              }
            >
              <img
                className="taskbar-open-img"
                src={theme == 0 ? equipment : equipment_dark}
              />
              Donatılar
            </button>
            <button
              onClick={handleControls}
              className={
                controls
                  ? theme == 0
                    ? "taskbar-open-item-active"
                    : "taskbar-open-item-active-dark"
                  : theme == 0
                  ? "taskbar-open-item"
                  : "taskbar-open-item-dark"
              }
            >
              <img
                className="taskbar-open-img"
                src={theme == 0 ? control : control_dark}
              />
              Kontrol
            </button>
          </div>
          {equip && (
            <div
              className={
                theme == 0
                  ? "taskbar-open-equipment"
                  : "taskbar-open-equipment-dark"
              }
            >
              <button
                className={
                  theme == 0 ? "taskbar-open-item" : "taskbar-open-item-dark"
                }
                onClick={startTaskManager}
              >
                <img
                  className="taskbar-open-img"
                  src={theme == 0 ? taskmanager : taskmanager_dark}
                />
                Görev Yöneticisi
              </button>
              <button
                className={
                  theme == 0 ? "taskbar-open-item" : "taskbar-open-item-dark"
                }
                onClick={startTerminal}
              >
                <img
                  className="taskbar-open-img"
                  src={theme == 0 ? terminals : terminals_dark}
                />
                Terminal
              </button>
              <button
                className={
                  theme == 0 ? "taskbar-open-item" : "taskbar-open-item-dark"
                }
                onClick={startCalculator}
              >
                <img
                  className="taskbar-open-img"
                  src={theme == 0 ? calculators : calculators_dark}
                />
                Hesap Makinesi
              </button>
              <button
                className={
                  theme == 0 ? "taskbar-open-item" : "taskbar-open-item-dark"
                }
                onClick={startDraw}
              >
                <img
                  className="taskbar-open-img"
                  src={theme == 0 ? draws : draws_dark}
                />
                Çizim
              </button>
              <button
                className={
                  theme == 0 ? "taskbar-open-item" : "taskbar-open-item-dark"
                }
                onClick={startNotes}
              >
                <img
                  className="taskbar-open-img"
                  src={theme == 0 ? notess : notess_dark}
                />
                Notlarım
              </button>
            </div>
          )}
          {controls && (
            <div
              className={
                theme == 0
                  ? "taskbar-open-controls"
                  : "taskbar-open-controls-dark"
              }
            >
              <button
                onClick={handleQuit}
                className={
                  theme == 0 ? "taskbar-open-item" : "taskbar-open-item-dark"
                }
              >
                Kapat
              </button>
              <button
                onClick={() => {
                  dispatch({ type: "SET_USER", payload: null });
                  dispatch({ type: "SET_TOKEN", payload: null });
                }}
                className={
                  theme == 0 ? "taskbar-open-item" : "taskbar-open-item-dark"
                }
              >
                Oturumu Kapat
              </button>
            </div>
          )}
        </>
      )}

      <div className={theme == 0 ? "taskbar-band" : "taskbar-band-dark"}>
        <div className="taskbar-items">
          <button
            className={
              showMenu
                ? theme == 0
                  ? "taskbar-item-button-active"
                  : "taskbar-item-button-active-dark"
                : "taskbar-item-button"
            }
            onClick={handleToggle}
          >
            <img
              className="mastermenu-style"
              src={theme == 0 ? masterMenu : masterMenu_dark}
            />
          </button>
          {read !== 0 && (
            <TaskBarItem
              name={"Read"}
              icon={animatedIcons == 0 ? okuma : okumagif}
              status={read}
            />
          )}
          {write !== 0 && (
            <TaskBarItem
              name={"Write"}
              icon={animatedIcons == 0 ? yazma : yazmagif}
              status={write}
            />
          )}
          {watch !== 0 && (
            <TaskBarItem
              name={"Watch"}
              icon={animatedIcons == 0 ? izleme : izlemegif}
              status={watch}
            />
          )}
          {game !== 0 && (
            <TaskBarItem
              name={"Game"}
              icon={animatedIcons == 0 ? oyun : oyungif}
              status={game}
            />
          )}
          {manage !== 0 && (
            <TaskBarItem
              name={"Manage"}
              icon={animatedIcons == 0 ? yonetim : yonetimgif}
              status={manage}
            />
          )}
          {options !== 0 && (
            <TaskBarItem
              name={"Options"}
              icon={theme == 0 ? option : option_dark}
              status={options}
            />
          )}
          {taskManager !== 0 && (
            <TaskBarItem
              name={"TaskManager"}
              icon={theme == 0 ? taskmanager : taskmanager_dark}
              status={taskManager}
            />
          )}
          {calculator !== 0 && (
            <TaskBarItem
              name={"Calculator"}
              icon={theme == 0 ? calculators : calculators_dark}
              status={calculator}
            />
          )}
          {draw !== 0 && (
            <TaskBarItem
              name={"Draw"}
              icon={theme == 0 ? draws : draws_dark}
              status={draw}
            />
          )}
          {notes !== 0 && (
            <TaskBarItem
              name={"Notes"}
              icon={theme == 0 ? notess : notess_dark}
              status={notes}
            />
          )}
          {terminal !== 0 && (
            <TaskBarItem
              name={"Terminal"}
              icon={theme == 0 ? terminals : terminals_dark}
              status={terminal}
            />
          )}
          {tetris !== 0 && (
            <TaskBarItem
              name={"Tetris"}
              icon={theme == 0 ? tetrisOyunu : tetrisOyunu_dark}
              status={tetris}
            />
          )}
          {snake !== 0 && (
            <TaskBarItem
              name={"Snake"}
              icon={theme == 0 ? yilanOyunu : yilanOyunu_dark}
              status={snake}
            />
          )}
          {puzzle !== 0 && (
            <TaskBarItem
              name={"Puzzle"}
              icon={theme == 0 ? yabbozOyunu : yabbozOyunu_dark}
              status={puzzle}
            />
          )}
          {xox !== 0 && (
            <TaskBarItem
              name={"XOX"}
              icon={theme == 0 ? xoxOyunu : xoxOyunu_dark}
              status={xox}
            />
          )}
          {card !== 0 && (
            <TaskBarItem
              name={"Card"}
              icon={theme == 0 ? tangramOyunu : tangramOyunu_dark}
              status={card}
            />
          )}
          {addStudent !== 0 && (
            <TaskBarItem
              name={"AddStudent"}
              icon={addStudents}
              status={addStudent}
            />
          )}
          {addTeacher !== 0 && (
            <TaskBarItem
              name={"AddTeacher"}
              icon={addTeachers}
              status={addTeacher}
            />
          )}
          {listStudent !== 0 && (
            <TaskBarItem
              name={"ListStudent"}
              icon={listStudents}
              status={listStudent}
            />
          )}
          {listTeacher !== 0 && (
            <TaskBarItem
              name={"ListTeacher"}
              icon={listTeachers}
              status={listTeacher}
            />
          )}
          <div className={theme == 0 ? "date" : "date-dark"}>
            <div>{format(new Date(), "HH:mm")}</div>
            <div>{format(new Date(), "P", { locale: tr })}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskBar;
