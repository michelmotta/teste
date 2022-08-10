import { Formik, Field, ErrorMessage, Form } from "formik";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { object, string } from "yup";
import { createLocation } from "../../services/api/locationServices";
import { getMunicipios } from "../../services/ibge/api";

export default function LocationsForm() {
  const [token, setToken] = useState("");
  const [cities, setCities] = useState<any[]>([]);

  async function getCities(uf: string) {
    try {
      const res = await (await getMunicipios(uf)).data;
      let citiesRes: any[] = [];
      res.map((city: any) => {
        citiesRes.push({ label: city.nome, value: city.nome });
        return null;
      });
      setCities(citiesRes);
    } catch (e: any) {
      toast.error(e.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    }
  }

  const navigate = useNavigate();

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("user")!).token);
    getCities("MS");
  }, [navigate]);

  return (
    <div className="container my-3">
      <h1 className="text-center lead fs-3">Locais</h1>
      <div>
        <Link className="col-auto" to="/app/locations">
          <FiArrowLeft size="1.9rem" />
        </Link>
      </div>
      <hr />
      <Formik
        initialValues={{ escola: "", estado: "MS", municipio: "" }}
        onSubmit={async (values) => {
          try {
            await createLocation(
              {
                escola: values.escola,
                municipio: values.municipio,
              },
              token!
            );
            toast.success("Local criado com sucesso", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              progress: undefined,
            });
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
          }
        }}
        validationSchema={object({
          escola: string().required("Esse campo é obrigatório").trim(),
          municipio: string().required("Esse campo é obrigatório").trim(),
        })}
      >
        {({ setFieldValue, setFieldTouched }) => (
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
            <h3 className="question lead fs-2">Estado</h3>
            <div className="text-field-answer">
              <Field
                name="estado"
                type="text"
                placeholder="MS"
                className="form-control"
                disabled
              />
              <ErrorMessage name="estado">
                {(msg) => <div className="text-danger">{msg}</div>}
              </ErrorMessage>
            </div>
            <h3 className="question lead fs-2">Município</h3>
            <div className="text-field-answer">
              <Typeahead
                options={cities!}
                id="municipio"
                multiple={false}
                onChange={(selected: any) => {
                  const value = selected.length > 0 ? selected[0].label : "";
                  setFieldValue("municipio", value);
                }}
                onInputChange={(text: any, event: any) =>
                  setFieldValue("municipio", text)
                }
                onBlur={(e: any) => setFieldTouched("municipio", true)}
                allowNew={false}
              />
              <ErrorMessage name="municipio">
                {(msg) => <div className="text-danger">{msg}</div>}
              </ErrorMessage>
            </div>

            <Button variant="primary" type="submit" form="createLocal">
              Salvar
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
