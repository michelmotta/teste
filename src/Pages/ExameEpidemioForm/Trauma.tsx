import { Field } from "formik";
import React, { PropsWithChildren } from "react";

export default function Trauma() {
  return (
    <div className="d-flex flex-column">
      <h2 className="question lead fs-2">Traumatismo</h2>
      <TraumaStep name="d_12" question="12" />
      <TraumaStep name="d_11" question="11" />
      <TraumaStep name="d_21" question="21" />
      <TraumaStep name="d_22" question="22" />
      <TraumaStep name="d_32" question="32" />
      <TraumaStep name="d_31" question="31" />
      <TraumaStep name="d_41" question="41" />
      <TraumaStep name="d_42" question="42" />
    </div>
  );
}

function TraumaStep(
  props: PropsWithChildren<{
    name: string;
    question: string;
  }>
) {
  const awsers = [
    { value: "NENHUM_TRAUMATISMO", display: "Nenhum Traumatismo" },
    { value: "FRATURA_TRATADA", display: "Fratura Tratada" },
    { value: "FRATURA_EM_ESMALTE", display: "Fratura em Esmalte" },
    {
      value: "FRATURA_EM_ESMALTE_E_DENTINA",
      display: "Fratura em Esmalte e Dentina",
    },
  ];

  return (
    <>
      <h3 className="question lead fs-2">{props.question}</h3>
      <div className="d-flex flex-column">
        {awsers.map((awser, index) => (
          <div className="form-check" key={index}>
            <Field
              type="radio"
              name={props.name}
              value={awser.value}
              className="form-check-input"
              id={`${props.name}${awser.value}`}
            />
            <label
              htmlFor={`${props.name}${awser.value}`}
              className="form-check-label"
            >
              {awser.display}
            </label>
          </div>
        ))}
      </div>
    </>
  );
}
