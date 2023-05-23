import { useDispatch, useSelector } from "react-redux";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";
import { useRef, useEffect, useState } from "react";
import "./Draw.css";
import Colorful from "@uiw/react-color-colorful";
import { Modal } from "@mui/material";
import { ReactSketchCanvas } from "react-sketch-canvas";
import { differenceInMinutes } from "date-fns";
import timerUtil from "renderer/utils/timer";
const styles = {
  border: "0.0625rem solid #9c9c9c",
  borderRadius: "0.25rem"
};
function Draw() {
  const draw = useSelector((state) => state.draw);
  const dispatch = useDispatch();
  const [color, setColor] = useState("#000000");
  const [open, setOpen] = useState(false);
  const saveableCanvasRef = useRef(null);
  const [firstDate, setFirstDate] = useState();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (user.role == "student" && (draw == 1 || draw == 3)) {
      const date = new Date();
      setFirstDate(date);
    }
  }, [draw == 1 || draw == 3]);
  const handleStop = () => {
    dispatch({ type: "STOP_PROGRAM", payload: "Draw" });
    const date = new Date();
    const timer = differenceInMinutes(date, firstDate);
    timerUtil(timer, user.id, "Çizim");
  };
  const handleMinimize = () => {
    dispatch({ type: "MINIMIZE_PROGRAM", payload: "Draw" });
    const date = new Date();
    const timer = differenceInMinutes(date, firstDate);
    timerUtil(timer, user.id, "Çizim");
  };
  const handleResize = () => {
    draw == 3
      ? dispatch({ type: "START_PROGRAM", payload: "Draw" })
      : dispatch({ type: "RESIZE_PROGRAM", payload: "Draw" });
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ProgramContainer
        title="Çizim"
        handleStop={handleStop}
        handleMinimize={handleMinimize}
        handleResize={handleResize}
        status={draw}
        width={1250}
        height={700}
        disable="true"
      >
        <>
          <div className="pick-brush">
            <button onClick={handleOpen} className="pick-brush-button">
              Renk Seçiniz
            </button>
            <button
              onClick={() => saveableCanvasRef.current.clearCanvas()}
              className="pick-brush-button"
            >
              Hepsini Sil
            </button>
            <button
              onClick={() => saveableCanvasRef.current.undo()}
              className="pick-brush-button"
            >
              Geri Al
            </button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <div className="color-pick-modal">
                <Colorful
                  color={color}
                  onChange={(color) => {
                    setColor(color.hexa);
                  }}
                />
              </div>
            </Modal>
          </div>
          <ReactSketchCanvas
            ref={saveableCanvasRef}
            style={styles}
            strokeColor={color}
            strokeWidth={20}
          />
        </>
      </ProgramContainer>
    </>
  );
}

export default Draw;
