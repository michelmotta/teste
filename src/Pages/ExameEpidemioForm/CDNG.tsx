import { Field } from "formik";
import React, { PropsWithChildren, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import ReactSwitch from "react-switch";
import { toast } from "react-toastify";

export default function CDNG(
  props: PropsWithChildren<{
    age: number;
    teeth: any[];
    setTeeth: (teeth: any[]) => void;
  }>
) {
  function appendTeeth(tooth: any) {
    props.setTeeth([...props.teeth, tooth]);
  }

  return (
    <ColumSteper>
      <ColumStep
        next={() => {}}
        teeth={18}
        age={props.age}
        appendTeeth={appendTeeth}
      />

      <ColumStep
        next={() => {}}
        teeth={17}
        age={props.age}
        appendTeeth={appendTeeth}
      />

      <ColumStep
        next={() => {}}
        teeth={16}
        age={props.age}
        appendTeeth={appendTeeth}
      />

      <ColumStep
        next={() => {}}
        teeth={15}
        age={props.age}
        appendTeeth={appendTeeth}
      />
      <ColumStep
        next={() => {}}
        teeth={14}
        age={props.age}
        appendTeeth={appendTeeth}
      />
      <ColumStep
        next={() => {}}
        teeth={13}
        age={props.age}
        appendTeeth={appendTeeth}
      />
      <ColumStep
        next={() => {}}
        teeth={12}
        age={props.age}
        appendTeeth={appendTeeth}
      />
      <ColumStep
        next={() => {}}
        teeth={11}
        age={props.age}
        appendTeeth={appendTeeth}
      />
      <ColumStep
        next={() => {}}
        teeth={21}
        age={props.age}
        appendTeeth={appendTeeth}
      />
      <ColumStep
        next={() => {}}
        teeth={22}
        age={props.age}
        appendTeeth={appendTeeth}
      />
      <ColumStep
        next={() => {}}
        teeth={23}
        age={props.age}
        appendTeeth={appendTeeth}
      />
      <ColumStep
        next={() => {}}
        teeth={24}
        age={props.age}
        appendTeeth={appendTeeth}
      />
      <ColumStep
        next={() => {}}
        teeth={25}
        age={props.age}
        appendTeeth={appendTeeth}
      />

      <ColumStep
        next={() => {}}
        teeth={26}
        age={props.age}
        appendTeeth={appendTeeth}
      />

      <ColumStep
        next={() => {}}
        teeth={27}
        age={props.age}
        appendTeeth={appendTeeth}
      />

      <ColumStep
        next={() => {}}
        teeth={28}
        age={props.age}
        appendTeeth={appendTeeth}
      />

      <ColumStep
        next={() => {}}
        teeth={38}
        age={props.age}
        appendTeeth={appendTeeth}
      />

      <ColumStep
        next={() => {}}
        teeth={37}
        age={props.age}
        appendTeeth={appendTeeth}
      />

      <ColumStep
        next={() => {}}
        teeth={36}
        age={props.age}
        appendTeeth={appendTeeth}
      />

      <ColumStep
        next={() => {}}
        teeth={35}
        age={props.age}
        appendTeeth={appendTeeth}
      />
      <ColumStep
        next={() => {}}
        teeth={34}
        age={props.age}
        appendTeeth={appendTeeth}
      />
      <ColumStep
        next={() => {}}
        teeth={33}
        age={props.age}
        appendTeeth={appendTeeth}
      />
      <ColumStep
        next={() => {}}
        teeth={32}
        age={props.age}
        appendTeeth={appendTeeth}
      />
      <ColumStep
        next={() => {}}
        teeth={31}
        age={props.age}
        appendTeeth={appendTeeth}
      />
      <ColumStep
        next={() => {}}
        teeth={41}
        age={props.age}
        appendTeeth={appendTeeth}
      />
      <ColumStep
        next={() => {}}
        teeth={42}
        age={props.age}
        appendTeeth={appendTeeth}
      />
      <ColumStep
        next={() => {}}
        teeth={43}
        age={props.age}
        appendTeeth={appendTeeth}
      />
      <ColumStep
        next={() => {}}
        teeth={44}
        age={props.age}
        appendTeeth={appendTeeth}
      />
      <ColumStep
        next={() => {}}
        teeth={45}
        age={props.age}
        appendTeeth={appendTeeth}
      />

      <ColumStep
        next={() => {}}
        teeth={46}
        age={props.age}
        appendTeeth={appendTeeth}
      />

      <ColumStep
        next={() => {}}
        teeth={47}
        age={props.age}
        appendTeeth={appendTeeth}
      />

      <ColumStep
        next={() => {}}
        teeth={48}
        age={props.age}
        appendTeeth={appendTeeth}
      />

      <LastToothCard />
    </ColumSteper>
  );
}

function ColumStep(
  props: PropsWithChildren<{
    teeth: number;
    age: number;
    appendTeeth: (teeth: any) => void;
    next: () => void;
  }>
) {
  const [leite, setLeite] = useState(props.age > 5 ? false : true);
  const [oclusal, setOclusal] = useState<string>();
  const [mesial, setMesial] = useState<string>();
  const [distal, setDistal] = useState<string>();
  const [palatina, setPalatina] = useState<string>();
  const [vestibular, setVestibular] = useState<string>();
  const [trat, setTrat] = useState<string>();
  const [pufa, setPufa] = useState<string>();

  function handleSubmit() {
    if (oclusal && mesial && distal && palatina && vestibular && trat && pufa) {
      const tooth = {
        leite,
        numero: props.teeth,
        oclusal: parseInt(oclusal),
        mesial: parseInt(mesial),
        distal: parseInt(distal),
        palatina: parseInt(palatina),
        vestibular: parseInt(vestibular),
        trat: parseInt(trat),
        pufa: parseInt(pufa),
      };
      props.appendTeeth(tooth);
      toast.success("Preencha todos os campos!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
      props.next();
    } else {
      toast.error("Preencha todos os campos!", {
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

  function carie() {
    props.appendTeeth({
      leite,
      numero: props.teeth,
      removido: "CARIE",
      oclusal: 4,
      mesial: 4,
      distal: 4,
      palatina: 4,
      vestibular: 4,
      trat: 0,
      pufa: 0,
    });
    props.next();
  }

  function outraRazao() {
    props.appendTeeth({
      leite,
      numero: props.teeth,
      removido: "OUTRA_RAZAO",
      oclusal: 5,
      mesial: 5,
      distal: 5,
      palatina: 5,
      vestibular: 5,
      trat: 0,
      pufa: 0,
    });
    props.next();
  }

  function excluido() {
    props.appendTeeth({
      leite,
      numero: props.teeth,
      removido: "EXCLUIDO",
      oclusal: 9,
      mesial: 9,
      distal: 9,
      palatina: 9,
      vestibular: 9,
      trat: 0,
      pufa: 0,
    });
    props.next();
  }

  return (
    <>
      <div className="matrix-column">
        <h2 className="lead fs-2">{props.teeth}</h2>
        <div className="matrix-switch">
          <h3 className="lead fs-1">Dente de Leite?</h3>
          <ReactSwitch
            checked={leite}
            onChange={(checked) => setLeite(checked)}
            onColor="#0d6efd"
            offColor="#808080"
          />
        </div>
        <div className="matrix-lost">
          <h3 className="lead fs-1">Dente Perdido?</h3>
          <div className="d-flex justify-content-between gap-3">
            <ButtonGroup aria-label="Basic example">
              <Button variant="primary" type="button" onClick={carie}>
                Cárie
              </Button>
              <Button variant="primary" type="button" onClick={outraRazao}>
                Outra Razão
              </Button>
              <Button variant="primary" type="button" onClick={excluido}>
                Excluido
              </Button>
            </ButtonGroup>
          </div>
        </div>
        <div className="w-100">
          <FaceField name="oclusal" question="Oclusal" setFiled={setOclusal} />
          <FaceField name="mesial" question="Mesial" setFiled={setMesial} />
          <FaceField name="distal" question="Distal" setFiled={setDistal} />
          <FaceField
            name="palatina"
            question="Palatina"
            setFiled={setPalatina}
          />
          <FaceField
            name="vestibular"
            question="Vestibular"
            setFiled={setVestibular}
          />
          <TreatField name="trat" question="TRAT" setFiled={setTrat} />
          <PufaField name="pufa" question="PUFA" setFiled={setPufa} />
        </div>
      </div>
      <hr />
      <div className="matrix-save">
        <Button
          className="w-100"
          variant="primary"
          type="button"
          onClick={handleSubmit}
        >
          Salvar
        </Button>
      </div>
    </>
  );
}

function LastToothCard() {
  return (
    <div className="matrix-column">
      <h2 className="lead fs-2">Todos os dentes foram preenchidos</h2>
      <h3 className="question w-75 lead fs-2">Observações</h3>
      <div className="text-area-answer ">
        <Field
          name="observacao"
          type="text"
          as="textarea"
          placeholder="Observações"
          className="form-control"
        />
      </div>
    </div>
  );
}

function ColumSteper(props: PropsWithChildren<{}>) {
  const childrenArray = React.Children.toArray(
    props.children
  ) as React.ReactElement[];
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step] as React.ReactElement;

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  function nextStep() {
    if (!isLastStep()) {
      setStep((s) => s + 1);
      window.scrollTo(0, 0);
    }
  }

  return (
    <div className="matrix-columns">
      <div className="w-100">
        {React.cloneElement(currentChild, { next: nextStep })}
      </div>
    </div>
  );
}

function FaceField(
  props: PropsWithChildren<{
    name: string;
    question: string;
    setFiled: (field: any) => void;
  }>
) {
  const faceOptions = [
    ["Face Hígida", 0],
    ["Face Cariada", 1],
    ["Face Restaurada mas cariada", 2],
    ["Face Restaurada sem cáries", 3],
    ["Face com selante", 6],
    ["Apoio de Ponte", 7],
    ["Face não erupcionada", 8],
  ];

  return (
    <>
      <h3 className="lead fs-1">{props.question}</h3>
      <div className="d-flex flex-column">
        {faceOptions.map((option, index) => (
          <div
            className="form-check"
            key={index}
            onChange={(e: any) => {
              props.setFiled(e.target.value);
            }}
          >
            <input
              type="radio"
              name={props.name}
              value={option[1].toString()}
              className="form-check-input"
              id={props.name + option[1].toString()}
            />
            <label
              htmlFor={props.name + option[1].toString()}
              className="form-check-label"
            >
              {option[0]}
            </label>
          </div>
        ))}
      </div>
    </>
  );
}

function TreatField(
  props: PropsWithChildren<{
    name: string;
    question: string;
    setFiled: (field: any) => void;
  }>
) {
  const faceOptions = [
    ["Nenhum Tratamento", 0],
    ["Restauração  uma superfície", 1],
    ["Restauração  de 2 ou mais superfície", 2],
    ["Coroa por qualquer razão", 3],
    ["Faceta Estética", 4],
    ["Tratamento  Pulpar ou Restauração", 5],
    ["Extração", 6],
    ["Remineração  de Mancha Branca", 7],
    ["Selante", 8],
    ["Sem  Informação ", 9],
  ];

  return (
    <>
      <h3 className="lead fs-1">{props.question}</h3>
      <div className="d-flex flex-column">
        {faceOptions.map((option, index) => (
          <div
            className="form-check"
            key={index}
            onChange={(e: any) => {
              props.setFiled(e.target.value);
            }}
          >
            <input
              type="radio"
              name={props.name}
              value={option[1].toString()}
              className="form-check-input"
              id={props.name + option[1].toString()}
            />
            <label
              htmlFor={props.name + option[1].toString()}
              className="form-check-label"
            >
              {option[0]}
            </label>
          </div>
        ))}
      </div>
    </>
  );
}

function PufaField(
  props: PropsWithChildren<{
    name: string;
    question: string;
    setFiled: (field: any) => void;
  }>
) {
  const faceOptions = [
    ["Sem", 0],
    ["Exposição pulpar", 1],
    ["Ulceração", 2],
    ["Fístula", 3],
    ["Abscesso", 4],
  ];

  return (
    <>
      <h3 className="lead fs-1">{props.question}</h3>
      <div className="d-flex flex-column">
        {faceOptions.map((option, index) => (
          <div
            className="form-check"
            key={index}
            onChange={(e: any) => {
              props.setFiled(e.target.value);
            }}
          >
            <input
              type="radio"
              name={props.name}
              value={option[1].toString()}
              className="form-check-input"
              id={props.name + option[1].toString()}
            />
            <label
              htmlFor={props.name + option[1].toString()}
              className="form-check-label"
            >
              {option[0]}
            </label>
          </div>
        ))}
      </div>
    </>
  );
}
