import { useDispatch, useSelector } from "react-redux";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";
import "./Write.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function Write() {
  const write = useSelector((state) => state.write);
  const dispatch = useDispatch();
  const handleStop = () => {
    dispatch({ type: "STOP_PROGRAM", payload: "Write" });
  };
  const handleMinimize = () => {
    dispatch({ type: "MINIMIZE_PROGRAM", payload: "Write" });
  };
  const handleResize = () => {
    write == 3
      ? dispatch({ type: "START_PROGRAM", payload: "Write" })
      : dispatch({ type: "RESIZE_PROGRAM", payload: "Write" });
  };
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

export default Write
