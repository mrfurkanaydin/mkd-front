import { useDispatch, useSelector } from "react-redux";
import "./AddStudent.css";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";
import { Field, Formik, Form } from "formik";

function AddStudent() {
  const addStudent = useSelector((state) => state.addStudent);
  const dispatch = useDispatch();
  const handleStop = () => {
    dispatch({ type: "STOP_PROGRAM", payload: "AddStudent" });
  };
  const handleMinimize = () => {
    dispatch({ type: "MINIMIZE_PROGRAM", payload: "AddStudent" });
  };
  const handleResize = () => {
    addStudent == 3
      ? dispatch({ type: "START_PROGRAM", payload: "AddStudent" })
      : dispatch({ type: "RESIZE_PROGRAM", payload: "AddStudent" });
  };
  return (
    <>
      <ProgramContainer
        title="Öğrenci Ekle"
        handleStop={handleStop}
        handleMinimize={handleMinimize}
        handleResize={handleResize}
        status={addStudent}
        containerWidth="100%"
        containerHeight="calc(100% - 40px)"
        width={700}
        height={500}
        disable="true"
      >
        <div>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              gender: "",
              birthDate: ""
            }}
            onSubmit={async (values) => {
              console.log(values);
              dispatch({ type: "STOP_PROGRAM", payload: "AddStudent" });
            }}
          >
            {({ values }) => (
              <Form style={{marginTop:50}}>
                <div className="addStudent-container">
                  <div className="addStudent-label">Öğrenci Adı</div>
                  <Field
                    className="addStudent-input"
                    id="firstName"
                    name="firstName"
                  />
                </div>
                <div className="addStudent-container">
                  <div className="addStudent-label">Öğrenci Soyadı</div>

                  <Field
                    className="addStudent-input"
                    id="lastName"
                    name="lastName"
                  />
                </div>
                <div className="addStudent-container">
                  <div className="addStudent-label">Cinsiyet</div>
                  <Field
                    className="addStudent-input"
                    type="radio"
                    name="gender"
                    value="Erkek"
                  />
                  <div style={{ fontSize: 25, marginRight: 10 }}>Erkek</div>
                  <Field
                    className="addStudent-input"
                    type="radio"
                    name="gender"
                    value="Kadın"
                  />
                  <div style={{ fontSize: 25, marginRight: 5 }}>Kadın</div>
                </div>
                <div className="addStudent-container">
                  <div className="addStudent-label">Doğum Tarihi</div>

                  <Field
                    className="addStudent-input"
                    id="birthDate"
                    name="birthDate"
                  />
                </div>
                <div className="addStudent-container">
                  <button className="addStudent-button" type="submit">Kaydet</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </ProgramContainer>
    </>
  );
}

export default AddStudent;
