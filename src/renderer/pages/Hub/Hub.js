import HubItems from "renderer/components/HubItems/HubItems";
import TaskBar from "../../components/TaskBar/TaskBar";
import "./Hub.css";
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
import Read from "renderer/programs/Read/Read";
import Options from "renderer/programs/Options/Options";
import Write from "renderer/programs/Write/Write";
import Watch from "renderer/programs/Watch/Watch";
import Listen from "renderer/programs/Listen/Listen";
import Game from "renderer/programs/Game/Game";
import Manage from "renderer/programs/Manage/Manage";
import { useSelector } from "react-redux";
import Cursor from "renderer/components/Cursor/Cursor";

function Hub() {
  const animatedIcons = useSelector((state) => state.animatedIcons);
  const mousePointer = useSelector((state) => state.mousePointer);
  return (
    <div
      className={`${
        mousePointer == 0 ? "hub-container" : "hub-container-cursor"
      }`}
    >
      {mousePointer == 1 && <Cursor />}
      <div className="hub-hubitems">
        <HubItems icon={animatedIcons == false ? okuma : okumagif} name="Read" />
        <HubItems icon={animatedIcons == false ? yazma : yazmagif} name="Write" />
        <HubItems icon={animatedIcons == false ? izleme : izlemegif} name="Watch" />
        <HubItems icon={animatedIcons == false ? dinleme : dinlemegif} name="Listen" />
        <HubItems icon={animatedIcons == false ? oyun : oyungif} name="Game" />
        <HubItems icon={animatedIcons == false ? yonetim : yonetimgif} name="Manage"/>
      </div>
      <>
        <Read />
        <Write />
        <Watch />
        <Listen />
        <Game />
        <Manage />
        <Options />
      </>

      <TaskBar />
    </div>
  );
}

export default Hub;
