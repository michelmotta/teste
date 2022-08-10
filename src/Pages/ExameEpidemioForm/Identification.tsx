import { ErrorMessage, Field, useFormikContext } from "formik";
import React, { PropsWithChildren, useEffect } from "react";
import {
  getLocations,
  listLocation,
} from "../../services/api/locationServices";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Typeahead } from "react-bootstrap-typeahead";
import { personAge } from "../../services/api/personServices";
import { toast } from "react-toastify";

export default function Identification(
  props: PropsWithChildren<{
    setAge: (age: number) => void;
  }>
) {
  const [locations, setLocations] = React.useState<listLocation[]>([]);

  const { setFieldValue, setFieldTouched, getFieldProps } = useFormikContext();

  async function getAllLocations(token: string) {
    const res = await getLocations(token);
    setLocations(res!);
  }

  async function handleIdBlur() {
    const value = getFieldProps("idPessoa").value;
    const token = JSON.parse(localStorage.getItem("user")!).token;
    try {
      const res = await personAge(value, token);
      setFieldValue("age", res.data.idade);
      props.setAge(res.data.idade);
    } catch (err) {
      setFieldValue("age", null);
      toast.error("Não foi possível encontrar a idade da pessoa");
    }
  }

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("user")!).token;
    getAllLocations(token);
  }, []);

  return (
    <div className="d-flex flex-column">
      <div>
        <h3 className="question lead fs-2">ID do Paciente</h3>
        <div className="text-field-answer">
          <Field
            name="idPessoa"
            type="number"
            placeholder="ID do Paciente"
            className="form-control"
            onWheel={(e: any) => e.target.blur()}
            onBlur={handleIdBlur}
          />
          <ErrorMessage name="idPessoa">
            {(msg) => <div className="text-danger">{msg}</div>}
          </ErrorMessage>
        </div>
      </div>
      <div>
        <h3 className="question lead fs-2">Nome da Escola</h3>
        <div className="text-field-answer">
          <Typeahead
            options={locations!}
            id="idLocal"
            placeholder="Nome da Escola"
            multiple={false}
            onChange={(selected: any) => {
              const value = selected.length > 0 ? selected[0].id : "";
              setFieldValue("idLocal", value);
            }}
            onInputChange={(text: any, event: any) =>
              setFieldValue("idLocal", text)
            }
            onBlur={(e: any) => setFieldTouched("idLocal", true)}
            allowNew={false}
            labelKey="escola"
          />
          <ErrorMessage name="idLocal">
            {(msg) => <div className="text-danger">{msg}</div>}
          </ErrorMessage>
        </div>
      </div>
      <div>
        <h3 className="question lead fs-2">Idade</h3>
        <div className="text-field-answer">
          <Field
            name="age"
            type="number"
            placeholder="Idade"
            className="form-control"
            disabled={true}
          />
          <ErrorMessage name="age">
            {(msg) => <div className="text-danger">{msg}</div>}
          </ErrorMessage>
        </div>
      </div>
    </div>
  );
}
