import { ErrorMessage, Field } from "formik";
import React, { useEffect, useRef } from "react";
import {
  AvaliacaoBucalEnum,
  FilhoQtdEscovacoesPorDiaEnum,
  FrequenciaTrocaEscovasEnum,
} from "../../Types/types";

export default function AISB() {
  const filhoAvaliacaoBucalRef = useRef<HTMLDivElement>(null);
  const filhoQtdEscovacoesPorDiaRef = useRef<HTMLDivElement>(null);
  const frequenciaTrocaEscovasRef = useRef<HTMLDivElement>(null);
  const usaFioDentalRef = useRef<HTMLDivElement>(null);
  const usaPastaComFluorRef = useRef<HTMLDivElement>(null);

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
      <div ref={filhoAvaliacaoBucalRef}>
        <h3 className="question lead fs-2">
          Com relação aos seus dentes/boca, você está:
        </h3>
        <div className="d-flex flex-column">
          <div
            className="form-check"
            onClick={() => {
              scrollTo(filhoQtdEscovacoesPorDiaRef);
            }}
          >
            <Field
              type="radio"
              name="filhoAvaliacaoBucal"
              value={AvaliacaoBucalEnum.MUITO_SATISFEITO}
              className="form-check-input"
              id="filhoAvaliacaoBucal_MUITO_SATISFEITO"
            />
            <label
              htmlFor="filhoAvaliacaoBucal_MUITO_SATISFEITO"
              className="form-check-label"
            >
              Muito Satisfeito
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(filhoQtdEscovacoesPorDiaRef);
            }}
          >
            <Field
              type="radio"
              name="filhoAvaliacaoBucal"
              value={AvaliacaoBucalEnum.SATISFEITO}
              className="form-check-input"
              id="filhoAvaliacaoBucal_SATISFEITO"
            />
            <label
              htmlFor="filhoAvaliacaoBucal_SATISFEITO"
              className="form-check-label"
            >
              Satisfeito
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(filhoQtdEscovacoesPorDiaRef);
            }}
          >
            <Field
              type="radio"
              name="filhoAvaliacaoBucal"
              value={AvaliacaoBucalEnum.REGULAR}
              className="form-check-input"
              id="filhoAvaliacaoBucal_REGULAR"
            />
            <label
              htmlFor="filhoAvaliacaoBucal_REGULAR"
              className="form-check-label"
            >
              Regular
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(filhoQtdEscovacoesPorDiaRef);
            }}
          >
            <Field
              type="radio"
              name="filhoAvaliacaoBucal"
              value={AvaliacaoBucalEnum.INSATISFEITO}
              className="form-check-input"
              id="filhoAvaliacaoBucal_INSATISFEITO"
            />
            <label
              htmlFor="filhoAvaliacaoBucal_INSATISFEITO"
              className="form-check-label"
            >
              Insatisfeito
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(filhoQtdEscovacoesPorDiaRef);
            }}
          >
            <Field
              type="radio"
              name="filhoAvaliacaoBucal"
              value={AvaliacaoBucalEnum.MUITO_INSATISFEITO}
              className="form-check-input"
              id="filhoAvaliacaoBucal_MUITO_INSATISFEITO"
            />
            <label
              htmlFor="filhoAvaliacaoBucal_MUITO_INSATISFEITO"
              className="form-check-label"
            >
              Muito Insatisfeito
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(filhoQtdEscovacoesPorDiaRef);
            }}
          >
            <Field
              type="radio"
              name="filhoAvaliacaoBucal"
              value={AvaliacaoBucalEnum.NAO_SE_APLICA}
              className="form-check-input"
              id="filhoAvaliacaoBucal_NAO_SE_APLICA"
            />
            <label
              htmlFor="filhoAvaliacaoBucal_NAO_SE_APLICA"
              className="form-check-label"
            >
              Não Se Aplica
            </label>
          </div>
          <ErrorMessage name="filhoAvaliacaoBucal">
            {(msg) => <div className="text-danger">{msg}</div>}
          </ErrorMessage>
        </div>
      </div>

      <div ref={filhoQtdEscovacoesPorDiaRef}>
        <h3 className="question lead fs-2">
          Quantas vezes você escova os dentes ao dia?
        </h3>
        <div className="d-flex flex-column">
          <div
            className="form-check"
            onClick={() => {
              scrollTo(frequenciaTrocaEscovasRef);
            }}
          >
            <Field
              type="radio"
              name="filhoQtdEscovacoesPorDia"
              value={FilhoQtdEscovacoesPorDiaEnum.NENHUMA}
              className="form-check-input"
              id="filhoQtdEscovacoesPorDia_NENHUMA"
            />
            <label
              htmlFor="filhoQtdEscovacoesPorDia_NENHUMA"
              className="form-check-label"
            >
              Nenhuma
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(frequenciaTrocaEscovasRef);
            }}
          >
            <Field
              type="radio"
              name="filhoQtdEscovacoesPorDia"
              value={FilhoQtdEscovacoesPorDiaEnum.UMA}
              className="form-check-input"
              id="filhoQtdEscovacoesPorDia_UMA"
            />
            <label
              htmlFor="filhoQtdEscovacoesPorDia_UMA"
              className="form-check-label"
            >
              Uma
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(frequenciaTrocaEscovasRef);
            }}
          >
            <Field
              type="radio"
              name="filhoQtdEscovacoesPorDia"
              value={FilhoQtdEscovacoesPorDiaEnum.DUAS}
              className="form-check-input"
              id="filhoQtdEscovacoesPorDia_DUAS"
            />
            <label
              htmlFor="filhoQtdEscovacoesPorDia_DUAS"
              className="form-check-label"
            >
              Duas
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(frequenciaTrocaEscovasRef);
            }}
          >
            <Field
              type="radio"
              name="filhoQtdEscovacoesPorDia"
              value={FilhoQtdEscovacoesPorDiaEnum.TRES_OU_MAIS}
              className="form-check-input"
              id="filhoQtdEscovacoesPorDia_TRES_OU_MAIS"
            />
            <label
              htmlFor="filhoQtdEscovacoesPorDia_TRES_OU_MAIS"
              className="form-check-label"
            >
              Três ou Mais
            </label>
          </div>
          <ErrorMessage name="filhoQtdEscovacoesPorDia">
            {(msg) => <div className="text-danger">{msg}</div>}
          </ErrorMessage>
        </div>
      </div>

      <div ref={frequenciaTrocaEscovasRef}>
        <h3 className="question lead fs-2">
          Com que frequência você costuma trocar as escovas de dente?
        </h3>
        <div className="d-flex flex-column">
          <div
            className="form-check"
            onClick={() => {
              scrollTo(usaFioDentalRef);
            }}
          >
            <Field
              type="radio"
              name="frequenciaTrocaEscovas"
              value={FrequenciaTrocaEscovasEnum.ATE_3_MESES}
              className="form-check-input"
              id="frequenciaTrocaEscovas_ATE_3_MESES"
            />
            <label
              htmlFor="frequenciaTrocaEscovas_ATE_3_MESES"
              className="form-check-label"
            >
              Até 3 Meses
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(usaFioDentalRef);
            }}
          >
            <Field
              type="radio"
              name="frequenciaTrocaEscovas"
              value={FrequenciaTrocaEscovasEnum.DE_3_A_6_MESES}
              className="form-check-input"
              id="frequenciaTrocaEscovas_DE_3_A_6_MESES"
            />
            <label
              htmlFor="frequenciaTrocaEscovas_DE_3_A_6_MESES"
              className="form-check-label"
            >
              De 3 a 6 Meses
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(usaFioDentalRef);
            }}
          >
            <Field
              type="radio"
              name="frequenciaTrocaEscovas"
              value={FrequenciaTrocaEscovasEnum.DE_6_MESES_A_1_ANO}
              className="form-check-input"
              id="frequenciaTrocaEscovas_DE_6_MESES_A_1_ANO"
            />
            <label
              htmlFor="frequenciaTrocaEscovas_DE_6_MESES_A_1_ANO"
              className="form-check-label"
            >
              De 6 Meses a 1 Ano
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(usaFioDentalRef);
            }}
          >
            <Field
              type="radio"
              name="frequenciaTrocaEscovas"
              value={FrequenciaTrocaEscovasEnum.MAIS_1_ANO}
              className="form-check-input"
              id="frequenciaTrocaEscovas_MAIS_1_ANO"
            />
            <label
              htmlFor="frequenciaTrocaEscovas_MAIS_1_ANO"
              className="form-check-label"
            >
              Mais de 1 Ano
            </label>
          </div>
          <ErrorMessage name="frequenciaTrocaEscovas">
            {(msg) => <div className="text-danger">{msg}</div>}
          </ErrorMessage>
        </div>
      </div>

      <div ref={usaFioDentalRef}>
        <h3 className="question lead fs-2">Você usa fio dental?</h3>
        <div className="d-flex flex-column">
          <div
            className="form-check"
            onClick={() => {
              scrollTo(usaPastaComFluorRef);
            }}
          >
            <Field
              type="radio"
              name="usaFioDental"
              value={"true"}
              className="form-check-input"
              id="usaFioDental_SIM"
            />
            <label htmlFor="usaFioDental_SIM" className="form-check-label">
              Sim
            </label>
          </div>
          <div
            className="form-check"
            onClick={() => {
              scrollTo(usaPastaComFluorRef);
            }}
          >
            <Field
              type="radio"
              name="usaFioDental"
              value={"false"}
              className="form-check-input"
              id="usaFioDental_NAO"
            />
            <label htmlFor="usaFioDental_NAO" className="form-check-label">
              Não
            </label>
          </div>
          <ErrorMessage name="usaFioDental">
            {(msg) => <div className="text-danger">{msg}</div>}
          </ErrorMessage>
        </div>
      </div>

      <div ref={usaPastaComFluorRef}>
        <h3 className="question lead fs-2">
          Você usa pasta de dente que contém flúor?
        </h3>
        <div className="d-flex flex-column">
          <div className="form-check">
            <Field
              type="radio"
              name="usaPastaComFluor"
              value={"true"}
              className="form-check-input"
              id="usaPastaComFluor_SIM"
            />
            <label htmlFor="usaPastaComFluor_SIM" className="form-check-label">
              Sim
            </label>
          </div>
          <div className="form-check">
            <Field
              type="radio"
              name="usaPastaComFluor"
              value={"false"}
              className="form-check-input"
              id="usaPastaComFluor_NAO"
            />
            <label htmlFor="usaPastaComFluor_NAO" className="form-check-label">
              Não
            </label>
          </div>
          <ErrorMessage name="usaPastaComFluor">
            {(msg) => <div className="text-danger">{msg}</div>}
          </ErrorMessage>
        </div>
      </div>
    </>
  );
}
