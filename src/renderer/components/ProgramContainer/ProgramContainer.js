import Draggable from "react-draggable";
import { FaRegWindowMinimize } from "react-icons/fa";
import { IoIosQrScanner } from "react-icons/io";
import { TfiClose } from "react-icons/tfi";
import { useSelector } from "react-redux";
import "./ProgramContainer.css";
function ProgramContainer({
  children,
  title,
  handleMinimize,
  handleResize,
  handleStop,
  status,
  width,
  height,
  disable,
  bgColor,
  containerWidth = "100%",
  containerHeight = "100%"
}) {
  const mouse = useSelector((state) => state.mousePointer);
  const theme = useSelector((state) => state.theme);
  return (
    <div>
      {status != 0 && (
        <div handle=".program-header">
          <Draggable
            handle={
              theme == 0
                ? ".program-header-resize"
                : ".program-header-resize-dark"
            }
            position={status == 1 && { x: 0, y: 0 }}
          >
            <div
              className={
                status == 2
                  ? "program-container-none"
                  : status == 3
                  ? theme == 0
                    ? "program-container-resize"
                    : "program-container-resize-dark"
                  : theme == 0
                  ? "program-container"
                  : "program-container-dark"
              }
              style={{ width: width, height: height, backgroundColor: bgColor }}
            >
              <div
                className={
                  status == 3
                    ? theme == 0
                      ? "program-header-resize"
                      : "program-header-resize-dark"
                    : theme == 0
                    ? "program-header"
                    : "program-header-dark"
                }
              >
                <div className="program-title">{title}</div>
                <div className="program-header-buttons">
                  <button
                    className={`program-header-button ${mouse && "mouse-none"}`}
                    onClick={handleMinimize}
                    style={{ backgroundColor: "#ffc400", marginRight: "5px" }}
                  >
                    <FaRegWindowMinimize />
                  </button>
                  <button
                    className={`program-header-button ${mouse && "mouse-none"}`}
                    onClick={handleResize}
                    disabled={disable}
                    style={{ backgroundColor: "#689f38", marginRight: "5px" }}
                  >
                    <IoIosQrScanner />
                  </button>
                  <button
                    className={`program-header-button ${mouse && "mouse-none"}`}
                    onClick={handleStop}
                    style={{ backgroundColor: "#b71c1c" }}
                  >
                    <TfiClose />
                  </button>
                </div>
              </div>
              <div
                className="container"
                style={{ width: containerWidth, height: containerHeight }}
              >
                {children}
              </div>
            </div>
          </Draggable>
        </div>
      )}
    </div>
  );
}

export default ProgramContainer;
