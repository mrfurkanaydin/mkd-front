import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";
import "./DetailStudent.css";
import { secondsToMinutes } from "date-fns";

function DetailStudent() {
  const detailStudent = useSelector((state) => state.detailStudent);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const user = useSelector((state) => state.user);
  const [data, setData] = useState();
  const [student, setStudent] = useState();
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
  const id = useSelector((state) => state.studentData);
  const sendRequest = async (config) => {
    const response = await axios.request(config);
    setStudent(response.data);
    let config2 = {
      method: "get",
      maxBodyLength: Infinity,
      url: `http://localhost:3000/v1/timers/${id}`
    };
    const response2 = await axios.request(config2);
    setData(response2.data);
  };
  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `http://localhost:3000/v1/users/${id}`,
      headers: {
        Authorization: `Bearer ${token.access.token}`
      }
    };
    if (detailStudent == 1 || detailStudent == 3) {
      sendRequest(config);
    }
  }, [detailStudent == 3 || detailStudent == 1]);
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
        <div className={theme == 0 ? "studentDetail-container":"studentDetail-container-dark"}>
          <div className={theme == 0 ? "studentDetail-name":"studentDetail-name-dark"}>
            {`${student?.firstName} Adlı Öğrencinin Detayları`}
          </div>
          <div className={theme == 0 ? "studentDetail-data":"studentDetail-data-dark"}>
            {data?.map((item) => {
              return (
                <div key={item.id + 1} className={theme == 0 ? "studentDetail-item":"studentDetail-item-dark"}>
                  <div className="studentDetail-title">
                    {item.application} Uygulamasında Geçirdiği Süre:
                  </div>
                  <div className="studentDetail-desc">
                    {secondsToMinutes(item.timer)} dk
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ProgramContainer>
    </>
  );
}

export default DetailStudent;
