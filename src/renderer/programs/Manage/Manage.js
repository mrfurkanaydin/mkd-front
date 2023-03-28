import { useDispatch, useSelector } from "react-redux";
import "./Manage.css";
import "../Programs.css";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

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
        title="Manage"
        handleStop={handleStop}
        handleMinimize={handleMinimize}
        handleResize={handleResize}
        status={manage}
      >
        <>
          {/* <Editor
            // editorState={editorState}
            // toolbarClassName="toolbarClassName"
            // wrapperClassName="wrapperClassName"
            // editorClassName="editorClassName"
            // onEditorStateChange={this.onEditorStateChange}
          /> */}
        </>
      </ProgramContainer>
    </>
  );
}

export default Manage;
