import { useDispatch, useSelector } from "react-redux";
import "./TaskBarItem.css";

const selectors = {
  Okuma: "lastRead",
  Yazma: "lastWrite",
  Dinleme: "lastListen",
  İzleme: "lastWatch",
  Oyun: "lastGame",
  Yönetim: "lastManage",
  Ayarlar: "lastOptions"
};

function TaskBarItem({ name, icon, status }) {
  const dispatch = useDispatch();
  const lastSelector = useSelector((state) => state);
  const handleOpen = () => {
    lastSelector[selectors[name]] == 1 && status == 2
      ? dispatch({ type: "START_PROGRAM", payload: name })
      : lastSelector[selectors[name]] == 3 &&
        status == 2 &&
        dispatch({ type: "RESIZE_PROGRAM", payload: name });
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
