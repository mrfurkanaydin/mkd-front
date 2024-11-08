import { useDispatch, useSelector } from "react-redux";
import "./Options.css";
import ProgramContainer from "renderer/components/ProgramContainer/ProgramContainer";
import { Form, Formik } from "formik";
import { Switch } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";

function Options() {
  const options = useSelector((state) => state.options);
  const dispatch = useDispatch();
  const [fullScreen, setFullScreen] = useState(
    window.electron.store.get("fullscreen")
  );
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
  
  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
      style={{
        cursor:
          useSelector((state) => state.mousePointer) == 1 ? "none" : "pointer"
      }}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
          opacity: 1,
          border: 0
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5
        }
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff"
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600]
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3
      }
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500
      })
    }
  }));

  const mouse = useSelector((state) => state.mousePointer);
  const theme = useSelector((state) => state.theme);
  return (
    <>
      <ProgramContainer
        title="Seçenekler"
        handleStop={handleStop}
        handleMinimize={handleMinimize}
        handleResize={handleResize}
        status={options}
        disable="true"
        width={400}
        height={300}
      >
        <div>
          <Formik
            initialValues={{
              fullScreen: window.electron.store.get("fullscreen"),
              theme: 1,
              animatedIcons: window.electron.store.get("animated-icons"),
              mousePointer: 0
            }}
          >
            {({ values, setFieldValue }) => (
              <Form>
                <div className="options-container">
                  <div className="options-item">
                    <div>
                      <IOSSwitch
                        name="fullScreen"
                        value={fullScreen}
                        checked={fullScreen === true}
                        onChange={(event, checked) => {
                          setFullScreen(
                            !window.electron.store.get("fullscreen")
                          );
                          dispatch({ type: "SET_FULLSCREEN" });
                        }}
                      />
                    </div>
                    <div className={theme == 0 ? "options-item-desc" : "options-item-desc-dark"}>
                      <div>Tam Ekran</div>
                      <div className={theme == 0 ? "options-item-subtitle": "options-item-subtitle-dark"}>Uygulamayı Tam Ekran Yapar.</div>
                    </div>
                  </div>

                  <div className="options-item">
                    <div>
                      <IOSSwitch
                        name="theme"
                        value={0}
                        checked={theme === 0}
                        onChange={(event, checked) => {
                          setFieldValue("theme", checked ? 1 : 0);
                          dispatch({ type: "SET_THEME" });
                        }}
                      />
                    </div>
                    <div className={theme == 0 ? "options-item-desc" : "options-item-desc-dark"}>
                      <div>Tema Değiştir</div>
                      <div className={theme == 0 ? "options-item-subtitle": "options-item-subtitle-dark"}>Uygulamanın Temasını Değiştirir.</div>
                    </div>
                  </div>

                  <div className="options-item">
                    <IOSSwitch
                      name="animatedIcons"
                      value={window.electron.store.get("animated-icons")}
                      checked={values.animatedIcons === true}
                      onChange={(event, checked) => {
                        setFieldValue("animatedIcons", checked ? true : false);
                        dispatch({ type: "SET_ANIMATED_ICONS" });
                      }}
                    />
                    <div className={theme == 0 ? "options-item-desc" : "options-item-desc-dark"}>
                      <div>Hareketli İkonlar</div>
                      <div className={theme == 0 ? "options-item-subtitle": "options-item-subtitle-dark"}>Uygulamanın İkonlarını Değiştirir.</div>
                    </div>
                  </div>
                  <div className="options-item">
                    <IOSSwitch
                      name="mousePointer"
                      value={0}
                      checked={mouse === 1}
                      onChange={(event, checked) => {
                        setFieldValue("mousePointer", checked ? 1 : 0);
                        dispatch({ type: "SET_MOUSE_POINTER" });
                      }}
                    />
                    <div className={theme == 0 ? "options-item-desc" : "options-item-desc-dark"}>
                      <div>Fare İmleci</div>
                      <div className={theme == 0 ? "options-item-subtitle": "options-item-subtitle-dark"}>Uygulamanın Fare İmlecini Değiştirir.</div>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </ProgramContainer>
    </>
  );
}

export default Options;
