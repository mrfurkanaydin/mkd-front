import HubItems from "renderer/components/HubItems/HubItems";
import TaskBar from "../../components/TaskBar/TaskBar";
import "./Hub.css";
import { useSelector } from "react-redux";
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
import Read from "renderer/programs/Read/Read";
import Options from "renderer/programs/Options/Options";
import Write from "renderer/programs/Write/Write";
import Watch from "renderer/programs/Watch/Watch";
import Listen from "renderer/programs/Listen/Listen";
import Game from "renderer/programs/Game/Game";
import Manage from "renderer/programs/Manage/Manage";
import Cursor from "renderer/components/Cursor/Cursor";
import TaskManager from "renderer/programs/TaskManager/TaskManager";
import Calculator from "renderer/programs/Calculator/Calculator";
import Draw from "renderer/programs/Draw/Draw";
import Notes from "renderer/programs/Notes/Notes";
import Terminal from "renderer/programs/Terminal/Terminal";
import Snake from "renderer/programs/Game/Snake/Snake";
import Tetris from "renderer/programs/Game/Tetris/Tetris";
import AddStudent from "renderer/programs/Manage/AddStudent/AddStudent";
import AddTeacher from "renderer/programs/Manage/AddTeacher/AddTeacher";
import ListStudent from "renderer/programs/Manage/ListStudent/ListStudent";
import ListTeacher from "renderer/programs/Manage/ListTeacher/ListTeacher";
import DetailStudent from "renderer/programs/Manage/DetailStudent/DetailStudent";
import Login from "../Login/Login";

function Hub() {
  const animatedIcons = useSelector((state) => state.animatedIcons);
  const mousePointer = useSelector((state) => state.mousePointer);
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  console.log(user);
  console.log(token);
  return (
    <>
      {user == null ? (
        <Login />
      ) : (
        <div
          className={`${
            mousePointer === 0 ? "hub-container" : "hub-container-cursor"
          }`}
        >
          {mousePointer === 1 && <Cursor />}

          <div className="hub-hubitems">
            <HubItems
              icon={animatedIcons === false ? okuma : okumagif}
              name="Okuma"
              type="Read"
            />
            <HubItems
              icon={animatedIcons === false ? yazma : yazmagif}
              name="Yazma"
              type="Write"
            />
            <HubItems
              icon={animatedIcons === false ? izleme : izlemegif}
              name="İzleme"
              type="Watch"
            />
            {/* <HubItems icon={animatedIcons === false ? dinleme : dinlemegif} name="Dinleme" type="Listen" /> */}
            <HubItems
              icon={animatedIcons === false ? oyun : oyungif}
              name="Oyun"
              type="Game"
            />
            <HubItems
              icon={animatedIcons === false ? yonetim : yonetimgif}
              name="Yönetim"
              type="Manage"
            />
          </div>
          <>
            <Read />
            <Write />
            <Watch />
            <Listen />
            <Game />
            <Manage />
            <Options />
            <TaskManager />
            <Calculator />
            <Draw />
            <Notes />
            <Terminal />
            <Snake />
            <Tetris />
            <AddStudent />
            <AddTeacher />
            <ListStudent />
            <ListTeacher />
            <DetailStudent />
          </>

          <TaskBar />
        </div>
      )}
    </>
  );
}

export default Hub;
