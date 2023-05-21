import { useDispatch, useSelector } from "react-redux";
import "./AddTeacher.css";
import { Field, Formik, Form } from "formik";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";
import axios from "axios";

function AddTeacher() {
  const addTeacher = useSelector((state) => state.addTeacher);
  const theme = useSelector((state) => state.theme);
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
  const token = useSelector((state) => state.token);
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
        disable="true"
      >
        <div>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              gender: "",
              birthDate: "",
              email: "",
              role: "teacher",
              password: "",
            }}
            onSubmit={async (values) => {
              console.log(values);
              let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'http://localhost:3000/v1/users',
                headers: { 
                  'Content-Type': 'application/json', 
                  'Authorization': `Bearer ${token.access.token}`
                },
                data : values
              };
              axios.request(config).then(function (response) {
                console.log(response.data);
                dispatch({ type: "STOP_PROGRAM", payload: "AddTeacher" });
              }).catch(function (error) {
                console.error(error);
              });
            }}
          >
            {({ values }) => (
              <Form style={{marginTop:50}}>
                <div className="addTeacher-container">
                  <div className={ theme == 0 ? "addTeacher-label" : "addTeacher-label-dark" }>Öğretmen Adı</div>
                  <Field
                    className="addTeacher-input"
                    id="firstName"
                    name="firstName"
                  />
                </div>
                <div className="addTeacher-container">
                  <div className={ theme == 0 ? "addTeacher-label" : "addTeacher-label-dark" }>Öğretmen Soyadı</div>

                  <Field
                    className="addTeacher-input"
                    id="lastName"
                    name="lastName"
                  />
                </div>
                <div className="addTeacher-container">
                  <div className={ theme == 0 ? "addTeacher-label" : "addTeacher-label-dark" }>Cinsiyet</div>
                  <Field
                    className="addTeacher-input"
                    type="radio"
                    name="gender"
                    value="Erkek"
                  />
                  <div className={theme == 0 ? "addTeacher-man-label" : "addTeacher-man-label-dark"}>Erkek</div>
                  <Field
                    className="addTeacher-input"
                    type="radio"
                    name="gender"
                    value="Kadın"
                  />
                  <div className={theme == 0 ? "addTeacher-man-label" : "addTeacher-man-label-dark"}>Kadın</div>
                </div>
                <div className="addTeacher-container">
                  <div className={ theme == 0 ? "addTeacher-label" : "addTeacher-label-dark" }>Doğum Tarihi</div>

                  <Field
                    className="addTeacher-input"
                    id="birthDate"
                    name="birthDate"
                  />
                </div>
                <div className="addTeacher-container">
                  <div className={ theme == 0 ? "addTeacher-label" : "addTeacher-label-dark" }>Email</div>

                  <Field
                    className="addTeacher-input"
                    id="email"
                    name="email"
                    type="email"
                  />
                </div>
                <div className="addTeacher-container">
                  <div className={ theme == 0 ? "addTeacher-label" : "addTeacher-label-dark" }>Şifre</div>

                  <Field
                    className="addTeacher-input"
                    id="password"
                    name="password"
                    type="password"
                  />
                </div>
                <div className="addTeacher-container">
                  <button className={ theme == 0 ? "addTeacher-button" : "addTeacher-button-dark" } type="submit">Kaydet</button>
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
