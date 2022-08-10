import { ErrorMessage, Field } from "formik";
import React, { PropsWithChildren } from "react";

export default function MCA() {
  return (
    <div className="d-flex flex-column">
      <h2 className="question lead fs-2">Marcadores de Consumo Alimentar</h2>
      <Question name="saladaCrua" question="Salada Crua" />
      <Question
        name="legumesVerdurasCozidos"
        question="Legumes e Verduras Cozidos"
      />
      <Question
        name="frutasFrescasSaladaDeFrutas"
        question="Frutas Frescas, Salada De Frutas"
      />
      <Question name="feijao" question="Feijão" />
      <Question name="leiteOuIogurte" question="Leite Ou Iogurte" />
      <Question
        name="batataFritaBatataDePacoteSalgadosFritos"
        question="Batata Frita, Batata De Pacote, Salgados Fritos"
      />
      <Question name="hamburgerEmbutidos" question="Hamburger, Embutidos" />
      <Question
        name="bolachasBiscoitosSalgadosSalgadinhoDePacote"
        question="Bolachas, Biscoitos, Salgados, Salgadinho De Pacote"
      />
      <Question
        name="bolachasBiscoitosDocesRecheadosDocesBalasChocolates"
        question="Bolachas, Biscoitos Doces Recheados, Doces, Balas, Chocolates"
      />
      <Question name="refrigerante" question="Refrigerante" />
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
      value: "NAO_COMI",
      display: "Não comi",
    },
    {
      value: "UM_DIA",
      display: "Um dia",
    },
    {
      value: "DOIS_DIAS",
      display: "Dois dias",
    },
    {
      value: "TRES_DIAS",
      display: "Três dias",
    },
    {
      value: "QUATRO_DIAS",
      display: "Quatro dias",
    },
    {
      value: "CINCO_DIAS",
      display: "Cinco dias",
    },
    {
      value: "SEIS_DIAS",
      display: "Seis dias",
    },
    {
      value: "SETE_DIAS",
      display: "Sete dias",
    },
  ];

  return (
    <>
      <h3 className="question lead fs-2">{props.question}</h3>
      <div className="d-flex flex-column">
        {awsers.map((awser, index) => (
          <div key={index} className="form-check">
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
