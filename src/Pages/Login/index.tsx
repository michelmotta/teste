import React, { useState } from "react";
import { FiArrowLeft, FiAtSign, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/api/authServices";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";

export default function Login() {
  const [loginError, setLoginError] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();

  function handleShowPassword(): void {
    setShowPassword(!showPassword);
  }

  return (
    <div
      className="container my-3"
      style={{
        maxWidth: "400px",
      }}
    >
      <div className="row align-items-center mb-3">
        <div className="col-auto">
          <Link to="/">
            <FiArrowLeft size="1.9rem" />
          </Link>
        </div>
        <div className="col text-center">
          <h3 className="mb-0">Login</h3>
        </div>
        <div className="col-auto"></div>
      </div>
      {loginError && (
        <div className="alert alert-danger text-center">
          <strong>Erro.</strong> Credenciais inválidas.
        </div>
      )}
      <Formik
        initialValues={{
          email: "",
          senha: "",
        }}
        onSubmit={async (values) => {
          try {
            const { data } = await login({
              ...values,
            });

            localStorage.setItem("user", JSON.stringify(data));
            setLoginError(false);
            navigate("/app");
          } catch (e) {
            setLoginError(true);
          }
        }}
        validationSchema={object({
          email: string()
            .required("Esse campo é obrigatório")
            .trim()
            .email("Email inválido"),
          senha: string().required("Esse campo é obrigatório").trim(),
        })}
      >
        {({ setFieldValue, setFieldTouched }) => (
          <Form className="d-flex flex-column gap-3" id="login">
            <div className="input-group">
              <span className="input-group-text">
                <FiAtSign />
              </span>
              <Field
                name="email"
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <ErrorMessage name="email">
              {(msg) => <div className="text-danger">{msg}</div>}
            </ErrorMessage>
            <div className="input-group">
              <span className="input-group-text">
                <FiLock />
              </span>
              <Field
                name="senha"
                type={showPassword ? "text" : "password"}
                className="form-control"
                placeholder="********"
              />
              <span
                onClick={handleShowPassword}
                style={{ cursor: "pointer" }}
                className="input-group-text"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
            <ErrorMessage name="senha">
              {(msg) => <div className="text-danger">{msg}</div>}
            </ErrorMessage>
            <button type="submit" className="btn btn-primary" form="login">
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
