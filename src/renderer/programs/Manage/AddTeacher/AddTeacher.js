import { useDispatch, useSelector } from "react-redux";
import "./AddTeacher.css";
import { Field, Formik, Form } from "formik";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";


function AddTeacher() {
  const addTeacher = useSelector((state) => state.addTeacher);
  const dispatch = useDispatch();
  const handleStop = () => {
    dispatch({ type: "STOP_PROGRAM", payload: "AddTeacher" });
  };
  const handleMinimize = () => {
    dispatch({ type: "MINIMIZE_PROGRAM", payload: "AddTeacher" });
  };
  const handleResize = () => {
    addTeacher == 3
      ? dispatch({ type: "START_PROGRAM", payload: "AddTeacher" })
      : dispatch({ type: "RESIZE_PROGRAM", payload: "AddTeacher" });
  };
  return (
    <>
      <ProgramContainer
        title="Öğretmen Ekle"
        handleStop={handleStop}
        handleMinimize={handleMinimize}
        handleResize={handleResize}
        status={addTeacher}
        containerWidth="100%"
        containerHeight="calc(100% - 40px)"
        width={700}
        height={550}
        disable="true"Öğretmen
      >
        <div>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              gender: "",
              birthDate: "",
              email: ""
            }}
            onSubmit={async (values) => {
              console.log(values);
              dispatch({ type: "STOP_PROGRAM", payload: "AddStudent" });
            }}
          >
            {({ values }) => (
              <Form style={{marginTop:50}}>
                <div className="addTeacher-container">
                  <div className="addTeacher-label">Öğretmen Adı</div>
                  <Field
                    className="addTeacher-input"
                    id="firstName"
                    name="firstName"
                  />
                </div>
                <div className="addTeacher-container">
                  <div className="addTeacher-label">Öğretmen Soyadı</div>

                  <Field
                    className="addTeacher-input"
                    id="lastName"
                    name="lastName"
                  />
                </div>
                <div className="addTeacher-container">
                  <div className="addTeacher-label">Cinsiyet</div>
                  <Field
                    className="addTeacher-input"
                    type="radio"
                    name="gender"
                    value="Erkek"
                  />
                  <div style={{ fontSize: 25, marginRight: 10 }}>Erkek</div>
                  <Field
                    className="addTeacher-input"
                    type="radio"
                    name="gender"
                    value="Kadın"
                  />
                  <div style={{ fontSize: 25, marginRight: 5 }}>Kadın</div>
                </div>
                <div className="addTeacher-container">
                  <div className="addTeacher-label">Doğum Tarihi</div>

                  <Field
                    className="addTeacher-input"
                    id="birthDate"
                    name="birthDate"
                  />
                </div>
                <div className="addTeacher-container">
                  <div className="addTeacher-label">Email</div>

                  <Field
                    className="addTeacher-input"
                    id="email"
                    name="email"
                    type="email"
                  />
                </div>
                <div className="addTeacher-container">
                  <button className="addTeacher-button" type="submit">Kaydet</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </ProgramContainer>
    </>
  );
}

export default AddTeacher;
