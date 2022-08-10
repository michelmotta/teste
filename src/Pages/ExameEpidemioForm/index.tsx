import React, { useEffect, useState } from "react";
import { Form, Formik, FormikConfig, FormikValues } from "formik";
import { examForm } from "../../Types/initialValues";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import Identification from "./Identification";
import { number, object, string } from "yup";
import { createExam } from "../../services/api/examServices";
import FDCOD from "./FDCOD";
import CDNG from "./CDNG";
import "./index.scss";
import PostExam from "./PostExam";
import MCA from "./MCA";
import CondicaoPeriodontal from "./CondicaoPeriodontal";
import Trauma from "./Trauma";
import { toast } from "react-toastify";

export default function ExameEpidemioForm() {
  const [token, setToken] = useState<string>();
  const [age, setAge] = useState<number>();
  const [date, setDate] = useState<string>();
  const [teeth, setTeeth] = useState<any[]>([]);

  const navigate = useNavigate();

  async function handleSubmitForm(values: FormikValues) {
    try {
      const res = await createExam(
        {
          idPessoa: parseInt(values.idPessoa),
          idLocal: parseInt(values.idLocal),
          data: date!,
          fluoroseDentaria: values.fluoroseDentaria,
          overjetMaxilarAnterior: values.overjetMaxilarAnterior,
          overjetMandibularAnterior: values.overjetMandibularAnterior,
          mordidaAbertaVerticalAnterior: values.mordidaAbertaVerticalAnterior,
          relacaoMolarAnteroPosterior: values.relacaoMolarAnteroPosterior,
          dentes: teeth!,
          CPQ:
            age! >= 12
              ? {
                  dorNosDentes: values.dorNosDentes,
                  feridas: values.feridas,
                  mauHalito: values.mauHalito,
                  restosDeAlimentoPreso: values.restosDeAlimentoPreso,
                  demorouMaisParaTerminarRefeicao:
                    values.demorouMaisParaTerminarRefeicao,
                  dificuldadeMorder: values.dificuldadeMorder,
                  dificuldadeDizer: values.dificuldadeDizer,
                  dificuldadeIngerirQuentesFrios:
                    values.dificuldadeIngerirQuentesFrios,
                  irritado: values.irritado,
                  timido: values.timido,
                  chateado: values.chateado,
                  preocupado: values.preocupado,
                  evitouSorrir: values.evitouSorrir,
                  discutiu: values.discutiu,
                  aborreceuChamaramPorApelidos:
                    values.aborreceuChamaramPorApelidos,
                  perguntaramSobreDente: values.perguntaramSobreDente,
                }
              : null,
          SOHO:
            age! < 12
              ? {
                  dificilComer: values.dificilComer,
                  dificilBeber: values.dificilBeber,
                  dificilFalar: values.dificilFalar,
                  dificilBrincar: values.dificilBrincar,
                  dificilDormir: values.dificilDormir,
                  deixouDeSorrirPorDentesFeios:
                    values.deixouDeSorrirPorDentesFeios,
                  deixouDeSorrirPorDentesDoendo:
                    values.deixouDeSorrirPorDentesDoendo,
                }
              : null,
          MCA: {
            saladaCrua: values.saladaCrua,
            legumesVerdurasCozidos: values.legumesVerdurasCozidos,
            frutasFrescasSaladaDeFrutas: values.frutasFrescasSaladaDeFrutas,
            feijao: values.feijao,
            leiteOuIogurte: values.leiteOuIogurte,
            batataFritaBatataDePacoteSalgadosFritos:
              values.batataFritaBatataDePacoteSalgadosFritos,
            hamburgerEmbutidos: values.hamburgerEmbutidos,
            bolachasBiscoitosSalgadosSalgadinhoDePacote:
              values.bolachasBiscoitosSalgadosSalgadinhoDePacote,
            bolachasBiscoitosDocesRecheadosDocesBalasChocolates:
              values.bolachasBiscoitosDocesRecheadosDocesBalasChocolates,
            refrigerante: values.refrigerante,
          },
          traumatismoDentario:
            age! >= 12
              ? {
                  d_12: values.d_12,
                  d_11: values.d_11,
                  d_21: values.d_21,
                  d_22: values.d_22,
                  d_32: values.d_32,
                  d_31: values.d_31,
                  d_41: values.d_41,
                  d_42: values.d_42,
                }
              : null,
          condicaoPeriodontal:
            age! >= 12
              ? {
                  d17_16: values.d17_16 === "true",
                  d21_11: values.d21_11 === "true",
                  d27_26: values.d27_26 === "true",
                  d31: values.d31 === "true",
                  d37_36: values.d37_36 === "true",
                  d47_46: values.d47_46 === "true",
                }
              : null,
          observacao: values.observacao,
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
        navigate("/app/exame-epidemio");
      }
    } catch (e: any) {
      toast.error(`Erro ao cadastrar! ${e.message}`, {
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
  }, []);

  return (
    <div className="container my-3">
      <h1 className="text-center lead fs-3">Exame Epidemiológico</h1>
      <FormikSteper
        initialValues={examForm}
        onSubmit={async (values, actions) => {
          handleSubmitForm(values);
          actions.setSubmitting(false);
        }}
      >
        <FormikStep
          validationSchema={object({
            idPessoa: number()
              .integer()
              .typeError("O Id deve ser um número")
              .min(0, "ID do Paciente inválido")
              .required("ID do Paciente é obrigatório"),
            idLocal: number()
              .integer()
              .typeError("O Id deve ser um número")
              .min(0, "ID do Local inválido")
              .required("ID do Local é obrigatório"),
            age: number()
              .integer()
              .typeError("Idade deve ser um número")
              .min(0, "Idade inválida")
              .required("Idade é obrigatório"),
          })}
        >
          <Identification setAge={setAge} />
        </FormikStep>
        <FormikStep
          validationSchema={object({
            fluoroseDentaria: string()
              .required("Esse campo é obrigatório")
              .trim(),
            overjetMaxilarAnterior: number()
              .integer()
              .typeError("O valor deve ser um número")
              .min(0, "Valor inválido")
              .required("Valor é obrigatório"),
            overjetMandibularAnterior: number()
              .integer()
              .typeError("O valor deve ser um número")
              .min(0, "Valor inválido")
              .required("Valor é obrigatório"),
            mordidaAbertaVerticalAnterior: number()
              .integer()
              .typeError("O valor deve ser um número")
              .required("Valor é obrigatório"),
            relacaoMolarAnteroPosterior: string()
              .required("Esse campo é obrigatório")
              .trim(),
          })}
        >
          <FDCOD />
        </FormikStep>
        <FormikStep>
          <CDNG age={age!} teeth={teeth} setTeeth={setTeeth} />
        </FormikStep>
        {age! >= 12 && (
          <FormikStep>
            <Trauma />
          </FormikStep>
        )}
        {age! >= 12 && (
          <FormikStep>
            <CondicaoPeriodontal />
          </FormikStep>
        )}
        <FormikStep>
          <PostExam age={age!} />
        </FormikStep>
        <FormikStep
          validationSchema={object({
            saladaCrua: string().required("Esse campo é obrigatório").trim(),
            legumesVerdurasCozidos: string()
              .required("Esse campo é obrigatório")
              .trim(),
            frutasFrescasSaladaDeFrutas: string()
              .required("Esse campo é obrigatório")
              .trim(),
            feijao: string().required("Esse campo é obrigatório").trim(),
            leiteOuIogurte: string()
              .required("Esse campo é obrigatório")
              .trim(),
            batataFritaBatataDePacoteSalgadosFritos: string()
              .required("Esse campo é obrigatório")
              .trim(),
            hamburgerEmbutidos: string()
              .required("Esse campo é obrigatório")
              .trim(),
            bolachasBiscoitosSalgadosSalgadinhoDePacote: string()
              .required("Esse campo é obrigatório")
              .trim(),
            bolachasBiscoitosDocesRecheadosDocesBalasChocolates: string()
              .required("Esse campo é obrigatório")
              .trim(),
            refrigerante: string().required("Esse campo é obrigatório").trim(),
          })}
        >
          <MCA />
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
          window.scrollTo(0, 0);
        }
      }}
    >
      {({ errors, touched }) => (
        <Form
          className="d-flex flex-column gap-3 mt-2"
          autoComplete="off"
          id="exame"
        >
          {step > 0 ? (
            <div
              className="col-auto"
              onClick={() => {
                setStep((s) => s - 1);
                window.scrollTo(0, 0);
              }}
            >
              <FiArrowLeft size="1.9rem" />
            </div>
          ) : (
            <div className="col-auto">
              <Link to="/app/exame-epidemio">
                <FiArrowLeft size="1.9rem" />
              </Link>
            </div>
          )}
          <hr />

          {currentChild}

          <button className="btn btn-primary" type="submit" form="exame">
            {isLastStep() ? "Enviar" : "Próximo"}
          </button>
        </Form>
      )}
    </Formik>
  );
}
