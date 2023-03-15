import React, { useState } from "react";
import { Formik } from "formik";
import "./Login.css";

function Login() {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState(true);
  };
  return (
    <div className="Login-container">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({
          values,
          handleChange,
          handleSubmit
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="group">
              <div className="label">Kullanıcı Adı </div>
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
