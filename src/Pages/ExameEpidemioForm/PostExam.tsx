import { Field, ErrorMessage } from "formik";
import React, { PropsWithChildren } from "react";

export default function PostExam(
  porps: PropsWithChildren<{
    age: number;
  }>
) {
  return (
    <div className="d-flex flex-column">
      {porps.age < 12 && (
        <div>
          <h2 className="text-center lead fs-3">SOHO</h2>

          <QuestionSOHO
            name="dificilComer"
            question="Alguma vez foi difícil para você comer por causa dos seus dentes?"
          />
          <QuestionSOHO
            name="dificilBeber"
            question="Alguma vez foi difícil para você beber por causa dos seus dentes?"
          />
          <QuestionSOHO
            name="dificilFalar"
            question="Alguma vez foi difícil para você falar por causa dos seus dentes?"
          />
          <QuestionSOHO
            name="dificilBrincar"
            question="Alguma vez foi difícil para você brincar por causa dos seus dentes?"
          />
          <QuestionSOHO
            name="dificilDormir"
            question="Alguma vez foi difícil para você dormir por causa dos seus dentes?"
          />
          <QuestionSOHO
            name="deixouDeSorrirPorDentesFeios"
            question="Alguma vez você deixou de sorrir porque não gostou dos seus dentes?"
          />
          <QuestionSOHO
            name="deixouDeSorrirPorDentesDoendo"
            question="Alguma vez você deixou de sorrir porque os seus dentes estavam doendo?"
          />
        </div>
      )}
      {porps.age >= 12 && (
        <div>
          <h2 className="text-center lead fs-3">CPQ</h2>
          <QuestionCPQ
            name="dorNosDentes"
            question="Nos últimos 3 meses, com que frequência você teve Dor nos seus dentes, lábios, maxilares e boca?"
          />
          <QuestionCPQ
            name="feridas"
            question="Nos últimos 3 meses, com que frequência você teve Feridas na boca?"
          />
          <QuestionCPQ
            name="mauHalito"
            question="Nos últimos 3 meses, com que frequência você teve Mau hálito?"
          />
          <QuestionCPQ
            name="restosDeAlimentoPreso"
            question="Nos últimos 3 meses, com que frequência você teve Restos de alimentos presos dentro ou entre os seus dentes?"
          />
          <QuestionCPQ
            name="demorouMaisParaTerminarRefeicao"
            question="Nos últimos 3 meses, com que frequência você Demorou mais que os outros para terminar a sua refeição?"
          />
          <QuestionCPQ
            name="dificuldadeMorder"
            question="Nos últimos 3 meses, com que frequência você teve Dificuldade para morder ou mastigar alimentos como maçãs, espigas de milho ou carne?"
          />
          <QuestionCPQ
            name="dificuldadeDizer"
            question="Nos últimos 3 meses, com que frequência você teve dificuldade para dizer algumas palavras?"
          />
          <QuestionCPQ
            name="dificuldadeIngerirQuentesFrios"
            question="Nos últimos 3 meses, com que frequência você teve dificuldade para beber ou comer alimentos quentes ou frios?"
          />
          <QuestionCPQ
            name="irritado"
            question="Nos últimos 3 meses, você já ficou irritado(a) ou frustrado(a)?"
          />
          <QuestionCPQ
            name="timido"
            question="Nos últimos 3 meses, você já ficou tímido, constrangido ou com vergonha?"
          />
          <QuestionCPQ
            name="chateado"
            question="Nos últimos 3 meses, você já ficou chateado(a)?"
          />
          <QuestionCPQ
            name="preocupado"
            question="Nos últimos 3 meses, você já ficou preocupado(a) com o que as outras pessoas pensam sobre os seus dentes, lábios, maxilares ou boca?"
          />
          <QuestionCPQ
            name="evitouSorrir"
            question="Nos últimos 3 meses, você já evitou sorrir ou dar risadas quando está com outras crianças?"
          />
          <QuestionCPQ
            name="discutiu"
            question="Nos últimos 3 meses, você já discutiu com outras crianças ou pessoas de sua família?"
          />
          <QuestionCPQ
            name="aborreceuChamaramPorApelidos"
            question="Nos últimos 3 meses, com que frequência outras crianças lhe aborreceram ou lhe chamaram por apelidos?"
          />
          <QuestionCPQ
            name="perguntaramSobreDente"
            question="Nos últimos 3 meses, outras crianças lhe fizeram perguntas sobre os seus dentes, lábios, maxilares e boca?"
          />
        </div>
      )}
    </div>
  );
}

function QuestionCPQ(
  props: PropsWithChildren<{
    question: string;
    name: string;
  }>
) {
  const awsers = [
    {
      value: "NUNCA",
      display: "Nunca",
    },
    {
      value: "UMA_OU_DUAS_VEZES",
      display: "Uma ou duas vezes",
    },
    {
      value: "ALGUMAS_VEZES",
      display: "Algumas vezes",
    },
    {
      value: "FREQUENTEMENTE",
      display: "Frequentemente",
    },
    {
      value: "TODOS_OS_DIAS_OU_QUASE",
      display: "Todos os dias ou quase todos os dias",
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

function QuestionSOHO(
  props: PropsWithChildren<{
    question: string;
    name: string;
  }>
) {
  const awsers: any[] = [
    {
      value: "NAO",
      display: "Não",
    },
    {
      value: "UM_POUCO",
      display: "Um pouco",
    },
    {
      value: "MUITO",
      display: "Muito",
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
