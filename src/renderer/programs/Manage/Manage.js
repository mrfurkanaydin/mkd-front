import { useDispatch, useSelector } from "react-redux";
import "./Manage.css";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";
import ogretmenEkle from "../../../assets/ogretmenEkle.png";
import ogretmenListele from "../../../assets/ogretmenListele.png";
import ogrenciEkle from "../../../assets/ogrenciEkle.png";
import ogrenciListele from "../../../assets/ogrenciListele.png";

function Manage() {
  const manage = useSelector((state) => state.manage);
  const dispatch = useDispatch();
  const handleStop = () => {
    dispatch({ type: "STOP_PROGRAM", payload: "Manage" });
  };
  const handleMinimize = () => {
    dispatch({ type: "MINIMIZE_PROGRAM", payload: "Manage" });
  };
  const handleResize = () => {
    manage == 3
      ? dispatch({ type: "START_PROGRAM", payload: "Manage" })
      : dispatch({ type: "RESIZE_PROGRAM", payload: "Manage" });
  };
  return (
    <>
      <ProgramContainer
        title="Yönetim"
        handleStop={handleStop}
        handleMinimize={handleMinimize}
        handleResize={handleResize}
        status={manage}
        containerWidth="100%"
        containerHeight="calc(100% - 40px)"
      >
        <div className="manage-container">
          <div>
            <button onClick={()=>{dispatch({ type: "RESIZE_PROGRAM", payload: "AddStudent" })}} className="manage-box">
              <img className="manage-img" src={ogrenciEkle} />
              <div className="manage-text">Öğrenci Ekle</div>
            </button>
            <button onClick={()=>{dispatch({ type: "RESIZE_PROGRAM", payload: "AddTeacher" })}} className="manage-box">
              <img className="manage-img" src={ogretmenEkle} />
              <div className="manage-text">Öğretmen Ekle</div>
            </button>
          </div>
          <div>
            <button onClick={()=>{dispatch({ type: "RESIZE_PROGRAM", payload: "ListStudent" })}} className="manage-box">
              <img className="manage-img" src={ogrenciListele} />
              <div className="manage-text">Öğrenci Listele</div>
            </button>
            <button onClick={()=>{dispatch({ type: "RESIZE_PROGRAM", payload: "ListTeacher" })}} className="manage-box">
              <img className="manage-img" src={ogretmenListele} />
              <div className="manage-text">Öğretmen Listele</div>
            </button>
          </div>
        </div>
      </ProgramContainer>
    </>
  );
}

export default Manage;
