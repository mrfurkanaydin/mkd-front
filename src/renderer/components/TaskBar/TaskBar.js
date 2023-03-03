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
import option from "../../../assets/secenekler.png";
import control from "../../../assets/kontrol.png";
import equipment from "../../../assets/donatılar.png";
import Read from "renderer/programs/Read/Read";
import { useDispatch, useSelector } from "react-redux";

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
    dispatch({ type: "START_PROGRAM", payload: "Ayarlar" });
    handleToggle()
  }
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
              <div className="taskbar-open-item">Görev Yöneticisi</div>
              <div className="taskbar-open-item">Terminal</div>
              <div className="taskbar-open-item">Hesap Makinesi</div>
              <div className="taskbar-open-item">Çizim</div>
              <div className="taskbar-open-item">Notlarım</div>
            </div>
          )}
          {controls && (
            <div className="taskbar-open-controls">
              <button onClick={handleQuit} className="taskbar-open-item">Kapat</button>
              <div className="taskbar-open-item">Kullanıcı Değiştir</div>
              <div className="taskbar-open-item">Şifre Değiştir</div>
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
          {(game == 1 || game == 2) && (
            <TaskBarItem name={"Oyun"} icon={oyun} status={game} />
          )}
          {(manage == 1 || manage == 2) && (
            <TaskBarItem name={"Yönetim"} icon={yonetim} status={manage} />
          )}
          {(options == 1 || options == 2) && (
            <TaskBarItem name={"Ayarlar"} icon={option} status={options} />
          )}
        </div>
      </div>
    </>
  );
}

export default TaskBar;
