import { ErrorMessage, Field, useFormikContext } from "formik";
import React, { useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import CreatePessoaModal from "./CreatePessoaModal";
import {
  getLocations,
  listLocation,
} from "../../services/api/locationServices";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Typeahead } from "react-bootstrap-typeahead";

export default function Identification() {
  const [showPessoaModal, setShowPessoaModal] = React.useState(false);
  const [showIdPessoa, setShowIdPessoa] = React.useState(false);
  const [lockIdPessoa, setLockIdPessoa] = React.useState(false);
  const [locations, setLocations] = React.useState<listLocation[]>([]);

  const { setFieldValue, setFieldTouched } = useFormikContext();

  function handleClosePessoaModal() {
    setShowPessoaModal(false);
  }
  function handleShowPessoaModal() {
    setShowPessoaModal(true);
  }

  function revealIdPessoa() {
    setShowIdPessoa(true);
  }

  function handleChangeValue(field: string, value: any) {
    if (field === "idPessoa") {
      setLockIdPessoa(true);
      setFieldValue(field, value);
      revealIdPessoa();
    }
  }

  async function getAllLocations(token: string) {
    const res = await getLocations(token);
    setLocations(res!);
  }

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("user")!).token;
    getAllLocations(token);
  }, []);

  return (
    <div className="d-flex flex-column">
      {showIdPessoa && (
        <div>
          <h3 className="question lead fs-2">ID do Paciente</h3>
          <div className="text-field-answer">
            <Field
              name="idPessoa"
              type="number"
              placeholder="ID do Paciente"
              className="form-control"
              onWheel={(e: any) => e.target.blur()}
              readOnly={lockIdPessoa}
            />
            <ErrorMessage name="idPessoa">
              {(msg) => <div className="text-danger">{msg}</div>}
            </ErrorMessage>
          </div>
        </div>
      )}
      {!showIdPessoa && (
        <div className="d-flex justify-content-between gap-3" role="group">
          <button
            className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-center"
            type="button"
            onClick={handleShowPessoaModal}
          >
            <FaPlus className="me-2" /> Cadastrar Pessoa
          </button>
          <button
            className="btn btn-primary w-100"
            type="button"
            onClick={revealIdPessoa}
          >
            Informar Pessoa
          </button>
        </div>
      )}
      <div>
        <h3 className="question lead fs-2">Nome da Escola</h3>
        <div className="text-field-answer">
          <Typeahead
            options={locations!}
            id="idLocal"
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
      <CreatePessoaModal
        show={showPessoaModal}
        close={handleClosePessoaModal}
        updateValue={handleChangeValue}
        reveal={revealIdPessoa}
      />
    </div>
  );
}
