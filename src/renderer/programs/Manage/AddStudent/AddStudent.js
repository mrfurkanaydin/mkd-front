import { useDispatch, useSelector } from "react-redux";
import "./AddStudent.css";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";
import { Field, Formik, Form } from "formik";
import axios from "axios";
import { v4 } from 'uuid';

function AddStudent() {
  const addStudent = useSelector((state) => state.addStudent);
  const theme = useSelector((state) => state.theme);
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
  const token = useSelector((state) => state.token);
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
        height={600}
        disable="true"
      >
        <div>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              gender: "",
              birthDate: "",
              role:"student",
              password:"",
              email: v4()
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
                dispatch({ type: "STOP_PROGRAM", payload: "AddStudent" });
              }).catch(function (error) {
                console.error(error);
              });
            }}
          >
            {({ values }) => (
              <Form style={{marginTop:50}}>
                <div className="addStudent-container">
                  <div className= { theme == 0 ? "addStudent-label" : "addStudent-label-dark" }>Öğrenci Adı</div>
                  <Field
                    className="addStudent-input"
                    id="firstName"
                    name="firstName"
                  />
                </div>
                <div className="addStudent-container">
                  <div className= { theme == 0 ? "addStudent-label" : "addStudent-label-dark" }>Öğrenci Soyadı</div>

                  <Field
                    className="addStudent-input"
                    id="lastName"
                    name="lastName"
                  />
                </div>
                <div className="addStudent-container">
                  <div className= { theme == 0 ? "addStudent-label" : "addStudent-label-dark" }>Cinsiyet</div>
                  <Field
                    className="addStudent-input"
                    type="radio"
                    name="gender"
                    value="Erkek"
                  />
                  <div className={theme == 0 ? "addStudent-man-label" : "addStudent-man-label-dark"}>Erkek</div>
                  <Field
                    className="addStudent-input"
                    type="radio"
                    name="gender"
                    value="Kadın"
                  />
                  <div className={theme == 0 ? "addStudent-woman-label" : "addStudent-woman-label-dark"}>Kadın</div>
                </div>
                <div className="addStudent-container">
                  <div className= { theme == 0 ? "addStudent-label" : "addStudent-label-dark" }>Doğum Tarihi</div>
                  
                  <Field
                    className="addStudent-input"
                    id="birthDate"
                    name="birthDate"
                  />
                </div>
                <div className="addStudent-container">
                  <div className= { theme == 0 ? "addStudent-label" : "addStudent-label-dark" }>TC No</div>
                  
                  <Field
                    className="addStudent-input"
                    id="tcNo"
                    name="tcNo"
                    maxLength="11"
                  />
                </div>
                <div className="addStudent-container">
                  <div className= { theme == 0 ? "addStudent-label" : "addStudent-label-dark" }>Şifre</div>
                  
                  <Field
                    className="addStudent-input"
                    id="password"
                    name="password"
                    type="password"
                  />
                </div>
                <div className="addStudent-container">
                  <button className = { theme == 0 ? "addStudent-button" : "addStudent-button-dark" } type="submit">Kaydet</button>
                  
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
