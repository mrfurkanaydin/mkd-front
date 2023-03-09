import { useDispatch, useSelector } from "react-redux";
import "./Options.css";
import "../Programs.css";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";
import { Form, Formik } from "formik";
import { Switch } from "@mui/material";

function Options() {
  const options = useSelector((state) => state.options);
  const dispatch = useDispatch();
  const handleStop = () => {
    dispatch({ type: "STOP_PROGRAM", payload: "Options" });
  };
  const handleMinimize = () => {
    dispatch({ type: "MINIMIZE_PROGRAM", payload: "Options" });
  };
  const handleResize = () => {
    options == 3
      ? dispatch({ type: "START_PROGRAM", payload: "Options" })
      : dispatch({ type: "RESIZE_PROGRAM", payload: "Options" });
  };
  return (
    <>
      <ProgramContainer
        title="Seçenekler"
        handleStop={handleStop}
        handleMinimize={handleMinimize}
        handleResize={handleResize}
        status={options}
      >
        <div>
          <Formik
            initialValues={{
              fullScreen: 0,
              theme: "dark",
              animatedIcons: 0,
              mousePointer: 0
            }}
            onSubmit={async (values) => {
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {({ values, setFieldValue, isSubmitting }) => (
              <Form>
                <div className="options-container">
                  <div className="options-item">
                    <div className="options-item-title">Tam Ekran</div>
                    <div>
                      <Switch
                        name="fullScreen"
                        value={0}
                        checked={values.fullScreen === 1}
                        onChange={(event, checked) => {
                          setFieldValue("fullScreen", checked ? 1 : 0);
                          window.electron.ipcRenderer.sendMessage(
                            "send-fullScreen"
                          );
                        }}
                      />
                    </div>
                  </div>

                  <div className="options-item">
                    <div className="options-item-title">Tema Değiştir</div>
                    <div>
                      <Switch
                        name="theme"
                        value={0}
                        checked={values.theme === "white"}
                        onChange={(event, checked) => {
                          setFieldValue("theme", checked ? "white" : "dark");
                          // window.electron.ipcRenderer.sendMessage(
                          //   "send-fullScreen"
                          // );
                        }}
                      />
                    </div>
                  </div>

                  <div className="options-item">
                    <div className="options-item-title">Hareketli İkonlar</div>
                    <Switch
                      name="animatedIcons"
                      value={0}
                      checked={values.animatedIcons === 1}
                      onChange={(event, checked) => {
                        setFieldValue("animatedIcons", checked ? 1 : 0);
                        dispatch({ type: "SET_ANIMATED_ICONS" });
                      }}
                    />
                  </div>
                  <div className="options-item">
                    <div className="options-item-title">Fare İmleci</div>
                    <Switch
                      name="mousePointer"
                      value={0}
                      checked={values.mousePointer === 1}
                      onChange={(event, checked) => {
                        setFieldValue("mousePointer", checked ? 1 : 0);
                        dispatch({ type: "SET_MOUSE_POINTER" });

                      }}
                    />
                  </div>
                </div>
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </ProgramContainer>
    </>
  );
}

export default Options;
