import { Exame } from "../../Types";
import api from "./api";

export type ExamForm = {
  idPessoa: number;
  idLocal: number;
  data: string;
  fluoroseDentaria: string;
  overjetMaxilarAnterior: number;
  overjetMandibularAnterior: number;
  mordidaAbertaVerticalAnterior: number;
  relacaoMolarAnteroPosterior: string;
  dentes: any[];
  traumatismoDentario: any | null;
  CPQ: any | null;
  SOHO: any | null;
  MCA: any;
  condicaoPeriodontal: any | null;
  observacao: string;
};

export async function createExam(exam: ExamForm, token: string) {
  return await api.post<Exame>("/exams", exam, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}

export async function searchExams(idPessoa: number, token: string) {
  return await api.get(`/exams?personId=${idPessoa}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}

export async function getExams(token: string) {
  return await api.get("/exams", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}

export async function archiveExam(id: number, token: string) {
  return await api.post(
    `/exams/${id}/archive`,
    {},
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
}
