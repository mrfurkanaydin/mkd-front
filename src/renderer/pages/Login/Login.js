import { useState } from "react";
import { Formik } from "formik";
import "./Login.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import giris from "../../../assets/kullanicigiris.png";
import "../../../assets/kullanicigiris-dark.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [state, setState] = useState(false);
  const [state2, setState2] = useState(false);
  const [supervisor, setSupervisor] = useState(false);
  const notify = (text) => toast(text);
  const handleClick = () => {
    setState(true);
  };
  const dispatch = useDispatch();
  return (
    <>
      {supervisor ? (
        <button
          onClick={() => setSupervisor(false)}
          className="login-supervisor"
        >
          <img src={giris} />
          <div> Öğrenci Giriş</div>
        </button>
      ) : (
        <button
          onClick={() => setSupervisor(true)}
          className="login-supervisor"
        >
          <img src={giris} />
          <div> Yetkili Giriş</div>
        </button>
      )}

      {supervisor ? (
        <>
          <div className="Login-container">
            <ToastContainer />
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={(values) => {
                axios
                  .post("http://16.16.166.122:3000/v1/auth/login", values)
                  .then((res) => {
                    dispatch({ type: "SET_TOKEN", payload: res.data.tokens });
                    dispatch({ type: "SET_USER", payload: res.data.user });
                  })
                  .catch((err) => {
                    notify("Giriş Başarısız");
                  });
              }}
            >
              {({ values, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <div className="group">
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      value={values.email}
                      className="input"
                      placeholder="Email"
                    />
                  </div>
                  {state2 && (
                    <div className="group">
                      <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={values.password}
                        className="input"
                        placeholder="Şifre"
                      />
                    </div>
                  )}

                  <div className="button-div" style={{ marginTop: 20 }}>
                    {!state2 && (
                      <button
                        className="login-button"
                        onClick={() => setState2(true)}
                      >
                        Devam Et
                      </button>
                    )}
                    {state2 && (
                      <>
                        <button type="submit" className="login-button">
                          Giriş Yap
                        </button>
                      </>
                    )}
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </>
      ) : (
        <div className="Login-container">
          <ToastContainer />
          <Formik
            initialValues={{ tcNo: "", password: "" }}
            onSubmit={(values) => {
              axios
                .post("http://16.16.166.122:3000/v1/auth/login", values)
                .then((res) => {
                  dispatch({ type: "SET_TOKEN", payload: res.data.tokens });
                  dispatch({ type: "SET_USER", payload: res.data.user });
                })
                .catch((err) => {
                  notify("Giriş Başarısız");
                });
            }}
          >
            {({ values, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div className="group">
                  <input
                    type="tcNo"
                    name="tcNo"
                    onChange={handleChange}
                    value={values.email}
                    className="input"
                    placeholder="TC Kimlik Numarası"
                  />
                </div>
                {state && (
                  <div className="group">
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      value={values.password}
                      className="input"
                      placeholder="Şifre"
                    />
                  </div>
                )}

                <div className="button-div" style={{ marginTop: 20 }}>
                  {!state && (
                    <button className="login-button" onClick={handleClick}>
                      Devam Et
                    </button>
                  )}
                  {state && (
                    <>
                      <button type="submit" className="login-button">
                        Giriş Yap
                      </button>
                    </>
                  )}
                </div>
              </form>
            )}
          </Formik>
        </div>
      )}
    </>
  );
}

export default Login;
