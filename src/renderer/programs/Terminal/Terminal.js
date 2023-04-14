import { useDispatch, useSelector } from "react-redux";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";
import { Formik } from "formik";
import "./Terminal.css";
import { getCommands } from "renderer/utils/utils";
import { useState } from "react";

function Terminal() {
  const terminal = useSelector((state) => state.terminal);
  const dispatch = useDispatch();
  const [output, setOutput] = useState([]);
  const handleStop = () => {
    dispatch({ type: "STOP_PROGRAM", payload: "Terminal" });
  };
  const handleMinimize = () => {
    dispatch({ type: "MINIMIZE_PROGRAM", payload: "Terminal" });
  };
  const handleResize = () => {
    terminal == 3
      ? dispatch({ type: "START_PROGRAM", payload: "Terminal" })
      : dispatch({ type: "RESIZE_PROGRAM", payload: "Terminal" });
  };
  const handleSubmit = (values) => {
    var command = values.command.toLowerCase().trim();
    const splitted = command.split(" ");
    const result =
      splitted.length > 1
        ? getCommands(splitted[0], splitted[1])
        : getCommands(splitted[0]);
    if (result?.command == "gir") {
      result?.dizin == "dinleme" &&
        dispatch({ type: "START_PROGRAM", payload: "Listen" });
      result?.dizin == "yazma" &&
        dispatch({ type: "START_PROGRAM", payload: "Write" });
      result?.dizin == "okuma" &&
        dispatch({ type: "START_PROGRAM", payload: "Read" });
      result?.dizin == "terminal" &&
        dispatch({ type: "START_PROGRAM", payload: "Terminal" });
      result?.dizin == "izleme" &&
        dispatch({ type: "START_PROGRAM", payload: "Watch" });
      result?.dizin == "oyun" &&
        dispatch({ type: "START_PROGRAM", payload: "Game" });
      result?.dizin == "yönetim" &&
        dispatch({ type: "START_PROGRAM", payload: "Manage" });
      result?.dizin == "görev yöneticisi" &&
        dispatch({ type: "RESIZE_PROGRAM", payload: "TaskManager" });
      result?.dizin == "hesap makinesi" &&
        dispatch({ type: "RESIZE_PROGRAM", payload: "Calculator" });
      result?.dizin == "çizim" &&
        dispatch({ type: "RESIZE_PROGRAM", payload: "Draw" });
      result?.dizin == "notlar" &&
        dispatch({ type: "RESIZE_PROGRAM", payload: "Notes" });
      result?.dizin == "seçenekler" &&
        dispatch({ type: "RESIZE_PROGRAM", payload: "Options" });
      result?.dizin == "kapat" &&
        window.electron.ipcRenderer.sendMessage("send-shutdown");
    }
    if (result?.command == "çık") {
      result?.dizin == "dinleme" &&
        dispatch({ type: "STOP_PROGRAM", payload: "Listen" });
      result?.dizin == "yazma" &&
        dispatch({ type: "STOP_PROGRAM", payload: "Write" });
      result?.dizin == "okuma" &&
        dispatch({ type: "STOP_PROGRAM", payload: "Read" });
      result?.dizin == "terminal" &&
        dispatch({ type: "STOP_PROGRAM", payload: "Terminal" });
      result?.dizin == "izleme" &&
        dispatch({ type: "STOP_PROGRAM", payload: "Watch" });
      result?.dizin == "oyun" &&
        dispatch({ type: "STOP_PROGRAM", payload: "Game" });
      result?.dizin == "yönetim" &&
        dispatch({ type: "STOP_PROGRAM", payload: "Manage" });
      result?.dizin == "görev yöneticisi" &&
        dispatch({ type: "STOP_PROGRAM", payload: "TaskManager" });
      result?.dizin == "hesap makinesi" &&
        dispatch({ type: "STOP_PROGRAM", payload: "Calculator" });
      result?.dizin == "çizim" &&
        dispatch({ type: "STOP_PROGRAM", payload: "Draw" });
      result?.dizin == "notlar" &&
        dispatch({ type: "STOP_PROGRAM", payload: "Notes" });
      result?.dizin == "terminal" &&
        dispatch({ type: "STOP_PROGRAM", payload: "Terminal" });
      result?.dizin == "seçenekler" &&
        dispatch({ type: "STOP_PROGRAM", payload: "Options" });
    }
    if (result?.command == "kapat") {
      window.electron.ipcRenderer.sendMessage("send-shutdown");
    }

    values.command = "";
    setOutput([result, ...output]);
  };

  return (
    <>
      <ProgramContainer
        title="Terminal"
        handleStop={handleStop}
        handleMinimize={handleMinimize}
        handleResize={handleResize}
        status={terminal}
        disable={true}
        width={1000}
        height={600}
      >
        <div
          style={{ height: "500px", overflowY: "scroll", scrollbar: "hidden" }}
        >
          <div className="terminal-container">
            <div className="terminal-output">
              {output?.map((item, index) => (
                <div key={index} className="terminal-output-text">
                  <span className="terminal-output-text-command">root@ </span>
                  <span className="terminal-output-text-command">
                    {item?.command}
                  </span>
                  <br />
                  {item?.text}
                </div>
              ))}
            </div>
          </div>
          <Formik
            initialValues={{ command: "" }}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
              <form onSubmit={handleSubmit} className="input-container">
                <input
                  type="command"
                  name="command"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.command}
                  className="terminal-input"
                  placeholder="Komutları Görmek İçin 'yardım' Yazınız"
                />
              </form>
            )}
          </Formik>
        </div>
      </ProgramContainer>
    </>
  );
}

export default Terminal;
