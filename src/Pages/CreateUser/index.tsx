import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { object, ref, string } from "yup";
import { createUser } from "../../services/api/userServices";
import { PapelEnum, PapelType } from "../../Types/types";
import api from "../../services/api/api";
import { Typeahead } from "react-bootstrap-typeahead";
import { toast } from "react-toastify";

export default function CreateUser() {
  const [equipes, setEquipes] = useState<any[]>([]);
  const [papeis, setPapeis] = useState<any[]>([]);
  const navigate = useNavigate();

  const coordOptions = [
    { value: PapelEnum.DENTISTA, label: "Dentista" },
    { value: PapelEnum.ASSISTENTE, label: "Assistente" },
    { value: PapelEnum.ARROLADOR, label: "Arrolador" },
  ];

  const admOptions = [
    { value: PapelEnum.COORDENADOR, label: "Coordenador" },
    { value: PapelEnum.DENTISTA, label: "Dentista" },
    { value: PapelEnum.ASSISTENTE, label: "Assistente" },
    { value: PapelEnum.ARROLADOR, label: "Arrolador" },
  ];

  async function getTeams(token: string) {
    try {
      const res = await api.get("/teams", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setEquipes(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")!);
    getTeams(user.token);
    if (user.role === "ADMIN") {
      setPapeis(admOptions);
    } else {
      setPapeis(coordOptions);
    }
  }, []);

  return (
    <>
      <div className="container mt-3 mb-5">
        <h1 className="mb-3 text-center lead fs-3">Criar usuário</h1>
        <div>
          <Link className="col-auto" to="/app/users">
            <FiArrowLeft size="1.9rem" />
          </Link>
        </div>

        <Formik
          initialValues={{
            email: "",
            name: "",
            password: "",
            confirmPassword: "",
            role: "ARROLADOR",
            idEquipe: "",
          }}
          validationSchema={object().shape({
            email: string()
              .email("Email inválido")
              .required("Email é obrigatório"),
            name: string().required("Nome é obrigatório"),
            password: string()
              .required("Senha é obrigatória")
              .min(8, "Senha muito curta, mínimo 8 caracteres"),
            confirmPassword: string().oneOf(
              [ref("password"), null],
              "As senhas devem ser iguais"
            ),
            role: string()
              .required("Papel é obrigatório")
              .oneOf(Object.values(PapelEnum), "Papel inválido"),
          })}
          onSubmit={async (values, actions) => {
            const token = JSON.parse(localStorage.getItem("user")!).token;
            try {
              await createUser(
                {
                  email: values.email,
                  nome: values.name,
                  senha: values.password,
                  papel: values.role as PapelType,
                  idEquipe: !(
                    values.role === PapelEnum.COORDENADOR ||
                    values.role === PapelEnum.ADMIN
                  )
                    ? parseInt(values.idEquipe)
                    : null,
                },
                token
              );
              toast.success("Usuário criado com sucesso!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
              });
              navigate("/app/users");
            } catch (error) {
              toast.error("Não foi possivel criar usuário", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
              });
            }
            actions.setSubmitting(false);
          }}
        >
          {({ isSubmitting, values, setFieldValue, setFieldTouched }) => (
            <Form className="d-flex flex-column gap-3 mt-1" autoComplete="off">
              <h3 className="question lead fs-2">Nome</h3>
              <div className="text-field-answer">
                <Field className="form-control" type="text" name="name" />
                <ErrorMessage name="name">
                  {(msg) => <div className="text-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <h3 className="question lead fs-2">Papel</h3>
              <div className="text-field-answer">
                <Field className="form-control" as="select" name="role">
                  {papeis.map((papel) => (
                    <option key={papel.value} value={papel.value}>
                      {papel.label}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="role">
                  {(msg) => <div className="text-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              {!(
                values.role === PapelEnum.COORDENADOR ||
                values.role === PapelEnum.ADMIN
              ) && (
                <>
                  <h3 className="question lead fs-2">Equipe</h3>
                  <div className="text-field-answer">
                    <Typeahead
                      options={equipes}
                      id="idEquipe"
                      placeholder="Coordenador da Equipe"
                      multiple={false}
                      onChange={(selected: any) => {
                        const value = selected.length > 0 ? selected[0].id : "";
                        setFieldValue("idEquipe", value);
                      }}
                      onInputChange={(text: any, event: any) =>
                        setFieldValue("idEquipe", text)
                      }
                      onBlur={(e: any) => setFieldTouched("idEquipe", true)}
                      allowNew={false}
                      labelKey="coordenador"
                    />
                    <ErrorMessage name="idEquipe">
                      {(msg) => <div className="text-danger">{msg}</div>}
                    </ErrorMessage>
                  </div>
                </>
              )}
              <h3 className="question lead fs-2">Email</h3>
              <div className="text-field-answer">
                <Field className="form-control" type="email" name="email" />
                <ErrorMessage name="email">
                  {(msg) => <div className="text-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <h3 className="question lead fs-2">Senha</h3>
              <div className="text-field-answer">
                <Field
                  className="form-control"
                  type="password"
                  name="password"
                />
                <ErrorMessage name="password">
                  {(msg) => <div className="text-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <h3 className="question lead fs-2">Confirmar Senha</h3>
              <div className="text-field-answer">
                <Field
                  className="form-control"
                  type="password"
                  name="confirmPassword"
                />
                <ErrorMessage name="confirmPassword">
                  {(msg) => <div className="text-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <button
                className="btn btn-primary btn-lg w-100"
                type="submit"
                disabled={isSubmitting}
              >
                Criar usuário
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
