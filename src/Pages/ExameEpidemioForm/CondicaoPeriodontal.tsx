import { Field, ErrorMessage } from "formik";
import React, { PropsWithChildren } from "react";

export default function CondicaoPeriodontal() {
  return (
    <div className="d-flex flex-column">
      <h2 className="question lead fs-2">Condição Periodontal</h2>
      <Question name="d17_16" question="17/16" />
      <Question name="d21_11" question="21/11" />
      <Question name="d27_26" question="27/26" />
      <Question name="d31" question="31" />
      <Question name="d37_36" question="37/36" />
      <Question name="d47_46" question="47/46" />
    </div>
  );
}

function Question(
  props: PropsWithChildren<{
    question: string;
    name: string;
  }>
) {
  const awsers = [
    {
      value: "false",
      display: "Normal",
    },
    {
      value: "true",
      display: "Sangramento a Sondagem",
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
        <ErrorMessage name={props.name}>
          {(msg) => <div className="text-danger">{msg}</div>}
        </ErrorMessage>
      </div>
    </>
  );
}
