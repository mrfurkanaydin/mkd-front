import HubItems from "renderer/components/HubItems/HubItems";
import TaskBar from "../../components/TaskBar/TaskBar";
import "./Hub.css";
import okuma from "../../../assets/okuma.png";
import yazma from "../../../assets/yazma.png";
import izleme from "../../../assets/izleme.png";
import dinleme from "../../../assets/dinleme.png";
import dinlemegif from "../../../assets/dinleme.gif";
import oyun from "../../../assets/oyun.png";
import yonetim from "../../../assets/yönetim.png";
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
        <HubItems icon={okuma} name="Read" />
        <HubItems icon={yazma} name="Write" />
        <HubItems icon={izleme} name="Watch" />
        <HubItems
          icon={animatedIcons == 0 ? dinleme : dinlemegif}
          name="Listen"
        />
        <HubItems icon={oyun} name="Game" />
        <HubItems icon={yonetim} name="Manage" />
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
