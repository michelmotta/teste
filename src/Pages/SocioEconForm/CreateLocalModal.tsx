import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { object, string } from "yup";
import { createLocation } from "../../services/api/locationServices";

export default function CreateLocalModal(
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
        <Modal.Title>Criar Novo Local</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{ escola: "", municipio: "" }}
          onSubmit={async (values, actions) => {
            try {
              const res = await createLocation({ ...values }, token!);
              props.updateValue("idLocal", res.data.id);
              props.reveal();
              actions.setSubmitting(false);
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
            escola: string().required("Esse campo é obrigatório").trim(),
            municipio: string().required("Esse campo é obrigatório").trim(),
          })}
        >
          <Form
            className="d-flex flex-column gap-3 mt-1"
            autoComplete="off"
            id="createLocal"
          >
            <h3 className="question lead fs-2">Escola</h3>
            <div className="text-field-answer">
              <Field
                name="escola"
                type="text"
                placeholder="Nome da Escola"
                className="form-control"
              />
              <ErrorMessage name="escola">
                {(msg) => <div className="text-danger">{msg}</div>}
              </ErrorMessage>
            </div>
            <h3 className="question lead fs-2">Município</h3>
            <div className="text-field-answer">
              <Field
                name="municipio"
                type="text"
                placeholder="Nome do Município"
                className="form-control"
              />
              <ErrorMessage name="municipio">
                {(msg) => <div className="text-danger">{msg}</div>}
              </ErrorMessage>
            </div>
          </Form>
        </Formik>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" form="createLocal">
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
