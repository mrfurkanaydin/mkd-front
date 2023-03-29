import { useDispatch } from "react-redux";
import "./HubItems.css";

function HubItems({ icon, name, type }) {
  const dispatch = useDispatch();
  const handleStart = () => {
    dispatch({ type: "RESIZE_PROGRAM", payload: type });
  };
  return (
    <button className="hubitem-container" onClick={handleStart}>
      <img className="hubitem-image" src={icon} />
      <div className="hubitem-text">{name}</div>
    </button>
  );
}

export default HubItems;
