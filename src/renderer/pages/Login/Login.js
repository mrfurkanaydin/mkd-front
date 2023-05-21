import React, { useState } from "react";
import { Formik } from "formik";
import "./Login.css";
import axios from "axios";
import { useDispatch } from "react-redux";

function Login() {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState(true);
  };
  const dispatch = useDispatch();
  return (
    <div className="Login-container">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
          axios.post("http://localhost:3000/v1/auth/login", values).then((res) => {
            dispatch({ type: "SET_TOKEN", payload: res.data.tokens });
            dispatch({ type: "SET_USER", payload: res.data.user });
            console.log(res.data);
          });
        }}
      >
        {({
          values,
          handleChange,
          handleSubmit
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="group">
              <div className="label">TC Kimlik Numarası</div>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email}
                className="input"
              />
            </div>
            {state && (
              <div className="group">
                <div className="label">Şifre </div>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                  className="input"
                />
              </div>
            )}

            <div className="button-div">
            {!state && (
              <button
                className="login-button"
                onClick={handleClick}
              >
                Devam Et
              </button>
            )}
              {state && (
                <>
                  <button
                    type="submit"
                    className="login-button"
                  >
                    Giriş Yap
                  </button>
                  <button className="login-button">Şifremi Unuttum</button>
                </>
              )}
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
