import { ErrorMessage, Field } from "formik";
import React, { useEffect } from "react";

export default function FamilyCharacterization() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div>
        <h3 className="question lead fs-2">
          Quantas pessoas, incluindo você, residem nesta casa?
        </h3>
        <div className="text-field-answer">
          <Field
            name="qtdPessoasResidencia"
            type="number"
            placeholder="Quantidade de pessoas"
            className="form-control"
            onWheel={(e: any) => e.target.blur()}
          />
          <ErrorMessage name="qtdPessoasResidencia">
            {(msg) => <div className="text-danger">{msg}</div>}
          </ErrorMessage>
        </div>
      </div>

      <div>
        <h3 className="question lead fs-2">
          Quantos cômodos estão servindo permanentemente de dormitório para os
          moradores deste domicílio?
        </h3>
        <div className="text-field-answer">
          <Field
            name="qtdComodosDormitorio"
            type="number"
            placeholder="Quantidade de cômodos"
            className="form-control"
            onWheel={(e: any) => e.target.blur()}
          />
          <ErrorMessage name="qtdComodosDormitorio">
            {(msg) => <div className="text-danger">{msg}</div>}
          </ErrorMessage>
        </div>
      </div>

      <div>
        <h3 className="question lead fs-2">
          Quantos bens tem em sua residência?
        </h3>
        <div className="text-field-answer">
          <Field
            name="qtdBens"
            type="number"
            placeholder="Quantidade de bens"
            className="form-control"
            onWheel={(e: any) => e.target.blur()}
          />
          <ErrorMessage name="qtdBens">
            {(msg) => <div className="text-danger">{msg}</div>}
          </ErrorMessage>
        </div>
      </div>

      <div>
        <h3 className="question lead fs-2">
          Qual foi a renda familiar do último mês?
        </h3>
        <div className="text-field-answer">
          <Field
            name="qtdTotalRendaUltimoMes"
            type="number"
            placeholder="Renda per capita"
            className="form-control"
            onWheel={(e: any) => e.target.blur()}
          />
          <ErrorMessage name="qtdTotalRendaUltimoMes">
            {(msg) => <div className="text-danger">{msg}</div>}
          </ErrorMessage>
        </div>
      </div>
    </>
  );
}
