import { useDispatch, useSelector } from "react-redux";
import "../Programs.css";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";
import CanvasDraw from "react-canvas-draw";
import { useRef, useState } from "react";
import "./Draw.css";
import Colorful from "@uiw/react-color-colorful";
import { Modal } from "@mui/material";

function Draw() {
  const draw = useSelector((state) => state.draw);
  const dispatch = useDispatch();
  const [color, setColor] = useState("#000000");
  const [open, setOpen] = useState(false);
  const saveableCanvasRef = useRef(null);

  const handleStop = () => {
    dispatch({ type: "STOP_PROGRAM", payload: "Draw" });
  };
  const handleMinimize = () => {
    dispatch({ type: "MINIMIZE_PROGRAM", payload: "Draw" });
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
        width={1500}
        height={800}
        disable="true"
      >
        <>
          <div className="pick-brush">
            <button onClick={handleOpen} className="pick-brush-button">Renk Seçiniz</button>
            <button onClick={()=> saveableCanvasRef.current.clear()} className="pick-brush-button">Hepsini Sil</button>
            <button onClick={()=> saveableCanvasRef.current.undo()} className="pick-brush-button">Geri Al</button>
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
          <CanvasDraw
            ref={saveableCanvasRef}
            hideGridX
            hideGridY
            canvasWidth={1500}
            canvasHeight={750}
            brushColor={color}
          />
        </>
      </ProgramContainer>
    </>
  );
}

export default Draw;
