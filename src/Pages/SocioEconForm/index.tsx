import React, { useEffect, useState } from "react";
import { Form, Formik, FormikConfig, FormikValues } from "formik";
import { socioEconForm } from "../../Types/initialValues";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import FamilyCharacterization from "./FamilyCharacterization";
import Identification from "./Identification";
import AISB from "./AISB";
import EAMU from "./EAMU";
import { number, object, string } from "yup";
import { createSocioEcon } from "../../services/api/socioEconServices";
import { toast } from "react-toastify";

export default function SocioEconForm() {
  const [token, setToken] = useState<string>();
  const [date, setDate] = useState<string>();

  const navigate = useNavigate();

  function stringToBool(str: string) {
    if (str === "true") {
      return true;
    } else if (str === "false") {
      return false;
    } else {
      return null;
    }
  }

  async function handleSubmitForm(values: FormikValues) {
    try {
      const res = await createSocioEcon(
        {
          idPessoa: parseInt(values.idPessoa),
          idLocal: parseInt(values.idLocal),
          data: date!,
          qtdPessoasResidencia: parseInt(values.qtdPessoasResidencia),
          qtdComodosDormitorio: parseInt(values.qtdComodosDormitorio),
          qtdBens: parseInt(values.qtdBens),
          qtdTotalRendaUltimoMes: parseInt(values.qtdTotalRendaUltimoMes),
          escolaridadeMae: values.escolaridadeMae,
          escolaridadePai: values.escolaridadePai,
          recebeBeneficioSocial: stringToBool(values.recebeBeneficioSocial),
          filhoDorDente6Meses: stringToBool(values.filhoDorDente6Meses),
          filhoNivelDor: parseInt(values.filhoNivelDor),
          filhoVisitouDentista: stringToBool(values.filhoVisitouDentista),
          filhoUltimaConsulta: values.filhoUltimaConsulta,
          filhoLocalConsulta: values.filhoLocalConsulta,
          motivoUltimaConsulta: values.motivoUltimaConsulta,
          avaliacaoUltimaConsulta: values.avaliacaoUltimaConsulta,
          filhoAvaliacaoBucal: values.filhoAvaliacaoBucal,
          filhoQtdEscovacoesPorDia: values.filhoQtdEscovacoesPorDia,
          frequenciaTrocaEscovas: values.frequenciaTrocaEscovas,
          usaFioDental: stringToBool(values.usaFioDental)!,
          usaPastaComFluor: stringToBool(values.usaPastaComFluor)!,
        },
        token!
      );
      if (res.status === 200) {
        toast.success("Cadastro realizado com sucesso!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        });
        navigate("/app/socio-econ");
      }
    } catch (e: any) {
      toast.success(`Erro ao cadastrar! ${e.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    }
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")!);
    setToken(user.token);
    setDate(new Date().toISOString().split("T")[0]);
  }, [navigate]);

  return (
    <div className="container my-3">
      <h1 className="text-center lead fs-3">Avalia????o socioecon??mica</h1>
      <FormikSteper
        initialValues={socioEconForm}
        onSubmit={async (values, actions) => {
          await handleSubmitForm(values);
          actions.setSubmitting(false);
        }}
      >
        <FormikStep
          validationSchema={object({
            idPessoa: number()
              .integer("Campo deve ser inteiro")
              .typeError("O Id deve ser um n??mero")
              .min(0, "ID do Paciente inv??lido")
              .required("ID do Paciente ?? obrigat??rio"),
            idLocal: number()
              .integer("Campo deve ser inteiro")
              .typeError("O Id deve ser um n??mero")
              .min(0, "ID do Local inv??lido")
              .required("ID do Local ?? obrigat??rio"),
          })}
        >
          <Identification />
        </FormikStep>
        <FormikStep
          validationSchema={object({
            qtdPessoasResidencia: number()
              .integer("Campo deve ser inteiro")
              .min(1, "Quantidade de pessoas inv??lida")
              .max(99, "Quantidade de pessoas inv??lida")
              .required("Esse campo ?? obrigat??rio"),
            qtdComodosDormitorio: number()
              .integer("Campo deve ser inteiro")
              .required("Esse campo ?? obrigat??rio")
              .min(0, "N??mero de c??modos inv??lido")
              .max(99, "N??mero de c??modos inv??lido"),
            qtdBens: number()
              .integer("Campo deve ser inteiro")
              .required("Esse campo ?? obrigat??rio")
              .min(0, "N??mero de bens inv??lido")
              .max(99, "N??mero de bens inv??lido"),
            qtdTotalRendaUltimoMes: number()
              .min(0, "Renda inv??lida")
              .required("Esse campo ?? obrigat??rio"),
          })}
        >
          <FamilyCharacterization />
        </FormikStep>
        <FormikStep
          validationSchema={object({
            escolaridadeMae: string()
              .required("Esse campo ?? obrigat??rio")
              .trim(),
            escolaridadePai: string()
              .required("Esse campo ?? obrigat??rio")
              .trim(),
            recebeBeneficioSocial: string()
              .required("Esse campo ?? obrigat??rio")
              .trim(),
            filhoDorDente6Meses: string()
              .required("Esse campo ?? obrigat??rio")
              .trim(),
            filhoNivelDor: number()
              .integer()
              .required("Esse campo ?? obrigat??rio")
              .min(0, "N??mero inv??lido")
              .max(10, "N??mero inv??lido"),
            filhoVisitouDentista: string()
              .required("Esse campo ?? obrigat??rio")
              .trim(),
            filhoUltimaConsulta: string()
              .required("Esse campo ?? obrigat??rio")
              .trim(),
            filhoLocalConsulta: string()
              .required("Esse campo ?? obrigat??rio")
              .trim(),
            motivoUltimaConsulta: string()
              .required("Esse campo ?? obrigat??rio")
              .trim(),
            avaliacaoUltimaConsulta: string()
              .required("Esse campo ?? obrigat??rio")
              .trim(),
          })}
        >
          <EAMU />
        </FormikStep>
        <FormikStep
          validationSchema={object({
            filhoAvaliacaoBucal: string()
              .required("Esse campo ?? obrigat??rio")
              .trim(),
            filhoQtdEscovacoesPorDia: string()
              .required("Esse campo ?? obrigat??rio")
              .trim(),
            frequenciaTrocaEscovas: string()
              .required("Esse campo ?? obrigat??rio")
              .trim(),
            usaFioDental: string().required("Esse campo ?? obrigat??rio").trim(),
            usaPastaComFluor: string()
              .required("Esse campo ?? obrigat??rio")
              .trim(),
          })}
        >
          <AISB />
        </FormikStep>
      </FormikSteper>
    </div>
  );
}

interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, "children" | "validationSchema"> {}

function FormikStep({ children, ...props }: FormikStepProps) {
  return <div className="d-flex flex-column gap-3">{children}</div>;
}

function FormikSteper({ children, ...props }: FormikConfig<FormikValues>) {
  const childrenArray = React.Children.toArray(
    children
  ) as React.ReactElement<FormikStepProps>[];
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[
    step
  ] as React.ReactElement<FormikStepProps>;

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
        } else {
          setStep((s) => s + 1);
        }
      }}
    >
      {({ errors, touched }) => (
        <Form className="d-flex flex-column gap-3 mt-2" autoComplete="off">
          {step > 0 ? (
            <div className="col-auto" onClick={() => setStep((s) => s - 1)}>
              <FiArrowLeft size="1.9rem" />
            </div>
          ) : (
            <div className="col-auto">
              <Link to="/app/socio-econ">
                <FiArrowLeft size="1.9rem" />
              </Link>
            </div>
          )}
          <hr />

          {currentChild}

          <button className="btn btn-primary" type="submit">
            {isLastStep() ? "Enviar" : "Pr??ximo"}
          </button>
        </Form>
      )}
    </Formik>
  );
}
