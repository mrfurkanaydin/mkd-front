import { useDispatch, useSelector } from "react-redux";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";
import "./DetailStudent.css";
function Manage() {
  const detailStudent = useSelector((state) => state.detailStudent);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const handleStop = () => {
    dispatch({ type: "STOP_PROGRAM", payload: "DetailStudent" });
  };
  const handleMinimize = () => {
    dispatch({ type: "MINIMIZE_PROGRAM", payload: "DetailStudent" });
  };
  const handleResize = () => {
    detailStudent == 3
      ? dispatch({ type: "START_PROGRAM", payload: "DetailStudent" })
      : dispatch({ type: "RESIZE_PROGRAM", payload: "DetailStudent" });
  };
  const data = useSelector((state) => state.studentData);
  return (
    <>
      <ProgramContainer
        title="Öğrenci Detayları"
        handleStop={handleStop}
        handleMinimize={handleMinimize}
        handleResize={handleResize}
        status={detailStudent}
        containerWidth="100%"
        containerHeight="calc(100% - 40px)"
        width={500}
        disable="true"
      >
        <div className="studentDetail-container">
          <div className="studentDetail-name">{data}{"  Furkan Aydın Adlı Öğrencinin Detayları"}</div>
          <div className="studentDetail-data">
            <div className="studentDetail-item">
              <div className="studentDetail-title">
                Okuma Uygulamasında Geçirdiği Süre:
              </div>
              <div className="studentDetail-desc">60 dk</div>
            </div>
            <div className="studentDetail-item">
              <div className="studentDetail-title">
                Yazma Uygulamasında Geçirdiği Süre:
              </div>
              <div className="studentDetail-desc">60 dk</div>
            </div>
            <div className="studentDetail-item">
              <div className="studentDetail-title">
                İzleme Uygulamasında Geçirdiği Süre:
              </div>
              <div className="studentDetail-desc">60 dk</div>
            </div>
            <div className="studentDetail-item">
              <div className="studentDetail-title">
                Çizim Uygulamasında Geçirdiği Süre:
              </div>
              <div className="studentDetail-desc">60 dk</div>
            </div>
            <div className="studentDetail-item">
              <div className="studentDetail-title">
                Toplam Uygulamalarda Geçen Süre:
              </div>
              <div className="studentDetail-desc">60 dk</div>
            </div>
            <hr />
            <div className="studentDetail-item">
              <div className="studentDetail-title">
                Yılan Oyununda Geçirdiği Süre:
              </div>
              <div className="studentDetail-desc">60 dk</div>
            </div>
            <div className="studentDetail-item">
              <div className="studentDetail-title">
                Tetris Oyununda Geçirdiği Süre:
              </div>
              <div className="studentDetail-desc">60 dk</div>
            </div>
            <div className="studentDetail-item">
              <div className="studentDetail-title">
                Toplam Oyunlarda Geçirdiği Süre:
              </div>
              <div className="studentDetail-desc">60 dk</div>
            </div>
            <hr />
            <div className="studentDetail-item">
                <div className="studentDetail-title">
                    Yılan Oyununda Aldığı Son Puan:
                </div>
                <div className="studentDetail-desc">700</div>
            </div>
            <div className="studentDetail-item">
                <div className="studentDetail-title">
                    Tetris Oyununda Aldığı Son Puan:
                </div>
                <div className="studentDetail-desc">2400</div>
            </div>
            
          </div>
        </div>
      </ProgramContainer>
    </>
  );
}

export default Manage;
