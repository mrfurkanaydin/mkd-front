import { useDispatch, useSelector } from "react-redux";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";
import "./Write.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { differenceInMinutes } from "date-fns";
import { useEffect, useState } from "react";
import timerUtil from "renderer/utils/timer";

function Write() {
  const write = useSelector((state) => state.write);
  const [firstDate, setFirstDate] = useState();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleStop = () => {
    dispatch({ type: "STOP_PROGRAM", payload: "Write" });
    const date = new Date();
    const timer = differenceInMinutes(date, firstDate);
    timerUtil(timer, user.id, "Yazma");
  };
  const handleMinimize = () => {
    dispatch({ type: "MINIMIZE_PROGRAM", payload: "Write" });
    const date = new Date();
    const timer = differenceInMinutes(date, firstDate);
    timerUtil(timer, user.id, "Yazma");
  };
  const handleResize = () => {
    write == 3
      ? dispatch({ type: "START_PROGRAM", payload: "Write" })
      : dispatch({ type: "RESIZE_PROGRAM", payload: "Write" });
  };
  useEffect(() => {
    if (user.role == "student" && (write == 1 || write == 3)) {
        const date = new Date();
        setFirstDate(date);
      }
}, [write == 1 || write == 3]);
  return (
    <>
      <ProgramContainer
        title="Yazma"
        handleStop={handleStop}
        handleMinimize={handleMinimize}
        handleResize={handleResize}
        status={write}
        bgColor="white"
      >
        <>
          <Editor
            // editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            // onEditorStateChange={this.onEditorStateChange}
          />
        </>
      </ProgramContainer>
    </>
  );
}

export default Write;
