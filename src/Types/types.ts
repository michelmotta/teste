export enum PapelEnum {
  ADMIN = "ADMIN",
  COORDENADOR = "COORDENADOR",
  DENTISTA = "DENTISTA",
  ASSISTENTE = "ASSISTENTE",
  ARROLADOR = "ARROLADOR",
}

export type PapelType = keyof typeof PapelEnum;

export enum EscolaridadeEnum {
  ANALFABETO = "ANALFABETO",
  ALFABETIZADO_SEM_EDUCACAO_FORMAL = "ALFABETIZADO_SEM_EDUCACAO_FORMAL",
  ALFABETIZADO_COM_EDUCACAO_FORMAL_PARA_ADULTOS = "ALFABETIZADO_COM_EDUCACAO_FORMAL_PARA_ADULTOS",
  ENSINO_FUNDAMENTAL_ATE_4_SERIE = "ENSINO_FUNDAMENTAL_ATE_4_SERIE",
  ENSINO_FUNDAMENTAL_ATE_8_SERIE = "ENSINO_FUNDAMENTAL_ATE_8_SERIE",
  ENSINO_MEDIO_COMPLETO = "ENSINO_MEDIO_COMPLETO",
  ENSINO_SUPERIOR_COMPLETO = "ENSINO_SUPERIOR_COMPLETO",
  NAO_SE_APLICA = "NAO_SE_APLICA",
}

export type EscolaridadeType = keyof typeof EscolaridadeEnum;

export enum AvaliacaoBucalEnum {
  MUITO_SATISFEITO = "MUITO_SATISFEITO",
  SATISFEITO = "SATISFEITO",
  REGULAR = "REGULAR",
  INSATISFEITO = "INSATISFEITO",
  MUITO_INSATISFEITO = "MUITO_INSATISFEITO",
  NAO_SE_APLICA = "NAO_SE_APLICA",
}

export type AvaliacaoBucalType = keyof typeof AvaliacaoBucalEnum;

export enum UltimaConsultaEnum {
  NUNCA_FOI = "NUNCA_FOI",
  MENOS_1_ANO = "MENOS_1_ANO",
  DE_1_A_2_ANOS = "DE_1_A_2_ANOS",
  DE_3_OU_MAIS = "DE_3_OU_MAIS",
  NAO_SE_APLICA = "NAO_SE_APLICA",
}

export type UltimaConsultaType = keyof typeof UltimaConsultaEnum;

export enum LocalConsultaEnum {
  NUNCA_FOI = "NUNCA_FOI",
  PUBLICO = "PUBLICO",
  PARTICULAR = "PARTICULAR",
  PLANO_CONVENIO = "PLANO_CONVENIO",
  NAO_SE_APLICA = "NAO_SE_APLICA",
}

export type LocalConsultaType = keyof typeof LocalConsultaEnum;

export enum MotivoUltimaConsultaEnum {
  NUNCA_FOI = "NUNCA_FOI",
  REVISAO_PREVENCAO_CHECKUP = "REVISAO_PREVENCAO_CHECKUP",
  DOR = "DOR",
  EXTRACAO = "EXTRACAO",
  TRATAMENTO = "TRATAMENTO",
  OUTROS = "OUTROS",
  NAO_SE_APLICA = "NAO_SE_APLICA",
}

export type MotivoUltimaConsultaType = keyof typeof MotivoUltimaConsultaEnum;

export enum AvaliacaoUltimaConsultaEnum {
  NUNCA_FOI = "NUNCA_FOI",
  MUITO_BOM = "MUITO_BOM",
  BOM = "BOM",
  REGULAR = "REGULAR",
  RUIM = "RUIM",
  MUTIO_RUIM = "MUTIO_RUIM",
  NAO_SE_APLICA = "NAO_SE_APLICA",
}

export type AvaliacaoUltimaConsultaType =
  keyof typeof AvaliacaoUltimaConsultaEnum;

export enum FilhoQtdEscovacoesPorDiaEnum {
  NENHUMA = "NENHUMA",
  UMA = "UMA",
  DUAS = "DUAS",
  TRES_OU_MAIS = "TRES_OU_MAIS",
}

export type FilhoQtdEscovacoesPorDiaType =
  keyof typeof FilhoQtdEscovacoesPorDiaEnum;

export enum FrequenciaTrocaEscovasEnum {
  ATE_3_MESES = "ATE_3_MESES",
  DE_3_A_6_MESES = "DE_3_A_6_MESES",
  DE_6_MESES_A_1_ANO = "DE_6_MESES_A_1_ANO",
  MAIS_1_ANO = "MAIS_1_ANO",
}

export type FrequenciaTrocaEscovasType =
  keyof typeof FrequenciaTrocaEscovasEnum;

export enum FluoroseDentariaEnum {
  NORMAL = "NORMAL",
  QUESTIONAVEL = "QUESTIONAVEL",
  MUITO_LEVE = "MUITO_LEVE",
  LEVE = "LEVE",
  MODERADO = "MODERADO",
  GRAVE = "GRAVE",
}

export type FluoroseDentariaType = keyof typeof FluoroseDentariaEnum;

export enum RelacaoMolarAnteroPosteriorEnum {
  NORMAL = "NORMAL",
  MEIA_CUSPIDE = "MEIA_CUSPIDE",
  CUSPIDE_INTEIRA = "CUSPIDE_INTEIRA",
}

export type RelacaoMolarAnteroPosteriorType =
  keyof typeof RelacaoMolarAnteroPosteriorEnum;

export enum RespostasSohoEnum {
  NAO = "NAO",
  UM_POUCO = "UM_POUCO",
  MUITO = "MUITO",
}

export type RespostasSohoType = keyof typeof RespostasSohoEnum;

export enum RespostasCPQEnum {
  NUNCA = "NUNCA",
  UMA_OU_DUAS_VEZES = "UMA_OU_DUAS_VEZES",
  ALGUMAS_VEZES = "ALGUMAS_VEZES",
  FREQUENTEMENTE = "FREQUENTEMENTE",
  TODOS_OS_DIAS_OU_QUASE = "TODOS_OS_DIAS_OU_QUASE",
}

export type RespostasCPQType = keyof typeof RespostasCPQEnum;
