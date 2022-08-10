import { ErrorMessage, Field, Form, Formik, FormikConfig } from "formik";
import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { resetPassword } from "../../services/api/authServices";
import * as yup from "yup";
import { toast } from "react-toastify";

interface ResetPasswordForm {
  email: string;
  currentPassword: string;
  newPassword: string;
}

export default function ResetPassword() {
  const navigate = useNavigate();

  const { email, token } = JSON.parse(localStorage.getItem("user")!);

  const formikValues: FormikConfig<ResetPasswordForm> = {
    initialValues: {
      email,
      currentPassword: "",
      newPassword: "",
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .email("Email inválido")
        .required("Email é obrigatório"),
      currentPassword: yup.string().required("Senha atual é obrigatório"),
      newPassword: yup.string().required("Nova senha é obrigatório"),
    }),
    onSubmit: async (values) => {
      try {
        await resetPassword(
          {
            email: values.email,
            senhaAtual: values.currentPassword,
            senhaNova: values.newPassword,
          },
          token
        );
        toast.success("Senha alterada com sucesso.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        });

        navigate("/app");
      } catch (e: any) {
        toast.error(e.response.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        });
      }
    },
  };

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
          <h3 className="mb-0">Redefinir senha</h3>
        </div>
        <div className="col-auto"></div>
      </div>
      <Formik {...formikValues}>
        <Form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <Field
              required
              disabled
              className="form-control"
              type="email"
              name="email"
            />
            <ErrorMessage name="email">
              {(msg) => <div className="text-danger">{msg}</div>}
            </ErrorMessage>
          </div>
          <div className="mb-3">
            <label htmlFor="currentPassword" className="form-label">
              Senha atual
            </label>
            <Field
              required
              className="form-control"
              type="password"
              name="currentPassword"
            />
            <ErrorMessage name="currentPassword">
              {(msg) => <div className="text-danger">{msg}</div>}
            </ErrorMessage>
          </div>
          <div className="mb-3">
            <label htmlFor="newPassword" className="form-label">
              Nova senha
            </label>
            <Field
              required
              className="form-control"
              type="password"
              name="newPassword"
            />
            <ErrorMessage name="newPassword">
              {(msg) => <div className="text-danger">{msg}</div>}
            </ErrorMessage>
          </div>
          <button className="btn btn-primary btn-lg w-100" type="submit">
            Atualizar senha
          </button>
        </Form>
      </Formik>
    </div>
  );
}
