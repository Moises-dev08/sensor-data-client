import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import {
  LOGIN_ERROR,
  FORM_FIELDS_ERROR,
  FORM_USER_MIN_FIELD,
  FORM_PASS_MIN_FIELD,
  PASSWORD_MIN_LENGHT,
  USER_MIN_LENGHT,
} from "../../const/const";
import { loginUserService } from "../../services/querys/loginService";
import { signUpUserService } from "../../services/querys/signUpService";

const LoginComponent = () => {
  let history = useHistory();

  const initialValues = {
    usuario: "",
    contraseña: "",
  };

  const validationSchema = Yup.object({
    usuario: Yup.string()
      .min(USER_MIN_LENGHT, FORM_USER_MIN_FIELD)
      .required(FORM_FIELDS_ERROR),
    contraseña: Yup.string()
      .min(PASSWORD_MIN_LENGHT, FORM_PASS_MIN_FIELD)
      .required(FORM_FIELDS_ERROR),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const handleLogin = (event) => {
    event.preventDefault();

    let data = {
      email: formik.values.usuario,
      password: formik.values.contraseña,
    };

    loginUserService(data)
      .then((user) => {
        if (user.auth) {
          localStorage.setItem("user", user.token);
          history.push("/home");
        } else {
          alert(LOGIN_ERROR);
        }
      })
      .catch((err) => alert(err));
  };

  const handleSignUp = (event) => {
    event.preventDefault();

    let data = {
      email: formik.values.usuario,
      password: formik.values.contraseña,
    };

    signUpUserService(data)
      .then((user) => {
        if (user.auth) {
          localStorage.setItem("user", user.token);
          history.push("/home");
        } else {
          alert(LOGIN_ERROR);
        }
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={formik.handleSubmit}>
        <label htmlFor="usuario">
          <h3 className="login__title">Usuario o email</h3>
        </label>
        <input
          id="usuario"
          type="text"
          name="usuario"
          {...formik.getFieldProps("usuario")}
          placeholder="Usuario"
        />
        {formik.touched.usuario && formik.errors.usuario ? (
          <div className="errors"> {formik.errors.usuario}</div>
        ) : null}
        <label htmlFor="contraseña">
          {" "}
          <h3 className="login__title">Contraseña</h3>
        </label>
        <input
          id="contraseña"
          type="password"
          name="contraseña"
          {...formik.getFieldProps("contraseña")}
          placeholder="Contraseña"
        />
        {formik.touched.contraseña && formik.errors.contraseña ? (
          <div className="errors"> {formik.errors.contraseña}</div>
        ) : null}

        <button type="submit" className="login__button" onClick={handleLogin}>
          Acceder al sistema
        </button>

        <button type="submit" className="login__button" onClick={handleSignUp}>
          Crear cuenta
        </button>
      </form>
    </div>
  );
};

export default LoginComponent;
