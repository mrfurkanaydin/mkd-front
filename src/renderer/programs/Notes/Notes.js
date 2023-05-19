import { useDispatch, useSelector } from "react-redux";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";
import { Form, Formik } from "formik";
import "./Notes.css";
import { useState } from "react";

function Notes() {
  const [note, setNote] = useState([]);
  const notes = useSelector((state) => state.notes);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const handleStop = () => {
    dispatch({ type: "STOP_PROGRAM", payload: "Notes" });
  };
  const handleMinimize = () => {
    dispatch({ type: "MINIMIZE_PROGRAM", payload: "Notes" });
  };
  const handleResize = () => {
    notes == 3
      ? dispatch({ type: "START_PROGRAM", payload: "Notes" })
      : dispatch({ type: "RESIZE_PROGRAM", payload: "Notes" });
  };
  const addNote = (value) => {
    setNote([value.note, ...note]);
    value.note = "";
  };
  return (
    <>
      <ProgramContainer
        title="Notlar"
        handleStop={handleStop}
        handleMinimize={handleMinimize}
        handleResize={handleResize}
        status={notes}
        disable={true}
        height={700}
      >
        <div className="notes-container">
          <Formik
            initialValues={{
              note: ""
            }}
            onSubmit={(values) => addNote(values)}
          >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
              <form className="notes-form" onSubmit={handleSubmit}>
                <input
                  name="note"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.note}
                  className="notes-form-input"
                  placeholder="Notunuzu buraya yazın..."
                />
                <button className="notes-form-button" type="submit">
                  Ekle
                </button>
              </form>
            )}
          </Formik>
          <div className="notes-list">
            {note?.map((item, index) => (
              <div className={theme == 0 ? "notes-list-item" : "notes-list-item-dark"} key={index}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </ProgramContainer>
    </>
  );
}

export default Notes;
