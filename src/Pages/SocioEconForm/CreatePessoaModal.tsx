import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { Modal, Button, Form as BTForm } from "react-bootstrap";
import { toast } from "react-toastify";
import { object, string } from "yup";
import { createPerson } from "../../services/api/personServices";

export default function CreatePessoaModal(
  props: PropsWithChildren<{
    show: boolean;
    close: () => void;
    updateValue: (field: string, value: any) => void;
    reveal: () => void;
  }>
) {
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("user")!).token);
  }, []);

  return (
    <Modal show={props.show} onHide={props.close} centered>
      <Modal.Header closeButton>
        <Modal.Title>Criar Nova Pessoa</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{
            nascimento: "",
            nome: "",
            genero: "",
            etniaPrincipal: "",
            etniaSecundaria: "",
          }}
          onSubmit={async (values, actions) => {
            try {
              const res = await createPerson(
                {
                  nome: values.nome,
                  nascimento: values.nascimento,
                  genero: values.genero,
                  etniaPrincipal: values.etniaPrincipal,
                  etniaSecundaria:
                    values.etniaSecundaria !== ""
                      ? values.etniaSecundaria
                      : null,
                },
                token!
              );
              props.updateValue("idPessoa", res.data.id);
              props.reveal();
              actions.setSubmitting(false);
              toast.success("Pessoa criada com sucesso", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
              });
              props.close();
            } catch (e: any) {
              toast.error("Não foi possivel criar o local", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
              });
              props.reveal();
              actions.setSubmitting(false);
            }
          }}
          validationSchema={object({
            nascimento: string().required("Esse campo é obrigatório").trim(),
            nome: string().required("Esse campo é obrigatório").trim(),
            genero: string().required("Esse campo é obrigatório").trim(),
            etniaPrincipal: string()
              .required("Esse campo é obrigatório")
              .trim(),
            etniaSecundaria: string(),
          })}
        >
          <Form
            className="d-flex flex-column gap-3 mt-1"
            autoComplete="off"
            id="createPessoa"
          >
            <h3 className="question lead fs-2">Nome</h3>
            <div className="text-field-answer">
              <Field
                name="nome"
                type="text"
                placeholder="Nome"
                className="form-control"
              />
              <ErrorMessage name="nome">
                {(msg) => <div className="text-danger">{msg}</div>}
              </ErrorMessage>
            </div>
            <h3 className="question lead fs-2">Data de Nascimento</h3>
            <div className="text-field-answer">
              <Field
                name="nascimento"
                type=""
                placeholder="nascimento"
                className="form-control"
                as="input"
                component={DatePickerField}
              />
              <ErrorMessage name="nascimento">
                {(msg) => <div className="text-danger">{msg}</div>}
              </ErrorMessage>
            </div>
            <h3 className="question lead fs-2">Gênero</h3>
            <div className="text-field-answer">
              <Field
                name="genero"
                as="select"
                placeholder="gênero"
                className="form-control"
              >
                <option value="">Selecione</option>
                <option value="FEMININO">Feminino</option>
                <option value="MASCULINO">Masculino</option>
                <option value="OUTRO">Outro</option>
              </Field>
              <ErrorMessage name="genero">
                {(msg) => <div className="text-danger">{msg}</div>}
              </ErrorMessage>
            </div>
            <h3 className="question lead fs-2">Etnia 1</h3>
            <div className="text-field-answer">
              <Field
                name="etniaPrincipal"
                as="select"
                placeholder="Nome da Escola"
                className="form-control"
              >
                <option value="">Selecione</option>
                <option value="BRANCA">Branco</option>
                <option value="PARDA">Pardo</option>
                <option value="PRETA">Preto</option>
                <option value="AMARELA">Amarelo</option>
                <option value="INDIGENA">Indígena</option>
              </Field>
              <ErrorMessage name="etniaPrincipal">
                {(msg) => <div className="text-danger">{msg}</div>}
              </ErrorMessage>
            </div>
            <h3 className="question lead fs-2">Etnia 2</h3>
            <div className="text-field-answer">
              <Field
                name="etniaSecundaria"
                as="select"
                placeholder="Nome da Escola"
                className="form-control"
              >
                <option value="">Selecione</option>
                <option value="BRANCA">Branco</option>
                <option value="PARDA">Pardo</option>
                <option value="PRETA">Preto</option>
                <option value="AMARELA">Amarelo</option>
                <option value="INDIGENA">Indígena</option>
              </Field>
              <ErrorMessage name="etniaSecundaria">
                {(msg) => <div className="text-danger">{msg}</div>}
              </ErrorMessage>
            </div>
          </Form>
        </Formik>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" form="createPessoa">
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const DatePickerField = (
  props: PropsWithChildren<{
    field: any; // { name, value, onChange, onBlur }
    form: { touched: any; errors: any }; // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  }>
) => (
  <div>
    <BTForm.Control type="date" {...props.field} {...props.children} />
  </div>
);
