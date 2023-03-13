import React, { useState } from "react";
import "./TaskBar.css";
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
import yonetim from "../../../assets/yönetim.png";
import yonetimgif from "../../../assets/yönetim.gif";
import option from "../../../assets/secenekler.png";
import control from "../../../assets/kontrol.png";
import equipment from "../../../assets/donatılar.png";
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
    dispatch({ type: "START_PROGRAM", payload: "Options" });
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
              <div className="taskbar-open-item">Görev Yöneticisi</div>
              <div className="taskbar-open-item">Terminal</div>
              <div className="taskbar-open-item">Hesap Makinesi</div>
              <div className="taskbar-open-item">Çizim</div>
              <div className="taskbar-open-item">Notlarım</div>
            </div>
          )}
          {controls && (
            <div className="taskbar-open-controls">
              <button onClick={handleQuit} className="taskbar-open-item">
                Kapat
              </button>
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
          {read !== 0 && (
            <TaskBarItem name={"Read"} icon={animatedIcons == 0 ? okuma : okumagif} status={read} />
          )}
          {write !== 0 && (
            <TaskBarItem name={"Write"} icon={animatedIcons == 0 ? yazma : yazmagif} status={write} />
          )}
          {watch !== 0 && (
            <TaskBarItem name={"Watch"} icon={animatedIcons == 0 ? izleme : izlemegif} status={watch} />
          )}
          {listen !== 0 && (
            <TaskBarItem name={"Listen"} icon={animatedIcons == 0 ? dinleme : dinlemegif} status={listen} />
          )}
          {game !== 0 && (
            <TaskBarItem name={"Game"} icon={animatedIcons == 0 ? oyun : oyungif} status={game} />
          )}
          {manage !== 0 && (
            <TaskBarItem name={"Manage"} icon={animatedIcons == 0 ? yonetim : yonetimgif} status={manage} />
          )}
          {options !== 0 && (
            <TaskBarItem name={"Options"} icon={option} status={options} />
          )}
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
