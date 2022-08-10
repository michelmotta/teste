import { AvaliacaoSocioEconomica } from "../../Types";
import api from "./api";

type SocioEconForm = {
  idPessoa: number;
  idLocal: number;
  data: string;
  qtdPessoasResidencia: number;
  qtdComodosDormitorio: number;
  qtdBens: number;
  qtdTotalRendaUltimoMes: number;
  escolaridadeMae: string;
  escolaridadePai: string;
  recebeBeneficioSocial: boolean | null;
  filhoDorDente6Meses: boolean | null;
  filhoNivelDor: number;
  filhoVisitouDentista: boolean | null;
  filhoUltimaConsulta: string;
  filhoLocalConsulta: string;
  motivoUltimaConsulta: string;
  avaliacaoUltimaConsulta: string;
  filhoAvaliacaoBucal: string;
  filhoQtdEscovacoesPorDia: string;
  frequenciaTrocaEscovas: string;
  usaFioDental: boolean;
  usaPastaComFluor: boolean;
};

export async function getSocioEcons(token: String) {
  return await api.get<AvaliacaoSocioEconomica[]>("/socioEconomicEvaluations", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}

export async function searchSocios(idPessoa: number, token: String) {
  return await api.get(`/socioEconomicEvaluations?personId=${idPessoa}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}

export async function getSocioEcon(id: String, token: String) {
  return await api.get<AvaliacaoSocioEconomica>(
    `/socioEconomicEvaluations/${id}`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
}

export async function createSocioEcon(socioEcon: SocioEconForm, token: String) {
  return await api.post<AvaliacaoSocioEconomica>(
    "/socioEconomicEvaluations",
    socioEcon,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
}

export async function updateSocioEcon(
  id: String,
  socioEcon: SocioEconForm,
  token: String
) {
  return await api.put<AvaliacaoSocioEconomica>(
    `/socioEconomicEvaluations/${id}`,
    socioEcon,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
}

export async function deleteSocioEcon(id: String, token: String) {
  return await api.delete(`/socioEconomicEvaluations/${id}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}
