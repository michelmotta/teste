import { ErrorMessage, Field } from "formik";
import React from "react";
import {
  FluoroseDentariaEnum,
  RelacaoMolarAnteroPosteriorEnum,
} from "../../Types/types";

export default function FDCOD() {
  return (
    <div className="d-flex flex-column">
      <div>
        <h3 className="question lead fs-2">Fluorose Dentária</h3>
        <div className="d-flex flex-column">
          <div className="form-check">
            <Field
              type="radio"
              name="fluoroseDentaria"
              value={FluoroseDentariaEnum.NORMAL}
              className="form-check-input"
              id="fluoroseDentariaNormal"
            />
            <label
              htmlFor="fluoroseDentariaNormal"
              className="form-check-label"
            >
              Normal
            </label>
          </div>
          <div className="form-check">
            <Field
              type="radio"
              name="fluoroseDentaria"
              value={FluoroseDentariaEnum.QUESTIONAVEL}
              className="form-check-input"
              id="fluoroseDentariaQuestionavel"
            />
            <label
              htmlFor="fluoroseDentariaQuestionavel"
              className="form-check-label"
            >
              Questionável
            </label>
          </div>
          <div className="form-check">
            <Field
              type="radio"
              name="fluoroseDentaria"
              value={FluoroseDentariaEnum.MUITO_LEVE}
              className="form-check-input"
              id="fluoroseDentariaMuitoLeve"
            />
            <label
              htmlFor="fluoroseDentariaMuitoLeve"
              className="form-check-label"
            >
              Muito leve
            </label>
          </div>
          <div className="form-check">
            <Field
              type="radio"
              name="fluoroseDentaria"
              value={FluoroseDentariaEnum.LEVE}
              className="form-check-input"
              id="fluoroseDentariaLeve"
            />
            <label htmlFor="fluoroseDentariaLeve" className="form-check-label">
              Leve
            </label>
          </div>
          <div className="form-check">
            <Field
              type="radio"
              name="fluoroseDentaria"
              value={FluoroseDentariaEnum.MODERADO}
              className="form-check-input"
              id="fluoroseDentariaModerado"
            />
            <label
              htmlFor="fluoroseDentariaModerado"
              className="form-check-label"
            >
              Moderado
            </label>
          </div>
          <div className="form-check">
            <Field
              type="radio"
              name="fluoroseDentaria"
              value={FluoroseDentariaEnum.GRAVE}
              className="form-check-input"
              id="fluoroseDentariaGrave"
            />
            <label htmlFor="fluoroseDentariaGrave" className="form-check-label">
              Grave
            </label>
          </div>
          <ErrorMessage name="fluoroseDentaria">
            {(msg) => <div className="text-danger">{msg}</div>}
          </ErrorMessage>
        </div>
      </div>
      <div>
        <h3 className="question lead fs-2">Overjet maxilar Anterior em mm</h3>
        <div className="text-field-answer">
          <Field
            name="overjetMaxilarAnterior"
            type="number"
            placeholder="Overjet maxilar Anterior em mm"
            className="form-control"
            onWheel={(e: any) => e.target.blur()}
          />
          <ErrorMessage name="overjetMaxilarAnterior">
            {(msg) => <div className="text-danger">{msg}</div>}
          </ErrorMessage>
        </div>
      </div>
      <div>
        <h3 className="question lead fs-2">
          Overjet mandibular Anterior em mm
        </h3>
        <div className="text-field-answer">
          <Field
            name="overjetMandibularAnterior"
            type="number"
            placeholder="Overjet mandibular Anterior em mm"
            className="form-control"
            onWheel={(e: any) => e.target.blur()}
          />
          <ErrorMessage name="overjetMandibularAnterior">
            {(msg) => <div className="text-danger">{msg}</div>}
          </ErrorMessage>
        </div>
      </div>
      <div>
        <h3 className="question lead fs-2">
          Mordida aberta vertical anterior em mm
        </h3>
        <div className="text-field-answer">
          <Field
            name="mordidaAbertaVerticalAnterior"
            type="number"
            placeholder="Mordida aberta vertical anterior em mm"
            className="form-control"
            onWheel={(e: any) => e.target.blur()}
          />
          <ErrorMessage name="mordidaAbertaVerticalAnterior">
            {(msg) => <div className="text-danger">{msg}</div>}
          </ErrorMessage>
        </div>
      </div>
      <div>
        <h3 className="question lead fs-2">Relação molar ântero-posterior</h3>
        <div className="d-flex flex-column">
          <div className="form-check">
            <Field
              type="radio"
              name="relacaoMolarAnteroPosterior"
              value={RelacaoMolarAnteroPosteriorEnum.NORMAL}
              className="form-check-input"
              id="relacaoMolarAnteroPosteriorNormal"
            />
            <label
              htmlFor="relacaoMolarAnteroPosteriorNormal"
              className="form-check-label"
            >
              Normal
            </label>
          </div>
          <div className="form-check">
            <Field
              type="radio"
              name="relacaoMolarAnteroPosterior"
              value={RelacaoMolarAnteroPosteriorEnum.MEIA_CUSPIDE}
              className="form-check-input"
              id="relacaoMolarAnteroPosteriorMeiaCuspide"
            />
            <label
              htmlFor="relacaoMolarAnteroPosteriorMeiaCuspide"
              className="form-check-label"
            >
              Meia cuspide
            </label>
          </div>
          <div className="form-check">
            <Field
              type="radio"
              name="relacaoMolarAnteroPosterior"
              value={RelacaoMolarAnteroPosteriorEnum.CUSPIDE_INTEIRA}
              className="form-check-input"
              id="relacaoMolarAnteroPosteriorCuspideInteira"
            />
            <label
              htmlFor="relacaoMolarAnteroPosteriorCuspideInteira"
              className="form-check-label"
            >
              Cuspide inteira
            </label>
          </div>
          <ErrorMessage name="fluoroseDentaria">
            {(msg) => <div className="text-danger">{msg}</div>}
          </ErrorMessage>
        </div>
      </div>
    </div>
  );
}
