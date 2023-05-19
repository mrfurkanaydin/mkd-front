import masterMenu from "../../../assets/mastermenu.png";
import TaskBarItem from "../TaskBarItem/TaskBarItem";
import okuma from "../../../assets/okuma.png";
import okumagif from "../../../assets/okuma.gif";
import yazma from "../../../assets/yazma.png";
import yazmagif from "../../../assets/yazma.gif";
import izleme from "../../../assets/izleme.png";
import izlemegif from "../../../assets/izleme.gif";
import dinleme from "../../../assets/dinleme.png";
import dinlemegif from "../../../assets/dinleme.gif";
import oyun from "../../../assets/oyun.png";
import oyungif from "../../../assets/oyun.gif";
import yonetim from "../../../assets/yonetim.png";
import yonetimgif from "../../../assets/yonetim.gif";
import option from "../../../assets/secenekler.png";
import control from "../../../assets/kontrol.png";
import equipment from "../../../assets/donatilar.png";
import taskmanager from "../../../assets/taskmanager.png";
import terminals from "../../../assets/terminal.png";
import calculators from "../../../assets/hesapmakinesi.png";
import draws from "../../../assets/cizim.png";
import notess from "../../../assets/notlar.png";
import dictinary from "../../../assets/sozluk.png";
import addStudents from "../../../assets/ogrenciEkle.png";
import addTeachers from "../../../assets/ogretmenEkle.png";
import listStudents from "../../../assets/ogrenciListele.png";
import listTeachers from "../../../assets/ogretmenListele.png";
import React, { useState } from "react";
import "./TaskBar.css";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { tr } from "date-fns/locale";

function TaskBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [controls, setControls] = useState(false);
  const [equip, setEquip] = useState(false);
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
  const addStudent = useSelector((state) => state.addStudent);
  const addTeacher = useSelector((state) => state.addTeacher);
  const listStudent = useSelector((state) => state.listStudent);
  const listTeacher = useSelector((state) => state.listTeacher);
  const animatedIcons = useSelector((state) => state.animatedIcons);

  return (
    <>
      {showMenu && (
        <>
          <div className="taskbar-open">
            <button onClick={startOption} className="taskbar-open-item">
              <img className="taskbar-open-img" src={option} />
              Seçenekler
            </button>
            <button
              onClick={handleEquip}
              className={
                equip ? "taskbar-open-item-active" : "taskbar-open-item"
              }
            >
              <img className="taskbar-open-img" src={equipment} />
              Donatılar
            </button>
            <button
              onClick={handleControls}
              className={
                controls ? "taskbar-open-item-active" : "taskbar-open-item"
              }
            >
              <img className="taskbar-open-img" src={control} />
              Kontrol
            </button>
          </div>
          {equip && (
            <div className="taskbar-open-equipment">
              <button className="taskbar-open-item" onClick={startTaskManager}>
                <img className="taskbar-open-img" src={taskmanager} />
                Görev Yöneticisi
              </button>
              <button className="taskbar-open-item" onClick={startTerminal}>
                <img className="taskbar-open-img" src={terminals} />
                Terminal
              </button>
              <button className="taskbar-open-item" onClick={startCalculator}>
                <img className="taskbar-open-img" src={calculators} />
                Hesap Makinesi
              </button>
              <button className="taskbar-open-item" onClick={startDraw}>
                <img className="taskbar-open-img" src={draws} />
                Çizim
              </button>
              <button className="taskbar-open-item" onClick={startNotes}>
                <img className="taskbar-open-img" src={notess} />
                Notlarım
              </button>
              {/* <button className="taskbar-open-item" >
                <img className="taskbar-open-img" src={dictinary} />
                Sözlük
              </button> */}
            </div>
          )}
          {controls && (
            <div className="taskbar-open-controls">
              <button onClick={handleQuit} className="taskbar-open-item">
                Kapat
              </button>
              <button className="taskbar-open-item">Kullanıcı Değiştir</button>
              <button className="taskbar-open-item">Şifre Değiştir</button>
            </div>
          )}
        </>
      )}

      <div className="taskbar-band">
        <div className="taskbar-items">
          <button
            className={
              showMenu ? "taskbar-item-button-active" : "taskbar-item-button"
            }
            onClick={handleToggle}
          >
            <img src={masterMenu} className="mastermenu-style" />
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
          {listen !== 0 && (
            <TaskBarItem
              name={"Listen"}
              icon={animatedIcons == 0 ? dinleme : dinlemegif}
              status={listen}
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
            <TaskBarItem name={"Options"} icon={option} status={options} />
          )}
          {taskManager !== 0 && (
            <TaskBarItem
              name={"TaskManager"}
              icon={taskmanager}
              status={taskManager}
            />
          )}
          {calculator !== 0 && (
            <TaskBarItem
              name={"Calculator"}
              icon={calculators}
              status={calculator}
            />
          )}
          {draw !== 0 && (
            <TaskBarItem name={"Draw"} icon={draws} status={draw} />
          )}
          {notes !== 0 && (
            <TaskBarItem name={"Notes"} icon={notess} status={notes} />
          )}
          {terminal !== 0 && (
            <TaskBarItem name={"Terminal"} icon={terminals} status={terminal} />
          )}
          {tetris !== 0 && <TaskBarItem name={"Tetris"} status={tetris} />}
          {snake !== 0 && <TaskBarItem name={"Snake"} status={snake} />}
          {addStudent !== 0 && <TaskBarItem name={"AddStudent"} icon={addStudents} status={addStudent} />}
          {addTeacher !== 0 && <TaskBarItem name={"AddTeacher"} icon={addTeachers} status={addTeacher} />}
          {listStudent !== 0 && <TaskBarItem name={"ListStudent"} icon={listStudents} status={listStudent} />}
          {listTeacher !== 0 && <TaskBarItem name={"ListTeacher"} icon={listTeachers} status={listTeacher} />}
          <div className="date">
            <div>{format(new Date(), "HH:mm")}</div>
            <div>{format(new Date(), "P", { locale: tr })}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskBar;
