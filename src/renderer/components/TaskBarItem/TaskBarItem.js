import { useDispatch, useSelector } from "react-redux";
import "./TaskBarItem.css";

const selectors = {
  Read: "lastRead",
  Write: "lastWrite",
  Listen: "lastListen",
  Watch: "lastWatch",
  Game: "lastGame",
  Manage: "lastManage",
  Options: "lastOptions",
  TaskManager: "lastTaskManager"
};

function TaskBarItem({ name, icon, status }) {
  const dispatch = useDispatch();
  const lastSelector = useSelector((state) => state);
  const handleOpen = () => {
    status == 2 && (
      lastSelector[selectors[name]] == 1
        ? dispatch({ type: "START_PROGRAM", payload: name })
        : lastSelector[selectors[name]] == 3  &&
          dispatch({ type: "RESIZE_PROGRAM", payload: name })
    )
  };

  return (
    <div>
      <button
        className={
          status == 1 || status == 3 ? "taskbar-item-active" : "taskbar-item"
        }
        onClick={handleOpen}
      >
        <img src={icon} className="taskbar-item-img" />
      </button>
    </div>
  );
}

export default TaskBarItem;
