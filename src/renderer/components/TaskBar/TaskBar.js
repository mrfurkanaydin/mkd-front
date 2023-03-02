import React, { useState } from "react";
import "./TaskBar.css";
import masterMenu from "../../../assets/mastermenu.png";
import TaskBarItem from "../TaskBarItem/TaskBarItem";
import okuma from "../../../assets/okuma.png";
import yazma from "../../../assets/yazma.png";
import izleme from "../../../assets/izleme.png";
import dinleme from "../../../assets/dinleme.png";
import oyun from "../../../assets/oyun.png";
import yonetim from "../../../assets/yönetim.png";
import Read from "renderer/programs/Read/Read";
import { useSelector } from "react-redux";

function TaskBar() {
  const [showMenu, setShowMenu] = useState(false);
  const handleOpen = () => {
    setShowMenu(!showMenu);
  };
  const read = useSelector((state) => state.read);
  const write = useSelector((state) => state.write);
  const listen = useSelector((state) => state.listen);
  const watch = useSelector((state) => state.watch);
  const play = useSelector((state) => state.play);
  const manage = useSelector((state) => state.manage);

  return (
    <>
      {showMenu && (
        <div className="taskbar-open">
          <div>taskbar open</div>
        </div>
      )}

      <div className="taskbar-band">
        <div className="taskbar-items">
          <button
            className={
              showMenu ? "taskbar-item-button-active" : "taskbar-item-button"
            }
            onClick={handleOpen}
          >
            <img src={masterMenu} className="mastermenu-style" />
          </button>
          {(read == 1 || read == 2) && (
            <TaskBarItem name={"Okuma"} icon={okuma} status={read} />
          )}
          {(write == 1 || write == 2) && (
            <TaskBarItem name={"Yazma"} icon={yazma} status={write} />
          )}
          {(watch == 1 || watch == 2) && (
            <TaskBarItem name={"İzleme"} icon={izleme} status={watch} />
          )}
          {(listen == 1 || listen == 2) && (
            <TaskBarItem name={"Dinleme"} icon={dinleme} status={listen} />
          )}
          {(play == 1 || play == 2) && (
            <TaskBarItem name={"Oyun"} icon={oyun} status={play} />
          )}
          {(manage == 1 || manage == 2) && (
            <TaskBarItem name={"Yönetim"} icon={yonetim} status={manage} />
          )}
        </div>
      </div>
    </>
  );
}

export default TaskBar;
