import React, { useEffect, useRef } from "react";
import { ErrorMessage, Field } from "formik";
import {
  AvaliacaoUltimaConsultaEnum,
  EscolaridadeEnum,
  LocalConsultaEnum,
  MotivoUltimaConsultaEnum,
  UltimaConsultaEnum,
} from "../../Types/types";

export default function EAMU() {
  const escolaridadeMaeRef = useRef<HTMLDivElement>(null);
  const escolaridadePaiRef = useRef<HTMLDivElement>(null);
  const recebeBeneficioSocialRef = useRef<HTMLDivElement>(null);
  const filhoDorDente6MesesRef = useRef<HTMLDivElement>(null);
  const filhoNivelDorRef = useRef<HTMLDivElement>(null);
  const filhoVisitouDentistaRef = useRef<HTMLDivElement>(null);
  const filhoUltimaConsultaRef = useRef<HTMLDivElement>(null);
  const filhoLocalConsultaRef = useRef<HTMLDivElement>(null);
  const motivoUltimaConsultaRef = useRef<HTMLDivElement>(null);
  const avaliacaoUltimaConsultaRef = useRef<HTMLDivElement>(null);

  function scrollTo(ref: React.RefObject<HTMLDivElement>) {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div ref={escolaridadeMaeRef}>
        <h3 className="question lead fs-2">Escolaridade da mãe</h3>
        <div className="d-flex flex-column">
          <div
            className="form-check"
            onClick={() => {
              scrollTo(escolaridadePaiRef);
            }}
          >
            <Field
              type="radio"
              name="escolaridadeMae"
              value={EscolaridadeEnum.ANALFABETO}
              className="form-check-input"
              id="ANALFABETO_M"
            />
            <label htmlFor="ANALFABETO_M" className="form-check-label">
              Analfabeto
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(escolaridadePaiRef);
            }}
          >
            <Field
              type="radio"
              name="escolaridadeMae"
              value={EscolaridadeEnum.ALFABETIZADO_SEM_EDUCACAO_FORMAL}
              className="form-check-input"
              id="ALFABETIZADO_SEM_EDUCACAO_FORMAL_M"
            />
            <label
              htmlFor="ALFABETIZADO_SEM_EDUCACAO_FORMAL_M"
              className="form-check-label"
            >
              Alfabetizado sem educação formal
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(escolaridadePaiRef);
            }}
          >
            <Field
              type="radio"
              name="escolaridadeMae"
              value={
                EscolaridadeEnum.ALFABETIZADO_COM_EDUCACAO_FORMAL_PARA_ADULTOS
              }
              className="form-check-input"
              id="ALFABETIZADO_COM_EDUCACAO_FORMAL_PARA_ADULTOS_M"
            />
            <label
              htmlFor="ALFABETIZADO_COM_EDUCACAO_FORMAL_PARA_ADULTOS_M"
              className="form-check-label"
            >
              Alfabetizado com Educação Formal para Adultos
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(escolaridadePaiRef);
            }}
          >
            <Field
              type="radio"
              name="escolaridadeMae"
              value={EscolaridadeEnum.ENSINO_FUNDAMENTAL_ATE_4_SERIE}
              className="form-check-input"
              id="ENSINO_FUNDAMENTAL_ATE_4_SERIE_M"
            />
            <label
              htmlFor="ENSINO_FUNDAMENTAL_ATE_4_SERIE_M"
              className="form-check-label"
            >
              Ensino Fundamental até 4ª Série
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(escolaridadePaiRef);
            }}
          >
            <Field
              type="radio"
              name="escolaridadeMae"
              value={EscolaridadeEnum.ENSINO_FUNDAMENTAL_ATE_8_SERIE}
              className="form-check-input"
              id="ENSINO_FUNDAMENTAL_ATE_8_SERIE_M"
            />
            <label
              htmlFor="ENSINO_FUNDAMENTAL_ATE_8_SERIE_M"
              className="form-check-label"
            >
              Ensino Fundamental Até 8ª Série
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(escolaridadePaiRef);
            }}
          >
            <Field
              type="radio"
              name="escolaridadeMae"
              value={EscolaridadeEnum.ENSINO_MEDIO_COMPLETO}
              className="form-check-input"
              id="ENSINO_MEDIO_COMPLETO_M"
            />
            <label
              htmlFor="ENSINO_MEDIO_COMPLETO_M"
              className="form-check-label"
            >
              Ensino Médio Completo
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(escolaridadePaiRef);
            }}
          >
            <Field
              type="radio"
              name="escolaridadeMae"
              value={EscolaridadeEnum.ENSINO_SUPERIOR_COMPLETO}
              className="form-check-input"
              id="ENSINO_SUPERIOR_COMPLETO_M"
            />
            <label
              htmlFor="ENSINO_SUPERIOR_COMPLETO_M"
              className="form-check-label"
            >
              Ensino Superior Completo
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(escolaridadePaiRef);
            }}
          >
            <Field
              type="radio"
              name="escolaridadeMae"
              value={EscolaridadeEnum.NAO_SE_APLICA}
              className="form-check-input"
              id="NAO_SE_APLICA_M"
            />
            <label htmlFor="NAO_SE_APLICA_M" className="form-check-label">
              Não se aplica
            </label>
          </div>
          <ErrorMessage name="escolaridadeMae">
            {(msg) => <div className="text-danger">{msg}</div>}
          </ErrorMessage>
        </div>
      </div>

      <div ref={escolaridadePaiRef}>
        <h3 className="question lead fs-2">Escolaridade do pai</h3>
        <div className="d-flex flex-column">
          <div
            className="form-check"
            onClick={() => {
              scrollTo(recebeBeneficioSocialRef);
            }}
          >
            <Field
              type="radio"
              name="escolaridadePai"
              value={EscolaridadeEnum.ANALFABETO}
              className="form-check-input"
              id="ANALFABETO_P"
            />
            <label htmlFor="ANALFABETO_P" className="form-check-label">
              Analfabeto
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(recebeBeneficioSocialRef);
            }}
          >
            <Field
              type="radio"
              name="escolaridadePai"
              value={EscolaridadeEnum.ALFABETIZADO_SEM_EDUCACAO_FORMAL}
              className="form-check-input"
              id="ALFABETIZADO_SEM_EDUCACAO_FORMAL_P"
            />
            <label
              htmlFor="ALFABETIZADO_SEM_EDUCACAO_FORMAL_P"
              className="form-check-label"
            >
              Alfabetizado sem educação formal
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(recebeBeneficioSocialRef);
            }}
          >
            <Field
              type="radio"
              name="escolaridadePai"
              value={
                EscolaridadeEnum.ALFABETIZADO_COM_EDUCACAO_FORMAL_PARA_ADULTOS
              }
              className="form-check-input"
              id="ALFABETIZADO_COM_EDUCACAO_FORMAL_PARA_ADULTOS_P"
            />
            <label
              htmlFor="ALFABETIZADO_COM_EDUCACAO_FORMAL_PARA_ADULTOS_P"
              className="form-check-label"
            >
              Alfabetizado com Educação Formal para Adultos
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(recebeBeneficioSocialRef);
            }}
          >
            <Field
              type="radio"
              name="escolaridadePai"
              value={EscolaridadeEnum.ENSINO_FUNDAMENTAL_ATE_4_SERIE}
              className="form-check-input"
              id="ENSINO_FUNDAMENTAL_ATE_4_SERIE_P"
            />
            <label
              htmlFor="ENSINO_FUNDAMENTAL_ATE_4_SERIE_P"
              className="form-check-label"
            >
              Ensino Fundamental até 4ª Série
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(recebeBeneficioSocialRef);
            }}
          >
            <Field
              type="radio"
              name="escolaridadePai"
              value={EscolaridadeEnum.ENSINO_FUNDAMENTAL_ATE_8_SERIE}
              className="form-check-input"
              id="ENSINO_FUNDAMENTAL_ATE_8_SERIE_P"
            />
            <label
              htmlFor="ENSINO_FUNDAMENTAL_ATE_8_SERIE_P"
              className="form-check-label"
            >
              Ensino Fundamental Até 8ª Série
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(recebeBeneficioSocialRef);
            }}
          >
            <Field
              type="radio"
              name="escolaridadePai"
              value={EscolaridadeEnum.ENSINO_MEDIO_COMPLETO}
              className="form-check-input"
              id="ENSINO_MEDIO_COMPLETO_P"
            />
            <label
              htmlFor="ENSINO_MEDIO_COMPLETO_P"
              className="form-check-label"
            >
              Ensino Médio Completo
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(recebeBeneficioSocialRef);
            }}
          >
            <Field
              type="radio"
              name="escolaridadePai"
              value={EscolaridadeEnum.ENSINO_SUPERIOR_COMPLETO}
              className="form-check-input"
              id="ENSINO_SUPERIOR_COMPLETO_P"
            />
            <label
              htmlFor="ENSINO_SUPERIOR_COMPLETO_P"
              className="form-check-label"
            >
              Ensino Superior Completo
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(recebeBeneficioSocialRef);
            }}
          >
            <Field
              type="radio"
              name="escolaridadePai"
              value={EscolaridadeEnum.NAO_SE_APLICA}
              className="form-check-input"
              id="NAO_SE_APLICA_P"
            />
            <label htmlFor="NAO_SE_APLICA_P" className="form-check-label">
              Não se aplica
            </label>
          </div>
          <ErrorMessage name="escolaridadePai">
            {(msg) => <div className="text-danger">{msg}</div>}
          </ErrorMessage>
        </div>
      </div>

      <div ref={recebeBeneficioSocialRef}>
        <h3 className="question lead fs-2">
          Alguém da sua família recebe algum benefício social?
        </h3>
        <div className="d-flex flex-column">
          <div
            className="form-check"
            onClick={() => {
              scrollTo(filhoDorDente6MesesRef);
            }}
          >
            <Field
              type="radio"
              name="recebeBeneficioSocial"
              value={"true"}
              className="form-check-input"
              id="recebeBeneficioSocial_SIM"
            />
            <label
              htmlFor="recebeBeneficioSocial_SIM"
              className="form-check-label"
            >
              Sim
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(filhoDorDente6MesesRef);
            }}
          >
            <Field
              type="radio"
              name="recebeBeneficioSocial"
              value={"false"}
              className="form-check-input"
              id="recebeBeneficioSocial_NAO"
            />
            <label
              htmlFor="recebeBeneficioSocial_NAO"
              className="form-check-label"
            >
              Não
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(filhoDorDente6MesesRef);
            }}
          >
            <Field
              type="radio"
              name="recebeBeneficioSocial"
              value={"null"}
              className="form-check-input"
              id="recebeBeneficioSocial_NAO_SE_APLICA"
            />
            <label
              htmlFor="recebeBeneficioSocial_NAO_SE_APLICA"
              className="form-check-label"
            >
              Não Se Aplica
            </label>
          </div>
          <ErrorMessage name="recebeBeneficioSocial">
            {(msg) => <div className="text-danger">{msg}</div>}
          </ErrorMessage>
        </div>
      </div>

      <div ref={filhoDorDente6MesesRef}>
        <h3 className="question lead fs-2">
          Nos últimos 6 meses você teve dor de dente?
        </h3>
        <div className="d-flex flex-column">
          <div
            className="form-check"
            onClick={() => {
              scrollTo(filhoNivelDorRef);
            }}
          >
            <Field
              type="radio"
              name="filhoDorDente6Meses"
              value={"true"}
              className="form-check-input"
              id="filhoDorDente6Meses_SIM"
            />
            <label
              htmlFor="filhoDorDente6Meses_SIM"
              className="form-check-label"
            >
              Sim
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(filhoNivelDorRef);
            }}
          >
            <Field
              type="radio"
              name="filhoDorDente6Meses"
              value={"false"}
              className="form-check-input"
              id="filhoDorDente6Meses_NAO"
            />
            <label
              htmlFor="filhoDorDente6Meses_NAO"
              className="form-check-label"
            >
              Não
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(filhoNivelDorRef);
            }}
          >
            <Field
              type="radio"
              name="filhoDorDente6Meses"
              value={"null"}
              className="form-check-input"
              id="filhoDorDente6Meses_NAO_SE_APLICA"
            />
            <label
              htmlFor="filhoDorDente6Meses_NAO_SE_APLICA"
              className="form-check-label"
            >
              Não Se Aplica
            </label>
          </div>
          <ErrorMessage name="filhoDorDente6Meses">
            {(msg) => <div className="text-danger">{msg}</div>}
          </ErrorMessage>
        </div>
      </div>

      <div ref={filhoNivelDorRef}>
        <h3 className="question lead fs-2">
          Nível de dor numa escala de 0 a 10
        </h3>
        <div className="text-field-answer">
          <Field
            name="filhoNivelDor"
            type="number"
            placeholder="Nivel Dor"
            className="form-control"
            onWheel={(e: any) => e.target.blur()}
          />
          <ErrorMessage name="filhoNivelDor">
            {(msg) => <div className="text-danger">{msg}</div>}
          </ErrorMessage>
        </div>
      </div>

      <div ref={filhoVisitouDentistaRef}>
        <h3 className="question lead fs-2">
          Alguma vez na vida você já foi ao consultório do dentista?
        </h3>
        <div className="d-flex flex-column">
          <div
            className="form-check"
            onClick={() => {
              scrollTo(filhoUltimaConsultaRef);
            }}
          >
            <Field
              type="radio"
              name="filhoVisitouDentista"
              value={"true"}
              className="form-check-input"
              id="filhoVisitouDentista_SIM"
            />
            <label
              htmlFor="filhoVisitouDentista_SIM"
              className="form-check-label"
            >
              Sim
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(filhoUltimaConsultaRef);
            }}
          >
            <Field
              type="radio"
              name="filhoVisitouDentista"
              value={"false"}
              className="form-check-input"
              id="filhoVisitouDentista_NAO"
            />
            <label
              htmlFor="filhoVisitouDentista_NAO"
              className="form-check-label"
            >
              Não
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(filhoUltimaConsultaRef);
            }}
          >
            <Field
              type="radio"
              name="filhoVisitouDentista"
              value={"null"}
              className="form-check-input"
              id="filhoVisitouDentista_NAO_SE_APLICA"
            />
            <label
              htmlFor="filhoVisitouDentista_NAO_SE_APLICA"
              className="form-check-label"
            >
              Não Se Aplica
            </label>
          </div>
          <ErrorMessage name="filhoVisitouDentista">
            {(msg) => <div className="text-danger">{msg}</div>}
          </ErrorMessage>
        </div>
      </div>

      <div ref={filhoUltimaConsultaRef}>
        <h3 className="question lead fs-2">
          Quando você consultou o dentista pela última vez?
        </h3>
        <div className="d-flex flex-column">
          <div
            className="form-check"
            onClick={() => {
              scrollTo(filhoLocalConsultaRef);
            }}
          >
            <Field
              type="radio"
              name="filhoUltimaConsulta"
              value={UltimaConsultaEnum.NUNCA_FOI}
              className="form-check-input"
              id="filhoUltimaConsulta_NUNCA_FOI"
            />
            <label
              htmlFor="filhoUltimaConsulta_NUNCA_FOI"
              className="form-check-label"
            >
              Nunca Foi
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(filhoLocalConsultaRef);
            }}
          >
            <Field
              type="radio"
              name="filhoUltimaConsulta"
              value={UltimaConsultaEnum.MENOS_1_ANO}
              className="form-check-input"
              id="filhoUltimaConsulta_MENOS_1_ANO"
            />
            <label
              htmlFor="filhoUltimaConsulta_MENOS_1_ANO"
              className="form-check-label"
            >
              Menos de 1 Ano
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(filhoLocalConsultaRef);
            }}
          >
            <Field
              type="radio"
              name="filhoUltimaConsulta"
              value={UltimaConsultaEnum.DE_1_A_2_ANOS}
              className="form-check-input"
              id="filhoUltimaConsulta_DE_1_A_2_ANOS"
            />
            <label
              htmlFor="filhoUltimaConsulta_DE_1_A_2_ANOS"
              className="form-check-label"
            >
              De 1 a 2 Anos
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(filhoLocalConsultaRef);
            }}
          >
            <Field
              type="radio"
              name="filhoUltimaConsulta"
              value={UltimaConsultaEnum.DE_3_OU_MAIS}
              className="form-check-input"
              id="filhoUltimaConsulta_DE_3_OU_MAIS"
            />
            <label
              htmlFor="filhoUltimaConsulta_DE_3_OU_MAIS"
              className="form-check-label"
            >
              De 3 Ou Mais
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(filhoLocalConsultaRef);
            }}
          >
            <Field
              type="radio"
              name="filhoUltimaConsulta"
              value={UltimaConsultaEnum.NAO_SE_APLICA}
              className="form-check-input"
              id="filhoUltimaConsulta_NAO_SE_APLICA"
            />
            <label
              htmlFor="filhoUltimaConsulta_NAO_SE_APLICA"
              className="form-check-label"
            >
              Não Se Aplica
            </label>
          </div>
          <ErrorMessage name="filhoUltimaConsulta">
            {(msg) => <div className="text-danger">{msg}</div>}
          </ErrorMessage>
        </div>
      </div>

      <div ref={filhoLocalConsultaRef}>
        <h3 className="question lead fs-2">Onde foi a sua consulta?</h3>
        <div className="d-flex flex-column">
          <div
            className="form-check"
            onClick={() => {
              scrollTo(motivoUltimaConsultaRef);
            }}
          >
            <Field
              type="radio"
              name="filhoLocalConsulta"
              value={LocalConsultaEnum.NUNCA_FOI}
              className="form-check-input"
              id="filhoLocalConsulta_NUNCA_FOI"
            />
            <label
              htmlFor="filhoLocalConsulta_NUNCA_FOI"
              className="form-check-label"
            >
              Nunca Foi
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(motivoUltimaConsultaRef);
            }}
          >
            <Field
              type="radio"
              name="filhoLocalConsulta"
              value={LocalConsultaEnum.PUBLICO}
              className="form-check-input"
              id="filhoLocalConsulta_PUBLICO"
            />
            <label
              htmlFor="filhoLocalConsulta_PUBLICO"
              className="form-check-label"
            >
              Público
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(motivoUltimaConsultaRef);
            }}
          >
            <Field
              type="radio"
              name="filhoLocalConsulta"
              value={LocalConsultaEnum.PARTICULAR}
              className="form-check-input"
              id="filhoLocalConsulta_PARTICULAR"
            />
            <label
              htmlFor="filhoLocalConsulta_PARTICULAR"
              className="form-check-label"
            >
              Particular
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(motivoUltimaConsultaRef);
            }}
          >
            <Field
              type="radio"
              name="filhoLocalConsulta"
              value={LocalConsultaEnum.PLANO_CONVENIO}
              className="form-check-input"
              id="filhoLocalConsulta_PLANO_CONVENIO"
            />
            <label
              htmlFor="filhoLocalConsulta_PLANO_CONVENIO"
              className="form-check-label"
            >
              Plano Ou Convênio
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(motivoUltimaConsultaRef);
            }}
          >
            <Field
              type="radio"
              name="filhoLocalConsulta"
              value={LocalConsultaEnum.NAO_SE_APLICA}
              className="form-check-input"
              id="filhoLocalConsulta_NAO_SE_APLICA"
            />
            <label
              htmlFor="filhoLocalConsulta_NAO_SE_APLICA"
              className="form-check-label"
            >
              Não Se Aplica
            </label>
          </div>
          <ErrorMessage name="filhoLocalConsulta">
            {(msg) => <div className="text-danger">{msg}</div>}
          </ErrorMessage>
        </div>
      </div>

      <div ref={motivoUltimaConsultaRef}>
        <h3 className="question lead fs-2">
          Qual o motivo da sua última consulta?
        </h3>
        <div className="d-flex flex-column">
          <div
            className="form-check"
            onClick={() => {
              scrollTo(avaliacaoUltimaConsultaRef);
            }}
          >
            <Field
              type="radio"
              name="motivoUltimaConsulta"
              value={MotivoUltimaConsultaEnum.NUNCA_FOI}
              className="form-check-input"
              id="motivoUltimaConsulta_NUNCA_FOI"
            />
            <label
              htmlFor="motivoUltimaConsulta_NUNCA_FOI"
              className="form-check-label"
            >
              Nunca Foi
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(avaliacaoUltimaConsultaRef);
            }}
          >
            <Field
              type="radio"
              name="motivoUltimaConsulta"
              value={MotivoUltimaConsultaEnum.REVISAO_PREVENCAO_CHECKUP}
              className="form-check-input"
              id="motivoUltimaConsulta_REVISAO_PREVENCAO_CHECKUP"
            />
            <label
              htmlFor="motivoUltimaConsulta_REVISAO_PREVENCAO_CHECKUP"
              className="form-check-label"
            >
              Revisão de Prevenção ou Checkup
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(avaliacaoUltimaConsultaRef);
            }}
          >
            <Field
              type="radio"
              name="motivoUltimaConsulta"
              value={MotivoUltimaConsultaEnum.DOR}
              className="form-check-input"
              id="motivoUltimaConsulta_DOR"
            />
            <label
              htmlFor="motivoUltimaConsulta_DOR"
              className="form-check-label"
            >
              Dor
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(avaliacaoUltimaConsultaRef);
            }}
          >
            <Field
              type="radio"
              name="motivoUltimaConsulta"
              value={MotivoUltimaConsultaEnum.EXTRACAO}
              className="form-check-input"
              id="motivoUltimaConsulta_EXTRACAO"
            />
            <label
              htmlFor="motivoUltimaConsulta_EXTRACAO"
              className="form-check-label"
            >
              Extração
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(avaliacaoUltimaConsultaRef);
            }}
          >
            <Field
              type="radio"
              name="motivoUltimaConsulta"
              value={MotivoUltimaConsultaEnum.TRATAMENTO}
              className="form-check-input"
              id="motivoUltimaConsulta_TRATAMENTO"
            />
            <label
              htmlFor="motivoUltimaConsulta_TRATAMENTO"
              className="form-check-label"
            >
              Tratamento
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(avaliacaoUltimaConsultaRef);
            }}
          >
            <Field
              type="radio"
              name="motivoUltimaConsulta"
              value={MotivoUltimaConsultaEnum.OUTROS}
              className="form-check-input"
              id="motivoUltimaConsulta_OUTROS"
            />
            <label
              htmlFor="motivoUltimaConsulta_OUTROS"
              className="form-check-label"
            >
              Outros
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(avaliacaoUltimaConsultaRef);
            }}
          >
            <Field
              type="radio"
              name="motivoUltimaConsulta"
              value={MotivoUltimaConsultaEnum.NAO_SE_APLICA}
              className="form-check-input"
              id="motivoUltimaConsulta_NAO_SE_APLICA"
            />
            <label
              htmlFor="motivoUltimaConsulta_NAO_SE_APLICA"
              className="form-check-label"
            >
              Não Se Aplica
            </label>
          </div>
          <ErrorMessage name="motivoUltimaConsulta">
            {(msg) => <div className="text-danger">{msg}</div>}
          </ErrorMessage>
        </div>
      </div>

      <div ref={avaliacaoUltimaConsultaRef}>
        <h3 className="question lead fs-2">
          O que você achou do tratamento na última consulta?
        </h3>
        <div className="d-flex flex-column">
          <div className="form-check">
            <Field
              type="radio"
              name="avaliacaoUltimaConsulta"
              value={AvaliacaoUltimaConsultaEnum.NUNCA_FOI}
              className="form-check-input"
              id="avaliacaoUltimaConsulta_NUNCA_FOI"
            />
            <label
              htmlFor="avaliacaoUltimaConsulta_NUNCA_FOI"
              className="form-check-label"
            >
              Nunca Foi
            </label>
          </div>
          <div className="form-check">
            <Field
              type="radio"
              name="avaliacaoUltimaConsulta"
              value={AvaliacaoUltimaConsultaEnum.MUITO_BOM}
              className="form-check-input"
              id="avaliacaoUltimaConsulta_MUITO_BOM"
            />
            <label
              htmlFor="avaliacaoUltimaConsulta_MUITO_BOM"
              className="form-check-label"
            >
              Muito Bom
            </label>
          </div>
          <div className="form-check">
            <Field
              type="radio"
              name="avaliacaoUltimaConsulta"
              value={AvaliacaoUltimaConsultaEnum.BOM}
              className="form-check-input"
              id="avaliacaoUltimaConsulta_BOM"
            />
            <label
              htmlFor="avaliacaoUltimaConsulta_BOM"
              className="form-check-label"
            >
              Bom
            </label>
          </div>
          <div className="form-check">
            <Field
              type="radio"
              name="avaliacaoUltimaConsulta"
              value={AvaliacaoUltimaConsultaEnum.REGULAR}
              className="form-check-input"
              id="avaliacaoUltimaConsulta_REGULAR"
            />
            <label
              htmlFor="avaliacaoUltimaConsulta_REGULAR"
              className="form-check-label"
            >
              Regular
            </label>
          </div>
          <div className="form-check">
            <Field
              type="radio"
              name="avaliacaoUltimaConsulta"
              value={AvaliacaoUltimaConsultaEnum.RUIM}
              className="form-check-input"
              id="avaliacaoUltimaConsulta_RUIM"
            />
            <label
              htmlFor="avaliacaoUltimaConsulta_RUIM"
              className="form-check-label"
            >
              Ruim
            </label>
          </div>
          <div className="form-check">
            <Field
              type="radio"
              name="avaliacaoUltimaConsulta"
              value={AvaliacaoUltimaConsultaEnum.MUTIO_RUIM}
              className="form-check-input"
              id="avaliacaoUltimaConsulta_MUTIO_RUIM"
            />
            <label
              htmlFor="avaliacaoUltimaConsulta_MUTIO_RUIM"
              className="form-check-label"
            >
              Outros
            </label>
          </div>
          <div className="form-check">
            <Field
              type="radio"
              name="avaliacaoUltimaConsulta"
              value={AvaliacaoUltimaConsultaEnum.NAO_SE_APLICA}
              className="form-check-input"
              id="avaliacaoUltimaConsulta_NAO_SE_APLICA"
            />
            <label
              htmlFor="avaliacaoUltimaConsulta_NAO_SE_APLICA"
              className="form-check-label"
            >
              Não Se Aplica
            </label>
          </div>
          <ErrorMessage name="avaliacaoUltimaConsulta">
            {(msg) => <div className="text-danger">{msg}</div>}
          </ErrorMessage>
        </div>
      </div>
    </>
  );
}
