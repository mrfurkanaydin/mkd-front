import "./TaskManagerItem.css";
import { useSelector } from "react-redux";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";

function TaskManagerItem({ name, type }) {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const handleClose = () => {
    dispatch({ type: "STOP_PROGRAM", payload: type });
  };
  return (
    <div
      className={
        theme == 0 ? "TaskManagerContainer" : "TaskManagerContainer-dark"
      }
    >
      <h1>{name}</h1>
      <AiFillCloseCircle onClick={handleClose} size={30} />
    </div>
  );
}

export default TaskManagerItem;
