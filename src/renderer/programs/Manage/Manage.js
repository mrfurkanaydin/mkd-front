import { useDispatch, useSelector } from "react-redux";
import "./Manage.css";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";
import ogretmenEkle from "../../../assets/ogretmenEkle.png";
import ogretmenListele from "../../../assets/ogretmenListele.png";
import ogrenciEkle from "../../../assets/ogrenciEkle.png";
import ogrenciListele from "../../../assets/ogrenciListele.png";

function Manage() {
  const manage = useSelector((state) => state.manage);
  const theme = useSelector((state) => state.theme);
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
  const user = useSelector((state) => state.user);
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
        height={"500px"}
        width={"500px"}
      >
        <div className="manage-container">
          <div>
            <button
              onClick={() => {
                dispatch({ type: "RESIZE_PROGRAM", payload: "AddStudent" });
              }}
              className={theme == 0 ? "manage-box" : "manage-box-dark"}
            >
              <img className="manage-img" src={ogrenciEkle} />
              <div className={theme == 0 ? "manage-text" : "manage-text-dark"}>
                Öğrenci Ekle
              </div>
            </button>
            {user.role == "admin" && (
              <button
                onClick={() => {
                  dispatch({ type: "RESIZE_PROGRAM", payload: "AddTeacher" });
                }}
                className={theme == 0 ? "manage-box" : "manage-box-dark"}
              >
                <img className="manage-img" src={ogretmenEkle} />
                <div
                  className={theme == 0 ? "manage-text" : "manage-text-dark"}
                >
                  Öğretmen Ekle
                </div>
              </button>
            )}
          </div>
          <div>
            <button
              onClick={() => {
                dispatch({ type: "RESIZE_PROGRAM", payload: "ListStudent" });
              }}
              className={theme == 0 ? "manage-box" : "manage-box-dark"}
            >
              <img className="manage-img" src={ogrenciListele} />
              <div className={theme == 0 ? "manage-text" : "manage-text-dark"}>
                Öğrenci Listele
              </div>
            </button>
            {user.role == "admin" && (
              <button
                onClick={() => {
                  dispatch({ type: "RESIZE_PROGRAM", payload: "ListTeacher" });
                }}
                className={theme == 0 ? "manage-box" : "manage-box-dark"}
              >
                <img className="manage-img" src={ogretmenListele} />
                <div
                  className={theme == 0 ? "manage-text" : "manage-text-dark"}
                >
                  Öğretmen Listele
                </div>
              </button>
            )}
          </div>
        </div>
      </ProgramContainer>
    </>
  );
}

export default Manage;
