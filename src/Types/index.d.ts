
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Soho
 * 
 */
export type Soho = {
  id: number
  idExame: number
  dificilComer: RespostasSoho
  dificilBeber: RespostasSoho
  dificilFalar: RespostasSoho
  dificilBrincar: RespostasSoho
  dificilDormir: RespostasSoho
  deixouDeSorrirPorDentesFeios: RespostasSoho
  deixouDeSorrirPorDentesDoendo: RespostasSoho
}

/**
 * Model CPQ
 * 
 */
export type CPQ = {
  id: number
  idExame: number
  dorNosDentes: RespostasCPQ
  feridas: RespostasCPQ
  mauHalito: RespostasCPQ
  restosDeAlimentoPreso: RespostasCPQ
  demorouMaisParaTerminarRefeicao: RespostasCPQ
  dificuldadeMorder: RespostasCPQ
  dificuldadeDizer: RespostasCPQ
  dificuldadeIngerirQuentesFrios: RespostasCPQ
  irritado: RespostasCPQ
  timido: RespostasCPQ
  chateado: RespostasCPQ
  preocupado: RespostasCPQ
  evitouSorrir: RespostasCPQ
  discutiu: RespostasCPQ
  aborreceuChamaramPorApelidos: RespostasCPQ
  perguntaramSobreDente: RespostasCPQ
}

/**
 * Model MarcadorConsumoAlimentar
 * 
 */
export type MarcadorConsumoAlimentar = {
  id: number
  idData: number
  idPessoa: number
  idUsuario: number
  idLocal: number
  saladaCrua: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  legumesVerdurasCozidos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  frutasFrescasSaladaDeFrutas: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  feijao: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  leiteOuIogurte: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  batataFritaBatataDePacoteSalgadosFritos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  hamburgerEmbutidos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  bolachasBiscoitosSalgadosSalgadinhoDePacote: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  bolachasBiscoitosDocesRecheadosDocesBalasChocolates: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  refrigerante: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
}

/**
 * Model Usuario
 * 
 */
export type Usuario = {
  id: number
  nome: string | null
  email: string
  senha: string
  ativo: boolean
  papel: Papel
  idPertenceEquipe: number | null
}

/**
 * Model Equipe
 * 
 */
export type Equipe = {
  id: number
  idCoordenador: number
}

/**
 * Model Data
 * 
 */
export type Data = {
  id: number
  dia: number
  mes: number
  ano: number
}

/**
 * Model Pessoa
 * 
 */
export type Pessoa = {
  id: number
  nascimento: Date
  nome: string
  genero: Genero
  etniaPrincipal: Etnia
  etniaSecundaria: Etnia | null
}

/**
 * Model Local
 * 
 */
export type Local = {
  id: number
  municipio: string
  escola: string
}

/**
 * Model CondicaoPeriodontal
 * 
 */
export type CondicaoPeriodontal = {
  id: number
  d17_16: boolean
  d21_11: boolean
  d27_26: boolean
  d31: boolean
  d37_36: boolean
  d47_46: boolean
}

/**
 * Model Exame
 * 
 */
export type Exame = {
  id: number
  idData: number
  idPessoa: number
  idCondicaoPeriodontal: number | null
  idLocal: number
  idUsuario: number
  idTraumatismoDentario: number | null
  idMarcadorConsumoAlimentar: number
  fluoroseDentaria: FluoroseDentaria
  overjetMaxilarAnterior: number
  overjetMandibularAnterior: number
  mordidaAbertaVerticalAnterior: number
  relacaoMolarAnteroPosterior: RelacaoMolarAnteroPosterior
  observacao: string
  arquivado: boolean
}

/**
 * Model Dente
 * 
 */
export type Dente = {
  id: number
  exameId: number
  leite: boolean
  removido: MotivoRemovido | null
  numero: number
  oclusal: number | null
  mesial: number | null
  distal: number | null
  palatina: number | null
  vestibular: number | null
  trat: number | null
  pufa: number | null
}

/**
 * Model TraumatismoDentario
 * 
 */
export type TraumatismoDentario = {
  id: number
  d_12: RespostasTraumatismoDentario
  d_11: RespostasTraumatismoDentario
  d_21: RespostasTraumatismoDentario
  d_22: RespostasTraumatismoDentario
  d_32: RespostasTraumatismoDentario
  d_31: RespostasTraumatismoDentario
  d_41: RespostasTraumatismoDentario
  d_42: RespostasTraumatismoDentario
}

/**
 * Model AvaliacaoSocioEconomica
 * 
 */
export type AvaliacaoSocioEconomica = {
  id: number
  idData: number
  idPessoa: number
  idLocal: number
  idUsuario: number
  qtdPessoasResidencia: number
  qtdComodosDormitorio: number
  qtdBens: number
  qtdTotalRendaUltimoMes: number
  escolaridadeMae: Escolaridade
  escolaridadePai: Escolaridade
  recebeBeneficioSocial: boolean | null
  filhoDorDente6Meses: boolean | null
  filhoNivelDor: number
  filhoVisitouDentista: boolean | null
  filhoUltimaConsulta: UltimaConsulta
  filhoLocalConsulta: LocalConsulta
  motivoUltimaConsulta: MotivoUltimaConsulta
  avaliacaoUltimaConsulta: AvaliacaoUltimaConsulta
  filhoAvaliacaoBucal: AvaliacaoBucal
  filhoQtdEscovacoesPorDia: FilhoQtdEscovacoesPorDia
  frequenciaTrocaEscovas: FrequenciaTrocaEscovas
  usaFioDental: boolean
  usaPastaComFluor: boolean
  arquivado: boolean
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const RespostasSoho: {
  NAO: 'NAO',
  UM_POUCO: 'UM_POUCO',
  MUITO: 'MUITO'
};

export type RespostasSoho = (typeof RespostasSoho)[keyof typeof RespostasSoho]


export const RespostasCPQ: {
  NUNCA: 'NUNCA',
  UMA_OU_DUAS_VEZES: 'UMA_OU_DUAS_VEZES',
  ALGUMAS_VEZES: 'ALGUMAS_VEZES',
  FREQUENTEMENTE: 'FREQUENTEMENTE',
  TODOS_OS_DIAS_OU_QUASE: 'TODOS_OS_DIAS_OU_QUASE'
};

export type RespostasCPQ = (typeof RespostasCPQ)[keyof typeof RespostasCPQ]


export const FrequenciaIngestaoAlimentoBebidaUltimosSeteDias: {
  NAO_COMI: 'NAO_COMI',
  UM_DIA: 'UM_DIA',
  DOIS_DIAS: 'DOIS_DIAS',
  TRES_DIAS: 'TRES_DIAS',
  QUATRO_DIAS: 'QUATRO_DIAS',
  CINCO_DIAS: 'CINCO_DIAS',
  SEIS_DIAS: 'SEIS_DIAS',
  SETE_DIAS: 'SETE_DIAS'
};

export type FrequenciaIngestaoAlimentoBebidaUltimosSeteDias = (typeof FrequenciaIngestaoAlimentoBebidaUltimosSeteDias)[keyof typeof FrequenciaIngestaoAlimentoBebidaUltimosSeteDias]


export const Papel: {
  ADMIN: 'ADMIN',
  COORDENADOR: 'COORDENADOR',
  DENTISTA: 'DENTISTA',
  ASSISTENTE: 'ASSISTENTE',
  ARROLADOR: 'ARROLADOR'
};

export type Papel = (typeof Papel)[keyof typeof Papel]


export const Genero: {
  MASCULINO: 'MASCULINO',
  FEMININO: 'FEMININO',
  OUTRO: 'OUTRO'
};

export type Genero = (typeof Genero)[keyof typeof Genero]


export const Etnia: {
  BRANCA: 'BRANCA',
  PARDA: 'PARDA',
  PRETA: 'PRETA',
  INDIGENA: 'INDIGENA',
  AMARELA: 'AMARELA'
};

export type Etnia = (typeof Etnia)[keyof typeof Etnia]


export const FluoroseDentaria: {
  NORMAL: 'NORMAL',
  QUESTIONAVEL: 'QUESTIONAVEL',
  MUITO_LEVE: 'MUITO_LEVE',
  LEVE: 'LEVE',
  MODERADO: 'MODERADO',
  GRAVE: 'GRAVE'
};

export type FluoroseDentaria = (typeof FluoroseDentaria)[keyof typeof FluoroseDentaria]


export const RelacaoMolarAnteroPosterior: {
  NORMAL: 'NORMAL',
  MEIA_CUSPIDE: 'MEIA_CUSPIDE',
  CUSPIDE_INTEIRA: 'CUSPIDE_INTEIRA'
};

export type RelacaoMolarAnteroPosterior = (typeof RelacaoMolarAnteroPosterior)[keyof typeof RelacaoMolarAnteroPosterior]


export const MotivoRemovido: {
  CARIE: 'CARIE',
  OUTRA_RAZAO: 'OUTRA_RAZAO',
  EXCLUIDO: 'EXCLUIDO'
};

export type MotivoRemovido = (typeof MotivoRemovido)[keyof typeof MotivoRemovido]


export const RespostasTraumatismoDentario: {
  NENHUM_TRAUMATISMO: 'NENHUM_TRAUMATISMO',
  FRATURA_TRATADA: 'FRATURA_TRATADA',
  FRATURA_EM_ESMALTE: 'FRATURA_EM_ESMALTE',
  FRATURA_EM_ESMALTE_E_DENTINA: 'FRATURA_EM_ESMALTE_E_DENTINA'
};

export type RespostasTraumatismoDentario = (typeof RespostasTraumatismoDentario)[keyof typeof RespostasTraumatismoDentario]


export const Escolaridade: {
  ANALFABETO: 'ANALFABETO',
  ALFABETIZADO_SEM_EDUCACAO_FORMAL: 'ALFABETIZADO_SEM_EDUCACAO_FORMAL',
  ALFABETIZADO_COM_EDUCACAO_FORMAL_PARA_ADULTOS: 'ALFABETIZADO_COM_EDUCACAO_FORMAL_PARA_ADULTOS',
  ENSINO_FUNDAMENTAL_ATE_4_SERIE: 'ENSINO_FUNDAMENTAL_ATE_4_SERIE',
  ENSINO_FUNDAMENTAL_ATE_8_SERIE: 'ENSINO_FUNDAMENTAL_ATE_8_SERIE',
  ENSINO_MEDIO_COMPLETO: 'ENSINO_MEDIO_COMPLETO',
  ENSINO_SUPERIOR_COMPLETO: 'ENSINO_SUPERIOR_COMPLETO',
  NAO_SE_APLICA: 'NAO_SE_APLICA'
};

export type Escolaridade = (typeof Escolaridade)[keyof typeof Escolaridade]


export const UltimaConsulta: {
  NUNCA_FOI: 'NUNCA_FOI',
  MENOS_1_ANO: 'MENOS_1_ANO',
  DE_1_A_2_ANOS: 'DE_1_A_2_ANOS',
  DE_3_OU_MAIS: 'DE_3_OU_MAIS',
  NAO_SE_APLICA: 'NAO_SE_APLICA'
};

export type UltimaConsulta = (typeof UltimaConsulta)[keyof typeof UltimaConsulta]


export const LocalConsulta: {
  NUNCA_FOI: 'NUNCA_FOI',
  PUBLICO: 'PUBLICO',
  PARTICULAR: 'PARTICULAR',
  PLANO_CONVENIO: 'PLANO_CONVENIO',
  NAO_SE_APLICA: 'NAO_SE_APLICA'
};

export type LocalConsulta = (typeof LocalConsulta)[keyof typeof LocalConsulta]


export const MotivoUltimaConsulta: {
  NUNCA_FOI: 'NUNCA_FOI',
  REVISAO_PREVENCAO_CHECKUP: 'REVISAO_PREVENCAO_CHECKUP',
  DOR: 'DOR',
  EXTRACAO: 'EXTRACAO',
  TRATAMENTO: 'TRATAMENTO',
  OUTROS: 'OUTROS',
  NAO_SE_APLICA: 'NAO_SE_APLICA'
};

export type MotivoUltimaConsulta = (typeof MotivoUltimaConsulta)[keyof typeof MotivoUltimaConsulta]


export const AvaliacaoUltimaConsulta: {
  NUNCA_FOI: 'NUNCA_FOI',
  MUITO_BOM: 'MUITO_BOM',
  BOM: 'BOM',
  REGULAR: 'REGULAR',
  RUIM: 'RUIM',
  MUTIO_RUIM: 'MUTIO_RUIM',
  NAO_SE_APLICA: 'NAO_SE_APLICA'
};

export type AvaliacaoUltimaConsulta = (typeof AvaliacaoUltimaConsulta)[keyof typeof AvaliacaoUltimaConsulta]


export const AvaliacaoBucal: {
  MUITO_SATISFEITO: 'MUITO_SATISFEITO',
  SATISFEITO: 'SATISFEITO',
  REGULAR: 'REGULAR',
  INSATISFEITO: 'INSATISFEITO',
  MUITO_INSATISFEITO: 'MUITO_INSATISFEITO',
  NAO_SE_APLICA: 'NAO_SE_APLICA'
};

export type AvaliacaoBucal = (typeof AvaliacaoBucal)[keyof typeof AvaliacaoBucal]


export const FilhoQtdEscovacoesPorDia: {
  NENHUMA: 'NENHUMA',
  UMA: 'UMA',
  DUAS: 'DUAS',
  TRES_OU_MAIS: 'TRES_OU_MAIS'
};

export type FilhoQtdEscovacoesPorDia = (typeof FilhoQtdEscovacoesPorDia)[keyof typeof FilhoQtdEscovacoesPorDia]


export const FrequenciaTrocaEscovas: {
  ATE_3_MESES: 'ATE_3_MESES',
  DE_3_A_6_MESES: 'DE_3_A_6_MESES',
  DE_6_MESES_A_1_ANO: 'DE_6_MESES_A_1_ANO',
  MAIS_1_ANO: 'MAIS_1_ANO'
};

export type FrequenciaTrocaEscovas = (typeof FrequenciaTrocaEscovas)[keyof typeof FrequenciaTrocaEscovas]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Sohos
 * const sohos = await prisma.soho.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Sohos
   * const sohos = await prisma.soho.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.soho`: Exposes CRUD operations for the **Soho** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sohos
    * const sohos = await prisma.soho.findMany()
    * ```
    */
  get soho(): Prisma.SohoDelegate<GlobalReject>;

  /**
   * `prisma.cPQ`: Exposes CRUD operations for the **CPQ** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CPQS
    * const cPQS = await prisma.cPQ.findMany()
    * ```
    */
  get cPQ(): Prisma.CPQDelegate<GlobalReject>;

  /**
   * `prisma.marcadorConsumoAlimentar`: Exposes CRUD operations for the **MarcadorConsumoAlimentar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MarcadorConsumoAlimentars
    * const marcadorConsumoAlimentars = await prisma.marcadorConsumoAlimentar.findMany()
    * ```
    */
  get marcadorConsumoAlimentar(): Prisma.MarcadorConsumoAlimentarDelegate<GlobalReject>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<GlobalReject>;

  /**
   * `prisma.equipe`: Exposes CRUD operations for the **Equipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Equipes
    * const equipes = await prisma.equipe.findMany()
    * ```
    */
  get equipe(): Prisma.EquipeDelegate<GlobalReject>;

  /**
   * `prisma.data`: Exposes CRUD operations for the **Data** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Data
    * const data = await prisma.data.findMany()
    * ```
    */
  get data(): Prisma.DataDelegate<GlobalReject>;

  /**
   * `prisma.pessoa`: Exposes CRUD operations for the **Pessoa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pessoas
    * const pessoas = await prisma.pessoa.findMany()
    * ```
    */
  get pessoa(): Prisma.PessoaDelegate<GlobalReject>;

  /**
   * `prisma.local`: Exposes CRUD operations for the **Local** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locals
    * const locals = await prisma.local.findMany()
    * ```
    */
  get local(): Prisma.LocalDelegate<GlobalReject>;

  /**
   * `prisma.condicaoPeriodontal`: Exposes CRUD operations for the **CondicaoPeriodontal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CondicaoPeriodontals
    * const condicaoPeriodontals = await prisma.condicaoPeriodontal.findMany()
    * ```
    */
  get condicaoPeriodontal(): Prisma.CondicaoPeriodontalDelegate<GlobalReject>;

  /**
   * `prisma.exame`: Exposes CRUD operations for the **Exame** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exames
    * const exames = await prisma.exame.findMany()
    * ```
    */
  get exame(): Prisma.ExameDelegate<GlobalReject>;

  /**
   * `prisma.dente`: Exposes CRUD operations for the **Dente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dentes
    * const dentes = await prisma.dente.findMany()
    * ```
    */
  get dente(): Prisma.DenteDelegate<GlobalReject>;

  /**
   * `prisma.traumatismoDentario`: Exposes CRUD operations for the **TraumatismoDentario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TraumatismoDentarios
    * const traumatismoDentarios = await prisma.traumatismoDentario.findMany()
    * ```
    */
  get traumatismoDentario(): Prisma.TraumatismoDentarioDelegate<GlobalReject>;

  /**
   * `prisma.avaliacaoSocioEconomica`: Exposes CRUD operations for the **AvaliacaoSocioEconomica** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AvaliacaoSocioEconomicas
    * const avaliacaoSocioEconomicas = await prisma.avaliacaoSocioEconomica.findMany()
    * ```
    */
  get avaliacaoSocioEconomica(): Prisma.AvaliacaoSocioEconomicaDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  /**
   * Prisma Client JS version: 3.14.0
   * Query Engine version: 2b0c12756921c891fec4f68d9444e18c7d5d4a6a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Soho: 'Soho',
    CPQ: 'CPQ',
    MarcadorConsumoAlimentar: 'MarcadorConsumoAlimentar',
    Usuario: 'Usuario',
    Equipe: 'Equipe',
    Data: 'Data',
    Pessoa: 'Pessoa',
    Local: 'Local',
    CondicaoPeriodontal: 'CondicaoPeriodontal',
    Exame: 'Exame',
    Dente: 'Dente',
    TraumatismoDentario: 'TraumatismoDentario',
    AvaliacaoSocioEconomica: 'AvaliacaoSocioEconomica'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */


  export type UsuarioCountOutputType = {
    exames: number
    avaliacaoSocioEconomica: number
    MarcadorConsumoAlimentar: number
  }

  export type UsuarioCountOutputTypeSelect = {
    exames?: boolean
    avaliacaoSocioEconomica?: boolean
    MarcadorConsumoAlimentar?: boolean
  }

  export type UsuarioCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UsuarioCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UsuarioCountOutputType
    : S extends undefined
    ? never
    : S extends UsuarioCountOutputTypeArgs
    ?'include' extends U
    ? UsuarioCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UsuarioCountOutputType ? UsuarioCountOutputType[P] : never
  } 
    : UsuarioCountOutputType
  : UsuarioCountOutputType




  // Custom InputTypes

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     * 
    **/
    select?: UsuarioCountOutputTypeSelect | null
  }



  /**
   * Count Type EquipeCountOutputType
   */


  export type EquipeCountOutputType = {
    integrantes: number
  }

  export type EquipeCountOutputTypeSelect = {
    integrantes?: boolean
  }

  export type EquipeCountOutputTypeGetPayload<
    S extends boolean | null | undefined | EquipeCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? EquipeCountOutputType
    : S extends undefined
    ? never
    : S extends EquipeCountOutputTypeArgs
    ?'include' extends U
    ? EquipeCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof EquipeCountOutputType ? EquipeCountOutputType[P] : never
  } 
    : EquipeCountOutputType
  : EquipeCountOutputType




  // Custom InputTypes

  /**
   * EquipeCountOutputType without action
   */
  export type EquipeCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the EquipeCountOutputType
     * 
    **/
    select?: EquipeCountOutputTypeSelect | null
  }



  /**
   * Count Type DataCountOutputType
   */


  export type DataCountOutputType = {
    exames: number
    avaliacaoSocioEconomica: number
    MarcadorConsumoAlimentar: number
  }

  export type DataCountOutputTypeSelect = {
    exames?: boolean
    avaliacaoSocioEconomica?: boolean
    MarcadorConsumoAlimentar?: boolean
  }

  export type DataCountOutputTypeGetPayload<
    S extends boolean | null | undefined | DataCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? DataCountOutputType
    : S extends undefined
    ? never
    : S extends DataCountOutputTypeArgs
    ?'include' extends U
    ? DataCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof DataCountOutputType ? DataCountOutputType[P] : never
  } 
    : DataCountOutputType
  : DataCountOutputType




  // Custom InputTypes

  /**
   * DataCountOutputType without action
   */
  export type DataCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the DataCountOutputType
     * 
    **/
    select?: DataCountOutputTypeSelect | null
  }



  /**
   * Count Type PessoaCountOutputType
   */


  export type PessoaCountOutputType = {
    exames: number
    avaliacaoSocioEconomica: number
    MarcadorConsumoAlimentar: number
  }

  export type PessoaCountOutputTypeSelect = {
    exames?: boolean
    avaliacaoSocioEconomica?: boolean
    MarcadorConsumoAlimentar?: boolean
  }

  export type PessoaCountOutputTypeGetPayload<
    S extends boolean | null | undefined | PessoaCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? PessoaCountOutputType
    : S extends undefined
    ? never
    : S extends PessoaCountOutputTypeArgs
    ?'include' extends U
    ? PessoaCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof PessoaCountOutputType ? PessoaCountOutputType[P] : never
  } 
    : PessoaCountOutputType
  : PessoaCountOutputType




  // Custom InputTypes

  /**
   * PessoaCountOutputType without action
   */
  export type PessoaCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PessoaCountOutputType
     * 
    **/
    select?: PessoaCountOutputTypeSelect | null
  }



  /**
   * Count Type LocalCountOutputType
   */


  export type LocalCountOutputType = {
    exames: number
    avaliacaoSocioEconomica: number
    MarcadorConsumoAlimentar: number
  }

  export type LocalCountOutputTypeSelect = {
    exames?: boolean
    avaliacaoSocioEconomica?: boolean
    MarcadorConsumoAlimentar?: boolean
  }

  export type LocalCountOutputTypeGetPayload<
    S extends boolean | null | undefined | LocalCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? LocalCountOutputType
    : S extends undefined
    ? never
    : S extends LocalCountOutputTypeArgs
    ?'include' extends U
    ? LocalCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof LocalCountOutputType ? LocalCountOutputType[P] : never
  } 
    : LocalCountOutputType
  : LocalCountOutputType




  // Custom InputTypes

  /**
   * LocalCountOutputType without action
   */
  export type LocalCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the LocalCountOutputType
     * 
    **/
    select?: LocalCountOutputTypeSelect | null
  }



  /**
   * Count Type ExameCountOutputType
   */


  export type ExameCountOutputType = {
    dentes: number
  }

  export type ExameCountOutputTypeSelect = {
    dentes?: boolean
  }

  export type ExameCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ExameCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ExameCountOutputType
    : S extends undefined
    ? never
    : S extends ExameCountOutputTypeArgs
    ?'include' extends U
    ? ExameCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ExameCountOutputType ? ExameCountOutputType[P] : never
  } 
    : ExameCountOutputType
  : ExameCountOutputType




  // Custom InputTypes

  /**
   * ExameCountOutputType without action
   */
  export type ExameCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ExameCountOutputType
     * 
    **/
    select?: ExameCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Soho
   */


  export type AggregateSoho = {
    _count: SohoCountAggregateOutputType | null
    _avg: SohoAvgAggregateOutputType | null
    _sum: SohoSumAggregateOutputType | null
    _min: SohoMinAggregateOutputType | null
    _max: SohoMaxAggregateOutputType | null
  }

  export type SohoAvgAggregateOutputType = {
    id: number | null
    idExame: number | null
  }

  export type SohoSumAggregateOutputType = {
    id: number | null
    idExame: number | null
  }

  export type SohoMinAggregateOutputType = {
    id: number | null
    idExame: number | null
    dificilComer: RespostasSoho | null
    dificilBeber: RespostasSoho | null
    dificilFalar: RespostasSoho | null
    dificilBrincar: RespostasSoho | null
    dificilDormir: RespostasSoho | null
    deixouDeSorrirPorDentesFeios: RespostasSoho | null
    deixouDeSorrirPorDentesDoendo: RespostasSoho | null
  }

  export type SohoMaxAggregateOutputType = {
    id: number | null
    idExame: number | null
    dificilComer: RespostasSoho | null
    dificilBeber: RespostasSoho | null
    dificilFalar: RespostasSoho | null
    dificilBrincar: RespostasSoho | null
    dificilDormir: RespostasSoho | null
    deixouDeSorrirPorDentesFeios: RespostasSoho | null
    deixouDeSorrirPorDentesDoendo: RespostasSoho | null
  }

  export type SohoCountAggregateOutputType = {
    id: number
    idExame: number
    dificilComer: number
    dificilBeber: number
    dificilFalar: number
    dificilBrincar: number
    dificilDormir: number
    deixouDeSorrirPorDentesFeios: number
    deixouDeSorrirPorDentesDoendo: number
    _all: number
  }


  export type SohoAvgAggregateInputType = {
    id?: true
    idExame?: true
  }

  export type SohoSumAggregateInputType = {
    id?: true
    idExame?: true
  }

  export type SohoMinAggregateInputType = {
    id?: true
    idExame?: true
    dificilComer?: true
    dificilBeber?: true
    dificilFalar?: true
    dificilBrincar?: true
    dificilDormir?: true
    deixouDeSorrirPorDentesFeios?: true
    deixouDeSorrirPorDentesDoendo?: true
  }

  export type SohoMaxAggregateInputType = {
    id?: true
    idExame?: true
    dificilComer?: true
    dificilBeber?: true
    dificilFalar?: true
    dificilBrincar?: true
    dificilDormir?: true
    deixouDeSorrirPorDentesFeios?: true
    deixouDeSorrirPorDentesDoendo?: true
  }

  export type SohoCountAggregateInputType = {
    id?: true
    idExame?: true
    dificilComer?: true
    dificilBeber?: true
    dificilFalar?: true
    dificilBrincar?: true
    dificilDormir?: true
    deixouDeSorrirPorDentesFeios?: true
    deixouDeSorrirPorDentesDoendo?: true
    _all?: true
  }

  export type SohoAggregateArgs = {
    /**
     * Filter which Soho to aggregate.
     * 
    **/
    where?: SohoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sohos to fetch.
     * 
    **/
    orderBy?: Enumerable<SohoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SohoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sohos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sohos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sohos
    **/
    _count?: true | SohoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SohoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SohoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SohoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SohoMaxAggregateInputType
  }

  export type GetSohoAggregateType<T extends SohoAggregateArgs> = {
        [P in keyof T & keyof AggregateSoho]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSoho[P]>
      : GetScalarType<T[P], AggregateSoho[P]>
  }




  export type SohoGroupByArgs = {
    where?: SohoWhereInput
    orderBy?: Enumerable<SohoOrderByWithAggregationInput>
    by: Array<SohoScalarFieldEnum>
    having?: SohoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SohoCountAggregateInputType | true
    _avg?: SohoAvgAggregateInputType
    _sum?: SohoSumAggregateInputType
    _min?: SohoMinAggregateInputType
    _max?: SohoMaxAggregateInputType
  }


  export type SohoGroupByOutputType = {
    id: number
    idExame: number
    dificilComer: RespostasSoho
    dificilBeber: RespostasSoho
    dificilFalar: RespostasSoho
    dificilBrincar: RespostasSoho
    dificilDormir: RespostasSoho
    deixouDeSorrirPorDentesFeios: RespostasSoho
    deixouDeSorrirPorDentesDoendo: RespostasSoho
    _count: SohoCountAggregateOutputType | null
    _avg: SohoAvgAggregateOutputType | null
    _sum: SohoSumAggregateOutputType | null
    _min: SohoMinAggregateOutputType | null
    _max: SohoMaxAggregateOutputType | null
  }

  type GetSohoGroupByPayload<T extends SohoGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SohoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SohoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SohoGroupByOutputType[P]>
            : GetScalarType<T[P], SohoGroupByOutputType[P]>
        }
      >
    >


  export type SohoSelect = {
    id?: boolean
    exame?: boolean | ExameArgs
    idExame?: boolean
    dificilComer?: boolean
    dificilBeber?: boolean
    dificilFalar?: boolean
    dificilBrincar?: boolean
    dificilDormir?: boolean
    deixouDeSorrirPorDentesFeios?: boolean
    deixouDeSorrirPorDentesDoendo?: boolean
  }

  export type SohoInclude = {
    exame?: boolean | ExameArgs
  }

  export type SohoGetPayload<
    S extends boolean | null | undefined | SohoArgs,
    U = keyof S
      > = S extends true
        ? Soho
    : S extends undefined
    ? never
    : S extends SohoArgs | SohoFindManyArgs
    ?'include' extends U
    ? Soho  & {
    [P in TrueKeys<S['include']>]:
        P extends 'exame' ? ExameGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'exame' ? ExameGetPayload<S['select'][P]> :  P extends keyof Soho ? Soho[P] : never
  } 
    : Soho
  : Soho


  type SohoCountArgs = Merge<
    Omit<SohoFindManyArgs, 'select' | 'include'> & {
      select?: SohoCountAggregateInputType | true
    }
  >

  export interface SohoDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Soho that matches the filter.
     * @param {SohoFindUniqueArgs} args - Arguments to find a Soho
     * @example
     * // Get one Soho
     * const soho = await prisma.soho.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SohoFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SohoFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Soho'> extends True ? CheckSelect<T, Prisma__SohoClient<Soho>, Prisma__SohoClient<SohoGetPayload<T>>> : CheckSelect<T, Prisma__SohoClient<Soho | null >, Prisma__SohoClient<SohoGetPayload<T> | null >>

    /**
     * Find the first Soho that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SohoFindFirstArgs} args - Arguments to find a Soho
     * @example
     * // Get one Soho
     * const soho = await prisma.soho.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SohoFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SohoFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Soho'> extends True ? CheckSelect<T, Prisma__SohoClient<Soho>, Prisma__SohoClient<SohoGetPayload<T>>> : CheckSelect<T, Prisma__SohoClient<Soho | null >, Prisma__SohoClient<SohoGetPayload<T> | null >>

    /**
     * Find zero or more Sohos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SohoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sohos
     * const sohos = await prisma.soho.findMany()
     * 
     * // Get first 10 Sohos
     * const sohos = await prisma.soho.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sohoWithIdOnly = await prisma.soho.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SohoFindManyArgs>(
      args?: SelectSubset<T, SohoFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Soho>>, PrismaPromise<Array<SohoGetPayload<T>>>>

    /**
     * Create a Soho.
     * @param {SohoCreateArgs} args - Arguments to create a Soho.
     * @example
     * // Create one Soho
     * const Soho = await prisma.soho.create({
     *   data: {
     *     // ... data to create a Soho
     *   }
     * })
     * 
    **/
    create<T extends SohoCreateArgs>(
      args: SelectSubset<T, SohoCreateArgs>
    ): CheckSelect<T, Prisma__SohoClient<Soho>, Prisma__SohoClient<SohoGetPayload<T>>>

    /**
     * Create many Sohos.
     *     @param {SohoCreateManyArgs} args - Arguments to create many Sohos.
     *     @example
     *     // Create many Sohos
     *     const soho = await prisma.soho.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SohoCreateManyArgs>(
      args?: SelectSubset<T, SohoCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Soho.
     * @param {SohoDeleteArgs} args - Arguments to delete one Soho.
     * @example
     * // Delete one Soho
     * const Soho = await prisma.soho.delete({
     *   where: {
     *     // ... filter to delete one Soho
     *   }
     * })
     * 
    **/
    delete<T extends SohoDeleteArgs>(
      args: SelectSubset<T, SohoDeleteArgs>
    ): CheckSelect<T, Prisma__SohoClient<Soho>, Prisma__SohoClient<SohoGetPayload<T>>>

    /**
     * Update one Soho.
     * @param {SohoUpdateArgs} args - Arguments to update one Soho.
     * @example
     * // Update one Soho
     * const soho = await prisma.soho.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SohoUpdateArgs>(
      args: SelectSubset<T, SohoUpdateArgs>
    ): CheckSelect<T, Prisma__SohoClient<Soho>, Prisma__SohoClient<SohoGetPayload<T>>>

    /**
     * Delete zero or more Sohos.
     * @param {SohoDeleteManyArgs} args - Arguments to filter Sohos to delete.
     * @example
     * // Delete a few Sohos
     * const { count } = await prisma.soho.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SohoDeleteManyArgs>(
      args?: SelectSubset<T, SohoDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sohos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SohoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sohos
     * const soho = await prisma.soho.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SohoUpdateManyArgs>(
      args: SelectSubset<T, SohoUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Soho.
     * @param {SohoUpsertArgs} args - Arguments to update or create a Soho.
     * @example
     * // Update or create a Soho
     * const soho = await prisma.soho.upsert({
     *   create: {
     *     // ... data to create a Soho
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Soho we want to update
     *   }
     * })
    **/
    upsert<T extends SohoUpsertArgs>(
      args: SelectSubset<T, SohoUpsertArgs>
    ): CheckSelect<T, Prisma__SohoClient<Soho>, Prisma__SohoClient<SohoGetPayload<T>>>

    /**
     * Count the number of Sohos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SohoCountArgs} args - Arguments to filter Sohos to count.
     * @example
     * // Count the number of Sohos
     * const count = await prisma.soho.count({
     *   where: {
     *     // ... the filter for the Sohos we want to count
     *   }
     * })
    **/
    count<T extends SohoCountArgs>(
      args?: Subset<T, SohoCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SohoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Soho.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SohoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SohoAggregateArgs>(args: Subset<T, SohoAggregateArgs>): PrismaPromise<GetSohoAggregateType<T>>

    /**
     * Group by Soho.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SohoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SohoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SohoGroupByArgs['orderBy'] }
        : { orderBy?: SohoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SohoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSohoGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Soho.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SohoClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    exame<T extends ExameArgs = {}>(args?: Subset<T, ExameArgs>): CheckSelect<T, Prisma__ExameClient<Exame | null >, Prisma__ExameClient<ExameGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Soho findUnique
   */
  export type SohoFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Soho
     * 
    **/
    select?: SohoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SohoInclude | null
    /**
     * Throw an Error if a Soho can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Soho to fetch.
     * 
    **/
    where: SohoWhereUniqueInput
  }


  /**
   * Soho findFirst
   */
  export type SohoFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Soho
     * 
    **/
    select?: SohoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SohoInclude | null
    /**
     * Throw an Error if a Soho can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Soho to fetch.
     * 
    **/
    where?: SohoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sohos to fetch.
     * 
    **/
    orderBy?: Enumerable<SohoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sohos.
     * 
    **/
    cursor?: SohoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sohos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sohos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sohos.
     * 
    **/
    distinct?: Enumerable<SohoScalarFieldEnum>
  }


  /**
   * Soho findMany
   */
  export type SohoFindManyArgs = {
    /**
     * Select specific fields to fetch from the Soho
     * 
    **/
    select?: SohoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SohoInclude | null
    /**
     * Filter, which Sohos to fetch.
     * 
    **/
    where?: SohoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sohos to fetch.
     * 
    **/
    orderBy?: Enumerable<SohoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sohos.
     * 
    **/
    cursor?: SohoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sohos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sohos.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SohoScalarFieldEnum>
  }


  /**
   * Soho create
   */
  export type SohoCreateArgs = {
    /**
     * Select specific fields to fetch from the Soho
     * 
    **/
    select?: SohoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SohoInclude | null
    /**
     * The data needed to create a Soho.
     * 
    **/
    data: XOR<SohoCreateInput, SohoUncheckedCreateInput>
  }


  /**
   * Soho createMany
   */
  export type SohoCreateManyArgs = {
    /**
     * The data used to create many Sohos.
     * 
    **/
    data: Enumerable<SohoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Soho update
   */
  export type SohoUpdateArgs = {
    /**
     * Select specific fields to fetch from the Soho
     * 
    **/
    select?: SohoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SohoInclude | null
    /**
     * The data needed to update a Soho.
     * 
    **/
    data: XOR<SohoUpdateInput, SohoUncheckedUpdateInput>
    /**
     * Choose, which Soho to update.
     * 
    **/
    where: SohoWhereUniqueInput
  }


  /**
   * Soho updateMany
   */
  export type SohoUpdateManyArgs = {
    /**
     * The data used to update Sohos.
     * 
    **/
    data: XOR<SohoUpdateManyMutationInput, SohoUncheckedUpdateManyInput>
    /**
     * Filter which Sohos to update
     * 
    **/
    where?: SohoWhereInput
  }


  /**
   * Soho upsert
   */
  export type SohoUpsertArgs = {
    /**
     * Select specific fields to fetch from the Soho
     * 
    **/
    select?: SohoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SohoInclude | null
    /**
     * The filter to search for the Soho to update in case it exists.
     * 
    **/
    where: SohoWhereUniqueInput
    /**
     * In case the Soho found by the `where` argument doesn't exist, create a new Soho with this data.
     * 
    **/
    create: XOR<SohoCreateInput, SohoUncheckedCreateInput>
    /**
     * In case the Soho was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SohoUpdateInput, SohoUncheckedUpdateInput>
  }


  /**
   * Soho delete
   */
  export type SohoDeleteArgs = {
    /**
     * Select specific fields to fetch from the Soho
     * 
    **/
    select?: SohoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SohoInclude | null
    /**
     * Filter which Soho to delete.
     * 
    **/
    where: SohoWhereUniqueInput
  }


  /**
   * Soho deleteMany
   */
  export type SohoDeleteManyArgs = {
    /**
     * Filter which Sohos to delete
     * 
    **/
    where?: SohoWhereInput
  }


  /**
   * Soho without action
   */
  export type SohoArgs = {
    /**
     * Select specific fields to fetch from the Soho
     * 
    **/
    select?: SohoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SohoInclude | null
  }



  /**
   * Model CPQ
   */


  export type AggregateCPQ = {
    _count: CPQCountAggregateOutputType | null
    _avg: CPQAvgAggregateOutputType | null
    _sum: CPQSumAggregateOutputType | null
    _min: CPQMinAggregateOutputType | null
    _max: CPQMaxAggregateOutputType | null
  }

  export type CPQAvgAggregateOutputType = {
    id: number | null
    idExame: number | null
  }

  export type CPQSumAggregateOutputType = {
    id: number | null
    idExame: number | null
  }

  export type CPQMinAggregateOutputType = {
    id: number | null
    idExame: number | null
    dorNosDentes: RespostasCPQ | null
    feridas: RespostasCPQ | null
    mauHalito: RespostasCPQ | null
    restosDeAlimentoPreso: RespostasCPQ | null
    demorouMaisParaTerminarRefeicao: RespostasCPQ | null
    dificuldadeMorder: RespostasCPQ | null
    dificuldadeDizer: RespostasCPQ | null
    dificuldadeIngerirQuentesFrios: RespostasCPQ | null
    irritado: RespostasCPQ | null
    timido: RespostasCPQ | null
    chateado: RespostasCPQ | null
    preocupado: RespostasCPQ | null
    evitouSorrir: RespostasCPQ | null
    discutiu: RespostasCPQ | null
    aborreceuChamaramPorApelidos: RespostasCPQ | null
    perguntaramSobreDente: RespostasCPQ | null
  }

  export type CPQMaxAggregateOutputType = {
    id: number | null
    idExame: number | null
    dorNosDentes: RespostasCPQ | null
    feridas: RespostasCPQ | null
    mauHalito: RespostasCPQ | null
    restosDeAlimentoPreso: RespostasCPQ | null
    demorouMaisParaTerminarRefeicao: RespostasCPQ | null
    dificuldadeMorder: RespostasCPQ | null
    dificuldadeDizer: RespostasCPQ | null
    dificuldadeIngerirQuentesFrios: RespostasCPQ | null
    irritado: RespostasCPQ | null
    timido: RespostasCPQ | null
    chateado: RespostasCPQ | null
    preocupado: RespostasCPQ | null
    evitouSorrir: RespostasCPQ | null
    discutiu: RespostasCPQ | null
    aborreceuChamaramPorApelidos: RespostasCPQ | null
    perguntaramSobreDente: RespostasCPQ | null
  }

  export type CPQCountAggregateOutputType = {
    id: number
    idExame: number
    dorNosDentes: number
    feridas: number
    mauHalito: number
    restosDeAlimentoPreso: number
    demorouMaisParaTerminarRefeicao: number
    dificuldadeMorder: number
    dificuldadeDizer: number
    dificuldadeIngerirQuentesFrios: number
    irritado: number
    timido: number
    chateado: number
    preocupado: number
    evitouSorrir: number
    discutiu: number
    aborreceuChamaramPorApelidos: number
    perguntaramSobreDente: number
    _all: number
  }


  export type CPQAvgAggregateInputType = {
    id?: true
    idExame?: true
  }

  export type CPQSumAggregateInputType = {
    id?: true
    idExame?: true
  }

  export type CPQMinAggregateInputType = {
    id?: true
    idExame?: true
    dorNosDentes?: true
    feridas?: true
    mauHalito?: true
    restosDeAlimentoPreso?: true
    demorouMaisParaTerminarRefeicao?: true
    dificuldadeMorder?: true
    dificuldadeDizer?: true
    dificuldadeIngerirQuentesFrios?: true
    irritado?: true
    timido?: true
    chateado?: true
    preocupado?: true
    evitouSorrir?: true
    discutiu?: true
    aborreceuChamaramPorApelidos?: true
    perguntaramSobreDente?: true
  }

  export type CPQMaxAggregateInputType = {
    id?: true
    idExame?: true
    dorNosDentes?: true
    feridas?: true
    mauHalito?: true
    restosDeAlimentoPreso?: true
    demorouMaisParaTerminarRefeicao?: true
    dificuldadeMorder?: true
    dificuldadeDizer?: true
    dificuldadeIngerirQuentesFrios?: true
    irritado?: true
    timido?: true
    chateado?: true
    preocupado?: true
    evitouSorrir?: true
    discutiu?: true
    aborreceuChamaramPorApelidos?: true
    perguntaramSobreDente?: true
  }

  export type CPQCountAggregateInputType = {
    id?: true
    idExame?: true
    dorNosDentes?: true
    feridas?: true
    mauHalito?: true
    restosDeAlimentoPreso?: true
    demorouMaisParaTerminarRefeicao?: true
    dificuldadeMorder?: true
    dificuldadeDizer?: true
    dificuldadeIngerirQuentesFrios?: true
    irritado?: true
    timido?: true
    chateado?: true
    preocupado?: true
    evitouSorrir?: true
    discutiu?: true
    aborreceuChamaramPorApelidos?: true
    perguntaramSobreDente?: true
    _all?: true
  }

  export type CPQAggregateArgs = {
    /**
     * Filter which CPQ to aggregate.
     * 
    **/
    where?: CPQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CPQS to fetch.
     * 
    **/
    orderBy?: Enumerable<CPQOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CPQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CPQS from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CPQS.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CPQS
    **/
    _count?: true | CPQCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CPQAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CPQSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CPQMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CPQMaxAggregateInputType
  }

  export type GetCPQAggregateType<T extends CPQAggregateArgs> = {
        [P in keyof T & keyof AggregateCPQ]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCPQ[P]>
      : GetScalarType<T[P], AggregateCPQ[P]>
  }




  export type CPQGroupByArgs = {
    where?: CPQWhereInput
    orderBy?: Enumerable<CPQOrderByWithAggregationInput>
    by: Array<CPQScalarFieldEnum>
    having?: CPQScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CPQCountAggregateInputType | true
    _avg?: CPQAvgAggregateInputType
    _sum?: CPQSumAggregateInputType
    _min?: CPQMinAggregateInputType
    _max?: CPQMaxAggregateInputType
  }


  export type CPQGroupByOutputType = {
    id: number
    idExame: number
    dorNosDentes: RespostasCPQ
    feridas: RespostasCPQ
    mauHalito: RespostasCPQ
    restosDeAlimentoPreso: RespostasCPQ
    demorouMaisParaTerminarRefeicao: RespostasCPQ
    dificuldadeMorder: RespostasCPQ
    dificuldadeDizer: RespostasCPQ
    dificuldadeIngerirQuentesFrios: RespostasCPQ
    irritado: RespostasCPQ
    timido: RespostasCPQ
    chateado: RespostasCPQ
    preocupado: RespostasCPQ
    evitouSorrir: RespostasCPQ
    discutiu: RespostasCPQ
    aborreceuChamaramPorApelidos: RespostasCPQ
    perguntaramSobreDente: RespostasCPQ
    _count: CPQCountAggregateOutputType | null
    _avg: CPQAvgAggregateOutputType | null
    _sum: CPQSumAggregateOutputType | null
    _min: CPQMinAggregateOutputType | null
    _max: CPQMaxAggregateOutputType | null
  }

  type GetCPQGroupByPayload<T extends CPQGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CPQGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CPQGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CPQGroupByOutputType[P]>
            : GetScalarType<T[P], CPQGroupByOutputType[P]>
        }
      >
    >


  export type CPQSelect = {
    id?: boolean
    exame?: boolean | ExameArgs
    idExame?: boolean
    dorNosDentes?: boolean
    feridas?: boolean
    mauHalito?: boolean
    restosDeAlimentoPreso?: boolean
    demorouMaisParaTerminarRefeicao?: boolean
    dificuldadeMorder?: boolean
    dificuldadeDizer?: boolean
    dificuldadeIngerirQuentesFrios?: boolean
    irritado?: boolean
    timido?: boolean
    chateado?: boolean
    preocupado?: boolean
    evitouSorrir?: boolean
    discutiu?: boolean
    aborreceuChamaramPorApelidos?: boolean
    perguntaramSobreDente?: boolean
  }

  export type CPQInclude = {
    exame?: boolean | ExameArgs
  }

  export type CPQGetPayload<
    S extends boolean | null | undefined | CPQArgs,
    U = keyof S
      > = S extends true
        ? CPQ
    : S extends undefined
    ? never
    : S extends CPQArgs | CPQFindManyArgs
    ?'include' extends U
    ? CPQ  & {
    [P in TrueKeys<S['include']>]:
        P extends 'exame' ? ExameGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'exame' ? ExameGetPayload<S['select'][P]> :  P extends keyof CPQ ? CPQ[P] : never
  } 
    : CPQ
  : CPQ


  type CPQCountArgs = Merge<
    Omit<CPQFindManyArgs, 'select' | 'include'> & {
      select?: CPQCountAggregateInputType | true
    }
  >

  export interface CPQDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one CPQ that matches the filter.
     * @param {CPQFindUniqueArgs} args - Arguments to find a CPQ
     * @example
     * // Get one CPQ
     * const cPQ = await prisma.cPQ.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CPQFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CPQFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CPQ'> extends True ? CheckSelect<T, Prisma__CPQClient<CPQ>, Prisma__CPQClient<CPQGetPayload<T>>> : CheckSelect<T, Prisma__CPQClient<CPQ | null >, Prisma__CPQClient<CPQGetPayload<T> | null >>

    /**
     * Find the first CPQ that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CPQFindFirstArgs} args - Arguments to find a CPQ
     * @example
     * // Get one CPQ
     * const cPQ = await prisma.cPQ.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CPQFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CPQFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CPQ'> extends True ? CheckSelect<T, Prisma__CPQClient<CPQ>, Prisma__CPQClient<CPQGetPayload<T>>> : CheckSelect<T, Prisma__CPQClient<CPQ | null >, Prisma__CPQClient<CPQGetPayload<T> | null >>

    /**
     * Find zero or more CPQS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CPQFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CPQS
     * const cPQS = await prisma.cPQ.findMany()
     * 
     * // Get first 10 CPQS
     * const cPQS = await prisma.cPQ.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cPQWithIdOnly = await prisma.cPQ.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CPQFindManyArgs>(
      args?: SelectSubset<T, CPQFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<CPQ>>, PrismaPromise<Array<CPQGetPayload<T>>>>

    /**
     * Create a CPQ.
     * @param {CPQCreateArgs} args - Arguments to create a CPQ.
     * @example
     * // Create one CPQ
     * const CPQ = await prisma.cPQ.create({
     *   data: {
     *     // ... data to create a CPQ
     *   }
     * })
     * 
    **/
    create<T extends CPQCreateArgs>(
      args: SelectSubset<T, CPQCreateArgs>
    ): CheckSelect<T, Prisma__CPQClient<CPQ>, Prisma__CPQClient<CPQGetPayload<T>>>

    /**
     * Create many CPQS.
     *     @param {CPQCreateManyArgs} args - Arguments to create many CPQS.
     *     @example
     *     // Create many CPQS
     *     const cPQ = await prisma.cPQ.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CPQCreateManyArgs>(
      args?: SelectSubset<T, CPQCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a CPQ.
     * @param {CPQDeleteArgs} args - Arguments to delete one CPQ.
     * @example
     * // Delete one CPQ
     * const CPQ = await prisma.cPQ.delete({
     *   where: {
     *     // ... filter to delete one CPQ
     *   }
     * })
     * 
    **/
    delete<T extends CPQDeleteArgs>(
      args: SelectSubset<T, CPQDeleteArgs>
    ): CheckSelect<T, Prisma__CPQClient<CPQ>, Prisma__CPQClient<CPQGetPayload<T>>>

    /**
     * Update one CPQ.
     * @param {CPQUpdateArgs} args - Arguments to update one CPQ.
     * @example
     * // Update one CPQ
     * const cPQ = await prisma.cPQ.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CPQUpdateArgs>(
      args: SelectSubset<T, CPQUpdateArgs>
    ): CheckSelect<T, Prisma__CPQClient<CPQ>, Prisma__CPQClient<CPQGetPayload<T>>>

    /**
     * Delete zero or more CPQS.
     * @param {CPQDeleteManyArgs} args - Arguments to filter CPQS to delete.
     * @example
     * // Delete a few CPQS
     * const { count } = await prisma.cPQ.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CPQDeleteManyArgs>(
      args?: SelectSubset<T, CPQDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more CPQS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CPQUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CPQS
     * const cPQ = await prisma.cPQ.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CPQUpdateManyArgs>(
      args: SelectSubset<T, CPQUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one CPQ.
     * @param {CPQUpsertArgs} args - Arguments to update or create a CPQ.
     * @example
     * // Update or create a CPQ
     * const cPQ = await prisma.cPQ.upsert({
     *   create: {
     *     // ... data to create a CPQ
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CPQ we want to update
     *   }
     * })
    **/
    upsert<T extends CPQUpsertArgs>(
      args: SelectSubset<T, CPQUpsertArgs>
    ): CheckSelect<T, Prisma__CPQClient<CPQ>, Prisma__CPQClient<CPQGetPayload<T>>>

    /**
     * Count the number of CPQS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CPQCountArgs} args - Arguments to filter CPQS to count.
     * @example
     * // Count the number of CPQS
     * const count = await prisma.cPQ.count({
     *   where: {
     *     // ... the filter for the CPQS we want to count
     *   }
     * })
    **/
    count<T extends CPQCountArgs>(
      args?: Subset<T, CPQCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CPQCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CPQ.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CPQAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CPQAggregateArgs>(args: Subset<T, CPQAggregateArgs>): PrismaPromise<GetCPQAggregateType<T>>

    /**
     * Group by CPQ.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CPQGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CPQGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CPQGroupByArgs['orderBy'] }
        : { orderBy?: CPQGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CPQGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCPQGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for CPQ.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CPQClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    exame<T extends ExameArgs = {}>(args?: Subset<T, ExameArgs>): CheckSelect<T, Prisma__ExameClient<Exame | null >, Prisma__ExameClient<ExameGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * CPQ findUnique
   */
  export type CPQFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the CPQ
     * 
    **/
    select?: CPQSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CPQInclude | null
    /**
     * Throw an Error if a CPQ can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which CPQ to fetch.
     * 
    **/
    where: CPQWhereUniqueInput
  }


  /**
   * CPQ findFirst
   */
  export type CPQFindFirstArgs = {
    /**
     * Select specific fields to fetch from the CPQ
     * 
    **/
    select?: CPQSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CPQInclude | null
    /**
     * Throw an Error if a CPQ can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which CPQ to fetch.
     * 
    **/
    where?: CPQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CPQS to fetch.
     * 
    **/
    orderBy?: Enumerable<CPQOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CPQS.
     * 
    **/
    cursor?: CPQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CPQS from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CPQS.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CPQS.
     * 
    **/
    distinct?: Enumerable<CPQScalarFieldEnum>
  }


  /**
   * CPQ findMany
   */
  export type CPQFindManyArgs = {
    /**
     * Select specific fields to fetch from the CPQ
     * 
    **/
    select?: CPQSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CPQInclude | null
    /**
     * Filter, which CPQS to fetch.
     * 
    **/
    where?: CPQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CPQS to fetch.
     * 
    **/
    orderBy?: Enumerable<CPQOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CPQS.
     * 
    **/
    cursor?: CPQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CPQS from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CPQS.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CPQScalarFieldEnum>
  }


  /**
   * CPQ create
   */
  export type CPQCreateArgs = {
    /**
     * Select specific fields to fetch from the CPQ
     * 
    **/
    select?: CPQSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CPQInclude | null
    /**
     * The data needed to create a CPQ.
     * 
    **/
    data: XOR<CPQCreateInput, CPQUncheckedCreateInput>
  }


  /**
   * CPQ createMany
   */
  export type CPQCreateManyArgs = {
    /**
     * The data used to create many CPQS.
     * 
    **/
    data: Enumerable<CPQCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * CPQ update
   */
  export type CPQUpdateArgs = {
    /**
     * Select specific fields to fetch from the CPQ
     * 
    **/
    select?: CPQSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CPQInclude | null
    /**
     * The data needed to update a CPQ.
     * 
    **/
    data: XOR<CPQUpdateInput, CPQUncheckedUpdateInput>
    /**
     * Choose, which CPQ to update.
     * 
    **/
    where: CPQWhereUniqueInput
  }


  /**
   * CPQ updateMany
   */
  export type CPQUpdateManyArgs = {
    /**
     * The data used to update CPQS.
     * 
    **/
    data: XOR<CPQUpdateManyMutationInput, CPQUncheckedUpdateManyInput>
    /**
     * Filter which CPQS to update
     * 
    **/
    where?: CPQWhereInput
  }


  /**
   * CPQ upsert
   */
  export type CPQUpsertArgs = {
    /**
     * Select specific fields to fetch from the CPQ
     * 
    **/
    select?: CPQSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CPQInclude | null
    /**
     * The filter to search for the CPQ to update in case it exists.
     * 
    **/
    where: CPQWhereUniqueInput
    /**
     * In case the CPQ found by the `where` argument doesn't exist, create a new CPQ with this data.
     * 
    **/
    create: XOR<CPQCreateInput, CPQUncheckedCreateInput>
    /**
     * In case the CPQ was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CPQUpdateInput, CPQUncheckedUpdateInput>
  }


  /**
   * CPQ delete
   */
  export type CPQDeleteArgs = {
    /**
     * Select specific fields to fetch from the CPQ
     * 
    **/
    select?: CPQSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CPQInclude | null
    /**
     * Filter which CPQ to delete.
     * 
    **/
    where: CPQWhereUniqueInput
  }


  /**
   * CPQ deleteMany
   */
  export type CPQDeleteManyArgs = {
    /**
     * Filter which CPQS to delete
     * 
    **/
    where?: CPQWhereInput
  }


  /**
   * CPQ without action
   */
  export type CPQArgs = {
    /**
     * Select specific fields to fetch from the CPQ
     * 
    **/
    select?: CPQSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CPQInclude | null
  }



  /**
   * Model MarcadorConsumoAlimentar
   */


  export type AggregateMarcadorConsumoAlimentar = {
    _count: MarcadorConsumoAlimentarCountAggregateOutputType | null
    _avg: MarcadorConsumoAlimentarAvgAggregateOutputType | null
    _sum: MarcadorConsumoAlimentarSumAggregateOutputType | null
    _min: MarcadorConsumoAlimentarMinAggregateOutputType | null
    _max: MarcadorConsumoAlimentarMaxAggregateOutputType | null
  }

  export type MarcadorConsumoAlimentarAvgAggregateOutputType = {
    id: number | null
    idData: number | null
    idPessoa: number | null
    idUsuario: number | null
    idLocal: number | null
  }

  export type MarcadorConsumoAlimentarSumAggregateOutputType = {
    id: number | null
    idData: number | null
    idPessoa: number | null
    idUsuario: number | null
    idLocal: number | null
  }

  export type MarcadorConsumoAlimentarMinAggregateOutputType = {
    id: number | null
    idData: number | null
    idPessoa: number | null
    idUsuario: number | null
    idLocal: number | null
    saladaCrua: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias | null
    legumesVerdurasCozidos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias | null
    frutasFrescasSaladaDeFrutas: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias | null
    feijao: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias | null
    leiteOuIogurte: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias | null
    batataFritaBatataDePacoteSalgadosFritos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias | null
    hamburgerEmbutidos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias | null
    bolachasBiscoitosSalgadosSalgadinhoDePacote: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias | null
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias | null
    refrigerante: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias | null
  }

  export type MarcadorConsumoAlimentarMaxAggregateOutputType = {
    id: number | null
    idData: number | null
    idPessoa: number | null
    idUsuario: number | null
    idLocal: number | null
    saladaCrua: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias | null
    legumesVerdurasCozidos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias | null
    frutasFrescasSaladaDeFrutas: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias | null
    feijao: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias | null
    leiteOuIogurte: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias | null
    batataFritaBatataDePacoteSalgadosFritos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias | null
    hamburgerEmbutidos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias | null
    bolachasBiscoitosSalgadosSalgadinhoDePacote: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias | null
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias | null
    refrigerante: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias | null
  }

  export type MarcadorConsumoAlimentarCountAggregateOutputType = {
    id: number
    idData: number
    idPessoa: number
    idUsuario: number
    idLocal: number
    saladaCrua: number
    legumesVerdurasCozidos: number
    frutasFrescasSaladaDeFrutas: number
    feijao: number
    leiteOuIogurte: number
    batataFritaBatataDePacoteSalgadosFritos: number
    hamburgerEmbutidos: number
    bolachasBiscoitosSalgadosSalgadinhoDePacote: number
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates: number
    refrigerante: number
    _all: number
  }


  export type MarcadorConsumoAlimentarAvgAggregateInputType = {
    id?: true
    idData?: true
    idPessoa?: true
    idUsuario?: true
    idLocal?: true
  }

  export type MarcadorConsumoAlimentarSumAggregateInputType = {
    id?: true
    idData?: true
    idPessoa?: true
    idUsuario?: true
    idLocal?: true
  }

  export type MarcadorConsumoAlimentarMinAggregateInputType = {
    id?: true
    idData?: true
    idPessoa?: true
    idUsuario?: true
    idLocal?: true
    saladaCrua?: true
    legumesVerdurasCozidos?: true
    frutasFrescasSaladaDeFrutas?: true
    feijao?: true
    leiteOuIogurte?: true
    batataFritaBatataDePacoteSalgadosFritos?: true
    hamburgerEmbutidos?: true
    bolachasBiscoitosSalgadosSalgadinhoDePacote?: true
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates?: true
    refrigerante?: true
  }

  export type MarcadorConsumoAlimentarMaxAggregateInputType = {
    id?: true
    idData?: true
    idPessoa?: true
    idUsuario?: true
    idLocal?: true
    saladaCrua?: true
    legumesVerdurasCozidos?: true
    frutasFrescasSaladaDeFrutas?: true
    feijao?: true
    leiteOuIogurte?: true
    batataFritaBatataDePacoteSalgadosFritos?: true
    hamburgerEmbutidos?: true
    bolachasBiscoitosSalgadosSalgadinhoDePacote?: true
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates?: true
    refrigerante?: true
  }

  export type MarcadorConsumoAlimentarCountAggregateInputType = {
    id?: true
    idData?: true
    idPessoa?: true
    idUsuario?: true
    idLocal?: true
    saladaCrua?: true
    legumesVerdurasCozidos?: true
    frutasFrescasSaladaDeFrutas?: true
    feijao?: true
    leiteOuIogurte?: true
    batataFritaBatataDePacoteSalgadosFritos?: true
    hamburgerEmbutidos?: true
    bolachasBiscoitosSalgadosSalgadinhoDePacote?: true
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates?: true
    refrigerante?: true
    _all?: true
  }

  export type MarcadorConsumoAlimentarAggregateArgs = {
    /**
     * Filter which MarcadorConsumoAlimentar to aggregate.
     * 
    **/
    where?: MarcadorConsumoAlimentarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarcadorConsumoAlimentars to fetch.
     * 
    **/
    orderBy?: Enumerable<MarcadorConsumoAlimentarOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: MarcadorConsumoAlimentarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarcadorConsumoAlimentars from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarcadorConsumoAlimentars.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MarcadorConsumoAlimentars
    **/
    _count?: true | MarcadorConsumoAlimentarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarcadorConsumoAlimentarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarcadorConsumoAlimentarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarcadorConsumoAlimentarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarcadorConsumoAlimentarMaxAggregateInputType
  }

  export type GetMarcadorConsumoAlimentarAggregateType<T extends MarcadorConsumoAlimentarAggregateArgs> = {
        [P in keyof T & keyof AggregateMarcadorConsumoAlimentar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarcadorConsumoAlimentar[P]>
      : GetScalarType<T[P], AggregateMarcadorConsumoAlimentar[P]>
  }




  export type MarcadorConsumoAlimentarGroupByArgs = {
    where?: MarcadorConsumoAlimentarWhereInput
    orderBy?: Enumerable<MarcadorConsumoAlimentarOrderByWithAggregationInput>
    by: Array<MarcadorConsumoAlimentarScalarFieldEnum>
    having?: MarcadorConsumoAlimentarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarcadorConsumoAlimentarCountAggregateInputType | true
    _avg?: MarcadorConsumoAlimentarAvgAggregateInputType
    _sum?: MarcadorConsumoAlimentarSumAggregateInputType
    _min?: MarcadorConsumoAlimentarMinAggregateInputType
    _max?: MarcadorConsumoAlimentarMaxAggregateInputType
  }


  export type MarcadorConsumoAlimentarGroupByOutputType = {
    id: number
    idData: number
    idPessoa: number
    idUsuario: number
    idLocal: number
    saladaCrua: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    legumesVerdurasCozidos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    frutasFrescasSaladaDeFrutas: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    feijao: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    leiteOuIogurte: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    batataFritaBatataDePacoteSalgadosFritos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    hamburgerEmbutidos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosSalgadosSalgadinhoDePacote: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    refrigerante: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    _count: MarcadorConsumoAlimentarCountAggregateOutputType | null
    _avg: MarcadorConsumoAlimentarAvgAggregateOutputType | null
    _sum: MarcadorConsumoAlimentarSumAggregateOutputType | null
    _min: MarcadorConsumoAlimentarMinAggregateOutputType | null
    _max: MarcadorConsumoAlimentarMaxAggregateOutputType | null
  }

  type GetMarcadorConsumoAlimentarGroupByPayload<T extends MarcadorConsumoAlimentarGroupByArgs> = PrismaPromise<
    Array<
      PickArray<MarcadorConsumoAlimentarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarcadorConsumoAlimentarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarcadorConsumoAlimentarGroupByOutputType[P]>
            : GetScalarType<T[P], MarcadorConsumoAlimentarGroupByOutputType[P]>
        }
      >
    >


  export type MarcadorConsumoAlimentarSelect = {
    id?: boolean
    data?: boolean | DataArgs
    idData?: boolean
    pessoa?: boolean | PessoaArgs
    idPessoa?: boolean
    usuario?: boolean | UsuarioArgs
    idUsuario?: boolean
    local?: boolean | LocalArgs
    idLocal?: boolean
    exame?: boolean | ExameArgs
    saladaCrua?: boolean
    legumesVerdurasCozidos?: boolean
    frutasFrescasSaladaDeFrutas?: boolean
    feijao?: boolean
    leiteOuIogurte?: boolean
    batataFritaBatataDePacoteSalgadosFritos?: boolean
    hamburgerEmbutidos?: boolean
    bolachasBiscoitosSalgadosSalgadinhoDePacote?: boolean
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates?: boolean
    refrigerante?: boolean
  }

  export type MarcadorConsumoAlimentarInclude = {
    data?: boolean | DataArgs
    pessoa?: boolean | PessoaArgs
    usuario?: boolean | UsuarioArgs
    local?: boolean | LocalArgs
    exame?: boolean | ExameArgs
  }

  export type MarcadorConsumoAlimentarGetPayload<
    S extends boolean | null | undefined | MarcadorConsumoAlimentarArgs,
    U = keyof S
      > = S extends true
        ? MarcadorConsumoAlimentar
    : S extends undefined
    ? never
    : S extends MarcadorConsumoAlimentarArgs | MarcadorConsumoAlimentarFindManyArgs
    ?'include' extends U
    ? MarcadorConsumoAlimentar  & {
    [P in TrueKeys<S['include']>]:
        P extends 'data' ? DataGetPayload<S['include'][P]> :
        P extends 'pessoa' ? PessoaGetPayload<S['include'][P]> :
        P extends 'usuario' ? UsuarioGetPayload<S['include'][P]> :
        P extends 'local' ? LocalGetPayload<S['include'][P]> :
        P extends 'exame' ? ExameGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'data' ? DataGetPayload<S['select'][P]> :
        P extends 'pessoa' ? PessoaGetPayload<S['select'][P]> :
        P extends 'usuario' ? UsuarioGetPayload<S['select'][P]> :
        P extends 'local' ? LocalGetPayload<S['select'][P]> :
        P extends 'exame' ? ExameGetPayload<S['select'][P]> | null :  P extends keyof MarcadorConsumoAlimentar ? MarcadorConsumoAlimentar[P] : never
  } 
    : MarcadorConsumoAlimentar
  : MarcadorConsumoAlimentar


  type MarcadorConsumoAlimentarCountArgs = Merge<
    Omit<MarcadorConsumoAlimentarFindManyArgs, 'select' | 'include'> & {
      select?: MarcadorConsumoAlimentarCountAggregateInputType | true
    }
  >

  export interface MarcadorConsumoAlimentarDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one MarcadorConsumoAlimentar that matches the filter.
     * @param {MarcadorConsumoAlimentarFindUniqueArgs} args - Arguments to find a MarcadorConsumoAlimentar
     * @example
     * // Get one MarcadorConsumoAlimentar
     * const marcadorConsumoAlimentar = await prisma.marcadorConsumoAlimentar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MarcadorConsumoAlimentarFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MarcadorConsumoAlimentarFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'MarcadorConsumoAlimentar'> extends True ? CheckSelect<T, Prisma__MarcadorConsumoAlimentarClient<MarcadorConsumoAlimentar>, Prisma__MarcadorConsumoAlimentarClient<MarcadorConsumoAlimentarGetPayload<T>>> : CheckSelect<T, Prisma__MarcadorConsumoAlimentarClient<MarcadorConsumoAlimentar | null >, Prisma__MarcadorConsumoAlimentarClient<MarcadorConsumoAlimentarGetPayload<T> | null >>

    /**
     * Find the first MarcadorConsumoAlimentar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcadorConsumoAlimentarFindFirstArgs} args - Arguments to find a MarcadorConsumoAlimentar
     * @example
     * // Get one MarcadorConsumoAlimentar
     * const marcadorConsumoAlimentar = await prisma.marcadorConsumoAlimentar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MarcadorConsumoAlimentarFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MarcadorConsumoAlimentarFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'MarcadorConsumoAlimentar'> extends True ? CheckSelect<T, Prisma__MarcadorConsumoAlimentarClient<MarcadorConsumoAlimentar>, Prisma__MarcadorConsumoAlimentarClient<MarcadorConsumoAlimentarGetPayload<T>>> : CheckSelect<T, Prisma__MarcadorConsumoAlimentarClient<MarcadorConsumoAlimentar | null >, Prisma__MarcadorConsumoAlimentarClient<MarcadorConsumoAlimentarGetPayload<T> | null >>

    /**
     * Find zero or more MarcadorConsumoAlimentars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcadorConsumoAlimentarFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MarcadorConsumoAlimentars
     * const marcadorConsumoAlimentars = await prisma.marcadorConsumoAlimentar.findMany()
     * 
     * // Get first 10 MarcadorConsumoAlimentars
     * const marcadorConsumoAlimentars = await prisma.marcadorConsumoAlimentar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marcadorConsumoAlimentarWithIdOnly = await prisma.marcadorConsumoAlimentar.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MarcadorConsumoAlimentarFindManyArgs>(
      args?: SelectSubset<T, MarcadorConsumoAlimentarFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<MarcadorConsumoAlimentar>>, PrismaPromise<Array<MarcadorConsumoAlimentarGetPayload<T>>>>

    /**
     * Create a MarcadorConsumoAlimentar.
     * @param {MarcadorConsumoAlimentarCreateArgs} args - Arguments to create a MarcadorConsumoAlimentar.
     * @example
     * // Create one MarcadorConsumoAlimentar
     * const MarcadorConsumoAlimentar = await prisma.marcadorConsumoAlimentar.create({
     *   data: {
     *     // ... data to create a MarcadorConsumoAlimentar
     *   }
     * })
     * 
    **/
    create<T extends MarcadorConsumoAlimentarCreateArgs>(
      args: SelectSubset<T, MarcadorConsumoAlimentarCreateArgs>
    ): CheckSelect<T, Prisma__MarcadorConsumoAlimentarClient<MarcadorConsumoAlimentar>, Prisma__MarcadorConsumoAlimentarClient<MarcadorConsumoAlimentarGetPayload<T>>>

    /**
     * Create many MarcadorConsumoAlimentars.
     *     @param {MarcadorConsumoAlimentarCreateManyArgs} args - Arguments to create many MarcadorConsumoAlimentars.
     *     @example
     *     // Create many MarcadorConsumoAlimentars
     *     const marcadorConsumoAlimentar = await prisma.marcadorConsumoAlimentar.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MarcadorConsumoAlimentarCreateManyArgs>(
      args?: SelectSubset<T, MarcadorConsumoAlimentarCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a MarcadorConsumoAlimentar.
     * @param {MarcadorConsumoAlimentarDeleteArgs} args - Arguments to delete one MarcadorConsumoAlimentar.
     * @example
     * // Delete one MarcadorConsumoAlimentar
     * const MarcadorConsumoAlimentar = await prisma.marcadorConsumoAlimentar.delete({
     *   where: {
     *     // ... filter to delete one MarcadorConsumoAlimentar
     *   }
     * })
     * 
    **/
    delete<T extends MarcadorConsumoAlimentarDeleteArgs>(
      args: SelectSubset<T, MarcadorConsumoAlimentarDeleteArgs>
    ): CheckSelect<T, Prisma__MarcadorConsumoAlimentarClient<MarcadorConsumoAlimentar>, Prisma__MarcadorConsumoAlimentarClient<MarcadorConsumoAlimentarGetPayload<T>>>

    /**
     * Update one MarcadorConsumoAlimentar.
     * @param {MarcadorConsumoAlimentarUpdateArgs} args - Arguments to update one MarcadorConsumoAlimentar.
     * @example
     * // Update one MarcadorConsumoAlimentar
     * const marcadorConsumoAlimentar = await prisma.marcadorConsumoAlimentar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MarcadorConsumoAlimentarUpdateArgs>(
      args: SelectSubset<T, MarcadorConsumoAlimentarUpdateArgs>
    ): CheckSelect<T, Prisma__MarcadorConsumoAlimentarClient<MarcadorConsumoAlimentar>, Prisma__MarcadorConsumoAlimentarClient<MarcadorConsumoAlimentarGetPayload<T>>>

    /**
     * Delete zero or more MarcadorConsumoAlimentars.
     * @param {MarcadorConsumoAlimentarDeleteManyArgs} args - Arguments to filter MarcadorConsumoAlimentars to delete.
     * @example
     * // Delete a few MarcadorConsumoAlimentars
     * const { count } = await prisma.marcadorConsumoAlimentar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MarcadorConsumoAlimentarDeleteManyArgs>(
      args?: SelectSubset<T, MarcadorConsumoAlimentarDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarcadorConsumoAlimentars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcadorConsumoAlimentarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MarcadorConsumoAlimentars
     * const marcadorConsumoAlimentar = await prisma.marcadorConsumoAlimentar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MarcadorConsumoAlimentarUpdateManyArgs>(
      args: SelectSubset<T, MarcadorConsumoAlimentarUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one MarcadorConsumoAlimentar.
     * @param {MarcadorConsumoAlimentarUpsertArgs} args - Arguments to update or create a MarcadorConsumoAlimentar.
     * @example
     * // Update or create a MarcadorConsumoAlimentar
     * const marcadorConsumoAlimentar = await prisma.marcadorConsumoAlimentar.upsert({
     *   create: {
     *     // ... data to create a MarcadorConsumoAlimentar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MarcadorConsumoAlimentar we want to update
     *   }
     * })
    **/
    upsert<T extends MarcadorConsumoAlimentarUpsertArgs>(
      args: SelectSubset<T, MarcadorConsumoAlimentarUpsertArgs>
    ): CheckSelect<T, Prisma__MarcadorConsumoAlimentarClient<MarcadorConsumoAlimentar>, Prisma__MarcadorConsumoAlimentarClient<MarcadorConsumoAlimentarGetPayload<T>>>

    /**
     * Count the number of MarcadorConsumoAlimentars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcadorConsumoAlimentarCountArgs} args - Arguments to filter MarcadorConsumoAlimentars to count.
     * @example
     * // Count the number of MarcadorConsumoAlimentars
     * const count = await prisma.marcadorConsumoAlimentar.count({
     *   where: {
     *     // ... the filter for the MarcadorConsumoAlimentars we want to count
     *   }
     * })
    **/
    count<T extends MarcadorConsumoAlimentarCountArgs>(
      args?: Subset<T, MarcadorConsumoAlimentarCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarcadorConsumoAlimentarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MarcadorConsumoAlimentar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcadorConsumoAlimentarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MarcadorConsumoAlimentarAggregateArgs>(args: Subset<T, MarcadorConsumoAlimentarAggregateArgs>): PrismaPromise<GetMarcadorConsumoAlimentarAggregateType<T>>

    /**
     * Group by MarcadorConsumoAlimentar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarcadorConsumoAlimentarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MarcadorConsumoAlimentarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarcadorConsumoAlimentarGroupByArgs['orderBy'] }
        : { orderBy?: MarcadorConsumoAlimentarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MarcadorConsumoAlimentarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarcadorConsumoAlimentarGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for MarcadorConsumoAlimentar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MarcadorConsumoAlimentarClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    data<T extends DataArgs = {}>(args?: Subset<T, DataArgs>): CheckSelect<T, Prisma__DataClient<Data | null >, Prisma__DataClient<DataGetPayload<T> | null >>;

    pessoa<T extends PessoaArgs = {}>(args?: Subset<T, PessoaArgs>): CheckSelect<T, Prisma__PessoaClient<Pessoa | null >, Prisma__PessoaClient<PessoaGetPayload<T> | null >>;

    usuario<T extends UsuarioArgs = {}>(args?: Subset<T, UsuarioArgs>): CheckSelect<T, Prisma__UsuarioClient<Usuario | null >, Prisma__UsuarioClient<UsuarioGetPayload<T> | null >>;

    local<T extends LocalArgs = {}>(args?: Subset<T, LocalArgs>): CheckSelect<T, Prisma__LocalClient<Local | null >, Prisma__LocalClient<LocalGetPayload<T> | null >>;

    exame<T extends ExameArgs = {}>(args?: Subset<T, ExameArgs>): CheckSelect<T, Prisma__ExameClient<Exame | null >, Prisma__ExameClient<ExameGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * MarcadorConsumoAlimentar findUnique
   */
  export type MarcadorConsumoAlimentarFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the MarcadorConsumoAlimentar
     * 
    **/
    select?: MarcadorConsumoAlimentarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MarcadorConsumoAlimentarInclude | null
    /**
     * Throw an Error if a MarcadorConsumoAlimentar can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which MarcadorConsumoAlimentar to fetch.
     * 
    **/
    where: MarcadorConsumoAlimentarWhereUniqueInput
  }


  /**
   * MarcadorConsumoAlimentar findFirst
   */
  export type MarcadorConsumoAlimentarFindFirstArgs = {
    /**
     * Select specific fields to fetch from the MarcadorConsumoAlimentar
     * 
    **/
    select?: MarcadorConsumoAlimentarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MarcadorConsumoAlimentarInclude | null
    /**
     * Throw an Error if a MarcadorConsumoAlimentar can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which MarcadorConsumoAlimentar to fetch.
     * 
    **/
    where?: MarcadorConsumoAlimentarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarcadorConsumoAlimentars to fetch.
     * 
    **/
    orderBy?: Enumerable<MarcadorConsumoAlimentarOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarcadorConsumoAlimentars.
     * 
    **/
    cursor?: MarcadorConsumoAlimentarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarcadorConsumoAlimentars from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarcadorConsumoAlimentars.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarcadorConsumoAlimentars.
     * 
    **/
    distinct?: Enumerable<MarcadorConsumoAlimentarScalarFieldEnum>
  }


  /**
   * MarcadorConsumoAlimentar findMany
   */
  export type MarcadorConsumoAlimentarFindManyArgs = {
    /**
     * Select specific fields to fetch from the MarcadorConsumoAlimentar
     * 
    **/
    select?: MarcadorConsumoAlimentarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MarcadorConsumoAlimentarInclude | null
    /**
     * Filter, which MarcadorConsumoAlimentars to fetch.
     * 
    **/
    where?: MarcadorConsumoAlimentarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarcadorConsumoAlimentars to fetch.
     * 
    **/
    orderBy?: Enumerable<MarcadorConsumoAlimentarOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MarcadorConsumoAlimentars.
     * 
    **/
    cursor?: MarcadorConsumoAlimentarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarcadorConsumoAlimentars from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarcadorConsumoAlimentars.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MarcadorConsumoAlimentarScalarFieldEnum>
  }


  /**
   * MarcadorConsumoAlimentar create
   */
  export type MarcadorConsumoAlimentarCreateArgs = {
    /**
     * Select specific fields to fetch from the MarcadorConsumoAlimentar
     * 
    **/
    select?: MarcadorConsumoAlimentarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MarcadorConsumoAlimentarInclude | null
    /**
     * The data needed to create a MarcadorConsumoAlimentar.
     * 
    **/
    data: XOR<MarcadorConsumoAlimentarCreateInput, MarcadorConsumoAlimentarUncheckedCreateInput>
  }


  /**
   * MarcadorConsumoAlimentar createMany
   */
  export type MarcadorConsumoAlimentarCreateManyArgs = {
    /**
     * The data used to create many MarcadorConsumoAlimentars.
     * 
    **/
    data: Enumerable<MarcadorConsumoAlimentarCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * MarcadorConsumoAlimentar update
   */
  export type MarcadorConsumoAlimentarUpdateArgs = {
    /**
     * Select specific fields to fetch from the MarcadorConsumoAlimentar
     * 
    **/
    select?: MarcadorConsumoAlimentarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MarcadorConsumoAlimentarInclude | null
    /**
     * The data needed to update a MarcadorConsumoAlimentar.
     * 
    **/
    data: XOR<MarcadorConsumoAlimentarUpdateInput, MarcadorConsumoAlimentarUncheckedUpdateInput>
    /**
     * Choose, which MarcadorConsumoAlimentar to update.
     * 
    **/
    where: MarcadorConsumoAlimentarWhereUniqueInput
  }


  /**
   * MarcadorConsumoAlimentar updateMany
   */
  export type MarcadorConsumoAlimentarUpdateManyArgs = {
    /**
     * The data used to update MarcadorConsumoAlimentars.
     * 
    **/
    data: XOR<MarcadorConsumoAlimentarUpdateManyMutationInput, MarcadorConsumoAlimentarUncheckedUpdateManyInput>
    /**
     * Filter which MarcadorConsumoAlimentars to update
     * 
    **/
    where?: MarcadorConsumoAlimentarWhereInput
  }


  /**
   * MarcadorConsumoAlimentar upsert
   */
  export type MarcadorConsumoAlimentarUpsertArgs = {
    /**
     * Select specific fields to fetch from the MarcadorConsumoAlimentar
     * 
    **/
    select?: MarcadorConsumoAlimentarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MarcadorConsumoAlimentarInclude | null
    /**
     * The filter to search for the MarcadorConsumoAlimentar to update in case it exists.
     * 
    **/
    where: MarcadorConsumoAlimentarWhereUniqueInput
    /**
     * In case the MarcadorConsumoAlimentar found by the `where` argument doesn't exist, create a new MarcadorConsumoAlimentar with this data.
     * 
    **/
    create: XOR<MarcadorConsumoAlimentarCreateInput, MarcadorConsumoAlimentarUncheckedCreateInput>
    /**
     * In case the MarcadorConsumoAlimentar was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<MarcadorConsumoAlimentarUpdateInput, MarcadorConsumoAlimentarUncheckedUpdateInput>
  }


  /**
   * MarcadorConsumoAlimentar delete
   */
  export type MarcadorConsumoAlimentarDeleteArgs = {
    /**
     * Select specific fields to fetch from the MarcadorConsumoAlimentar
     * 
    **/
    select?: MarcadorConsumoAlimentarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MarcadorConsumoAlimentarInclude | null
    /**
     * Filter which MarcadorConsumoAlimentar to delete.
     * 
    **/
    where: MarcadorConsumoAlimentarWhereUniqueInput
  }


  /**
   * MarcadorConsumoAlimentar deleteMany
   */
  export type MarcadorConsumoAlimentarDeleteManyArgs = {
    /**
     * Filter which MarcadorConsumoAlimentars to delete
     * 
    **/
    where?: MarcadorConsumoAlimentarWhereInput
  }


  /**
   * MarcadorConsumoAlimentar without action
   */
  export type MarcadorConsumoAlimentarArgs = {
    /**
     * Select specific fields to fetch from the MarcadorConsumoAlimentar
     * 
    **/
    select?: MarcadorConsumoAlimentarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MarcadorConsumoAlimentarInclude | null
  }



  /**
   * Model Usuario
   */


  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
    idPertenceEquipe: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
    idPertenceEquipe: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    ativo: boolean | null
    papel: Papel | null
    idPertenceEquipe: number | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    ativo: boolean | null
    papel: Papel | null
    idPertenceEquipe: number | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    ativo: number
    papel: number
    idPertenceEquipe: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
    idPertenceEquipe?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
    idPertenceEquipe?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    ativo?: true
    papel?: true
    idPertenceEquipe?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    ativo?: true
    papel?: true
    idPertenceEquipe?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    ativo?: true
    papel?: true
    idPertenceEquipe?: true
    _all?: true
  }

  export type UsuarioAggregateArgs = {
    /**
     * Filter which Usuario to aggregate.
     * 
    **/
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     * 
    **/
    orderBy?: Enumerable<UsuarioOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs = {
    where?: UsuarioWhereInput
    orderBy?: Enumerable<UsuarioOrderByWithAggregationInput>
    by: Array<UsuarioScalarFieldEnum>
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }


  export type UsuarioGroupByOutputType = {
    id: number
    nome: string | null
    email: string
    senha: string
    ativo: boolean
    papel: Papel
    idPertenceEquipe: number | null
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    ativo?: boolean
    papel?: boolean
    exames?: boolean | ExameFindManyArgs
    avaliacaoSocioEconomica?: boolean | AvaliacaoSocioEconomicaFindManyArgs
    MarcadorConsumoAlimentar?: boolean | MarcadorConsumoAlimentarFindManyArgs
    coordenaEquipe?: boolean | EquipeArgs
    idPertenceEquipe?: boolean
    pertenceEquipe?: boolean | EquipeArgs
    _count?: boolean | UsuarioCountOutputTypeArgs
  }

  export type UsuarioInclude = {
    exames?: boolean | ExameFindManyArgs
    avaliacaoSocioEconomica?: boolean | AvaliacaoSocioEconomicaFindManyArgs
    MarcadorConsumoAlimentar?: boolean | MarcadorConsumoAlimentarFindManyArgs
    coordenaEquipe?: boolean | EquipeArgs
    pertenceEquipe?: boolean | EquipeArgs
    _count?: boolean | UsuarioCountOutputTypeArgs
  }

  export type UsuarioGetPayload<
    S extends boolean | null | undefined | UsuarioArgs,
    U = keyof S
      > = S extends true
        ? Usuario
    : S extends undefined
    ? never
    : S extends UsuarioArgs | UsuarioFindManyArgs
    ?'include' extends U
    ? Usuario  & {
    [P in TrueKeys<S['include']>]:
        P extends 'exames' ? Array < ExameGetPayload<S['include'][P]>>  :
        P extends 'avaliacaoSocioEconomica' ? Array < AvaliacaoSocioEconomicaGetPayload<S['include'][P]>>  :
        P extends 'MarcadorConsumoAlimentar' ? Array < MarcadorConsumoAlimentarGetPayload<S['include'][P]>>  :
        P extends 'coordenaEquipe' ? EquipeGetPayload<S['include'][P]> | null :
        P extends 'pertenceEquipe' ? EquipeGetPayload<S['include'][P]> | null :
        P extends '_count' ? UsuarioCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'exames' ? Array < ExameGetPayload<S['select'][P]>>  :
        P extends 'avaliacaoSocioEconomica' ? Array < AvaliacaoSocioEconomicaGetPayload<S['select'][P]>>  :
        P extends 'MarcadorConsumoAlimentar' ? Array < MarcadorConsumoAlimentarGetPayload<S['select'][P]>>  :
        P extends 'coordenaEquipe' ? EquipeGetPayload<S['select'][P]> | null :
        P extends 'pertenceEquipe' ? EquipeGetPayload<S['select'][P]> | null :
        P extends '_count' ? UsuarioCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Usuario ? Usuario[P] : never
  } 
    : Usuario
  : Usuario


  type UsuarioCountArgs = Merge<
    Omit<UsuarioFindManyArgs, 'select' | 'include'> & {
      select?: UsuarioCountAggregateInputType | true
    }
  >

  export interface UsuarioDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsuarioFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UsuarioFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Usuario'> extends True ? CheckSelect<T, Prisma__UsuarioClient<Usuario>, Prisma__UsuarioClient<UsuarioGetPayload<T>>> : CheckSelect<T, Prisma__UsuarioClient<Usuario | null >, Prisma__UsuarioClient<UsuarioGetPayload<T> | null >>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsuarioFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UsuarioFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Usuario'> extends True ? CheckSelect<T, Prisma__UsuarioClient<Usuario>, Prisma__UsuarioClient<UsuarioGetPayload<T>>> : CheckSelect<T, Prisma__UsuarioClient<Usuario | null >, Prisma__UsuarioClient<UsuarioGetPayload<T> | null >>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UsuarioFindManyArgs>(
      args?: SelectSubset<T, UsuarioFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Usuario>>, PrismaPromise<Array<UsuarioGetPayload<T>>>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
    **/
    create<T extends UsuarioCreateArgs>(
      args: SelectSubset<T, UsuarioCreateArgs>
    ): CheckSelect<T, Prisma__UsuarioClient<Usuario>, Prisma__UsuarioClient<UsuarioGetPayload<T>>>

    /**
     * Create many Usuarios.
     *     @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     *     @example
     *     // Create many Usuarios
     *     const usuario = await prisma.usuario.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UsuarioCreateManyArgs>(
      args?: SelectSubset<T, UsuarioCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
    **/
    delete<T extends UsuarioDeleteArgs>(
      args: SelectSubset<T, UsuarioDeleteArgs>
    ): CheckSelect<T, Prisma__UsuarioClient<Usuario>, Prisma__UsuarioClient<UsuarioGetPayload<T>>>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsuarioUpdateArgs>(
      args: SelectSubset<T, UsuarioUpdateArgs>
    ): CheckSelect<T, Prisma__UsuarioClient<Usuario>, Prisma__UsuarioClient<UsuarioGetPayload<T>>>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsuarioDeleteManyArgs>(
      args?: SelectSubset<T, UsuarioDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsuarioUpdateManyArgs>(
      args: SelectSubset<T, UsuarioUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
    **/
    upsert<T extends UsuarioUpsertArgs>(
      args: SelectSubset<T, UsuarioUpsertArgs>
    ): CheckSelect<T, Prisma__UsuarioClient<Usuario>, Prisma__UsuarioClient<UsuarioGetPayload<T>>>

    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UsuarioClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    exames<T extends ExameFindManyArgs = {}>(args?: Subset<T, ExameFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Exame>>, PrismaPromise<Array<ExameGetPayload<T>>>>;

    avaliacaoSocioEconomica<T extends AvaliacaoSocioEconomicaFindManyArgs = {}>(args?: Subset<T, AvaliacaoSocioEconomicaFindManyArgs>): CheckSelect<T, PrismaPromise<Array<AvaliacaoSocioEconomica>>, PrismaPromise<Array<AvaliacaoSocioEconomicaGetPayload<T>>>>;

    MarcadorConsumoAlimentar<T extends MarcadorConsumoAlimentarFindManyArgs = {}>(args?: Subset<T, MarcadorConsumoAlimentarFindManyArgs>): CheckSelect<T, PrismaPromise<Array<MarcadorConsumoAlimentar>>, PrismaPromise<Array<MarcadorConsumoAlimentarGetPayload<T>>>>;

    coordenaEquipe<T extends EquipeArgs = {}>(args?: Subset<T, EquipeArgs>): CheckSelect<T, Prisma__EquipeClient<Equipe | null >, Prisma__EquipeClient<EquipeGetPayload<T> | null >>;

    pertenceEquipe<T extends EquipeArgs = {}>(args?: Subset<T, EquipeArgs>): CheckSelect<T, Prisma__EquipeClient<Equipe | null >, Prisma__EquipeClient<EquipeGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Usuario
     * 
    **/
    select?: UsuarioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsuarioInclude | null
    /**
     * Throw an Error if a Usuario can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Usuario to fetch.
     * 
    **/
    where: UsuarioWhereUniqueInput
  }


  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Usuario
     * 
    **/
    select?: UsuarioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsuarioInclude | null
    /**
     * Throw an Error if a Usuario can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Usuario to fetch.
     * 
    **/
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     * 
    **/
    orderBy?: Enumerable<UsuarioOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     * 
    **/
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     * 
    **/
    distinct?: Enumerable<UsuarioScalarFieldEnum>
  }


  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs = {
    /**
     * Select specific fields to fetch from the Usuario
     * 
    **/
    select?: UsuarioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsuarioInclude | null
    /**
     * Filter, which Usuarios to fetch.
     * 
    **/
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     * 
    **/
    orderBy?: Enumerable<UsuarioOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     * 
    **/
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UsuarioScalarFieldEnum>
  }


  /**
   * Usuario create
   */
  export type UsuarioCreateArgs = {
    /**
     * Select specific fields to fetch from the Usuario
     * 
    **/
    select?: UsuarioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsuarioInclude | null
    /**
     * The data needed to create a Usuario.
     * 
    **/
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }


  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs = {
    /**
     * The data used to create many Usuarios.
     * 
    **/
    data: Enumerable<UsuarioCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs = {
    /**
     * Select specific fields to fetch from the Usuario
     * 
    **/
    select?: UsuarioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsuarioInclude | null
    /**
     * The data needed to update a Usuario.
     * 
    **/
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     * 
    **/
    where: UsuarioWhereUniqueInput
  }


  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs = {
    /**
     * The data used to update Usuarios.
     * 
    **/
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     * 
    **/
    where?: UsuarioWhereInput
  }


  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs = {
    /**
     * Select specific fields to fetch from the Usuario
     * 
    **/
    select?: UsuarioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsuarioInclude | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     * 
    **/
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     * 
    **/
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }


  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs = {
    /**
     * Select specific fields to fetch from the Usuario
     * 
    **/
    select?: UsuarioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsuarioInclude | null
    /**
     * Filter which Usuario to delete.
     * 
    **/
    where: UsuarioWhereUniqueInput
  }


  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs = {
    /**
     * Filter which Usuarios to delete
     * 
    **/
    where?: UsuarioWhereInput
  }


  /**
   * Usuario without action
   */
  export type UsuarioArgs = {
    /**
     * Select specific fields to fetch from the Usuario
     * 
    **/
    select?: UsuarioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsuarioInclude | null
  }



  /**
   * Model Equipe
   */


  export type AggregateEquipe = {
    _count: EquipeCountAggregateOutputType | null
    _avg: EquipeAvgAggregateOutputType | null
    _sum: EquipeSumAggregateOutputType | null
    _min: EquipeMinAggregateOutputType | null
    _max: EquipeMaxAggregateOutputType | null
  }

  export type EquipeAvgAggregateOutputType = {
    id: number | null
    idCoordenador: number | null
  }

  export type EquipeSumAggregateOutputType = {
    id: number | null
    idCoordenador: number | null
  }

  export type EquipeMinAggregateOutputType = {
    id: number | null
    idCoordenador: number | null
  }

  export type EquipeMaxAggregateOutputType = {
    id: number | null
    idCoordenador: number | null
  }

  export type EquipeCountAggregateOutputType = {
    id: number
    idCoordenador: number
    _all: number
  }


  export type EquipeAvgAggregateInputType = {
    id?: true
    idCoordenador?: true
  }

  export type EquipeSumAggregateInputType = {
    id?: true
    idCoordenador?: true
  }

  export type EquipeMinAggregateInputType = {
    id?: true
    idCoordenador?: true
  }

  export type EquipeMaxAggregateInputType = {
    id?: true
    idCoordenador?: true
  }

  export type EquipeCountAggregateInputType = {
    id?: true
    idCoordenador?: true
    _all?: true
  }

  export type EquipeAggregateArgs = {
    /**
     * Filter which Equipe to aggregate.
     * 
    **/
    where?: EquipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipes to fetch.
     * 
    **/
    orderBy?: Enumerable<EquipeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: EquipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Equipes
    **/
    _count?: true | EquipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipeMaxAggregateInputType
  }

  export type GetEquipeAggregateType<T extends EquipeAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipe[P]>
      : GetScalarType<T[P], AggregateEquipe[P]>
  }




  export type EquipeGroupByArgs = {
    where?: EquipeWhereInput
    orderBy?: Enumerable<EquipeOrderByWithAggregationInput>
    by: Array<EquipeScalarFieldEnum>
    having?: EquipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipeCountAggregateInputType | true
    _avg?: EquipeAvgAggregateInputType
    _sum?: EquipeSumAggregateInputType
    _min?: EquipeMinAggregateInputType
    _max?: EquipeMaxAggregateInputType
  }


  export type EquipeGroupByOutputType = {
    id: number
    idCoordenador: number
    _count: EquipeCountAggregateOutputType | null
    _avg: EquipeAvgAggregateOutputType | null
    _sum: EquipeSumAggregateOutputType | null
    _min: EquipeMinAggregateOutputType | null
    _max: EquipeMaxAggregateOutputType | null
  }

  type GetEquipeGroupByPayload<T extends EquipeGroupByArgs> = PrismaPromise<
    Array<
      PickArray<EquipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipeGroupByOutputType[P]>
            : GetScalarType<T[P], EquipeGroupByOutputType[P]>
        }
      >
    >


  export type EquipeSelect = {
    id?: boolean
    coordenador?: boolean | UsuarioArgs
    idCoordenador?: boolean
    integrantes?: boolean | UsuarioFindManyArgs
    _count?: boolean | EquipeCountOutputTypeArgs
  }

  export type EquipeInclude = {
    coordenador?: boolean | UsuarioArgs
    integrantes?: boolean | UsuarioFindManyArgs
    _count?: boolean | EquipeCountOutputTypeArgs
  }

  export type EquipeGetPayload<
    S extends boolean | null | undefined | EquipeArgs,
    U = keyof S
      > = S extends true
        ? Equipe
    : S extends undefined
    ? never
    : S extends EquipeArgs | EquipeFindManyArgs
    ?'include' extends U
    ? Equipe  & {
    [P in TrueKeys<S['include']>]:
        P extends 'coordenador' ? UsuarioGetPayload<S['include'][P]> :
        P extends 'integrantes' ? Array < UsuarioGetPayload<S['include'][P]>>  :
        P extends '_count' ? EquipeCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'coordenador' ? UsuarioGetPayload<S['select'][P]> :
        P extends 'integrantes' ? Array < UsuarioGetPayload<S['select'][P]>>  :
        P extends '_count' ? EquipeCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Equipe ? Equipe[P] : never
  } 
    : Equipe
  : Equipe


  type EquipeCountArgs = Merge<
    Omit<EquipeFindManyArgs, 'select' | 'include'> & {
      select?: EquipeCountAggregateInputType | true
    }
  >

  export interface EquipeDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Equipe that matches the filter.
     * @param {EquipeFindUniqueArgs} args - Arguments to find a Equipe
     * @example
     * // Get one Equipe
     * const equipe = await prisma.equipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EquipeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EquipeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Equipe'> extends True ? CheckSelect<T, Prisma__EquipeClient<Equipe>, Prisma__EquipeClient<EquipeGetPayload<T>>> : CheckSelect<T, Prisma__EquipeClient<Equipe | null >, Prisma__EquipeClient<EquipeGetPayload<T> | null >>

    /**
     * Find the first Equipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeFindFirstArgs} args - Arguments to find a Equipe
     * @example
     * // Get one Equipe
     * const equipe = await prisma.equipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EquipeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EquipeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Equipe'> extends True ? CheckSelect<T, Prisma__EquipeClient<Equipe>, Prisma__EquipeClient<EquipeGetPayload<T>>> : CheckSelect<T, Prisma__EquipeClient<Equipe | null >, Prisma__EquipeClient<EquipeGetPayload<T> | null >>

    /**
     * Find zero or more Equipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Equipes
     * const equipes = await prisma.equipe.findMany()
     * 
     * // Get first 10 Equipes
     * const equipes = await prisma.equipe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipeWithIdOnly = await prisma.equipe.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EquipeFindManyArgs>(
      args?: SelectSubset<T, EquipeFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Equipe>>, PrismaPromise<Array<EquipeGetPayload<T>>>>

    /**
     * Create a Equipe.
     * @param {EquipeCreateArgs} args - Arguments to create a Equipe.
     * @example
     * // Create one Equipe
     * const Equipe = await prisma.equipe.create({
     *   data: {
     *     // ... data to create a Equipe
     *   }
     * })
     * 
    **/
    create<T extends EquipeCreateArgs>(
      args: SelectSubset<T, EquipeCreateArgs>
    ): CheckSelect<T, Prisma__EquipeClient<Equipe>, Prisma__EquipeClient<EquipeGetPayload<T>>>

    /**
     * Create many Equipes.
     *     @param {EquipeCreateManyArgs} args - Arguments to create many Equipes.
     *     @example
     *     // Create many Equipes
     *     const equipe = await prisma.equipe.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EquipeCreateManyArgs>(
      args?: SelectSubset<T, EquipeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Equipe.
     * @param {EquipeDeleteArgs} args - Arguments to delete one Equipe.
     * @example
     * // Delete one Equipe
     * const Equipe = await prisma.equipe.delete({
     *   where: {
     *     // ... filter to delete one Equipe
     *   }
     * })
     * 
    **/
    delete<T extends EquipeDeleteArgs>(
      args: SelectSubset<T, EquipeDeleteArgs>
    ): CheckSelect<T, Prisma__EquipeClient<Equipe>, Prisma__EquipeClient<EquipeGetPayload<T>>>

    /**
     * Update one Equipe.
     * @param {EquipeUpdateArgs} args - Arguments to update one Equipe.
     * @example
     * // Update one Equipe
     * const equipe = await prisma.equipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EquipeUpdateArgs>(
      args: SelectSubset<T, EquipeUpdateArgs>
    ): CheckSelect<T, Prisma__EquipeClient<Equipe>, Prisma__EquipeClient<EquipeGetPayload<T>>>

    /**
     * Delete zero or more Equipes.
     * @param {EquipeDeleteManyArgs} args - Arguments to filter Equipes to delete.
     * @example
     * // Delete a few Equipes
     * const { count } = await prisma.equipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EquipeDeleteManyArgs>(
      args?: SelectSubset<T, EquipeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Equipes
     * const equipe = await prisma.equipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EquipeUpdateManyArgs>(
      args: SelectSubset<T, EquipeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Equipe.
     * @param {EquipeUpsertArgs} args - Arguments to update or create a Equipe.
     * @example
     * // Update or create a Equipe
     * const equipe = await prisma.equipe.upsert({
     *   create: {
     *     // ... data to create a Equipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Equipe we want to update
     *   }
     * })
    **/
    upsert<T extends EquipeUpsertArgs>(
      args: SelectSubset<T, EquipeUpsertArgs>
    ): CheckSelect<T, Prisma__EquipeClient<Equipe>, Prisma__EquipeClient<EquipeGetPayload<T>>>

    /**
     * Count the number of Equipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeCountArgs} args - Arguments to filter Equipes to count.
     * @example
     * // Count the number of Equipes
     * const count = await prisma.equipe.count({
     *   where: {
     *     // ... the filter for the Equipes we want to count
     *   }
     * })
    **/
    count<T extends EquipeCountArgs>(
      args?: Subset<T, EquipeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Equipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EquipeAggregateArgs>(args: Subset<T, EquipeAggregateArgs>): PrismaPromise<GetEquipeAggregateType<T>>

    /**
     * Group by Equipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EquipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipeGroupByArgs['orderBy'] }
        : { orderBy?: EquipeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EquipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipeGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Equipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EquipeClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    coordenador<T extends UsuarioArgs = {}>(args?: Subset<T, UsuarioArgs>): CheckSelect<T, Prisma__UsuarioClient<Usuario | null >, Prisma__UsuarioClient<UsuarioGetPayload<T> | null >>;

    integrantes<T extends UsuarioFindManyArgs = {}>(args?: Subset<T, UsuarioFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Usuario>>, PrismaPromise<Array<UsuarioGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Equipe findUnique
   */
  export type EquipeFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Equipe
     * 
    **/
    select?: EquipeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EquipeInclude | null
    /**
     * Throw an Error if a Equipe can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Equipe to fetch.
     * 
    **/
    where: EquipeWhereUniqueInput
  }


  /**
   * Equipe findFirst
   */
  export type EquipeFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Equipe
     * 
    **/
    select?: EquipeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EquipeInclude | null
    /**
     * Throw an Error if a Equipe can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Equipe to fetch.
     * 
    **/
    where?: EquipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipes to fetch.
     * 
    **/
    orderBy?: Enumerable<EquipeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipes.
     * 
    **/
    cursor?: EquipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipes.
     * 
    **/
    distinct?: Enumerable<EquipeScalarFieldEnum>
  }


  /**
   * Equipe findMany
   */
  export type EquipeFindManyArgs = {
    /**
     * Select specific fields to fetch from the Equipe
     * 
    **/
    select?: EquipeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EquipeInclude | null
    /**
     * Filter, which Equipes to fetch.
     * 
    **/
    where?: EquipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipes to fetch.
     * 
    **/
    orderBy?: Enumerable<EquipeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Equipes.
     * 
    **/
    cursor?: EquipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<EquipeScalarFieldEnum>
  }


  /**
   * Equipe create
   */
  export type EquipeCreateArgs = {
    /**
     * Select specific fields to fetch from the Equipe
     * 
    **/
    select?: EquipeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EquipeInclude | null
    /**
     * The data needed to create a Equipe.
     * 
    **/
    data: XOR<EquipeCreateInput, EquipeUncheckedCreateInput>
  }


  /**
   * Equipe createMany
   */
  export type EquipeCreateManyArgs = {
    /**
     * The data used to create many Equipes.
     * 
    **/
    data: Enumerable<EquipeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Equipe update
   */
  export type EquipeUpdateArgs = {
    /**
     * Select specific fields to fetch from the Equipe
     * 
    **/
    select?: EquipeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EquipeInclude | null
    /**
     * The data needed to update a Equipe.
     * 
    **/
    data: XOR<EquipeUpdateInput, EquipeUncheckedUpdateInput>
    /**
     * Choose, which Equipe to update.
     * 
    **/
    where: EquipeWhereUniqueInput
  }


  /**
   * Equipe updateMany
   */
  export type EquipeUpdateManyArgs = {
    /**
     * The data used to update Equipes.
     * 
    **/
    data: XOR<EquipeUpdateManyMutationInput, EquipeUncheckedUpdateManyInput>
    /**
     * Filter which Equipes to update
     * 
    **/
    where?: EquipeWhereInput
  }


  /**
   * Equipe upsert
   */
  export type EquipeUpsertArgs = {
    /**
     * Select specific fields to fetch from the Equipe
     * 
    **/
    select?: EquipeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EquipeInclude | null
    /**
     * The filter to search for the Equipe to update in case it exists.
     * 
    **/
    where: EquipeWhereUniqueInput
    /**
     * In case the Equipe found by the `where` argument doesn't exist, create a new Equipe with this data.
     * 
    **/
    create: XOR<EquipeCreateInput, EquipeUncheckedCreateInput>
    /**
     * In case the Equipe was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<EquipeUpdateInput, EquipeUncheckedUpdateInput>
  }


  /**
   * Equipe delete
   */
  export type EquipeDeleteArgs = {
    /**
     * Select specific fields to fetch from the Equipe
     * 
    **/
    select?: EquipeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EquipeInclude | null
    /**
     * Filter which Equipe to delete.
     * 
    **/
    where: EquipeWhereUniqueInput
  }


  /**
   * Equipe deleteMany
   */
  export type EquipeDeleteManyArgs = {
    /**
     * Filter which Equipes to delete
     * 
    **/
    where?: EquipeWhereInput
  }


  /**
   * Equipe without action
   */
  export type EquipeArgs = {
    /**
     * Select specific fields to fetch from the Equipe
     * 
    **/
    select?: EquipeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EquipeInclude | null
  }



  /**
   * Model Data
   */


  export type AggregateData = {
    _count: DataCountAggregateOutputType | null
    _avg: DataAvgAggregateOutputType | null
    _sum: DataSumAggregateOutputType | null
    _min: DataMinAggregateOutputType | null
    _max: DataMaxAggregateOutputType | null
  }

  export type DataAvgAggregateOutputType = {
    id: number | null
    dia: number | null
    mes: number | null
    ano: number | null
  }

  export type DataSumAggregateOutputType = {
    id: number | null
    dia: number | null
    mes: number | null
    ano: number | null
  }

  export type DataMinAggregateOutputType = {
    id: number | null
    dia: number | null
    mes: number | null
    ano: number | null
  }

  export type DataMaxAggregateOutputType = {
    id: number | null
    dia: number | null
    mes: number | null
    ano: number | null
  }

  export type DataCountAggregateOutputType = {
    id: number
    dia: number
    mes: number
    ano: number
    _all: number
  }


  export type DataAvgAggregateInputType = {
    id?: true
    dia?: true
    mes?: true
    ano?: true
  }

  export type DataSumAggregateInputType = {
    id?: true
    dia?: true
    mes?: true
    ano?: true
  }

  export type DataMinAggregateInputType = {
    id?: true
    dia?: true
    mes?: true
    ano?: true
  }

  export type DataMaxAggregateInputType = {
    id?: true
    dia?: true
    mes?: true
    ano?: true
  }

  export type DataCountAggregateInputType = {
    id?: true
    dia?: true
    mes?: true
    ano?: true
    _all?: true
  }

  export type DataAggregateArgs = {
    /**
     * Filter which Data to aggregate.
     * 
    **/
    where?: DataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Data to fetch.
     * 
    **/
    orderBy?: Enumerable<DataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: DataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Data from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Data.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Data
    **/
    _count?: true | DataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataMaxAggregateInputType
  }

  export type GetDataAggregateType<T extends DataAggregateArgs> = {
        [P in keyof T & keyof AggregateData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateData[P]>
      : GetScalarType<T[P], AggregateData[P]>
  }




  export type DataGroupByArgs = {
    where?: DataWhereInput
    orderBy?: Enumerable<DataOrderByWithAggregationInput>
    by: Array<DataScalarFieldEnum>
    having?: DataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataCountAggregateInputType | true
    _avg?: DataAvgAggregateInputType
    _sum?: DataSumAggregateInputType
    _min?: DataMinAggregateInputType
    _max?: DataMaxAggregateInputType
  }


  export type DataGroupByOutputType = {
    id: number
    dia: number
    mes: number
    ano: number
    _count: DataCountAggregateOutputType | null
    _avg: DataAvgAggregateOutputType | null
    _sum: DataSumAggregateOutputType | null
    _min: DataMinAggregateOutputType | null
    _max: DataMaxAggregateOutputType | null
  }

  type GetDataGroupByPayload<T extends DataGroupByArgs> = PrismaPromise<
    Array<
      PickArray<DataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataGroupByOutputType[P]>
            : GetScalarType<T[P], DataGroupByOutputType[P]>
        }
      >
    >


  export type DataSelect = {
    id?: boolean
    dia?: boolean
    mes?: boolean
    ano?: boolean
    exames?: boolean | ExameFindManyArgs
    avaliacaoSocioEconomica?: boolean | AvaliacaoSocioEconomicaFindManyArgs
    MarcadorConsumoAlimentar?: boolean | MarcadorConsumoAlimentarFindManyArgs
    _count?: boolean | DataCountOutputTypeArgs
  }

  export type DataInclude = {
    exames?: boolean | ExameFindManyArgs
    avaliacaoSocioEconomica?: boolean | AvaliacaoSocioEconomicaFindManyArgs
    MarcadorConsumoAlimentar?: boolean | MarcadorConsumoAlimentarFindManyArgs
    _count?: boolean | DataCountOutputTypeArgs
  }

  export type DataGetPayload<
    S extends boolean | null | undefined | DataArgs,
    U = keyof S
      > = S extends true
        ? Data
    : S extends undefined
    ? never
    : S extends DataArgs | DataFindManyArgs
    ?'include' extends U
    ? Data  & {
    [P in TrueKeys<S['include']>]:
        P extends 'exames' ? Array < ExameGetPayload<S['include'][P]>>  :
        P extends 'avaliacaoSocioEconomica' ? Array < AvaliacaoSocioEconomicaGetPayload<S['include'][P]>>  :
        P extends 'MarcadorConsumoAlimentar' ? Array < MarcadorConsumoAlimentarGetPayload<S['include'][P]>>  :
        P extends '_count' ? DataCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'exames' ? Array < ExameGetPayload<S['select'][P]>>  :
        P extends 'avaliacaoSocioEconomica' ? Array < AvaliacaoSocioEconomicaGetPayload<S['select'][P]>>  :
        P extends 'MarcadorConsumoAlimentar' ? Array < MarcadorConsumoAlimentarGetPayload<S['select'][P]>>  :
        P extends '_count' ? DataCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Data ? Data[P] : never
  } 
    : Data
  : Data


  type DataCountArgs = Merge<
    Omit<DataFindManyArgs, 'select' | 'include'> & {
      select?: DataCountAggregateInputType | true
    }
  >

  export interface DataDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Data that matches the filter.
     * @param {DataFindUniqueArgs} args - Arguments to find a Data
     * @example
     * // Get one Data
     * const data = await prisma.data.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DataFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DataFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Data'> extends True ? CheckSelect<T, Prisma__DataClient<Data>, Prisma__DataClient<DataGetPayload<T>>> : CheckSelect<T, Prisma__DataClient<Data | null >, Prisma__DataClient<DataGetPayload<T> | null >>

    /**
     * Find the first Data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataFindFirstArgs} args - Arguments to find a Data
     * @example
     * // Get one Data
     * const data = await prisma.data.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DataFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DataFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Data'> extends True ? CheckSelect<T, Prisma__DataClient<Data>, Prisma__DataClient<DataGetPayload<T>>> : CheckSelect<T, Prisma__DataClient<Data | null >, Prisma__DataClient<DataGetPayload<T> | null >>

    /**
     * Find zero or more Data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Data
     * const data = await prisma.data.findMany()
     * 
     * // Get first 10 Data
     * const data = await prisma.data.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dataWithIdOnly = await prisma.data.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DataFindManyArgs>(
      args?: SelectSubset<T, DataFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Data>>, PrismaPromise<Array<DataGetPayload<T>>>>

    /**
     * Create a Data.
     * @param {DataCreateArgs} args - Arguments to create a Data.
     * @example
     * // Create one Data
     * const Data = await prisma.data.create({
     *   data: {
     *     // ... data to create a Data
     *   }
     * })
     * 
    **/
    create<T extends DataCreateArgs>(
      args: SelectSubset<T, DataCreateArgs>
    ): CheckSelect<T, Prisma__DataClient<Data>, Prisma__DataClient<DataGetPayload<T>>>

    /**
     * Create many Data.
     *     @param {DataCreateManyArgs} args - Arguments to create many Data.
     *     @example
     *     // Create many Data
     *     const data = await prisma.data.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DataCreateManyArgs>(
      args?: SelectSubset<T, DataCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Data.
     * @param {DataDeleteArgs} args - Arguments to delete one Data.
     * @example
     * // Delete one Data
     * const Data = await prisma.data.delete({
     *   where: {
     *     // ... filter to delete one Data
     *   }
     * })
     * 
    **/
    delete<T extends DataDeleteArgs>(
      args: SelectSubset<T, DataDeleteArgs>
    ): CheckSelect<T, Prisma__DataClient<Data>, Prisma__DataClient<DataGetPayload<T>>>

    /**
     * Update one Data.
     * @param {DataUpdateArgs} args - Arguments to update one Data.
     * @example
     * // Update one Data
     * const data = await prisma.data.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DataUpdateArgs>(
      args: SelectSubset<T, DataUpdateArgs>
    ): CheckSelect<T, Prisma__DataClient<Data>, Prisma__DataClient<DataGetPayload<T>>>

    /**
     * Delete zero or more Data.
     * @param {DataDeleteManyArgs} args - Arguments to filter Data to delete.
     * @example
     * // Delete a few Data
     * const { count } = await prisma.data.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DataDeleteManyArgs>(
      args?: SelectSubset<T, DataDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Data
     * const data = await prisma.data.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DataUpdateManyArgs>(
      args: SelectSubset<T, DataUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Data.
     * @param {DataUpsertArgs} args - Arguments to update or create a Data.
     * @example
     * // Update or create a Data
     * const data = await prisma.data.upsert({
     *   create: {
     *     // ... data to create a Data
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Data we want to update
     *   }
     * })
    **/
    upsert<T extends DataUpsertArgs>(
      args: SelectSubset<T, DataUpsertArgs>
    ): CheckSelect<T, Prisma__DataClient<Data>, Prisma__DataClient<DataGetPayload<T>>>

    /**
     * Count the number of Data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataCountArgs} args - Arguments to filter Data to count.
     * @example
     * // Count the number of Data
     * const count = await prisma.data.count({
     *   where: {
     *     // ... the filter for the Data we want to count
     *   }
     * })
    **/
    count<T extends DataCountArgs>(
      args?: Subset<T, DataCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DataAggregateArgs>(args: Subset<T, DataAggregateArgs>): PrismaPromise<GetDataAggregateType<T>>

    /**
     * Group by Data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataGroupByArgs['orderBy'] }
        : { orderBy?: DataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Data.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DataClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    exames<T extends ExameFindManyArgs = {}>(args?: Subset<T, ExameFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Exame>>, PrismaPromise<Array<ExameGetPayload<T>>>>;

    avaliacaoSocioEconomica<T extends AvaliacaoSocioEconomicaFindManyArgs = {}>(args?: Subset<T, AvaliacaoSocioEconomicaFindManyArgs>): CheckSelect<T, PrismaPromise<Array<AvaliacaoSocioEconomica>>, PrismaPromise<Array<AvaliacaoSocioEconomicaGetPayload<T>>>>;

    MarcadorConsumoAlimentar<T extends MarcadorConsumoAlimentarFindManyArgs = {}>(args?: Subset<T, MarcadorConsumoAlimentarFindManyArgs>): CheckSelect<T, PrismaPromise<Array<MarcadorConsumoAlimentar>>, PrismaPromise<Array<MarcadorConsumoAlimentarGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Data findUnique
   */
  export type DataFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Data
     * 
    **/
    select?: DataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DataInclude | null
    /**
     * Throw an Error if a Data can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Data to fetch.
     * 
    **/
    where: DataWhereUniqueInput
  }


  /**
   * Data findFirst
   */
  export type DataFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Data
     * 
    **/
    select?: DataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DataInclude | null
    /**
     * Throw an Error if a Data can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Data to fetch.
     * 
    **/
    where?: DataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Data to fetch.
     * 
    **/
    orderBy?: Enumerable<DataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Data.
     * 
    **/
    cursor?: DataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Data from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Data.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Data.
     * 
    **/
    distinct?: Enumerable<DataScalarFieldEnum>
  }


  /**
   * Data findMany
   */
  export type DataFindManyArgs = {
    /**
     * Select specific fields to fetch from the Data
     * 
    **/
    select?: DataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DataInclude | null
    /**
     * Filter, which Data to fetch.
     * 
    **/
    where?: DataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Data to fetch.
     * 
    **/
    orderBy?: Enumerable<DataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Data.
     * 
    **/
    cursor?: DataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Data from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Data.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DataScalarFieldEnum>
  }


  /**
   * Data create
   */
  export type DataCreateArgs = {
    /**
     * Select specific fields to fetch from the Data
     * 
    **/
    select?: DataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DataInclude | null
    /**
     * The data needed to create a Data.
     * 
    **/
    data: XOR<DataCreateInput, DataUncheckedCreateInput>
  }


  /**
   * Data createMany
   */
  export type DataCreateManyArgs = {
    /**
     * The data used to create many Data.
     * 
    **/
    data: Enumerable<DataCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Data update
   */
  export type DataUpdateArgs = {
    /**
     * Select specific fields to fetch from the Data
     * 
    **/
    select?: DataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DataInclude | null
    /**
     * The data needed to update a Data.
     * 
    **/
    data: XOR<DataUpdateInput, DataUncheckedUpdateInput>
    /**
     * Choose, which Data to update.
     * 
    **/
    where: DataWhereUniqueInput
  }


  /**
   * Data updateMany
   */
  export type DataUpdateManyArgs = {
    /**
     * The data used to update Data.
     * 
    **/
    data: XOR<DataUpdateManyMutationInput, DataUncheckedUpdateManyInput>
    /**
     * Filter which Data to update
     * 
    **/
    where?: DataWhereInput
  }


  /**
   * Data upsert
   */
  export type DataUpsertArgs = {
    /**
     * Select specific fields to fetch from the Data
     * 
    **/
    select?: DataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DataInclude | null
    /**
     * The filter to search for the Data to update in case it exists.
     * 
    **/
    where: DataWhereUniqueInput
    /**
     * In case the Data found by the `where` argument doesn't exist, create a new Data with this data.
     * 
    **/
    create: XOR<DataCreateInput, DataUncheckedCreateInput>
    /**
     * In case the Data was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<DataUpdateInput, DataUncheckedUpdateInput>
  }


  /**
   * Data delete
   */
  export type DataDeleteArgs = {
    /**
     * Select specific fields to fetch from the Data
     * 
    **/
    select?: DataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DataInclude | null
    /**
     * Filter which Data to delete.
     * 
    **/
    where: DataWhereUniqueInput
  }


  /**
   * Data deleteMany
   */
  export type DataDeleteManyArgs = {
    /**
     * Filter which Data to delete
     * 
    **/
    where?: DataWhereInput
  }


  /**
   * Data without action
   */
  export type DataArgs = {
    /**
     * Select specific fields to fetch from the Data
     * 
    **/
    select?: DataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DataInclude | null
  }



  /**
   * Model Pessoa
   */


  export type AggregatePessoa = {
    _count: PessoaCountAggregateOutputType | null
    _avg: PessoaAvgAggregateOutputType | null
    _sum: PessoaSumAggregateOutputType | null
    _min: PessoaMinAggregateOutputType | null
    _max: PessoaMaxAggregateOutputType | null
  }

  export type PessoaAvgAggregateOutputType = {
    id: number | null
  }

  export type PessoaSumAggregateOutputType = {
    id: number | null
  }

  export type PessoaMinAggregateOutputType = {
    id: number | null
    nascimento: Date | null
    nome: string | null
    genero: Genero | null
    etniaPrincipal: Etnia | null
    etniaSecundaria: Etnia | null
  }

  export type PessoaMaxAggregateOutputType = {
    id: number | null
    nascimento: Date | null
    nome: string | null
    genero: Genero | null
    etniaPrincipal: Etnia | null
    etniaSecundaria: Etnia | null
  }

  export type PessoaCountAggregateOutputType = {
    id: number
    nascimento: number
    nome: number
    genero: number
    etniaPrincipal: number
    etniaSecundaria: number
    _all: number
  }


  export type PessoaAvgAggregateInputType = {
    id?: true
  }

  export type PessoaSumAggregateInputType = {
    id?: true
  }

  export type PessoaMinAggregateInputType = {
    id?: true
    nascimento?: true
    nome?: true
    genero?: true
    etniaPrincipal?: true
    etniaSecundaria?: true
  }

  export type PessoaMaxAggregateInputType = {
    id?: true
    nascimento?: true
    nome?: true
    genero?: true
    etniaPrincipal?: true
    etniaSecundaria?: true
  }

  export type PessoaCountAggregateInputType = {
    id?: true
    nascimento?: true
    nome?: true
    genero?: true
    etniaPrincipal?: true
    etniaSecundaria?: true
    _all?: true
  }

  export type PessoaAggregateArgs = {
    /**
     * Filter which Pessoa to aggregate.
     * 
    **/
    where?: PessoaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pessoas to fetch.
     * 
    **/
    orderBy?: Enumerable<PessoaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PessoaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pessoas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pessoas.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pessoas
    **/
    _count?: true | PessoaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PessoaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PessoaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PessoaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PessoaMaxAggregateInputType
  }

  export type GetPessoaAggregateType<T extends PessoaAggregateArgs> = {
        [P in keyof T & keyof AggregatePessoa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePessoa[P]>
      : GetScalarType<T[P], AggregatePessoa[P]>
  }




  export type PessoaGroupByArgs = {
    where?: PessoaWhereInput
    orderBy?: Enumerable<PessoaOrderByWithAggregationInput>
    by: Array<PessoaScalarFieldEnum>
    having?: PessoaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PessoaCountAggregateInputType | true
    _avg?: PessoaAvgAggregateInputType
    _sum?: PessoaSumAggregateInputType
    _min?: PessoaMinAggregateInputType
    _max?: PessoaMaxAggregateInputType
  }


  export type PessoaGroupByOutputType = {
    id: number
    nascimento: Date
    nome: string
    genero: Genero
    etniaPrincipal: Etnia
    etniaSecundaria: Etnia | null
    _count: PessoaCountAggregateOutputType | null
    _avg: PessoaAvgAggregateOutputType | null
    _sum: PessoaSumAggregateOutputType | null
    _min: PessoaMinAggregateOutputType | null
    _max: PessoaMaxAggregateOutputType | null
  }

  type GetPessoaGroupByPayload<T extends PessoaGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PessoaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PessoaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PessoaGroupByOutputType[P]>
            : GetScalarType<T[P], PessoaGroupByOutputType[P]>
        }
      >
    >


  export type PessoaSelect = {
    id?: boolean
    nascimento?: boolean
    nome?: boolean
    genero?: boolean
    etniaPrincipal?: boolean
    etniaSecundaria?: boolean
    exames?: boolean | ExameFindManyArgs
    avaliacaoSocioEconomica?: boolean | AvaliacaoSocioEconomicaFindManyArgs
    MarcadorConsumoAlimentar?: boolean | MarcadorConsumoAlimentarFindManyArgs
    _count?: boolean | PessoaCountOutputTypeArgs
  }

  export type PessoaInclude = {
    exames?: boolean | ExameFindManyArgs
    avaliacaoSocioEconomica?: boolean | AvaliacaoSocioEconomicaFindManyArgs
    MarcadorConsumoAlimentar?: boolean | MarcadorConsumoAlimentarFindManyArgs
    _count?: boolean | PessoaCountOutputTypeArgs
  }

  export type PessoaGetPayload<
    S extends boolean | null | undefined | PessoaArgs,
    U = keyof S
      > = S extends true
        ? Pessoa
    : S extends undefined
    ? never
    : S extends PessoaArgs | PessoaFindManyArgs
    ?'include' extends U
    ? Pessoa  & {
    [P in TrueKeys<S['include']>]:
        P extends 'exames' ? Array < ExameGetPayload<S['include'][P]>>  :
        P extends 'avaliacaoSocioEconomica' ? Array < AvaliacaoSocioEconomicaGetPayload<S['include'][P]>>  :
        P extends 'MarcadorConsumoAlimentar' ? Array < MarcadorConsumoAlimentarGetPayload<S['include'][P]>>  :
        P extends '_count' ? PessoaCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'exames' ? Array < ExameGetPayload<S['select'][P]>>  :
        P extends 'avaliacaoSocioEconomica' ? Array < AvaliacaoSocioEconomicaGetPayload<S['select'][P]>>  :
        P extends 'MarcadorConsumoAlimentar' ? Array < MarcadorConsumoAlimentarGetPayload<S['select'][P]>>  :
        P extends '_count' ? PessoaCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Pessoa ? Pessoa[P] : never
  } 
    : Pessoa
  : Pessoa


  type PessoaCountArgs = Merge<
    Omit<PessoaFindManyArgs, 'select' | 'include'> & {
      select?: PessoaCountAggregateInputType | true
    }
  >

  export interface PessoaDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Pessoa that matches the filter.
     * @param {PessoaFindUniqueArgs} args - Arguments to find a Pessoa
     * @example
     * // Get one Pessoa
     * const pessoa = await prisma.pessoa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PessoaFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PessoaFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Pessoa'> extends True ? CheckSelect<T, Prisma__PessoaClient<Pessoa>, Prisma__PessoaClient<PessoaGetPayload<T>>> : CheckSelect<T, Prisma__PessoaClient<Pessoa | null >, Prisma__PessoaClient<PessoaGetPayload<T> | null >>

    /**
     * Find the first Pessoa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaFindFirstArgs} args - Arguments to find a Pessoa
     * @example
     * // Get one Pessoa
     * const pessoa = await prisma.pessoa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PessoaFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PessoaFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Pessoa'> extends True ? CheckSelect<T, Prisma__PessoaClient<Pessoa>, Prisma__PessoaClient<PessoaGetPayload<T>>> : CheckSelect<T, Prisma__PessoaClient<Pessoa | null >, Prisma__PessoaClient<PessoaGetPayload<T> | null >>

    /**
     * Find zero or more Pessoas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pessoas
     * const pessoas = await prisma.pessoa.findMany()
     * 
     * // Get first 10 Pessoas
     * const pessoas = await prisma.pessoa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pessoaWithIdOnly = await prisma.pessoa.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PessoaFindManyArgs>(
      args?: SelectSubset<T, PessoaFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Pessoa>>, PrismaPromise<Array<PessoaGetPayload<T>>>>

    /**
     * Create a Pessoa.
     * @param {PessoaCreateArgs} args - Arguments to create a Pessoa.
     * @example
     * // Create one Pessoa
     * const Pessoa = await prisma.pessoa.create({
     *   data: {
     *     // ... data to create a Pessoa
     *   }
     * })
     * 
    **/
    create<T extends PessoaCreateArgs>(
      args: SelectSubset<T, PessoaCreateArgs>
    ): CheckSelect<T, Prisma__PessoaClient<Pessoa>, Prisma__PessoaClient<PessoaGetPayload<T>>>

    /**
     * Create many Pessoas.
     *     @param {PessoaCreateManyArgs} args - Arguments to create many Pessoas.
     *     @example
     *     // Create many Pessoas
     *     const pessoa = await prisma.pessoa.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PessoaCreateManyArgs>(
      args?: SelectSubset<T, PessoaCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Pessoa.
     * @param {PessoaDeleteArgs} args - Arguments to delete one Pessoa.
     * @example
     * // Delete one Pessoa
     * const Pessoa = await prisma.pessoa.delete({
     *   where: {
     *     // ... filter to delete one Pessoa
     *   }
     * })
     * 
    **/
    delete<T extends PessoaDeleteArgs>(
      args: SelectSubset<T, PessoaDeleteArgs>
    ): CheckSelect<T, Prisma__PessoaClient<Pessoa>, Prisma__PessoaClient<PessoaGetPayload<T>>>

    /**
     * Update one Pessoa.
     * @param {PessoaUpdateArgs} args - Arguments to update one Pessoa.
     * @example
     * // Update one Pessoa
     * const pessoa = await prisma.pessoa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PessoaUpdateArgs>(
      args: SelectSubset<T, PessoaUpdateArgs>
    ): CheckSelect<T, Prisma__PessoaClient<Pessoa>, Prisma__PessoaClient<PessoaGetPayload<T>>>

    /**
     * Delete zero or more Pessoas.
     * @param {PessoaDeleteManyArgs} args - Arguments to filter Pessoas to delete.
     * @example
     * // Delete a few Pessoas
     * const { count } = await prisma.pessoa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PessoaDeleteManyArgs>(
      args?: SelectSubset<T, PessoaDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pessoas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pessoas
     * const pessoa = await prisma.pessoa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PessoaUpdateManyArgs>(
      args: SelectSubset<T, PessoaUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Pessoa.
     * @param {PessoaUpsertArgs} args - Arguments to update or create a Pessoa.
     * @example
     * // Update or create a Pessoa
     * const pessoa = await prisma.pessoa.upsert({
     *   create: {
     *     // ... data to create a Pessoa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pessoa we want to update
     *   }
     * })
    **/
    upsert<T extends PessoaUpsertArgs>(
      args: SelectSubset<T, PessoaUpsertArgs>
    ): CheckSelect<T, Prisma__PessoaClient<Pessoa>, Prisma__PessoaClient<PessoaGetPayload<T>>>

    /**
     * Count the number of Pessoas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaCountArgs} args - Arguments to filter Pessoas to count.
     * @example
     * // Count the number of Pessoas
     * const count = await prisma.pessoa.count({
     *   where: {
     *     // ... the filter for the Pessoas we want to count
     *   }
     * })
    **/
    count<T extends PessoaCountArgs>(
      args?: Subset<T, PessoaCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PessoaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pessoa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PessoaAggregateArgs>(args: Subset<T, PessoaAggregateArgs>): PrismaPromise<GetPessoaAggregateType<T>>

    /**
     * Group by Pessoa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PessoaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PessoaGroupByArgs['orderBy'] }
        : { orderBy?: PessoaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PessoaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPessoaGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pessoa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PessoaClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    exames<T extends ExameFindManyArgs = {}>(args?: Subset<T, ExameFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Exame>>, PrismaPromise<Array<ExameGetPayload<T>>>>;

    avaliacaoSocioEconomica<T extends AvaliacaoSocioEconomicaFindManyArgs = {}>(args?: Subset<T, AvaliacaoSocioEconomicaFindManyArgs>): CheckSelect<T, PrismaPromise<Array<AvaliacaoSocioEconomica>>, PrismaPromise<Array<AvaliacaoSocioEconomicaGetPayload<T>>>>;

    MarcadorConsumoAlimentar<T extends MarcadorConsumoAlimentarFindManyArgs = {}>(args?: Subset<T, MarcadorConsumoAlimentarFindManyArgs>): CheckSelect<T, PrismaPromise<Array<MarcadorConsumoAlimentar>>, PrismaPromise<Array<MarcadorConsumoAlimentarGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Pessoa findUnique
   */
  export type PessoaFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Pessoa
     * 
    **/
    select?: PessoaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PessoaInclude | null
    /**
     * Throw an Error if a Pessoa can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Pessoa to fetch.
     * 
    **/
    where: PessoaWhereUniqueInput
  }


  /**
   * Pessoa findFirst
   */
  export type PessoaFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Pessoa
     * 
    **/
    select?: PessoaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PessoaInclude | null
    /**
     * Throw an Error if a Pessoa can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Pessoa to fetch.
     * 
    **/
    where?: PessoaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pessoas to fetch.
     * 
    **/
    orderBy?: Enumerable<PessoaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pessoas.
     * 
    **/
    cursor?: PessoaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pessoas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pessoas.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pessoas.
     * 
    **/
    distinct?: Enumerable<PessoaScalarFieldEnum>
  }


  /**
   * Pessoa findMany
   */
  export type PessoaFindManyArgs = {
    /**
     * Select specific fields to fetch from the Pessoa
     * 
    **/
    select?: PessoaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PessoaInclude | null
    /**
     * Filter, which Pessoas to fetch.
     * 
    **/
    where?: PessoaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pessoas to fetch.
     * 
    **/
    orderBy?: Enumerable<PessoaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pessoas.
     * 
    **/
    cursor?: PessoaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pessoas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pessoas.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PessoaScalarFieldEnum>
  }


  /**
   * Pessoa create
   */
  export type PessoaCreateArgs = {
    /**
     * Select specific fields to fetch from the Pessoa
     * 
    **/
    select?: PessoaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PessoaInclude | null
    /**
     * The data needed to create a Pessoa.
     * 
    **/
    data: XOR<PessoaCreateInput, PessoaUncheckedCreateInput>
  }


  /**
   * Pessoa createMany
   */
  export type PessoaCreateManyArgs = {
    /**
     * The data used to create many Pessoas.
     * 
    **/
    data: Enumerable<PessoaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Pessoa update
   */
  export type PessoaUpdateArgs = {
    /**
     * Select specific fields to fetch from the Pessoa
     * 
    **/
    select?: PessoaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PessoaInclude | null
    /**
     * The data needed to update a Pessoa.
     * 
    **/
    data: XOR<PessoaUpdateInput, PessoaUncheckedUpdateInput>
    /**
     * Choose, which Pessoa to update.
     * 
    **/
    where: PessoaWhereUniqueInput
  }


  /**
   * Pessoa updateMany
   */
  export type PessoaUpdateManyArgs = {
    /**
     * The data used to update Pessoas.
     * 
    **/
    data: XOR<PessoaUpdateManyMutationInput, PessoaUncheckedUpdateManyInput>
    /**
     * Filter which Pessoas to update
     * 
    **/
    where?: PessoaWhereInput
  }


  /**
   * Pessoa upsert
   */
  export type PessoaUpsertArgs = {
    /**
     * Select specific fields to fetch from the Pessoa
     * 
    **/
    select?: PessoaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PessoaInclude | null
    /**
     * The filter to search for the Pessoa to update in case it exists.
     * 
    **/
    where: PessoaWhereUniqueInput
    /**
     * In case the Pessoa found by the `where` argument doesn't exist, create a new Pessoa with this data.
     * 
    **/
    create: XOR<PessoaCreateInput, PessoaUncheckedCreateInput>
    /**
     * In case the Pessoa was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PessoaUpdateInput, PessoaUncheckedUpdateInput>
  }


  /**
   * Pessoa delete
   */
  export type PessoaDeleteArgs = {
    /**
     * Select specific fields to fetch from the Pessoa
     * 
    **/
    select?: PessoaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PessoaInclude | null
    /**
     * Filter which Pessoa to delete.
     * 
    **/
    where: PessoaWhereUniqueInput
  }


  /**
   * Pessoa deleteMany
   */
  export type PessoaDeleteManyArgs = {
    /**
     * Filter which Pessoas to delete
     * 
    **/
    where?: PessoaWhereInput
  }


  /**
   * Pessoa without action
   */
  export type PessoaArgs = {
    /**
     * Select specific fields to fetch from the Pessoa
     * 
    **/
    select?: PessoaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PessoaInclude | null
  }



  /**
   * Model Local
   */


  export type AggregateLocal = {
    _count: LocalCountAggregateOutputType | null
    _avg: LocalAvgAggregateOutputType | null
    _sum: LocalSumAggregateOutputType | null
    _min: LocalMinAggregateOutputType | null
    _max: LocalMaxAggregateOutputType | null
  }

  export type LocalAvgAggregateOutputType = {
    id: number | null
  }

  export type LocalSumAggregateOutputType = {
    id: number | null
  }

  export type LocalMinAggregateOutputType = {
    id: number | null
    municipio: string | null
    escola: string | null
  }

  export type LocalMaxAggregateOutputType = {
    id: number | null
    municipio: string | null
    escola: string | null
  }

  export type LocalCountAggregateOutputType = {
    id: number
    municipio: number
    escola: number
    _all: number
  }


  export type LocalAvgAggregateInputType = {
    id?: true
  }

  export type LocalSumAggregateInputType = {
    id?: true
  }

  export type LocalMinAggregateInputType = {
    id?: true
    municipio?: true
    escola?: true
  }

  export type LocalMaxAggregateInputType = {
    id?: true
    municipio?: true
    escola?: true
  }

  export type LocalCountAggregateInputType = {
    id?: true
    municipio?: true
    escola?: true
    _all?: true
  }

  export type LocalAggregateArgs = {
    /**
     * Filter which Local to aggregate.
     * 
    **/
    where?: LocalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locals to fetch.
     * 
    **/
    orderBy?: Enumerable<LocalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: LocalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locals from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locals.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locals
    **/
    _count?: true | LocalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocalMaxAggregateInputType
  }

  export type GetLocalAggregateType<T extends LocalAggregateArgs> = {
        [P in keyof T & keyof AggregateLocal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocal[P]>
      : GetScalarType<T[P], AggregateLocal[P]>
  }




  export type LocalGroupByArgs = {
    where?: LocalWhereInput
    orderBy?: Enumerable<LocalOrderByWithAggregationInput>
    by: Array<LocalScalarFieldEnum>
    having?: LocalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocalCountAggregateInputType | true
    _avg?: LocalAvgAggregateInputType
    _sum?: LocalSumAggregateInputType
    _min?: LocalMinAggregateInputType
    _max?: LocalMaxAggregateInputType
  }


  export type LocalGroupByOutputType = {
    id: number
    municipio: string
    escola: string
    _count: LocalCountAggregateOutputType | null
    _avg: LocalAvgAggregateOutputType | null
    _sum: LocalSumAggregateOutputType | null
    _min: LocalMinAggregateOutputType | null
    _max: LocalMaxAggregateOutputType | null
  }

  type GetLocalGroupByPayload<T extends LocalGroupByArgs> = PrismaPromise<
    Array<
      PickArray<LocalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocalGroupByOutputType[P]>
            : GetScalarType<T[P], LocalGroupByOutputType[P]>
        }
      >
    >


  export type LocalSelect = {
    id?: boolean
    municipio?: boolean
    escola?: boolean
    exames?: boolean | ExameFindManyArgs
    avaliacaoSocioEconomica?: boolean | AvaliacaoSocioEconomicaFindManyArgs
    MarcadorConsumoAlimentar?: boolean | MarcadorConsumoAlimentarFindManyArgs
    _count?: boolean | LocalCountOutputTypeArgs
  }

  export type LocalInclude = {
    exames?: boolean | ExameFindManyArgs
    avaliacaoSocioEconomica?: boolean | AvaliacaoSocioEconomicaFindManyArgs
    MarcadorConsumoAlimentar?: boolean | MarcadorConsumoAlimentarFindManyArgs
    _count?: boolean | LocalCountOutputTypeArgs
  }

  export type LocalGetPayload<
    S extends boolean | null | undefined | LocalArgs,
    U = keyof S
      > = S extends true
        ? Local
    : S extends undefined
    ? never
    : S extends LocalArgs | LocalFindManyArgs
    ?'include' extends U
    ? Local  & {
    [P in TrueKeys<S['include']>]:
        P extends 'exames' ? Array < ExameGetPayload<S['include'][P]>>  :
        P extends 'avaliacaoSocioEconomica' ? Array < AvaliacaoSocioEconomicaGetPayload<S['include'][P]>>  :
        P extends 'MarcadorConsumoAlimentar' ? Array < MarcadorConsumoAlimentarGetPayload<S['include'][P]>>  :
        P extends '_count' ? LocalCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'exames' ? Array < ExameGetPayload<S['select'][P]>>  :
        P extends 'avaliacaoSocioEconomica' ? Array < AvaliacaoSocioEconomicaGetPayload<S['select'][P]>>  :
        P extends 'MarcadorConsumoAlimentar' ? Array < MarcadorConsumoAlimentarGetPayload<S['select'][P]>>  :
        P extends '_count' ? LocalCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Local ? Local[P] : never
  } 
    : Local
  : Local


  type LocalCountArgs = Merge<
    Omit<LocalFindManyArgs, 'select' | 'include'> & {
      select?: LocalCountAggregateInputType | true
    }
  >

  export interface LocalDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Local that matches the filter.
     * @param {LocalFindUniqueArgs} args - Arguments to find a Local
     * @example
     * // Get one Local
     * const local = await prisma.local.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LocalFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LocalFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Local'> extends True ? CheckSelect<T, Prisma__LocalClient<Local>, Prisma__LocalClient<LocalGetPayload<T>>> : CheckSelect<T, Prisma__LocalClient<Local | null >, Prisma__LocalClient<LocalGetPayload<T> | null >>

    /**
     * Find the first Local that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalFindFirstArgs} args - Arguments to find a Local
     * @example
     * // Get one Local
     * const local = await prisma.local.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LocalFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LocalFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Local'> extends True ? CheckSelect<T, Prisma__LocalClient<Local>, Prisma__LocalClient<LocalGetPayload<T>>> : CheckSelect<T, Prisma__LocalClient<Local | null >, Prisma__LocalClient<LocalGetPayload<T> | null >>

    /**
     * Find zero or more Locals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locals
     * const locals = await prisma.local.findMany()
     * 
     * // Get first 10 Locals
     * const locals = await prisma.local.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const localWithIdOnly = await prisma.local.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LocalFindManyArgs>(
      args?: SelectSubset<T, LocalFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Local>>, PrismaPromise<Array<LocalGetPayload<T>>>>

    /**
     * Create a Local.
     * @param {LocalCreateArgs} args - Arguments to create a Local.
     * @example
     * // Create one Local
     * const Local = await prisma.local.create({
     *   data: {
     *     // ... data to create a Local
     *   }
     * })
     * 
    **/
    create<T extends LocalCreateArgs>(
      args: SelectSubset<T, LocalCreateArgs>
    ): CheckSelect<T, Prisma__LocalClient<Local>, Prisma__LocalClient<LocalGetPayload<T>>>

    /**
     * Create many Locals.
     *     @param {LocalCreateManyArgs} args - Arguments to create many Locals.
     *     @example
     *     // Create many Locals
     *     const local = await prisma.local.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LocalCreateManyArgs>(
      args?: SelectSubset<T, LocalCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Local.
     * @param {LocalDeleteArgs} args - Arguments to delete one Local.
     * @example
     * // Delete one Local
     * const Local = await prisma.local.delete({
     *   where: {
     *     // ... filter to delete one Local
     *   }
     * })
     * 
    **/
    delete<T extends LocalDeleteArgs>(
      args: SelectSubset<T, LocalDeleteArgs>
    ): CheckSelect<T, Prisma__LocalClient<Local>, Prisma__LocalClient<LocalGetPayload<T>>>

    /**
     * Update one Local.
     * @param {LocalUpdateArgs} args - Arguments to update one Local.
     * @example
     * // Update one Local
     * const local = await prisma.local.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LocalUpdateArgs>(
      args: SelectSubset<T, LocalUpdateArgs>
    ): CheckSelect<T, Prisma__LocalClient<Local>, Prisma__LocalClient<LocalGetPayload<T>>>

    /**
     * Delete zero or more Locals.
     * @param {LocalDeleteManyArgs} args - Arguments to filter Locals to delete.
     * @example
     * // Delete a few Locals
     * const { count } = await prisma.local.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LocalDeleteManyArgs>(
      args?: SelectSubset<T, LocalDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locals
     * const local = await prisma.local.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LocalUpdateManyArgs>(
      args: SelectSubset<T, LocalUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Local.
     * @param {LocalUpsertArgs} args - Arguments to update or create a Local.
     * @example
     * // Update or create a Local
     * const local = await prisma.local.upsert({
     *   create: {
     *     // ... data to create a Local
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Local we want to update
     *   }
     * })
    **/
    upsert<T extends LocalUpsertArgs>(
      args: SelectSubset<T, LocalUpsertArgs>
    ): CheckSelect<T, Prisma__LocalClient<Local>, Prisma__LocalClient<LocalGetPayload<T>>>

    /**
     * Count the number of Locals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalCountArgs} args - Arguments to filter Locals to count.
     * @example
     * // Count the number of Locals
     * const count = await prisma.local.count({
     *   where: {
     *     // ... the filter for the Locals we want to count
     *   }
     * })
    **/
    count<T extends LocalCountArgs>(
      args?: Subset<T, LocalCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Local.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocalAggregateArgs>(args: Subset<T, LocalAggregateArgs>): PrismaPromise<GetLocalAggregateType<T>>

    /**
     * Group by Local.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocalGroupByArgs['orderBy'] }
        : { orderBy?: LocalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocalGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Local.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LocalClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    exames<T extends ExameFindManyArgs = {}>(args?: Subset<T, ExameFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Exame>>, PrismaPromise<Array<ExameGetPayload<T>>>>;

    avaliacaoSocioEconomica<T extends AvaliacaoSocioEconomicaFindManyArgs = {}>(args?: Subset<T, AvaliacaoSocioEconomicaFindManyArgs>): CheckSelect<T, PrismaPromise<Array<AvaliacaoSocioEconomica>>, PrismaPromise<Array<AvaliacaoSocioEconomicaGetPayload<T>>>>;

    MarcadorConsumoAlimentar<T extends MarcadorConsumoAlimentarFindManyArgs = {}>(args?: Subset<T, MarcadorConsumoAlimentarFindManyArgs>): CheckSelect<T, PrismaPromise<Array<MarcadorConsumoAlimentar>>, PrismaPromise<Array<MarcadorConsumoAlimentarGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Local findUnique
   */
  export type LocalFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Local
     * 
    **/
    select?: LocalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LocalInclude | null
    /**
     * Throw an Error if a Local can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Local to fetch.
     * 
    **/
    where: LocalWhereUniqueInput
  }


  /**
   * Local findFirst
   */
  export type LocalFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Local
     * 
    **/
    select?: LocalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LocalInclude | null
    /**
     * Throw an Error if a Local can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Local to fetch.
     * 
    **/
    where?: LocalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locals to fetch.
     * 
    **/
    orderBy?: Enumerable<LocalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locals.
     * 
    **/
    cursor?: LocalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locals from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locals.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locals.
     * 
    **/
    distinct?: Enumerable<LocalScalarFieldEnum>
  }


  /**
   * Local findMany
   */
  export type LocalFindManyArgs = {
    /**
     * Select specific fields to fetch from the Local
     * 
    **/
    select?: LocalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LocalInclude | null
    /**
     * Filter, which Locals to fetch.
     * 
    **/
    where?: LocalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locals to fetch.
     * 
    **/
    orderBy?: Enumerable<LocalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locals.
     * 
    **/
    cursor?: LocalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locals from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locals.
     * 
    **/
    skip?: number
    distinct?: Enumerable<LocalScalarFieldEnum>
  }


  /**
   * Local create
   */
  export type LocalCreateArgs = {
    /**
     * Select specific fields to fetch from the Local
     * 
    **/
    select?: LocalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LocalInclude | null
    /**
     * The data needed to create a Local.
     * 
    **/
    data: XOR<LocalCreateInput, LocalUncheckedCreateInput>
  }


  /**
   * Local createMany
   */
  export type LocalCreateManyArgs = {
    /**
     * The data used to create many Locals.
     * 
    **/
    data: Enumerable<LocalCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Local update
   */
  export type LocalUpdateArgs = {
    /**
     * Select specific fields to fetch from the Local
     * 
    **/
    select?: LocalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LocalInclude | null
    /**
     * The data needed to update a Local.
     * 
    **/
    data: XOR<LocalUpdateInput, LocalUncheckedUpdateInput>
    /**
     * Choose, which Local to update.
     * 
    **/
    where: LocalWhereUniqueInput
  }


  /**
   * Local updateMany
   */
  export type LocalUpdateManyArgs = {
    /**
     * The data used to update Locals.
     * 
    **/
    data: XOR<LocalUpdateManyMutationInput, LocalUncheckedUpdateManyInput>
    /**
     * Filter which Locals to update
     * 
    **/
    where?: LocalWhereInput
  }


  /**
   * Local upsert
   */
  export type LocalUpsertArgs = {
    /**
     * Select specific fields to fetch from the Local
     * 
    **/
    select?: LocalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LocalInclude | null
    /**
     * The filter to search for the Local to update in case it exists.
     * 
    **/
    where: LocalWhereUniqueInput
    /**
     * In case the Local found by the `where` argument doesn't exist, create a new Local with this data.
     * 
    **/
    create: XOR<LocalCreateInput, LocalUncheckedCreateInput>
    /**
     * In case the Local was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<LocalUpdateInput, LocalUncheckedUpdateInput>
  }


  /**
   * Local delete
   */
  export type LocalDeleteArgs = {
    /**
     * Select specific fields to fetch from the Local
     * 
    **/
    select?: LocalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LocalInclude | null
    /**
     * Filter which Local to delete.
     * 
    **/
    where: LocalWhereUniqueInput
  }


  /**
   * Local deleteMany
   */
  export type LocalDeleteManyArgs = {
    /**
     * Filter which Locals to delete
     * 
    **/
    where?: LocalWhereInput
  }


  /**
   * Local without action
   */
  export type LocalArgs = {
    /**
     * Select specific fields to fetch from the Local
     * 
    **/
    select?: LocalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LocalInclude | null
  }



  /**
   * Model CondicaoPeriodontal
   */


  export type AggregateCondicaoPeriodontal = {
    _count: CondicaoPeriodontalCountAggregateOutputType | null
    _avg: CondicaoPeriodontalAvgAggregateOutputType | null
    _sum: CondicaoPeriodontalSumAggregateOutputType | null
    _min: CondicaoPeriodontalMinAggregateOutputType | null
    _max: CondicaoPeriodontalMaxAggregateOutputType | null
  }

  export type CondicaoPeriodontalAvgAggregateOutputType = {
    id: number | null
  }

  export type CondicaoPeriodontalSumAggregateOutputType = {
    id: number | null
  }

  export type CondicaoPeriodontalMinAggregateOutputType = {
    id: number | null
    d17_16: boolean | null
    d21_11: boolean | null
    d27_26: boolean | null
    d31: boolean | null
    d37_36: boolean | null
    d47_46: boolean | null
  }

  export type CondicaoPeriodontalMaxAggregateOutputType = {
    id: number | null
    d17_16: boolean | null
    d21_11: boolean | null
    d27_26: boolean | null
    d31: boolean | null
    d37_36: boolean | null
    d47_46: boolean | null
  }

  export type CondicaoPeriodontalCountAggregateOutputType = {
    id: number
    d17_16: number
    d21_11: number
    d27_26: number
    d31: number
    d37_36: number
    d47_46: number
    _all: number
  }


  export type CondicaoPeriodontalAvgAggregateInputType = {
    id?: true
  }

  export type CondicaoPeriodontalSumAggregateInputType = {
    id?: true
  }

  export type CondicaoPeriodontalMinAggregateInputType = {
    id?: true
    d17_16?: true
    d21_11?: true
    d27_26?: true
    d31?: true
    d37_36?: true
    d47_46?: true
  }

  export type CondicaoPeriodontalMaxAggregateInputType = {
    id?: true
    d17_16?: true
    d21_11?: true
    d27_26?: true
    d31?: true
    d37_36?: true
    d47_46?: true
  }

  export type CondicaoPeriodontalCountAggregateInputType = {
    id?: true
    d17_16?: true
    d21_11?: true
    d27_26?: true
    d31?: true
    d37_36?: true
    d47_46?: true
    _all?: true
  }

  export type CondicaoPeriodontalAggregateArgs = {
    /**
     * Filter which CondicaoPeriodontal to aggregate.
     * 
    **/
    where?: CondicaoPeriodontalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CondicaoPeriodontals to fetch.
     * 
    **/
    orderBy?: Enumerable<CondicaoPeriodontalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CondicaoPeriodontalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CondicaoPeriodontals from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CondicaoPeriodontals.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CondicaoPeriodontals
    **/
    _count?: true | CondicaoPeriodontalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CondicaoPeriodontalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CondicaoPeriodontalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CondicaoPeriodontalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CondicaoPeriodontalMaxAggregateInputType
  }

  export type GetCondicaoPeriodontalAggregateType<T extends CondicaoPeriodontalAggregateArgs> = {
        [P in keyof T & keyof AggregateCondicaoPeriodontal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCondicaoPeriodontal[P]>
      : GetScalarType<T[P], AggregateCondicaoPeriodontal[P]>
  }




  export type CondicaoPeriodontalGroupByArgs = {
    where?: CondicaoPeriodontalWhereInput
    orderBy?: Enumerable<CondicaoPeriodontalOrderByWithAggregationInput>
    by: Array<CondicaoPeriodontalScalarFieldEnum>
    having?: CondicaoPeriodontalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CondicaoPeriodontalCountAggregateInputType | true
    _avg?: CondicaoPeriodontalAvgAggregateInputType
    _sum?: CondicaoPeriodontalSumAggregateInputType
    _min?: CondicaoPeriodontalMinAggregateInputType
    _max?: CondicaoPeriodontalMaxAggregateInputType
  }


  export type CondicaoPeriodontalGroupByOutputType = {
    id: number
    d17_16: boolean
    d21_11: boolean
    d27_26: boolean
    d31: boolean
    d37_36: boolean
    d47_46: boolean
    _count: CondicaoPeriodontalCountAggregateOutputType | null
    _avg: CondicaoPeriodontalAvgAggregateOutputType | null
    _sum: CondicaoPeriodontalSumAggregateOutputType | null
    _min: CondicaoPeriodontalMinAggregateOutputType | null
    _max: CondicaoPeriodontalMaxAggregateOutputType | null
  }

  type GetCondicaoPeriodontalGroupByPayload<T extends CondicaoPeriodontalGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CondicaoPeriodontalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CondicaoPeriodontalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CondicaoPeriodontalGroupByOutputType[P]>
            : GetScalarType<T[P], CondicaoPeriodontalGroupByOutputType[P]>
        }
      >
    >


  export type CondicaoPeriodontalSelect = {
    id?: boolean
    d17_16?: boolean
    d21_11?: boolean
    d27_26?: boolean
    d31?: boolean
    d37_36?: boolean
    d47_46?: boolean
    exame?: boolean | ExameArgs
  }

  export type CondicaoPeriodontalInclude = {
    exame?: boolean | ExameArgs
  }

  export type CondicaoPeriodontalGetPayload<
    S extends boolean | null | undefined | CondicaoPeriodontalArgs,
    U = keyof S
      > = S extends true
        ? CondicaoPeriodontal
    : S extends undefined
    ? never
    : S extends CondicaoPeriodontalArgs | CondicaoPeriodontalFindManyArgs
    ?'include' extends U
    ? CondicaoPeriodontal  & {
    [P in TrueKeys<S['include']>]:
        P extends 'exame' ? ExameGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'exame' ? ExameGetPayload<S['select'][P]> | null :  P extends keyof CondicaoPeriodontal ? CondicaoPeriodontal[P] : never
  } 
    : CondicaoPeriodontal
  : CondicaoPeriodontal


  type CondicaoPeriodontalCountArgs = Merge<
    Omit<CondicaoPeriodontalFindManyArgs, 'select' | 'include'> & {
      select?: CondicaoPeriodontalCountAggregateInputType | true
    }
  >

  export interface CondicaoPeriodontalDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one CondicaoPeriodontal that matches the filter.
     * @param {CondicaoPeriodontalFindUniqueArgs} args - Arguments to find a CondicaoPeriodontal
     * @example
     * // Get one CondicaoPeriodontal
     * const condicaoPeriodontal = await prisma.condicaoPeriodontal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CondicaoPeriodontalFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CondicaoPeriodontalFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CondicaoPeriodontal'> extends True ? CheckSelect<T, Prisma__CondicaoPeriodontalClient<CondicaoPeriodontal>, Prisma__CondicaoPeriodontalClient<CondicaoPeriodontalGetPayload<T>>> : CheckSelect<T, Prisma__CondicaoPeriodontalClient<CondicaoPeriodontal | null >, Prisma__CondicaoPeriodontalClient<CondicaoPeriodontalGetPayload<T> | null >>

    /**
     * Find the first CondicaoPeriodontal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CondicaoPeriodontalFindFirstArgs} args - Arguments to find a CondicaoPeriodontal
     * @example
     * // Get one CondicaoPeriodontal
     * const condicaoPeriodontal = await prisma.condicaoPeriodontal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CondicaoPeriodontalFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CondicaoPeriodontalFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CondicaoPeriodontal'> extends True ? CheckSelect<T, Prisma__CondicaoPeriodontalClient<CondicaoPeriodontal>, Prisma__CondicaoPeriodontalClient<CondicaoPeriodontalGetPayload<T>>> : CheckSelect<T, Prisma__CondicaoPeriodontalClient<CondicaoPeriodontal | null >, Prisma__CondicaoPeriodontalClient<CondicaoPeriodontalGetPayload<T> | null >>

    /**
     * Find zero or more CondicaoPeriodontals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CondicaoPeriodontalFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CondicaoPeriodontals
     * const condicaoPeriodontals = await prisma.condicaoPeriodontal.findMany()
     * 
     * // Get first 10 CondicaoPeriodontals
     * const condicaoPeriodontals = await prisma.condicaoPeriodontal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const condicaoPeriodontalWithIdOnly = await prisma.condicaoPeriodontal.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CondicaoPeriodontalFindManyArgs>(
      args?: SelectSubset<T, CondicaoPeriodontalFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<CondicaoPeriodontal>>, PrismaPromise<Array<CondicaoPeriodontalGetPayload<T>>>>

    /**
     * Create a CondicaoPeriodontal.
     * @param {CondicaoPeriodontalCreateArgs} args - Arguments to create a CondicaoPeriodontal.
     * @example
     * // Create one CondicaoPeriodontal
     * const CondicaoPeriodontal = await prisma.condicaoPeriodontal.create({
     *   data: {
     *     // ... data to create a CondicaoPeriodontal
     *   }
     * })
     * 
    **/
    create<T extends CondicaoPeriodontalCreateArgs>(
      args: SelectSubset<T, CondicaoPeriodontalCreateArgs>
    ): CheckSelect<T, Prisma__CondicaoPeriodontalClient<CondicaoPeriodontal>, Prisma__CondicaoPeriodontalClient<CondicaoPeriodontalGetPayload<T>>>

    /**
     * Create many CondicaoPeriodontals.
     *     @param {CondicaoPeriodontalCreateManyArgs} args - Arguments to create many CondicaoPeriodontals.
     *     @example
     *     // Create many CondicaoPeriodontals
     *     const condicaoPeriodontal = await prisma.condicaoPeriodontal.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CondicaoPeriodontalCreateManyArgs>(
      args?: SelectSubset<T, CondicaoPeriodontalCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a CondicaoPeriodontal.
     * @param {CondicaoPeriodontalDeleteArgs} args - Arguments to delete one CondicaoPeriodontal.
     * @example
     * // Delete one CondicaoPeriodontal
     * const CondicaoPeriodontal = await prisma.condicaoPeriodontal.delete({
     *   where: {
     *     // ... filter to delete one CondicaoPeriodontal
     *   }
     * })
     * 
    **/
    delete<T extends CondicaoPeriodontalDeleteArgs>(
      args: SelectSubset<T, CondicaoPeriodontalDeleteArgs>
    ): CheckSelect<T, Prisma__CondicaoPeriodontalClient<CondicaoPeriodontal>, Prisma__CondicaoPeriodontalClient<CondicaoPeriodontalGetPayload<T>>>

    /**
     * Update one CondicaoPeriodontal.
     * @param {CondicaoPeriodontalUpdateArgs} args - Arguments to update one CondicaoPeriodontal.
     * @example
     * // Update one CondicaoPeriodontal
     * const condicaoPeriodontal = await prisma.condicaoPeriodontal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CondicaoPeriodontalUpdateArgs>(
      args: SelectSubset<T, CondicaoPeriodontalUpdateArgs>
    ): CheckSelect<T, Prisma__CondicaoPeriodontalClient<CondicaoPeriodontal>, Prisma__CondicaoPeriodontalClient<CondicaoPeriodontalGetPayload<T>>>

    /**
     * Delete zero or more CondicaoPeriodontals.
     * @param {CondicaoPeriodontalDeleteManyArgs} args - Arguments to filter CondicaoPeriodontals to delete.
     * @example
     * // Delete a few CondicaoPeriodontals
     * const { count } = await prisma.condicaoPeriodontal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CondicaoPeriodontalDeleteManyArgs>(
      args?: SelectSubset<T, CondicaoPeriodontalDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more CondicaoPeriodontals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CondicaoPeriodontalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CondicaoPeriodontals
     * const condicaoPeriodontal = await prisma.condicaoPeriodontal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CondicaoPeriodontalUpdateManyArgs>(
      args: SelectSubset<T, CondicaoPeriodontalUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one CondicaoPeriodontal.
     * @param {CondicaoPeriodontalUpsertArgs} args - Arguments to update or create a CondicaoPeriodontal.
     * @example
     * // Update or create a CondicaoPeriodontal
     * const condicaoPeriodontal = await prisma.condicaoPeriodontal.upsert({
     *   create: {
     *     // ... data to create a CondicaoPeriodontal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CondicaoPeriodontal we want to update
     *   }
     * })
    **/
    upsert<T extends CondicaoPeriodontalUpsertArgs>(
      args: SelectSubset<T, CondicaoPeriodontalUpsertArgs>
    ): CheckSelect<T, Prisma__CondicaoPeriodontalClient<CondicaoPeriodontal>, Prisma__CondicaoPeriodontalClient<CondicaoPeriodontalGetPayload<T>>>

    /**
     * Count the number of CondicaoPeriodontals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CondicaoPeriodontalCountArgs} args - Arguments to filter CondicaoPeriodontals to count.
     * @example
     * // Count the number of CondicaoPeriodontals
     * const count = await prisma.condicaoPeriodontal.count({
     *   where: {
     *     // ... the filter for the CondicaoPeriodontals we want to count
     *   }
     * })
    **/
    count<T extends CondicaoPeriodontalCountArgs>(
      args?: Subset<T, CondicaoPeriodontalCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CondicaoPeriodontalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CondicaoPeriodontal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CondicaoPeriodontalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CondicaoPeriodontalAggregateArgs>(args: Subset<T, CondicaoPeriodontalAggregateArgs>): PrismaPromise<GetCondicaoPeriodontalAggregateType<T>>

    /**
     * Group by CondicaoPeriodontal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CondicaoPeriodontalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CondicaoPeriodontalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CondicaoPeriodontalGroupByArgs['orderBy'] }
        : { orderBy?: CondicaoPeriodontalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CondicaoPeriodontalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCondicaoPeriodontalGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for CondicaoPeriodontal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CondicaoPeriodontalClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    exame<T extends ExameArgs = {}>(args?: Subset<T, ExameArgs>): CheckSelect<T, Prisma__ExameClient<Exame | null >, Prisma__ExameClient<ExameGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * CondicaoPeriodontal findUnique
   */
  export type CondicaoPeriodontalFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the CondicaoPeriodontal
     * 
    **/
    select?: CondicaoPeriodontalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CondicaoPeriodontalInclude | null
    /**
     * Throw an Error if a CondicaoPeriodontal can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which CondicaoPeriodontal to fetch.
     * 
    **/
    where: CondicaoPeriodontalWhereUniqueInput
  }


  /**
   * CondicaoPeriodontal findFirst
   */
  export type CondicaoPeriodontalFindFirstArgs = {
    /**
     * Select specific fields to fetch from the CondicaoPeriodontal
     * 
    **/
    select?: CondicaoPeriodontalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CondicaoPeriodontalInclude | null
    /**
     * Throw an Error if a CondicaoPeriodontal can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which CondicaoPeriodontal to fetch.
     * 
    **/
    where?: CondicaoPeriodontalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CondicaoPeriodontals to fetch.
     * 
    **/
    orderBy?: Enumerable<CondicaoPeriodontalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CondicaoPeriodontals.
     * 
    **/
    cursor?: CondicaoPeriodontalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CondicaoPeriodontals from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CondicaoPeriodontals.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CondicaoPeriodontals.
     * 
    **/
    distinct?: Enumerable<CondicaoPeriodontalScalarFieldEnum>
  }


  /**
   * CondicaoPeriodontal findMany
   */
  export type CondicaoPeriodontalFindManyArgs = {
    /**
     * Select specific fields to fetch from the CondicaoPeriodontal
     * 
    **/
    select?: CondicaoPeriodontalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CondicaoPeriodontalInclude | null
    /**
     * Filter, which CondicaoPeriodontals to fetch.
     * 
    **/
    where?: CondicaoPeriodontalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CondicaoPeriodontals to fetch.
     * 
    **/
    orderBy?: Enumerable<CondicaoPeriodontalOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CondicaoPeriodontals.
     * 
    **/
    cursor?: CondicaoPeriodontalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CondicaoPeriodontals from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CondicaoPeriodontals.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CondicaoPeriodontalScalarFieldEnum>
  }


  /**
   * CondicaoPeriodontal create
   */
  export type CondicaoPeriodontalCreateArgs = {
    /**
     * Select specific fields to fetch from the CondicaoPeriodontal
     * 
    **/
    select?: CondicaoPeriodontalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CondicaoPeriodontalInclude | null
    /**
     * The data needed to create a CondicaoPeriodontal.
     * 
    **/
    data: XOR<CondicaoPeriodontalCreateInput, CondicaoPeriodontalUncheckedCreateInput>
  }


  /**
   * CondicaoPeriodontal createMany
   */
  export type CondicaoPeriodontalCreateManyArgs = {
    /**
     * The data used to create many CondicaoPeriodontals.
     * 
    **/
    data: Enumerable<CondicaoPeriodontalCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * CondicaoPeriodontal update
   */
  export type CondicaoPeriodontalUpdateArgs = {
    /**
     * Select specific fields to fetch from the CondicaoPeriodontal
     * 
    **/
    select?: CondicaoPeriodontalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CondicaoPeriodontalInclude | null
    /**
     * The data needed to update a CondicaoPeriodontal.
     * 
    **/
    data: XOR<CondicaoPeriodontalUpdateInput, CondicaoPeriodontalUncheckedUpdateInput>
    /**
     * Choose, which CondicaoPeriodontal to update.
     * 
    **/
    where: CondicaoPeriodontalWhereUniqueInput
  }


  /**
   * CondicaoPeriodontal updateMany
   */
  export type CondicaoPeriodontalUpdateManyArgs = {
    /**
     * The data used to update CondicaoPeriodontals.
     * 
    **/
    data: XOR<CondicaoPeriodontalUpdateManyMutationInput, CondicaoPeriodontalUncheckedUpdateManyInput>
    /**
     * Filter which CondicaoPeriodontals to update
     * 
    **/
    where?: CondicaoPeriodontalWhereInput
  }


  /**
   * CondicaoPeriodontal upsert
   */
  export type CondicaoPeriodontalUpsertArgs = {
    /**
     * Select specific fields to fetch from the CondicaoPeriodontal
     * 
    **/
    select?: CondicaoPeriodontalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CondicaoPeriodontalInclude | null
    /**
     * The filter to search for the CondicaoPeriodontal to update in case it exists.
     * 
    **/
    where: CondicaoPeriodontalWhereUniqueInput
    /**
     * In case the CondicaoPeriodontal found by the `where` argument doesn't exist, create a new CondicaoPeriodontal with this data.
     * 
    **/
    create: XOR<CondicaoPeriodontalCreateInput, CondicaoPeriodontalUncheckedCreateInput>
    /**
     * In case the CondicaoPeriodontal was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CondicaoPeriodontalUpdateInput, CondicaoPeriodontalUncheckedUpdateInput>
  }


  /**
   * CondicaoPeriodontal delete
   */
  export type CondicaoPeriodontalDeleteArgs = {
    /**
     * Select specific fields to fetch from the CondicaoPeriodontal
     * 
    **/
    select?: CondicaoPeriodontalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CondicaoPeriodontalInclude | null
    /**
     * Filter which CondicaoPeriodontal to delete.
     * 
    **/
    where: CondicaoPeriodontalWhereUniqueInput
  }


  /**
   * CondicaoPeriodontal deleteMany
   */
  export type CondicaoPeriodontalDeleteManyArgs = {
    /**
     * Filter which CondicaoPeriodontals to delete
     * 
    **/
    where?: CondicaoPeriodontalWhereInput
  }


  /**
   * CondicaoPeriodontal without action
   */
  export type CondicaoPeriodontalArgs = {
    /**
     * Select specific fields to fetch from the CondicaoPeriodontal
     * 
    **/
    select?: CondicaoPeriodontalSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CondicaoPeriodontalInclude | null
  }



  /**
   * Model Exame
   */


  export type AggregateExame = {
    _count: ExameCountAggregateOutputType | null
    _avg: ExameAvgAggregateOutputType | null
    _sum: ExameSumAggregateOutputType | null
    _min: ExameMinAggregateOutputType | null
    _max: ExameMaxAggregateOutputType | null
  }

  export type ExameAvgAggregateOutputType = {
    id: number | null
    idData: number | null
    idPessoa: number | null
    idCondicaoPeriodontal: number | null
    idLocal: number | null
    idUsuario: number | null
    idTraumatismoDentario: number | null
    idMarcadorConsumoAlimentar: number | null
    overjetMaxilarAnterior: number | null
    overjetMandibularAnterior: number | null
    mordidaAbertaVerticalAnterior: number | null
  }

  export type ExameSumAggregateOutputType = {
    id: number | null
    idData: number | null
    idPessoa: number | null
    idCondicaoPeriodontal: number | null
    idLocal: number | null
    idUsuario: number | null
    idTraumatismoDentario: number | null
    idMarcadorConsumoAlimentar: number | null
    overjetMaxilarAnterior: number | null
    overjetMandibularAnterior: number | null
    mordidaAbertaVerticalAnterior: number | null
  }

  export type ExameMinAggregateOutputType = {
    id: number | null
    idData: number | null
    idPessoa: number | null
    idCondicaoPeriodontal: number | null
    idLocal: number | null
    idUsuario: number | null
    idTraumatismoDentario: number | null
    idMarcadorConsumoAlimentar: number | null
    fluoroseDentaria: FluoroseDentaria | null
    overjetMaxilarAnterior: number | null
    overjetMandibularAnterior: number | null
    mordidaAbertaVerticalAnterior: number | null
    relacaoMolarAnteroPosterior: RelacaoMolarAnteroPosterior | null
    observacao: string | null
    arquivado: boolean | null
  }

  export type ExameMaxAggregateOutputType = {
    id: number | null
    idData: number | null
    idPessoa: number | null
    idCondicaoPeriodontal: number | null
    idLocal: number | null
    idUsuario: number | null
    idTraumatismoDentario: number | null
    idMarcadorConsumoAlimentar: number | null
    fluoroseDentaria: FluoroseDentaria | null
    overjetMaxilarAnterior: number | null
    overjetMandibularAnterior: number | null
    mordidaAbertaVerticalAnterior: number | null
    relacaoMolarAnteroPosterior: RelacaoMolarAnteroPosterior | null
    observacao: string | null
    arquivado: boolean | null
  }

  export type ExameCountAggregateOutputType = {
    id: number
    idData: number
    idPessoa: number
    idCondicaoPeriodontal: number
    idLocal: number
    idUsuario: number
    idTraumatismoDentario: number
    idMarcadorConsumoAlimentar: number
    fluoroseDentaria: number
    overjetMaxilarAnterior: number
    overjetMandibularAnterior: number
    mordidaAbertaVerticalAnterior: number
    relacaoMolarAnteroPosterior: number
    observacao: number
    arquivado: number
    _all: number
  }


  export type ExameAvgAggregateInputType = {
    id?: true
    idData?: true
    idPessoa?: true
    idCondicaoPeriodontal?: true
    idLocal?: true
    idUsuario?: true
    idTraumatismoDentario?: true
    idMarcadorConsumoAlimentar?: true
    overjetMaxilarAnterior?: true
    overjetMandibularAnterior?: true
    mordidaAbertaVerticalAnterior?: true
  }

  export type ExameSumAggregateInputType = {
    id?: true
    idData?: true
    idPessoa?: true
    idCondicaoPeriodontal?: true
    idLocal?: true
    idUsuario?: true
    idTraumatismoDentario?: true
    idMarcadorConsumoAlimentar?: true
    overjetMaxilarAnterior?: true
    overjetMandibularAnterior?: true
    mordidaAbertaVerticalAnterior?: true
  }

  export type ExameMinAggregateInputType = {
    id?: true
    idData?: true
    idPessoa?: true
    idCondicaoPeriodontal?: true
    idLocal?: true
    idUsuario?: true
    idTraumatismoDentario?: true
    idMarcadorConsumoAlimentar?: true
    fluoroseDentaria?: true
    overjetMaxilarAnterior?: true
    overjetMandibularAnterior?: true
    mordidaAbertaVerticalAnterior?: true
    relacaoMolarAnteroPosterior?: true
    observacao?: true
    arquivado?: true
  }

  export type ExameMaxAggregateInputType = {
    id?: true
    idData?: true
    idPessoa?: true
    idCondicaoPeriodontal?: true
    idLocal?: true
    idUsuario?: true
    idTraumatismoDentario?: true
    idMarcadorConsumoAlimentar?: true
    fluoroseDentaria?: true
    overjetMaxilarAnterior?: true
    overjetMandibularAnterior?: true
    mordidaAbertaVerticalAnterior?: true
    relacaoMolarAnteroPosterior?: true
    observacao?: true
    arquivado?: true
  }

  export type ExameCountAggregateInputType = {
    id?: true
    idData?: true
    idPessoa?: true
    idCondicaoPeriodontal?: true
    idLocal?: true
    idUsuario?: true
    idTraumatismoDentario?: true
    idMarcadorConsumoAlimentar?: true
    fluoroseDentaria?: true
    overjetMaxilarAnterior?: true
    overjetMandibularAnterior?: true
    mordidaAbertaVerticalAnterior?: true
    relacaoMolarAnteroPosterior?: true
    observacao?: true
    arquivado?: true
    _all?: true
  }

  export type ExameAggregateArgs = {
    /**
     * Filter which Exame to aggregate.
     * 
    **/
    where?: ExameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exames to fetch.
     * 
    **/
    orderBy?: Enumerable<ExameOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ExameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exames from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exames.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exames
    **/
    _count?: true | ExameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExameMaxAggregateInputType
  }

  export type GetExameAggregateType<T extends ExameAggregateArgs> = {
        [P in keyof T & keyof AggregateExame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExame[P]>
      : GetScalarType<T[P], AggregateExame[P]>
  }




  export type ExameGroupByArgs = {
    where?: ExameWhereInput
    orderBy?: Enumerable<ExameOrderByWithAggregationInput>
    by: Array<ExameScalarFieldEnum>
    having?: ExameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExameCountAggregateInputType | true
    _avg?: ExameAvgAggregateInputType
    _sum?: ExameSumAggregateInputType
    _min?: ExameMinAggregateInputType
    _max?: ExameMaxAggregateInputType
  }


  export type ExameGroupByOutputType = {
    id: number
    idData: number
    idPessoa: number
    idCondicaoPeriodontal: number | null
    idLocal: number
    idUsuario: number
    idTraumatismoDentario: number | null
    idMarcadorConsumoAlimentar: number
    fluoroseDentaria: FluoroseDentaria
    overjetMaxilarAnterior: number
    overjetMandibularAnterior: number
    mordidaAbertaVerticalAnterior: number
    relacaoMolarAnteroPosterior: RelacaoMolarAnteroPosterior
    observacao: string
    arquivado: boolean
    _count: ExameCountAggregateOutputType | null
    _avg: ExameAvgAggregateOutputType | null
    _sum: ExameSumAggregateOutputType | null
    _min: ExameMinAggregateOutputType | null
    _max: ExameMaxAggregateOutputType | null
  }

  type GetExameGroupByPayload<T extends ExameGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ExameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExameGroupByOutputType[P]>
            : GetScalarType<T[P], ExameGroupByOutputType[P]>
        }
      >
    >


  export type ExameSelect = {
    id?: boolean
    data?: boolean | DataArgs
    idData?: boolean
    pessoa?: boolean | PessoaArgs
    idPessoa?: boolean
    condicaoPeriodontal?: boolean | CondicaoPeriodontalArgs
    idCondicaoPeriodontal?: boolean
    local?: boolean | LocalArgs
    idLocal?: boolean
    usuario?: boolean | UsuarioArgs
    idUsuario?: boolean
    traumatismoDentario?: boolean | TraumatismoDentarioArgs
    idTraumatismoDentario?: boolean
    marcadorConsumoAlimentar?: boolean | MarcadorConsumoAlimentarArgs
    idMarcadorConsumoAlimentar?: boolean
    fluoroseDentaria?: boolean
    overjetMaxilarAnterior?: boolean
    overjetMandibularAnterior?: boolean
    mordidaAbertaVerticalAnterior?: boolean
    relacaoMolarAnteroPosterior?: boolean
    observacao?: boolean
    dentes?: boolean | DenteFindManyArgs
    Soho?: boolean | SohoArgs
    CPQ?: boolean | CPQArgs
    arquivado?: boolean
    _count?: boolean | ExameCountOutputTypeArgs
  }

  export type ExameInclude = {
    data?: boolean | DataArgs
    pessoa?: boolean | PessoaArgs
    condicaoPeriodontal?: boolean | CondicaoPeriodontalArgs
    local?: boolean | LocalArgs
    usuario?: boolean | UsuarioArgs
    traumatismoDentario?: boolean | TraumatismoDentarioArgs
    marcadorConsumoAlimentar?: boolean | MarcadorConsumoAlimentarArgs
    dentes?: boolean | DenteFindManyArgs
    Soho?: boolean | SohoArgs
    CPQ?: boolean | CPQArgs
    _count?: boolean | ExameCountOutputTypeArgs
  }

  export type ExameGetPayload<
    S extends boolean | null | undefined | ExameArgs,
    U = keyof S
      > = S extends true
        ? Exame
    : S extends undefined
    ? never
    : S extends ExameArgs | ExameFindManyArgs
    ?'include' extends U
    ? Exame  & {
    [P in TrueKeys<S['include']>]:
        P extends 'data' ? DataGetPayload<S['include'][P]> :
        P extends 'pessoa' ? PessoaGetPayload<S['include'][P]> :
        P extends 'condicaoPeriodontal' ? CondicaoPeriodontalGetPayload<S['include'][P]> | null :
        P extends 'local' ? LocalGetPayload<S['include'][P]> :
        P extends 'usuario' ? UsuarioGetPayload<S['include'][P]> :
        P extends 'traumatismoDentario' ? TraumatismoDentarioGetPayload<S['include'][P]> | null :
        P extends 'marcadorConsumoAlimentar' ? MarcadorConsumoAlimentarGetPayload<S['include'][P]> :
        P extends 'dentes' ? Array < DenteGetPayload<S['include'][P]>>  :
        P extends 'Soho' ? SohoGetPayload<S['include'][P]> | null :
        P extends 'CPQ' ? CPQGetPayload<S['include'][P]> | null :
        P extends '_count' ? ExameCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'data' ? DataGetPayload<S['select'][P]> :
        P extends 'pessoa' ? PessoaGetPayload<S['select'][P]> :
        P extends 'condicaoPeriodontal' ? CondicaoPeriodontalGetPayload<S['select'][P]> | null :
        P extends 'local' ? LocalGetPayload<S['select'][P]> :
        P extends 'usuario' ? UsuarioGetPayload<S['select'][P]> :
        P extends 'traumatismoDentario' ? TraumatismoDentarioGetPayload<S['select'][P]> | null :
        P extends 'marcadorConsumoAlimentar' ? MarcadorConsumoAlimentarGetPayload<S['select'][P]> :
        P extends 'dentes' ? Array < DenteGetPayload<S['select'][P]>>  :
        P extends 'Soho' ? SohoGetPayload<S['select'][P]> | null :
        P extends 'CPQ' ? CPQGetPayload<S['select'][P]> | null :
        P extends '_count' ? ExameCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Exame ? Exame[P] : never
  } 
    : Exame
  : Exame


  type ExameCountArgs = Merge<
    Omit<ExameFindManyArgs, 'select' | 'include'> & {
      select?: ExameCountAggregateInputType | true
    }
  >

  export interface ExameDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Exame that matches the filter.
     * @param {ExameFindUniqueArgs} args - Arguments to find a Exame
     * @example
     * // Get one Exame
     * const exame = await prisma.exame.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ExameFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ExameFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Exame'> extends True ? CheckSelect<T, Prisma__ExameClient<Exame>, Prisma__ExameClient<ExameGetPayload<T>>> : CheckSelect<T, Prisma__ExameClient<Exame | null >, Prisma__ExameClient<ExameGetPayload<T> | null >>

    /**
     * Find the first Exame that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExameFindFirstArgs} args - Arguments to find a Exame
     * @example
     * // Get one Exame
     * const exame = await prisma.exame.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ExameFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ExameFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Exame'> extends True ? CheckSelect<T, Prisma__ExameClient<Exame>, Prisma__ExameClient<ExameGetPayload<T>>> : CheckSelect<T, Prisma__ExameClient<Exame | null >, Prisma__ExameClient<ExameGetPayload<T> | null >>

    /**
     * Find zero or more Exames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExameFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exames
     * const exames = await prisma.exame.findMany()
     * 
     * // Get first 10 Exames
     * const exames = await prisma.exame.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exameWithIdOnly = await prisma.exame.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ExameFindManyArgs>(
      args?: SelectSubset<T, ExameFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Exame>>, PrismaPromise<Array<ExameGetPayload<T>>>>

    /**
     * Create a Exame.
     * @param {ExameCreateArgs} args - Arguments to create a Exame.
     * @example
     * // Create one Exame
     * const Exame = await prisma.exame.create({
     *   data: {
     *     // ... data to create a Exame
     *   }
     * })
     * 
    **/
    create<T extends ExameCreateArgs>(
      args: SelectSubset<T, ExameCreateArgs>
    ): CheckSelect<T, Prisma__ExameClient<Exame>, Prisma__ExameClient<ExameGetPayload<T>>>

    /**
     * Create many Exames.
     *     @param {ExameCreateManyArgs} args - Arguments to create many Exames.
     *     @example
     *     // Create many Exames
     *     const exame = await prisma.exame.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ExameCreateManyArgs>(
      args?: SelectSubset<T, ExameCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Exame.
     * @param {ExameDeleteArgs} args - Arguments to delete one Exame.
     * @example
     * // Delete one Exame
     * const Exame = await prisma.exame.delete({
     *   where: {
     *     // ... filter to delete one Exame
     *   }
     * })
     * 
    **/
    delete<T extends ExameDeleteArgs>(
      args: SelectSubset<T, ExameDeleteArgs>
    ): CheckSelect<T, Prisma__ExameClient<Exame>, Prisma__ExameClient<ExameGetPayload<T>>>

    /**
     * Update one Exame.
     * @param {ExameUpdateArgs} args - Arguments to update one Exame.
     * @example
     * // Update one Exame
     * const exame = await prisma.exame.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ExameUpdateArgs>(
      args: SelectSubset<T, ExameUpdateArgs>
    ): CheckSelect<T, Prisma__ExameClient<Exame>, Prisma__ExameClient<ExameGetPayload<T>>>

    /**
     * Delete zero or more Exames.
     * @param {ExameDeleteManyArgs} args - Arguments to filter Exames to delete.
     * @example
     * // Delete a few Exames
     * const { count } = await prisma.exame.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ExameDeleteManyArgs>(
      args?: SelectSubset<T, ExameDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exames
     * const exame = await prisma.exame.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ExameUpdateManyArgs>(
      args: SelectSubset<T, ExameUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Exame.
     * @param {ExameUpsertArgs} args - Arguments to update or create a Exame.
     * @example
     * // Update or create a Exame
     * const exame = await prisma.exame.upsert({
     *   create: {
     *     // ... data to create a Exame
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exame we want to update
     *   }
     * })
    **/
    upsert<T extends ExameUpsertArgs>(
      args: SelectSubset<T, ExameUpsertArgs>
    ): CheckSelect<T, Prisma__ExameClient<Exame>, Prisma__ExameClient<ExameGetPayload<T>>>

    /**
     * Count the number of Exames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExameCountArgs} args - Arguments to filter Exames to count.
     * @example
     * // Count the number of Exames
     * const count = await prisma.exame.count({
     *   where: {
     *     // ... the filter for the Exames we want to count
     *   }
     * })
    **/
    count<T extends ExameCountArgs>(
      args?: Subset<T, ExameCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExameAggregateArgs>(args: Subset<T, ExameAggregateArgs>): PrismaPromise<GetExameAggregateType<T>>

    /**
     * Group by Exame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExameGroupByArgs['orderBy'] }
        : { orderBy?: ExameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExameGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exame.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ExameClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    data<T extends DataArgs = {}>(args?: Subset<T, DataArgs>): CheckSelect<T, Prisma__DataClient<Data | null >, Prisma__DataClient<DataGetPayload<T> | null >>;

    pessoa<T extends PessoaArgs = {}>(args?: Subset<T, PessoaArgs>): CheckSelect<T, Prisma__PessoaClient<Pessoa | null >, Prisma__PessoaClient<PessoaGetPayload<T> | null >>;

    condicaoPeriodontal<T extends CondicaoPeriodontalArgs = {}>(args?: Subset<T, CondicaoPeriodontalArgs>): CheckSelect<T, Prisma__CondicaoPeriodontalClient<CondicaoPeriodontal | null >, Prisma__CondicaoPeriodontalClient<CondicaoPeriodontalGetPayload<T> | null >>;

    local<T extends LocalArgs = {}>(args?: Subset<T, LocalArgs>): CheckSelect<T, Prisma__LocalClient<Local | null >, Prisma__LocalClient<LocalGetPayload<T> | null >>;

    usuario<T extends UsuarioArgs = {}>(args?: Subset<T, UsuarioArgs>): CheckSelect<T, Prisma__UsuarioClient<Usuario | null >, Prisma__UsuarioClient<UsuarioGetPayload<T> | null >>;

    traumatismoDentario<T extends TraumatismoDentarioArgs = {}>(args?: Subset<T, TraumatismoDentarioArgs>): CheckSelect<T, Prisma__TraumatismoDentarioClient<TraumatismoDentario | null >, Prisma__TraumatismoDentarioClient<TraumatismoDentarioGetPayload<T> | null >>;

    marcadorConsumoAlimentar<T extends MarcadorConsumoAlimentarArgs = {}>(args?: Subset<T, MarcadorConsumoAlimentarArgs>): CheckSelect<T, Prisma__MarcadorConsumoAlimentarClient<MarcadorConsumoAlimentar | null >, Prisma__MarcadorConsumoAlimentarClient<MarcadorConsumoAlimentarGetPayload<T> | null >>;

    dentes<T extends DenteFindManyArgs = {}>(args?: Subset<T, DenteFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Dente>>, PrismaPromise<Array<DenteGetPayload<T>>>>;

    Soho<T extends SohoArgs = {}>(args?: Subset<T, SohoArgs>): CheckSelect<T, Prisma__SohoClient<Soho | null >, Prisma__SohoClient<SohoGetPayload<T> | null >>;

    CPQ<T extends CPQArgs = {}>(args?: Subset<T, CPQArgs>): CheckSelect<T, Prisma__CPQClient<CPQ | null >, Prisma__CPQClient<CPQGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Exame findUnique
   */
  export type ExameFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Exame
     * 
    **/
    select?: ExameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ExameInclude | null
    /**
     * Throw an Error if a Exame can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Exame to fetch.
     * 
    **/
    where: ExameWhereUniqueInput
  }


  /**
   * Exame findFirst
   */
  export type ExameFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Exame
     * 
    **/
    select?: ExameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ExameInclude | null
    /**
     * Throw an Error if a Exame can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Exame to fetch.
     * 
    **/
    where?: ExameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exames to fetch.
     * 
    **/
    orderBy?: Enumerable<ExameOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exames.
     * 
    **/
    cursor?: ExameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exames from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exames.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exames.
     * 
    **/
    distinct?: Enumerable<ExameScalarFieldEnum>
  }


  /**
   * Exame findMany
   */
  export type ExameFindManyArgs = {
    /**
     * Select specific fields to fetch from the Exame
     * 
    **/
    select?: ExameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ExameInclude | null
    /**
     * Filter, which Exames to fetch.
     * 
    **/
    where?: ExameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exames to fetch.
     * 
    **/
    orderBy?: Enumerable<ExameOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exames.
     * 
    **/
    cursor?: ExameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exames from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exames.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ExameScalarFieldEnum>
  }


  /**
   * Exame create
   */
  export type ExameCreateArgs = {
    /**
     * Select specific fields to fetch from the Exame
     * 
    **/
    select?: ExameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ExameInclude | null
    /**
     * The data needed to create a Exame.
     * 
    **/
    data: XOR<ExameCreateInput, ExameUncheckedCreateInput>
  }


  /**
   * Exame createMany
   */
  export type ExameCreateManyArgs = {
    /**
     * The data used to create many Exames.
     * 
    **/
    data: Enumerable<ExameCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Exame update
   */
  export type ExameUpdateArgs = {
    /**
     * Select specific fields to fetch from the Exame
     * 
    **/
    select?: ExameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ExameInclude | null
    /**
     * The data needed to update a Exame.
     * 
    **/
    data: XOR<ExameUpdateInput, ExameUncheckedUpdateInput>
    /**
     * Choose, which Exame to update.
     * 
    **/
    where: ExameWhereUniqueInput
  }


  /**
   * Exame updateMany
   */
  export type ExameUpdateManyArgs = {
    /**
     * The data used to update Exames.
     * 
    **/
    data: XOR<ExameUpdateManyMutationInput, ExameUncheckedUpdateManyInput>
    /**
     * Filter which Exames to update
     * 
    **/
    where?: ExameWhereInput
  }


  /**
   * Exame upsert
   */
  export type ExameUpsertArgs = {
    /**
     * Select specific fields to fetch from the Exame
     * 
    **/
    select?: ExameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ExameInclude | null
    /**
     * The filter to search for the Exame to update in case it exists.
     * 
    **/
    where: ExameWhereUniqueInput
    /**
     * In case the Exame found by the `where` argument doesn't exist, create a new Exame with this data.
     * 
    **/
    create: XOR<ExameCreateInput, ExameUncheckedCreateInput>
    /**
     * In case the Exame was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ExameUpdateInput, ExameUncheckedUpdateInput>
  }


  /**
   * Exame delete
   */
  export type ExameDeleteArgs = {
    /**
     * Select specific fields to fetch from the Exame
     * 
    **/
    select?: ExameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ExameInclude | null
    /**
     * Filter which Exame to delete.
     * 
    **/
    where: ExameWhereUniqueInput
  }


  /**
   * Exame deleteMany
   */
  export type ExameDeleteManyArgs = {
    /**
     * Filter which Exames to delete
     * 
    **/
    where?: ExameWhereInput
  }


  /**
   * Exame without action
   */
  export type ExameArgs = {
    /**
     * Select specific fields to fetch from the Exame
     * 
    **/
    select?: ExameSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ExameInclude | null
  }



  /**
   * Model Dente
   */


  export type AggregateDente = {
    _count: DenteCountAggregateOutputType | null
    _avg: DenteAvgAggregateOutputType | null
    _sum: DenteSumAggregateOutputType | null
    _min: DenteMinAggregateOutputType | null
    _max: DenteMaxAggregateOutputType | null
  }

  export type DenteAvgAggregateOutputType = {
    id: number | null
    exameId: number | null
    numero: number | null
    oclusal: number | null
    mesial: number | null
    distal: number | null
    palatina: number | null
    vestibular: number | null
    trat: number | null
    pufa: number | null
  }

  export type DenteSumAggregateOutputType = {
    id: number | null
    exameId: number | null
    numero: number | null
    oclusal: number | null
    mesial: number | null
    distal: number | null
    palatina: number | null
    vestibular: number | null
    trat: number | null
    pufa: number | null
  }

  export type DenteMinAggregateOutputType = {
    id: number | null
    exameId: number | null
    leite: boolean | null
    removido: MotivoRemovido | null
    numero: number | null
    oclusal: number | null
    mesial: number | null
    distal: number | null
    palatina: number | null
    vestibular: number | null
    trat: number | null
    pufa: number | null
  }

  export type DenteMaxAggregateOutputType = {
    id: number | null
    exameId: number | null
    leite: boolean | null
    removido: MotivoRemovido | null
    numero: number | null
    oclusal: number | null
    mesial: number | null
    distal: number | null
    palatina: number | null
    vestibular: number | null
    trat: number | null
    pufa: number | null
  }

  export type DenteCountAggregateOutputType = {
    id: number
    exameId: number
    leite: number
    removido: number
    numero: number
    oclusal: number
    mesial: number
    distal: number
    palatina: number
    vestibular: number
    trat: number
    pufa: number
    _all: number
  }


  export type DenteAvgAggregateInputType = {
    id?: true
    exameId?: true
    numero?: true
    oclusal?: true
    mesial?: true
    distal?: true
    palatina?: true
    vestibular?: true
    trat?: true
    pufa?: true
  }

  export type DenteSumAggregateInputType = {
    id?: true
    exameId?: true
    numero?: true
    oclusal?: true
    mesial?: true
    distal?: true
    palatina?: true
    vestibular?: true
    trat?: true
    pufa?: true
  }

  export type DenteMinAggregateInputType = {
    id?: true
    exameId?: true
    leite?: true
    removido?: true
    numero?: true
    oclusal?: true
    mesial?: true
    distal?: true
    palatina?: true
    vestibular?: true
    trat?: true
    pufa?: true
  }

  export type DenteMaxAggregateInputType = {
    id?: true
    exameId?: true
    leite?: true
    removido?: true
    numero?: true
    oclusal?: true
    mesial?: true
    distal?: true
    palatina?: true
    vestibular?: true
    trat?: true
    pufa?: true
  }

  export type DenteCountAggregateInputType = {
    id?: true
    exameId?: true
    leite?: true
    removido?: true
    numero?: true
    oclusal?: true
    mesial?: true
    distal?: true
    palatina?: true
    vestibular?: true
    trat?: true
    pufa?: true
    _all?: true
  }

  export type DenteAggregateArgs = {
    /**
     * Filter which Dente to aggregate.
     * 
    **/
    where?: DenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dentes to fetch.
     * 
    **/
    orderBy?: Enumerable<DenteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: DenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dentes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dentes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dentes
    **/
    _count?: true | DenteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DenteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DenteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DenteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DenteMaxAggregateInputType
  }

  export type GetDenteAggregateType<T extends DenteAggregateArgs> = {
        [P in keyof T & keyof AggregateDente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDente[P]>
      : GetScalarType<T[P], AggregateDente[P]>
  }




  export type DenteGroupByArgs = {
    where?: DenteWhereInput
    orderBy?: Enumerable<DenteOrderByWithAggregationInput>
    by: Array<DenteScalarFieldEnum>
    having?: DenteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DenteCountAggregateInputType | true
    _avg?: DenteAvgAggregateInputType
    _sum?: DenteSumAggregateInputType
    _min?: DenteMinAggregateInputType
    _max?: DenteMaxAggregateInputType
  }


  export type DenteGroupByOutputType = {
    id: number
    exameId: number
    leite: boolean
    removido: MotivoRemovido | null
    numero: number
    oclusal: number | null
    mesial: number | null
    distal: number | null
    palatina: number | null
    vestibular: number | null
    trat: number | null
    pufa: number | null
    _count: DenteCountAggregateOutputType | null
    _avg: DenteAvgAggregateOutputType | null
    _sum: DenteSumAggregateOutputType | null
    _min: DenteMinAggregateOutputType | null
    _max: DenteMaxAggregateOutputType | null
  }

  type GetDenteGroupByPayload<T extends DenteGroupByArgs> = PrismaPromise<
    Array<
      PickArray<DenteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DenteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DenteGroupByOutputType[P]>
            : GetScalarType<T[P], DenteGroupByOutputType[P]>
        }
      >
    >


  export type DenteSelect = {
    id?: boolean
    Exame?: boolean | ExameArgs
    exameId?: boolean
    leite?: boolean
    removido?: boolean
    numero?: boolean
    oclusal?: boolean
    mesial?: boolean
    distal?: boolean
    palatina?: boolean
    vestibular?: boolean
    trat?: boolean
    pufa?: boolean
  }

  export type DenteInclude = {
    Exame?: boolean | ExameArgs
  }

  export type DenteGetPayload<
    S extends boolean | null | undefined | DenteArgs,
    U = keyof S
      > = S extends true
        ? Dente
    : S extends undefined
    ? never
    : S extends DenteArgs | DenteFindManyArgs
    ?'include' extends U
    ? Dente  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Exame' ? ExameGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Exame' ? ExameGetPayload<S['select'][P]> :  P extends keyof Dente ? Dente[P] : never
  } 
    : Dente
  : Dente


  type DenteCountArgs = Merge<
    Omit<DenteFindManyArgs, 'select' | 'include'> & {
      select?: DenteCountAggregateInputType | true
    }
  >

  export interface DenteDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Dente that matches the filter.
     * @param {DenteFindUniqueArgs} args - Arguments to find a Dente
     * @example
     * // Get one Dente
     * const dente = await prisma.dente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DenteFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DenteFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Dente'> extends True ? CheckSelect<T, Prisma__DenteClient<Dente>, Prisma__DenteClient<DenteGetPayload<T>>> : CheckSelect<T, Prisma__DenteClient<Dente | null >, Prisma__DenteClient<DenteGetPayload<T> | null >>

    /**
     * Find the first Dente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DenteFindFirstArgs} args - Arguments to find a Dente
     * @example
     * // Get one Dente
     * const dente = await prisma.dente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DenteFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DenteFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Dente'> extends True ? CheckSelect<T, Prisma__DenteClient<Dente>, Prisma__DenteClient<DenteGetPayload<T>>> : CheckSelect<T, Prisma__DenteClient<Dente | null >, Prisma__DenteClient<DenteGetPayload<T> | null >>

    /**
     * Find zero or more Dentes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DenteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dentes
     * const dentes = await prisma.dente.findMany()
     * 
     * // Get first 10 Dentes
     * const dentes = await prisma.dente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const denteWithIdOnly = await prisma.dente.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DenteFindManyArgs>(
      args?: SelectSubset<T, DenteFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Dente>>, PrismaPromise<Array<DenteGetPayload<T>>>>

    /**
     * Create a Dente.
     * @param {DenteCreateArgs} args - Arguments to create a Dente.
     * @example
     * // Create one Dente
     * const Dente = await prisma.dente.create({
     *   data: {
     *     // ... data to create a Dente
     *   }
     * })
     * 
    **/
    create<T extends DenteCreateArgs>(
      args: SelectSubset<T, DenteCreateArgs>
    ): CheckSelect<T, Prisma__DenteClient<Dente>, Prisma__DenteClient<DenteGetPayload<T>>>

    /**
     * Create many Dentes.
     *     @param {DenteCreateManyArgs} args - Arguments to create many Dentes.
     *     @example
     *     // Create many Dentes
     *     const dente = await prisma.dente.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DenteCreateManyArgs>(
      args?: SelectSubset<T, DenteCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Dente.
     * @param {DenteDeleteArgs} args - Arguments to delete one Dente.
     * @example
     * // Delete one Dente
     * const Dente = await prisma.dente.delete({
     *   where: {
     *     // ... filter to delete one Dente
     *   }
     * })
     * 
    **/
    delete<T extends DenteDeleteArgs>(
      args: SelectSubset<T, DenteDeleteArgs>
    ): CheckSelect<T, Prisma__DenteClient<Dente>, Prisma__DenteClient<DenteGetPayload<T>>>

    /**
     * Update one Dente.
     * @param {DenteUpdateArgs} args - Arguments to update one Dente.
     * @example
     * // Update one Dente
     * const dente = await prisma.dente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DenteUpdateArgs>(
      args: SelectSubset<T, DenteUpdateArgs>
    ): CheckSelect<T, Prisma__DenteClient<Dente>, Prisma__DenteClient<DenteGetPayload<T>>>

    /**
     * Delete zero or more Dentes.
     * @param {DenteDeleteManyArgs} args - Arguments to filter Dentes to delete.
     * @example
     * // Delete a few Dentes
     * const { count } = await prisma.dente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DenteDeleteManyArgs>(
      args?: SelectSubset<T, DenteDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DenteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dentes
     * const dente = await prisma.dente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DenteUpdateManyArgs>(
      args: SelectSubset<T, DenteUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Dente.
     * @param {DenteUpsertArgs} args - Arguments to update or create a Dente.
     * @example
     * // Update or create a Dente
     * const dente = await prisma.dente.upsert({
     *   create: {
     *     // ... data to create a Dente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dente we want to update
     *   }
     * })
    **/
    upsert<T extends DenteUpsertArgs>(
      args: SelectSubset<T, DenteUpsertArgs>
    ): CheckSelect<T, Prisma__DenteClient<Dente>, Prisma__DenteClient<DenteGetPayload<T>>>

    /**
     * Count the number of Dentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DenteCountArgs} args - Arguments to filter Dentes to count.
     * @example
     * // Count the number of Dentes
     * const count = await prisma.dente.count({
     *   where: {
     *     // ... the filter for the Dentes we want to count
     *   }
     * })
    **/
    count<T extends DenteCountArgs>(
      args?: Subset<T, DenteCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DenteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DenteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DenteAggregateArgs>(args: Subset<T, DenteAggregateArgs>): PrismaPromise<GetDenteAggregateType<T>>

    /**
     * Group by Dente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DenteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DenteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DenteGroupByArgs['orderBy'] }
        : { orderBy?: DenteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DenteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDenteGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DenteClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Exame<T extends ExameArgs = {}>(args?: Subset<T, ExameArgs>): CheckSelect<T, Prisma__ExameClient<Exame | null >, Prisma__ExameClient<ExameGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Dente findUnique
   */
  export type DenteFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Dente
     * 
    **/
    select?: DenteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DenteInclude | null
    /**
     * Throw an Error if a Dente can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Dente to fetch.
     * 
    **/
    where: DenteWhereUniqueInput
  }


  /**
   * Dente findFirst
   */
  export type DenteFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Dente
     * 
    **/
    select?: DenteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DenteInclude | null
    /**
     * Throw an Error if a Dente can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Dente to fetch.
     * 
    **/
    where?: DenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dentes to fetch.
     * 
    **/
    orderBy?: Enumerable<DenteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dentes.
     * 
    **/
    cursor?: DenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dentes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dentes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dentes.
     * 
    **/
    distinct?: Enumerable<DenteScalarFieldEnum>
  }


  /**
   * Dente findMany
   */
  export type DenteFindManyArgs = {
    /**
     * Select specific fields to fetch from the Dente
     * 
    **/
    select?: DenteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DenteInclude | null
    /**
     * Filter, which Dentes to fetch.
     * 
    **/
    where?: DenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dentes to fetch.
     * 
    **/
    orderBy?: Enumerable<DenteOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dentes.
     * 
    **/
    cursor?: DenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dentes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dentes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DenteScalarFieldEnum>
  }


  /**
   * Dente create
   */
  export type DenteCreateArgs = {
    /**
     * Select specific fields to fetch from the Dente
     * 
    **/
    select?: DenteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DenteInclude | null
    /**
     * The data needed to create a Dente.
     * 
    **/
    data: XOR<DenteCreateInput, DenteUncheckedCreateInput>
  }


  /**
   * Dente createMany
   */
  export type DenteCreateManyArgs = {
    /**
     * The data used to create many Dentes.
     * 
    **/
    data: Enumerable<DenteCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Dente update
   */
  export type DenteUpdateArgs = {
    /**
     * Select specific fields to fetch from the Dente
     * 
    **/
    select?: DenteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DenteInclude | null
    /**
     * The data needed to update a Dente.
     * 
    **/
    data: XOR<DenteUpdateInput, DenteUncheckedUpdateInput>
    /**
     * Choose, which Dente to update.
     * 
    **/
    where: DenteWhereUniqueInput
  }


  /**
   * Dente updateMany
   */
  export type DenteUpdateManyArgs = {
    /**
     * The data used to update Dentes.
     * 
    **/
    data: XOR<DenteUpdateManyMutationInput, DenteUncheckedUpdateManyInput>
    /**
     * Filter which Dentes to update
     * 
    **/
    where?: DenteWhereInput
  }


  /**
   * Dente upsert
   */
  export type DenteUpsertArgs = {
    /**
     * Select specific fields to fetch from the Dente
     * 
    **/
    select?: DenteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DenteInclude | null
    /**
     * The filter to search for the Dente to update in case it exists.
     * 
    **/
    where: DenteWhereUniqueInput
    /**
     * In case the Dente found by the `where` argument doesn't exist, create a new Dente with this data.
     * 
    **/
    create: XOR<DenteCreateInput, DenteUncheckedCreateInput>
    /**
     * In case the Dente was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<DenteUpdateInput, DenteUncheckedUpdateInput>
  }


  /**
   * Dente delete
   */
  export type DenteDeleteArgs = {
    /**
     * Select specific fields to fetch from the Dente
     * 
    **/
    select?: DenteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DenteInclude | null
    /**
     * Filter which Dente to delete.
     * 
    **/
    where: DenteWhereUniqueInput
  }


  /**
   * Dente deleteMany
   */
  export type DenteDeleteManyArgs = {
    /**
     * Filter which Dentes to delete
     * 
    **/
    where?: DenteWhereInput
  }


  /**
   * Dente without action
   */
  export type DenteArgs = {
    /**
     * Select specific fields to fetch from the Dente
     * 
    **/
    select?: DenteSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DenteInclude | null
  }



  /**
   * Model TraumatismoDentario
   */


  export type AggregateTraumatismoDentario = {
    _count: TraumatismoDentarioCountAggregateOutputType | null
    _avg: TraumatismoDentarioAvgAggregateOutputType | null
    _sum: TraumatismoDentarioSumAggregateOutputType | null
    _min: TraumatismoDentarioMinAggregateOutputType | null
    _max: TraumatismoDentarioMaxAggregateOutputType | null
  }

  export type TraumatismoDentarioAvgAggregateOutputType = {
    id: number | null
  }

  export type TraumatismoDentarioSumAggregateOutputType = {
    id: number | null
  }

  export type TraumatismoDentarioMinAggregateOutputType = {
    id: number | null
    d_12: RespostasTraumatismoDentario | null
    d_11: RespostasTraumatismoDentario | null
    d_21: RespostasTraumatismoDentario | null
    d_22: RespostasTraumatismoDentario | null
    d_32: RespostasTraumatismoDentario | null
    d_31: RespostasTraumatismoDentario | null
    d_41: RespostasTraumatismoDentario | null
    d_42: RespostasTraumatismoDentario | null
  }

  export type TraumatismoDentarioMaxAggregateOutputType = {
    id: number | null
    d_12: RespostasTraumatismoDentario | null
    d_11: RespostasTraumatismoDentario | null
    d_21: RespostasTraumatismoDentario | null
    d_22: RespostasTraumatismoDentario | null
    d_32: RespostasTraumatismoDentario | null
    d_31: RespostasTraumatismoDentario | null
    d_41: RespostasTraumatismoDentario | null
    d_42: RespostasTraumatismoDentario | null
  }

  export type TraumatismoDentarioCountAggregateOutputType = {
    id: number
    d_12: number
    d_11: number
    d_21: number
    d_22: number
    d_32: number
    d_31: number
    d_41: number
    d_42: number
    _all: number
  }


  export type TraumatismoDentarioAvgAggregateInputType = {
    id?: true
  }

  export type TraumatismoDentarioSumAggregateInputType = {
    id?: true
  }

  export type TraumatismoDentarioMinAggregateInputType = {
    id?: true
    d_12?: true
    d_11?: true
    d_21?: true
    d_22?: true
    d_32?: true
    d_31?: true
    d_41?: true
    d_42?: true
  }

  export type TraumatismoDentarioMaxAggregateInputType = {
    id?: true
    d_12?: true
    d_11?: true
    d_21?: true
    d_22?: true
    d_32?: true
    d_31?: true
    d_41?: true
    d_42?: true
  }

  export type TraumatismoDentarioCountAggregateInputType = {
    id?: true
    d_12?: true
    d_11?: true
    d_21?: true
    d_22?: true
    d_32?: true
    d_31?: true
    d_41?: true
    d_42?: true
    _all?: true
  }

  export type TraumatismoDentarioAggregateArgs = {
    /**
     * Filter which TraumatismoDentario to aggregate.
     * 
    **/
    where?: TraumatismoDentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TraumatismoDentarios to fetch.
     * 
    **/
    orderBy?: Enumerable<TraumatismoDentarioOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TraumatismoDentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TraumatismoDentarios from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TraumatismoDentarios.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TraumatismoDentarios
    **/
    _count?: true | TraumatismoDentarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TraumatismoDentarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TraumatismoDentarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TraumatismoDentarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TraumatismoDentarioMaxAggregateInputType
  }

  export type GetTraumatismoDentarioAggregateType<T extends TraumatismoDentarioAggregateArgs> = {
        [P in keyof T & keyof AggregateTraumatismoDentario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTraumatismoDentario[P]>
      : GetScalarType<T[P], AggregateTraumatismoDentario[P]>
  }




  export type TraumatismoDentarioGroupByArgs = {
    where?: TraumatismoDentarioWhereInput
    orderBy?: Enumerable<TraumatismoDentarioOrderByWithAggregationInput>
    by: Array<TraumatismoDentarioScalarFieldEnum>
    having?: TraumatismoDentarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TraumatismoDentarioCountAggregateInputType | true
    _avg?: TraumatismoDentarioAvgAggregateInputType
    _sum?: TraumatismoDentarioSumAggregateInputType
    _min?: TraumatismoDentarioMinAggregateInputType
    _max?: TraumatismoDentarioMaxAggregateInputType
  }


  export type TraumatismoDentarioGroupByOutputType = {
    id: number
    d_12: RespostasTraumatismoDentario
    d_11: RespostasTraumatismoDentario
    d_21: RespostasTraumatismoDentario
    d_22: RespostasTraumatismoDentario
    d_32: RespostasTraumatismoDentario
    d_31: RespostasTraumatismoDentario
    d_41: RespostasTraumatismoDentario
    d_42: RespostasTraumatismoDentario
    _count: TraumatismoDentarioCountAggregateOutputType | null
    _avg: TraumatismoDentarioAvgAggregateOutputType | null
    _sum: TraumatismoDentarioSumAggregateOutputType | null
    _min: TraumatismoDentarioMinAggregateOutputType | null
    _max: TraumatismoDentarioMaxAggregateOutputType | null
  }

  type GetTraumatismoDentarioGroupByPayload<T extends TraumatismoDentarioGroupByArgs> = PrismaPromise<
    Array<
      PickArray<TraumatismoDentarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TraumatismoDentarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TraumatismoDentarioGroupByOutputType[P]>
            : GetScalarType<T[P], TraumatismoDentarioGroupByOutputType[P]>
        }
      >
    >


  export type TraumatismoDentarioSelect = {
    id?: boolean
    exame?: boolean | ExameArgs
    d_12?: boolean
    d_11?: boolean
    d_21?: boolean
    d_22?: boolean
    d_32?: boolean
    d_31?: boolean
    d_41?: boolean
    d_42?: boolean
  }

  export type TraumatismoDentarioInclude = {
    exame?: boolean | ExameArgs
  }

  export type TraumatismoDentarioGetPayload<
    S extends boolean | null | undefined | TraumatismoDentarioArgs,
    U = keyof S
      > = S extends true
        ? TraumatismoDentario
    : S extends undefined
    ? never
    : S extends TraumatismoDentarioArgs | TraumatismoDentarioFindManyArgs
    ?'include' extends U
    ? TraumatismoDentario  & {
    [P in TrueKeys<S['include']>]:
        P extends 'exame' ? ExameGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'exame' ? ExameGetPayload<S['select'][P]> | null :  P extends keyof TraumatismoDentario ? TraumatismoDentario[P] : never
  } 
    : TraumatismoDentario
  : TraumatismoDentario


  type TraumatismoDentarioCountArgs = Merge<
    Omit<TraumatismoDentarioFindManyArgs, 'select' | 'include'> & {
      select?: TraumatismoDentarioCountAggregateInputType | true
    }
  >

  export interface TraumatismoDentarioDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one TraumatismoDentario that matches the filter.
     * @param {TraumatismoDentarioFindUniqueArgs} args - Arguments to find a TraumatismoDentario
     * @example
     * // Get one TraumatismoDentario
     * const traumatismoDentario = await prisma.traumatismoDentario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TraumatismoDentarioFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TraumatismoDentarioFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TraumatismoDentario'> extends True ? CheckSelect<T, Prisma__TraumatismoDentarioClient<TraumatismoDentario>, Prisma__TraumatismoDentarioClient<TraumatismoDentarioGetPayload<T>>> : CheckSelect<T, Prisma__TraumatismoDentarioClient<TraumatismoDentario | null >, Prisma__TraumatismoDentarioClient<TraumatismoDentarioGetPayload<T> | null >>

    /**
     * Find the first TraumatismoDentario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraumatismoDentarioFindFirstArgs} args - Arguments to find a TraumatismoDentario
     * @example
     * // Get one TraumatismoDentario
     * const traumatismoDentario = await prisma.traumatismoDentario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TraumatismoDentarioFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TraumatismoDentarioFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TraumatismoDentario'> extends True ? CheckSelect<T, Prisma__TraumatismoDentarioClient<TraumatismoDentario>, Prisma__TraumatismoDentarioClient<TraumatismoDentarioGetPayload<T>>> : CheckSelect<T, Prisma__TraumatismoDentarioClient<TraumatismoDentario | null >, Prisma__TraumatismoDentarioClient<TraumatismoDentarioGetPayload<T> | null >>

    /**
     * Find zero or more TraumatismoDentarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraumatismoDentarioFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TraumatismoDentarios
     * const traumatismoDentarios = await prisma.traumatismoDentario.findMany()
     * 
     * // Get first 10 TraumatismoDentarios
     * const traumatismoDentarios = await prisma.traumatismoDentario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const traumatismoDentarioWithIdOnly = await prisma.traumatismoDentario.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TraumatismoDentarioFindManyArgs>(
      args?: SelectSubset<T, TraumatismoDentarioFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<TraumatismoDentario>>, PrismaPromise<Array<TraumatismoDentarioGetPayload<T>>>>

    /**
     * Create a TraumatismoDentario.
     * @param {TraumatismoDentarioCreateArgs} args - Arguments to create a TraumatismoDentario.
     * @example
     * // Create one TraumatismoDentario
     * const TraumatismoDentario = await prisma.traumatismoDentario.create({
     *   data: {
     *     // ... data to create a TraumatismoDentario
     *   }
     * })
     * 
    **/
    create<T extends TraumatismoDentarioCreateArgs>(
      args: SelectSubset<T, TraumatismoDentarioCreateArgs>
    ): CheckSelect<T, Prisma__TraumatismoDentarioClient<TraumatismoDentario>, Prisma__TraumatismoDentarioClient<TraumatismoDentarioGetPayload<T>>>

    /**
     * Create many TraumatismoDentarios.
     *     @param {TraumatismoDentarioCreateManyArgs} args - Arguments to create many TraumatismoDentarios.
     *     @example
     *     // Create many TraumatismoDentarios
     *     const traumatismoDentario = await prisma.traumatismoDentario.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TraumatismoDentarioCreateManyArgs>(
      args?: SelectSubset<T, TraumatismoDentarioCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a TraumatismoDentario.
     * @param {TraumatismoDentarioDeleteArgs} args - Arguments to delete one TraumatismoDentario.
     * @example
     * // Delete one TraumatismoDentario
     * const TraumatismoDentario = await prisma.traumatismoDentario.delete({
     *   where: {
     *     // ... filter to delete one TraumatismoDentario
     *   }
     * })
     * 
    **/
    delete<T extends TraumatismoDentarioDeleteArgs>(
      args: SelectSubset<T, TraumatismoDentarioDeleteArgs>
    ): CheckSelect<T, Prisma__TraumatismoDentarioClient<TraumatismoDentario>, Prisma__TraumatismoDentarioClient<TraumatismoDentarioGetPayload<T>>>

    /**
     * Update one TraumatismoDentario.
     * @param {TraumatismoDentarioUpdateArgs} args - Arguments to update one TraumatismoDentario.
     * @example
     * // Update one TraumatismoDentario
     * const traumatismoDentario = await prisma.traumatismoDentario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TraumatismoDentarioUpdateArgs>(
      args: SelectSubset<T, TraumatismoDentarioUpdateArgs>
    ): CheckSelect<T, Prisma__TraumatismoDentarioClient<TraumatismoDentario>, Prisma__TraumatismoDentarioClient<TraumatismoDentarioGetPayload<T>>>

    /**
     * Delete zero or more TraumatismoDentarios.
     * @param {TraumatismoDentarioDeleteManyArgs} args - Arguments to filter TraumatismoDentarios to delete.
     * @example
     * // Delete a few TraumatismoDentarios
     * const { count } = await prisma.traumatismoDentario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TraumatismoDentarioDeleteManyArgs>(
      args?: SelectSubset<T, TraumatismoDentarioDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more TraumatismoDentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraumatismoDentarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TraumatismoDentarios
     * const traumatismoDentario = await prisma.traumatismoDentario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TraumatismoDentarioUpdateManyArgs>(
      args: SelectSubset<T, TraumatismoDentarioUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one TraumatismoDentario.
     * @param {TraumatismoDentarioUpsertArgs} args - Arguments to update or create a TraumatismoDentario.
     * @example
     * // Update or create a TraumatismoDentario
     * const traumatismoDentario = await prisma.traumatismoDentario.upsert({
     *   create: {
     *     // ... data to create a TraumatismoDentario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TraumatismoDentario we want to update
     *   }
     * })
    **/
    upsert<T extends TraumatismoDentarioUpsertArgs>(
      args: SelectSubset<T, TraumatismoDentarioUpsertArgs>
    ): CheckSelect<T, Prisma__TraumatismoDentarioClient<TraumatismoDentario>, Prisma__TraumatismoDentarioClient<TraumatismoDentarioGetPayload<T>>>

    /**
     * Count the number of TraumatismoDentarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraumatismoDentarioCountArgs} args - Arguments to filter TraumatismoDentarios to count.
     * @example
     * // Count the number of TraumatismoDentarios
     * const count = await prisma.traumatismoDentario.count({
     *   where: {
     *     // ... the filter for the TraumatismoDentarios we want to count
     *   }
     * })
    **/
    count<T extends TraumatismoDentarioCountArgs>(
      args?: Subset<T, TraumatismoDentarioCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TraumatismoDentarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TraumatismoDentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraumatismoDentarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TraumatismoDentarioAggregateArgs>(args: Subset<T, TraumatismoDentarioAggregateArgs>): PrismaPromise<GetTraumatismoDentarioAggregateType<T>>

    /**
     * Group by TraumatismoDentario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraumatismoDentarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TraumatismoDentarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TraumatismoDentarioGroupByArgs['orderBy'] }
        : { orderBy?: TraumatismoDentarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TraumatismoDentarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTraumatismoDentarioGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for TraumatismoDentario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TraumatismoDentarioClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    exame<T extends ExameArgs = {}>(args?: Subset<T, ExameArgs>): CheckSelect<T, Prisma__ExameClient<Exame | null >, Prisma__ExameClient<ExameGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * TraumatismoDentario findUnique
   */
  export type TraumatismoDentarioFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the TraumatismoDentario
     * 
    **/
    select?: TraumatismoDentarioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TraumatismoDentarioInclude | null
    /**
     * Throw an Error if a TraumatismoDentario can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which TraumatismoDentario to fetch.
     * 
    **/
    where: TraumatismoDentarioWhereUniqueInput
  }


  /**
   * TraumatismoDentario findFirst
   */
  export type TraumatismoDentarioFindFirstArgs = {
    /**
     * Select specific fields to fetch from the TraumatismoDentario
     * 
    **/
    select?: TraumatismoDentarioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TraumatismoDentarioInclude | null
    /**
     * Throw an Error if a TraumatismoDentario can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which TraumatismoDentario to fetch.
     * 
    **/
    where?: TraumatismoDentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TraumatismoDentarios to fetch.
     * 
    **/
    orderBy?: Enumerable<TraumatismoDentarioOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TraumatismoDentarios.
     * 
    **/
    cursor?: TraumatismoDentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TraumatismoDentarios from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TraumatismoDentarios.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TraumatismoDentarios.
     * 
    **/
    distinct?: Enumerable<TraumatismoDentarioScalarFieldEnum>
  }


  /**
   * TraumatismoDentario findMany
   */
  export type TraumatismoDentarioFindManyArgs = {
    /**
     * Select specific fields to fetch from the TraumatismoDentario
     * 
    **/
    select?: TraumatismoDentarioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TraumatismoDentarioInclude | null
    /**
     * Filter, which TraumatismoDentarios to fetch.
     * 
    **/
    where?: TraumatismoDentarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TraumatismoDentarios to fetch.
     * 
    **/
    orderBy?: Enumerable<TraumatismoDentarioOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TraumatismoDentarios.
     * 
    **/
    cursor?: TraumatismoDentarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TraumatismoDentarios from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TraumatismoDentarios.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TraumatismoDentarioScalarFieldEnum>
  }


  /**
   * TraumatismoDentario create
   */
  export type TraumatismoDentarioCreateArgs = {
    /**
     * Select specific fields to fetch from the TraumatismoDentario
     * 
    **/
    select?: TraumatismoDentarioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TraumatismoDentarioInclude | null
    /**
     * The data needed to create a TraumatismoDentario.
     * 
    **/
    data: XOR<TraumatismoDentarioCreateInput, TraumatismoDentarioUncheckedCreateInput>
  }


  /**
   * TraumatismoDentario createMany
   */
  export type TraumatismoDentarioCreateManyArgs = {
    /**
     * The data used to create many TraumatismoDentarios.
     * 
    **/
    data: Enumerable<TraumatismoDentarioCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TraumatismoDentario update
   */
  export type TraumatismoDentarioUpdateArgs = {
    /**
     * Select specific fields to fetch from the TraumatismoDentario
     * 
    **/
    select?: TraumatismoDentarioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TraumatismoDentarioInclude | null
    /**
     * The data needed to update a TraumatismoDentario.
     * 
    **/
    data: XOR<TraumatismoDentarioUpdateInput, TraumatismoDentarioUncheckedUpdateInput>
    /**
     * Choose, which TraumatismoDentario to update.
     * 
    **/
    where: TraumatismoDentarioWhereUniqueInput
  }


  /**
   * TraumatismoDentario updateMany
   */
  export type TraumatismoDentarioUpdateManyArgs = {
    /**
     * The data used to update TraumatismoDentarios.
     * 
    **/
    data: XOR<TraumatismoDentarioUpdateManyMutationInput, TraumatismoDentarioUncheckedUpdateManyInput>
    /**
     * Filter which TraumatismoDentarios to update
     * 
    **/
    where?: TraumatismoDentarioWhereInput
  }


  /**
   * TraumatismoDentario upsert
   */
  export type TraumatismoDentarioUpsertArgs = {
    /**
     * Select specific fields to fetch from the TraumatismoDentario
     * 
    **/
    select?: TraumatismoDentarioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TraumatismoDentarioInclude | null
    /**
     * The filter to search for the TraumatismoDentario to update in case it exists.
     * 
    **/
    where: TraumatismoDentarioWhereUniqueInput
    /**
     * In case the TraumatismoDentario found by the `where` argument doesn't exist, create a new TraumatismoDentario with this data.
     * 
    **/
    create: XOR<TraumatismoDentarioCreateInput, TraumatismoDentarioUncheckedCreateInput>
    /**
     * In case the TraumatismoDentario was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TraumatismoDentarioUpdateInput, TraumatismoDentarioUncheckedUpdateInput>
  }


  /**
   * TraumatismoDentario delete
   */
  export type TraumatismoDentarioDeleteArgs = {
    /**
     * Select specific fields to fetch from the TraumatismoDentario
     * 
    **/
    select?: TraumatismoDentarioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TraumatismoDentarioInclude | null
    /**
     * Filter which TraumatismoDentario to delete.
     * 
    **/
    where: TraumatismoDentarioWhereUniqueInput
  }


  /**
   * TraumatismoDentario deleteMany
   */
  export type TraumatismoDentarioDeleteManyArgs = {
    /**
     * Filter which TraumatismoDentarios to delete
     * 
    **/
    where?: TraumatismoDentarioWhereInput
  }


  /**
   * TraumatismoDentario without action
   */
  export type TraumatismoDentarioArgs = {
    /**
     * Select specific fields to fetch from the TraumatismoDentario
     * 
    **/
    select?: TraumatismoDentarioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TraumatismoDentarioInclude | null
  }



  /**
   * Model AvaliacaoSocioEconomica
   */


  export type AggregateAvaliacaoSocioEconomica = {
    _count: AvaliacaoSocioEconomicaCountAggregateOutputType | null
    _avg: AvaliacaoSocioEconomicaAvgAggregateOutputType | null
    _sum: AvaliacaoSocioEconomicaSumAggregateOutputType | null
    _min: AvaliacaoSocioEconomicaMinAggregateOutputType | null
    _max: AvaliacaoSocioEconomicaMaxAggregateOutputType | null
  }

  export type AvaliacaoSocioEconomicaAvgAggregateOutputType = {
    id: number | null
    idData: number | null
    idPessoa: number | null
    idLocal: number | null
    idUsuario: number | null
    qtdPessoasResidencia: number | null
    qtdComodosDormitorio: number | null
    qtdBens: number | null
    qtdTotalRendaUltimoMes: number | null
    filhoNivelDor: number | null
  }

  export type AvaliacaoSocioEconomicaSumAggregateOutputType = {
    id: number | null
    idData: number | null
    idPessoa: number | null
    idLocal: number | null
    idUsuario: number | null
    qtdPessoasResidencia: number | null
    qtdComodosDormitorio: number | null
    qtdBens: number | null
    qtdTotalRendaUltimoMes: number | null
    filhoNivelDor: number | null
  }

  export type AvaliacaoSocioEconomicaMinAggregateOutputType = {
    id: number | null
    idData: number | null
    idPessoa: number | null
    idLocal: number | null
    idUsuario: number | null
    qtdPessoasResidencia: number | null
    qtdComodosDormitorio: number | null
    qtdBens: number | null
    qtdTotalRendaUltimoMes: number | null
    escolaridadeMae: Escolaridade | null
    escolaridadePai: Escolaridade | null
    recebeBeneficioSocial: boolean | null
    filhoDorDente6Meses: boolean | null
    filhoNivelDor: number | null
    filhoVisitouDentista: boolean | null
    filhoUltimaConsulta: UltimaConsulta | null
    filhoLocalConsulta: LocalConsulta | null
    motivoUltimaConsulta: MotivoUltimaConsulta | null
    avaliacaoUltimaConsulta: AvaliacaoUltimaConsulta | null
    filhoAvaliacaoBucal: AvaliacaoBucal | null
    filhoQtdEscovacoesPorDia: FilhoQtdEscovacoesPorDia | null
    frequenciaTrocaEscovas: FrequenciaTrocaEscovas | null
    usaFioDental: boolean | null
    usaPastaComFluor: boolean | null
    arquivado: boolean | null
  }

  export type AvaliacaoSocioEconomicaMaxAggregateOutputType = {
    id: number | null
    idData: number | null
    idPessoa: number | null
    idLocal: number | null
    idUsuario: number | null
    qtdPessoasResidencia: number | null
    qtdComodosDormitorio: number | null
    qtdBens: number | null
    qtdTotalRendaUltimoMes: number | null
    escolaridadeMae: Escolaridade | null
    escolaridadePai: Escolaridade | null
    recebeBeneficioSocial: boolean | null
    filhoDorDente6Meses: boolean | null
    filhoNivelDor: number | null
    filhoVisitouDentista: boolean | null
    filhoUltimaConsulta: UltimaConsulta | null
    filhoLocalConsulta: LocalConsulta | null
    motivoUltimaConsulta: MotivoUltimaConsulta | null
    avaliacaoUltimaConsulta: AvaliacaoUltimaConsulta | null
    filhoAvaliacaoBucal: AvaliacaoBucal | null
    filhoQtdEscovacoesPorDia: FilhoQtdEscovacoesPorDia | null
    frequenciaTrocaEscovas: FrequenciaTrocaEscovas | null
    usaFioDental: boolean | null
    usaPastaComFluor: boolean | null
    arquivado: boolean | null
  }

  export type AvaliacaoSocioEconomicaCountAggregateOutputType = {
    id: number
    idData: number
    idPessoa: number
    idLocal: number
    idUsuario: number
    qtdPessoasResidencia: number
    qtdComodosDormitorio: number
    qtdBens: number
    qtdTotalRendaUltimoMes: number
    escolaridadeMae: number
    escolaridadePai: number
    recebeBeneficioSocial: number
    filhoDorDente6Meses: number
    filhoNivelDor: number
    filhoVisitouDentista: number
    filhoUltimaConsulta: number
    filhoLocalConsulta: number
    motivoUltimaConsulta: number
    avaliacaoUltimaConsulta: number
    filhoAvaliacaoBucal: number
    filhoQtdEscovacoesPorDia: number
    frequenciaTrocaEscovas: number
    usaFioDental: number
    usaPastaComFluor: number
    arquivado: number
    _all: number
  }


  export type AvaliacaoSocioEconomicaAvgAggregateInputType = {
    id?: true
    idData?: true
    idPessoa?: true
    idLocal?: true
    idUsuario?: true
    qtdPessoasResidencia?: true
    qtdComodosDormitorio?: true
    qtdBens?: true
    qtdTotalRendaUltimoMes?: true
    filhoNivelDor?: true
  }

  export type AvaliacaoSocioEconomicaSumAggregateInputType = {
    id?: true
    idData?: true
    idPessoa?: true
    idLocal?: true
    idUsuario?: true
    qtdPessoasResidencia?: true
    qtdComodosDormitorio?: true
    qtdBens?: true
    qtdTotalRendaUltimoMes?: true
    filhoNivelDor?: true
  }

  export type AvaliacaoSocioEconomicaMinAggregateInputType = {
    id?: true
    idData?: true
    idPessoa?: true
    idLocal?: true
    idUsuario?: true
    qtdPessoasResidencia?: true
    qtdComodosDormitorio?: true
    qtdBens?: true
    qtdTotalRendaUltimoMes?: true
    escolaridadeMae?: true
    escolaridadePai?: true
    recebeBeneficioSocial?: true
    filhoDorDente6Meses?: true
    filhoNivelDor?: true
    filhoVisitouDentista?: true
    filhoUltimaConsulta?: true
    filhoLocalConsulta?: true
    motivoUltimaConsulta?: true
    avaliacaoUltimaConsulta?: true
    filhoAvaliacaoBucal?: true
    filhoQtdEscovacoesPorDia?: true
    frequenciaTrocaEscovas?: true
    usaFioDental?: true
    usaPastaComFluor?: true
    arquivado?: true
  }

  export type AvaliacaoSocioEconomicaMaxAggregateInputType = {
    id?: true
    idData?: true
    idPessoa?: true
    idLocal?: true
    idUsuario?: true
    qtdPessoasResidencia?: true
    qtdComodosDormitorio?: true
    qtdBens?: true
    qtdTotalRendaUltimoMes?: true
    escolaridadeMae?: true
    escolaridadePai?: true
    recebeBeneficioSocial?: true
    filhoDorDente6Meses?: true
    filhoNivelDor?: true
    filhoVisitouDentista?: true
    filhoUltimaConsulta?: true
    filhoLocalConsulta?: true
    motivoUltimaConsulta?: true
    avaliacaoUltimaConsulta?: true
    filhoAvaliacaoBucal?: true
    filhoQtdEscovacoesPorDia?: true
    frequenciaTrocaEscovas?: true
    usaFioDental?: true
    usaPastaComFluor?: true
    arquivado?: true
  }

  export type AvaliacaoSocioEconomicaCountAggregateInputType = {
    id?: true
    idData?: true
    idPessoa?: true
    idLocal?: true
    idUsuario?: true
    qtdPessoasResidencia?: true
    qtdComodosDormitorio?: true
    qtdBens?: true
    qtdTotalRendaUltimoMes?: true
    escolaridadeMae?: true
    escolaridadePai?: true
    recebeBeneficioSocial?: true
    filhoDorDente6Meses?: true
    filhoNivelDor?: true
    filhoVisitouDentista?: true
    filhoUltimaConsulta?: true
    filhoLocalConsulta?: true
    motivoUltimaConsulta?: true
    avaliacaoUltimaConsulta?: true
    filhoAvaliacaoBucal?: true
    filhoQtdEscovacoesPorDia?: true
    frequenciaTrocaEscovas?: true
    usaFioDental?: true
    usaPastaComFluor?: true
    arquivado?: true
    _all?: true
  }

  export type AvaliacaoSocioEconomicaAggregateArgs = {
    /**
     * Filter which AvaliacaoSocioEconomica to aggregate.
     * 
    **/
    where?: AvaliacaoSocioEconomicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvaliacaoSocioEconomicas to fetch.
     * 
    **/
    orderBy?: Enumerable<AvaliacaoSocioEconomicaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AvaliacaoSocioEconomicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvaliacaoSocioEconomicas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvaliacaoSocioEconomicas.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AvaliacaoSocioEconomicas
    **/
    _count?: true | AvaliacaoSocioEconomicaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvaliacaoSocioEconomicaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvaliacaoSocioEconomicaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvaliacaoSocioEconomicaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvaliacaoSocioEconomicaMaxAggregateInputType
  }

  export type GetAvaliacaoSocioEconomicaAggregateType<T extends AvaliacaoSocioEconomicaAggregateArgs> = {
        [P in keyof T & keyof AggregateAvaliacaoSocioEconomica]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvaliacaoSocioEconomica[P]>
      : GetScalarType<T[P], AggregateAvaliacaoSocioEconomica[P]>
  }




  export type AvaliacaoSocioEconomicaGroupByArgs = {
    where?: AvaliacaoSocioEconomicaWhereInput
    orderBy?: Enumerable<AvaliacaoSocioEconomicaOrderByWithAggregationInput>
    by: Array<AvaliacaoSocioEconomicaScalarFieldEnum>
    having?: AvaliacaoSocioEconomicaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvaliacaoSocioEconomicaCountAggregateInputType | true
    _avg?: AvaliacaoSocioEconomicaAvgAggregateInputType
    _sum?: AvaliacaoSocioEconomicaSumAggregateInputType
    _min?: AvaliacaoSocioEconomicaMinAggregateInputType
    _max?: AvaliacaoSocioEconomicaMaxAggregateInputType
  }


  export type AvaliacaoSocioEconomicaGroupByOutputType = {
    id: number
    idData: number
    idPessoa: number
    idLocal: number
    idUsuario: number
    qtdPessoasResidencia: number
    qtdComodosDormitorio: number
    qtdBens: number
    qtdTotalRendaUltimoMes: number
    escolaridadeMae: Escolaridade
    escolaridadePai: Escolaridade
    recebeBeneficioSocial: boolean | null
    filhoDorDente6Meses: boolean | null
    filhoNivelDor: number
    filhoVisitouDentista: boolean | null
    filhoUltimaConsulta: UltimaConsulta
    filhoLocalConsulta: LocalConsulta
    motivoUltimaConsulta: MotivoUltimaConsulta
    avaliacaoUltimaConsulta: AvaliacaoUltimaConsulta
    filhoAvaliacaoBucal: AvaliacaoBucal
    filhoQtdEscovacoesPorDia: FilhoQtdEscovacoesPorDia
    frequenciaTrocaEscovas: FrequenciaTrocaEscovas
    usaFioDental: boolean
    usaPastaComFluor: boolean
    arquivado: boolean
    _count: AvaliacaoSocioEconomicaCountAggregateOutputType | null
    _avg: AvaliacaoSocioEconomicaAvgAggregateOutputType | null
    _sum: AvaliacaoSocioEconomicaSumAggregateOutputType | null
    _min: AvaliacaoSocioEconomicaMinAggregateOutputType | null
    _max: AvaliacaoSocioEconomicaMaxAggregateOutputType | null
  }

  type GetAvaliacaoSocioEconomicaGroupByPayload<T extends AvaliacaoSocioEconomicaGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AvaliacaoSocioEconomicaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvaliacaoSocioEconomicaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvaliacaoSocioEconomicaGroupByOutputType[P]>
            : GetScalarType<T[P], AvaliacaoSocioEconomicaGroupByOutputType[P]>
        }
      >
    >


  export type AvaliacaoSocioEconomicaSelect = {
    id?: boolean
    data?: boolean | DataArgs
    idData?: boolean
    pessoa?: boolean | PessoaArgs
    idPessoa?: boolean
    local?: boolean | LocalArgs
    idLocal?: boolean
    usuario?: boolean | UsuarioArgs
    idUsuario?: boolean
    qtdPessoasResidencia?: boolean
    qtdComodosDormitorio?: boolean
    qtdBens?: boolean
    qtdTotalRendaUltimoMes?: boolean
    escolaridadeMae?: boolean
    escolaridadePai?: boolean
    recebeBeneficioSocial?: boolean
    filhoDorDente6Meses?: boolean
    filhoNivelDor?: boolean
    filhoVisitouDentista?: boolean
    filhoUltimaConsulta?: boolean
    filhoLocalConsulta?: boolean
    motivoUltimaConsulta?: boolean
    avaliacaoUltimaConsulta?: boolean
    filhoAvaliacaoBucal?: boolean
    filhoQtdEscovacoesPorDia?: boolean
    frequenciaTrocaEscovas?: boolean
    usaFioDental?: boolean
    usaPastaComFluor?: boolean
    arquivado?: boolean
  }

  export type AvaliacaoSocioEconomicaInclude = {
    data?: boolean | DataArgs
    pessoa?: boolean | PessoaArgs
    local?: boolean | LocalArgs
    usuario?: boolean | UsuarioArgs
  }

  export type AvaliacaoSocioEconomicaGetPayload<
    S extends boolean | null | undefined | AvaliacaoSocioEconomicaArgs,
    U = keyof S
      > = S extends true
        ? AvaliacaoSocioEconomica
    : S extends undefined
    ? never
    : S extends AvaliacaoSocioEconomicaArgs | AvaliacaoSocioEconomicaFindManyArgs
    ?'include' extends U
    ? AvaliacaoSocioEconomica  & {
    [P in TrueKeys<S['include']>]:
        P extends 'data' ? DataGetPayload<S['include'][P]> :
        P extends 'pessoa' ? PessoaGetPayload<S['include'][P]> :
        P extends 'local' ? LocalGetPayload<S['include'][P]> :
        P extends 'usuario' ? UsuarioGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'data' ? DataGetPayload<S['select'][P]> :
        P extends 'pessoa' ? PessoaGetPayload<S['select'][P]> :
        P extends 'local' ? LocalGetPayload<S['select'][P]> :
        P extends 'usuario' ? UsuarioGetPayload<S['select'][P]> :  P extends keyof AvaliacaoSocioEconomica ? AvaliacaoSocioEconomica[P] : never
  } 
    : AvaliacaoSocioEconomica
  : AvaliacaoSocioEconomica


  type AvaliacaoSocioEconomicaCountArgs = Merge<
    Omit<AvaliacaoSocioEconomicaFindManyArgs, 'select' | 'include'> & {
      select?: AvaliacaoSocioEconomicaCountAggregateInputType | true
    }
  >

  export interface AvaliacaoSocioEconomicaDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one AvaliacaoSocioEconomica that matches the filter.
     * @param {AvaliacaoSocioEconomicaFindUniqueArgs} args - Arguments to find a AvaliacaoSocioEconomica
     * @example
     * // Get one AvaliacaoSocioEconomica
     * const avaliacaoSocioEconomica = await prisma.avaliacaoSocioEconomica.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AvaliacaoSocioEconomicaFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AvaliacaoSocioEconomicaFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'AvaliacaoSocioEconomica'> extends True ? CheckSelect<T, Prisma__AvaliacaoSocioEconomicaClient<AvaliacaoSocioEconomica>, Prisma__AvaliacaoSocioEconomicaClient<AvaliacaoSocioEconomicaGetPayload<T>>> : CheckSelect<T, Prisma__AvaliacaoSocioEconomicaClient<AvaliacaoSocioEconomica | null >, Prisma__AvaliacaoSocioEconomicaClient<AvaliacaoSocioEconomicaGetPayload<T> | null >>

    /**
     * Find the first AvaliacaoSocioEconomica that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoSocioEconomicaFindFirstArgs} args - Arguments to find a AvaliacaoSocioEconomica
     * @example
     * // Get one AvaliacaoSocioEconomica
     * const avaliacaoSocioEconomica = await prisma.avaliacaoSocioEconomica.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AvaliacaoSocioEconomicaFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AvaliacaoSocioEconomicaFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'AvaliacaoSocioEconomica'> extends True ? CheckSelect<T, Prisma__AvaliacaoSocioEconomicaClient<AvaliacaoSocioEconomica>, Prisma__AvaliacaoSocioEconomicaClient<AvaliacaoSocioEconomicaGetPayload<T>>> : CheckSelect<T, Prisma__AvaliacaoSocioEconomicaClient<AvaliacaoSocioEconomica | null >, Prisma__AvaliacaoSocioEconomicaClient<AvaliacaoSocioEconomicaGetPayload<T> | null >>

    /**
     * Find zero or more AvaliacaoSocioEconomicas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoSocioEconomicaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvaliacaoSocioEconomicas
     * const avaliacaoSocioEconomicas = await prisma.avaliacaoSocioEconomica.findMany()
     * 
     * // Get first 10 AvaliacaoSocioEconomicas
     * const avaliacaoSocioEconomicas = await prisma.avaliacaoSocioEconomica.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const avaliacaoSocioEconomicaWithIdOnly = await prisma.avaliacaoSocioEconomica.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AvaliacaoSocioEconomicaFindManyArgs>(
      args?: SelectSubset<T, AvaliacaoSocioEconomicaFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<AvaliacaoSocioEconomica>>, PrismaPromise<Array<AvaliacaoSocioEconomicaGetPayload<T>>>>

    /**
     * Create a AvaliacaoSocioEconomica.
     * @param {AvaliacaoSocioEconomicaCreateArgs} args - Arguments to create a AvaliacaoSocioEconomica.
     * @example
     * // Create one AvaliacaoSocioEconomica
     * const AvaliacaoSocioEconomica = await prisma.avaliacaoSocioEconomica.create({
     *   data: {
     *     // ... data to create a AvaliacaoSocioEconomica
     *   }
     * })
     * 
    **/
    create<T extends AvaliacaoSocioEconomicaCreateArgs>(
      args: SelectSubset<T, AvaliacaoSocioEconomicaCreateArgs>
    ): CheckSelect<T, Prisma__AvaliacaoSocioEconomicaClient<AvaliacaoSocioEconomica>, Prisma__AvaliacaoSocioEconomicaClient<AvaliacaoSocioEconomicaGetPayload<T>>>

    /**
     * Create many AvaliacaoSocioEconomicas.
     *     @param {AvaliacaoSocioEconomicaCreateManyArgs} args - Arguments to create many AvaliacaoSocioEconomicas.
     *     @example
     *     // Create many AvaliacaoSocioEconomicas
     *     const avaliacaoSocioEconomica = await prisma.avaliacaoSocioEconomica.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AvaliacaoSocioEconomicaCreateManyArgs>(
      args?: SelectSubset<T, AvaliacaoSocioEconomicaCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a AvaliacaoSocioEconomica.
     * @param {AvaliacaoSocioEconomicaDeleteArgs} args - Arguments to delete one AvaliacaoSocioEconomica.
     * @example
     * // Delete one AvaliacaoSocioEconomica
     * const AvaliacaoSocioEconomica = await prisma.avaliacaoSocioEconomica.delete({
     *   where: {
     *     // ... filter to delete one AvaliacaoSocioEconomica
     *   }
     * })
     * 
    **/
    delete<T extends AvaliacaoSocioEconomicaDeleteArgs>(
      args: SelectSubset<T, AvaliacaoSocioEconomicaDeleteArgs>
    ): CheckSelect<T, Prisma__AvaliacaoSocioEconomicaClient<AvaliacaoSocioEconomica>, Prisma__AvaliacaoSocioEconomicaClient<AvaliacaoSocioEconomicaGetPayload<T>>>

    /**
     * Update one AvaliacaoSocioEconomica.
     * @param {AvaliacaoSocioEconomicaUpdateArgs} args - Arguments to update one AvaliacaoSocioEconomica.
     * @example
     * // Update one AvaliacaoSocioEconomica
     * const avaliacaoSocioEconomica = await prisma.avaliacaoSocioEconomica.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AvaliacaoSocioEconomicaUpdateArgs>(
      args: SelectSubset<T, AvaliacaoSocioEconomicaUpdateArgs>
    ): CheckSelect<T, Prisma__AvaliacaoSocioEconomicaClient<AvaliacaoSocioEconomica>, Prisma__AvaliacaoSocioEconomicaClient<AvaliacaoSocioEconomicaGetPayload<T>>>

    /**
     * Delete zero or more AvaliacaoSocioEconomicas.
     * @param {AvaliacaoSocioEconomicaDeleteManyArgs} args - Arguments to filter AvaliacaoSocioEconomicas to delete.
     * @example
     * // Delete a few AvaliacaoSocioEconomicas
     * const { count } = await prisma.avaliacaoSocioEconomica.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AvaliacaoSocioEconomicaDeleteManyArgs>(
      args?: SelectSubset<T, AvaliacaoSocioEconomicaDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvaliacaoSocioEconomicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoSocioEconomicaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvaliacaoSocioEconomicas
     * const avaliacaoSocioEconomica = await prisma.avaliacaoSocioEconomica.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AvaliacaoSocioEconomicaUpdateManyArgs>(
      args: SelectSubset<T, AvaliacaoSocioEconomicaUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one AvaliacaoSocioEconomica.
     * @param {AvaliacaoSocioEconomicaUpsertArgs} args - Arguments to update or create a AvaliacaoSocioEconomica.
     * @example
     * // Update or create a AvaliacaoSocioEconomica
     * const avaliacaoSocioEconomica = await prisma.avaliacaoSocioEconomica.upsert({
     *   create: {
     *     // ... data to create a AvaliacaoSocioEconomica
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvaliacaoSocioEconomica we want to update
     *   }
     * })
    **/
    upsert<T extends AvaliacaoSocioEconomicaUpsertArgs>(
      args: SelectSubset<T, AvaliacaoSocioEconomicaUpsertArgs>
    ): CheckSelect<T, Prisma__AvaliacaoSocioEconomicaClient<AvaliacaoSocioEconomica>, Prisma__AvaliacaoSocioEconomicaClient<AvaliacaoSocioEconomicaGetPayload<T>>>

    /**
     * Count the number of AvaliacaoSocioEconomicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoSocioEconomicaCountArgs} args - Arguments to filter AvaliacaoSocioEconomicas to count.
     * @example
     * // Count the number of AvaliacaoSocioEconomicas
     * const count = await prisma.avaliacaoSocioEconomica.count({
     *   where: {
     *     // ... the filter for the AvaliacaoSocioEconomicas we want to count
     *   }
     * })
    **/
    count<T extends AvaliacaoSocioEconomicaCountArgs>(
      args?: Subset<T, AvaliacaoSocioEconomicaCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvaliacaoSocioEconomicaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AvaliacaoSocioEconomica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoSocioEconomicaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvaliacaoSocioEconomicaAggregateArgs>(args: Subset<T, AvaliacaoSocioEconomicaAggregateArgs>): PrismaPromise<GetAvaliacaoSocioEconomicaAggregateType<T>>

    /**
     * Group by AvaliacaoSocioEconomica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoSocioEconomicaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AvaliacaoSocioEconomicaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvaliacaoSocioEconomicaGroupByArgs['orderBy'] }
        : { orderBy?: AvaliacaoSocioEconomicaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AvaliacaoSocioEconomicaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvaliacaoSocioEconomicaGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for AvaliacaoSocioEconomica.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AvaliacaoSocioEconomicaClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    data<T extends DataArgs = {}>(args?: Subset<T, DataArgs>): CheckSelect<T, Prisma__DataClient<Data | null >, Prisma__DataClient<DataGetPayload<T> | null >>;

    pessoa<T extends PessoaArgs = {}>(args?: Subset<T, PessoaArgs>): CheckSelect<T, Prisma__PessoaClient<Pessoa | null >, Prisma__PessoaClient<PessoaGetPayload<T> | null >>;

    local<T extends LocalArgs = {}>(args?: Subset<T, LocalArgs>): CheckSelect<T, Prisma__LocalClient<Local | null >, Prisma__LocalClient<LocalGetPayload<T> | null >>;

    usuario<T extends UsuarioArgs = {}>(args?: Subset<T, UsuarioArgs>): CheckSelect<T, Prisma__UsuarioClient<Usuario | null >, Prisma__UsuarioClient<UsuarioGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * AvaliacaoSocioEconomica findUnique
   */
  export type AvaliacaoSocioEconomicaFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the AvaliacaoSocioEconomica
     * 
    **/
    select?: AvaliacaoSocioEconomicaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AvaliacaoSocioEconomicaInclude | null
    /**
     * Throw an Error if a AvaliacaoSocioEconomica can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which AvaliacaoSocioEconomica to fetch.
     * 
    **/
    where: AvaliacaoSocioEconomicaWhereUniqueInput
  }


  /**
   * AvaliacaoSocioEconomica findFirst
   */
  export type AvaliacaoSocioEconomicaFindFirstArgs = {
    /**
     * Select specific fields to fetch from the AvaliacaoSocioEconomica
     * 
    **/
    select?: AvaliacaoSocioEconomicaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AvaliacaoSocioEconomicaInclude | null
    /**
     * Throw an Error if a AvaliacaoSocioEconomica can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which AvaliacaoSocioEconomica to fetch.
     * 
    **/
    where?: AvaliacaoSocioEconomicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvaliacaoSocioEconomicas to fetch.
     * 
    **/
    orderBy?: Enumerable<AvaliacaoSocioEconomicaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvaliacaoSocioEconomicas.
     * 
    **/
    cursor?: AvaliacaoSocioEconomicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvaliacaoSocioEconomicas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvaliacaoSocioEconomicas.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvaliacaoSocioEconomicas.
     * 
    **/
    distinct?: Enumerable<AvaliacaoSocioEconomicaScalarFieldEnum>
  }


  /**
   * AvaliacaoSocioEconomica findMany
   */
  export type AvaliacaoSocioEconomicaFindManyArgs = {
    /**
     * Select specific fields to fetch from the AvaliacaoSocioEconomica
     * 
    **/
    select?: AvaliacaoSocioEconomicaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AvaliacaoSocioEconomicaInclude | null
    /**
     * Filter, which AvaliacaoSocioEconomicas to fetch.
     * 
    **/
    where?: AvaliacaoSocioEconomicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvaliacaoSocioEconomicas to fetch.
     * 
    **/
    orderBy?: Enumerable<AvaliacaoSocioEconomicaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AvaliacaoSocioEconomicas.
     * 
    **/
    cursor?: AvaliacaoSocioEconomicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvaliacaoSocioEconomicas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvaliacaoSocioEconomicas.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AvaliacaoSocioEconomicaScalarFieldEnum>
  }


  /**
   * AvaliacaoSocioEconomica create
   */
  export type AvaliacaoSocioEconomicaCreateArgs = {
    /**
     * Select specific fields to fetch from the AvaliacaoSocioEconomica
     * 
    **/
    select?: AvaliacaoSocioEconomicaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AvaliacaoSocioEconomicaInclude | null
    /**
     * The data needed to create a AvaliacaoSocioEconomica.
     * 
    **/
    data: XOR<AvaliacaoSocioEconomicaCreateInput, AvaliacaoSocioEconomicaUncheckedCreateInput>
  }


  /**
   * AvaliacaoSocioEconomica createMany
   */
  export type AvaliacaoSocioEconomicaCreateManyArgs = {
    /**
     * The data used to create many AvaliacaoSocioEconomicas.
     * 
    **/
    data: Enumerable<AvaliacaoSocioEconomicaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * AvaliacaoSocioEconomica update
   */
  export type AvaliacaoSocioEconomicaUpdateArgs = {
    /**
     * Select specific fields to fetch from the AvaliacaoSocioEconomica
     * 
    **/
    select?: AvaliacaoSocioEconomicaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AvaliacaoSocioEconomicaInclude | null
    /**
     * The data needed to update a AvaliacaoSocioEconomica.
     * 
    **/
    data: XOR<AvaliacaoSocioEconomicaUpdateInput, AvaliacaoSocioEconomicaUncheckedUpdateInput>
    /**
     * Choose, which AvaliacaoSocioEconomica to update.
     * 
    **/
    where: AvaliacaoSocioEconomicaWhereUniqueInput
  }


  /**
   * AvaliacaoSocioEconomica updateMany
   */
  export type AvaliacaoSocioEconomicaUpdateManyArgs = {
    /**
     * The data used to update AvaliacaoSocioEconomicas.
     * 
    **/
    data: XOR<AvaliacaoSocioEconomicaUpdateManyMutationInput, AvaliacaoSocioEconomicaUncheckedUpdateManyInput>
    /**
     * Filter which AvaliacaoSocioEconomicas to update
     * 
    **/
    where?: AvaliacaoSocioEconomicaWhereInput
  }


  /**
   * AvaliacaoSocioEconomica upsert
   */
  export type AvaliacaoSocioEconomicaUpsertArgs = {
    /**
     * Select specific fields to fetch from the AvaliacaoSocioEconomica
     * 
    **/
    select?: AvaliacaoSocioEconomicaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AvaliacaoSocioEconomicaInclude | null
    /**
     * The filter to search for the AvaliacaoSocioEconomica to update in case it exists.
     * 
    **/
    where: AvaliacaoSocioEconomicaWhereUniqueInput
    /**
     * In case the AvaliacaoSocioEconomica found by the `where` argument doesn't exist, create a new AvaliacaoSocioEconomica with this data.
     * 
    **/
    create: XOR<AvaliacaoSocioEconomicaCreateInput, AvaliacaoSocioEconomicaUncheckedCreateInput>
    /**
     * In case the AvaliacaoSocioEconomica was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AvaliacaoSocioEconomicaUpdateInput, AvaliacaoSocioEconomicaUncheckedUpdateInput>
  }


  /**
   * AvaliacaoSocioEconomica delete
   */
  export type AvaliacaoSocioEconomicaDeleteArgs = {
    /**
     * Select specific fields to fetch from the AvaliacaoSocioEconomica
     * 
    **/
    select?: AvaliacaoSocioEconomicaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AvaliacaoSocioEconomicaInclude | null
    /**
     * Filter which AvaliacaoSocioEconomica to delete.
     * 
    **/
    where: AvaliacaoSocioEconomicaWhereUniqueInput
  }


  /**
   * AvaliacaoSocioEconomica deleteMany
   */
  export type AvaliacaoSocioEconomicaDeleteManyArgs = {
    /**
     * Filter which AvaliacaoSocioEconomicas to delete
     * 
    **/
    where?: AvaliacaoSocioEconomicaWhereInput
  }


  /**
   * AvaliacaoSocioEconomica without action
   */
  export type AvaliacaoSocioEconomicaArgs = {
    /**
     * Select specific fields to fetch from the AvaliacaoSocioEconomica
     * 
    **/
    select?: AvaliacaoSocioEconomicaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AvaliacaoSocioEconomicaInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const SohoScalarFieldEnum: {
    id: 'id',
    idExame: 'idExame',
    dificilComer: 'dificilComer',
    dificilBeber: 'dificilBeber',
    dificilFalar: 'dificilFalar',
    dificilBrincar: 'dificilBrincar',
    dificilDormir: 'dificilDormir',
    deixouDeSorrirPorDentesFeios: 'deixouDeSorrirPorDentesFeios',
    deixouDeSorrirPorDentesDoendo: 'deixouDeSorrirPorDentesDoendo'
  };

  export type SohoScalarFieldEnum = (typeof SohoScalarFieldEnum)[keyof typeof SohoScalarFieldEnum]


  export const CPQScalarFieldEnum: {
    id: 'id',
    idExame: 'idExame',
    dorNosDentes: 'dorNosDentes',
    feridas: 'feridas',
    mauHalito: 'mauHalito',
    restosDeAlimentoPreso: 'restosDeAlimentoPreso',
    demorouMaisParaTerminarRefeicao: 'demorouMaisParaTerminarRefeicao',
    dificuldadeMorder: 'dificuldadeMorder',
    dificuldadeDizer: 'dificuldadeDizer',
    dificuldadeIngerirQuentesFrios: 'dificuldadeIngerirQuentesFrios',
    irritado: 'irritado',
    timido: 'timido',
    chateado: 'chateado',
    preocupado: 'preocupado',
    evitouSorrir: 'evitouSorrir',
    discutiu: 'discutiu',
    aborreceuChamaramPorApelidos: 'aborreceuChamaramPorApelidos',
    perguntaramSobreDente: 'perguntaramSobreDente'
  };

  export type CPQScalarFieldEnum = (typeof CPQScalarFieldEnum)[keyof typeof CPQScalarFieldEnum]


  export const MarcadorConsumoAlimentarScalarFieldEnum: {
    id: 'id',
    idData: 'idData',
    idPessoa: 'idPessoa',
    idUsuario: 'idUsuario',
    idLocal: 'idLocal',
    saladaCrua: 'saladaCrua',
    legumesVerdurasCozidos: 'legumesVerdurasCozidos',
    frutasFrescasSaladaDeFrutas: 'frutasFrescasSaladaDeFrutas',
    feijao: 'feijao',
    leiteOuIogurte: 'leiteOuIogurte',
    batataFritaBatataDePacoteSalgadosFritos: 'batataFritaBatataDePacoteSalgadosFritos',
    hamburgerEmbutidos: 'hamburgerEmbutidos',
    bolachasBiscoitosSalgadosSalgadinhoDePacote: 'bolachasBiscoitosSalgadosSalgadinhoDePacote',
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates: 'bolachasBiscoitosDocesRecheadosDocesBalasChocolates',
    refrigerante: 'refrigerante'
  };

  export type MarcadorConsumoAlimentarScalarFieldEnum = (typeof MarcadorConsumoAlimentarScalarFieldEnum)[keyof typeof MarcadorConsumoAlimentarScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    ativo: 'ativo',
    papel: 'papel',
    idPertenceEquipe: 'idPertenceEquipe'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const EquipeScalarFieldEnum: {
    id: 'id',
    idCoordenador: 'idCoordenador'
  };

  export type EquipeScalarFieldEnum = (typeof EquipeScalarFieldEnum)[keyof typeof EquipeScalarFieldEnum]


  export const DataScalarFieldEnum: {
    id: 'id',
    dia: 'dia',
    mes: 'mes',
    ano: 'ano'
  };

  export type DataScalarFieldEnum = (typeof DataScalarFieldEnum)[keyof typeof DataScalarFieldEnum]


  export const PessoaScalarFieldEnum: {
    id: 'id',
    nascimento: 'nascimento',
    nome: 'nome',
    genero: 'genero',
    etniaPrincipal: 'etniaPrincipal',
    etniaSecundaria: 'etniaSecundaria'
  };

  export type PessoaScalarFieldEnum = (typeof PessoaScalarFieldEnum)[keyof typeof PessoaScalarFieldEnum]


  export const LocalScalarFieldEnum: {
    id: 'id',
    municipio: 'municipio',
    escola: 'escola'
  };

  export type LocalScalarFieldEnum = (typeof LocalScalarFieldEnum)[keyof typeof LocalScalarFieldEnum]


  export const CondicaoPeriodontalScalarFieldEnum: {
    id: 'id',
    d17_16: 'd17_16',
    d21_11: 'd21_11',
    d27_26: 'd27_26',
    d31: 'd31',
    d37_36: 'd37_36',
    d47_46: 'd47_46'
  };

  export type CondicaoPeriodontalScalarFieldEnum = (typeof CondicaoPeriodontalScalarFieldEnum)[keyof typeof CondicaoPeriodontalScalarFieldEnum]


  export const ExameScalarFieldEnum: {
    id: 'id',
    idData: 'idData',
    idPessoa: 'idPessoa',
    idCondicaoPeriodontal: 'idCondicaoPeriodontal',
    idLocal: 'idLocal',
    idUsuario: 'idUsuario',
    idTraumatismoDentario: 'idTraumatismoDentario',
    idMarcadorConsumoAlimentar: 'idMarcadorConsumoAlimentar',
    fluoroseDentaria: 'fluoroseDentaria',
    overjetMaxilarAnterior: 'overjetMaxilarAnterior',
    overjetMandibularAnterior: 'overjetMandibularAnterior',
    mordidaAbertaVerticalAnterior: 'mordidaAbertaVerticalAnterior',
    relacaoMolarAnteroPosterior: 'relacaoMolarAnteroPosterior',
    observacao: 'observacao',
    arquivado: 'arquivado'
  };

  export type ExameScalarFieldEnum = (typeof ExameScalarFieldEnum)[keyof typeof ExameScalarFieldEnum]


  export const DenteScalarFieldEnum: {
    id: 'id',
    exameId: 'exameId',
    leite: 'leite',
    removido: 'removido',
    numero: 'numero',
    oclusal: 'oclusal',
    mesial: 'mesial',
    distal: 'distal',
    palatina: 'palatina',
    vestibular: 'vestibular',
    trat: 'trat',
    pufa: 'pufa'
  };

  export type DenteScalarFieldEnum = (typeof DenteScalarFieldEnum)[keyof typeof DenteScalarFieldEnum]


  export const TraumatismoDentarioScalarFieldEnum: {
    id: 'id',
    d_12: 'd_12',
    d_11: 'd_11',
    d_21: 'd_21',
    d_22: 'd_22',
    d_32: 'd_32',
    d_31: 'd_31',
    d_41: 'd_41',
    d_42: 'd_42'
  };

  export type TraumatismoDentarioScalarFieldEnum = (typeof TraumatismoDentarioScalarFieldEnum)[keyof typeof TraumatismoDentarioScalarFieldEnum]


  export const AvaliacaoSocioEconomicaScalarFieldEnum: {
    id: 'id',
    idData: 'idData',
    idPessoa: 'idPessoa',
    idLocal: 'idLocal',
    idUsuario: 'idUsuario',
    qtdPessoasResidencia: 'qtdPessoasResidencia',
    qtdComodosDormitorio: 'qtdComodosDormitorio',
    qtdBens: 'qtdBens',
    qtdTotalRendaUltimoMes: 'qtdTotalRendaUltimoMes',
    escolaridadeMae: 'escolaridadeMae',
    escolaridadePai: 'escolaridadePai',
    recebeBeneficioSocial: 'recebeBeneficioSocial',
    filhoDorDente6Meses: 'filhoDorDente6Meses',
    filhoNivelDor: 'filhoNivelDor',
    filhoVisitouDentista: 'filhoVisitouDentista',
    filhoUltimaConsulta: 'filhoUltimaConsulta',
    filhoLocalConsulta: 'filhoLocalConsulta',
    motivoUltimaConsulta: 'motivoUltimaConsulta',
    avaliacaoUltimaConsulta: 'avaliacaoUltimaConsulta',
    filhoAvaliacaoBucal: 'filhoAvaliacaoBucal',
    filhoQtdEscovacoesPorDia: 'filhoQtdEscovacoesPorDia',
    frequenciaTrocaEscovas: 'frequenciaTrocaEscovas',
    usaFioDental: 'usaFioDental',
    usaPastaComFluor: 'usaPastaComFluor',
    arquivado: 'arquivado'
  };

  export type AvaliacaoSocioEconomicaScalarFieldEnum = (typeof AvaliacaoSocioEconomicaScalarFieldEnum)[keyof typeof AvaliacaoSocioEconomicaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type SohoWhereInput = {
    AND?: Enumerable<SohoWhereInput>
    OR?: Enumerable<SohoWhereInput>
    NOT?: Enumerable<SohoWhereInput>
    id?: IntFilter | number
    exame?: XOR<ExameRelationFilter, ExameWhereInput>
    idExame?: IntFilter | number
    dificilComer?: EnumRespostasSohoFilter | RespostasSoho
    dificilBeber?: EnumRespostasSohoFilter | RespostasSoho
    dificilFalar?: EnumRespostasSohoFilter | RespostasSoho
    dificilBrincar?: EnumRespostasSohoFilter | RespostasSoho
    dificilDormir?: EnumRespostasSohoFilter | RespostasSoho
    deixouDeSorrirPorDentesFeios?: EnumRespostasSohoFilter | RespostasSoho
    deixouDeSorrirPorDentesDoendo?: EnumRespostasSohoFilter | RespostasSoho
  }

  export type SohoOrderByWithRelationInput = {
    id?: SortOrder
    exame?: ExameOrderByWithRelationInput
    idExame?: SortOrder
    dificilComer?: SortOrder
    dificilBeber?: SortOrder
    dificilFalar?: SortOrder
    dificilBrincar?: SortOrder
    dificilDormir?: SortOrder
    deixouDeSorrirPorDentesFeios?: SortOrder
    deixouDeSorrirPorDentesDoendo?: SortOrder
  }

  export type SohoWhereUniqueInput = {
    id?: number
    idExame?: number
  }

  export type SohoOrderByWithAggregationInput = {
    id?: SortOrder
    idExame?: SortOrder
    dificilComer?: SortOrder
    dificilBeber?: SortOrder
    dificilFalar?: SortOrder
    dificilBrincar?: SortOrder
    dificilDormir?: SortOrder
    deixouDeSorrirPorDentesFeios?: SortOrder
    deixouDeSorrirPorDentesDoendo?: SortOrder
    _count?: SohoCountOrderByAggregateInput
    _avg?: SohoAvgOrderByAggregateInput
    _max?: SohoMaxOrderByAggregateInput
    _min?: SohoMinOrderByAggregateInput
    _sum?: SohoSumOrderByAggregateInput
  }

  export type SohoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SohoScalarWhereWithAggregatesInput>
    OR?: Enumerable<SohoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SohoScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    idExame?: IntWithAggregatesFilter | number
    dificilComer?: EnumRespostasSohoWithAggregatesFilter | RespostasSoho
    dificilBeber?: EnumRespostasSohoWithAggregatesFilter | RespostasSoho
    dificilFalar?: EnumRespostasSohoWithAggregatesFilter | RespostasSoho
    dificilBrincar?: EnumRespostasSohoWithAggregatesFilter | RespostasSoho
    dificilDormir?: EnumRespostasSohoWithAggregatesFilter | RespostasSoho
    deixouDeSorrirPorDentesFeios?: EnumRespostasSohoWithAggregatesFilter | RespostasSoho
    deixouDeSorrirPorDentesDoendo?: EnumRespostasSohoWithAggregatesFilter | RespostasSoho
  }

  export type CPQWhereInput = {
    AND?: Enumerable<CPQWhereInput>
    OR?: Enumerable<CPQWhereInput>
    NOT?: Enumerable<CPQWhereInput>
    id?: IntFilter | number
    exame?: XOR<ExameRelationFilter, ExameWhereInput>
    idExame?: IntFilter | number
    dorNosDentes?: EnumRespostasCPQFilter | RespostasCPQ
    feridas?: EnumRespostasCPQFilter | RespostasCPQ
    mauHalito?: EnumRespostasCPQFilter | RespostasCPQ
    restosDeAlimentoPreso?: EnumRespostasCPQFilter | RespostasCPQ
    demorouMaisParaTerminarRefeicao?: EnumRespostasCPQFilter | RespostasCPQ
    dificuldadeMorder?: EnumRespostasCPQFilter | RespostasCPQ
    dificuldadeDizer?: EnumRespostasCPQFilter | RespostasCPQ
    dificuldadeIngerirQuentesFrios?: EnumRespostasCPQFilter | RespostasCPQ
    irritado?: EnumRespostasCPQFilter | RespostasCPQ
    timido?: EnumRespostasCPQFilter | RespostasCPQ
    chateado?: EnumRespostasCPQFilter | RespostasCPQ
    preocupado?: EnumRespostasCPQFilter | RespostasCPQ
    evitouSorrir?: EnumRespostasCPQFilter | RespostasCPQ
    discutiu?: EnumRespostasCPQFilter | RespostasCPQ
    aborreceuChamaramPorApelidos?: EnumRespostasCPQFilter | RespostasCPQ
    perguntaramSobreDente?: EnumRespostasCPQFilter | RespostasCPQ
  }

  export type CPQOrderByWithRelationInput = {
    id?: SortOrder
    exame?: ExameOrderByWithRelationInput
    idExame?: SortOrder
    dorNosDentes?: SortOrder
    feridas?: SortOrder
    mauHalito?: SortOrder
    restosDeAlimentoPreso?: SortOrder
    demorouMaisParaTerminarRefeicao?: SortOrder
    dificuldadeMorder?: SortOrder
    dificuldadeDizer?: SortOrder
    dificuldadeIngerirQuentesFrios?: SortOrder
    irritado?: SortOrder
    timido?: SortOrder
    chateado?: SortOrder
    preocupado?: SortOrder
    evitouSorrir?: SortOrder
    discutiu?: SortOrder
    aborreceuChamaramPorApelidos?: SortOrder
    perguntaramSobreDente?: SortOrder
  }

  export type CPQWhereUniqueInput = {
    id?: number
    idExame?: number
  }

  export type CPQOrderByWithAggregationInput = {
    id?: SortOrder
    idExame?: SortOrder
    dorNosDentes?: SortOrder
    feridas?: SortOrder
    mauHalito?: SortOrder
    restosDeAlimentoPreso?: SortOrder
    demorouMaisParaTerminarRefeicao?: SortOrder
    dificuldadeMorder?: SortOrder
    dificuldadeDizer?: SortOrder
    dificuldadeIngerirQuentesFrios?: SortOrder
    irritado?: SortOrder
    timido?: SortOrder
    chateado?: SortOrder
    preocupado?: SortOrder
    evitouSorrir?: SortOrder
    discutiu?: SortOrder
    aborreceuChamaramPorApelidos?: SortOrder
    perguntaramSobreDente?: SortOrder
    _count?: CPQCountOrderByAggregateInput
    _avg?: CPQAvgOrderByAggregateInput
    _max?: CPQMaxOrderByAggregateInput
    _min?: CPQMinOrderByAggregateInput
    _sum?: CPQSumOrderByAggregateInput
  }

  export type CPQScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CPQScalarWhereWithAggregatesInput>
    OR?: Enumerable<CPQScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CPQScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    idExame?: IntWithAggregatesFilter | number
    dorNosDentes?: EnumRespostasCPQWithAggregatesFilter | RespostasCPQ
    feridas?: EnumRespostasCPQWithAggregatesFilter | RespostasCPQ
    mauHalito?: EnumRespostasCPQWithAggregatesFilter | RespostasCPQ
    restosDeAlimentoPreso?: EnumRespostasCPQWithAggregatesFilter | RespostasCPQ
    demorouMaisParaTerminarRefeicao?: EnumRespostasCPQWithAggregatesFilter | RespostasCPQ
    dificuldadeMorder?: EnumRespostasCPQWithAggregatesFilter | RespostasCPQ
    dificuldadeDizer?: EnumRespostasCPQWithAggregatesFilter | RespostasCPQ
    dificuldadeIngerirQuentesFrios?: EnumRespostasCPQWithAggregatesFilter | RespostasCPQ
    irritado?: EnumRespostasCPQWithAggregatesFilter | RespostasCPQ
    timido?: EnumRespostasCPQWithAggregatesFilter | RespostasCPQ
    chateado?: EnumRespostasCPQWithAggregatesFilter | RespostasCPQ
    preocupado?: EnumRespostasCPQWithAggregatesFilter | RespostasCPQ
    evitouSorrir?: EnumRespostasCPQWithAggregatesFilter | RespostasCPQ
    discutiu?: EnumRespostasCPQWithAggregatesFilter | RespostasCPQ
    aborreceuChamaramPorApelidos?: EnumRespostasCPQWithAggregatesFilter | RespostasCPQ
    perguntaramSobreDente?: EnumRespostasCPQWithAggregatesFilter | RespostasCPQ
  }

  export type MarcadorConsumoAlimentarWhereInput = {
    AND?: Enumerable<MarcadorConsumoAlimentarWhereInput>
    OR?: Enumerable<MarcadorConsumoAlimentarWhereInput>
    NOT?: Enumerable<MarcadorConsumoAlimentarWhereInput>
    id?: IntFilter | number
    data?: XOR<DataRelationFilter, DataWhereInput>
    idData?: IntFilter | number
    pessoa?: XOR<PessoaRelationFilter, PessoaWhereInput>
    idPessoa?: IntFilter | number
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    idUsuario?: IntFilter | number
    local?: XOR<LocalRelationFilter, LocalWhereInput>
    idLocal?: IntFilter | number
    exame?: XOR<ExameRelationFilter, ExameWhereInput> | null
    saladaCrua?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFilter | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    legumesVerdurasCozidos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFilter | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    frutasFrescasSaladaDeFrutas?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFilter | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    feijao?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFilter | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    leiteOuIogurte?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFilter | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    batataFritaBatataDePacoteSalgadosFritos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFilter | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    hamburgerEmbutidos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFilter | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosSalgadosSalgadinhoDePacote?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFilter | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFilter | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    refrigerante?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFilter | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  }

  export type MarcadorConsumoAlimentarOrderByWithRelationInput = {
    id?: SortOrder
    data?: DataOrderByWithRelationInput
    idData?: SortOrder
    pessoa?: PessoaOrderByWithRelationInput
    idPessoa?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    idUsuario?: SortOrder
    local?: LocalOrderByWithRelationInput
    idLocal?: SortOrder
    exame?: ExameOrderByWithRelationInput
    saladaCrua?: SortOrder
    legumesVerdurasCozidos?: SortOrder
    frutasFrescasSaladaDeFrutas?: SortOrder
    feijao?: SortOrder
    leiteOuIogurte?: SortOrder
    batataFritaBatataDePacoteSalgadosFritos?: SortOrder
    hamburgerEmbutidos?: SortOrder
    bolachasBiscoitosSalgadosSalgadinhoDePacote?: SortOrder
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates?: SortOrder
    refrigerante?: SortOrder
  }

  export type MarcadorConsumoAlimentarWhereUniqueInput = {
    id?: number
  }

  export type MarcadorConsumoAlimentarOrderByWithAggregationInput = {
    id?: SortOrder
    idData?: SortOrder
    idPessoa?: SortOrder
    idUsuario?: SortOrder
    idLocal?: SortOrder
    saladaCrua?: SortOrder
    legumesVerdurasCozidos?: SortOrder
    frutasFrescasSaladaDeFrutas?: SortOrder
    feijao?: SortOrder
    leiteOuIogurte?: SortOrder
    batataFritaBatataDePacoteSalgadosFritos?: SortOrder
    hamburgerEmbutidos?: SortOrder
    bolachasBiscoitosSalgadosSalgadinhoDePacote?: SortOrder
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates?: SortOrder
    refrigerante?: SortOrder
    _count?: MarcadorConsumoAlimentarCountOrderByAggregateInput
    _avg?: MarcadorConsumoAlimentarAvgOrderByAggregateInput
    _max?: MarcadorConsumoAlimentarMaxOrderByAggregateInput
    _min?: MarcadorConsumoAlimentarMinOrderByAggregateInput
    _sum?: MarcadorConsumoAlimentarSumOrderByAggregateInput
  }

  export type MarcadorConsumoAlimentarScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MarcadorConsumoAlimentarScalarWhereWithAggregatesInput>
    OR?: Enumerable<MarcadorConsumoAlimentarScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MarcadorConsumoAlimentarScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    idData?: IntWithAggregatesFilter | number
    idPessoa?: IntWithAggregatesFilter | number
    idUsuario?: IntWithAggregatesFilter | number
    idLocal?: IntWithAggregatesFilter | number
    saladaCrua?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasWithAggregatesFilter | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    legumesVerdurasCozidos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasWithAggregatesFilter | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    frutasFrescasSaladaDeFrutas?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasWithAggregatesFilter | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    feijao?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasWithAggregatesFilter | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    leiteOuIogurte?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasWithAggregatesFilter | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    batataFritaBatataDePacoteSalgadosFritos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasWithAggregatesFilter | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    hamburgerEmbutidos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasWithAggregatesFilter | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosSalgadosSalgadinhoDePacote?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasWithAggregatesFilter | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasWithAggregatesFilter | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    refrigerante?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasWithAggregatesFilter | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  }

  export type UsuarioWhereInput = {
    AND?: Enumerable<UsuarioWhereInput>
    OR?: Enumerable<UsuarioWhereInput>
    NOT?: Enumerable<UsuarioWhereInput>
    id?: IntFilter | number
    nome?: StringNullableFilter | string | null
    email?: StringFilter | string
    senha?: StringFilter | string
    ativo?: BoolFilter | boolean
    papel?: EnumPapelFilter | Papel
    exames?: ExameListRelationFilter
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaListRelationFilter
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarListRelationFilter
    coordenaEquipe?: XOR<EquipeRelationFilter, EquipeWhereInput> | null
    idPertenceEquipe?: IntNullableFilter | number | null
    pertenceEquipe?: XOR<EquipeRelationFilter, EquipeWhereInput> | null
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    ativo?: SortOrder
    papel?: SortOrder
    exames?: ExameOrderByRelationAggregateInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaOrderByRelationAggregateInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarOrderByRelationAggregateInput
    coordenaEquipe?: EquipeOrderByWithRelationInput
    idPertenceEquipe?: SortOrder
    pertenceEquipe?: EquipeOrderByWithRelationInput
  }

  export type UsuarioWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    ativo?: SortOrder
    papel?: SortOrder
    idPertenceEquipe?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UsuarioScalarWhereWithAggregatesInput>
    OR?: Enumerable<UsuarioScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UsuarioScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    nome?: StringNullableWithAggregatesFilter | string | null
    email?: StringWithAggregatesFilter | string
    senha?: StringWithAggregatesFilter | string
    ativo?: BoolWithAggregatesFilter | boolean
    papel?: EnumPapelWithAggregatesFilter | Papel
    idPertenceEquipe?: IntNullableWithAggregatesFilter | number | null
  }

  export type EquipeWhereInput = {
    AND?: Enumerable<EquipeWhereInput>
    OR?: Enumerable<EquipeWhereInput>
    NOT?: Enumerable<EquipeWhereInput>
    id?: IntFilter | number
    coordenador?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    idCoordenador?: IntFilter | number
    integrantes?: UsuarioListRelationFilter
  }

  export type EquipeOrderByWithRelationInput = {
    id?: SortOrder
    coordenador?: UsuarioOrderByWithRelationInput
    idCoordenador?: SortOrder
    integrantes?: UsuarioOrderByRelationAggregateInput
  }

  export type EquipeWhereUniqueInput = {
    id?: number
    idCoordenador?: number
  }

  export type EquipeOrderByWithAggregationInput = {
    id?: SortOrder
    idCoordenador?: SortOrder
    _count?: EquipeCountOrderByAggregateInput
    _avg?: EquipeAvgOrderByAggregateInput
    _max?: EquipeMaxOrderByAggregateInput
    _min?: EquipeMinOrderByAggregateInput
    _sum?: EquipeSumOrderByAggregateInput
  }

  export type EquipeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EquipeScalarWhereWithAggregatesInput>
    OR?: Enumerable<EquipeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EquipeScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    idCoordenador?: IntWithAggregatesFilter | number
  }

  export type DataWhereInput = {
    AND?: Enumerable<DataWhereInput>
    OR?: Enumerable<DataWhereInput>
    NOT?: Enumerable<DataWhereInput>
    id?: IntFilter | number
    dia?: IntFilter | number
    mes?: IntFilter | number
    ano?: IntFilter | number
    exames?: ExameListRelationFilter
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaListRelationFilter
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarListRelationFilter
  }

  export type DataOrderByWithRelationInput = {
    id?: SortOrder
    dia?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    exames?: ExameOrderByRelationAggregateInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaOrderByRelationAggregateInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarOrderByRelationAggregateInput
  }

  export type DataWhereUniqueInput = {
    id?: number
    dia_mes_ano?: DataDiaMesAnoCompoundUniqueInput
  }

  export type DataOrderByWithAggregationInput = {
    id?: SortOrder
    dia?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
    _count?: DataCountOrderByAggregateInput
    _avg?: DataAvgOrderByAggregateInput
    _max?: DataMaxOrderByAggregateInput
    _min?: DataMinOrderByAggregateInput
    _sum?: DataSumOrderByAggregateInput
  }

  export type DataScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DataScalarWhereWithAggregatesInput>
    OR?: Enumerable<DataScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DataScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    dia?: IntWithAggregatesFilter | number
    mes?: IntWithAggregatesFilter | number
    ano?: IntWithAggregatesFilter | number
  }

  export type PessoaWhereInput = {
    AND?: Enumerable<PessoaWhereInput>
    OR?: Enumerable<PessoaWhereInput>
    NOT?: Enumerable<PessoaWhereInput>
    id?: IntFilter | number
    nascimento?: DateTimeFilter | Date | string
    nome?: StringFilter | string
    genero?: EnumGeneroFilter | Genero
    etniaPrincipal?: EnumEtniaFilter | Etnia
    etniaSecundaria?: EnumEtniaNullableFilter | Etnia | null
    exames?: ExameListRelationFilter
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaListRelationFilter
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarListRelationFilter
  }

  export type PessoaOrderByWithRelationInput = {
    id?: SortOrder
    nascimento?: SortOrder
    nome?: SortOrder
    genero?: SortOrder
    etniaPrincipal?: SortOrder
    etniaSecundaria?: SortOrder
    exames?: ExameOrderByRelationAggregateInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaOrderByRelationAggregateInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarOrderByRelationAggregateInput
  }

  export type PessoaWhereUniqueInput = {
    id?: number
  }

  export type PessoaOrderByWithAggregationInput = {
    id?: SortOrder
    nascimento?: SortOrder
    nome?: SortOrder
    genero?: SortOrder
    etniaPrincipal?: SortOrder
    etniaSecundaria?: SortOrder
    _count?: PessoaCountOrderByAggregateInput
    _avg?: PessoaAvgOrderByAggregateInput
    _max?: PessoaMaxOrderByAggregateInput
    _min?: PessoaMinOrderByAggregateInput
    _sum?: PessoaSumOrderByAggregateInput
  }

  export type PessoaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PessoaScalarWhereWithAggregatesInput>
    OR?: Enumerable<PessoaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PessoaScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    nascimento?: DateTimeWithAggregatesFilter | Date | string
    nome?: StringWithAggregatesFilter | string
    genero?: EnumGeneroWithAggregatesFilter | Genero
    etniaPrincipal?: EnumEtniaWithAggregatesFilter | Etnia
    etniaSecundaria?: EnumEtniaNullableWithAggregatesFilter | Etnia | null
  }

  export type LocalWhereInput = {
    AND?: Enumerable<LocalWhereInput>
    OR?: Enumerable<LocalWhereInput>
    NOT?: Enumerable<LocalWhereInput>
    id?: IntFilter | number
    municipio?: StringFilter | string
    escola?: StringFilter | string
    exames?: ExameListRelationFilter
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaListRelationFilter
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarListRelationFilter
  }

  export type LocalOrderByWithRelationInput = {
    id?: SortOrder
    municipio?: SortOrder
    escola?: SortOrder
    exames?: ExameOrderByRelationAggregateInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaOrderByRelationAggregateInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarOrderByRelationAggregateInput
  }

  export type LocalWhereUniqueInput = {
    id?: number
    municipio_escola?: LocalMunicipioEscolaCompoundUniqueInput
  }

  export type LocalOrderByWithAggregationInput = {
    id?: SortOrder
    municipio?: SortOrder
    escola?: SortOrder
    _count?: LocalCountOrderByAggregateInput
    _avg?: LocalAvgOrderByAggregateInput
    _max?: LocalMaxOrderByAggregateInput
    _min?: LocalMinOrderByAggregateInput
    _sum?: LocalSumOrderByAggregateInput
  }

  export type LocalScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LocalScalarWhereWithAggregatesInput>
    OR?: Enumerable<LocalScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LocalScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    municipio?: StringWithAggregatesFilter | string
    escola?: StringWithAggregatesFilter | string
  }

  export type CondicaoPeriodontalWhereInput = {
    AND?: Enumerable<CondicaoPeriodontalWhereInput>
    OR?: Enumerable<CondicaoPeriodontalWhereInput>
    NOT?: Enumerable<CondicaoPeriodontalWhereInput>
    id?: IntFilter | number
    d17_16?: BoolFilter | boolean
    d21_11?: BoolFilter | boolean
    d27_26?: BoolFilter | boolean
    d31?: BoolFilter | boolean
    d37_36?: BoolFilter | boolean
    d47_46?: BoolFilter | boolean
    exame?: XOR<ExameRelationFilter, ExameWhereInput> | null
  }

  export type CondicaoPeriodontalOrderByWithRelationInput = {
    id?: SortOrder
    d17_16?: SortOrder
    d21_11?: SortOrder
    d27_26?: SortOrder
    d31?: SortOrder
    d37_36?: SortOrder
    d47_46?: SortOrder
    exame?: ExameOrderByWithRelationInput
  }

  export type CondicaoPeriodontalWhereUniqueInput = {
    id?: number
  }

  export type CondicaoPeriodontalOrderByWithAggregationInput = {
    id?: SortOrder
    d17_16?: SortOrder
    d21_11?: SortOrder
    d27_26?: SortOrder
    d31?: SortOrder
    d37_36?: SortOrder
    d47_46?: SortOrder
    _count?: CondicaoPeriodontalCountOrderByAggregateInput
    _avg?: CondicaoPeriodontalAvgOrderByAggregateInput
    _max?: CondicaoPeriodontalMaxOrderByAggregateInput
    _min?: CondicaoPeriodontalMinOrderByAggregateInput
    _sum?: CondicaoPeriodontalSumOrderByAggregateInput
  }

  export type CondicaoPeriodontalScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CondicaoPeriodontalScalarWhereWithAggregatesInput>
    OR?: Enumerable<CondicaoPeriodontalScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CondicaoPeriodontalScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    d17_16?: BoolWithAggregatesFilter | boolean
    d21_11?: BoolWithAggregatesFilter | boolean
    d27_26?: BoolWithAggregatesFilter | boolean
    d31?: BoolWithAggregatesFilter | boolean
    d37_36?: BoolWithAggregatesFilter | boolean
    d47_46?: BoolWithAggregatesFilter | boolean
  }

  export type ExameWhereInput = {
    AND?: Enumerable<ExameWhereInput>
    OR?: Enumerable<ExameWhereInput>
    NOT?: Enumerable<ExameWhereInput>
    id?: IntFilter | number
    data?: XOR<DataRelationFilter, DataWhereInput>
    idData?: IntFilter | number
    pessoa?: XOR<PessoaRelationFilter, PessoaWhereInput>
    idPessoa?: IntFilter | number
    condicaoPeriodontal?: XOR<CondicaoPeriodontalRelationFilter, CondicaoPeriodontalWhereInput> | null
    idCondicaoPeriodontal?: IntNullableFilter | number | null
    local?: XOR<LocalRelationFilter, LocalWhereInput>
    idLocal?: IntFilter | number
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    idUsuario?: IntFilter | number
    traumatismoDentario?: XOR<TraumatismoDentarioRelationFilter, TraumatismoDentarioWhereInput> | null
    idTraumatismoDentario?: IntNullableFilter | number | null
    marcadorConsumoAlimentar?: XOR<MarcadorConsumoAlimentarRelationFilter, MarcadorConsumoAlimentarWhereInput>
    idMarcadorConsumoAlimentar?: IntFilter | number
    fluoroseDentaria?: EnumFluoroseDentariaFilter | FluoroseDentaria
    overjetMaxilarAnterior?: IntFilter | number
    overjetMandibularAnterior?: IntFilter | number
    mordidaAbertaVerticalAnterior?: IntFilter | number
    relacaoMolarAnteroPosterior?: EnumRelacaoMolarAnteroPosteriorFilter | RelacaoMolarAnteroPosterior
    observacao?: StringFilter | string
    dentes?: DenteListRelationFilter
    Soho?: XOR<SohoRelationFilter, SohoWhereInput> | null
    CPQ?: XOR<CPQRelationFilter, CPQWhereInput> | null
    arquivado?: BoolFilter | boolean
  }

  export type ExameOrderByWithRelationInput = {
    id?: SortOrder
    data?: DataOrderByWithRelationInput
    idData?: SortOrder
    pessoa?: PessoaOrderByWithRelationInput
    idPessoa?: SortOrder
    condicaoPeriodontal?: CondicaoPeriodontalOrderByWithRelationInput
    idCondicaoPeriodontal?: SortOrder
    local?: LocalOrderByWithRelationInput
    idLocal?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    idUsuario?: SortOrder
    traumatismoDentario?: TraumatismoDentarioOrderByWithRelationInput
    idTraumatismoDentario?: SortOrder
    marcadorConsumoAlimentar?: MarcadorConsumoAlimentarOrderByWithRelationInput
    idMarcadorConsumoAlimentar?: SortOrder
    fluoroseDentaria?: SortOrder
    overjetMaxilarAnterior?: SortOrder
    overjetMandibularAnterior?: SortOrder
    mordidaAbertaVerticalAnterior?: SortOrder
    relacaoMolarAnteroPosterior?: SortOrder
    observacao?: SortOrder
    dentes?: DenteOrderByRelationAggregateInput
    Soho?: SohoOrderByWithRelationInput
    CPQ?: CPQOrderByWithRelationInput
    arquivado?: SortOrder
  }

  export type ExameWhereUniqueInput = {
    id?: number
    idCondicaoPeriodontal?: number
    idTraumatismoDentario?: number
    idMarcadorConsumoAlimentar?: number
  }

  export type ExameOrderByWithAggregationInput = {
    id?: SortOrder
    idData?: SortOrder
    idPessoa?: SortOrder
    idCondicaoPeriodontal?: SortOrder
    idLocal?: SortOrder
    idUsuario?: SortOrder
    idTraumatismoDentario?: SortOrder
    idMarcadorConsumoAlimentar?: SortOrder
    fluoroseDentaria?: SortOrder
    overjetMaxilarAnterior?: SortOrder
    overjetMandibularAnterior?: SortOrder
    mordidaAbertaVerticalAnterior?: SortOrder
    relacaoMolarAnteroPosterior?: SortOrder
    observacao?: SortOrder
    arquivado?: SortOrder
    _count?: ExameCountOrderByAggregateInput
    _avg?: ExameAvgOrderByAggregateInput
    _max?: ExameMaxOrderByAggregateInput
    _min?: ExameMinOrderByAggregateInput
    _sum?: ExameSumOrderByAggregateInput
  }

  export type ExameScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ExameScalarWhereWithAggregatesInput>
    OR?: Enumerable<ExameScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ExameScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    idData?: IntWithAggregatesFilter | number
    idPessoa?: IntWithAggregatesFilter | number
    idCondicaoPeriodontal?: IntNullableWithAggregatesFilter | number | null
    idLocal?: IntWithAggregatesFilter | number
    idUsuario?: IntWithAggregatesFilter | number
    idTraumatismoDentario?: IntNullableWithAggregatesFilter | number | null
    idMarcadorConsumoAlimentar?: IntWithAggregatesFilter | number
    fluoroseDentaria?: EnumFluoroseDentariaWithAggregatesFilter | FluoroseDentaria
    overjetMaxilarAnterior?: IntWithAggregatesFilter | number
    overjetMandibularAnterior?: IntWithAggregatesFilter | number
    mordidaAbertaVerticalAnterior?: IntWithAggregatesFilter | number
    relacaoMolarAnteroPosterior?: EnumRelacaoMolarAnteroPosteriorWithAggregatesFilter | RelacaoMolarAnteroPosterior
    observacao?: StringWithAggregatesFilter | string
    arquivado?: BoolWithAggregatesFilter | boolean
  }

  export type DenteWhereInput = {
    AND?: Enumerable<DenteWhereInput>
    OR?: Enumerable<DenteWhereInput>
    NOT?: Enumerable<DenteWhereInput>
    id?: IntFilter | number
    Exame?: XOR<ExameRelationFilter, ExameWhereInput>
    exameId?: IntFilter | number
    leite?: BoolFilter | boolean
    removido?: EnumMotivoRemovidoNullableFilter | MotivoRemovido | null
    numero?: IntFilter | number
    oclusal?: IntNullableFilter | number | null
    mesial?: IntNullableFilter | number | null
    distal?: IntNullableFilter | number | null
    palatina?: IntNullableFilter | number | null
    vestibular?: IntNullableFilter | number | null
    trat?: IntNullableFilter | number | null
    pufa?: IntNullableFilter | number | null
  }

  export type DenteOrderByWithRelationInput = {
    id?: SortOrder
    Exame?: ExameOrderByWithRelationInput
    exameId?: SortOrder
    leite?: SortOrder
    removido?: SortOrder
    numero?: SortOrder
    oclusal?: SortOrder
    mesial?: SortOrder
    distal?: SortOrder
    palatina?: SortOrder
    vestibular?: SortOrder
    trat?: SortOrder
    pufa?: SortOrder
  }

  export type DenteWhereUniqueInput = {
    id?: number
  }

  export type DenteOrderByWithAggregationInput = {
    id?: SortOrder
    exameId?: SortOrder
    leite?: SortOrder
    removido?: SortOrder
    numero?: SortOrder
    oclusal?: SortOrder
    mesial?: SortOrder
    distal?: SortOrder
    palatina?: SortOrder
    vestibular?: SortOrder
    trat?: SortOrder
    pufa?: SortOrder
    _count?: DenteCountOrderByAggregateInput
    _avg?: DenteAvgOrderByAggregateInput
    _max?: DenteMaxOrderByAggregateInput
    _min?: DenteMinOrderByAggregateInput
    _sum?: DenteSumOrderByAggregateInput
  }

  export type DenteScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DenteScalarWhereWithAggregatesInput>
    OR?: Enumerable<DenteScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DenteScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    exameId?: IntWithAggregatesFilter | number
    leite?: BoolWithAggregatesFilter | boolean
    removido?: EnumMotivoRemovidoNullableWithAggregatesFilter | MotivoRemovido | null
    numero?: IntWithAggregatesFilter | number
    oclusal?: IntNullableWithAggregatesFilter | number | null
    mesial?: IntNullableWithAggregatesFilter | number | null
    distal?: IntNullableWithAggregatesFilter | number | null
    palatina?: IntNullableWithAggregatesFilter | number | null
    vestibular?: IntNullableWithAggregatesFilter | number | null
    trat?: IntNullableWithAggregatesFilter | number | null
    pufa?: IntNullableWithAggregatesFilter | number | null
  }

  export type TraumatismoDentarioWhereInput = {
    AND?: Enumerable<TraumatismoDentarioWhereInput>
    OR?: Enumerable<TraumatismoDentarioWhereInput>
    NOT?: Enumerable<TraumatismoDentarioWhereInput>
    id?: IntFilter | number
    exame?: XOR<ExameRelationFilter, ExameWhereInput> | null
    d_12?: EnumRespostasTraumatismoDentarioFilter | RespostasTraumatismoDentario
    d_11?: EnumRespostasTraumatismoDentarioFilter | RespostasTraumatismoDentario
    d_21?: EnumRespostasTraumatismoDentarioFilter | RespostasTraumatismoDentario
    d_22?: EnumRespostasTraumatismoDentarioFilter | RespostasTraumatismoDentario
    d_32?: EnumRespostasTraumatismoDentarioFilter | RespostasTraumatismoDentario
    d_31?: EnumRespostasTraumatismoDentarioFilter | RespostasTraumatismoDentario
    d_41?: EnumRespostasTraumatismoDentarioFilter | RespostasTraumatismoDentario
    d_42?: EnumRespostasTraumatismoDentarioFilter | RespostasTraumatismoDentario
  }

  export type TraumatismoDentarioOrderByWithRelationInput = {
    id?: SortOrder
    exame?: ExameOrderByWithRelationInput
    d_12?: SortOrder
    d_11?: SortOrder
    d_21?: SortOrder
    d_22?: SortOrder
    d_32?: SortOrder
    d_31?: SortOrder
    d_41?: SortOrder
    d_42?: SortOrder
  }

  export type TraumatismoDentarioWhereUniqueInput = {
    id?: number
  }

  export type TraumatismoDentarioOrderByWithAggregationInput = {
    id?: SortOrder
    d_12?: SortOrder
    d_11?: SortOrder
    d_21?: SortOrder
    d_22?: SortOrder
    d_32?: SortOrder
    d_31?: SortOrder
    d_41?: SortOrder
    d_42?: SortOrder
    _count?: TraumatismoDentarioCountOrderByAggregateInput
    _avg?: TraumatismoDentarioAvgOrderByAggregateInput
    _max?: TraumatismoDentarioMaxOrderByAggregateInput
    _min?: TraumatismoDentarioMinOrderByAggregateInput
    _sum?: TraumatismoDentarioSumOrderByAggregateInput
  }

  export type TraumatismoDentarioScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TraumatismoDentarioScalarWhereWithAggregatesInput>
    OR?: Enumerable<TraumatismoDentarioScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TraumatismoDentarioScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    d_12?: EnumRespostasTraumatismoDentarioWithAggregatesFilter | RespostasTraumatismoDentario
    d_11?: EnumRespostasTraumatismoDentarioWithAggregatesFilter | RespostasTraumatismoDentario
    d_21?: EnumRespostasTraumatismoDentarioWithAggregatesFilter | RespostasTraumatismoDentario
    d_22?: EnumRespostasTraumatismoDentarioWithAggregatesFilter | RespostasTraumatismoDentario
    d_32?: EnumRespostasTraumatismoDentarioWithAggregatesFilter | RespostasTraumatismoDentario
    d_31?: EnumRespostasTraumatismoDentarioWithAggregatesFilter | RespostasTraumatismoDentario
    d_41?: EnumRespostasTraumatismoDentarioWithAggregatesFilter | RespostasTraumatismoDentario
    d_42?: EnumRespostasTraumatismoDentarioWithAggregatesFilter | RespostasTraumatismoDentario
  }

  export type AvaliacaoSocioEconomicaWhereInput = {
    AND?: Enumerable<AvaliacaoSocioEconomicaWhereInput>
    OR?: Enumerable<AvaliacaoSocioEconomicaWhereInput>
    NOT?: Enumerable<AvaliacaoSocioEconomicaWhereInput>
    id?: IntFilter | number
    data?: XOR<DataRelationFilter, DataWhereInput>
    idData?: IntFilter | number
    pessoa?: XOR<PessoaRelationFilter, PessoaWhereInput>
    idPessoa?: IntFilter | number
    local?: XOR<LocalRelationFilter, LocalWhereInput>
    idLocal?: IntFilter | number
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    idUsuario?: IntFilter | number
    qtdPessoasResidencia?: IntFilter | number
    qtdComodosDormitorio?: IntFilter | number
    qtdBens?: IntFilter | number
    qtdTotalRendaUltimoMes?: IntFilter | number
    escolaridadeMae?: EnumEscolaridadeFilter | Escolaridade
    escolaridadePai?: EnumEscolaridadeFilter | Escolaridade
    recebeBeneficioSocial?: BoolNullableFilter | boolean | null
    filhoDorDente6Meses?: BoolNullableFilter | boolean | null
    filhoNivelDor?: IntFilter | number
    filhoVisitouDentista?: BoolNullableFilter | boolean | null
    filhoUltimaConsulta?: EnumUltimaConsultaFilter | UltimaConsulta
    filhoLocalConsulta?: EnumLocalConsultaFilter | LocalConsulta
    motivoUltimaConsulta?: EnumMotivoUltimaConsultaFilter | MotivoUltimaConsulta
    avaliacaoUltimaConsulta?: EnumAvaliacaoUltimaConsultaFilter | AvaliacaoUltimaConsulta
    filhoAvaliacaoBucal?: EnumAvaliacaoBucalFilter | AvaliacaoBucal
    filhoQtdEscovacoesPorDia?: EnumFilhoQtdEscovacoesPorDiaFilter | FilhoQtdEscovacoesPorDia
    frequenciaTrocaEscovas?: EnumFrequenciaTrocaEscovasFilter | FrequenciaTrocaEscovas
    usaFioDental?: BoolFilter | boolean
    usaPastaComFluor?: BoolFilter | boolean
    arquivado?: BoolFilter | boolean
  }

  export type AvaliacaoSocioEconomicaOrderByWithRelationInput = {
    id?: SortOrder
    data?: DataOrderByWithRelationInput
    idData?: SortOrder
    pessoa?: PessoaOrderByWithRelationInput
    idPessoa?: SortOrder
    local?: LocalOrderByWithRelationInput
    idLocal?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    idUsuario?: SortOrder
    qtdPessoasResidencia?: SortOrder
    qtdComodosDormitorio?: SortOrder
    qtdBens?: SortOrder
    qtdTotalRendaUltimoMes?: SortOrder
    escolaridadeMae?: SortOrder
    escolaridadePai?: SortOrder
    recebeBeneficioSocial?: SortOrder
    filhoDorDente6Meses?: SortOrder
    filhoNivelDor?: SortOrder
    filhoVisitouDentista?: SortOrder
    filhoUltimaConsulta?: SortOrder
    filhoLocalConsulta?: SortOrder
    motivoUltimaConsulta?: SortOrder
    avaliacaoUltimaConsulta?: SortOrder
    filhoAvaliacaoBucal?: SortOrder
    filhoQtdEscovacoesPorDia?: SortOrder
    frequenciaTrocaEscovas?: SortOrder
    usaFioDental?: SortOrder
    usaPastaComFluor?: SortOrder
    arquivado?: SortOrder
  }

  export type AvaliacaoSocioEconomicaWhereUniqueInput = {
    id?: number
  }

  export type AvaliacaoSocioEconomicaOrderByWithAggregationInput = {
    id?: SortOrder
    idData?: SortOrder
    idPessoa?: SortOrder
    idLocal?: SortOrder
    idUsuario?: SortOrder
    qtdPessoasResidencia?: SortOrder
    qtdComodosDormitorio?: SortOrder
    qtdBens?: SortOrder
    qtdTotalRendaUltimoMes?: SortOrder
    escolaridadeMae?: SortOrder
    escolaridadePai?: SortOrder
    recebeBeneficioSocial?: SortOrder
    filhoDorDente6Meses?: SortOrder
    filhoNivelDor?: SortOrder
    filhoVisitouDentista?: SortOrder
    filhoUltimaConsulta?: SortOrder
    filhoLocalConsulta?: SortOrder
    motivoUltimaConsulta?: SortOrder
    avaliacaoUltimaConsulta?: SortOrder
    filhoAvaliacaoBucal?: SortOrder
    filhoQtdEscovacoesPorDia?: SortOrder
    frequenciaTrocaEscovas?: SortOrder
    usaFioDental?: SortOrder
    usaPastaComFluor?: SortOrder
    arquivado?: SortOrder
    _count?: AvaliacaoSocioEconomicaCountOrderByAggregateInput
    _avg?: AvaliacaoSocioEconomicaAvgOrderByAggregateInput
    _max?: AvaliacaoSocioEconomicaMaxOrderByAggregateInput
    _min?: AvaliacaoSocioEconomicaMinOrderByAggregateInput
    _sum?: AvaliacaoSocioEconomicaSumOrderByAggregateInput
  }

  export type AvaliacaoSocioEconomicaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AvaliacaoSocioEconomicaScalarWhereWithAggregatesInput>
    OR?: Enumerable<AvaliacaoSocioEconomicaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AvaliacaoSocioEconomicaScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    idData?: IntWithAggregatesFilter | number
    idPessoa?: IntWithAggregatesFilter | number
    idLocal?: IntWithAggregatesFilter | number
    idUsuario?: IntWithAggregatesFilter | number
    qtdPessoasResidencia?: IntWithAggregatesFilter | number
    qtdComodosDormitorio?: IntWithAggregatesFilter | number
    qtdBens?: IntWithAggregatesFilter | number
    qtdTotalRendaUltimoMes?: IntWithAggregatesFilter | number
    escolaridadeMae?: EnumEscolaridadeWithAggregatesFilter | Escolaridade
    escolaridadePai?: EnumEscolaridadeWithAggregatesFilter | Escolaridade
    recebeBeneficioSocial?: BoolNullableWithAggregatesFilter | boolean | null
    filhoDorDente6Meses?: BoolNullableWithAggregatesFilter | boolean | null
    filhoNivelDor?: IntWithAggregatesFilter | number
    filhoVisitouDentista?: BoolNullableWithAggregatesFilter | boolean | null
    filhoUltimaConsulta?: EnumUltimaConsultaWithAggregatesFilter | UltimaConsulta
    filhoLocalConsulta?: EnumLocalConsultaWithAggregatesFilter | LocalConsulta
    motivoUltimaConsulta?: EnumMotivoUltimaConsultaWithAggregatesFilter | MotivoUltimaConsulta
    avaliacaoUltimaConsulta?: EnumAvaliacaoUltimaConsultaWithAggregatesFilter | AvaliacaoUltimaConsulta
    filhoAvaliacaoBucal?: EnumAvaliacaoBucalWithAggregatesFilter | AvaliacaoBucal
    filhoQtdEscovacoesPorDia?: EnumFilhoQtdEscovacoesPorDiaWithAggregatesFilter | FilhoQtdEscovacoesPorDia
    frequenciaTrocaEscovas?: EnumFrequenciaTrocaEscovasWithAggregatesFilter | FrequenciaTrocaEscovas
    usaFioDental?: BoolWithAggregatesFilter | boolean
    usaPastaComFluor?: BoolWithAggregatesFilter | boolean
    arquivado?: BoolWithAggregatesFilter | boolean
  }

  export type SohoCreateInput = {
    exame: ExameCreateNestedOneWithoutSohoInput
    dificilComer: RespostasSoho
    dificilBeber: RespostasSoho
    dificilFalar: RespostasSoho
    dificilBrincar: RespostasSoho
    dificilDormir: RespostasSoho
    deixouDeSorrirPorDentesFeios: RespostasSoho
    deixouDeSorrirPorDentesDoendo: RespostasSoho
  }

  export type SohoUncheckedCreateInput = {
    id?: number
    idExame: number
    dificilComer: RespostasSoho
    dificilBeber: RespostasSoho
    dificilFalar: RespostasSoho
    dificilBrincar: RespostasSoho
    dificilDormir: RespostasSoho
    deixouDeSorrirPorDentesFeios: RespostasSoho
    deixouDeSorrirPorDentesDoendo: RespostasSoho
  }

  export type SohoUpdateInput = {
    exame?: ExameUpdateOneRequiredWithoutSohoInput
    dificilComer?: EnumRespostasSohoFieldUpdateOperationsInput | RespostasSoho
    dificilBeber?: EnumRespostasSohoFieldUpdateOperationsInput | RespostasSoho
    dificilFalar?: EnumRespostasSohoFieldUpdateOperationsInput | RespostasSoho
    dificilBrincar?: EnumRespostasSohoFieldUpdateOperationsInput | RespostasSoho
    dificilDormir?: EnumRespostasSohoFieldUpdateOperationsInput | RespostasSoho
    deixouDeSorrirPorDentesFeios?: EnumRespostasSohoFieldUpdateOperationsInput | RespostasSoho
    deixouDeSorrirPorDentesDoendo?: EnumRespostasSohoFieldUpdateOperationsInput | RespostasSoho
  }

  export type SohoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idExame?: IntFieldUpdateOperationsInput | number
    dificilComer?: EnumRespostasSohoFieldUpdateOperationsInput | RespostasSoho
    dificilBeber?: EnumRespostasSohoFieldUpdateOperationsInput | RespostasSoho
    dificilFalar?: EnumRespostasSohoFieldUpdateOperationsInput | RespostasSoho
    dificilBrincar?: EnumRespostasSohoFieldUpdateOperationsInput | RespostasSoho
    dificilDormir?: EnumRespostasSohoFieldUpdateOperationsInput | RespostasSoho
    deixouDeSorrirPorDentesFeios?: EnumRespostasSohoFieldUpdateOperationsInput | RespostasSoho
    deixouDeSorrirPorDentesDoendo?: EnumRespostasSohoFieldUpdateOperationsInput | RespostasSoho
  }

  export type SohoCreateManyInput = {
    id?: number
    idExame: number
    dificilComer: RespostasSoho
    dificilBeber: RespostasSoho
    dificilFalar: RespostasSoho
    dificilBrincar: RespostasSoho
    dificilDormir: RespostasSoho
    deixouDeSorrirPorDentesFeios: RespostasSoho
    deixouDeSorrirPorDentesDoendo: RespostasSoho
  }

  export type SohoUpdateManyMutationInput = {
    dificilComer?: EnumRespostasSohoFieldUpdateOperationsInput | RespostasSoho
    dificilBeber?: EnumRespostasSohoFieldUpdateOperationsInput | RespostasSoho
    dificilFalar?: EnumRespostasSohoFieldUpdateOperationsInput | RespostasSoho
    dificilBrincar?: EnumRespostasSohoFieldUpdateOperationsInput | RespostasSoho
    dificilDormir?: EnumRespostasSohoFieldUpdateOperationsInput | RespostasSoho
    deixouDeSorrirPorDentesFeios?: EnumRespostasSohoFieldUpdateOperationsInput | RespostasSoho
    deixouDeSorrirPorDentesDoendo?: EnumRespostasSohoFieldUpdateOperationsInput | RespostasSoho
  }

  export type SohoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idExame?: IntFieldUpdateOperationsInput | number
    dificilComer?: EnumRespostasSohoFieldUpdateOperationsInput | RespostasSoho
    dificilBeber?: EnumRespostasSohoFieldUpdateOperationsInput | RespostasSoho
    dificilFalar?: EnumRespostasSohoFieldUpdateOperationsInput | RespostasSoho
    dificilBrincar?: EnumRespostasSohoFieldUpdateOperationsInput | RespostasSoho
    dificilDormir?: EnumRespostasSohoFieldUpdateOperationsInput | RespostasSoho
    deixouDeSorrirPorDentesFeios?: EnumRespostasSohoFieldUpdateOperationsInput | RespostasSoho
    deixouDeSorrirPorDentesDoendo?: EnumRespostasSohoFieldUpdateOperationsInput | RespostasSoho
  }

  export type CPQCreateInput = {
    exame: ExameCreateNestedOneWithoutCPQInput
    dorNosDentes: RespostasCPQ
    feridas: RespostasCPQ
    mauHalito: RespostasCPQ
    restosDeAlimentoPreso: RespostasCPQ
    demorouMaisParaTerminarRefeicao: RespostasCPQ
    dificuldadeMorder: RespostasCPQ
    dificuldadeDizer: RespostasCPQ
    dificuldadeIngerirQuentesFrios: RespostasCPQ
    irritado: RespostasCPQ
    timido: RespostasCPQ
    chateado: RespostasCPQ
    preocupado: RespostasCPQ
    evitouSorrir: RespostasCPQ
    discutiu: RespostasCPQ
    aborreceuChamaramPorApelidos: RespostasCPQ
    perguntaramSobreDente: RespostasCPQ
  }

  export type CPQUncheckedCreateInput = {
    id?: number
    idExame: number
    dorNosDentes: RespostasCPQ
    feridas: RespostasCPQ
    mauHalito: RespostasCPQ
    restosDeAlimentoPreso: RespostasCPQ
    demorouMaisParaTerminarRefeicao: RespostasCPQ
    dificuldadeMorder: RespostasCPQ
    dificuldadeDizer: RespostasCPQ
    dificuldadeIngerirQuentesFrios: RespostasCPQ
    irritado: RespostasCPQ
    timido: RespostasCPQ
    chateado: RespostasCPQ
    preocupado: RespostasCPQ
    evitouSorrir: RespostasCPQ
    discutiu: RespostasCPQ
    aborreceuChamaramPorApelidos: RespostasCPQ
    perguntaramSobreDente: RespostasCPQ
  }

  export type CPQUpdateInput = {
    exame?: ExameUpdateOneRequiredWithoutCPQInput
    dorNosDentes?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    feridas?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    mauHalito?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    restosDeAlimentoPreso?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    demorouMaisParaTerminarRefeicao?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    dificuldadeMorder?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    dificuldadeDizer?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    dificuldadeIngerirQuentesFrios?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    irritado?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    timido?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    chateado?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    preocupado?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    evitouSorrir?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    discutiu?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    aborreceuChamaramPorApelidos?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    perguntaramSobreDente?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
  }

  export type CPQUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idExame?: IntFieldUpdateOperationsInput | number
    dorNosDentes?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    feridas?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    mauHalito?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    restosDeAlimentoPreso?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    demorouMaisParaTerminarRefeicao?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    dificuldadeMorder?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    dificuldadeDizer?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    dificuldadeIngerirQuentesFrios?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    irritado?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    timido?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    chateado?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    preocupado?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    evitouSorrir?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    discutiu?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    aborreceuChamaramPorApelidos?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    perguntaramSobreDente?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
  }

  export type CPQCreateManyInput = {
    id?: number
    idExame: number
    dorNosDentes: RespostasCPQ
    feridas: RespostasCPQ
    mauHalito: RespostasCPQ
    restosDeAlimentoPreso: RespostasCPQ
    demorouMaisParaTerminarRefeicao: RespostasCPQ
    dificuldadeMorder: RespostasCPQ
    dificuldadeDizer: RespostasCPQ
    dificuldadeIngerirQuentesFrios: RespostasCPQ
    irritado: RespostasCPQ
    timido: RespostasCPQ
    chateado: RespostasCPQ
    preocupado: RespostasCPQ
    evitouSorrir: RespostasCPQ
    discutiu: RespostasCPQ
    aborreceuChamaramPorApelidos: RespostasCPQ
    perguntaramSobreDente: RespostasCPQ
  }

  export type CPQUpdateManyMutationInput = {
    dorNosDentes?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    feridas?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    mauHalito?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    restosDeAlimentoPreso?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    demorouMaisParaTerminarRefeicao?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    dificuldadeMorder?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    dificuldadeDizer?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    dificuldadeIngerirQuentesFrios?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    irritado?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    timido?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    chateado?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    preocupado?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    evitouSorrir?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    discutiu?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    aborreceuChamaramPorApelidos?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    perguntaramSobreDente?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
  }

  export type CPQUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idExame?: IntFieldUpdateOperationsInput | number
    dorNosDentes?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    feridas?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    mauHalito?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    restosDeAlimentoPreso?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    demorouMaisParaTerminarRefeicao?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    dificuldadeMorder?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    dificuldadeDizer?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    dificuldadeIngerirQuentesFrios?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    irritado?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    timido?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    chateado?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    preocupado?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    evitouSorrir?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    discutiu?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    aborreceuChamaramPorApelidos?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    perguntaramSobreDente?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
  }

  export type MarcadorConsumoAlimentarCreateInput = {
    data: DataCreateNestedOneWithoutMarcadorConsumoAlimentarInput
    pessoa: PessoaCreateNestedOneWithoutMarcadorConsumoAlimentarInput
    usuario: UsuarioCreateNestedOneWithoutMarcadorConsumoAlimentarInput
    local: LocalCreateNestedOneWithoutMarcadorConsumoAlimentarInput
    exame?: ExameCreateNestedOneWithoutMarcadorConsumoAlimentarInput
    saladaCrua: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    legumesVerdurasCozidos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    frutasFrescasSaladaDeFrutas: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    feijao: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    leiteOuIogurte: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    batataFritaBatataDePacoteSalgadosFritos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    hamburgerEmbutidos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosSalgadosSalgadinhoDePacote: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    refrigerante: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  }

  export type MarcadorConsumoAlimentarUncheckedCreateInput = {
    id?: number
    idData: number
    idPessoa: number
    idUsuario: number
    idLocal: number
    exame?: ExameUncheckedCreateNestedOneWithoutMarcadorConsumoAlimentarInput
    saladaCrua: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    legumesVerdurasCozidos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    frutasFrescasSaladaDeFrutas: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    feijao: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    leiteOuIogurte: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    batataFritaBatataDePacoteSalgadosFritos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    hamburgerEmbutidos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosSalgadosSalgadinhoDePacote: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    refrigerante: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  }

  export type MarcadorConsumoAlimentarUpdateInput = {
    data?: DataUpdateOneRequiredWithoutMarcadorConsumoAlimentarInput
    pessoa?: PessoaUpdateOneRequiredWithoutMarcadorConsumoAlimentarInput
    usuario?: UsuarioUpdateOneRequiredWithoutMarcadorConsumoAlimentarInput
    local?: LocalUpdateOneRequiredWithoutMarcadorConsumoAlimentarInput
    exame?: ExameUpdateOneWithoutMarcadorConsumoAlimentarInput
    saladaCrua?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    legumesVerdurasCozidos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    frutasFrescasSaladaDeFrutas?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    feijao?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    leiteOuIogurte?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    batataFritaBatataDePacoteSalgadosFritos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    hamburgerEmbutidos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosSalgadosSalgadinhoDePacote?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    refrigerante?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  }

  export type MarcadorConsumoAlimentarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idData?: IntFieldUpdateOperationsInput | number
    idPessoa?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    idLocal?: IntFieldUpdateOperationsInput | number
    exame?: ExameUncheckedUpdateOneWithoutMarcadorConsumoAlimentarInput
    saladaCrua?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    legumesVerdurasCozidos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    frutasFrescasSaladaDeFrutas?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    feijao?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    leiteOuIogurte?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    batataFritaBatataDePacoteSalgadosFritos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    hamburgerEmbutidos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosSalgadosSalgadinhoDePacote?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    refrigerante?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  }

  export type MarcadorConsumoAlimentarCreateManyInput = {
    id?: number
    idData: number
    idPessoa: number
    idUsuario: number
    idLocal: number
    saladaCrua: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    legumesVerdurasCozidos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    frutasFrescasSaladaDeFrutas: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    feijao: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    leiteOuIogurte: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    batataFritaBatataDePacoteSalgadosFritos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    hamburgerEmbutidos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosSalgadosSalgadinhoDePacote: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    refrigerante: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  }

  export type MarcadorConsumoAlimentarUpdateManyMutationInput = {
    saladaCrua?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    legumesVerdurasCozidos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    frutasFrescasSaladaDeFrutas?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    feijao?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    leiteOuIogurte?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    batataFritaBatataDePacoteSalgadosFritos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    hamburgerEmbutidos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosSalgadosSalgadinhoDePacote?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    refrigerante?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  }

  export type MarcadorConsumoAlimentarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idData?: IntFieldUpdateOperationsInput | number
    idPessoa?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    idLocal?: IntFieldUpdateOperationsInput | number
    saladaCrua?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    legumesVerdurasCozidos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    frutasFrescasSaladaDeFrutas?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    feijao?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    leiteOuIogurte?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    batataFritaBatataDePacoteSalgadosFritos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    hamburgerEmbutidos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosSalgadosSalgadinhoDePacote?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    refrigerante?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  }

  export type UsuarioCreateInput = {
    nome?: string | null
    email: string
    senha: string
    ativo?: boolean
    papel: Papel
    exames?: ExameCreateNestedManyWithoutUsuarioInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaCreateNestedManyWithoutUsuarioInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarCreateNestedManyWithoutUsuarioInput
    coordenaEquipe?: EquipeCreateNestedOneWithoutCoordenadorInput
    pertenceEquipe?: EquipeCreateNestedOneWithoutIntegrantesInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nome?: string | null
    email: string
    senha: string
    ativo?: boolean
    papel: Papel
    exames?: ExameUncheckedCreateNestedManyWithoutUsuarioInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaUncheckedCreateNestedManyWithoutUsuarioInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarUncheckedCreateNestedManyWithoutUsuarioInput
    coordenaEquipe?: EquipeUncheckedCreateNestedOneWithoutCoordenadorInput
    idPertenceEquipe?: number | null
  }

  export type UsuarioUpdateInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    papel?: EnumPapelFieldUpdateOperationsInput | Papel
    exames?: ExameUpdateManyWithoutUsuarioInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaUpdateManyWithoutUsuarioInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarUpdateManyWithoutUsuarioInput
    coordenaEquipe?: EquipeUpdateOneWithoutCoordenadorInput
    pertenceEquipe?: EquipeUpdateOneWithoutIntegrantesInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    papel?: EnumPapelFieldUpdateOperationsInput | Papel
    exames?: ExameUncheckedUpdateManyWithoutUsuarioInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaUncheckedUpdateManyWithoutUsuarioInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarUncheckedUpdateManyWithoutUsuarioInput
    coordenaEquipe?: EquipeUncheckedUpdateOneWithoutCoordenadorInput
    idPertenceEquipe?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nome?: string | null
    email: string
    senha: string
    ativo?: boolean
    papel: Papel
    idPertenceEquipe?: number | null
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    papel?: EnumPapelFieldUpdateOperationsInput | Papel
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    papel?: EnumPapelFieldUpdateOperationsInput | Papel
    idPertenceEquipe?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EquipeCreateInput = {
    coordenador: UsuarioCreateNestedOneWithoutCoordenaEquipeInput
    integrantes?: UsuarioCreateNestedManyWithoutPertenceEquipeInput
  }

  export type EquipeUncheckedCreateInput = {
    id?: number
    idCoordenador: number
    integrantes?: UsuarioUncheckedCreateNestedManyWithoutPertenceEquipeInput
  }

  export type EquipeUpdateInput = {
    coordenador?: UsuarioUpdateOneRequiredWithoutCoordenaEquipeInput
    integrantes?: UsuarioUpdateManyWithoutPertenceEquipeInput
  }

  export type EquipeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCoordenador?: IntFieldUpdateOperationsInput | number
    integrantes?: UsuarioUncheckedUpdateManyWithoutPertenceEquipeInput
  }

  export type EquipeCreateManyInput = {
    id?: number
    idCoordenador: number
  }

  export type EquipeUpdateManyMutationInput = {

  }

  export type EquipeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCoordenador?: IntFieldUpdateOperationsInput | number
  }

  export type DataCreateInput = {
    dia: number
    mes: number
    ano: number
    exames?: ExameCreateNestedManyWithoutDataInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaCreateNestedManyWithoutDataInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarCreateNestedManyWithoutDataInput
  }

  export type DataUncheckedCreateInput = {
    id?: number
    dia: number
    mes: number
    ano: number
    exames?: ExameUncheckedCreateNestedManyWithoutDataInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaUncheckedCreateNestedManyWithoutDataInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarUncheckedCreateNestedManyWithoutDataInput
  }

  export type DataUpdateInput = {
    dia?: IntFieldUpdateOperationsInput | number
    mes?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    exames?: ExameUpdateManyWithoutDataInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaUpdateManyWithoutDataInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarUpdateManyWithoutDataInput
  }

  export type DataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dia?: IntFieldUpdateOperationsInput | number
    mes?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    exames?: ExameUncheckedUpdateManyWithoutDataInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaUncheckedUpdateManyWithoutDataInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarUncheckedUpdateManyWithoutDataInput
  }

  export type DataCreateManyInput = {
    id?: number
    dia: number
    mes: number
    ano: number
  }

  export type DataUpdateManyMutationInput = {
    dia?: IntFieldUpdateOperationsInput | number
    mes?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
  }

  export type DataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dia?: IntFieldUpdateOperationsInput | number
    mes?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
  }

  export type PessoaCreateInput = {
    nascimento: Date | string
    nome: string
    genero: Genero
    etniaPrincipal: Etnia
    etniaSecundaria?: Etnia | null
    exames?: ExameCreateNestedManyWithoutPessoaInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaCreateNestedManyWithoutPessoaInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarCreateNestedManyWithoutPessoaInput
  }

  export type PessoaUncheckedCreateInput = {
    id?: number
    nascimento: Date | string
    nome: string
    genero: Genero
    etniaPrincipal: Etnia
    etniaSecundaria?: Etnia | null
    exames?: ExameUncheckedCreateNestedManyWithoutPessoaInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaUncheckedCreateNestedManyWithoutPessoaInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarUncheckedCreateNestedManyWithoutPessoaInput
  }

  export type PessoaUpdateInput = {
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    genero?: EnumGeneroFieldUpdateOperationsInput | Genero
    etniaPrincipal?: EnumEtniaFieldUpdateOperationsInput | Etnia
    etniaSecundaria?: NullableEnumEtniaFieldUpdateOperationsInput | Etnia | null
    exames?: ExameUpdateManyWithoutPessoaInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaUpdateManyWithoutPessoaInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarUpdateManyWithoutPessoaInput
  }

  export type PessoaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    genero?: EnumGeneroFieldUpdateOperationsInput | Genero
    etniaPrincipal?: EnumEtniaFieldUpdateOperationsInput | Etnia
    etniaSecundaria?: NullableEnumEtniaFieldUpdateOperationsInput | Etnia | null
    exames?: ExameUncheckedUpdateManyWithoutPessoaInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaUncheckedUpdateManyWithoutPessoaInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarUncheckedUpdateManyWithoutPessoaInput
  }

  export type PessoaCreateManyInput = {
    id?: number
    nascimento: Date | string
    nome: string
    genero: Genero
    etniaPrincipal: Etnia
    etniaSecundaria?: Etnia | null
  }

  export type PessoaUpdateManyMutationInput = {
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    genero?: EnumGeneroFieldUpdateOperationsInput | Genero
    etniaPrincipal?: EnumEtniaFieldUpdateOperationsInput | Etnia
    etniaSecundaria?: NullableEnumEtniaFieldUpdateOperationsInput | Etnia | null
  }

  export type PessoaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    genero?: EnumGeneroFieldUpdateOperationsInput | Genero
    etniaPrincipal?: EnumEtniaFieldUpdateOperationsInput | Etnia
    etniaSecundaria?: NullableEnumEtniaFieldUpdateOperationsInput | Etnia | null
  }

  export type LocalCreateInput = {
    municipio: string
    escola: string
    exames?: ExameCreateNestedManyWithoutLocalInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaCreateNestedManyWithoutLocalInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarCreateNestedManyWithoutLocalInput
  }

  export type LocalUncheckedCreateInput = {
    id?: number
    municipio: string
    escola: string
    exames?: ExameUncheckedCreateNestedManyWithoutLocalInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaUncheckedCreateNestedManyWithoutLocalInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarUncheckedCreateNestedManyWithoutLocalInput
  }

  export type LocalUpdateInput = {
    municipio?: StringFieldUpdateOperationsInput | string
    escola?: StringFieldUpdateOperationsInput | string
    exames?: ExameUpdateManyWithoutLocalInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaUpdateManyWithoutLocalInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarUpdateManyWithoutLocalInput
  }

  export type LocalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    municipio?: StringFieldUpdateOperationsInput | string
    escola?: StringFieldUpdateOperationsInput | string
    exames?: ExameUncheckedUpdateManyWithoutLocalInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaUncheckedUpdateManyWithoutLocalInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarUncheckedUpdateManyWithoutLocalInput
  }

  export type LocalCreateManyInput = {
    id?: number
    municipio: string
    escola: string
  }

  export type LocalUpdateManyMutationInput = {
    municipio?: StringFieldUpdateOperationsInput | string
    escola?: StringFieldUpdateOperationsInput | string
  }

  export type LocalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    municipio?: StringFieldUpdateOperationsInput | string
    escola?: StringFieldUpdateOperationsInput | string
  }

  export type CondicaoPeriodontalCreateInput = {
    d17_16: boolean
    d21_11: boolean
    d27_26: boolean
    d31: boolean
    d37_36: boolean
    d47_46: boolean
    exame?: ExameCreateNestedOneWithoutCondicaoPeriodontalInput
  }

  export type CondicaoPeriodontalUncheckedCreateInput = {
    id?: number
    d17_16: boolean
    d21_11: boolean
    d27_26: boolean
    d31: boolean
    d37_36: boolean
    d47_46: boolean
    exame?: ExameUncheckedCreateNestedOneWithoutCondicaoPeriodontalInput
  }

  export type CondicaoPeriodontalUpdateInput = {
    d17_16?: BoolFieldUpdateOperationsInput | boolean
    d21_11?: BoolFieldUpdateOperationsInput | boolean
    d27_26?: BoolFieldUpdateOperationsInput | boolean
    d31?: BoolFieldUpdateOperationsInput | boolean
    d37_36?: BoolFieldUpdateOperationsInput | boolean
    d47_46?: BoolFieldUpdateOperationsInput | boolean
    exame?: ExameUpdateOneWithoutCondicaoPeriodontalInput
  }

  export type CondicaoPeriodontalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    d17_16?: BoolFieldUpdateOperationsInput | boolean
    d21_11?: BoolFieldUpdateOperationsInput | boolean
    d27_26?: BoolFieldUpdateOperationsInput | boolean
    d31?: BoolFieldUpdateOperationsInput | boolean
    d37_36?: BoolFieldUpdateOperationsInput | boolean
    d47_46?: BoolFieldUpdateOperationsInput | boolean
    exame?: ExameUncheckedUpdateOneWithoutCondicaoPeriodontalInput
  }

  export type CondicaoPeriodontalCreateManyInput = {
    id?: number
    d17_16: boolean
    d21_11: boolean
    d27_26: boolean
    d31: boolean
    d37_36: boolean
    d47_46: boolean
  }

  export type CondicaoPeriodontalUpdateManyMutationInput = {
    d17_16?: BoolFieldUpdateOperationsInput | boolean
    d21_11?: BoolFieldUpdateOperationsInput | boolean
    d27_26?: BoolFieldUpdateOperationsInput | boolean
    d31?: BoolFieldUpdateOperationsInput | boolean
    d37_36?: BoolFieldUpdateOperationsInput | boolean
    d47_46?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CondicaoPeriodontalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    d17_16?: BoolFieldUpdateOperationsInput | boolean
    d21_11?: BoolFieldUpdateOperationsInput | boolean
    d27_26?: BoolFieldUpdateOperationsInput | boolean
    d31?: BoolFieldUpdateOperationsInput | boolean
    d37_36?: BoolFieldUpdateOperationsInput | boolean
    d47_46?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExameCreateInput = {
    data: DataCreateNestedOneWithoutExamesInput
    pessoa: PessoaCreateNestedOneWithoutExamesInput
    condicaoPeriodontal?: CondicaoPeriodontalCreateNestedOneWithoutExameInput
    local: LocalCreateNestedOneWithoutExamesInput
    usuario: UsuarioCreateNestedOneWithoutExamesInput
    traumatismoDentario?: TraumatismoDentarioCreateNestedOneWithoutExameInput
    marcadorConsumoAlimentar: MarcadorConsumoAlimentarCreateNestedOneWithoutExameInput
    fluoroseDentaria: FluoroseDentaria
    overjetMaxilarAnterior: number
    overjetMandibularAnterior: number
    mordidaAbertaVerticalAnterior: number
    relacaoMolarAnteroPosterior: RelacaoMolarAnteroPosterior
    observacao: string
    dentes?: DenteCreateNestedManyWithoutExameInput
    Soho?: SohoCreateNestedOneWithoutExameInput
    CPQ?: CPQCreateNestedOneWithoutExameInput
    arquivado?: boolean
  }

  export type ExameUncheckedCreateInput = {
    id?: number
    idData: number
    idPessoa: number
    idCondicaoPeriodontal?: number | null
    idLocal: number
    idUsuario: number
    idTraumatismoDentario?: number | null
    idMarcadorConsumoAlimentar: number
    fluoroseDentaria: FluoroseDentaria
    overjetMaxilarAnterior: number
    overjetMandibularAnterior: number
    mordidaAbertaVerticalAnterior: number
    relacaoMolarAnteroPosterior: RelacaoMolarAnteroPosterior
    observacao: string
    dentes?: DenteUncheckedCreateNestedManyWithoutExameInput
    Soho?: SohoUncheckedCreateNestedOneWithoutExameInput
    CPQ?: CPQUncheckedCreateNestedOneWithoutExameInput
    arquivado?: boolean
  }

  export type ExameUpdateInput = {
    data?: DataUpdateOneRequiredWithoutExamesInput
    pessoa?: PessoaUpdateOneRequiredWithoutExamesInput
    condicaoPeriodontal?: CondicaoPeriodontalUpdateOneWithoutExameInput
    local?: LocalUpdateOneRequiredWithoutExamesInput
    usuario?: UsuarioUpdateOneRequiredWithoutExamesInput
    traumatismoDentario?: TraumatismoDentarioUpdateOneWithoutExameInput
    marcadorConsumoAlimentar?: MarcadorConsumoAlimentarUpdateOneRequiredWithoutExameInput
    fluoroseDentaria?: EnumFluoroseDentariaFieldUpdateOperationsInput | FluoroseDentaria
    overjetMaxilarAnterior?: IntFieldUpdateOperationsInput | number
    overjetMandibularAnterior?: IntFieldUpdateOperationsInput | number
    mordidaAbertaVerticalAnterior?: IntFieldUpdateOperationsInput | number
    relacaoMolarAnteroPosterior?: EnumRelacaoMolarAnteroPosteriorFieldUpdateOperationsInput | RelacaoMolarAnteroPosterior
    observacao?: StringFieldUpdateOperationsInput | string
    dentes?: DenteUpdateManyWithoutExameInput
    Soho?: SohoUpdateOneWithoutExameInput
    CPQ?: CPQUpdateOneWithoutExameInput
    arquivado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExameUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idData?: IntFieldUpdateOperationsInput | number
    idPessoa?: IntFieldUpdateOperationsInput | number
    idCondicaoPeriodontal?: NullableIntFieldUpdateOperationsInput | number | null
    idLocal?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    idTraumatismoDentario?: NullableIntFieldUpdateOperationsInput | number | null
    idMarcadorConsumoAlimentar?: IntFieldUpdateOperationsInput | number
    fluoroseDentaria?: EnumFluoroseDentariaFieldUpdateOperationsInput | FluoroseDentaria
    overjetMaxilarAnterior?: IntFieldUpdateOperationsInput | number
    overjetMandibularAnterior?: IntFieldUpdateOperationsInput | number
    mordidaAbertaVerticalAnterior?: IntFieldUpdateOperationsInput | number
    relacaoMolarAnteroPosterior?: EnumRelacaoMolarAnteroPosteriorFieldUpdateOperationsInput | RelacaoMolarAnteroPosterior
    observacao?: StringFieldUpdateOperationsInput | string
    dentes?: DenteUncheckedUpdateManyWithoutExameInput
    Soho?: SohoUncheckedUpdateOneWithoutExameInput
    CPQ?: CPQUncheckedUpdateOneWithoutExameInput
    arquivado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExameCreateManyInput = {
    id?: number
    idData: number
    idPessoa: number
    idCondicaoPeriodontal?: number | null
    idLocal: number
    idUsuario: number
    idTraumatismoDentario?: number | null
    idMarcadorConsumoAlimentar: number
    fluoroseDentaria: FluoroseDentaria
    overjetMaxilarAnterior: number
    overjetMandibularAnterior: number
    mordidaAbertaVerticalAnterior: number
    relacaoMolarAnteroPosterior: RelacaoMolarAnteroPosterior
    observacao: string
    arquivado?: boolean
  }

  export type ExameUpdateManyMutationInput = {
    fluoroseDentaria?: EnumFluoroseDentariaFieldUpdateOperationsInput | FluoroseDentaria
    overjetMaxilarAnterior?: IntFieldUpdateOperationsInput | number
    overjetMandibularAnterior?: IntFieldUpdateOperationsInput | number
    mordidaAbertaVerticalAnterior?: IntFieldUpdateOperationsInput | number
    relacaoMolarAnteroPosterior?: EnumRelacaoMolarAnteroPosteriorFieldUpdateOperationsInput | RelacaoMolarAnteroPosterior
    observacao?: StringFieldUpdateOperationsInput | string
    arquivado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExameUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idData?: IntFieldUpdateOperationsInput | number
    idPessoa?: IntFieldUpdateOperationsInput | number
    idCondicaoPeriodontal?: NullableIntFieldUpdateOperationsInput | number | null
    idLocal?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    idTraumatismoDentario?: NullableIntFieldUpdateOperationsInput | number | null
    idMarcadorConsumoAlimentar?: IntFieldUpdateOperationsInput | number
    fluoroseDentaria?: EnumFluoroseDentariaFieldUpdateOperationsInput | FluoroseDentaria
    overjetMaxilarAnterior?: IntFieldUpdateOperationsInput | number
    overjetMandibularAnterior?: IntFieldUpdateOperationsInput | number
    mordidaAbertaVerticalAnterior?: IntFieldUpdateOperationsInput | number
    relacaoMolarAnteroPosterior?: EnumRelacaoMolarAnteroPosteriorFieldUpdateOperationsInput | RelacaoMolarAnteroPosterior
    observacao?: StringFieldUpdateOperationsInput | string
    arquivado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DenteCreateInput = {
    Exame: ExameCreateNestedOneWithoutDentesInput
    leite?: boolean
    removido?: MotivoRemovido | null
    numero: number
    oclusal?: number | null
    mesial?: number | null
    distal?: number | null
    palatina?: number | null
    vestibular?: number | null
    trat?: number | null
    pufa?: number | null
  }

  export type DenteUncheckedCreateInput = {
    id?: number
    exameId: number
    leite?: boolean
    removido?: MotivoRemovido | null
    numero: number
    oclusal?: number | null
    mesial?: number | null
    distal?: number | null
    palatina?: number | null
    vestibular?: number | null
    trat?: number | null
    pufa?: number | null
  }

  export type DenteUpdateInput = {
    Exame?: ExameUpdateOneRequiredWithoutDentesInput
    leite?: BoolFieldUpdateOperationsInput | boolean
    removido?: NullableEnumMotivoRemovidoFieldUpdateOperationsInput | MotivoRemovido | null
    numero?: IntFieldUpdateOperationsInput | number
    oclusal?: NullableIntFieldUpdateOperationsInput | number | null
    mesial?: NullableIntFieldUpdateOperationsInput | number | null
    distal?: NullableIntFieldUpdateOperationsInput | number | null
    palatina?: NullableIntFieldUpdateOperationsInput | number | null
    vestibular?: NullableIntFieldUpdateOperationsInput | number | null
    trat?: NullableIntFieldUpdateOperationsInput | number | null
    pufa?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DenteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    exameId?: IntFieldUpdateOperationsInput | number
    leite?: BoolFieldUpdateOperationsInput | boolean
    removido?: NullableEnumMotivoRemovidoFieldUpdateOperationsInput | MotivoRemovido | null
    numero?: IntFieldUpdateOperationsInput | number
    oclusal?: NullableIntFieldUpdateOperationsInput | number | null
    mesial?: NullableIntFieldUpdateOperationsInput | number | null
    distal?: NullableIntFieldUpdateOperationsInput | number | null
    palatina?: NullableIntFieldUpdateOperationsInput | number | null
    vestibular?: NullableIntFieldUpdateOperationsInput | number | null
    trat?: NullableIntFieldUpdateOperationsInput | number | null
    pufa?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DenteCreateManyInput = {
    id?: number
    exameId: number
    leite?: boolean
    removido?: MotivoRemovido | null
    numero: number
    oclusal?: number | null
    mesial?: number | null
    distal?: number | null
    palatina?: number | null
    vestibular?: number | null
    trat?: number | null
    pufa?: number | null
  }

  export type DenteUpdateManyMutationInput = {
    leite?: BoolFieldUpdateOperationsInput | boolean
    removido?: NullableEnumMotivoRemovidoFieldUpdateOperationsInput | MotivoRemovido | null
    numero?: IntFieldUpdateOperationsInput | number
    oclusal?: NullableIntFieldUpdateOperationsInput | number | null
    mesial?: NullableIntFieldUpdateOperationsInput | number | null
    distal?: NullableIntFieldUpdateOperationsInput | number | null
    palatina?: NullableIntFieldUpdateOperationsInput | number | null
    vestibular?: NullableIntFieldUpdateOperationsInput | number | null
    trat?: NullableIntFieldUpdateOperationsInput | number | null
    pufa?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DenteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    exameId?: IntFieldUpdateOperationsInput | number
    leite?: BoolFieldUpdateOperationsInput | boolean
    removido?: NullableEnumMotivoRemovidoFieldUpdateOperationsInput | MotivoRemovido | null
    numero?: IntFieldUpdateOperationsInput | number
    oclusal?: NullableIntFieldUpdateOperationsInput | number | null
    mesial?: NullableIntFieldUpdateOperationsInput | number | null
    distal?: NullableIntFieldUpdateOperationsInput | number | null
    palatina?: NullableIntFieldUpdateOperationsInput | number | null
    vestibular?: NullableIntFieldUpdateOperationsInput | number | null
    trat?: NullableIntFieldUpdateOperationsInput | number | null
    pufa?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TraumatismoDentarioCreateInput = {
    exame?: ExameCreateNestedOneWithoutTraumatismoDentarioInput
    d_12: RespostasTraumatismoDentario
    d_11: RespostasTraumatismoDentario
    d_21: RespostasTraumatismoDentario
    d_22: RespostasTraumatismoDentario
    d_32: RespostasTraumatismoDentario
    d_31: RespostasTraumatismoDentario
    d_41: RespostasTraumatismoDentario
    d_42: RespostasTraumatismoDentario
  }

  export type TraumatismoDentarioUncheckedCreateInput = {
    id?: number
    exame?: ExameUncheckedCreateNestedOneWithoutTraumatismoDentarioInput
    d_12: RespostasTraumatismoDentario
    d_11: RespostasTraumatismoDentario
    d_21: RespostasTraumatismoDentario
    d_22: RespostasTraumatismoDentario
    d_32: RespostasTraumatismoDentario
    d_31: RespostasTraumatismoDentario
    d_41: RespostasTraumatismoDentario
    d_42: RespostasTraumatismoDentario
  }

  export type TraumatismoDentarioUpdateInput = {
    exame?: ExameUpdateOneWithoutTraumatismoDentarioInput
    d_12?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
    d_11?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
    d_21?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
    d_22?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
    d_32?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
    d_31?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
    d_41?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
    d_42?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
  }

  export type TraumatismoDentarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    exame?: ExameUncheckedUpdateOneWithoutTraumatismoDentarioInput
    d_12?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
    d_11?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
    d_21?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
    d_22?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
    d_32?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
    d_31?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
    d_41?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
    d_42?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
  }

  export type TraumatismoDentarioCreateManyInput = {
    id?: number
    d_12: RespostasTraumatismoDentario
    d_11: RespostasTraumatismoDentario
    d_21: RespostasTraumatismoDentario
    d_22: RespostasTraumatismoDentario
    d_32: RespostasTraumatismoDentario
    d_31: RespostasTraumatismoDentario
    d_41: RespostasTraumatismoDentario
    d_42: RespostasTraumatismoDentario
  }

  export type TraumatismoDentarioUpdateManyMutationInput = {
    d_12?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
    d_11?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
    d_21?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
    d_22?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
    d_32?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
    d_31?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
    d_41?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
    d_42?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
  }

  export type TraumatismoDentarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    d_12?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
    d_11?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
    d_21?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
    d_22?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
    d_32?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
    d_31?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
    d_41?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
    d_42?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
  }

  export type AvaliacaoSocioEconomicaCreateInput = {
    data: DataCreateNestedOneWithoutAvaliacaoSocioEconomicaInput
    pessoa: PessoaCreateNestedOneWithoutAvaliacaoSocioEconomicaInput
    local: LocalCreateNestedOneWithoutAvaliacaoSocioEconomicaInput
    usuario: UsuarioCreateNestedOneWithoutAvaliacaoSocioEconomicaInput
    qtdPessoasResidencia: number
    qtdComodosDormitorio: number
    qtdBens: number
    qtdTotalRendaUltimoMes: number
    escolaridadeMae: Escolaridade
    escolaridadePai: Escolaridade
    recebeBeneficioSocial?: boolean | null
    filhoDorDente6Meses?: boolean | null
    filhoNivelDor: number
    filhoVisitouDentista?: boolean | null
    filhoUltimaConsulta: UltimaConsulta
    filhoLocalConsulta: LocalConsulta
    motivoUltimaConsulta: MotivoUltimaConsulta
    avaliacaoUltimaConsulta: AvaliacaoUltimaConsulta
    filhoAvaliacaoBucal: AvaliacaoBucal
    filhoQtdEscovacoesPorDia: FilhoQtdEscovacoesPorDia
    frequenciaTrocaEscovas: FrequenciaTrocaEscovas
    usaFioDental: boolean
    usaPastaComFluor: boolean
    arquivado?: boolean
  }

  export type AvaliacaoSocioEconomicaUncheckedCreateInput = {
    id?: number
    idData: number
    idPessoa: number
    idLocal: number
    idUsuario: number
    qtdPessoasResidencia: number
    qtdComodosDormitorio: number
    qtdBens: number
    qtdTotalRendaUltimoMes: number
    escolaridadeMae: Escolaridade
    escolaridadePai: Escolaridade
    recebeBeneficioSocial?: boolean | null
    filhoDorDente6Meses?: boolean | null
    filhoNivelDor: number
    filhoVisitouDentista?: boolean | null
    filhoUltimaConsulta: UltimaConsulta
    filhoLocalConsulta: LocalConsulta
    motivoUltimaConsulta: MotivoUltimaConsulta
    avaliacaoUltimaConsulta: AvaliacaoUltimaConsulta
    filhoAvaliacaoBucal: AvaliacaoBucal
    filhoQtdEscovacoesPorDia: FilhoQtdEscovacoesPorDia
    frequenciaTrocaEscovas: FrequenciaTrocaEscovas
    usaFioDental: boolean
    usaPastaComFluor: boolean
    arquivado?: boolean
  }

  export type AvaliacaoSocioEconomicaUpdateInput = {
    data?: DataUpdateOneRequiredWithoutAvaliacaoSocioEconomicaInput
    pessoa?: PessoaUpdateOneRequiredWithoutAvaliacaoSocioEconomicaInput
    local?: LocalUpdateOneRequiredWithoutAvaliacaoSocioEconomicaInput
    usuario?: UsuarioUpdateOneRequiredWithoutAvaliacaoSocioEconomicaInput
    qtdPessoasResidencia?: IntFieldUpdateOperationsInput | number
    qtdComodosDormitorio?: IntFieldUpdateOperationsInput | number
    qtdBens?: IntFieldUpdateOperationsInput | number
    qtdTotalRendaUltimoMes?: IntFieldUpdateOperationsInput | number
    escolaridadeMae?: EnumEscolaridadeFieldUpdateOperationsInput | Escolaridade
    escolaridadePai?: EnumEscolaridadeFieldUpdateOperationsInput | Escolaridade
    recebeBeneficioSocial?: NullableBoolFieldUpdateOperationsInput | boolean | null
    filhoDorDente6Meses?: NullableBoolFieldUpdateOperationsInput | boolean | null
    filhoNivelDor?: IntFieldUpdateOperationsInput | number
    filhoVisitouDentista?: NullableBoolFieldUpdateOperationsInput | boolean | null
    filhoUltimaConsulta?: EnumUltimaConsultaFieldUpdateOperationsInput | UltimaConsulta
    filhoLocalConsulta?: EnumLocalConsultaFieldUpdateOperationsInput | LocalConsulta
    motivoUltimaConsulta?: EnumMotivoUltimaConsultaFieldUpdateOperationsInput | MotivoUltimaConsulta
    avaliacaoUltimaConsulta?: EnumAvaliacaoUltimaConsultaFieldUpdateOperationsInput | AvaliacaoUltimaConsulta
    filhoAvaliacaoBucal?: EnumAvaliacaoBucalFieldUpdateOperationsInput | AvaliacaoBucal
    filhoQtdEscovacoesPorDia?: EnumFilhoQtdEscovacoesPorDiaFieldUpdateOperationsInput | FilhoQtdEscovacoesPorDia
    frequenciaTrocaEscovas?: EnumFrequenciaTrocaEscovasFieldUpdateOperationsInput | FrequenciaTrocaEscovas
    usaFioDental?: BoolFieldUpdateOperationsInput | boolean
    usaPastaComFluor?: BoolFieldUpdateOperationsInput | boolean
    arquivado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvaliacaoSocioEconomicaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idData?: IntFieldUpdateOperationsInput | number
    idPessoa?: IntFieldUpdateOperationsInput | number
    idLocal?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    qtdPessoasResidencia?: IntFieldUpdateOperationsInput | number
    qtdComodosDormitorio?: IntFieldUpdateOperationsInput | number
    qtdBens?: IntFieldUpdateOperationsInput | number
    qtdTotalRendaUltimoMes?: IntFieldUpdateOperationsInput | number
    escolaridadeMae?: EnumEscolaridadeFieldUpdateOperationsInput | Escolaridade
    escolaridadePai?: EnumEscolaridadeFieldUpdateOperationsInput | Escolaridade
    recebeBeneficioSocial?: NullableBoolFieldUpdateOperationsInput | boolean | null
    filhoDorDente6Meses?: NullableBoolFieldUpdateOperationsInput | boolean | null
    filhoNivelDor?: IntFieldUpdateOperationsInput | number
    filhoVisitouDentista?: NullableBoolFieldUpdateOperationsInput | boolean | null
    filhoUltimaConsulta?: EnumUltimaConsultaFieldUpdateOperationsInput | UltimaConsulta
    filhoLocalConsulta?: EnumLocalConsultaFieldUpdateOperationsInput | LocalConsulta
    motivoUltimaConsulta?: EnumMotivoUltimaConsultaFieldUpdateOperationsInput | MotivoUltimaConsulta
    avaliacaoUltimaConsulta?: EnumAvaliacaoUltimaConsultaFieldUpdateOperationsInput | AvaliacaoUltimaConsulta
    filhoAvaliacaoBucal?: EnumAvaliacaoBucalFieldUpdateOperationsInput | AvaliacaoBucal
    filhoQtdEscovacoesPorDia?: EnumFilhoQtdEscovacoesPorDiaFieldUpdateOperationsInput | FilhoQtdEscovacoesPorDia
    frequenciaTrocaEscovas?: EnumFrequenciaTrocaEscovasFieldUpdateOperationsInput | FrequenciaTrocaEscovas
    usaFioDental?: BoolFieldUpdateOperationsInput | boolean
    usaPastaComFluor?: BoolFieldUpdateOperationsInput | boolean
    arquivado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvaliacaoSocioEconomicaCreateManyInput = {
    id?: number
    idData: number
    idPessoa: number
    idLocal: number
    idUsuario: number
    qtdPessoasResidencia: number
    qtdComodosDormitorio: number
    qtdBens: number
    qtdTotalRendaUltimoMes: number
    escolaridadeMae: Escolaridade
    escolaridadePai: Escolaridade
    recebeBeneficioSocial?: boolean | null
    filhoDorDente6Meses?: boolean | null
    filhoNivelDor: number
    filhoVisitouDentista?: boolean | null
    filhoUltimaConsulta: UltimaConsulta
    filhoLocalConsulta: LocalConsulta
    motivoUltimaConsulta: MotivoUltimaConsulta
    avaliacaoUltimaConsulta: AvaliacaoUltimaConsulta
    filhoAvaliacaoBucal: AvaliacaoBucal
    filhoQtdEscovacoesPorDia: FilhoQtdEscovacoesPorDia
    frequenciaTrocaEscovas: FrequenciaTrocaEscovas
    usaFioDental: boolean
    usaPastaComFluor: boolean
    arquivado?: boolean
  }

  export type AvaliacaoSocioEconomicaUpdateManyMutationInput = {
    qtdPessoasResidencia?: IntFieldUpdateOperationsInput | number
    qtdComodosDormitorio?: IntFieldUpdateOperationsInput | number
    qtdBens?: IntFieldUpdateOperationsInput | number
    qtdTotalRendaUltimoMes?: IntFieldUpdateOperationsInput | number
    escolaridadeMae?: EnumEscolaridadeFieldUpdateOperationsInput | Escolaridade
    escolaridadePai?: EnumEscolaridadeFieldUpdateOperationsInput | Escolaridade
    recebeBeneficioSocial?: NullableBoolFieldUpdateOperationsInput | boolean | null
    filhoDorDente6Meses?: NullableBoolFieldUpdateOperationsInput | boolean | null
    filhoNivelDor?: IntFieldUpdateOperationsInput | number
    filhoVisitouDentista?: NullableBoolFieldUpdateOperationsInput | boolean | null
    filhoUltimaConsulta?: EnumUltimaConsultaFieldUpdateOperationsInput | UltimaConsulta
    filhoLocalConsulta?: EnumLocalConsultaFieldUpdateOperationsInput | LocalConsulta
    motivoUltimaConsulta?: EnumMotivoUltimaConsultaFieldUpdateOperationsInput | MotivoUltimaConsulta
    avaliacaoUltimaConsulta?: EnumAvaliacaoUltimaConsultaFieldUpdateOperationsInput | AvaliacaoUltimaConsulta
    filhoAvaliacaoBucal?: EnumAvaliacaoBucalFieldUpdateOperationsInput | AvaliacaoBucal
    filhoQtdEscovacoesPorDia?: EnumFilhoQtdEscovacoesPorDiaFieldUpdateOperationsInput | FilhoQtdEscovacoesPorDia
    frequenciaTrocaEscovas?: EnumFrequenciaTrocaEscovasFieldUpdateOperationsInput | FrequenciaTrocaEscovas
    usaFioDental?: BoolFieldUpdateOperationsInput | boolean
    usaPastaComFluor?: BoolFieldUpdateOperationsInput | boolean
    arquivado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvaliacaoSocioEconomicaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idData?: IntFieldUpdateOperationsInput | number
    idPessoa?: IntFieldUpdateOperationsInput | number
    idLocal?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    qtdPessoasResidencia?: IntFieldUpdateOperationsInput | number
    qtdComodosDormitorio?: IntFieldUpdateOperationsInput | number
    qtdBens?: IntFieldUpdateOperationsInput | number
    qtdTotalRendaUltimoMes?: IntFieldUpdateOperationsInput | number
    escolaridadeMae?: EnumEscolaridadeFieldUpdateOperationsInput | Escolaridade
    escolaridadePai?: EnumEscolaridadeFieldUpdateOperationsInput | Escolaridade
    recebeBeneficioSocial?: NullableBoolFieldUpdateOperationsInput | boolean | null
    filhoDorDente6Meses?: NullableBoolFieldUpdateOperationsInput | boolean | null
    filhoNivelDor?: IntFieldUpdateOperationsInput | number
    filhoVisitouDentista?: NullableBoolFieldUpdateOperationsInput | boolean | null
    filhoUltimaConsulta?: EnumUltimaConsultaFieldUpdateOperationsInput | UltimaConsulta
    filhoLocalConsulta?: EnumLocalConsultaFieldUpdateOperationsInput | LocalConsulta
    motivoUltimaConsulta?: EnumMotivoUltimaConsultaFieldUpdateOperationsInput | MotivoUltimaConsulta
    avaliacaoUltimaConsulta?: EnumAvaliacaoUltimaConsultaFieldUpdateOperationsInput | AvaliacaoUltimaConsulta
    filhoAvaliacaoBucal?: EnumAvaliacaoBucalFieldUpdateOperationsInput | AvaliacaoBucal
    filhoQtdEscovacoesPorDia?: EnumFilhoQtdEscovacoesPorDiaFieldUpdateOperationsInput | FilhoQtdEscovacoesPorDia
    frequenciaTrocaEscovas?: EnumFrequenciaTrocaEscovasFieldUpdateOperationsInput | FrequenciaTrocaEscovas
    usaFioDental?: BoolFieldUpdateOperationsInput | boolean
    usaPastaComFluor?: BoolFieldUpdateOperationsInput | boolean
    arquivado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type ExameRelationFilter = {
    is?: ExameWhereInput | null
    isNot?: ExameWhereInput | null
  }

  export type EnumRespostasSohoFilter = {
    equals?: RespostasSoho
    in?: Enumerable<RespostasSoho>
    notIn?: Enumerable<RespostasSoho>
    not?: NestedEnumRespostasSohoFilter | RespostasSoho
  }

  export type SohoCountOrderByAggregateInput = {
    id?: SortOrder
    idExame?: SortOrder
    dificilComer?: SortOrder
    dificilBeber?: SortOrder
    dificilFalar?: SortOrder
    dificilBrincar?: SortOrder
    dificilDormir?: SortOrder
    deixouDeSorrirPorDentesFeios?: SortOrder
    deixouDeSorrirPorDentesDoendo?: SortOrder
  }

  export type SohoAvgOrderByAggregateInput = {
    id?: SortOrder
    idExame?: SortOrder
  }

  export type SohoMaxOrderByAggregateInput = {
    id?: SortOrder
    idExame?: SortOrder
    dificilComer?: SortOrder
    dificilBeber?: SortOrder
    dificilFalar?: SortOrder
    dificilBrincar?: SortOrder
    dificilDormir?: SortOrder
    deixouDeSorrirPorDentesFeios?: SortOrder
    deixouDeSorrirPorDentesDoendo?: SortOrder
  }

  export type SohoMinOrderByAggregateInput = {
    id?: SortOrder
    idExame?: SortOrder
    dificilComer?: SortOrder
    dificilBeber?: SortOrder
    dificilFalar?: SortOrder
    dificilBrincar?: SortOrder
    dificilDormir?: SortOrder
    deixouDeSorrirPorDentesFeios?: SortOrder
    deixouDeSorrirPorDentesDoendo?: SortOrder
  }

  export type SohoSumOrderByAggregateInput = {
    id?: SortOrder
    idExame?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type EnumRespostasSohoWithAggregatesFilter = {
    equals?: RespostasSoho
    in?: Enumerable<RespostasSoho>
    notIn?: Enumerable<RespostasSoho>
    not?: NestedEnumRespostasSohoWithAggregatesFilter | RespostasSoho
    _count?: NestedIntFilter
    _min?: NestedEnumRespostasSohoFilter
    _max?: NestedEnumRespostasSohoFilter
  }

  export type EnumRespostasCPQFilter = {
    equals?: RespostasCPQ
    in?: Enumerable<RespostasCPQ>
    notIn?: Enumerable<RespostasCPQ>
    not?: NestedEnumRespostasCPQFilter | RespostasCPQ
  }

  export type CPQCountOrderByAggregateInput = {
    id?: SortOrder
    idExame?: SortOrder
    dorNosDentes?: SortOrder
    feridas?: SortOrder
    mauHalito?: SortOrder
    restosDeAlimentoPreso?: SortOrder
    demorouMaisParaTerminarRefeicao?: SortOrder
    dificuldadeMorder?: SortOrder
    dificuldadeDizer?: SortOrder
    dificuldadeIngerirQuentesFrios?: SortOrder
    irritado?: SortOrder
    timido?: SortOrder
    chateado?: SortOrder
    preocupado?: SortOrder
    evitouSorrir?: SortOrder
    discutiu?: SortOrder
    aborreceuChamaramPorApelidos?: SortOrder
    perguntaramSobreDente?: SortOrder
  }

  export type CPQAvgOrderByAggregateInput = {
    id?: SortOrder
    idExame?: SortOrder
  }

  export type CPQMaxOrderByAggregateInput = {
    id?: SortOrder
    idExame?: SortOrder
    dorNosDentes?: SortOrder
    feridas?: SortOrder
    mauHalito?: SortOrder
    restosDeAlimentoPreso?: SortOrder
    demorouMaisParaTerminarRefeicao?: SortOrder
    dificuldadeMorder?: SortOrder
    dificuldadeDizer?: SortOrder
    dificuldadeIngerirQuentesFrios?: SortOrder
    irritado?: SortOrder
    timido?: SortOrder
    chateado?: SortOrder
    preocupado?: SortOrder
    evitouSorrir?: SortOrder
    discutiu?: SortOrder
    aborreceuChamaramPorApelidos?: SortOrder
    perguntaramSobreDente?: SortOrder
  }

  export type CPQMinOrderByAggregateInput = {
    id?: SortOrder
    idExame?: SortOrder
    dorNosDentes?: SortOrder
    feridas?: SortOrder
    mauHalito?: SortOrder
    restosDeAlimentoPreso?: SortOrder
    demorouMaisParaTerminarRefeicao?: SortOrder
    dificuldadeMorder?: SortOrder
    dificuldadeDizer?: SortOrder
    dificuldadeIngerirQuentesFrios?: SortOrder
    irritado?: SortOrder
    timido?: SortOrder
    chateado?: SortOrder
    preocupado?: SortOrder
    evitouSorrir?: SortOrder
    discutiu?: SortOrder
    aborreceuChamaramPorApelidos?: SortOrder
    perguntaramSobreDente?: SortOrder
  }

  export type CPQSumOrderByAggregateInput = {
    id?: SortOrder
    idExame?: SortOrder
  }

  export type EnumRespostasCPQWithAggregatesFilter = {
    equals?: RespostasCPQ
    in?: Enumerable<RespostasCPQ>
    notIn?: Enumerable<RespostasCPQ>
    not?: NestedEnumRespostasCPQWithAggregatesFilter | RespostasCPQ
    _count?: NestedIntFilter
    _min?: NestedEnumRespostasCPQFilter
    _max?: NestedEnumRespostasCPQFilter
  }

  export type DataRelationFilter = {
    is?: DataWhereInput
    isNot?: DataWhereInput
  }

  export type PessoaRelationFilter = {
    is?: PessoaWhereInput
    isNot?: PessoaWhereInput
  }

  export type UsuarioRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type LocalRelationFilter = {
    is?: LocalWhereInput
    isNot?: LocalWhereInput
  }

  export type EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFilter = {
    equals?: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    in?: Enumerable<FrequenciaIngestaoAlimentoBebidaUltimosSeteDias>
    notIn?: Enumerable<FrequenciaIngestaoAlimentoBebidaUltimosSeteDias>
    not?: NestedEnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFilter | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  }

  export type MarcadorConsumoAlimentarCountOrderByAggregateInput = {
    id?: SortOrder
    idData?: SortOrder
    idPessoa?: SortOrder
    idUsuario?: SortOrder
    idLocal?: SortOrder
    saladaCrua?: SortOrder
    legumesVerdurasCozidos?: SortOrder
    frutasFrescasSaladaDeFrutas?: SortOrder
    feijao?: SortOrder
    leiteOuIogurte?: SortOrder
    batataFritaBatataDePacoteSalgadosFritos?: SortOrder
    hamburgerEmbutidos?: SortOrder
    bolachasBiscoitosSalgadosSalgadinhoDePacote?: SortOrder
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates?: SortOrder
    refrigerante?: SortOrder
  }

  export type MarcadorConsumoAlimentarAvgOrderByAggregateInput = {
    id?: SortOrder
    idData?: SortOrder
    idPessoa?: SortOrder
    idUsuario?: SortOrder
    idLocal?: SortOrder
  }

  export type MarcadorConsumoAlimentarMaxOrderByAggregateInput = {
    id?: SortOrder
    idData?: SortOrder
    idPessoa?: SortOrder
    idUsuario?: SortOrder
    idLocal?: SortOrder
    saladaCrua?: SortOrder
    legumesVerdurasCozidos?: SortOrder
    frutasFrescasSaladaDeFrutas?: SortOrder
    feijao?: SortOrder
    leiteOuIogurte?: SortOrder
    batataFritaBatataDePacoteSalgadosFritos?: SortOrder
    hamburgerEmbutidos?: SortOrder
    bolachasBiscoitosSalgadosSalgadinhoDePacote?: SortOrder
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates?: SortOrder
    refrigerante?: SortOrder
  }

  export type MarcadorConsumoAlimentarMinOrderByAggregateInput = {
    id?: SortOrder
    idData?: SortOrder
    idPessoa?: SortOrder
    idUsuario?: SortOrder
    idLocal?: SortOrder
    saladaCrua?: SortOrder
    legumesVerdurasCozidos?: SortOrder
    frutasFrescasSaladaDeFrutas?: SortOrder
    feijao?: SortOrder
    leiteOuIogurte?: SortOrder
    batataFritaBatataDePacoteSalgadosFritos?: SortOrder
    hamburgerEmbutidos?: SortOrder
    bolachasBiscoitosSalgadosSalgadinhoDePacote?: SortOrder
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates?: SortOrder
    refrigerante?: SortOrder
  }

  export type MarcadorConsumoAlimentarSumOrderByAggregateInput = {
    id?: SortOrder
    idData?: SortOrder
    idPessoa?: SortOrder
    idUsuario?: SortOrder
    idLocal?: SortOrder
  }

  export type EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasWithAggregatesFilter = {
    equals?: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    in?: Enumerable<FrequenciaIngestaoAlimentoBebidaUltimosSeteDias>
    notIn?: Enumerable<FrequenciaIngestaoAlimentoBebidaUltimosSeteDias>
    not?: NestedEnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasWithAggregatesFilter | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    _count?: NestedIntFilter
    _min?: NestedEnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFilter
    _max?: NestedEnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type EnumPapelFilter = {
    equals?: Papel
    in?: Enumerable<Papel>
    notIn?: Enumerable<Papel>
    not?: NestedEnumPapelFilter | Papel
  }

  export type ExameListRelationFilter = {
    every?: ExameWhereInput
    some?: ExameWhereInput
    none?: ExameWhereInput
  }

  export type AvaliacaoSocioEconomicaListRelationFilter = {
    every?: AvaliacaoSocioEconomicaWhereInput
    some?: AvaliacaoSocioEconomicaWhereInput
    none?: AvaliacaoSocioEconomicaWhereInput
  }

  export type MarcadorConsumoAlimentarListRelationFilter = {
    every?: MarcadorConsumoAlimentarWhereInput
    some?: MarcadorConsumoAlimentarWhereInput
    none?: MarcadorConsumoAlimentarWhereInput
  }

  export type EquipeRelationFilter = {
    is?: EquipeWhereInput | null
    isNot?: EquipeWhereInput | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type ExameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvaliacaoSocioEconomicaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MarcadorConsumoAlimentarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    ativo?: SortOrder
    papel?: SortOrder
    idPertenceEquipe?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
    idPertenceEquipe?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    ativo?: SortOrder
    papel?: SortOrder
    idPertenceEquipe?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    ativo?: SortOrder
    papel?: SortOrder
    idPertenceEquipe?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
    idPertenceEquipe?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type EnumPapelWithAggregatesFilter = {
    equals?: Papel
    in?: Enumerable<Papel>
    notIn?: Enumerable<Papel>
    not?: NestedEnumPapelWithAggregatesFilter | Papel
    _count?: NestedIntFilter
    _min?: NestedEnumPapelFilter
    _max?: NestedEnumPapelFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EquipeCountOrderByAggregateInput = {
    id?: SortOrder
    idCoordenador?: SortOrder
  }

  export type EquipeAvgOrderByAggregateInput = {
    id?: SortOrder
    idCoordenador?: SortOrder
  }

  export type EquipeMaxOrderByAggregateInput = {
    id?: SortOrder
    idCoordenador?: SortOrder
  }

  export type EquipeMinOrderByAggregateInput = {
    id?: SortOrder
    idCoordenador?: SortOrder
  }

  export type EquipeSumOrderByAggregateInput = {
    id?: SortOrder
    idCoordenador?: SortOrder
  }

  export type DataDiaMesAnoCompoundUniqueInput = {
    dia: number
    mes: number
    ano: number
  }

  export type DataCountOrderByAggregateInput = {
    id?: SortOrder
    dia?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
  }

  export type DataAvgOrderByAggregateInput = {
    id?: SortOrder
    dia?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
  }

  export type DataMaxOrderByAggregateInput = {
    id?: SortOrder
    dia?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
  }

  export type DataMinOrderByAggregateInput = {
    id?: SortOrder
    dia?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
  }

  export type DataSumOrderByAggregateInput = {
    id?: SortOrder
    dia?: SortOrder
    mes?: SortOrder
    ano?: SortOrder
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type EnumGeneroFilter = {
    equals?: Genero
    in?: Enumerable<Genero>
    notIn?: Enumerable<Genero>
    not?: NestedEnumGeneroFilter | Genero
  }

  export type EnumEtniaFilter = {
    equals?: Etnia
    in?: Enumerable<Etnia>
    notIn?: Enumerable<Etnia>
    not?: NestedEnumEtniaFilter | Etnia
  }

  export type EnumEtniaNullableFilter = {
    equals?: Etnia | null
    in?: Enumerable<Etnia> | null
    notIn?: Enumerable<Etnia> | null
    not?: NestedEnumEtniaNullableFilter | Etnia | null
  }

  export type PessoaCountOrderByAggregateInput = {
    id?: SortOrder
    nascimento?: SortOrder
    nome?: SortOrder
    genero?: SortOrder
    etniaPrincipal?: SortOrder
    etniaSecundaria?: SortOrder
  }

  export type PessoaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PessoaMaxOrderByAggregateInput = {
    id?: SortOrder
    nascimento?: SortOrder
    nome?: SortOrder
    genero?: SortOrder
    etniaPrincipal?: SortOrder
    etniaSecundaria?: SortOrder
  }

  export type PessoaMinOrderByAggregateInput = {
    id?: SortOrder
    nascimento?: SortOrder
    nome?: SortOrder
    genero?: SortOrder
    etniaPrincipal?: SortOrder
    etniaSecundaria?: SortOrder
  }

  export type PessoaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type EnumGeneroWithAggregatesFilter = {
    equals?: Genero
    in?: Enumerable<Genero>
    notIn?: Enumerable<Genero>
    not?: NestedEnumGeneroWithAggregatesFilter | Genero
    _count?: NestedIntFilter
    _min?: NestedEnumGeneroFilter
    _max?: NestedEnumGeneroFilter
  }

  export type EnumEtniaWithAggregatesFilter = {
    equals?: Etnia
    in?: Enumerable<Etnia>
    notIn?: Enumerable<Etnia>
    not?: NestedEnumEtniaWithAggregatesFilter | Etnia
    _count?: NestedIntFilter
    _min?: NestedEnumEtniaFilter
    _max?: NestedEnumEtniaFilter
  }

  export type EnumEtniaNullableWithAggregatesFilter = {
    equals?: Etnia | null
    in?: Enumerable<Etnia> | null
    notIn?: Enumerable<Etnia> | null
    not?: NestedEnumEtniaNullableWithAggregatesFilter | Etnia | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumEtniaNullableFilter
    _max?: NestedEnumEtniaNullableFilter
  }

  export type LocalMunicipioEscolaCompoundUniqueInput = {
    municipio: string
    escola: string
  }

  export type LocalCountOrderByAggregateInput = {
    id?: SortOrder
    municipio?: SortOrder
    escola?: SortOrder
  }

  export type LocalAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LocalMaxOrderByAggregateInput = {
    id?: SortOrder
    municipio?: SortOrder
    escola?: SortOrder
  }

  export type LocalMinOrderByAggregateInput = {
    id?: SortOrder
    municipio?: SortOrder
    escola?: SortOrder
  }

  export type LocalSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CondicaoPeriodontalCountOrderByAggregateInput = {
    id?: SortOrder
    d17_16?: SortOrder
    d21_11?: SortOrder
    d27_26?: SortOrder
    d31?: SortOrder
    d37_36?: SortOrder
    d47_46?: SortOrder
  }

  export type CondicaoPeriodontalAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CondicaoPeriodontalMaxOrderByAggregateInput = {
    id?: SortOrder
    d17_16?: SortOrder
    d21_11?: SortOrder
    d27_26?: SortOrder
    d31?: SortOrder
    d37_36?: SortOrder
    d47_46?: SortOrder
  }

  export type CondicaoPeriodontalMinOrderByAggregateInput = {
    id?: SortOrder
    d17_16?: SortOrder
    d21_11?: SortOrder
    d27_26?: SortOrder
    d31?: SortOrder
    d37_36?: SortOrder
    d47_46?: SortOrder
  }

  export type CondicaoPeriodontalSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CondicaoPeriodontalRelationFilter = {
    is?: CondicaoPeriodontalWhereInput | null
    isNot?: CondicaoPeriodontalWhereInput | null
  }

  export type TraumatismoDentarioRelationFilter = {
    is?: TraumatismoDentarioWhereInput | null
    isNot?: TraumatismoDentarioWhereInput | null
  }

  export type MarcadorConsumoAlimentarRelationFilter = {
    is?: MarcadorConsumoAlimentarWhereInput
    isNot?: MarcadorConsumoAlimentarWhereInput
  }

  export type EnumFluoroseDentariaFilter = {
    equals?: FluoroseDentaria
    in?: Enumerable<FluoroseDentaria>
    notIn?: Enumerable<FluoroseDentaria>
    not?: NestedEnumFluoroseDentariaFilter | FluoroseDentaria
  }

  export type EnumRelacaoMolarAnteroPosteriorFilter = {
    equals?: RelacaoMolarAnteroPosterior
    in?: Enumerable<RelacaoMolarAnteroPosterior>
    notIn?: Enumerable<RelacaoMolarAnteroPosterior>
    not?: NestedEnumRelacaoMolarAnteroPosteriorFilter | RelacaoMolarAnteroPosterior
  }

  export type DenteListRelationFilter = {
    every?: DenteWhereInput
    some?: DenteWhereInput
    none?: DenteWhereInput
  }

  export type SohoRelationFilter = {
    is?: SohoWhereInput | null
    isNot?: SohoWhereInput | null
  }

  export type CPQRelationFilter = {
    is?: CPQWhereInput | null
    isNot?: CPQWhereInput | null
  }

  export type DenteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExameCountOrderByAggregateInput = {
    id?: SortOrder
    idData?: SortOrder
    idPessoa?: SortOrder
    idCondicaoPeriodontal?: SortOrder
    idLocal?: SortOrder
    idUsuario?: SortOrder
    idTraumatismoDentario?: SortOrder
    idMarcadorConsumoAlimentar?: SortOrder
    fluoroseDentaria?: SortOrder
    overjetMaxilarAnterior?: SortOrder
    overjetMandibularAnterior?: SortOrder
    mordidaAbertaVerticalAnterior?: SortOrder
    relacaoMolarAnteroPosterior?: SortOrder
    observacao?: SortOrder
    arquivado?: SortOrder
  }

  export type ExameAvgOrderByAggregateInput = {
    id?: SortOrder
    idData?: SortOrder
    idPessoa?: SortOrder
    idCondicaoPeriodontal?: SortOrder
    idLocal?: SortOrder
    idUsuario?: SortOrder
    idTraumatismoDentario?: SortOrder
    idMarcadorConsumoAlimentar?: SortOrder
    overjetMaxilarAnterior?: SortOrder
    overjetMandibularAnterior?: SortOrder
    mordidaAbertaVerticalAnterior?: SortOrder
  }

  export type ExameMaxOrderByAggregateInput = {
    id?: SortOrder
    idData?: SortOrder
    idPessoa?: SortOrder
    idCondicaoPeriodontal?: SortOrder
    idLocal?: SortOrder
    idUsuario?: SortOrder
    idTraumatismoDentario?: SortOrder
    idMarcadorConsumoAlimentar?: SortOrder
    fluoroseDentaria?: SortOrder
    overjetMaxilarAnterior?: SortOrder
    overjetMandibularAnterior?: SortOrder
    mordidaAbertaVerticalAnterior?: SortOrder
    relacaoMolarAnteroPosterior?: SortOrder
    observacao?: SortOrder
    arquivado?: SortOrder
  }

  export type ExameMinOrderByAggregateInput = {
    id?: SortOrder
    idData?: SortOrder
    idPessoa?: SortOrder
    idCondicaoPeriodontal?: SortOrder
    idLocal?: SortOrder
    idUsuario?: SortOrder
    idTraumatismoDentario?: SortOrder
    idMarcadorConsumoAlimentar?: SortOrder
    fluoroseDentaria?: SortOrder
    overjetMaxilarAnterior?: SortOrder
    overjetMandibularAnterior?: SortOrder
    mordidaAbertaVerticalAnterior?: SortOrder
    relacaoMolarAnteroPosterior?: SortOrder
    observacao?: SortOrder
    arquivado?: SortOrder
  }

  export type ExameSumOrderByAggregateInput = {
    id?: SortOrder
    idData?: SortOrder
    idPessoa?: SortOrder
    idCondicaoPeriodontal?: SortOrder
    idLocal?: SortOrder
    idUsuario?: SortOrder
    idTraumatismoDentario?: SortOrder
    idMarcadorConsumoAlimentar?: SortOrder
    overjetMaxilarAnterior?: SortOrder
    overjetMandibularAnterior?: SortOrder
    mordidaAbertaVerticalAnterior?: SortOrder
  }

  export type EnumFluoroseDentariaWithAggregatesFilter = {
    equals?: FluoroseDentaria
    in?: Enumerable<FluoroseDentaria>
    notIn?: Enumerable<FluoroseDentaria>
    not?: NestedEnumFluoroseDentariaWithAggregatesFilter | FluoroseDentaria
    _count?: NestedIntFilter
    _min?: NestedEnumFluoroseDentariaFilter
    _max?: NestedEnumFluoroseDentariaFilter
  }

  export type EnumRelacaoMolarAnteroPosteriorWithAggregatesFilter = {
    equals?: RelacaoMolarAnteroPosterior
    in?: Enumerable<RelacaoMolarAnteroPosterior>
    notIn?: Enumerable<RelacaoMolarAnteroPosterior>
    not?: NestedEnumRelacaoMolarAnteroPosteriorWithAggregatesFilter | RelacaoMolarAnteroPosterior
    _count?: NestedIntFilter
    _min?: NestedEnumRelacaoMolarAnteroPosteriorFilter
    _max?: NestedEnumRelacaoMolarAnteroPosteriorFilter
  }

  export type EnumMotivoRemovidoNullableFilter = {
    equals?: MotivoRemovido | null
    in?: Enumerable<MotivoRemovido> | null
    notIn?: Enumerable<MotivoRemovido> | null
    not?: NestedEnumMotivoRemovidoNullableFilter | MotivoRemovido | null
  }

  export type DenteCountOrderByAggregateInput = {
    id?: SortOrder
    exameId?: SortOrder
    leite?: SortOrder
    removido?: SortOrder
    numero?: SortOrder
    oclusal?: SortOrder
    mesial?: SortOrder
    distal?: SortOrder
    palatina?: SortOrder
    vestibular?: SortOrder
    trat?: SortOrder
    pufa?: SortOrder
  }

  export type DenteAvgOrderByAggregateInput = {
    id?: SortOrder
    exameId?: SortOrder
    numero?: SortOrder
    oclusal?: SortOrder
    mesial?: SortOrder
    distal?: SortOrder
    palatina?: SortOrder
    vestibular?: SortOrder
    trat?: SortOrder
    pufa?: SortOrder
  }

  export type DenteMaxOrderByAggregateInput = {
    id?: SortOrder
    exameId?: SortOrder
    leite?: SortOrder
    removido?: SortOrder
    numero?: SortOrder
    oclusal?: SortOrder
    mesial?: SortOrder
    distal?: SortOrder
    palatina?: SortOrder
    vestibular?: SortOrder
    trat?: SortOrder
    pufa?: SortOrder
  }

  export type DenteMinOrderByAggregateInput = {
    id?: SortOrder
    exameId?: SortOrder
    leite?: SortOrder
    removido?: SortOrder
    numero?: SortOrder
    oclusal?: SortOrder
    mesial?: SortOrder
    distal?: SortOrder
    palatina?: SortOrder
    vestibular?: SortOrder
    trat?: SortOrder
    pufa?: SortOrder
  }

  export type DenteSumOrderByAggregateInput = {
    id?: SortOrder
    exameId?: SortOrder
    numero?: SortOrder
    oclusal?: SortOrder
    mesial?: SortOrder
    distal?: SortOrder
    palatina?: SortOrder
    vestibular?: SortOrder
    trat?: SortOrder
    pufa?: SortOrder
  }

  export type EnumMotivoRemovidoNullableWithAggregatesFilter = {
    equals?: MotivoRemovido | null
    in?: Enumerable<MotivoRemovido> | null
    notIn?: Enumerable<MotivoRemovido> | null
    not?: NestedEnumMotivoRemovidoNullableWithAggregatesFilter | MotivoRemovido | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumMotivoRemovidoNullableFilter
    _max?: NestedEnumMotivoRemovidoNullableFilter
  }

  export type EnumRespostasTraumatismoDentarioFilter = {
    equals?: RespostasTraumatismoDentario
    in?: Enumerable<RespostasTraumatismoDentario>
    notIn?: Enumerable<RespostasTraumatismoDentario>
    not?: NestedEnumRespostasTraumatismoDentarioFilter | RespostasTraumatismoDentario
  }

  export type TraumatismoDentarioCountOrderByAggregateInput = {
    id?: SortOrder
    d_12?: SortOrder
    d_11?: SortOrder
    d_21?: SortOrder
    d_22?: SortOrder
    d_32?: SortOrder
    d_31?: SortOrder
    d_41?: SortOrder
    d_42?: SortOrder
  }

  export type TraumatismoDentarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TraumatismoDentarioMaxOrderByAggregateInput = {
    id?: SortOrder
    d_12?: SortOrder
    d_11?: SortOrder
    d_21?: SortOrder
    d_22?: SortOrder
    d_32?: SortOrder
    d_31?: SortOrder
    d_41?: SortOrder
    d_42?: SortOrder
  }

  export type TraumatismoDentarioMinOrderByAggregateInput = {
    id?: SortOrder
    d_12?: SortOrder
    d_11?: SortOrder
    d_21?: SortOrder
    d_22?: SortOrder
    d_32?: SortOrder
    d_31?: SortOrder
    d_41?: SortOrder
    d_42?: SortOrder
  }

  export type TraumatismoDentarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRespostasTraumatismoDentarioWithAggregatesFilter = {
    equals?: RespostasTraumatismoDentario
    in?: Enumerable<RespostasTraumatismoDentario>
    notIn?: Enumerable<RespostasTraumatismoDentario>
    not?: NestedEnumRespostasTraumatismoDentarioWithAggregatesFilter | RespostasTraumatismoDentario
    _count?: NestedIntFilter
    _min?: NestedEnumRespostasTraumatismoDentarioFilter
    _max?: NestedEnumRespostasTraumatismoDentarioFilter
  }

  export type EnumEscolaridadeFilter = {
    equals?: Escolaridade
    in?: Enumerable<Escolaridade>
    notIn?: Enumerable<Escolaridade>
    not?: NestedEnumEscolaridadeFilter | Escolaridade
  }

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type EnumUltimaConsultaFilter = {
    equals?: UltimaConsulta
    in?: Enumerable<UltimaConsulta>
    notIn?: Enumerable<UltimaConsulta>
    not?: NestedEnumUltimaConsultaFilter | UltimaConsulta
  }

  export type EnumLocalConsultaFilter = {
    equals?: LocalConsulta
    in?: Enumerable<LocalConsulta>
    notIn?: Enumerable<LocalConsulta>
    not?: NestedEnumLocalConsultaFilter | LocalConsulta
  }

  export type EnumMotivoUltimaConsultaFilter = {
    equals?: MotivoUltimaConsulta
    in?: Enumerable<MotivoUltimaConsulta>
    notIn?: Enumerable<MotivoUltimaConsulta>
    not?: NestedEnumMotivoUltimaConsultaFilter | MotivoUltimaConsulta
  }

  export type EnumAvaliacaoUltimaConsultaFilter = {
    equals?: AvaliacaoUltimaConsulta
    in?: Enumerable<AvaliacaoUltimaConsulta>
    notIn?: Enumerable<AvaliacaoUltimaConsulta>
    not?: NestedEnumAvaliacaoUltimaConsultaFilter | AvaliacaoUltimaConsulta
  }

  export type EnumAvaliacaoBucalFilter = {
    equals?: AvaliacaoBucal
    in?: Enumerable<AvaliacaoBucal>
    notIn?: Enumerable<AvaliacaoBucal>
    not?: NestedEnumAvaliacaoBucalFilter | AvaliacaoBucal
  }

  export type EnumFilhoQtdEscovacoesPorDiaFilter = {
    equals?: FilhoQtdEscovacoesPorDia
    in?: Enumerable<FilhoQtdEscovacoesPorDia>
    notIn?: Enumerable<FilhoQtdEscovacoesPorDia>
    not?: NestedEnumFilhoQtdEscovacoesPorDiaFilter | FilhoQtdEscovacoesPorDia
  }

  export type EnumFrequenciaTrocaEscovasFilter = {
    equals?: FrequenciaTrocaEscovas
    in?: Enumerable<FrequenciaTrocaEscovas>
    notIn?: Enumerable<FrequenciaTrocaEscovas>
    not?: NestedEnumFrequenciaTrocaEscovasFilter | FrequenciaTrocaEscovas
  }

  export type AvaliacaoSocioEconomicaCountOrderByAggregateInput = {
    id?: SortOrder
    idData?: SortOrder
    idPessoa?: SortOrder
    idLocal?: SortOrder
    idUsuario?: SortOrder
    qtdPessoasResidencia?: SortOrder
    qtdComodosDormitorio?: SortOrder
    qtdBens?: SortOrder
    qtdTotalRendaUltimoMes?: SortOrder
    escolaridadeMae?: SortOrder
    escolaridadePai?: SortOrder
    recebeBeneficioSocial?: SortOrder
    filhoDorDente6Meses?: SortOrder
    filhoNivelDor?: SortOrder
    filhoVisitouDentista?: SortOrder
    filhoUltimaConsulta?: SortOrder
    filhoLocalConsulta?: SortOrder
    motivoUltimaConsulta?: SortOrder
    avaliacaoUltimaConsulta?: SortOrder
    filhoAvaliacaoBucal?: SortOrder
    filhoQtdEscovacoesPorDia?: SortOrder
    frequenciaTrocaEscovas?: SortOrder
    usaFioDental?: SortOrder
    usaPastaComFluor?: SortOrder
    arquivado?: SortOrder
  }

  export type AvaliacaoSocioEconomicaAvgOrderByAggregateInput = {
    id?: SortOrder
    idData?: SortOrder
    idPessoa?: SortOrder
    idLocal?: SortOrder
    idUsuario?: SortOrder
    qtdPessoasResidencia?: SortOrder
    qtdComodosDormitorio?: SortOrder
    qtdBens?: SortOrder
    qtdTotalRendaUltimoMes?: SortOrder
    filhoNivelDor?: SortOrder
  }

  export type AvaliacaoSocioEconomicaMaxOrderByAggregateInput = {
    id?: SortOrder
    idData?: SortOrder
    idPessoa?: SortOrder
    idLocal?: SortOrder
    idUsuario?: SortOrder
    qtdPessoasResidencia?: SortOrder
    qtdComodosDormitorio?: SortOrder
    qtdBens?: SortOrder
    qtdTotalRendaUltimoMes?: SortOrder
    escolaridadeMae?: SortOrder
    escolaridadePai?: SortOrder
    recebeBeneficioSocial?: SortOrder
    filhoDorDente6Meses?: SortOrder
    filhoNivelDor?: SortOrder
    filhoVisitouDentista?: SortOrder
    filhoUltimaConsulta?: SortOrder
    filhoLocalConsulta?: SortOrder
    motivoUltimaConsulta?: SortOrder
    avaliacaoUltimaConsulta?: SortOrder
    filhoAvaliacaoBucal?: SortOrder
    filhoQtdEscovacoesPorDia?: SortOrder
    frequenciaTrocaEscovas?: SortOrder
    usaFioDental?: SortOrder
    usaPastaComFluor?: SortOrder
    arquivado?: SortOrder
  }

  export type AvaliacaoSocioEconomicaMinOrderByAggregateInput = {
    id?: SortOrder
    idData?: SortOrder
    idPessoa?: SortOrder
    idLocal?: SortOrder
    idUsuario?: SortOrder
    qtdPessoasResidencia?: SortOrder
    qtdComodosDormitorio?: SortOrder
    qtdBens?: SortOrder
    qtdTotalRendaUltimoMes?: SortOrder
    escolaridadeMae?: SortOrder
    escolaridadePai?: SortOrder
    recebeBeneficioSocial?: SortOrder
    filhoDorDente6Meses?: SortOrder
    filhoNivelDor?: SortOrder
    filhoVisitouDentista?: SortOrder
    filhoUltimaConsulta?: SortOrder
    filhoLocalConsulta?: SortOrder
    motivoUltimaConsulta?: SortOrder
    avaliacaoUltimaConsulta?: SortOrder
    filhoAvaliacaoBucal?: SortOrder
    filhoQtdEscovacoesPorDia?: SortOrder
    frequenciaTrocaEscovas?: SortOrder
    usaFioDental?: SortOrder
    usaPastaComFluor?: SortOrder
    arquivado?: SortOrder
  }

  export type AvaliacaoSocioEconomicaSumOrderByAggregateInput = {
    id?: SortOrder
    idData?: SortOrder
    idPessoa?: SortOrder
    idLocal?: SortOrder
    idUsuario?: SortOrder
    qtdPessoasResidencia?: SortOrder
    qtdComodosDormitorio?: SortOrder
    qtdBens?: SortOrder
    qtdTotalRendaUltimoMes?: SortOrder
    filhoNivelDor?: SortOrder
  }

  export type EnumEscolaridadeWithAggregatesFilter = {
    equals?: Escolaridade
    in?: Enumerable<Escolaridade>
    notIn?: Enumerable<Escolaridade>
    not?: NestedEnumEscolaridadeWithAggregatesFilter | Escolaridade
    _count?: NestedIntFilter
    _min?: NestedEnumEscolaridadeFilter
    _max?: NestedEnumEscolaridadeFilter
  }

  export type BoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type EnumUltimaConsultaWithAggregatesFilter = {
    equals?: UltimaConsulta
    in?: Enumerable<UltimaConsulta>
    notIn?: Enumerable<UltimaConsulta>
    not?: NestedEnumUltimaConsultaWithAggregatesFilter | UltimaConsulta
    _count?: NestedIntFilter
    _min?: NestedEnumUltimaConsultaFilter
    _max?: NestedEnumUltimaConsultaFilter
  }

  export type EnumLocalConsultaWithAggregatesFilter = {
    equals?: LocalConsulta
    in?: Enumerable<LocalConsulta>
    notIn?: Enumerable<LocalConsulta>
    not?: NestedEnumLocalConsultaWithAggregatesFilter | LocalConsulta
    _count?: NestedIntFilter
    _min?: NestedEnumLocalConsultaFilter
    _max?: NestedEnumLocalConsultaFilter
  }

  export type EnumMotivoUltimaConsultaWithAggregatesFilter = {
    equals?: MotivoUltimaConsulta
    in?: Enumerable<MotivoUltimaConsulta>
    notIn?: Enumerable<MotivoUltimaConsulta>
    not?: NestedEnumMotivoUltimaConsultaWithAggregatesFilter | MotivoUltimaConsulta
    _count?: NestedIntFilter
    _min?: NestedEnumMotivoUltimaConsultaFilter
    _max?: NestedEnumMotivoUltimaConsultaFilter
  }

  export type EnumAvaliacaoUltimaConsultaWithAggregatesFilter = {
    equals?: AvaliacaoUltimaConsulta
    in?: Enumerable<AvaliacaoUltimaConsulta>
    notIn?: Enumerable<AvaliacaoUltimaConsulta>
    not?: NestedEnumAvaliacaoUltimaConsultaWithAggregatesFilter | AvaliacaoUltimaConsulta
    _count?: NestedIntFilter
    _min?: NestedEnumAvaliacaoUltimaConsultaFilter
    _max?: NestedEnumAvaliacaoUltimaConsultaFilter
  }

  export type EnumAvaliacaoBucalWithAggregatesFilter = {
    equals?: AvaliacaoBucal
    in?: Enumerable<AvaliacaoBucal>
    notIn?: Enumerable<AvaliacaoBucal>
    not?: NestedEnumAvaliacaoBucalWithAggregatesFilter | AvaliacaoBucal
    _count?: NestedIntFilter
    _min?: NestedEnumAvaliacaoBucalFilter
    _max?: NestedEnumAvaliacaoBucalFilter
  }

  export type EnumFilhoQtdEscovacoesPorDiaWithAggregatesFilter = {
    equals?: FilhoQtdEscovacoesPorDia
    in?: Enumerable<FilhoQtdEscovacoesPorDia>
    notIn?: Enumerable<FilhoQtdEscovacoesPorDia>
    not?: NestedEnumFilhoQtdEscovacoesPorDiaWithAggregatesFilter | FilhoQtdEscovacoesPorDia
    _count?: NestedIntFilter
    _min?: NestedEnumFilhoQtdEscovacoesPorDiaFilter
    _max?: NestedEnumFilhoQtdEscovacoesPorDiaFilter
  }

  export type EnumFrequenciaTrocaEscovasWithAggregatesFilter = {
    equals?: FrequenciaTrocaEscovas
    in?: Enumerable<FrequenciaTrocaEscovas>
    notIn?: Enumerable<FrequenciaTrocaEscovas>
    not?: NestedEnumFrequenciaTrocaEscovasWithAggregatesFilter | FrequenciaTrocaEscovas
    _count?: NestedIntFilter
    _min?: NestedEnumFrequenciaTrocaEscovasFilter
    _max?: NestedEnumFrequenciaTrocaEscovasFilter
  }

  export type ExameCreateNestedOneWithoutSohoInput = {
    create?: XOR<ExameCreateWithoutSohoInput, ExameUncheckedCreateWithoutSohoInput>
    connectOrCreate?: ExameCreateOrConnectWithoutSohoInput
    connect?: ExameWhereUniqueInput
  }

  export type ExameUpdateOneRequiredWithoutSohoInput = {
    create?: XOR<ExameCreateWithoutSohoInput, ExameUncheckedCreateWithoutSohoInput>
    connectOrCreate?: ExameCreateOrConnectWithoutSohoInput
    upsert?: ExameUpsertWithoutSohoInput
    connect?: ExameWhereUniqueInput
    update?: XOR<ExameUpdateWithoutSohoInput, ExameUncheckedUpdateWithoutSohoInput>
  }

  export type EnumRespostasSohoFieldUpdateOperationsInput = {
    set?: RespostasSoho
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ExameCreateNestedOneWithoutCPQInput = {
    create?: XOR<ExameCreateWithoutCPQInput, ExameUncheckedCreateWithoutCPQInput>
    connectOrCreate?: ExameCreateOrConnectWithoutCPQInput
    connect?: ExameWhereUniqueInput
  }

  export type ExameUpdateOneRequiredWithoutCPQInput = {
    create?: XOR<ExameCreateWithoutCPQInput, ExameUncheckedCreateWithoutCPQInput>
    connectOrCreate?: ExameCreateOrConnectWithoutCPQInput
    upsert?: ExameUpsertWithoutCPQInput
    connect?: ExameWhereUniqueInput
    update?: XOR<ExameUpdateWithoutCPQInput, ExameUncheckedUpdateWithoutCPQInput>
  }

  export type EnumRespostasCPQFieldUpdateOperationsInput = {
    set?: RespostasCPQ
  }

  export type DataCreateNestedOneWithoutMarcadorConsumoAlimentarInput = {
    create?: XOR<DataCreateWithoutMarcadorConsumoAlimentarInput, DataUncheckedCreateWithoutMarcadorConsumoAlimentarInput>
    connectOrCreate?: DataCreateOrConnectWithoutMarcadorConsumoAlimentarInput
    connect?: DataWhereUniqueInput
  }

  export type PessoaCreateNestedOneWithoutMarcadorConsumoAlimentarInput = {
    create?: XOR<PessoaCreateWithoutMarcadorConsumoAlimentarInput, PessoaUncheckedCreateWithoutMarcadorConsumoAlimentarInput>
    connectOrCreate?: PessoaCreateOrConnectWithoutMarcadorConsumoAlimentarInput
    connect?: PessoaWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutMarcadorConsumoAlimentarInput = {
    create?: XOR<UsuarioCreateWithoutMarcadorConsumoAlimentarInput, UsuarioUncheckedCreateWithoutMarcadorConsumoAlimentarInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMarcadorConsumoAlimentarInput
    connect?: UsuarioWhereUniqueInput
  }

  export type LocalCreateNestedOneWithoutMarcadorConsumoAlimentarInput = {
    create?: XOR<LocalCreateWithoutMarcadorConsumoAlimentarInput, LocalUncheckedCreateWithoutMarcadorConsumoAlimentarInput>
    connectOrCreate?: LocalCreateOrConnectWithoutMarcadorConsumoAlimentarInput
    connect?: LocalWhereUniqueInput
  }

  export type ExameCreateNestedOneWithoutMarcadorConsumoAlimentarInput = {
    create?: XOR<ExameCreateWithoutMarcadorConsumoAlimentarInput, ExameUncheckedCreateWithoutMarcadorConsumoAlimentarInput>
    connectOrCreate?: ExameCreateOrConnectWithoutMarcadorConsumoAlimentarInput
    connect?: ExameWhereUniqueInput
  }

  export type ExameUncheckedCreateNestedOneWithoutMarcadorConsumoAlimentarInput = {
    create?: XOR<ExameCreateWithoutMarcadorConsumoAlimentarInput, ExameUncheckedCreateWithoutMarcadorConsumoAlimentarInput>
    connectOrCreate?: ExameCreateOrConnectWithoutMarcadorConsumoAlimentarInput
    connect?: ExameWhereUniqueInput
  }

  export type DataUpdateOneRequiredWithoutMarcadorConsumoAlimentarInput = {
    create?: XOR<DataCreateWithoutMarcadorConsumoAlimentarInput, DataUncheckedCreateWithoutMarcadorConsumoAlimentarInput>
    connectOrCreate?: DataCreateOrConnectWithoutMarcadorConsumoAlimentarInput
    upsert?: DataUpsertWithoutMarcadorConsumoAlimentarInput
    connect?: DataWhereUniqueInput
    update?: XOR<DataUpdateWithoutMarcadorConsumoAlimentarInput, DataUncheckedUpdateWithoutMarcadorConsumoAlimentarInput>
  }

  export type PessoaUpdateOneRequiredWithoutMarcadorConsumoAlimentarInput = {
    create?: XOR<PessoaCreateWithoutMarcadorConsumoAlimentarInput, PessoaUncheckedCreateWithoutMarcadorConsumoAlimentarInput>
    connectOrCreate?: PessoaCreateOrConnectWithoutMarcadorConsumoAlimentarInput
    upsert?: PessoaUpsertWithoutMarcadorConsumoAlimentarInput
    connect?: PessoaWhereUniqueInput
    update?: XOR<PessoaUpdateWithoutMarcadorConsumoAlimentarInput, PessoaUncheckedUpdateWithoutMarcadorConsumoAlimentarInput>
  }

  export type UsuarioUpdateOneRequiredWithoutMarcadorConsumoAlimentarInput = {
    create?: XOR<UsuarioCreateWithoutMarcadorConsumoAlimentarInput, UsuarioUncheckedCreateWithoutMarcadorConsumoAlimentarInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutMarcadorConsumoAlimentarInput
    upsert?: UsuarioUpsertWithoutMarcadorConsumoAlimentarInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<UsuarioUpdateWithoutMarcadorConsumoAlimentarInput, UsuarioUncheckedUpdateWithoutMarcadorConsumoAlimentarInput>
  }

  export type LocalUpdateOneRequiredWithoutMarcadorConsumoAlimentarInput = {
    create?: XOR<LocalCreateWithoutMarcadorConsumoAlimentarInput, LocalUncheckedCreateWithoutMarcadorConsumoAlimentarInput>
    connectOrCreate?: LocalCreateOrConnectWithoutMarcadorConsumoAlimentarInput
    upsert?: LocalUpsertWithoutMarcadorConsumoAlimentarInput
    connect?: LocalWhereUniqueInput
    update?: XOR<LocalUpdateWithoutMarcadorConsumoAlimentarInput, LocalUncheckedUpdateWithoutMarcadorConsumoAlimentarInput>
  }

  export type ExameUpdateOneWithoutMarcadorConsumoAlimentarInput = {
    create?: XOR<ExameCreateWithoutMarcadorConsumoAlimentarInput, ExameUncheckedCreateWithoutMarcadorConsumoAlimentarInput>
    connectOrCreate?: ExameCreateOrConnectWithoutMarcadorConsumoAlimentarInput
    upsert?: ExameUpsertWithoutMarcadorConsumoAlimentarInput
    disconnect?: boolean
    delete?: boolean
    connect?: ExameWhereUniqueInput
    update?: XOR<ExameUpdateWithoutMarcadorConsumoAlimentarInput, ExameUncheckedUpdateWithoutMarcadorConsumoAlimentarInput>
  }

  export type EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput = {
    set?: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  }

  export type ExameUncheckedUpdateOneWithoutMarcadorConsumoAlimentarInput = {
    create?: XOR<ExameCreateWithoutMarcadorConsumoAlimentarInput, ExameUncheckedCreateWithoutMarcadorConsumoAlimentarInput>
    connectOrCreate?: ExameCreateOrConnectWithoutMarcadorConsumoAlimentarInput
    upsert?: ExameUpsertWithoutMarcadorConsumoAlimentarInput
    disconnect?: boolean
    delete?: boolean
    connect?: ExameWhereUniqueInput
    update?: XOR<ExameUpdateWithoutMarcadorConsumoAlimentarInput, ExameUncheckedUpdateWithoutMarcadorConsumoAlimentarInput>
  }

  export type ExameCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<Enumerable<ExameCreateWithoutUsuarioInput>, Enumerable<ExameUncheckedCreateWithoutUsuarioInput>>
    connectOrCreate?: Enumerable<ExameCreateOrConnectWithoutUsuarioInput>
    createMany?: ExameCreateManyUsuarioInputEnvelope
    connect?: Enumerable<ExameWhereUniqueInput>
  }

  export type AvaliacaoSocioEconomicaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<Enumerable<AvaliacaoSocioEconomicaCreateWithoutUsuarioInput>, Enumerable<AvaliacaoSocioEconomicaUncheckedCreateWithoutUsuarioInput>>
    connectOrCreate?: Enumerable<AvaliacaoSocioEconomicaCreateOrConnectWithoutUsuarioInput>
    createMany?: AvaliacaoSocioEconomicaCreateManyUsuarioInputEnvelope
    connect?: Enumerable<AvaliacaoSocioEconomicaWhereUniqueInput>
  }

  export type MarcadorConsumoAlimentarCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<Enumerable<MarcadorConsumoAlimentarCreateWithoutUsuarioInput>, Enumerable<MarcadorConsumoAlimentarUncheckedCreateWithoutUsuarioInput>>
    connectOrCreate?: Enumerable<MarcadorConsumoAlimentarCreateOrConnectWithoutUsuarioInput>
    createMany?: MarcadorConsumoAlimentarCreateManyUsuarioInputEnvelope
    connect?: Enumerable<MarcadorConsumoAlimentarWhereUniqueInput>
  }

  export type EquipeCreateNestedOneWithoutCoordenadorInput = {
    create?: XOR<EquipeCreateWithoutCoordenadorInput, EquipeUncheckedCreateWithoutCoordenadorInput>
    connectOrCreate?: EquipeCreateOrConnectWithoutCoordenadorInput
    connect?: EquipeWhereUniqueInput
  }

  export type EquipeCreateNestedOneWithoutIntegrantesInput = {
    create?: XOR<EquipeCreateWithoutIntegrantesInput, EquipeUncheckedCreateWithoutIntegrantesInput>
    connectOrCreate?: EquipeCreateOrConnectWithoutIntegrantesInput
    connect?: EquipeWhereUniqueInput
  }

  export type ExameUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<Enumerable<ExameCreateWithoutUsuarioInput>, Enumerable<ExameUncheckedCreateWithoutUsuarioInput>>
    connectOrCreate?: Enumerable<ExameCreateOrConnectWithoutUsuarioInput>
    createMany?: ExameCreateManyUsuarioInputEnvelope
    connect?: Enumerable<ExameWhereUniqueInput>
  }

  export type AvaliacaoSocioEconomicaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<Enumerable<AvaliacaoSocioEconomicaCreateWithoutUsuarioInput>, Enumerable<AvaliacaoSocioEconomicaUncheckedCreateWithoutUsuarioInput>>
    connectOrCreate?: Enumerable<AvaliacaoSocioEconomicaCreateOrConnectWithoutUsuarioInput>
    createMany?: AvaliacaoSocioEconomicaCreateManyUsuarioInputEnvelope
    connect?: Enumerable<AvaliacaoSocioEconomicaWhereUniqueInput>
  }

  export type MarcadorConsumoAlimentarUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<Enumerable<MarcadorConsumoAlimentarCreateWithoutUsuarioInput>, Enumerable<MarcadorConsumoAlimentarUncheckedCreateWithoutUsuarioInput>>
    connectOrCreate?: Enumerable<MarcadorConsumoAlimentarCreateOrConnectWithoutUsuarioInput>
    createMany?: MarcadorConsumoAlimentarCreateManyUsuarioInputEnvelope
    connect?: Enumerable<MarcadorConsumoAlimentarWhereUniqueInput>
  }

  export type EquipeUncheckedCreateNestedOneWithoutCoordenadorInput = {
    create?: XOR<EquipeCreateWithoutCoordenadorInput, EquipeUncheckedCreateWithoutCoordenadorInput>
    connectOrCreate?: EquipeCreateOrConnectWithoutCoordenadorInput
    connect?: EquipeWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumPapelFieldUpdateOperationsInput = {
    set?: Papel
  }

  export type ExameUpdateManyWithoutUsuarioInput = {
    create?: XOR<Enumerable<ExameCreateWithoutUsuarioInput>, Enumerable<ExameUncheckedCreateWithoutUsuarioInput>>
    connectOrCreate?: Enumerable<ExameCreateOrConnectWithoutUsuarioInput>
    upsert?: Enumerable<ExameUpsertWithWhereUniqueWithoutUsuarioInput>
    createMany?: ExameCreateManyUsuarioInputEnvelope
    set?: Enumerable<ExameWhereUniqueInput>
    disconnect?: Enumerable<ExameWhereUniqueInput>
    delete?: Enumerable<ExameWhereUniqueInput>
    connect?: Enumerable<ExameWhereUniqueInput>
    update?: Enumerable<ExameUpdateWithWhereUniqueWithoutUsuarioInput>
    updateMany?: Enumerable<ExameUpdateManyWithWhereWithoutUsuarioInput>
    deleteMany?: Enumerable<ExameScalarWhereInput>
  }

  export type AvaliacaoSocioEconomicaUpdateManyWithoutUsuarioInput = {
    create?: XOR<Enumerable<AvaliacaoSocioEconomicaCreateWithoutUsuarioInput>, Enumerable<AvaliacaoSocioEconomicaUncheckedCreateWithoutUsuarioInput>>
    connectOrCreate?: Enumerable<AvaliacaoSocioEconomicaCreateOrConnectWithoutUsuarioInput>
    upsert?: Enumerable<AvaliacaoSocioEconomicaUpsertWithWhereUniqueWithoutUsuarioInput>
    createMany?: AvaliacaoSocioEconomicaCreateManyUsuarioInputEnvelope
    set?: Enumerable<AvaliacaoSocioEconomicaWhereUniqueInput>
    disconnect?: Enumerable<AvaliacaoSocioEconomicaWhereUniqueInput>
    delete?: Enumerable<AvaliacaoSocioEconomicaWhereUniqueInput>
    connect?: Enumerable<AvaliacaoSocioEconomicaWhereUniqueInput>
    update?: Enumerable<AvaliacaoSocioEconomicaUpdateWithWhereUniqueWithoutUsuarioInput>
    updateMany?: Enumerable<AvaliacaoSocioEconomicaUpdateManyWithWhereWithoutUsuarioInput>
    deleteMany?: Enumerable<AvaliacaoSocioEconomicaScalarWhereInput>
  }

  export type MarcadorConsumoAlimentarUpdateManyWithoutUsuarioInput = {
    create?: XOR<Enumerable<MarcadorConsumoAlimentarCreateWithoutUsuarioInput>, Enumerable<MarcadorConsumoAlimentarUncheckedCreateWithoutUsuarioInput>>
    connectOrCreate?: Enumerable<MarcadorConsumoAlimentarCreateOrConnectWithoutUsuarioInput>
    upsert?: Enumerable<MarcadorConsumoAlimentarUpsertWithWhereUniqueWithoutUsuarioInput>
    createMany?: MarcadorConsumoAlimentarCreateManyUsuarioInputEnvelope
    set?: Enumerable<MarcadorConsumoAlimentarWhereUniqueInput>
    disconnect?: Enumerable<MarcadorConsumoAlimentarWhereUniqueInput>
    delete?: Enumerable<MarcadorConsumoAlimentarWhereUniqueInput>
    connect?: Enumerable<MarcadorConsumoAlimentarWhereUniqueInput>
    update?: Enumerable<MarcadorConsumoAlimentarUpdateWithWhereUniqueWithoutUsuarioInput>
    updateMany?: Enumerable<MarcadorConsumoAlimentarUpdateManyWithWhereWithoutUsuarioInput>
    deleteMany?: Enumerable<MarcadorConsumoAlimentarScalarWhereInput>
  }

  export type EquipeUpdateOneWithoutCoordenadorInput = {
    create?: XOR<EquipeCreateWithoutCoordenadorInput, EquipeUncheckedCreateWithoutCoordenadorInput>
    connectOrCreate?: EquipeCreateOrConnectWithoutCoordenadorInput
    upsert?: EquipeUpsertWithoutCoordenadorInput
    disconnect?: boolean
    delete?: boolean
    connect?: EquipeWhereUniqueInput
    update?: XOR<EquipeUpdateWithoutCoordenadorInput, EquipeUncheckedUpdateWithoutCoordenadorInput>
  }

  export type EquipeUpdateOneWithoutIntegrantesInput = {
    create?: XOR<EquipeCreateWithoutIntegrantesInput, EquipeUncheckedCreateWithoutIntegrantesInput>
    connectOrCreate?: EquipeCreateOrConnectWithoutIntegrantesInput
    upsert?: EquipeUpsertWithoutIntegrantesInput
    disconnect?: boolean
    delete?: boolean
    connect?: EquipeWhereUniqueInput
    update?: XOR<EquipeUpdateWithoutIntegrantesInput, EquipeUncheckedUpdateWithoutIntegrantesInput>
  }

  export type ExameUncheckedUpdateManyWithoutUsuarioInput = {
    create?: XOR<Enumerable<ExameCreateWithoutUsuarioInput>, Enumerable<ExameUncheckedCreateWithoutUsuarioInput>>
    connectOrCreate?: Enumerable<ExameCreateOrConnectWithoutUsuarioInput>
    upsert?: Enumerable<ExameUpsertWithWhereUniqueWithoutUsuarioInput>
    createMany?: ExameCreateManyUsuarioInputEnvelope
    set?: Enumerable<ExameWhereUniqueInput>
    disconnect?: Enumerable<ExameWhereUniqueInput>
    delete?: Enumerable<ExameWhereUniqueInput>
    connect?: Enumerable<ExameWhereUniqueInput>
    update?: Enumerable<ExameUpdateWithWhereUniqueWithoutUsuarioInput>
    updateMany?: Enumerable<ExameUpdateManyWithWhereWithoutUsuarioInput>
    deleteMany?: Enumerable<ExameScalarWhereInput>
  }

  export type AvaliacaoSocioEconomicaUncheckedUpdateManyWithoutUsuarioInput = {
    create?: XOR<Enumerable<AvaliacaoSocioEconomicaCreateWithoutUsuarioInput>, Enumerable<AvaliacaoSocioEconomicaUncheckedCreateWithoutUsuarioInput>>
    connectOrCreate?: Enumerable<AvaliacaoSocioEconomicaCreateOrConnectWithoutUsuarioInput>
    upsert?: Enumerable<AvaliacaoSocioEconomicaUpsertWithWhereUniqueWithoutUsuarioInput>
    createMany?: AvaliacaoSocioEconomicaCreateManyUsuarioInputEnvelope
    set?: Enumerable<AvaliacaoSocioEconomicaWhereUniqueInput>
    disconnect?: Enumerable<AvaliacaoSocioEconomicaWhereUniqueInput>
    delete?: Enumerable<AvaliacaoSocioEconomicaWhereUniqueInput>
    connect?: Enumerable<AvaliacaoSocioEconomicaWhereUniqueInput>
    update?: Enumerable<AvaliacaoSocioEconomicaUpdateWithWhereUniqueWithoutUsuarioInput>
    updateMany?: Enumerable<AvaliacaoSocioEconomicaUpdateManyWithWhereWithoutUsuarioInput>
    deleteMany?: Enumerable<AvaliacaoSocioEconomicaScalarWhereInput>
  }

  export type MarcadorConsumoAlimentarUncheckedUpdateManyWithoutUsuarioInput = {
    create?: XOR<Enumerable<MarcadorConsumoAlimentarCreateWithoutUsuarioInput>, Enumerable<MarcadorConsumoAlimentarUncheckedCreateWithoutUsuarioInput>>
    connectOrCreate?: Enumerable<MarcadorConsumoAlimentarCreateOrConnectWithoutUsuarioInput>
    upsert?: Enumerable<MarcadorConsumoAlimentarUpsertWithWhereUniqueWithoutUsuarioInput>
    createMany?: MarcadorConsumoAlimentarCreateManyUsuarioInputEnvelope
    set?: Enumerable<MarcadorConsumoAlimentarWhereUniqueInput>
    disconnect?: Enumerable<MarcadorConsumoAlimentarWhereUniqueInput>
    delete?: Enumerable<MarcadorConsumoAlimentarWhereUniqueInput>
    connect?: Enumerable<MarcadorConsumoAlimentarWhereUniqueInput>
    update?: Enumerable<MarcadorConsumoAlimentarUpdateWithWhereUniqueWithoutUsuarioInput>
    updateMany?: Enumerable<MarcadorConsumoAlimentarUpdateManyWithWhereWithoutUsuarioInput>
    deleteMany?: Enumerable<MarcadorConsumoAlimentarScalarWhereInput>
  }

  export type EquipeUncheckedUpdateOneWithoutCoordenadorInput = {
    create?: XOR<EquipeCreateWithoutCoordenadorInput, EquipeUncheckedCreateWithoutCoordenadorInput>
    connectOrCreate?: EquipeCreateOrConnectWithoutCoordenadorInput
    upsert?: EquipeUpsertWithoutCoordenadorInput
    disconnect?: boolean
    delete?: boolean
    connect?: EquipeWhereUniqueInput
    update?: XOR<EquipeUpdateWithoutCoordenadorInput, EquipeUncheckedUpdateWithoutCoordenadorInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioCreateNestedOneWithoutCoordenaEquipeInput = {
    create?: XOR<UsuarioCreateWithoutCoordenaEquipeInput, UsuarioUncheckedCreateWithoutCoordenaEquipeInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCoordenaEquipeInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioCreateNestedManyWithoutPertenceEquipeInput = {
    create?: XOR<Enumerable<UsuarioCreateWithoutPertenceEquipeInput>, Enumerable<UsuarioUncheckedCreateWithoutPertenceEquipeInput>>
    connectOrCreate?: Enumerable<UsuarioCreateOrConnectWithoutPertenceEquipeInput>
    createMany?: UsuarioCreateManyPertenceEquipeInputEnvelope
    connect?: Enumerable<UsuarioWhereUniqueInput>
  }

  export type UsuarioUncheckedCreateNestedManyWithoutPertenceEquipeInput = {
    create?: XOR<Enumerable<UsuarioCreateWithoutPertenceEquipeInput>, Enumerable<UsuarioUncheckedCreateWithoutPertenceEquipeInput>>
    connectOrCreate?: Enumerable<UsuarioCreateOrConnectWithoutPertenceEquipeInput>
    createMany?: UsuarioCreateManyPertenceEquipeInputEnvelope
    connect?: Enumerable<UsuarioWhereUniqueInput>
  }

  export type UsuarioUpdateOneRequiredWithoutCoordenaEquipeInput = {
    create?: XOR<UsuarioCreateWithoutCoordenaEquipeInput, UsuarioUncheckedCreateWithoutCoordenaEquipeInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCoordenaEquipeInput
    upsert?: UsuarioUpsertWithoutCoordenaEquipeInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<UsuarioUpdateWithoutCoordenaEquipeInput, UsuarioUncheckedUpdateWithoutCoordenaEquipeInput>
  }

  export type UsuarioUpdateManyWithoutPertenceEquipeInput = {
    create?: XOR<Enumerable<UsuarioCreateWithoutPertenceEquipeInput>, Enumerable<UsuarioUncheckedCreateWithoutPertenceEquipeInput>>
    connectOrCreate?: Enumerable<UsuarioCreateOrConnectWithoutPertenceEquipeInput>
    upsert?: Enumerable<UsuarioUpsertWithWhereUniqueWithoutPertenceEquipeInput>
    createMany?: UsuarioCreateManyPertenceEquipeInputEnvelope
    set?: Enumerable<UsuarioWhereUniqueInput>
    disconnect?: Enumerable<UsuarioWhereUniqueInput>
    delete?: Enumerable<UsuarioWhereUniqueInput>
    connect?: Enumerable<UsuarioWhereUniqueInput>
    update?: Enumerable<UsuarioUpdateWithWhereUniqueWithoutPertenceEquipeInput>
    updateMany?: Enumerable<UsuarioUpdateManyWithWhereWithoutPertenceEquipeInput>
    deleteMany?: Enumerable<UsuarioScalarWhereInput>
  }

  export type UsuarioUncheckedUpdateManyWithoutPertenceEquipeInput = {
    create?: XOR<Enumerable<UsuarioCreateWithoutPertenceEquipeInput>, Enumerable<UsuarioUncheckedCreateWithoutPertenceEquipeInput>>
    connectOrCreate?: Enumerable<UsuarioCreateOrConnectWithoutPertenceEquipeInput>
    upsert?: Enumerable<UsuarioUpsertWithWhereUniqueWithoutPertenceEquipeInput>
    createMany?: UsuarioCreateManyPertenceEquipeInputEnvelope
    set?: Enumerable<UsuarioWhereUniqueInput>
    disconnect?: Enumerable<UsuarioWhereUniqueInput>
    delete?: Enumerable<UsuarioWhereUniqueInput>
    connect?: Enumerable<UsuarioWhereUniqueInput>
    update?: Enumerable<UsuarioUpdateWithWhereUniqueWithoutPertenceEquipeInput>
    updateMany?: Enumerable<UsuarioUpdateManyWithWhereWithoutPertenceEquipeInput>
    deleteMany?: Enumerable<UsuarioScalarWhereInput>
  }

  export type ExameCreateNestedManyWithoutDataInput = {
    create?: XOR<Enumerable<ExameCreateWithoutDataInput>, Enumerable<ExameUncheckedCreateWithoutDataInput>>
    connectOrCreate?: Enumerable<ExameCreateOrConnectWithoutDataInput>
    createMany?: ExameCreateManyDataInputEnvelope
    connect?: Enumerable<ExameWhereUniqueInput>
  }

  export type AvaliacaoSocioEconomicaCreateNestedManyWithoutDataInput = {
    create?: XOR<Enumerable<AvaliacaoSocioEconomicaCreateWithoutDataInput>, Enumerable<AvaliacaoSocioEconomicaUncheckedCreateWithoutDataInput>>
    connectOrCreate?: Enumerable<AvaliacaoSocioEconomicaCreateOrConnectWithoutDataInput>
    createMany?: AvaliacaoSocioEconomicaCreateManyDataInputEnvelope
    connect?: Enumerable<AvaliacaoSocioEconomicaWhereUniqueInput>
  }

  export type MarcadorConsumoAlimentarCreateNestedManyWithoutDataInput = {
    create?: XOR<Enumerable<MarcadorConsumoAlimentarCreateWithoutDataInput>, Enumerable<MarcadorConsumoAlimentarUncheckedCreateWithoutDataInput>>
    connectOrCreate?: Enumerable<MarcadorConsumoAlimentarCreateOrConnectWithoutDataInput>
    createMany?: MarcadorConsumoAlimentarCreateManyDataInputEnvelope
    connect?: Enumerable<MarcadorConsumoAlimentarWhereUniqueInput>
  }

  export type ExameUncheckedCreateNestedManyWithoutDataInput = {
    create?: XOR<Enumerable<ExameCreateWithoutDataInput>, Enumerable<ExameUncheckedCreateWithoutDataInput>>
    connectOrCreate?: Enumerable<ExameCreateOrConnectWithoutDataInput>
    createMany?: ExameCreateManyDataInputEnvelope
    connect?: Enumerable<ExameWhereUniqueInput>
  }

  export type AvaliacaoSocioEconomicaUncheckedCreateNestedManyWithoutDataInput = {
    create?: XOR<Enumerable<AvaliacaoSocioEconomicaCreateWithoutDataInput>, Enumerable<AvaliacaoSocioEconomicaUncheckedCreateWithoutDataInput>>
    connectOrCreate?: Enumerable<AvaliacaoSocioEconomicaCreateOrConnectWithoutDataInput>
    createMany?: AvaliacaoSocioEconomicaCreateManyDataInputEnvelope
    connect?: Enumerable<AvaliacaoSocioEconomicaWhereUniqueInput>
  }

  export type MarcadorConsumoAlimentarUncheckedCreateNestedManyWithoutDataInput = {
    create?: XOR<Enumerable<MarcadorConsumoAlimentarCreateWithoutDataInput>, Enumerable<MarcadorConsumoAlimentarUncheckedCreateWithoutDataInput>>
    connectOrCreate?: Enumerable<MarcadorConsumoAlimentarCreateOrConnectWithoutDataInput>
    createMany?: MarcadorConsumoAlimentarCreateManyDataInputEnvelope
    connect?: Enumerable<MarcadorConsumoAlimentarWhereUniqueInput>
  }

  export type ExameUpdateManyWithoutDataInput = {
    create?: XOR<Enumerable<ExameCreateWithoutDataInput>, Enumerable<ExameUncheckedCreateWithoutDataInput>>
    connectOrCreate?: Enumerable<ExameCreateOrConnectWithoutDataInput>
    upsert?: Enumerable<ExameUpsertWithWhereUniqueWithoutDataInput>
    createMany?: ExameCreateManyDataInputEnvelope
    set?: Enumerable<ExameWhereUniqueInput>
    disconnect?: Enumerable<ExameWhereUniqueInput>
    delete?: Enumerable<ExameWhereUniqueInput>
    connect?: Enumerable<ExameWhereUniqueInput>
    update?: Enumerable<ExameUpdateWithWhereUniqueWithoutDataInput>
    updateMany?: Enumerable<ExameUpdateManyWithWhereWithoutDataInput>
    deleteMany?: Enumerable<ExameScalarWhereInput>
  }

  export type AvaliacaoSocioEconomicaUpdateManyWithoutDataInput = {
    create?: XOR<Enumerable<AvaliacaoSocioEconomicaCreateWithoutDataInput>, Enumerable<AvaliacaoSocioEconomicaUncheckedCreateWithoutDataInput>>
    connectOrCreate?: Enumerable<AvaliacaoSocioEconomicaCreateOrConnectWithoutDataInput>
    upsert?: Enumerable<AvaliacaoSocioEconomicaUpsertWithWhereUniqueWithoutDataInput>
    createMany?: AvaliacaoSocioEconomicaCreateManyDataInputEnvelope
    set?: Enumerable<AvaliacaoSocioEconomicaWhereUniqueInput>
    disconnect?: Enumerable<AvaliacaoSocioEconomicaWhereUniqueInput>
    delete?: Enumerable<AvaliacaoSocioEconomicaWhereUniqueInput>
    connect?: Enumerable<AvaliacaoSocioEconomicaWhereUniqueInput>
    update?: Enumerable<AvaliacaoSocioEconomicaUpdateWithWhereUniqueWithoutDataInput>
    updateMany?: Enumerable<AvaliacaoSocioEconomicaUpdateManyWithWhereWithoutDataInput>
    deleteMany?: Enumerable<AvaliacaoSocioEconomicaScalarWhereInput>
  }

  export type MarcadorConsumoAlimentarUpdateManyWithoutDataInput = {
    create?: XOR<Enumerable<MarcadorConsumoAlimentarCreateWithoutDataInput>, Enumerable<MarcadorConsumoAlimentarUncheckedCreateWithoutDataInput>>
    connectOrCreate?: Enumerable<MarcadorConsumoAlimentarCreateOrConnectWithoutDataInput>
    upsert?: Enumerable<MarcadorConsumoAlimentarUpsertWithWhereUniqueWithoutDataInput>
    createMany?: MarcadorConsumoAlimentarCreateManyDataInputEnvelope
    set?: Enumerable<MarcadorConsumoAlimentarWhereUniqueInput>
    disconnect?: Enumerable<MarcadorConsumoAlimentarWhereUniqueInput>
    delete?: Enumerable<MarcadorConsumoAlimentarWhereUniqueInput>
    connect?: Enumerable<MarcadorConsumoAlimentarWhereUniqueInput>
    update?: Enumerable<MarcadorConsumoAlimentarUpdateWithWhereUniqueWithoutDataInput>
    updateMany?: Enumerable<MarcadorConsumoAlimentarUpdateManyWithWhereWithoutDataInput>
    deleteMany?: Enumerable<MarcadorConsumoAlimentarScalarWhereInput>
  }

  export type ExameUncheckedUpdateManyWithoutDataInput = {
    create?: XOR<Enumerable<ExameCreateWithoutDataInput>, Enumerable<ExameUncheckedCreateWithoutDataInput>>
    connectOrCreate?: Enumerable<ExameCreateOrConnectWithoutDataInput>
    upsert?: Enumerable<ExameUpsertWithWhereUniqueWithoutDataInput>
    createMany?: ExameCreateManyDataInputEnvelope
    set?: Enumerable<ExameWhereUniqueInput>
    disconnect?: Enumerable<ExameWhereUniqueInput>
    delete?: Enumerable<ExameWhereUniqueInput>
    connect?: Enumerable<ExameWhereUniqueInput>
    update?: Enumerable<ExameUpdateWithWhereUniqueWithoutDataInput>
    updateMany?: Enumerable<ExameUpdateManyWithWhereWithoutDataInput>
    deleteMany?: Enumerable<ExameScalarWhereInput>
  }

  export type AvaliacaoSocioEconomicaUncheckedUpdateManyWithoutDataInput = {
    create?: XOR<Enumerable<AvaliacaoSocioEconomicaCreateWithoutDataInput>, Enumerable<AvaliacaoSocioEconomicaUncheckedCreateWithoutDataInput>>
    connectOrCreate?: Enumerable<AvaliacaoSocioEconomicaCreateOrConnectWithoutDataInput>
    upsert?: Enumerable<AvaliacaoSocioEconomicaUpsertWithWhereUniqueWithoutDataInput>
    createMany?: AvaliacaoSocioEconomicaCreateManyDataInputEnvelope
    set?: Enumerable<AvaliacaoSocioEconomicaWhereUniqueInput>
    disconnect?: Enumerable<AvaliacaoSocioEconomicaWhereUniqueInput>
    delete?: Enumerable<AvaliacaoSocioEconomicaWhereUniqueInput>
    connect?: Enumerable<AvaliacaoSocioEconomicaWhereUniqueInput>
    update?: Enumerable<AvaliacaoSocioEconomicaUpdateWithWhereUniqueWithoutDataInput>
    updateMany?: Enumerable<AvaliacaoSocioEconomicaUpdateManyWithWhereWithoutDataInput>
    deleteMany?: Enumerable<AvaliacaoSocioEconomicaScalarWhereInput>
  }

  export type MarcadorConsumoAlimentarUncheckedUpdateManyWithoutDataInput = {
    create?: XOR<Enumerable<MarcadorConsumoAlimentarCreateWithoutDataInput>, Enumerable<MarcadorConsumoAlimentarUncheckedCreateWithoutDataInput>>
    connectOrCreate?: Enumerable<MarcadorConsumoAlimentarCreateOrConnectWithoutDataInput>
    upsert?: Enumerable<MarcadorConsumoAlimentarUpsertWithWhereUniqueWithoutDataInput>
    createMany?: MarcadorConsumoAlimentarCreateManyDataInputEnvelope
    set?: Enumerable<MarcadorConsumoAlimentarWhereUniqueInput>
    disconnect?: Enumerable<MarcadorConsumoAlimentarWhereUniqueInput>
    delete?: Enumerable<MarcadorConsumoAlimentarWhereUniqueInput>
    connect?: Enumerable<MarcadorConsumoAlimentarWhereUniqueInput>
    update?: Enumerable<MarcadorConsumoAlimentarUpdateWithWhereUniqueWithoutDataInput>
    updateMany?: Enumerable<MarcadorConsumoAlimentarUpdateManyWithWhereWithoutDataInput>
    deleteMany?: Enumerable<MarcadorConsumoAlimentarScalarWhereInput>
  }

  export type ExameCreateNestedManyWithoutPessoaInput = {
    create?: XOR<Enumerable<ExameCreateWithoutPessoaInput>, Enumerable<ExameUncheckedCreateWithoutPessoaInput>>
    connectOrCreate?: Enumerable<ExameCreateOrConnectWithoutPessoaInput>
    createMany?: ExameCreateManyPessoaInputEnvelope
    connect?: Enumerable<ExameWhereUniqueInput>
  }

  export type AvaliacaoSocioEconomicaCreateNestedManyWithoutPessoaInput = {
    create?: XOR<Enumerable<AvaliacaoSocioEconomicaCreateWithoutPessoaInput>, Enumerable<AvaliacaoSocioEconomicaUncheckedCreateWithoutPessoaInput>>
    connectOrCreate?: Enumerable<AvaliacaoSocioEconomicaCreateOrConnectWithoutPessoaInput>
    createMany?: AvaliacaoSocioEconomicaCreateManyPessoaInputEnvelope
    connect?: Enumerable<AvaliacaoSocioEconomicaWhereUniqueInput>
  }

  export type MarcadorConsumoAlimentarCreateNestedManyWithoutPessoaInput = {
    create?: XOR<Enumerable<MarcadorConsumoAlimentarCreateWithoutPessoaInput>, Enumerable<MarcadorConsumoAlimentarUncheckedCreateWithoutPessoaInput>>
    connectOrCreate?: Enumerable<MarcadorConsumoAlimentarCreateOrConnectWithoutPessoaInput>
    createMany?: MarcadorConsumoAlimentarCreateManyPessoaInputEnvelope
    connect?: Enumerable<MarcadorConsumoAlimentarWhereUniqueInput>
  }

  export type ExameUncheckedCreateNestedManyWithoutPessoaInput = {
    create?: XOR<Enumerable<ExameCreateWithoutPessoaInput>, Enumerable<ExameUncheckedCreateWithoutPessoaInput>>
    connectOrCreate?: Enumerable<ExameCreateOrConnectWithoutPessoaInput>
    createMany?: ExameCreateManyPessoaInputEnvelope
    connect?: Enumerable<ExameWhereUniqueInput>
  }

  export type AvaliacaoSocioEconomicaUncheckedCreateNestedManyWithoutPessoaInput = {
    create?: XOR<Enumerable<AvaliacaoSocioEconomicaCreateWithoutPessoaInput>, Enumerable<AvaliacaoSocioEconomicaUncheckedCreateWithoutPessoaInput>>
    connectOrCreate?: Enumerable<AvaliacaoSocioEconomicaCreateOrConnectWithoutPessoaInput>
    createMany?: AvaliacaoSocioEconomicaCreateManyPessoaInputEnvelope
    connect?: Enumerable<AvaliacaoSocioEconomicaWhereUniqueInput>
  }

  export type MarcadorConsumoAlimentarUncheckedCreateNestedManyWithoutPessoaInput = {
    create?: XOR<Enumerable<MarcadorConsumoAlimentarCreateWithoutPessoaInput>, Enumerable<MarcadorConsumoAlimentarUncheckedCreateWithoutPessoaInput>>
    connectOrCreate?: Enumerable<MarcadorConsumoAlimentarCreateOrConnectWithoutPessoaInput>
    createMany?: MarcadorConsumoAlimentarCreateManyPessoaInputEnvelope
    connect?: Enumerable<MarcadorConsumoAlimentarWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumGeneroFieldUpdateOperationsInput = {
    set?: Genero
  }

  export type EnumEtniaFieldUpdateOperationsInput = {
    set?: Etnia
  }

  export type NullableEnumEtniaFieldUpdateOperationsInput = {
    set?: Etnia | null
  }

  export type ExameUpdateManyWithoutPessoaInput = {
    create?: XOR<Enumerable<ExameCreateWithoutPessoaInput>, Enumerable<ExameUncheckedCreateWithoutPessoaInput>>
    connectOrCreate?: Enumerable<ExameCreateOrConnectWithoutPessoaInput>
    upsert?: Enumerable<ExameUpsertWithWhereUniqueWithoutPessoaInput>
    createMany?: ExameCreateManyPessoaInputEnvelope
    set?: Enumerable<ExameWhereUniqueInput>
    disconnect?: Enumerable<ExameWhereUniqueInput>
    delete?: Enumerable<ExameWhereUniqueInput>
    connect?: Enumerable<ExameWhereUniqueInput>
    update?: Enumerable<ExameUpdateWithWhereUniqueWithoutPessoaInput>
    updateMany?: Enumerable<ExameUpdateManyWithWhereWithoutPessoaInput>
    deleteMany?: Enumerable<ExameScalarWhereInput>
  }

  export type AvaliacaoSocioEconomicaUpdateManyWithoutPessoaInput = {
    create?: XOR<Enumerable<AvaliacaoSocioEconomicaCreateWithoutPessoaInput>, Enumerable<AvaliacaoSocioEconomicaUncheckedCreateWithoutPessoaInput>>
    connectOrCreate?: Enumerable<AvaliacaoSocioEconomicaCreateOrConnectWithoutPessoaInput>
    upsert?: Enumerable<AvaliacaoSocioEconomicaUpsertWithWhereUniqueWithoutPessoaInput>
    createMany?: AvaliacaoSocioEconomicaCreateManyPessoaInputEnvelope
    set?: Enumerable<AvaliacaoSocioEconomicaWhereUniqueInput>
    disconnect?: Enumerable<AvaliacaoSocioEconomicaWhereUniqueInput>
    delete?: Enumerable<AvaliacaoSocioEconomicaWhereUniqueInput>
    connect?: Enumerable<AvaliacaoSocioEconomicaWhereUniqueInput>
    update?: Enumerable<AvaliacaoSocioEconomicaUpdateWithWhereUniqueWithoutPessoaInput>
    updateMany?: Enumerable<AvaliacaoSocioEconomicaUpdateManyWithWhereWithoutPessoaInput>
    deleteMany?: Enumerable<AvaliacaoSocioEconomicaScalarWhereInput>
  }

  export type MarcadorConsumoAlimentarUpdateManyWithoutPessoaInput = {
    create?: XOR<Enumerable<MarcadorConsumoAlimentarCreateWithoutPessoaInput>, Enumerable<MarcadorConsumoAlimentarUncheckedCreateWithoutPessoaInput>>
    connectOrCreate?: Enumerable<MarcadorConsumoAlimentarCreateOrConnectWithoutPessoaInput>
    upsert?: Enumerable<MarcadorConsumoAlimentarUpsertWithWhereUniqueWithoutPessoaInput>
    createMany?: MarcadorConsumoAlimentarCreateManyPessoaInputEnvelope
    set?: Enumerable<MarcadorConsumoAlimentarWhereUniqueInput>
    disconnect?: Enumerable<MarcadorConsumoAlimentarWhereUniqueInput>
    delete?: Enumerable<MarcadorConsumoAlimentarWhereUniqueInput>
    connect?: Enumerable<MarcadorConsumoAlimentarWhereUniqueInput>
    update?: Enumerable<MarcadorConsumoAlimentarUpdateWithWhereUniqueWithoutPessoaInput>
    updateMany?: Enumerable<MarcadorConsumoAlimentarUpdateManyWithWhereWithoutPessoaInput>
    deleteMany?: Enumerable<MarcadorConsumoAlimentarScalarWhereInput>
  }

  export type ExameUncheckedUpdateManyWithoutPessoaInput = {
    create?: XOR<Enumerable<ExameCreateWithoutPessoaInput>, Enumerable<ExameUncheckedCreateWithoutPessoaInput>>
    connectOrCreate?: Enumerable<ExameCreateOrConnectWithoutPessoaInput>
    upsert?: Enumerable<ExameUpsertWithWhereUniqueWithoutPessoaInput>
    createMany?: ExameCreateManyPessoaInputEnvelope
    set?: Enumerable<ExameWhereUniqueInput>
    disconnect?: Enumerable<ExameWhereUniqueInput>
    delete?: Enumerable<ExameWhereUniqueInput>
    connect?: Enumerable<ExameWhereUniqueInput>
    update?: Enumerable<ExameUpdateWithWhereUniqueWithoutPessoaInput>
    updateMany?: Enumerable<ExameUpdateManyWithWhereWithoutPessoaInput>
    deleteMany?: Enumerable<ExameScalarWhereInput>
  }

  export type AvaliacaoSocioEconomicaUncheckedUpdateManyWithoutPessoaInput = {
    create?: XOR<Enumerable<AvaliacaoSocioEconomicaCreateWithoutPessoaInput>, Enumerable<AvaliacaoSocioEconomicaUncheckedCreateWithoutPessoaInput>>
    connectOrCreate?: Enumerable<AvaliacaoSocioEconomicaCreateOrConnectWithoutPessoaInput>
    upsert?: Enumerable<AvaliacaoSocioEconomicaUpsertWithWhereUniqueWithoutPessoaInput>
    createMany?: AvaliacaoSocioEconomicaCreateManyPessoaInputEnvelope
    set?: Enumerable<AvaliacaoSocioEconomicaWhereUniqueInput>
    disconnect?: Enumerable<AvaliacaoSocioEconomicaWhereUniqueInput>
    delete?: Enumerable<AvaliacaoSocioEconomicaWhereUniqueInput>
    connect?: Enumerable<AvaliacaoSocioEconomicaWhereUniqueInput>
    update?: Enumerable<AvaliacaoSocioEconomicaUpdateWithWhereUniqueWithoutPessoaInput>
    updateMany?: Enumerable<AvaliacaoSocioEconomicaUpdateManyWithWhereWithoutPessoaInput>
    deleteMany?: Enumerable<AvaliacaoSocioEconomicaScalarWhereInput>
  }

  export type MarcadorConsumoAlimentarUncheckedUpdateManyWithoutPessoaInput = {
    create?: XOR<Enumerable<MarcadorConsumoAlimentarCreateWithoutPessoaInput>, Enumerable<MarcadorConsumoAlimentarUncheckedCreateWithoutPessoaInput>>
    connectOrCreate?: Enumerable<MarcadorConsumoAlimentarCreateOrConnectWithoutPessoaInput>
    upsert?: Enumerable<MarcadorConsumoAlimentarUpsertWithWhereUniqueWithoutPessoaInput>
    createMany?: MarcadorConsumoAlimentarCreateManyPessoaInputEnvelope
    set?: Enumerable<MarcadorConsumoAlimentarWhereUniqueInput>
    disconnect?: Enumerable<MarcadorConsumoAlimentarWhereUniqueInput>
    delete?: Enumerable<MarcadorConsumoAlimentarWhereUniqueInput>
    connect?: Enumerable<MarcadorConsumoAlimentarWhereUniqueInput>
    update?: Enumerable<MarcadorConsumoAlimentarUpdateWithWhereUniqueWithoutPessoaInput>
    updateMany?: Enumerable<MarcadorConsumoAlimentarUpdateManyWithWhereWithoutPessoaInput>
    deleteMany?: Enumerable<MarcadorConsumoAlimentarScalarWhereInput>
  }

  export type ExameCreateNestedManyWithoutLocalInput = {
    create?: XOR<Enumerable<ExameCreateWithoutLocalInput>, Enumerable<ExameUncheckedCreateWithoutLocalInput>>
    connectOrCreate?: Enumerable<ExameCreateOrConnectWithoutLocalInput>
    createMany?: ExameCreateManyLocalInputEnvelope
    connect?: Enumerable<ExameWhereUniqueInput>
  }

  export type AvaliacaoSocioEconomicaCreateNestedManyWithoutLocalInput = {
    create?: XOR<Enumerable<AvaliacaoSocioEconomicaCreateWithoutLocalInput>, Enumerable<AvaliacaoSocioEconomicaUncheckedCreateWithoutLocalInput>>
    connectOrCreate?: Enumerable<AvaliacaoSocioEconomicaCreateOrConnectWithoutLocalInput>
    createMany?: AvaliacaoSocioEconomicaCreateManyLocalInputEnvelope
    connect?: Enumerable<AvaliacaoSocioEconomicaWhereUniqueInput>
  }

  export type MarcadorConsumoAlimentarCreateNestedManyWithoutLocalInput = {
    create?: XOR<Enumerable<MarcadorConsumoAlimentarCreateWithoutLocalInput>, Enumerable<MarcadorConsumoAlimentarUncheckedCreateWithoutLocalInput>>
    connectOrCreate?: Enumerable<MarcadorConsumoAlimentarCreateOrConnectWithoutLocalInput>
    createMany?: MarcadorConsumoAlimentarCreateManyLocalInputEnvelope
    connect?: Enumerable<MarcadorConsumoAlimentarWhereUniqueInput>
  }

  export type ExameUncheckedCreateNestedManyWithoutLocalInput = {
    create?: XOR<Enumerable<ExameCreateWithoutLocalInput>, Enumerable<ExameUncheckedCreateWithoutLocalInput>>
    connectOrCreate?: Enumerable<ExameCreateOrConnectWithoutLocalInput>
    createMany?: ExameCreateManyLocalInputEnvelope
    connect?: Enumerable<ExameWhereUniqueInput>
  }

  export type AvaliacaoSocioEconomicaUncheckedCreateNestedManyWithoutLocalInput = {
    create?: XOR<Enumerable<AvaliacaoSocioEconomicaCreateWithoutLocalInput>, Enumerable<AvaliacaoSocioEconomicaUncheckedCreateWithoutLocalInput>>
    connectOrCreate?: Enumerable<AvaliacaoSocioEconomicaCreateOrConnectWithoutLocalInput>
    createMany?: AvaliacaoSocioEconomicaCreateManyLocalInputEnvelope
    connect?: Enumerable<AvaliacaoSocioEconomicaWhereUniqueInput>
  }

  export type MarcadorConsumoAlimentarUncheckedCreateNestedManyWithoutLocalInput = {
    create?: XOR<Enumerable<MarcadorConsumoAlimentarCreateWithoutLocalInput>, Enumerable<MarcadorConsumoAlimentarUncheckedCreateWithoutLocalInput>>
    connectOrCreate?: Enumerable<MarcadorConsumoAlimentarCreateOrConnectWithoutLocalInput>
    createMany?: MarcadorConsumoAlimentarCreateManyLocalInputEnvelope
    connect?: Enumerable<MarcadorConsumoAlimentarWhereUniqueInput>
  }

  export type ExameUpdateManyWithoutLocalInput = {
    create?: XOR<Enumerable<ExameCreateWithoutLocalInput>, Enumerable<ExameUncheckedCreateWithoutLocalInput>>
    connectOrCreate?: Enumerable<ExameCreateOrConnectWithoutLocalInput>
    upsert?: Enumerable<ExameUpsertWithWhereUniqueWithoutLocalInput>
    createMany?: ExameCreateManyLocalInputEnvelope
    set?: Enumerable<ExameWhereUniqueInput>
    disconnect?: Enumerable<ExameWhereUniqueInput>
    delete?: Enumerable<ExameWhereUniqueInput>
    connect?: Enumerable<ExameWhereUniqueInput>
    update?: Enumerable<ExameUpdateWithWhereUniqueWithoutLocalInput>
    updateMany?: Enumerable<ExameUpdateManyWithWhereWithoutLocalInput>
    deleteMany?: Enumerable<ExameScalarWhereInput>
  }

  export type AvaliacaoSocioEconomicaUpdateManyWithoutLocalInput = {
    create?: XOR<Enumerable<AvaliacaoSocioEconomicaCreateWithoutLocalInput>, Enumerable<AvaliacaoSocioEconomicaUncheckedCreateWithoutLocalInput>>
    connectOrCreate?: Enumerable<AvaliacaoSocioEconomicaCreateOrConnectWithoutLocalInput>
    upsert?: Enumerable<AvaliacaoSocioEconomicaUpsertWithWhereUniqueWithoutLocalInput>
    createMany?: AvaliacaoSocioEconomicaCreateManyLocalInputEnvelope
    set?: Enumerable<AvaliacaoSocioEconomicaWhereUniqueInput>
    disconnect?: Enumerable<AvaliacaoSocioEconomicaWhereUniqueInput>
    delete?: Enumerable<AvaliacaoSocioEconomicaWhereUniqueInput>
    connect?: Enumerable<AvaliacaoSocioEconomicaWhereUniqueInput>
    update?: Enumerable<AvaliacaoSocioEconomicaUpdateWithWhereUniqueWithoutLocalInput>
    updateMany?: Enumerable<AvaliacaoSocioEconomicaUpdateManyWithWhereWithoutLocalInput>
    deleteMany?: Enumerable<AvaliacaoSocioEconomicaScalarWhereInput>
  }

  export type MarcadorConsumoAlimentarUpdateManyWithoutLocalInput = {
    create?: XOR<Enumerable<MarcadorConsumoAlimentarCreateWithoutLocalInput>, Enumerable<MarcadorConsumoAlimentarUncheckedCreateWithoutLocalInput>>
    connectOrCreate?: Enumerable<MarcadorConsumoAlimentarCreateOrConnectWithoutLocalInput>
    upsert?: Enumerable<MarcadorConsumoAlimentarUpsertWithWhereUniqueWithoutLocalInput>
    createMany?: MarcadorConsumoAlimentarCreateManyLocalInputEnvelope
    set?: Enumerable<MarcadorConsumoAlimentarWhereUniqueInput>
    disconnect?: Enumerable<MarcadorConsumoAlimentarWhereUniqueInput>
    delete?: Enumerable<MarcadorConsumoAlimentarWhereUniqueInput>
    connect?: Enumerable<MarcadorConsumoAlimentarWhereUniqueInput>
    update?: Enumerable<MarcadorConsumoAlimentarUpdateWithWhereUniqueWithoutLocalInput>
    updateMany?: Enumerable<MarcadorConsumoAlimentarUpdateManyWithWhereWithoutLocalInput>
    deleteMany?: Enumerable<MarcadorConsumoAlimentarScalarWhereInput>
  }

  export type ExameUncheckedUpdateManyWithoutLocalInput = {
    create?: XOR<Enumerable<ExameCreateWithoutLocalInput>, Enumerable<ExameUncheckedCreateWithoutLocalInput>>
    connectOrCreate?: Enumerable<ExameCreateOrConnectWithoutLocalInput>
    upsert?: Enumerable<ExameUpsertWithWhereUniqueWithoutLocalInput>
    createMany?: ExameCreateManyLocalInputEnvelope
    set?: Enumerable<ExameWhereUniqueInput>
    disconnect?: Enumerable<ExameWhereUniqueInput>
    delete?: Enumerable<ExameWhereUniqueInput>
    connect?: Enumerable<ExameWhereUniqueInput>
    update?: Enumerable<ExameUpdateWithWhereUniqueWithoutLocalInput>
    updateMany?: Enumerable<ExameUpdateManyWithWhereWithoutLocalInput>
    deleteMany?: Enumerable<ExameScalarWhereInput>
  }

  export type AvaliacaoSocioEconomicaUncheckedUpdateManyWithoutLocalInput = {
    create?: XOR<Enumerable<AvaliacaoSocioEconomicaCreateWithoutLocalInput>, Enumerable<AvaliacaoSocioEconomicaUncheckedCreateWithoutLocalInput>>
    connectOrCreate?: Enumerable<AvaliacaoSocioEconomicaCreateOrConnectWithoutLocalInput>
    upsert?: Enumerable<AvaliacaoSocioEconomicaUpsertWithWhereUniqueWithoutLocalInput>
    createMany?: AvaliacaoSocioEconomicaCreateManyLocalInputEnvelope
    set?: Enumerable<AvaliacaoSocioEconomicaWhereUniqueInput>
    disconnect?: Enumerable<AvaliacaoSocioEconomicaWhereUniqueInput>
    delete?: Enumerable<AvaliacaoSocioEconomicaWhereUniqueInput>
    connect?: Enumerable<AvaliacaoSocioEconomicaWhereUniqueInput>
    update?: Enumerable<AvaliacaoSocioEconomicaUpdateWithWhereUniqueWithoutLocalInput>
    updateMany?: Enumerable<AvaliacaoSocioEconomicaUpdateManyWithWhereWithoutLocalInput>
    deleteMany?: Enumerable<AvaliacaoSocioEconomicaScalarWhereInput>
  }

  export type MarcadorConsumoAlimentarUncheckedUpdateManyWithoutLocalInput = {
    create?: XOR<Enumerable<MarcadorConsumoAlimentarCreateWithoutLocalInput>, Enumerable<MarcadorConsumoAlimentarUncheckedCreateWithoutLocalInput>>
    connectOrCreate?: Enumerable<MarcadorConsumoAlimentarCreateOrConnectWithoutLocalInput>
    upsert?: Enumerable<MarcadorConsumoAlimentarUpsertWithWhereUniqueWithoutLocalInput>
    createMany?: MarcadorConsumoAlimentarCreateManyLocalInputEnvelope
    set?: Enumerable<MarcadorConsumoAlimentarWhereUniqueInput>
    disconnect?: Enumerable<MarcadorConsumoAlimentarWhereUniqueInput>
    delete?: Enumerable<MarcadorConsumoAlimentarWhereUniqueInput>
    connect?: Enumerable<MarcadorConsumoAlimentarWhereUniqueInput>
    update?: Enumerable<MarcadorConsumoAlimentarUpdateWithWhereUniqueWithoutLocalInput>
    updateMany?: Enumerable<MarcadorConsumoAlimentarUpdateManyWithWhereWithoutLocalInput>
    deleteMany?: Enumerable<MarcadorConsumoAlimentarScalarWhereInput>
  }

  export type ExameCreateNestedOneWithoutCondicaoPeriodontalInput = {
    create?: XOR<ExameCreateWithoutCondicaoPeriodontalInput, ExameUncheckedCreateWithoutCondicaoPeriodontalInput>
    connectOrCreate?: ExameCreateOrConnectWithoutCondicaoPeriodontalInput
    connect?: ExameWhereUniqueInput
  }

  export type ExameUncheckedCreateNestedOneWithoutCondicaoPeriodontalInput = {
    create?: XOR<ExameCreateWithoutCondicaoPeriodontalInput, ExameUncheckedCreateWithoutCondicaoPeriodontalInput>
    connectOrCreate?: ExameCreateOrConnectWithoutCondicaoPeriodontalInput
    connect?: ExameWhereUniqueInput
  }

  export type ExameUpdateOneWithoutCondicaoPeriodontalInput = {
    create?: XOR<ExameCreateWithoutCondicaoPeriodontalInput, ExameUncheckedCreateWithoutCondicaoPeriodontalInput>
    connectOrCreate?: ExameCreateOrConnectWithoutCondicaoPeriodontalInput
    upsert?: ExameUpsertWithoutCondicaoPeriodontalInput
    disconnect?: boolean
    delete?: boolean
    connect?: ExameWhereUniqueInput
    update?: XOR<ExameUpdateWithoutCondicaoPeriodontalInput, ExameUncheckedUpdateWithoutCondicaoPeriodontalInput>
  }

  export type ExameUncheckedUpdateOneWithoutCondicaoPeriodontalInput = {
    create?: XOR<ExameCreateWithoutCondicaoPeriodontalInput, ExameUncheckedCreateWithoutCondicaoPeriodontalInput>
    connectOrCreate?: ExameCreateOrConnectWithoutCondicaoPeriodontalInput
    upsert?: ExameUpsertWithoutCondicaoPeriodontalInput
    disconnect?: boolean
    delete?: boolean
    connect?: ExameWhereUniqueInput
    update?: XOR<ExameUpdateWithoutCondicaoPeriodontalInput, ExameUncheckedUpdateWithoutCondicaoPeriodontalInput>
  }

  export type DataCreateNestedOneWithoutExamesInput = {
    create?: XOR<DataCreateWithoutExamesInput, DataUncheckedCreateWithoutExamesInput>
    connectOrCreate?: DataCreateOrConnectWithoutExamesInput
    connect?: DataWhereUniqueInput
  }

  export type PessoaCreateNestedOneWithoutExamesInput = {
    create?: XOR<PessoaCreateWithoutExamesInput, PessoaUncheckedCreateWithoutExamesInput>
    connectOrCreate?: PessoaCreateOrConnectWithoutExamesInput
    connect?: PessoaWhereUniqueInput
  }

  export type CondicaoPeriodontalCreateNestedOneWithoutExameInput = {
    create?: XOR<CondicaoPeriodontalCreateWithoutExameInput, CondicaoPeriodontalUncheckedCreateWithoutExameInput>
    connectOrCreate?: CondicaoPeriodontalCreateOrConnectWithoutExameInput
    connect?: CondicaoPeriodontalWhereUniqueInput
  }

  export type LocalCreateNestedOneWithoutExamesInput = {
    create?: XOR<LocalCreateWithoutExamesInput, LocalUncheckedCreateWithoutExamesInput>
    connectOrCreate?: LocalCreateOrConnectWithoutExamesInput
    connect?: LocalWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutExamesInput = {
    create?: XOR<UsuarioCreateWithoutExamesInput, UsuarioUncheckedCreateWithoutExamesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutExamesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type TraumatismoDentarioCreateNestedOneWithoutExameInput = {
    create?: XOR<TraumatismoDentarioCreateWithoutExameInput, TraumatismoDentarioUncheckedCreateWithoutExameInput>
    connectOrCreate?: TraumatismoDentarioCreateOrConnectWithoutExameInput
    connect?: TraumatismoDentarioWhereUniqueInput
  }

  export type MarcadorConsumoAlimentarCreateNestedOneWithoutExameInput = {
    create?: XOR<MarcadorConsumoAlimentarCreateWithoutExameInput, MarcadorConsumoAlimentarUncheckedCreateWithoutExameInput>
    connectOrCreate?: MarcadorConsumoAlimentarCreateOrConnectWithoutExameInput
    connect?: MarcadorConsumoAlimentarWhereUniqueInput
  }

  export type DenteCreateNestedManyWithoutExameInput = {
    create?: XOR<Enumerable<DenteCreateWithoutExameInput>, Enumerable<DenteUncheckedCreateWithoutExameInput>>
    connectOrCreate?: Enumerable<DenteCreateOrConnectWithoutExameInput>
    createMany?: DenteCreateManyExameInputEnvelope
    connect?: Enumerable<DenteWhereUniqueInput>
  }

  export type SohoCreateNestedOneWithoutExameInput = {
    create?: XOR<SohoCreateWithoutExameInput, SohoUncheckedCreateWithoutExameInput>
    connectOrCreate?: SohoCreateOrConnectWithoutExameInput
    connect?: SohoWhereUniqueInput
  }

  export type CPQCreateNestedOneWithoutExameInput = {
    create?: XOR<CPQCreateWithoutExameInput, CPQUncheckedCreateWithoutExameInput>
    connectOrCreate?: CPQCreateOrConnectWithoutExameInput
    connect?: CPQWhereUniqueInput
  }

  export type DenteUncheckedCreateNestedManyWithoutExameInput = {
    create?: XOR<Enumerable<DenteCreateWithoutExameInput>, Enumerable<DenteUncheckedCreateWithoutExameInput>>
    connectOrCreate?: Enumerable<DenteCreateOrConnectWithoutExameInput>
    createMany?: DenteCreateManyExameInputEnvelope
    connect?: Enumerable<DenteWhereUniqueInput>
  }

  export type SohoUncheckedCreateNestedOneWithoutExameInput = {
    create?: XOR<SohoCreateWithoutExameInput, SohoUncheckedCreateWithoutExameInput>
    connectOrCreate?: SohoCreateOrConnectWithoutExameInput
    connect?: SohoWhereUniqueInput
  }

  export type CPQUncheckedCreateNestedOneWithoutExameInput = {
    create?: XOR<CPQCreateWithoutExameInput, CPQUncheckedCreateWithoutExameInput>
    connectOrCreate?: CPQCreateOrConnectWithoutExameInput
    connect?: CPQWhereUniqueInput
  }

  export type DataUpdateOneRequiredWithoutExamesInput = {
    create?: XOR<DataCreateWithoutExamesInput, DataUncheckedCreateWithoutExamesInput>
    connectOrCreate?: DataCreateOrConnectWithoutExamesInput
    upsert?: DataUpsertWithoutExamesInput
    connect?: DataWhereUniqueInput
    update?: XOR<DataUpdateWithoutExamesInput, DataUncheckedUpdateWithoutExamesInput>
  }

  export type PessoaUpdateOneRequiredWithoutExamesInput = {
    create?: XOR<PessoaCreateWithoutExamesInput, PessoaUncheckedCreateWithoutExamesInput>
    connectOrCreate?: PessoaCreateOrConnectWithoutExamesInput
    upsert?: PessoaUpsertWithoutExamesInput
    connect?: PessoaWhereUniqueInput
    update?: XOR<PessoaUpdateWithoutExamesInput, PessoaUncheckedUpdateWithoutExamesInput>
  }

  export type CondicaoPeriodontalUpdateOneWithoutExameInput = {
    create?: XOR<CondicaoPeriodontalCreateWithoutExameInput, CondicaoPeriodontalUncheckedCreateWithoutExameInput>
    connectOrCreate?: CondicaoPeriodontalCreateOrConnectWithoutExameInput
    upsert?: CondicaoPeriodontalUpsertWithoutExameInput
    disconnect?: boolean
    delete?: boolean
    connect?: CondicaoPeriodontalWhereUniqueInput
    update?: XOR<CondicaoPeriodontalUpdateWithoutExameInput, CondicaoPeriodontalUncheckedUpdateWithoutExameInput>
  }

  export type LocalUpdateOneRequiredWithoutExamesInput = {
    create?: XOR<LocalCreateWithoutExamesInput, LocalUncheckedCreateWithoutExamesInput>
    connectOrCreate?: LocalCreateOrConnectWithoutExamesInput
    upsert?: LocalUpsertWithoutExamesInput
    connect?: LocalWhereUniqueInput
    update?: XOR<LocalUpdateWithoutExamesInput, LocalUncheckedUpdateWithoutExamesInput>
  }

  export type UsuarioUpdateOneRequiredWithoutExamesInput = {
    create?: XOR<UsuarioCreateWithoutExamesInput, UsuarioUncheckedCreateWithoutExamesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutExamesInput
    upsert?: UsuarioUpsertWithoutExamesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<UsuarioUpdateWithoutExamesInput, UsuarioUncheckedUpdateWithoutExamesInput>
  }

  export type TraumatismoDentarioUpdateOneWithoutExameInput = {
    create?: XOR<TraumatismoDentarioCreateWithoutExameInput, TraumatismoDentarioUncheckedCreateWithoutExameInput>
    connectOrCreate?: TraumatismoDentarioCreateOrConnectWithoutExameInput
    upsert?: TraumatismoDentarioUpsertWithoutExameInput
    disconnect?: boolean
    delete?: boolean
    connect?: TraumatismoDentarioWhereUniqueInput
    update?: XOR<TraumatismoDentarioUpdateWithoutExameInput, TraumatismoDentarioUncheckedUpdateWithoutExameInput>
  }

  export type MarcadorConsumoAlimentarUpdateOneRequiredWithoutExameInput = {
    create?: XOR<MarcadorConsumoAlimentarCreateWithoutExameInput, MarcadorConsumoAlimentarUncheckedCreateWithoutExameInput>
    connectOrCreate?: MarcadorConsumoAlimentarCreateOrConnectWithoutExameInput
    upsert?: MarcadorConsumoAlimentarUpsertWithoutExameInput
    connect?: MarcadorConsumoAlimentarWhereUniqueInput
    update?: XOR<MarcadorConsumoAlimentarUpdateWithoutExameInput, MarcadorConsumoAlimentarUncheckedUpdateWithoutExameInput>
  }

  export type EnumFluoroseDentariaFieldUpdateOperationsInput = {
    set?: FluoroseDentaria
  }

  export type EnumRelacaoMolarAnteroPosteriorFieldUpdateOperationsInput = {
    set?: RelacaoMolarAnteroPosterior
  }

  export type DenteUpdateManyWithoutExameInput = {
    create?: XOR<Enumerable<DenteCreateWithoutExameInput>, Enumerable<DenteUncheckedCreateWithoutExameInput>>
    connectOrCreate?: Enumerable<DenteCreateOrConnectWithoutExameInput>
    upsert?: Enumerable<DenteUpsertWithWhereUniqueWithoutExameInput>
    createMany?: DenteCreateManyExameInputEnvelope
    set?: Enumerable<DenteWhereUniqueInput>
    disconnect?: Enumerable<DenteWhereUniqueInput>
    delete?: Enumerable<DenteWhereUniqueInput>
    connect?: Enumerable<DenteWhereUniqueInput>
    update?: Enumerable<DenteUpdateWithWhereUniqueWithoutExameInput>
    updateMany?: Enumerable<DenteUpdateManyWithWhereWithoutExameInput>
    deleteMany?: Enumerable<DenteScalarWhereInput>
  }

  export type SohoUpdateOneWithoutExameInput = {
    create?: XOR<SohoCreateWithoutExameInput, SohoUncheckedCreateWithoutExameInput>
    connectOrCreate?: SohoCreateOrConnectWithoutExameInput
    upsert?: SohoUpsertWithoutExameInput
    disconnect?: boolean
    delete?: boolean
    connect?: SohoWhereUniqueInput
    update?: XOR<SohoUpdateWithoutExameInput, SohoUncheckedUpdateWithoutExameInput>
  }

  export type CPQUpdateOneWithoutExameInput = {
    create?: XOR<CPQCreateWithoutExameInput, CPQUncheckedCreateWithoutExameInput>
    connectOrCreate?: CPQCreateOrConnectWithoutExameInput
    upsert?: CPQUpsertWithoutExameInput
    disconnect?: boolean
    delete?: boolean
    connect?: CPQWhereUniqueInput
    update?: XOR<CPQUpdateWithoutExameInput, CPQUncheckedUpdateWithoutExameInput>
  }

  export type DenteUncheckedUpdateManyWithoutExameInput = {
    create?: XOR<Enumerable<DenteCreateWithoutExameInput>, Enumerable<DenteUncheckedCreateWithoutExameInput>>
    connectOrCreate?: Enumerable<DenteCreateOrConnectWithoutExameInput>
    upsert?: Enumerable<DenteUpsertWithWhereUniqueWithoutExameInput>
    createMany?: DenteCreateManyExameInputEnvelope
    set?: Enumerable<DenteWhereUniqueInput>
    disconnect?: Enumerable<DenteWhereUniqueInput>
    delete?: Enumerable<DenteWhereUniqueInput>
    connect?: Enumerable<DenteWhereUniqueInput>
    update?: Enumerable<DenteUpdateWithWhereUniqueWithoutExameInput>
    updateMany?: Enumerable<DenteUpdateManyWithWhereWithoutExameInput>
    deleteMany?: Enumerable<DenteScalarWhereInput>
  }

  export type SohoUncheckedUpdateOneWithoutExameInput = {
    create?: XOR<SohoCreateWithoutExameInput, SohoUncheckedCreateWithoutExameInput>
    connectOrCreate?: SohoCreateOrConnectWithoutExameInput
    upsert?: SohoUpsertWithoutExameInput
    disconnect?: boolean
    delete?: boolean
    connect?: SohoWhereUniqueInput
    update?: XOR<SohoUpdateWithoutExameInput, SohoUncheckedUpdateWithoutExameInput>
  }

  export type CPQUncheckedUpdateOneWithoutExameInput = {
    create?: XOR<CPQCreateWithoutExameInput, CPQUncheckedCreateWithoutExameInput>
    connectOrCreate?: CPQCreateOrConnectWithoutExameInput
    upsert?: CPQUpsertWithoutExameInput
    disconnect?: boolean
    delete?: boolean
    connect?: CPQWhereUniqueInput
    update?: XOR<CPQUpdateWithoutExameInput, CPQUncheckedUpdateWithoutExameInput>
  }

  export type ExameCreateNestedOneWithoutDentesInput = {
    create?: XOR<ExameCreateWithoutDentesInput, ExameUncheckedCreateWithoutDentesInput>
    connectOrCreate?: ExameCreateOrConnectWithoutDentesInput
    connect?: ExameWhereUniqueInput
  }

  export type ExameUpdateOneRequiredWithoutDentesInput = {
    create?: XOR<ExameCreateWithoutDentesInput, ExameUncheckedCreateWithoutDentesInput>
    connectOrCreate?: ExameCreateOrConnectWithoutDentesInput
    upsert?: ExameUpsertWithoutDentesInput
    connect?: ExameWhereUniqueInput
    update?: XOR<ExameUpdateWithoutDentesInput, ExameUncheckedUpdateWithoutDentesInput>
  }

  export type NullableEnumMotivoRemovidoFieldUpdateOperationsInput = {
    set?: MotivoRemovido | null
  }

  export type ExameCreateNestedOneWithoutTraumatismoDentarioInput = {
    create?: XOR<ExameCreateWithoutTraumatismoDentarioInput, ExameUncheckedCreateWithoutTraumatismoDentarioInput>
    connectOrCreate?: ExameCreateOrConnectWithoutTraumatismoDentarioInput
    connect?: ExameWhereUniqueInput
  }

  export type ExameUncheckedCreateNestedOneWithoutTraumatismoDentarioInput = {
    create?: XOR<ExameCreateWithoutTraumatismoDentarioInput, ExameUncheckedCreateWithoutTraumatismoDentarioInput>
    connectOrCreate?: ExameCreateOrConnectWithoutTraumatismoDentarioInput
    connect?: ExameWhereUniqueInput
  }

  export type ExameUpdateOneWithoutTraumatismoDentarioInput = {
    create?: XOR<ExameCreateWithoutTraumatismoDentarioInput, ExameUncheckedCreateWithoutTraumatismoDentarioInput>
    connectOrCreate?: ExameCreateOrConnectWithoutTraumatismoDentarioInput
    upsert?: ExameUpsertWithoutTraumatismoDentarioInput
    disconnect?: boolean
    delete?: boolean
    connect?: ExameWhereUniqueInput
    update?: XOR<ExameUpdateWithoutTraumatismoDentarioInput, ExameUncheckedUpdateWithoutTraumatismoDentarioInput>
  }

  export type EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput = {
    set?: RespostasTraumatismoDentario
  }

  export type ExameUncheckedUpdateOneWithoutTraumatismoDentarioInput = {
    create?: XOR<ExameCreateWithoutTraumatismoDentarioInput, ExameUncheckedCreateWithoutTraumatismoDentarioInput>
    connectOrCreate?: ExameCreateOrConnectWithoutTraumatismoDentarioInput
    upsert?: ExameUpsertWithoutTraumatismoDentarioInput
    disconnect?: boolean
    delete?: boolean
    connect?: ExameWhereUniqueInput
    update?: XOR<ExameUpdateWithoutTraumatismoDentarioInput, ExameUncheckedUpdateWithoutTraumatismoDentarioInput>
  }

  export type DataCreateNestedOneWithoutAvaliacaoSocioEconomicaInput = {
    create?: XOR<DataCreateWithoutAvaliacaoSocioEconomicaInput, DataUncheckedCreateWithoutAvaliacaoSocioEconomicaInput>
    connectOrCreate?: DataCreateOrConnectWithoutAvaliacaoSocioEconomicaInput
    connect?: DataWhereUniqueInput
  }

  export type PessoaCreateNestedOneWithoutAvaliacaoSocioEconomicaInput = {
    create?: XOR<PessoaCreateWithoutAvaliacaoSocioEconomicaInput, PessoaUncheckedCreateWithoutAvaliacaoSocioEconomicaInput>
    connectOrCreate?: PessoaCreateOrConnectWithoutAvaliacaoSocioEconomicaInput
    connect?: PessoaWhereUniqueInput
  }

  export type LocalCreateNestedOneWithoutAvaliacaoSocioEconomicaInput = {
    create?: XOR<LocalCreateWithoutAvaliacaoSocioEconomicaInput, LocalUncheckedCreateWithoutAvaliacaoSocioEconomicaInput>
    connectOrCreate?: LocalCreateOrConnectWithoutAvaliacaoSocioEconomicaInput
    connect?: LocalWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutAvaliacaoSocioEconomicaInput = {
    create?: XOR<UsuarioCreateWithoutAvaliacaoSocioEconomicaInput, UsuarioUncheckedCreateWithoutAvaliacaoSocioEconomicaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAvaliacaoSocioEconomicaInput
    connect?: UsuarioWhereUniqueInput
  }

  export type DataUpdateOneRequiredWithoutAvaliacaoSocioEconomicaInput = {
    create?: XOR<DataCreateWithoutAvaliacaoSocioEconomicaInput, DataUncheckedCreateWithoutAvaliacaoSocioEconomicaInput>
    connectOrCreate?: DataCreateOrConnectWithoutAvaliacaoSocioEconomicaInput
    upsert?: DataUpsertWithoutAvaliacaoSocioEconomicaInput
    connect?: DataWhereUniqueInput
    update?: XOR<DataUpdateWithoutAvaliacaoSocioEconomicaInput, DataUncheckedUpdateWithoutAvaliacaoSocioEconomicaInput>
  }

  export type PessoaUpdateOneRequiredWithoutAvaliacaoSocioEconomicaInput = {
    create?: XOR<PessoaCreateWithoutAvaliacaoSocioEconomicaInput, PessoaUncheckedCreateWithoutAvaliacaoSocioEconomicaInput>
    connectOrCreate?: PessoaCreateOrConnectWithoutAvaliacaoSocioEconomicaInput
    upsert?: PessoaUpsertWithoutAvaliacaoSocioEconomicaInput
    connect?: PessoaWhereUniqueInput
    update?: XOR<PessoaUpdateWithoutAvaliacaoSocioEconomicaInput, PessoaUncheckedUpdateWithoutAvaliacaoSocioEconomicaInput>
  }

  export type LocalUpdateOneRequiredWithoutAvaliacaoSocioEconomicaInput = {
    create?: XOR<LocalCreateWithoutAvaliacaoSocioEconomicaInput, LocalUncheckedCreateWithoutAvaliacaoSocioEconomicaInput>
    connectOrCreate?: LocalCreateOrConnectWithoutAvaliacaoSocioEconomicaInput
    upsert?: LocalUpsertWithoutAvaliacaoSocioEconomicaInput
    connect?: LocalWhereUniqueInput
    update?: XOR<LocalUpdateWithoutAvaliacaoSocioEconomicaInput, LocalUncheckedUpdateWithoutAvaliacaoSocioEconomicaInput>
  }

  export type UsuarioUpdateOneRequiredWithoutAvaliacaoSocioEconomicaInput = {
    create?: XOR<UsuarioCreateWithoutAvaliacaoSocioEconomicaInput, UsuarioUncheckedCreateWithoutAvaliacaoSocioEconomicaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAvaliacaoSocioEconomicaInput
    upsert?: UsuarioUpsertWithoutAvaliacaoSocioEconomicaInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<UsuarioUpdateWithoutAvaliacaoSocioEconomicaInput, UsuarioUncheckedUpdateWithoutAvaliacaoSocioEconomicaInput>
  }

  export type EnumEscolaridadeFieldUpdateOperationsInput = {
    set?: Escolaridade
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type EnumUltimaConsultaFieldUpdateOperationsInput = {
    set?: UltimaConsulta
  }

  export type EnumLocalConsultaFieldUpdateOperationsInput = {
    set?: LocalConsulta
  }

  export type EnumMotivoUltimaConsultaFieldUpdateOperationsInput = {
    set?: MotivoUltimaConsulta
  }

  export type EnumAvaliacaoUltimaConsultaFieldUpdateOperationsInput = {
    set?: AvaliacaoUltimaConsulta
  }

  export type EnumAvaliacaoBucalFieldUpdateOperationsInput = {
    set?: AvaliacaoBucal
  }

  export type EnumFilhoQtdEscovacoesPorDiaFieldUpdateOperationsInput = {
    set?: FilhoQtdEscovacoesPorDia
  }

  export type EnumFrequenciaTrocaEscovasFieldUpdateOperationsInput = {
    set?: FrequenciaTrocaEscovas
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedEnumRespostasSohoFilter = {
    equals?: RespostasSoho
    in?: Enumerable<RespostasSoho>
    notIn?: Enumerable<RespostasSoho>
    not?: NestedEnumRespostasSohoFilter | RespostasSoho
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedEnumRespostasSohoWithAggregatesFilter = {
    equals?: RespostasSoho
    in?: Enumerable<RespostasSoho>
    notIn?: Enumerable<RespostasSoho>
    not?: NestedEnumRespostasSohoWithAggregatesFilter | RespostasSoho
    _count?: NestedIntFilter
    _min?: NestedEnumRespostasSohoFilter
    _max?: NestedEnumRespostasSohoFilter
  }

  export type NestedEnumRespostasCPQFilter = {
    equals?: RespostasCPQ
    in?: Enumerable<RespostasCPQ>
    notIn?: Enumerable<RespostasCPQ>
    not?: NestedEnumRespostasCPQFilter | RespostasCPQ
  }

  export type NestedEnumRespostasCPQWithAggregatesFilter = {
    equals?: RespostasCPQ
    in?: Enumerable<RespostasCPQ>
    notIn?: Enumerable<RespostasCPQ>
    not?: NestedEnumRespostasCPQWithAggregatesFilter | RespostasCPQ
    _count?: NestedIntFilter
    _min?: NestedEnumRespostasCPQFilter
    _max?: NestedEnumRespostasCPQFilter
  }

  export type NestedEnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFilter = {
    equals?: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    in?: Enumerable<FrequenciaIngestaoAlimentoBebidaUltimosSeteDias>
    notIn?: Enumerable<FrequenciaIngestaoAlimentoBebidaUltimosSeteDias>
    not?: NestedEnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFilter | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  }

  export type NestedEnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasWithAggregatesFilter = {
    equals?: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    in?: Enumerable<FrequenciaIngestaoAlimentoBebidaUltimosSeteDias>
    notIn?: Enumerable<FrequenciaIngestaoAlimentoBebidaUltimosSeteDias>
    not?: NestedEnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasWithAggregatesFilter | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    _count?: NestedIntFilter
    _min?: NestedEnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFilter
    _max?: NestedEnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedEnumPapelFilter = {
    equals?: Papel
    in?: Enumerable<Papel>
    notIn?: Enumerable<Papel>
    not?: NestedEnumPapelFilter | Papel
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedEnumPapelWithAggregatesFilter = {
    equals?: Papel
    in?: Enumerable<Papel>
    notIn?: Enumerable<Papel>
    not?: NestedEnumPapelWithAggregatesFilter | Papel
    _count?: NestedIntFilter
    _min?: NestedEnumPapelFilter
    _max?: NestedEnumPapelFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedEnumGeneroFilter = {
    equals?: Genero
    in?: Enumerable<Genero>
    notIn?: Enumerable<Genero>
    not?: NestedEnumGeneroFilter | Genero
  }

  export type NestedEnumEtniaFilter = {
    equals?: Etnia
    in?: Enumerable<Etnia>
    notIn?: Enumerable<Etnia>
    not?: NestedEnumEtniaFilter | Etnia
  }

  export type NestedEnumEtniaNullableFilter = {
    equals?: Etnia | null
    in?: Enumerable<Etnia> | null
    notIn?: Enumerable<Etnia> | null
    not?: NestedEnumEtniaNullableFilter | Etnia | null
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedEnumGeneroWithAggregatesFilter = {
    equals?: Genero
    in?: Enumerable<Genero>
    notIn?: Enumerable<Genero>
    not?: NestedEnumGeneroWithAggregatesFilter | Genero
    _count?: NestedIntFilter
    _min?: NestedEnumGeneroFilter
    _max?: NestedEnumGeneroFilter
  }

  export type NestedEnumEtniaWithAggregatesFilter = {
    equals?: Etnia
    in?: Enumerable<Etnia>
    notIn?: Enumerable<Etnia>
    not?: NestedEnumEtniaWithAggregatesFilter | Etnia
    _count?: NestedIntFilter
    _min?: NestedEnumEtniaFilter
    _max?: NestedEnumEtniaFilter
  }

  export type NestedEnumEtniaNullableWithAggregatesFilter = {
    equals?: Etnia | null
    in?: Enumerable<Etnia> | null
    notIn?: Enumerable<Etnia> | null
    not?: NestedEnumEtniaNullableWithAggregatesFilter | Etnia | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumEtniaNullableFilter
    _max?: NestedEnumEtniaNullableFilter
  }

  export type NestedEnumFluoroseDentariaFilter = {
    equals?: FluoroseDentaria
    in?: Enumerable<FluoroseDentaria>
    notIn?: Enumerable<FluoroseDentaria>
    not?: NestedEnumFluoroseDentariaFilter | FluoroseDentaria
  }

  export type NestedEnumRelacaoMolarAnteroPosteriorFilter = {
    equals?: RelacaoMolarAnteroPosterior
    in?: Enumerable<RelacaoMolarAnteroPosterior>
    notIn?: Enumerable<RelacaoMolarAnteroPosterior>
    not?: NestedEnumRelacaoMolarAnteroPosteriorFilter | RelacaoMolarAnteroPosterior
  }

  export type NestedEnumFluoroseDentariaWithAggregatesFilter = {
    equals?: FluoroseDentaria
    in?: Enumerable<FluoroseDentaria>
    notIn?: Enumerable<FluoroseDentaria>
    not?: NestedEnumFluoroseDentariaWithAggregatesFilter | FluoroseDentaria
    _count?: NestedIntFilter
    _min?: NestedEnumFluoroseDentariaFilter
    _max?: NestedEnumFluoroseDentariaFilter
  }

  export type NestedEnumRelacaoMolarAnteroPosteriorWithAggregatesFilter = {
    equals?: RelacaoMolarAnteroPosterior
    in?: Enumerable<RelacaoMolarAnteroPosterior>
    notIn?: Enumerable<RelacaoMolarAnteroPosterior>
    not?: NestedEnumRelacaoMolarAnteroPosteriorWithAggregatesFilter | RelacaoMolarAnteroPosterior
    _count?: NestedIntFilter
    _min?: NestedEnumRelacaoMolarAnteroPosteriorFilter
    _max?: NestedEnumRelacaoMolarAnteroPosteriorFilter
  }

  export type NestedEnumMotivoRemovidoNullableFilter = {
    equals?: MotivoRemovido | null
    in?: Enumerable<MotivoRemovido> | null
    notIn?: Enumerable<MotivoRemovido> | null
    not?: NestedEnumMotivoRemovidoNullableFilter | MotivoRemovido | null
  }

  export type NestedEnumMotivoRemovidoNullableWithAggregatesFilter = {
    equals?: MotivoRemovido | null
    in?: Enumerable<MotivoRemovido> | null
    notIn?: Enumerable<MotivoRemovido> | null
    not?: NestedEnumMotivoRemovidoNullableWithAggregatesFilter | MotivoRemovido | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumMotivoRemovidoNullableFilter
    _max?: NestedEnumMotivoRemovidoNullableFilter
  }

  export type NestedEnumRespostasTraumatismoDentarioFilter = {
    equals?: RespostasTraumatismoDentario
    in?: Enumerable<RespostasTraumatismoDentario>
    notIn?: Enumerable<RespostasTraumatismoDentario>
    not?: NestedEnumRespostasTraumatismoDentarioFilter | RespostasTraumatismoDentario
  }

  export type NestedEnumRespostasTraumatismoDentarioWithAggregatesFilter = {
    equals?: RespostasTraumatismoDentario
    in?: Enumerable<RespostasTraumatismoDentario>
    notIn?: Enumerable<RespostasTraumatismoDentario>
    not?: NestedEnumRespostasTraumatismoDentarioWithAggregatesFilter | RespostasTraumatismoDentario
    _count?: NestedIntFilter
    _min?: NestedEnumRespostasTraumatismoDentarioFilter
    _max?: NestedEnumRespostasTraumatismoDentarioFilter
  }

  export type NestedEnumEscolaridadeFilter = {
    equals?: Escolaridade
    in?: Enumerable<Escolaridade>
    notIn?: Enumerable<Escolaridade>
    not?: NestedEnumEscolaridadeFilter | Escolaridade
  }

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type NestedEnumUltimaConsultaFilter = {
    equals?: UltimaConsulta
    in?: Enumerable<UltimaConsulta>
    notIn?: Enumerable<UltimaConsulta>
    not?: NestedEnumUltimaConsultaFilter | UltimaConsulta
  }

  export type NestedEnumLocalConsultaFilter = {
    equals?: LocalConsulta
    in?: Enumerable<LocalConsulta>
    notIn?: Enumerable<LocalConsulta>
    not?: NestedEnumLocalConsultaFilter | LocalConsulta
  }

  export type NestedEnumMotivoUltimaConsultaFilter = {
    equals?: MotivoUltimaConsulta
    in?: Enumerable<MotivoUltimaConsulta>
    notIn?: Enumerable<MotivoUltimaConsulta>
    not?: NestedEnumMotivoUltimaConsultaFilter | MotivoUltimaConsulta
  }

  export type NestedEnumAvaliacaoUltimaConsultaFilter = {
    equals?: AvaliacaoUltimaConsulta
    in?: Enumerable<AvaliacaoUltimaConsulta>
    notIn?: Enumerable<AvaliacaoUltimaConsulta>
    not?: NestedEnumAvaliacaoUltimaConsultaFilter | AvaliacaoUltimaConsulta
  }

  export type NestedEnumAvaliacaoBucalFilter = {
    equals?: AvaliacaoBucal
    in?: Enumerable<AvaliacaoBucal>
    notIn?: Enumerable<AvaliacaoBucal>
    not?: NestedEnumAvaliacaoBucalFilter | AvaliacaoBucal
  }

  export type NestedEnumFilhoQtdEscovacoesPorDiaFilter = {
    equals?: FilhoQtdEscovacoesPorDia
    in?: Enumerable<FilhoQtdEscovacoesPorDia>
    notIn?: Enumerable<FilhoQtdEscovacoesPorDia>
    not?: NestedEnumFilhoQtdEscovacoesPorDiaFilter | FilhoQtdEscovacoesPorDia
  }

  export type NestedEnumFrequenciaTrocaEscovasFilter = {
    equals?: FrequenciaTrocaEscovas
    in?: Enumerable<FrequenciaTrocaEscovas>
    notIn?: Enumerable<FrequenciaTrocaEscovas>
    not?: NestedEnumFrequenciaTrocaEscovasFilter | FrequenciaTrocaEscovas
  }

  export type NestedEnumEscolaridadeWithAggregatesFilter = {
    equals?: Escolaridade
    in?: Enumerable<Escolaridade>
    notIn?: Enumerable<Escolaridade>
    not?: NestedEnumEscolaridadeWithAggregatesFilter | Escolaridade
    _count?: NestedIntFilter
    _min?: NestedEnumEscolaridadeFilter
    _max?: NestedEnumEscolaridadeFilter
  }

  export type NestedBoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type NestedEnumUltimaConsultaWithAggregatesFilter = {
    equals?: UltimaConsulta
    in?: Enumerable<UltimaConsulta>
    notIn?: Enumerable<UltimaConsulta>
    not?: NestedEnumUltimaConsultaWithAggregatesFilter | UltimaConsulta
    _count?: NestedIntFilter
    _min?: NestedEnumUltimaConsultaFilter
    _max?: NestedEnumUltimaConsultaFilter
  }

  export type NestedEnumLocalConsultaWithAggregatesFilter = {
    equals?: LocalConsulta
    in?: Enumerable<LocalConsulta>
    notIn?: Enumerable<LocalConsulta>
    not?: NestedEnumLocalConsultaWithAggregatesFilter | LocalConsulta
    _count?: NestedIntFilter
    _min?: NestedEnumLocalConsultaFilter
    _max?: NestedEnumLocalConsultaFilter
  }

  export type NestedEnumMotivoUltimaConsultaWithAggregatesFilter = {
    equals?: MotivoUltimaConsulta
    in?: Enumerable<MotivoUltimaConsulta>
    notIn?: Enumerable<MotivoUltimaConsulta>
    not?: NestedEnumMotivoUltimaConsultaWithAggregatesFilter | MotivoUltimaConsulta
    _count?: NestedIntFilter
    _min?: NestedEnumMotivoUltimaConsultaFilter
    _max?: NestedEnumMotivoUltimaConsultaFilter
  }

  export type NestedEnumAvaliacaoUltimaConsultaWithAggregatesFilter = {
    equals?: AvaliacaoUltimaConsulta
    in?: Enumerable<AvaliacaoUltimaConsulta>
    notIn?: Enumerable<AvaliacaoUltimaConsulta>
    not?: NestedEnumAvaliacaoUltimaConsultaWithAggregatesFilter | AvaliacaoUltimaConsulta
    _count?: NestedIntFilter
    _min?: NestedEnumAvaliacaoUltimaConsultaFilter
    _max?: NestedEnumAvaliacaoUltimaConsultaFilter
  }

  export type NestedEnumAvaliacaoBucalWithAggregatesFilter = {
    equals?: AvaliacaoBucal
    in?: Enumerable<AvaliacaoBucal>
    notIn?: Enumerable<AvaliacaoBucal>
    not?: NestedEnumAvaliacaoBucalWithAggregatesFilter | AvaliacaoBucal
    _count?: NestedIntFilter
    _min?: NestedEnumAvaliacaoBucalFilter
    _max?: NestedEnumAvaliacaoBucalFilter
  }

  export type NestedEnumFilhoQtdEscovacoesPorDiaWithAggregatesFilter = {
    equals?: FilhoQtdEscovacoesPorDia
    in?: Enumerable<FilhoQtdEscovacoesPorDia>
    notIn?: Enumerable<FilhoQtdEscovacoesPorDia>
    not?: NestedEnumFilhoQtdEscovacoesPorDiaWithAggregatesFilter | FilhoQtdEscovacoesPorDia
    _count?: NestedIntFilter
    _min?: NestedEnumFilhoQtdEscovacoesPorDiaFilter
    _max?: NestedEnumFilhoQtdEscovacoesPorDiaFilter
  }

  export type NestedEnumFrequenciaTrocaEscovasWithAggregatesFilter = {
    equals?: FrequenciaTrocaEscovas
    in?: Enumerable<FrequenciaTrocaEscovas>
    notIn?: Enumerable<FrequenciaTrocaEscovas>
    not?: NestedEnumFrequenciaTrocaEscovasWithAggregatesFilter | FrequenciaTrocaEscovas
    _count?: NestedIntFilter
    _min?: NestedEnumFrequenciaTrocaEscovasFilter
    _max?: NestedEnumFrequenciaTrocaEscovasFilter
  }

  export type ExameCreateWithoutSohoInput = {
    data: DataCreateNestedOneWithoutExamesInput
    pessoa: PessoaCreateNestedOneWithoutExamesInput
    condicaoPeriodontal?: CondicaoPeriodontalCreateNestedOneWithoutExameInput
    local: LocalCreateNestedOneWithoutExamesInput
    usuario: UsuarioCreateNestedOneWithoutExamesInput
    traumatismoDentario?: TraumatismoDentarioCreateNestedOneWithoutExameInput
    marcadorConsumoAlimentar: MarcadorConsumoAlimentarCreateNestedOneWithoutExameInput
    fluoroseDentaria: FluoroseDentaria
    overjetMaxilarAnterior: number
    overjetMandibularAnterior: number
    mordidaAbertaVerticalAnterior: number
    relacaoMolarAnteroPosterior: RelacaoMolarAnteroPosterior
    observacao: string
    dentes?: DenteCreateNestedManyWithoutExameInput
    CPQ?: CPQCreateNestedOneWithoutExameInput
    arquivado?: boolean
  }

  export type ExameUncheckedCreateWithoutSohoInput = {
    id?: number
    idData: number
    idPessoa: number
    idCondicaoPeriodontal?: number | null
    idLocal: number
    idUsuario: number
    idTraumatismoDentario?: number | null
    idMarcadorConsumoAlimentar: number
    fluoroseDentaria: FluoroseDentaria
    overjetMaxilarAnterior: number
    overjetMandibularAnterior: number
    mordidaAbertaVerticalAnterior: number
    relacaoMolarAnteroPosterior: RelacaoMolarAnteroPosterior
    observacao: string
    dentes?: DenteUncheckedCreateNestedManyWithoutExameInput
    CPQ?: CPQUncheckedCreateNestedOneWithoutExameInput
    arquivado?: boolean
  }

  export type ExameCreateOrConnectWithoutSohoInput = {
    where: ExameWhereUniqueInput
    create: XOR<ExameCreateWithoutSohoInput, ExameUncheckedCreateWithoutSohoInput>
  }

  export type ExameUpsertWithoutSohoInput = {
    update: XOR<ExameUpdateWithoutSohoInput, ExameUncheckedUpdateWithoutSohoInput>
    create: XOR<ExameCreateWithoutSohoInput, ExameUncheckedCreateWithoutSohoInput>
  }

  export type ExameUpdateWithoutSohoInput = {
    data?: DataUpdateOneRequiredWithoutExamesInput
    pessoa?: PessoaUpdateOneRequiredWithoutExamesInput
    condicaoPeriodontal?: CondicaoPeriodontalUpdateOneWithoutExameInput
    local?: LocalUpdateOneRequiredWithoutExamesInput
    usuario?: UsuarioUpdateOneRequiredWithoutExamesInput
    traumatismoDentario?: TraumatismoDentarioUpdateOneWithoutExameInput
    marcadorConsumoAlimentar?: MarcadorConsumoAlimentarUpdateOneRequiredWithoutExameInput
    fluoroseDentaria?: EnumFluoroseDentariaFieldUpdateOperationsInput | FluoroseDentaria
    overjetMaxilarAnterior?: IntFieldUpdateOperationsInput | number
    overjetMandibularAnterior?: IntFieldUpdateOperationsInput | number
    mordidaAbertaVerticalAnterior?: IntFieldUpdateOperationsInput | number
    relacaoMolarAnteroPosterior?: EnumRelacaoMolarAnteroPosteriorFieldUpdateOperationsInput | RelacaoMolarAnteroPosterior
    observacao?: StringFieldUpdateOperationsInput | string
    dentes?: DenteUpdateManyWithoutExameInput
    CPQ?: CPQUpdateOneWithoutExameInput
    arquivado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExameUncheckedUpdateWithoutSohoInput = {
    id?: IntFieldUpdateOperationsInput | number
    idData?: IntFieldUpdateOperationsInput | number
    idPessoa?: IntFieldUpdateOperationsInput | number
    idCondicaoPeriodontal?: NullableIntFieldUpdateOperationsInput | number | null
    idLocal?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    idTraumatismoDentario?: NullableIntFieldUpdateOperationsInput | number | null
    idMarcadorConsumoAlimentar?: IntFieldUpdateOperationsInput | number
    fluoroseDentaria?: EnumFluoroseDentariaFieldUpdateOperationsInput | FluoroseDentaria
    overjetMaxilarAnterior?: IntFieldUpdateOperationsInput | number
    overjetMandibularAnterior?: IntFieldUpdateOperationsInput | number
    mordidaAbertaVerticalAnterior?: IntFieldUpdateOperationsInput | number
    relacaoMolarAnteroPosterior?: EnumRelacaoMolarAnteroPosteriorFieldUpdateOperationsInput | RelacaoMolarAnteroPosterior
    observacao?: StringFieldUpdateOperationsInput | string
    dentes?: DenteUncheckedUpdateManyWithoutExameInput
    CPQ?: CPQUncheckedUpdateOneWithoutExameInput
    arquivado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExameCreateWithoutCPQInput = {
    data: DataCreateNestedOneWithoutExamesInput
    pessoa: PessoaCreateNestedOneWithoutExamesInput
    condicaoPeriodontal?: CondicaoPeriodontalCreateNestedOneWithoutExameInput
    local: LocalCreateNestedOneWithoutExamesInput
    usuario: UsuarioCreateNestedOneWithoutExamesInput
    traumatismoDentario?: TraumatismoDentarioCreateNestedOneWithoutExameInput
    marcadorConsumoAlimentar: MarcadorConsumoAlimentarCreateNestedOneWithoutExameInput
    fluoroseDentaria: FluoroseDentaria
    overjetMaxilarAnterior: number
    overjetMandibularAnterior: number
    mordidaAbertaVerticalAnterior: number
    relacaoMolarAnteroPosterior: RelacaoMolarAnteroPosterior
    observacao: string
    dentes?: DenteCreateNestedManyWithoutExameInput
    Soho?: SohoCreateNestedOneWithoutExameInput
    arquivado?: boolean
  }

  export type ExameUncheckedCreateWithoutCPQInput = {
    id?: number
    idData: number
    idPessoa: number
    idCondicaoPeriodontal?: number | null
    idLocal: number
    idUsuario: number
    idTraumatismoDentario?: number | null
    idMarcadorConsumoAlimentar: number
    fluoroseDentaria: FluoroseDentaria
    overjetMaxilarAnterior: number
    overjetMandibularAnterior: number
    mordidaAbertaVerticalAnterior: number
    relacaoMolarAnteroPosterior: RelacaoMolarAnteroPosterior
    observacao: string
    dentes?: DenteUncheckedCreateNestedManyWithoutExameInput
    Soho?: SohoUncheckedCreateNestedOneWithoutExameInput
    arquivado?: boolean
  }

  export type ExameCreateOrConnectWithoutCPQInput = {
    where: ExameWhereUniqueInput
    create: XOR<ExameCreateWithoutCPQInput, ExameUncheckedCreateWithoutCPQInput>
  }

  export type ExameUpsertWithoutCPQInput = {
    update: XOR<ExameUpdateWithoutCPQInput, ExameUncheckedUpdateWithoutCPQInput>
    create: XOR<ExameCreateWithoutCPQInput, ExameUncheckedCreateWithoutCPQInput>
  }

  export type ExameUpdateWithoutCPQInput = {
    data?: DataUpdateOneRequiredWithoutExamesInput
    pessoa?: PessoaUpdateOneRequiredWithoutExamesInput
    condicaoPeriodontal?: CondicaoPeriodontalUpdateOneWithoutExameInput
    local?: LocalUpdateOneRequiredWithoutExamesInput
    usuario?: UsuarioUpdateOneRequiredWithoutExamesInput
    traumatismoDentario?: TraumatismoDentarioUpdateOneWithoutExameInput
    marcadorConsumoAlimentar?: MarcadorConsumoAlimentarUpdateOneRequiredWithoutExameInput
    fluoroseDentaria?: EnumFluoroseDentariaFieldUpdateOperationsInput | FluoroseDentaria
    overjetMaxilarAnterior?: IntFieldUpdateOperationsInput | number
    overjetMandibularAnterior?: IntFieldUpdateOperationsInput | number
    mordidaAbertaVerticalAnterior?: IntFieldUpdateOperationsInput | number
    relacaoMolarAnteroPosterior?: EnumRelacaoMolarAnteroPosteriorFieldUpdateOperationsInput | RelacaoMolarAnteroPosterior
    observacao?: StringFieldUpdateOperationsInput | string
    dentes?: DenteUpdateManyWithoutExameInput
    Soho?: SohoUpdateOneWithoutExameInput
    arquivado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExameUncheckedUpdateWithoutCPQInput = {
    id?: IntFieldUpdateOperationsInput | number
    idData?: IntFieldUpdateOperationsInput | number
    idPessoa?: IntFieldUpdateOperationsInput | number
    idCondicaoPeriodontal?: NullableIntFieldUpdateOperationsInput | number | null
    idLocal?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    idTraumatismoDentario?: NullableIntFieldUpdateOperationsInput | number | null
    idMarcadorConsumoAlimentar?: IntFieldUpdateOperationsInput | number
    fluoroseDentaria?: EnumFluoroseDentariaFieldUpdateOperationsInput | FluoroseDentaria
    overjetMaxilarAnterior?: IntFieldUpdateOperationsInput | number
    overjetMandibularAnterior?: IntFieldUpdateOperationsInput | number
    mordidaAbertaVerticalAnterior?: IntFieldUpdateOperationsInput | number
    relacaoMolarAnteroPosterior?: EnumRelacaoMolarAnteroPosteriorFieldUpdateOperationsInput | RelacaoMolarAnteroPosterior
    observacao?: StringFieldUpdateOperationsInput | string
    dentes?: DenteUncheckedUpdateManyWithoutExameInput
    Soho?: SohoUncheckedUpdateOneWithoutExameInput
    arquivado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DataCreateWithoutMarcadorConsumoAlimentarInput = {
    dia: number
    mes: number
    ano: number
    exames?: ExameCreateNestedManyWithoutDataInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaCreateNestedManyWithoutDataInput
  }

  export type DataUncheckedCreateWithoutMarcadorConsumoAlimentarInput = {
    id?: number
    dia: number
    mes: number
    ano: number
    exames?: ExameUncheckedCreateNestedManyWithoutDataInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaUncheckedCreateNestedManyWithoutDataInput
  }

  export type DataCreateOrConnectWithoutMarcadorConsumoAlimentarInput = {
    where: DataWhereUniqueInput
    create: XOR<DataCreateWithoutMarcadorConsumoAlimentarInput, DataUncheckedCreateWithoutMarcadorConsumoAlimentarInput>
  }

  export type PessoaCreateWithoutMarcadorConsumoAlimentarInput = {
    nascimento: Date | string
    nome: string
    genero: Genero
    etniaPrincipal: Etnia
    etniaSecundaria?: Etnia | null
    exames?: ExameCreateNestedManyWithoutPessoaInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaCreateNestedManyWithoutPessoaInput
  }

  export type PessoaUncheckedCreateWithoutMarcadorConsumoAlimentarInput = {
    id?: number
    nascimento: Date | string
    nome: string
    genero: Genero
    etniaPrincipal: Etnia
    etniaSecundaria?: Etnia | null
    exames?: ExameUncheckedCreateNestedManyWithoutPessoaInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaUncheckedCreateNestedManyWithoutPessoaInput
  }

  export type PessoaCreateOrConnectWithoutMarcadorConsumoAlimentarInput = {
    where: PessoaWhereUniqueInput
    create: XOR<PessoaCreateWithoutMarcadorConsumoAlimentarInput, PessoaUncheckedCreateWithoutMarcadorConsumoAlimentarInput>
  }

  export type UsuarioCreateWithoutMarcadorConsumoAlimentarInput = {
    nome?: string | null
    email: string
    senha: string
    ativo?: boolean
    papel: Papel
    exames?: ExameCreateNestedManyWithoutUsuarioInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaCreateNestedManyWithoutUsuarioInput
    coordenaEquipe?: EquipeCreateNestedOneWithoutCoordenadorInput
    pertenceEquipe?: EquipeCreateNestedOneWithoutIntegrantesInput
  }

  export type UsuarioUncheckedCreateWithoutMarcadorConsumoAlimentarInput = {
    id?: number
    nome?: string | null
    email: string
    senha: string
    ativo?: boolean
    papel: Papel
    exames?: ExameUncheckedCreateNestedManyWithoutUsuarioInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaUncheckedCreateNestedManyWithoutUsuarioInput
    coordenaEquipe?: EquipeUncheckedCreateNestedOneWithoutCoordenadorInput
    idPertenceEquipe?: number | null
  }

  export type UsuarioCreateOrConnectWithoutMarcadorConsumoAlimentarInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutMarcadorConsumoAlimentarInput, UsuarioUncheckedCreateWithoutMarcadorConsumoAlimentarInput>
  }

  export type LocalCreateWithoutMarcadorConsumoAlimentarInput = {
    municipio: string
    escola: string
    exames?: ExameCreateNestedManyWithoutLocalInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaCreateNestedManyWithoutLocalInput
  }

  export type LocalUncheckedCreateWithoutMarcadorConsumoAlimentarInput = {
    id?: number
    municipio: string
    escola: string
    exames?: ExameUncheckedCreateNestedManyWithoutLocalInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaUncheckedCreateNestedManyWithoutLocalInput
  }

  export type LocalCreateOrConnectWithoutMarcadorConsumoAlimentarInput = {
    where: LocalWhereUniqueInput
    create: XOR<LocalCreateWithoutMarcadorConsumoAlimentarInput, LocalUncheckedCreateWithoutMarcadorConsumoAlimentarInput>
  }

  export type ExameCreateWithoutMarcadorConsumoAlimentarInput = {
    data: DataCreateNestedOneWithoutExamesInput
    pessoa: PessoaCreateNestedOneWithoutExamesInput
    condicaoPeriodontal?: CondicaoPeriodontalCreateNestedOneWithoutExameInput
    local: LocalCreateNestedOneWithoutExamesInput
    usuario: UsuarioCreateNestedOneWithoutExamesInput
    traumatismoDentario?: TraumatismoDentarioCreateNestedOneWithoutExameInput
    fluoroseDentaria: FluoroseDentaria
    overjetMaxilarAnterior: number
    overjetMandibularAnterior: number
    mordidaAbertaVerticalAnterior: number
    relacaoMolarAnteroPosterior: RelacaoMolarAnteroPosterior
    observacao: string
    dentes?: DenteCreateNestedManyWithoutExameInput
    Soho?: SohoCreateNestedOneWithoutExameInput
    CPQ?: CPQCreateNestedOneWithoutExameInput
    arquivado?: boolean
  }

  export type ExameUncheckedCreateWithoutMarcadorConsumoAlimentarInput = {
    id?: number
    idData: number
    idPessoa: number
    idCondicaoPeriodontal?: number | null
    idLocal: number
    idUsuario: number
    idTraumatismoDentario?: number | null
    fluoroseDentaria: FluoroseDentaria
    overjetMaxilarAnterior: number
    overjetMandibularAnterior: number
    mordidaAbertaVerticalAnterior: number
    relacaoMolarAnteroPosterior: RelacaoMolarAnteroPosterior
    observacao: string
    dentes?: DenteUncheckedCreateNestedManyWithoutExameInput
    Soho?: SohoUncheckedCreateNestedOneWithoutExameInput
    CPQ?: CPQUncheckedCreateNestedOneWithoutExameInput
    arquivado?: boolean
  }

  export type ExameCreateOrConnectWithoutMarcadorConsumoAlimentarInput = {
    where: ExameWhereUniqueInput
    create: XOR<ExameCreateWithoutMarcadorConsumoAlimentarInput, ExameUncheckedCreateWithoutMarcadorConsumoAlimentarInput>
  }

  export type DataUpsertWithoutMarcadorConsumoAlimentarInput = {
    update: XOR<DataUpdateWithoutMarcadorConsumoAlimentarInput, DataUncheckedUpdateWithoutMarcadorConsumoAlimentarInput>
    create: XOR<DataCreateWithoutMarcadorConsumoAlimentarInput, DataUncheckedCreateWithoutMarcadorConsumoAlimentarInput>
  }

  export type DataUpdateWithoutMarcadorConsumoAlimentarInput = {
    dia?: IntFieldUpdateOperationsInput | number
    mes?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    exames?: ExameUpdateManyWithoutDataInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaUpdateManyWithoutDataInput
  }

  export type DataUncheckedUpdateWithoutMarcadorConsumoAlimentarInput = {
    id?: IntFieldUpdateOperationsInput | number
    dia?: IntFieldUpdateOperationsInput | number
    mes?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    exames?: ExameUncheckedUpdateManyWithoutDataInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaUncheckedUpdateManyWithoutDataInput
  }

  export type PessoaUpsertWithoutMarcadorConsumoAlimentarInput = {
    update: XOR<PessoaUpdateWithoutMarcadorConsumoAlimentarInput, PessoaUncheckedUpdateWithoutMarcadorConsumoAlimentarInput>
    create: XOR<PessoaCreateWithoutMarcadorConsumoAlimentarInput, PessoaUncheckedCreateWithoutMarcadorConsumoAlimentarInput>
  }

  export type PessoaUpdateWithoutMarcadorConsumoAlimentarInput = {
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    genero?: EnumGeneroFieldUpdateOperationsInput | Genero
    etniaPrincipal?: EnumEtniaFieldUpdateOperationsInput | Etnia
    etniaSecundaria?: NullableEnumEtniaFieldUpdateOperationsInput | Etnia | null
    exames?: ExameUpdateManyWithoutPessoaInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaUpdateManyWithoutPessoaInput
  }

  export type PessoaUncheckedUpdateWithoutMarcadorConsumoAlimentarInput = {
    id?: IntFieldUpdateOperationsInput | number
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    genero?: EnumGeneroFieldUpdateOperationsInput | Genero
    etniaPrincipal?: EnumEtniaFieldUpdateOperationsInput | Etnia
    etniaSecundaria?: NullableEnumEtniaFieldUpdateOperationsInput | Etnia | null
    exames?: ExameUncheckedUpdateManyWithoutPessoaInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaUncheckedUpdateManyWithoutPessoaInput
  }

  export type UsuarioUpsertWithoutMarcadorConsumoAlimentarInput = {
    update: XOR<UsuarioUpdateWithoutMarcadorConsumoAlimentarInput, UsuarioUncheckedUpdateWithoutMarcadorConsumoAlimentarInput>
    create: XOR<UsuarioCreateWithoutMarcadorConsumoAlimentarInput, UsuarioUncheckedCreateWithoutMarcadorConsumoAlimentarInput>
  }

  export type UsuarioUpdateWithoutMarcadorConsumoAlimentarInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    papel?: EnumPapelFieldUpdateOperationsInput | Papel
    exames?: ExameUpdateManyWithoutUsuarioInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaUpdateManyWithoutUsuarioInput
    coordenaEquipe?: EquipeUpdateOneWithoutCoordenadorInput
    pertenceEquipe?: EquipeUpdateOneWithoutIntegrantesInput
  }

  export type UsuarioUncheckedUpdateWithoutMarcadorConsumoAlimentarInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    papel?: EnumPapelFieldUpdateOperationsInput | Papel
    exames?: ExameUncheckedUpdateManyWithoutUsuarioInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaUncheckedUpdateManyWithoutUsuarioInput
    coordenaEquipe?: EquipeUncheckedUpdateOneWithoutCoordenadorInput
    idPertenceEquipe?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LocalUpsertWithoutMarcadorConsumoAlimentarInput = {
    update: XOR<LocalUpdateWithoutMarcadorConsumoAlimentarInput, LocalUncheckedUpdateWithoutMarcadorConsumoAlimentarInput>
    create: XOR<LocalCreateWithoutMarcadorConsumoAlimentarInput, LocalUncheckedCreateWithoutMarcadorConsumoAlimentarInput>
  }

  export type LocalUpdateWithoutMarcadorConsumoAlimentarInput = {
    municipio?: StringFieldUpdateOperationsInput | string
    escola?: StringFieldUpdateOperationsInput | string
    exames?: ExameUpdateManyWithoutLocalInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaUpdateManyWithoutLocalInput
  }

  export type LocalUncheckedUpdateWithoutMarcadorConsumoAlimentarInput = {
    id?: IntFieldUpdateOperationsInput | number
    municipio?: StringFieldUpdateOperationsInput | string
    escola?: StringFieldUpdateOperationsInput | string
    exames?: ExameUncheckedUpdateManyWithoutLocalInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaUncheckedUpdateManyWithoutLocalInput
  }

  export type ExameUpsertWithoutMarcadorConsumoAlimentarInput = {
    update: XOR<ExameUpdateWithoutMarcadorConsumoAlimentarInput, ExameUncheckedUpdateWithoutMarcadorConsumoAlimentarInput>
    create: XOR<ExameCreateWithoutMarcadorConsumoAlimentarInput, ExameUncheckedCreateWithoutMarcadorConsumoAlimentarInput>
  }

  export type ExameUpdateWithoutMarcadorConsumoAlimentarInput = {
    data?: DataUpdateOneRequiredWithoutExamesInput
    pessoa?: PessoaUpdateOneRequiredWithoutExamesInput
    condicaoPeriodontal?: CondicaoPeriodontalUpdateOneWithoutExameInput
    local?: LocalUpdateOneRequiredWithoutExamesInput
    usuario?: UsuarioUpdateOneRequiredWithoutExamesInput
    traumatismoDentario?: TraumatismoDentarioUpdateOneWithoutExameInput
    fluoroseDentaria?: EnumFluoroseDentariaFieldUpdateOperationsInput | FluoroseDentaria
    overjetMaxilarAnterior?: IntFieldUpdateOperationsInput | number
    overjetMandibularAnterior?: IntFieldUpdateOperationsInput | number
    mordidaAbertaVerticalAnterior?: IntFieldUpdateOperationsInput | number
    relacaoMolarAnteroPosterior?: EnumRelacaoMolarAnteroPosteriorFieldUpdateOperationsInput | RelacaoMolarAnteroPosterior
    observacao?: StringFieldUpdateOperationsInput | string
    dentes?: DenteUpdateManyWithoutExameInput
    Soho?: SohoUpdateOneWithoutExameInput
    CPQ?: CPQUpdateOneWithoutExameInput
    arquivado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExameUncheckedUpdateWithoutMarcadorConsumoAlimentarInput = {
    id?: IntFieldUpdateOperationsInput | number
    idData?: IntFieldUpdateOperationsInput | number
    idPessoa?: IntFieldUpdateOperationsInput | number
    idCondicaoPeriodontal?: NullableIntFieldUpdateOperationsInput | number | null
    idLocal?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    idTraumatismoDentario?: NullableIntFieldUpdateOperationsInput | number | null
    fluoroseDentaria?: EnumFluoroseDentariaFieldUpdateOperationsInput | FluoroseDentaria
    overjetMaxilarAnterior?: IntFieldUpdateOperationsInput | number
    overjetMandibularAnterior?: IntFieldUpdateOperationsInput | number
    mordidaAbertaVerticalAnterior?: IntFieldUpdateOperationsInput | number
    relacaoMolarAnteroPosterior?: EnumRelacaoMolarAnteroPosteriorFieldUpdateOperationsInput | RelacaoMolarAnteroPosterior
    observacao?: StringFieldUpdateOperationsInput | string
    dentes?: DenteUncheckedUpdateManyWithoutExameInput
    Soho?: SohoUncheckedUpdateOneWithoutExameInput
    CPQ?: CPQUncheckedUpdateOneWithoutExameInput
    arquivado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExameCreateWithoutUsuarioInput = {
    data: DataCreateNestedOneWithoutExamesInput
    pessoa: PessoaCreateNestedOneWithoutExamesInput
    condicaoPeriodontal?: CondicaoPeriodontalCreateNestedOneWithoutExameInput
    local: LocalCreateNestedOneWithoutExamesInput
    traumatismoDentario?: TraumatismoDentarioCreateNestedOneWithoutExameInput
    marcadorConsumoAlimentar: MarcadorConsumoAlimentarCreateNestedOneWithoutExameInput
    fluoroseDentaria: FluoroseDentaria
    overjetMaxilarAnterior: number
    overjetMandibularAnterior: number
    mordidaAbertaVerticalAnterior: number
    relacaoMolarAnteroPosterior: RelacaoMolarAnteroPosterior
    observacao: string
    dentes?: DenteCreateNestedManyWithoutExameInput
    Soho?: SohoCreateNestedOneWithoutExameInput
    CPQ?: CPQCreateNestedOneWithoutExameInput
    arquivado?: boolean
  }

  export type ExameUncheckedCreateWithoutUsuarioInput = {
    id?: number
    idData: number
    idPessoa: number
    idCondicaoPeriodontal?: number | null
    idLocal: number
    idTraumatismoDentario?: number | null
    idMarcadorConsumoAlimentar: number
    fluoroseDentaria: FluoroseDentaria
    overjetMaxilarAnterior: number
    overjetMandibularAnterior: number
    mordidaAbertaVerticalAnterior: number
    relacaoMolarAnteroPosterior: RelacaoMolarAnteroPosterior
    observacao: string
    dentes?: DenteUncheckedCreateNestedManyWithoutExameInput
    Soho?: SohoUncheckedCreateNestedOneWithoutExameInput
    CPQ?: CPQUncheckedCreateNestedOneWithoutExameInput
    arquivado?: boolean
  }

  export type ExameCreateOrConnectWithoutUsuarioInput = {
    where: ExameWhereUniqueInput
    create: XOR<ExameCreateWithoutUsuarioInput, ExameUncheckedCreateWithoutUsuarioInput>
  }

  export type ExameCreateManyUsuarioInputEnvelope = {
    data: Enumerable<ExameCreateManyUsuarioInput>
    skipDuplicates?: boolean
  }

  export type AvaliacaoSocioEconomicaCreateWithoutUsuarioInput = {
    data: DataCreateNestedOneWithoutAvaliacaoSocioEconomicaInput
    pessoa: PessoaCreateNestedOneWithoutAvaliacaoSocioEconomicaInput
    local: LocalCreateNestedOneWithoutAvaliacaoSocioEconomicaInput
    qtdPessoasResidencia: number
    qtdComodosDormitorio: number
    qtdBens: number
    qtdTotalRendaUltimoMes: number
    escolaridadeMae: Escolaridade
    escolaridadePai: Escolaridade
    recebeBeneficioSocial?: boolean | null
    filhoDorDente6Meses?: boolean | null
    filhoNivelDor: number
    filhoVisitouDentista?: boolean | null
    filhoUltimaConsulta: UltimaConsulta
    filhoLocalConsulta: LocalConsulta
    motivoUltimaConsulta: MotivoUltimaConsulta
    avaliacaoUltimaConsulta: AvaliacaoUltimaConsulta
    filhoAvaliacaoBucal: AvaliacaoBucal
    filhoQtdEscovacoesPorDia: FilhoQtdEscovacoesPorDia
    frequenciaTrocaEscovas: FrequenciaTrocaEscovas
    usaFioDental: boolean
    usaPastaComFluor: boolean
    arquivado?: boolean
  }

  export type AvaliacaoSocioEconomicaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    idData: number
    idPessoa: number
    idLocal: number
    qtdPessoasResidencia: number
    qtdComodosDormitorio: number
    qtdBens: number
    qtdTotalRendaUltimoMes: number
    escolaridadeMae: Escolaridade
    escolaridadePai: Escolaridade
    recebeBeneficioSocial?: boolean | null
    filhoDorDente6Meses?: boolean | null
    filhoNivelDor: number
    filhoVisitouDentista?: boolean | null
    filhoUltimaConsulta: UltimaConsulta
    filhoLocalConsulta: LocalConsulta
    motivoUltimaConsulta: MotivoUltimaConsulta
    avaliacaoUltimaConsulta: AvaliacaoUltimaConsulta
    filhoAvaliacaoBucal: AvaliacaoBucal
    filhoQtdEscovacoesPorDia: FilhoQtdEscovacoesPorDia
    frequenciaTrocaEscovas: FrequenciaTrocaEscovas
    usaFioDental: boolean
    usaPastaComFluor: boolean
    arquivado?: boolean
  }

  export type AvaliacaoSocioEconomicaCreateOrConnectWithoutUsuarioInput = {
    where: AvaliacaoSocioEconomicaWhereUniqueInput
    create: XOR<AvaliacaoSocioEconomicaCreateWithoutUsuarioInput, AvaliacaoSocioEconomicaUncheckedCreateWithoutUsuarioInput>
  }

  export type AvaliacaoSocioEconomicaCreateManyUsuarioInputEnvelope = {
    data: Enumerable<AvaliacaoSocioEconomicaCreateManyUsuarioInput>
    skipDuplicates?: boolean
  }

  export type MarcadorConsumoAlimentarCreateWithoutUsuarioInput = {
    data: DataCreateNestedOneWithoutMarcadorConsumoAlimentarInput
    pessoa: PessoaCreateNestedOneWithoutMarcadorConsumoAlimentarInput
    local: LocalCreateNestedOneWithoutMarcadorConsumoAlimentarInput
    exame?: ExameCreateNestedOneWithoutMarcadorConsumoAlimentarInput
    saladaCrua: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    legumesVerdurasCozidos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    frutasFrescasSaladaDeFrutas: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    feijao: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    leiteOuIogurte: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    batataFritaBatataDePacoteSalgadosFritos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    hamburgerEmbutidos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosSalgadosSalgadinhoDePacote: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    refrigerante: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  }

  export type MarcadorConsumoAlimentarUncheckedCreateWithoutUsuarioInput = {
    id?: number
    idData: number
    idPessoa: number
    idLocal: number
    exame?: ExameUncheckedCreateNestedOneWithoutMarcadorConsumoAlimentarInput
    saladaCrua: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    legumesVerdurasCozidos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    frutasFrescasSaladaDeFrutas: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    feijao: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    leiteOuIogurte: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    batataFritaBatataDePacoteSalgadosFritos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    hamburgerEmbutidos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosSalgadosSalgadinhoDePacote: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    refrigerante: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  }

  export type MarcadorConsumoAlimentarCreateOrConnectWithoutUsuarioInput = {
    where: MarcadorConsumoAlimentarWhereUniqueInput
    create: XOR<MarcadorConsumoAlimentarCreateWithoutUsuarioInput, MarcadorConsumoAlimentarUncheckedCreateWithoutUsuarioInput>
  }

  export type MarcadorConsumoAlimentarCreateManyUsuarioInputEnvelope = {
    data: Enumerable<MarcadorConsumoAlimentarCreateManyUsuarioInput>
    skipDuplicates?: boolean
  }

  export type EquipeCreateWithoutCoordenadorInput = {
    integrantes?: UsuarioCreateNestedManyWithoutPertenceEquipeInput
  }

  export type EquipeUncheckedCreateWithoutCoordenadorInput = {
    id?: number
    integrantes?: UsuarioUncheckedCreateNestedManyWithoutPertenceEquipeInput
  }

  export type EquipeCreateOrConnectWithoutCoordenadorInput = {
    where: EquipeWhereUniqueInput
    create: XOR<EquipeCreateWithoutCoordenadorInput, EquipeUncheckedCreateWithoutCoordenadorInput>
  }

  export type EquipeCreateWithoutIntegrantesInput = {
    coordenador: UsuarioCreateNestedOneWithoutCoordenaEquipeInput
  }

  export type EquipeUncheckedCreateWithoutIntegrantesInput = {
    id?: number
    idCoordenador: number
  }

  export type EquipeCreateOrConnectWithoutIntegrantesInput = {
    where: EquipeWhereUniqueInput
    create: XOR<EquipeCreateWithoutIntegrantesInput, EquipeUncheckedCreateWithoutIntegrantesInput>
  }

  export type ExameUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ExameWhereUniqueInput
    update: XOR<ExameUpdateWithoutUsuarioInput, ExameUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ExameCreateWithoutUsuarioInput, ExameUncheckedCreateWithoutUsuarioInput>
  }

  export type ExameUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ExameWhereUniqueInput
    data: XOR<ExameUpdateWithoutUsuarioInput, ExameUncheckedUpdateWithoutUsuarioInput>
  }

  export type ExameUpdateManyWithWhereWithoutUsuarioInput = {
    where: ExameScalarWhereInput
    data: XOR<ExameUpdateManyMutationInput, ExameUncheckedUpdateManyWithoutExamesInput>
  }

  export type ExameScalarWhereInput = {
    AND?: Enumerable<ExameScalarWhereInput>
    OR?: Enumerable<ExameScalarWhereInput>
    NOT?: Enumerable<ExameScalarWhereInput>
    id?: IntFilter | number
    idData?: IntFilter | number
    idPessoa?: IntFilter | number
    idCondicaoPeriodontal?: IntNullableFilter | number | null
    idLocal?: IntFilter | number
    idUsuario?: IntFilter | number
    idTraumatismoDentario?: IntNullableFilter | number | null
    idMarcadorConsumoAlimentar?: IntFilter | number
    fluoroseDentaria?: EnumFluoroseDentariaFilter | FluoroseDentaria
    overjetMaxilarAnterior?: IntFilter | number
    overjetMandibularAnterior?: IntFilter | number
    mordidaAbertaVerticalAnterior?: IntFilter | number
    relacaoMolarAnteroPosterior?: EnumRelacaoMolarAnteroPosteriorFilter | RelacaoMolarAnteroPosterior
    observacao?: StringFilter | string
    arquivado?: BoolFilter | boolean
  }

  export type AvaliacaoSocioEconomicaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: AvaliacaoSocioEconomicaWhereUniqueInput
    update: XOR<AvaliacaoSocioEconomicaUpdateWithoutUsuarioInput, AvaliacaoSocioEconomicaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<AvaliacaoSocioEconomicaCreateWithoutUsuarioInput, AvaliacaoSocioEconomicaUncheckedCreateWithoutUsuarioInput>
  }

  export type AvaliacaoSocioEconomicaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: AvaliacaoSocioEconomicaWhereUniqueInput
    data: XOR<AvaliacaoSocioEconomicaUpdateWithoutUsuarioInput, AvaliacaoSocioEconomicaUncheckedUpdateWithoutUsuarioInput>
  }

  export type AvaliacaoSocioEconomicaUpdateManyWithWhereWithoutUsuarioInput = {
    where: AvaliacaoSocioEconomicaScalarWhereInput
    data: XOR<AvaliacaoSocioEconomicaUpdateManyMutationInput, AvaliacaoSocioEconomicaUncheckedUpdateManyWithoutAvaliacaoSocioEconomicaInput>
  }

  export type AvaliacaoSocioEconomicaScalarWhereInput = {
    AND?: Enumerable<AvaliacaoSocioEconomicaScalarWhereInput>
    OR?: Enumerable<AvaliacaoSocioEconomicaScalarWhereInput>
    NOT?: Enumerable<AvaliacaoSocioEconomicaScalarWhereInput>
    id?: IntFilter | number
    idData?: IntFilter | number
    idPessoa?: IntFilter | number
    idLocal?: IntFilter | number
    idUsuario?: IntFilter | number
    qtdPessoasResidencia?: IntFilter | number
    qtdComodosDormitorio?: IntFilter | number
    qtdBens?: IntFilter | number
    qtdTotalRendaUltimoMes?: IntFilter | number
    escolaridadeMae?: EnumEscolaridadeFilter | Escolaridade
    escolaridadePai?: EnumEscolaridadeFilter | Escolaridade
    recebeBeneficioSocial?: BoolNullableFilter | boolean | null
    filhoDorDente6Meses?: BoolNullableFilter | boolean | null
    filhoNivelDor?: IntFilter | number
    filhoVisitouDentista?: BoolNullableFilter | boolean | null
    filhoUltimaConsulta?: EnumUltimaConsultaFilter | UltimaConsulta
    filhoLocalConsulta?: EnumLocalConsultaFilter | LocalConsulta
    motivoUltimaConsulta?: EnumMotivoUltimaConsultaFilter | MotivoUltimaConsulta
    avaliacaoUltimaConsulta?: EnumAvaliacaoUltimaConsultaFilter | AvaliacaoUltimaConsulta
    filhoAvaliacaoBucal?: EnumAvaliacaoBucalFilter | AvaliacaoBucal
    filhoQtdEscovacoesPorDia?: EnumFilhoQtdEscovacoesPorDiaFilter | FilhoQtdEscovacoesPorDia
    frequenciaTrocaEscovas?: EnumFrequenciaTrocaEscovasFilter | FrequenciaTrocaEscovas
    usaFioDental?: BoolFilter | boolean
    usaPastaComFluor?: BoolFilter | boolean
    arquivado?: BoolFilter | boolean
  }

  export type MarcadorConsumoAlimentarUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: MarcadorConsumoAlimentarWhereUniqueInput
    update: XOR<MarcadorConsumoAlimentarUpdateWithoutUsuarioInput, MarcadorConsumoAlimentarUncheckedUpdateWithoutUsuarioInput>
    create: XOR<MarcadorConsumoAlimentarCreateWithoutUsuarioInput, MarcadorConsumoAlimentarUncheckedCreateWithoutUsuarioInput>
  }

  export type MarcadorConsumoAlimentarUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: MarcadorConsumoAlimentarWhereUniqueInput
    data: XOR<MarcadorConsumoAlimentarUpdateWithoutUsuarioInput, MarcadorConsumoAlimentarUncheckedUpdateWithoutUsuarioInput>
  }

  export type MarcadorConsumoAlimentarUpdateManyWithWhereWithoutUsuarioInput = {
    where: MarcadorConsumoAlimentarScalarWhereInput
    data: XOR<MarcadorConsumoAlimentarUpdateManyMutationInput, MarcadorConsumoAlimentarUncheckedUpdateManyWithoutMarcadorConsumoAlimentarInput>
  }

  export type MarcadorConsumoAlimentarScalarWhereInput = {
    AND?: Enumerable<MarcadorConsumoAlimentarScalarWhereInput>
    OR?: Enumerable<MarcadorConsumoAlimentarScalarWhereInput>
    NOT?: Enumerable<MarcadorConsumoAlimentarScalarWhereInput>
    id?: IntFilter | number
    idData?: IntFilter | number
    idPessoa?: IntFilter | number
    idUsuario?: IntFilter | number
    idLocal?: IntFilter | number
    saladaCrua?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFilter | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    legumesVerdurasCozidos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFilter | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    frutasFrescasSaladaDeFrutas?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFilter | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    feijao?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFilter | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    leiteOuIogurte?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFilter | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    batataFritaBatataDePacoteSalgadosFritos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFilter | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    hamburgerEmbutidos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFilter | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosSalgadosSalgadinhoDePacote?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFilter | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFilter | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    refrigerante?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFilter | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  }

  export type EquipeUpsertWithoutCoordenadorInput = {
    update: XOR<EquipeUpdateWithoutCoordenadorInput, EquipeUncheckedUpdateWithoutCoordenadorInput>
    create: XOR<EquipeCreateWithoutCoordenadorInput, EquipeUncheckedCreateWithoutCoordenadorInput>
  }

  export type EquipeUpdateWithoutCoordenadorInput = {
    integrantes?: UsuarioUpdateManyWithoutPertenceEquipeInput
  }

  export type EquipeUncheckedUpdateWithoutCoordenadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    integrantes?: UsuarioUncheckedUpdateManyWithoutPertenceEquipeInput
  }

  export type EquipeUpsertWithoutIntegrantesInput = {
    update: XOR<EquipeUpdateWithoutIntegrantesInput, EquipeUncheckedUpdateWithoutIntegrantesInput>
    create: XOR<EquipeCreateWithoutIntegrantesInput, EquipeUncheckedCreateWithoutIntegrantesInput>
  }

  export type EquipeUpdateWithoutIntegrantesInput = {
    coordenador?: UsuarioUpdateOneRequiredWithoutCoordenaEquipeInput
  }

  export type EquipeUncheckedUpdateWithoutIntegrantesInput = {
    id?: IntFieldUpdateOperationsInput | number
    idCoordenador?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioCreateWithoutCoordenaEquipeInput = {
    nome?: string | null
    email: string
    senha: string
    ativo?: boolean
    papel: Papel
    exames?: ExameCreateNestedManyWithoutUsuarioInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaCreateNestedManyWithoutUsuarioInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarCreateNestedManyWithoutUsuarioInput
    pertenceEquipe?: EquipeCreateNestedOneWithoutIntegrantesInput
  }

  export type UsuarioUncheckedCreateWithoutCoordenaEquipeInput = {
    id?: number
    nome?: string | null
    email: string
    senha: string
    ativo?: boolean
    papel: Papel
    exames?: ExameUncheckedCreateNestedManyWithoutUsuarioInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaUncheckedCreateNestedManyWithoutUsuarioInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarUncheckedCreateNestedManyWithoutUsuarioInput
    idPertenceEquipe?: number | null
  }

  export type UsuarioCreateOrConnectWithoutCoordenaEquipeInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutCoordenaEquipeInput, UsuarioUncheckedCreateWithoutCoordenaEquipeInput>
  }

  export type UsuarioCreateWithoutPertenceEquipeInput = {
    nome?: string | null
    email: string
    senha: string
    ativo?: boolean
    papel: Papel
    exames?: ExameCreateNestedManyWithoutUsuarioInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaCreateNestedManyWithoutUsuarioInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarCreateNestedManyWithoutUsuarioInput
    coordenaEquipe?: EquipeCreateNestedOneWithoutCoordenadorInput
  }

  export type UsuarioUncheckedCreateWithoutPertenceEquipeInput = {
    id?: number
    nome?: string | null
    email: string
    senha: string
    ativo?: boolean
    papel: Papel
    exames?: ExameUncheckedCreateNestedManyWithoutUsuarioInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaUncheckedCreateNestedManyWithoutUsuarioInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarUncheckedCreateNestedManyWithoutUsuarioInput
    coordenaEquipe?: EquipeUncheckedCreateNestedOneWithoutCoordenadorInput
  }

  export type UsuarioCreateOrConnectWithoutPertenceEquipeInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPertenceEquipeInput, UsuarioUncheckedCreateWithoutPertenceEquipeInput>
  }

  export type UsuarioCreateManyPertenceEquipeInputEnvelope = {
    data: Enumerable<UsuarioCreateManyPertenceEquipeInput>
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutCoordenaEquipeInput = {
    update: XOR<UsuarioUpdateWithoutCoordenaEquipeInput, UsuarioUncheckedUpdateWithoutCoordenaEquipeInput>
    create: XOR<UsuarioCreateWithoutCoordenaEquipeInput, UsuarioUncheckedCreateWithoutCoordenaEquipeInput>
  }

  export type UsuarioUpdateWithoutCoordenaEquipeInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    papel?: EnumPapelFieldUpdateOperationsInput | Papel
    exames?: ExameUpdateManyWithoutUsuarioInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaUpdateManyWithoutUsuarioInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarUpdateManyWithoutUsuarioInput
    pertenceEquipe?: EquipeUpdateOneWithoutIntegrantesInput
  }

  export type UsuarioUncheckedUpdateWithoutCoordenaEquipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    papel?: EnumPapelFieldUpdateOperationsInput | Papel
    exames?: ExameUncheckedUpdateManyWithoutUsuarioInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaUncheckedUpdateManyWithoutUsuarioInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarUncheckedUpdateManyWithoutUsuarioInput
    idPertenceEquipe?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UsuarioUpsertWithWhereUniqueWithoutPertenceEquipeInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutPertenceEquipeInput, UsuarioUncheckedUpdateWithoutPertenceEquipeInput>
    create: XOR<UsuarioCreateWithoutPertenceEquipeInput, UsuarioUncheckedCreateWithoutPertenceEquipeInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutPertenceEquipeInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutPertenceEquipeInput, UsuarioUncheckedUpdateWithoutPertenceEquipeInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutPertenceEquipeInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutIntegrantesInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: Enumerable<UsuarioScalarWhereInput>
    OR?: Enumerable<UsuarioScalarWhereInput>
    NOT?: Enumerable<UsuarioScalarWhereInput>
    id?: IntFilter | number
    nome?: StringNullableFilter | string | null
    email?: StringFilter | string
    senha?: StringFilter | string
    ativo?: BoolFilter | boolean
    papel?: EnumPapelFilter | Papel
    idPertenceEquipe?: IntNullableFilter | number | null
  }

  export type ExameCreateWithoutDataInput = {
    pessoa: PessoaCreateNestedOneWithoutExamesInput
    condicaoPeriodontal?: CondicaoPeriodontalCreateNestedOneWithoutExameInput
    local: LocalCreateNestedOneWithoutExamesInput
    usuario: UsuarioCreateNestedOneWithoutExamesInput
    traumatismoDentario?: TraumatismoDentarioCreateNestedOneWithoutExameInput
    marcadorConsumoAlimentar: MarcadorConsumoAlimentarCreateNestedOneWithoutExameInput
    fluoroseDentaria: FluoroseDentaria
    overjetMaxilarAnterior: number
    overjetMandibularAnterior: number
    mordidaAbertaVerticalAnterior: number
    relacaoMolarAnteroPosterior: RelacaoMolarAnteroPosterior
    observacao: string
    dentes?: DenteCreateNestedManyWithoutExameInput
    Soho?: SohoCreateNestedOneWithoutExameInput
    CPQ?: CPQCreateNestedOneWithoutExameInput
    arquivado?: boolean
  }

  export type ExameUncheckedCreateWithoutDataInput = {
    id?: number
    idPessoa: number
    idCondicaoPeriodontal?: number | null
    idLocal: number
    idUsuario: number
    idTraumatismoDentario?: number | null
    idMarcadorConsumoAlimentar: number
    fluoroseDentaria: FluoroseDentaria
    overjetMaxilarAnterior: number
    overjetMandibularAnterior: number
    mordidaAbertaVerticalAnterior: number
    relacaoMolarAnteroPosterior: RelacaoMolarAnteroPosterior
    observacao: string
    dentes?: DenteUncheckedCreateNestedManyWithoutExameInput
    Soho?: SohoUncheckedCreateNestedOneWithoutExameInput
    CPQ?: CPQUncheckedCreateNestedOneWithoutExameInput
    arquivado?: boolean
  }

  export type ExameCreateOrConnectWithoutDataInput = {
    where: ExameWhereUniqueInput
    create: XOR<ExameCreateWithoutDataInput, ExameUncheckedCreateWithoutDataInput>
  }

  export type ExameCreateManyDataInputEnvelope = {
    data: Enumerable<ExameCreateManyDataInput>
    skipDuplicates?: boolean
  }

  export type AvaliacaoSocioEconomicaCreateWithoutDataInput = {
    pessoa: PessoaCreateNestedOneWithoutAvaliacaoSocioEconomicaInput
    local: LocalCreateNestedOneWithoutAvaliacaoSocioEconomicaInput
    usuario: UsuarioCreateNestedOneWithoutAvaliacaoSocioEconomicaInput
    qtdPessoasResidencia: number
    qtdComodosDormitorio: number
    qtdBens: number
    qtdTotalRendaUltimoMes: number
    escolaridadeMae: Escolaridade
    escolaridadePai: Escolaridade
    recebeBeneficioSocial?: boolean | null
    filhoDorDente6Meses?: boolean | null
    filhoNivelDor: number
    filhoVisitouDentista?: boolean | null
    filhoUltimaConsulta: UltimaConsulta
    filhoLocalConsulta: LocalConsulta
    motivoUltimaConsulta: MotivoUltimaConsulta
    avaliacaoUltimaConsulta: AvaliacaoUltimaConsulta
    filhoAvaliacaoBucal: AvaliacaoBucal
    filhoQtdEscovacoesPorDia: FilhoQtdEscovacoesPorDia
    frequenciaTrocaEscovas: FrequenciaTrocaEscovas
    usaFioDental: boolean
    usaPastaComFluor: boolean
    arquivado?: boolean
  }

  export type AvaliacaoSocioEconomicaUncheckedCreateWithoutDataInput = {
    id?: number
    idPessoa: number
    idLocal: number
    idUsuario: number
    qtdPessoasResidencia: number
    qtdComodosDormitorio: number
    qtdBens: number
    qtdTotalRendaUltimoMes: number
    escolaridadeMae: Escolaridade
    escolaridadePai: Escolaridade
    recebeBeneficioSocial?: boolean | null
    filhoDorDente6Meses?: boolean | null
    filhoNivelDor: number
    filhoVisitouDentista?: boolean | null
    filhoUltimaConsulta: UltimaConsulta
    filhoLocalConsulta: LocalConsulta
    motivoUltimaConsulta: MotivoUltimaConsulta
    avaliacaoUltimaConsulta: AvaliacaoUltimaConsulta
    filhoAvaliacaoBucal: AvaliacaoBucal
    filhoQtdEscovacoesPorDia: FilhoQtdEscovacoesPorDia
    frequenciaTrocaEscovas: FrequenciaTrocaEscovas
    usaFioDental: boolean
    usaPastaComFluor: boolean
    arquivado?: boolean
  }

  export type AvaliacaoSocioEconomicaCreateOrConnectWithoutDataInput = {
    where: AvaliacaoSocioEconomicaWhereUniqueInput
    create: XOR<AvaliacaoSocioEconomicaCreateWithoutDataInput, AvaliacaoSocioEconomicaUncheckedCreateWithoutDataInput>
  }

  export type AvaliacaoSocioEconomicaCreateManyDataInputEnvelope = {
    data: Enumerable<AvaliacaoSocioEconomicaCreateManyDataInput>
    skipDuplicates?: boolean
  }

  export type MarcadorConsumoAlimentarCreateWithoutDataInput = {
    pessoa: PessoaCreateNestedOneWithoutMarcadorConsumoAlimentarInput
    usuario: UsuarioCreateNestedOneWithoutMarcadorConsumoAlimentarInput
    local: LocalCreateNestedOneWithoutMarcadorConsumoAlimentarInput
    exame?: ExameCreateNestedOneWithoutMarcadorConsumoAlimentarInput
    saladaCrua: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    legumesVerdurasCozidos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    frutasFrescasSaladaDeFrutas: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    feijao: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    leiteOuIogurte: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    batataFritaBatataDePacoteSalgadosFritos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    hamburgerEmbutidos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosSalgadosSalgadinhoDePacote: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    refrigerante: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  }

  export type MarcadorConsumoAlimentarUncheckedCreateWithoutDataInput = {
    id?: number
    idPessoa: number
    idUsuario: number
    idLocal: number
    exame?: ExameUncheckedCreateNestedOneWithoutMarcadorConsumoAlimentarInput
    saladaCrua: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    legumesVerdurasCozidos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    frutasFrescasSaladaDeFrutas: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    feijao: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    leiteOuIogurte: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    batataFritaBatataDePacoteSalgadosFritos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    hamburgerEmbutidos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosSalgadosSalgadinhoDePacote: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    refrigerante: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  }

  export type MarcadorConsumoAlimentarCreateOrConnectWithoutDataInput = {
    where: MarcadorConsumoAlimentarWhereUniqueInput
    create: XOR<MarcadorConsumoAlimentarCreateWithoutDataInput, MarcadorConsumoAlimentarUncheckedCreateWithoutDataInput>
  }

  export type MarcadorConsumoAlimentarCreateManyDataInputEnvelope = {
    data: Enumerable<MarcadorConsumoAlimentarCreateManyDataInput>
    skipDuplicates?: boolean
  }

  export type ExameUpsertWithWhereUniqueWithoutDataInput = {
    where: ExameWhereUniqueInput
    update: XOR<ExameUpdateWithoutDataInput, ExameUncheckedUpdateWithoutDataInput>
    create: XOR<ExameCreateWithoutDataInput, ExameUncheckedCreateWithoutDataInput>
  }

  export type ExameUpdateWithWhereUniqueWithoutDataInput = {
    where: ExameWhereUniqueInput
    data: XOR<ExameUpdateWithoutDataInput, ExameUncheckedUpdateWithoutDataInput>
  }

  export type ExameUpdateManyWithWhereWithoutDataInput = {
    where: ExameScalarWhereInput
    data: XOR<ExameUpdateManyMutationInput, ExameUncheckedUpdateManyWithoutExamesInput>
  }

  export type AvaliacaoSocioEconomicaUpsertWithWhereUniqueWithoutDataInput = {
    where: AvaliacaoSocioEconomicaWhereUniqueInput
    update: XOR<AvaliacaoSocioEconomicaUpdateWithoutDataInput, AvaliacaoSocioEconomicaUncheckedUpdateWithoutDataInput>
    create: XOR<AvaliacaoSocioEconomicaCreateWithoutDataInput, AvaliacaoSocioEconomicaUncheckedCreateWithoutDataInput>
  }

  export type AvaliacaoSocioEconomicaUpdateWithWhereUniqueWithoutDataInput = {
    where: AvaliacaoSocioEconomicaWhereUniqueInput
    data: XOR<AvaliacaoSocioEconomicaUpdateWithoutDataInput, AvaliacaoSocioEconomicaUncheckedUpdateWithoutDataInput>
  }

  export type AvaliacaoSocioEconomicaUpdateManyWithWhereWithoutDataInput = {
    where: AvaliacaoSocioEconomicaScalarWhereInput
    data: XOR<AvaliacaoSocioEconomicaUpdateManyMutationInput, AvaliacaoSocioEconomicaUncheckedUpdateManyWithoutAvaliacaoSocioEconomicaInput>
  }

  export type MarcadorConsumoAlimentarUpsertWithWhereUniqueWithoutDataInput = {
    where: MarcadorConsumoAlimentarWhereUniqueInput
    update: XOR<MarcadorConsumoAlimentarUpdateWithoutDataInput, MarcadorConsumoAlimentarUncheckedUpdateWithoutDataInput>
    create: XOR<MarcadorConsumoAlimentarCreateWithoutDataInput, MarcadorConsumoAlimentarUncheckedCreateWithoutDataInput>
  }

  export type MarcadorConsumoAlimentarUpdateWithWhereUniqueWithoutDataInput = {
    where: MarcadorConsumoAlimentarWhereUniqueInput
    data: XOR<MarcadorConsumoAlimentarUpdateWithoutDataInput, MarcadorConsumoAlimentarUncheckedUpdateWithoutDataInput>
  }

  export type MarcadorConsumoAlimentarUpdateManyWithWhereWithoutDataInput = {
    where: MarcadorConsumoAlimentarScalarWhereInput
    data: XOR<MarcadorConsumoAlimentarUpdateManyMutationInput, MarcadorConsumoAlimentarUncheckedUpdateManyWithoutMarcadorConsumoAlimentarInput>
  }

  export type ExameCreateWithoutPessoaInput = {
    data: DataCreateNestedOneWithoutExamesInput
    condicaoPeriodontal?: CondicaoPeriodontalCreateNestedOneWithoutExameInput
    local: LocalCreateNestedOneWithoutExamesInput
    usuario: UsuarioCreateNestedOneWithoutExamesInput
    traumatismoDentario?: TraumatismoDentarioCreateNestedOneWithoutExameInput
    marcadorConsumoAlimentar: MarcadorConsumoAlimentarCreateNestedOneWithoutExameInput
    fluoroseDentaria: FluoroseDentaria
    overjetMaxilarAnterior: number
    overjetMandibularAnterior: number
    mordidaAbertaVerticalAnterior: number
    relacaoMolarAnteroPosterior: RelacaoMolarAnteroPosterior
    observacao: string
    dentes?: DenteCreateNestedManyWithoutExameInput
    Soho?: SohoCreateNestedOneWithoutExameInput
    CPQ?: CPQCreateNestedOneWithoutExameInput
    arquivado?: boolean
  }

  export type ExameUncheckedCreateWithoutPessoaInput = {
    id?: number
    idData: number
    idCondicaoPeriodontal?: number | null
    idLocal: number
    idUsuario: number
    idTraumatismoDentario?: number | null
    idMarcadorConsumoAlimentar: number
    fluoroseDentaria: FluoroseDentaria
    overjetMaxilarAnterior: number
    overjetMandibularAnterior: number
    mordidaAbertaVerticalAnterior: number
    relacaoMolarAnteroPosterior: RelacaoMolarAnteroPosterior
    observacao: string
    dentes?: DenteUncheckedCreateNestedManyWithoutExameInput
    Soho?: SohoUncheckedCreateNestedOneWithoutExameInput
    CPQ?: CPQUncheckedCreateNestedOneWithoutExameInput
    arquivado?: boolean
  }

  export type ExameCreateOrConnectWithoutPessoaInput = {
    where: ExameWhereUniqueInput
    create: XOR<ExameCreateWithoutPessoaInput, ExameUncheckedCreateWithoutPessoaInput>
  }

  export type ExameCreateManyPessoaInputEnvelope = {
    data: Enumerable<ExameCreateManyPessoaInput>
    skipDuplicates?: boolean
  }

  export type AvaliacaoSocioEconomicaCreateWithoutPessoaInput = {
    data: DataCreateNestedOneWithoutAvaliacaoSocioEconomicaInput
    local: LocalCreateNestedOneWithoutAvaliacaoSocioEconomicaInput
    usuario: UsuarioCreateNestedOneWithoutAvaliacaoSocioEconomicaInput
    qtdPessoasResidencia: number
    qtdComodosDormitorio: number
    qtdBens: number
    qtdTotalRendaUltimoMes: number
    escolaridadeMae: Escolaridade
    escolaridadePai: Escolaridade
    recebeBeneficioSocial?: boolean | null
    filhoDorDente6Meses?: boolean | null
    filhoNivelDor: number
    filhoVisitouDentista?: boolean | null
    filhoUltimaConsulta: UltimaConsulta
    filhoLocalConsulta: LocalConsulta
    motivoUltimaConsulta: MotivoUltimaConsulta
    avaliacaoUltimaConsulta: AvaliacaoUltimaConsulta
    filhoAvaliacaoBucal: AvaliacaoBucal
    filhoQtdEscovacoesPorDia: FilhoQtdEscovacoesPorDia
    frequenciaTrocaEscovas: FrequenciaTrocaEscovas
    usaFioDental: boolean
    usaPastaComFluor: boolean
    arquivado?: boolean
  }

  export type AvaliacaoSocioEconomicaUncheckedCreateWithoutPessoaInput = {
    id?: number
    idData: number
    idLocal: number
    idUsuario: number
    qtdPessoasResidencia: number
    qtdComodosDormitorio: number
    qtdBens: number
    qtdTotalRendaUltimoMes: number
    escolaridadeMae: Escolaridade
    escolaridadePai: Escolaridade
    recebeBeneficioSocial?: boolean | null
    filhoDorDente6Meses?: boolean | null
    filhoNivelDor: number
    filhoVisitouDentista?: boolean | null
    filhoUltimaConsulta: UltimaConsulta
    filhoLocalConsulta: LocalConsulta
    motivoUltimaConsulta: MotivoUltimaConsulta
    avaliacaoUltimaConsulta: AvaliacaoUltimaConsulta
    filhoAvaliacaoBucal: AvaliacaoBucal
    filhoQtdEscovacoesPorDia: FilhoQtdEscovacoesPorDia
    frequenciaTrocaEscovas: FrequenciaTrocaEscovas
    usaFioDental: boolean
    usaPastaComFluor: boolean
    arquivado?: boolean
  }

  export type AvaliacaoSocioEconomicaCreateOrConnectWithoutPessoaInput = {
    where: AvaliacaoSocioEconomicaWhereUniqueInput
    create: XOR<AvaliacaoSocioEconomicaCreateWithoutPessoaInput, AvaliacaoSocioEconomicaUncheckedCreateWithoutPessoaInput>
  }

  export type AvaliacaoSocioEconomicaCreateManyPessoaInputEnvelope = {
    data: Enumerable<AvaliacaoSocioEconomicaCreateManyPessoaInput>
    skipDuplicates?: boolean
  }

  export type MarcadorConsumoAlimentarCreateWithoutPessoaInput = {
    data: DataCreateNestedOneWithoutMarcadorConsumoAlimentarInput
    usuario: UsuarioCreateNestedOneWithoutMarcadorConsumoAlimentarInput
    local: LocalCreateNestedOneWithoutMarcadorConsumoAlimentarInput
    exame?: ExameCreateNestedOneWithoutMarcadorConsumoAlimentarInput
    saladaCrua: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    legumesVerdurasCozidos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    frutasFrescasSaladaDeFrutas: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    feijao: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    leiteOuIogurte: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    batataFritaBatataDePacoteSalgadosFritos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    hamburgerEmbutidos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosSalgadosSalgadinhoDePacote: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    refrigerante: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  }

  export type MarcadorConsumoAlimentarUncheckedCreateWithoutPessoaInput = {
    id?: number
    idData: number
    idUsuario: number
    idLocal: number
    exame?: ExameUncheckedCreateNestedOneWithoutMarcadorConsumoAlimentarInput
    saladaCrua: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    legumesVerdurasCozidos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    frutasFrescasSaladaDeFrutas: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    feijao: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    leiteOuIogurte: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    batataFritaBatataDePacoteSalgadosFritos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    hamburgerEmbutidos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosSalgadosSalgadinhoDePacote: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    refrigerante: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  }

  export type MarcadorConsumoAlimentarCreateOrConnectWithoutPessoaInput = {
    where: MarcadorConsumoAlimentarWhereUniqueInput
    create: XOR<MarcadorConsumoAlimentarCreateWithoutPessoaInput, MarcadorConsumoAlimentarUncheckedCreateWithoutPessoaInput>
  }

  export type MarcadorConsumoAlimentarCreateManyPessoaInputEnvelope = {
    data: Enumerable<MarcadorConsumoAlimentarCreateManyPessoaInput>
    skipDuplicates?: boolean
  }

  export type ExameUpsertWithWhereUniqueWithoutPessoaInput = {
    where: ExameWhereUniqueInput
    update: XOR<ExameUpdateWithoutPessoaInput, ExameUncheckedUpdateWithoutPessoaInput>
    create: XOR<ExameCreateWithoutPessoaInput, ExameUncheckedCreateWithoutPessoaInput>
  }

  export type ExameUpdateWithWhereUniqueWithoutPessoaInput = {
    where: ExameWhereUniqueInput
    data: XOR<ExameUpdateWithoutPessoaInput, ExameUncheckedUpdateWithoutPessoaInput>
  }

  export type ExameUpdateManyWithWhereWithoutPessoaInput = {
    where: ExameScalarWhereInput
    data: XOR<ExameUpdateManyMutationInput, ExameUncheckedUpdateManyWithoutExamesInput>
  }

  export type AvaliacaoSocioEconomicaUpsertWithWhereUniqueWithoutPessoaInput = {
    where: AvaliacaoSocioEconomicaWhereUniqueInput
    update: XOR<AvaliacaoSocioEconomicaUpdateWithoutPessoaInput, AvaliacaoSocioEconomicaUncheckedUpdateWithoutPessoaInput>
    create: XOR<AvaliacaoSocioEconomicaCreateWithoutPessoaInput, AvaliacaoSocioEconomicaUncheckedCreateWithoutPessoaInput>
  }

  export type AvaliacaoSocioEconomicaUpdateWithWhereUniqueWithoutPessoaInput = {
    where: AvaliacaoSocioEconomicaWhereUniqueInput
    data: XOR<AvaliacaoSocioEconomicaUpdateWithoutPessoaInput, AvaliacaoSocioEconomicaUncheckedUpdateWithoutPessoaInput>
  }

  export type AvaliacaoSocioEconomicaUpdateManyWithWhereWithoutPessoaInput = {
    where: AvaliacaoSocioEconomicaScalarWhereInput
    data: XOR<AvaliacaoSocioEconomicaUpdateManyMutationInput, AvaliacaoSocioEconomicaUncheckedUpdateManyWithoutAvaliacaoSocioEconomicaInput>
  }

  export type MarcadorConsumoAlimentarUpsertWithWhereUniqueWithoutPessoaInput = {
    where: MarcadorConsumoAlimentarWhereUniqueInput
    update: XOR<MarcadorConsumoAlimentarUpdateWithoutPessoaInput, MarcadorConsumoAlimentarUncheckedUpdateWithoutPessoaInput>
    create: XOR<MarcadorConsumoAlimentarCreateWithoutPessoaInput, MarcadorConsumoAlimentarUncheckedCreateWithoutPessoaInput>
  }

  export type MarcadorConsumoAlimentarUpdateWithWhereUniqueWithoutPessoaInput = {
    where: MarcadorConsumoAlimentarWhereUniqueInput
    data: XOR<MarcadorConsumoAlimentarUpdateWithoutPessoaInput, MarcadorConsumoAlimentarUncheckedUpdateWithoutPessoaInput>
  }

  export type MarcadorConsumoAlimentarUpdateManyWithWhereWithoutPessoaInput = {
    where: MarcadorConsumoAlimentarScalarWhereInput
    data: XOR<MarcadorConsumoAlimentarUpdateManyMutationInput, MarcadorConsumoAlimentarUncheckedUpdateManyWithoutMarcadorConsumoAlimentarInput>
  }

  export type ExameCreateWithoutLocalInput = {
    data: DataCreateNestedOneWithoutExamesInput
    pessoa: PessoaCreateNestedOneWithoutExamesInput
    condicaoPeriodontal?: CondicaoPeriodontalCreateNestedOneWithoutExameInput
    usuario: UsuarioCreateNestedOneWithoutExamesInput
    traumatismoDentario?: TraumatismoDentarioCreateNestedOneWithoutExameInput
    marcadorConsumoAlimentar: MarcadorConsumoAlimentarCreateNestedOneWithoutExameInput
    fluoroseDentaria: FluoroseDentaria
    overjetMaxilarAnterior: number
    overjetMandibularAnterior: number
    mordidaAbertaVerticalAnterior: number
    relacaoMolarAnteroPosterior: RelacaoMolarAnteroPosterior
    observacao: string
    dentes?: DenteCreateNestedManyWithoutExameInput
    Soho?: SohoCreateNestedOneWithoutExameInput
    CPQ?: CPQCreateNestedOneWithoutExameInput
    arquivado?: boolean
  }

  export type ExameUncheckedCreateWithoutLocalInput = {
    id?: number
    idData: number
    idPessoa: number
    idCondicaoPeriodontal?: number | null
    idUsuario: number
    idTraumatismoDentario?: number | null
    idMarcadorConsumoAlimentar: number
    fluoroseDentaria: FluoroseDentaria
    overjetMaxilarAnterior: number
    overjetMandibularAnterior: number
    mordidaAbertaVerticalAnterior: number
    relacaoMolarAnteroPosterior: RelacaoMolarAnteroPosterior
    observacao: string
    dentes?: DenteUncheckedCreateNestedManyWithoutExameInput
    Soho?: SohoUncheckedCreateNestedOneWithoutExameInput
    CPQ?: CPQUncheckedCreateNestedOneWithoutExameInput
    arquivado?: boolean
  }

  export type ExameCreateOrConnectWithoutLocalInput = {
    where: ExameWhereUniqueInput
    create: XOR<ExameCreateWithoutLocalInput, ExameUncheckedCreateWithoutLocalInput>
  }

  export type ExameCreateManyLocalInputEnvelope = {
    data: Enumerable<ExameCreateManyLocalInput>
    skipDuplicates?: boolean
  }

  export type AvaliacaoSocioEconomicaCreateWithoutLocalInput = {
    data: DataCreateNestedOneWithoutAvaliacaoSocioEconomicaInput
    pessoa: PessoaCreateNestedOneWithoutAvaliacaoSocioEconomicaInput
    usuario: UsuarioCreateNestedOneWithoutAvaliacaoSocioEconomicaInput
    qtdPessoasResidencia: number
    qtdComodosDormitorio: number
    qtdBens: number
    qtdTotalRendaUltimoMes: number
    escolaridadeMae: Escolaridade
    escolaridadePai: Escolaridade
    recebeBeneficioSocial?: boolean | null
    filhoDorDente6Meses?: boolean | null
    filhoNivelDor: number
    filhoVisitouDentista?: boolean | null
    filhoUltimaConsulta: UltimaConsulta
    filhoLocalConsulta: LocalConsulta
    motivoUltimaConsulta: MotivoUltimaConsulta
    avaliacaoUltimaConsulta: AvaliacaoUltimaConsulta
    filhoAvaliacaoBucal: AvaliacaoBucal
    filhoQtdEscovacoesPorDia: FilhoQtdEscovacoesPorDia
    frequenciaTrocaEscovas: FrequenciaTrocaEscovas
    usaFioDental: boolean
    usaPastaComFluor: boolean
    arquivado?: boolean
  }

  export type AvaliacaoSocioEconomicaUncheckedCreateWithoutLocalInput = {
    id?: number
    idData: number
    idPessoa: number
    idUsuario: number
    qtdPessoasResidencia: number
    qtdComodosDormitorio: number
    qtdBens: number
    qtdTotalRendaUltimoMes: number
    escolaridadeMae: Escolaridade
    escolaridadePai: Escolaridade
    recebeBeneficioSocial?: boolean | null
    filhoDorDente6Meses?: boolean | null
    filhoNivelDor: number
    filhoVisitouDentista?: boolean | null
    filhoUltimaConsulta: UltimaConsulta
    filhoLocalConsulta: LocalConsulta
    motivoUltimaConsulta: MotivoUltimaConsulta
    avaliacaoUltimaConsulta: AvaliacaoUltimaConsulta
    filhoAvaliacaoBucal: AvaliacaoBucal
    filhoQtdEscovacoesPorDia: FilhoQtdEscovacoesPorDia
    frequenciaTrocaEscovas: FrequenciaTrocaEscovas
    usaFioDental: boolean
    usaPastaComFluor: boolean
    arquivado?: boolean
  }

  export type AvaliacaoSocioEconomicaCreateOrConnectWithoutLocalInput = {
    where: AvaliacaoSocioEconomicaWhereUniqueInput
    create: XOR<AvaliacaoSocioEconomicaCreateWithoutLocalInput, AvaliacaoSocioEconomicaUncheckedCreateWithoutLocalInput>
  }

  export type AvaliacaoSocioEconomicaCreateManyLocalInputEnvelope = {
    data: Enumerable<AvaliacaoSocioEconomicaCreateManyLocalInput>
    skipDuplicates?: boolean
  }

  export type MarcadorConsumoAlimentarCreateWithoutLocalInput = {
    data: DataCreateNestedOneWithoutMarcadorConsumoAlimentarInput
    pessoa: PessoaCreateNestedOneWithoutMarcadorConsumoAlimentarInput
    usuario: UsuarioCreateNestedOneWithoutMarcadorConsumoAlimentarInput
    exame?: ExameCreateNestedOneWithoutMarcadorConsumoAlimentarInput
    saladaCrua: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    legumesVerdurasCozidos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    frutasFrescasSaladaDeFrutas: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    feijao: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    leiteOuIogurte: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    batataFritaBatataDePacoteSalgadosFritos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    hamburgerEmbutidos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosSalgadosSalgadinhoDePacote: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    refrigerante: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  }

  export type MarcadorConsumoAlimentarUncheckedCreateWithoutLocalInput = {
    id?: number
    idData: number
    idPessoa: number
    idUsuario: number
    exame?: ExameUncheckedCreateNestedOneWithoutMarcadorConsumoAlimentarInput
    saladaCrua: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    legumesVerdurasCozidos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    frutasFrescasSaladaDeFrutas: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    feijao: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    leiteOuIogurte: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    batataFritaBatataDePacoteSalgadosFritos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    hamburgerEmbutidos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosSalgadosSalgadinhoDePacote: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    refrigerante: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  }

  export type MarcadorConsumoAlimentarCreateOrConnectWithoutLocalInput = {
    where: MarcadorConsumoAlimentarWhereUniqueInput
    create: XOR<MarcadorConsumoAlimentarCreateWithoutLocalInput, MarcadorConsumoAlimentarUncheckedCreateWithoutLocalInput>
  }

  export type MarcadorConsumoAlimentarCreateManyLocalInputEnvelope = {
    data: Enumerable<MarcadorConsumoAlimentarCreateManyLocalInput>
    skipDuplicates?: boolean
  }

  export type ExameUpsertWithWhereUniqueWithoutLocalInput = {
    where: ExameWhereUniqueInput
    update: XOR<ExameUpdateWithoutLocalInput, ExameUncheckedUpdateWithoutLocalInput>
    create: XOR<ExameCreateWithoutLocalInput, ExameUncheckedCreateWithoutLocalInput>
  }

  export type ExameUpdateWithWhereUniqueWithoutLocalInput = {
    where: ExameWhereUniqueInput
    data: XOR<ExameUpdateWithoutLocalInput, ExameUncheckedUpdateWithoutLocalInput>
  }

  export type ExameUpdateManyWithWhereWithoutLocalInput = {
    where: ExameScalarWhereInput
    data: XOR<ExameUpdateManyMutationInput, ExameUncheckedUpdateManyWithoutExamesInput>
  }

  export type AvaliacaoSocioEconomicaUpsertWithWhereUniqueWithoutLocalInput = {
    where: AvaliacaoSocioEconomicaWhereUniqueInput
    update: XOR<AvaliacaoSocioEconomicaUpdateWithoutLocalInput, AvaliacaoSocioEconomicaUncheckedUpdateWithoutLocalInput>
    create: XOR<AvaliacaoSocioEconomicaCreateWithoutLocalInput, AvaliacaoSocioEconomicaUncheckedCreateWithoutLocalInput>
  }

  export type AvaliacaoSocioEconomicaUpdateWithWhereUniqueWithoutLocalInput = {
    where: AvaliacaoSocioEconomicaWhereUniqueInput
    data: XOR<AvaliacaoSocioEconomicaUpdateWithoutLocalInput, AvaliacaoSocioEconomicaUncheckedUpdateWithoutLocalInput>
  }

  export type AvaliacaoSocioEconomicaUpdateManyWithWhereWithoutLocalInput = {
    where: AvaliacaoSocioEconomicaScalarWhereInput
    data: XOR<AvaliacaoSocioEconomicaUpdateManyMutationInput, AvaliacaoSocioEconomicaUncheckedUpdateManyWithoutAvaliacaoSocioEconomicaInput>
  }

  export type MarcadorConsumoAlimentarUpsertWithWhereUniqueWithoutLocalInput = {
    where: MarcadorConsumoAlimentarWhereUniqueInput
    update: XOR<MarcadorConsumoAlimentarUpdateWithoutLocalInput, MarcadorConsumoAlimentarUncheckedUpdateWithoutLocalInput>
    create: XOR<MarcadorConsumoAlimentarCreateWithoutLocalInput, MarcadorConsumoAlimentarUncheckedCreateWithoutLocalInput>
  }

  export type MarcadorConsumoAlimentarUpdateWithWhereUniqueWithoutLocalInput = {
    where: MarcadorConsumoAlimentarWhereUniqueInput
    data: XOR<MarcadorConsumoAlimentarUpdateWithoutLocalInput, MarcadorConsumoAlimentarUncheckedUpdateWithoutLocalInput>
  }

  export type MarcadorConsumoAlimentarUpdateManyWithWhereWithoutLocalInput = {
    where: MarcadorConsumoAlimentarScalarWhereInput
    data: XOR<MarcadorConsumoAlimentarUpdateManyMutationInput, MarcadorConsumoAlimentarUncheckedUpdateManyWithoutMarcadorConsumoAlimentarInput>
  }

  export type ExameCreateWithoutCondicaoPeriodontalInput = {
    data: DataCreateNestedOneWithoutExamesInput
    pessoa: PessoaCreateNestedOneWithoutExamesInput
    local: LocalCreateNestedOneWithoutExamesInput
    usuario: UsuarioCreateNestedOneWithoutExamesInput
    traumatismoDentario?: TraumatismoDentarioCreateNestedOneWithoutExameInput
    marcadorConsumoAlimentar: MarcadorConsumoAlimentarCreateNestedOneWithoutExameInput
    fluoroseDentaria: FluoroseDentaria
    overjetMaxilarAnterior: number
    overjetMandibularAnterior: number
    mordidaAbertaVerticalAnterior: number
    relacaoMolarAnteroPosterior: RelacaoMolarAnteroPosterior
    observacao: string
    dentes?: DenteCreateNestedManyWithoutExameInput
    Soho?: SohoCreateNestedOneWithoutExameInput
    CPQ?: CPQCreateNestedOneWithoutExameInput
    arquivado?: boolean
  }

  export type ExameUncheckedCreateWithoutCondicaoPeriodontalInput = {
    id?: number
    idData: number
    idPessoa: number
    idLocal: number
    idUsuario: number
    idTraumatismoDentario?: number | null
    idMarcadorConsumoAlimentar: number
    fluoroseDentaria: FluoroseDentaria
    overjetMaxilarAnterior: number
    overjetMandibularAnterior: number
    mordidaAbertaVerticalAnterior: number
    relacaoMolarAnteroPosterior: RelacaoMolarAnteroPosterior
    observacao: string
    dentes?: DenteUncheckedCreateNestedManyWithoutExameInput
    Soho?: SohoUncheckedCreateNestedOneWithoutExameInput
    CPQ?: CPQUncheckedCreateNestedOneWithoutExameInput
    arquivado?: boolean
  }

  export type ExameCreateOrConnectWithoutCondicaoPeriodontalInput = {
    where: ExameWhereUniqueInput
    create: XOR<ExameCreateWithoutCondicaoPeriodontalInput, ExameUncheckedCreateWithoutCondicaoPeriodontalInput>
  }

  export type ExameUpsertWithoutCondicaoPeriodontalInput = {
    update: XOR<ExameUpdateWithoutCondicaoPeriodontalInput, ExameUncheckedUpdateWithoutCondicaoPeriodontalInput>
    create: XOR<ExameCreateWithoutCondicaoPeriodontalInput, ExameUncheckedCreateWithoutCondicaoPeriodontalInput>
  }

  export type ExameUpdateWithoutCondicaoPeriodontalInput = {
    data?: DataUpdateOneRequiredWithoutExamesInput
    pessoa?: PessoaUpdateOneRequiredWithoutExamesInput
    local?: LocalUpdateOneRequiredWithoutExamesInput
    usuario?: UsuarioUpdateOneRequiredWithoutExamesInput
    traumatismoDentario?: TraumatismoDentarioUpdateOneWithoutExameInput
    marcadorConsumoAlimentar?: MarcadorConsumoAlimentarUpdateOneRequiredWithoutExameInput
    fluoroseDentaria?: EnumFluoroseDentariaFieldUpdateOperationsInput | FluoroseDentaria
    overjetMaxilarAnterior?: IntFieldUpdateOperationsInput | number
    overjetMandibularAnterior?: IntFieldUpdateOperationsInput | number
    mordidaAbertaVerticalAnterior?: IntFieldUpdateOperationsInput | number
    relacaoMolarAnteroPosterior?: EnumRelacaoMolarAnteroPosteriorFieldUpdateOperationsInput | RelacaoMolarAnteroPosterior
    observacao?: StringFieldUpdateOperationsInput | string
    dentes?: DenteUpdateManyWithoutExameInput
    Soho?: SohoUpdateOneWithoutExameInput
    CPQ?: CPQUpdateOneWithoutExameInput
    arquivado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExameUncheckedUpdateWithoutCondicaoPeriodontalInput = {
    id?: IntFieldUpdateOperationsInput | number
    idData?: IntFieldUpdateOperationsInput | number
    idPessoa?: IntFieldUpdateOperationsInput | number
    idLocal?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    idTraumatismoDentario?: NullableIntFieldUpdateOperationsInput | number | null
    idMarcadorConsumoAlimentar?: IntFieldUpdateOperationsInput | number
    fluoroseDentaria?: EnumFluoroseDentariaFieldUpdateOperationsInput | FluoroseDentaria
    overjetMaxilarAnterior?: IntFieldUpdateOperationsInput | number
    overjetMandibularAnterior?: IntFieldUpdateOperationsInput | number
    mordidaAbertaVerticalAnterior?: IntFieldUpdateOperationsInput | number
    relacaoMolarAnteroPosterior?: EnumRelacaoMolarAnteroPosteriorFieldUpdateOperationsInput | RelacaoMolarAnteroPosterior
    observacao?: StringFieldUpdateOperationsInput | string
    dentes?: DenteUncheckedUpdateManyWithoutExameInput
    Soho?: SohoUncheckedUpdateOneWithoutExameInput
    CPQ?: CPQUncheckedUpdateOneWithoutExameInput
    arquivado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DataCreateWithoutExamesInput = {
    dia: number
    mes: number
    ano: number
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaCreateNestedManyWithoutDataInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarCreateNestedManyWithoutDataInput
  }

  export type DataUncheckedCreateWithoutExamesInput = {
    id?: number
    dia: number
    mes: number
    ano: number
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaUncheckedCreateNestedManyWithoutDataInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarUncheckedCreateNestedManyWithoutDataInput
  }

  export type DataCreateOrConnectWithoutExamesInput = {
    where: DataWhereUniqueInput
    create: XOR<DataCreateWithoutExamesInput, DataUncheckedCreateWithoutExamesInput>
  }

  export type PessoaCreateWithoutExamesInput = {
    nascimento: Date | string
    nome: string
    genero: Genero
    etniaPrincipal: Etnia
    etniaSecundaria?: Etnia | null
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaCreateNestedManyWithoutPessoaInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarCreateNestedManyWithoutPessoaInput
  }

  export type PessoaUncheckedCreateWithoutExamesInput = {
    id?: number
    nascimento: Date | string
    nome: string
    genero: Genero
    etniaPrincipal: Etnia
    etniaSecundaria?: Etnia | null
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaUncheckedCreateNestedManyWithoutPessoaInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarUncheckedCreateNestedManyWithoutPessoaInput
  }

  export type PessoaCreateOrConnectWithoutExamesInput = {
    where: PessoaWhereUniqueInput
    create: XOR<PessoaCreateWithoutExamesInput, PessoaUncheckedCreateWithoutExamesInput>
  }

  export type CondicaoPeriodontalCreateWithoutExameInput = {
    d17_16: boolean
    d21_11: boolean
    d27_26: boolean
    d31: boolean
    d37_36: boolean
    d47_46: boolean
  }

  export type CondicaoPeriodontalUncheckedCreateWithoutExameInput = {
    id?: number
    d17_16: boolean
    d21_11: boolean
    d27_26: boolean
    d31: boolean
    d37_36: boolean
    d47_46: boolean
  }

  export type CondicaoPeriodontalCreateOrConnectWithoutExameInput = {
    where: CondicaoPeriodontalWhereUniqueInput
    create: XOR<CondicaoPeriodontalCreateWithoutExameInput, CondicaoPeriodontalUncheckedCreateWithoutExameInput>
  }

  export type LocalCreateWithoutExamesInput = {
    municipio: string
    escola: string
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaCreateNestedManyWithoutLocalInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarCreateNestedManyWithoutLocalInput
  }

  export type LocalUncheckedCreateWithoutExamesInput = {
    id?: number
    municipio: string
    escola: string
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaUncheckedCreateNestedManyWithoutLocalInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarUncheckedCreateNestedManyWithoutLocalInput
  }

  export type LocalCreateOrConnectWithoutExamesInput = {
    where: LocalWhereUniqueInput
    create: XOR<LocalCreateWithoutExamesInput, LocalUncheckedCreateWithoutExamesInput>
  }

  export type UsuarioCreateWithoutExamesInput = {
    nome?: string | null
    email: string
    senha: string
    ativo?: boolean
    papel: Papel
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaCreateNestedManyWithoutUsuarioInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarCreateNestedManyWithoutUsuarioInput
    coordenaEquipe?: EquipeCreateNestedOneWithoutCoordenadorInput
    pertenceEquipe?: EquipeCreateNestedOneWithoutIntegrantesInput
  }

  export type UsuarioUncheckedCreateWithoutExamesInput = {
    id?: number
    nome?: string | null
    email: string
    senha: string
    ativo?: boolean
    papel: Papel
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaUncheckedCreateNestedManyWithoutUsuarioInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarUncheckedCreateNestedManyWithoutUsuarioInput
    coordenaEquipe?: EquipeUncheckedCreateNestedOneWithoutCoordenadorInput
    idPertenceEquipe?: number | null
  }

  export type UsuarioCreateOrConnectWithoutExamesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutExamesInput, UsuarioUncheckedCreateWithoutExamesInput>
  }

  export type TraumatismoDentarioCreateWithoutExameInput = {
    d_12: RespostasTraumatismoDentario
    d_11: RespostasTraumatismoDentario
    d_21: RespostasTraumatismoDentario
    d_22: RespostasTraumatismoDentario
    d_32: RespostasTraumatismoDentario
    d_31: RespostasTraumatismoDentario
    d_41: RespostasTraumatismoDentario
    d_42: RespostasTraumatismoDentario
  }

  export type TraumatismoDentarioUncheckedCreateWithoutExameInput = {
    id?: number
    d_12: RespostasTraumatismoDentario
    d_11: RespostasTraumatismoDentario
    d_21: RespostasTraumatismoDentario
    d_22: RespostasTraumatismoDentario
    d_32: RespostasTraumatismoDentario
    d_31: RespostasTraumatismoDentario
    d_41: RespostasTraumatismoDentario
    d_42: RespostasTraumatismoDentario
  }

  export type TraumatismoDentarioCreateOrConnectWithoutExameInput = {
    where: TraumatismoDentarioWhereUniqueInput
    create: XOR<TraumatismoDentarioCreateWithoutExameInput, TraumatismoDentarioUncheckedCreateWithoutExameInput>
  }

  export type MarcadorConsumoAlimentarCreateWithoutExameInput = {
    data: DataCreateNestedOneWithoutMarcadorConsumoAlimentarInput
    pessoa: PessoaCreateNestedOneWithoutMarcadorConsumoAlimentarInput
    usuario: UsuarioCreateNestedOneWithoutMarcadorConsumoAlimentarInput
    local: LocalCreateNestedOneWithoutMarcadorConsumoAlimentarInput
    saladaCrua: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    legumesVerdurasCozidos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    frutasFrescasSaladaDeFrutas: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    feijao: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    leiteOuIogurte: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    batataFritaBatataDePacoteSalgadosFritos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    hamburgerEmbutidos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosSalgadosSalgadinhoDePacote: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    refrigerante: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  }

  export type MarcadorConsumoAlimentarUncheckedCreateWithoutExameInput = {
    id?: number
    idData: number
    idPessoa: number
    idUsuario: number
    idLocal: number
    saladaCrua: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    legumesVerdurasCozidos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    frutasFrescasSaladaDeFrutas: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    feijao: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    leiteOuIogurte: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    batataFritaBatataDePacoteSalgadosFritos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    hamburgerEmbutidos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosSalgadosSalgadinhoDePacote: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    refrigerante: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  }

  export type MarcadorConsumoAlimentarCreateOrConnectWithoutExameInput = {
    where: MarcadorConsumoAlimentarWhereUniqueInput
    create: XOR<MarcadorConsumoAlimentarCreateWithoutExameInput, MarcadorConsumoAlimentarUncheckedCreateWithoutExameInput>
  }

  export type DenteCreateWithoutExameInput = {
    leite?: boolean
    removido?: MotivoRemovido | null
    numero: number
    oclusal?: number | null
    mesial?: number | null
    distal?: number | null
    palatina?: number | null
    vestibular?: number | null
    trat?: number | null
    pufa?: number | null
  }

  export type DenteUncheckedCreateWithoutExameInput = {
    id?: number
    leite?: boolean
    removido?: MotivoRemovido | null
    numero: number
    oclusal?: number | null
    mesial?: number | null
    distal?: number | null
    palatina?: number | null
    vestibular?: number | null
    trat?: number | null
    pufa?: number | null
  }

  export type DenteCreateOrConnectWithoutExameInput = {
    where: DenteWhereUniqueInput
    create: XOR<DenteCreateWithoutExameInput, DenteUncheckedCreateWithoutExameInput>
  }

  export type DenteCreateManyExameInputEnvelope = {
    data: Enumerable<DenteCreateManyExameInput>
    skipDuplicates?: boolean
  }

  export type SohoCreateWithoutExameInput = {
    dificilComer: RespostasSoho
    dificilBeber: RespostasSoho
    dificilFalar: RespostasSoho
    dificilBrincar: RespostasSoho
    dificilDormir: RespostasSoho
    deixouDeSorrirPorDentesFeios: RespostasSoho
    deixouDeSorrirPorDentesDoendo: RespostasSoho
  }

  export type SohoUncheckedCreateWithoutExameInput = {
    id?: number
    dificilComer: RespostasSoho
    dificilBeber: RespostasSoho
    dificilFalar: RespostasSoho
    dificilBrincar: RespostasSoho
    dificilDormir: RespostasSoho
    deixouDeSorrirPorDentesFeios: RespostasSoho
    deixouDeSorrirPorDentesDoendo: RespostasSoho
  }

  export type SohoCreateOrConnectWithoutExameInput = {
    where: SohoWhereUniqueInput
    create: XOR<SohoCreateWithoutExameInput, SohoUncheckedCreateWithoutExameInput>
  }

  export type CPQCreateWithoutExameInput = {
    dorNosDentes: RespostasCPQ
    feridas: RespostasCPQ
    mauHalito: RespostasCPQ
    restosDeAlimentoPreso: RespostasCPQ
    demorouMaisParaTerminarRefeicao: RespostasCPQ
    dificuldadeMorder: RespostasCPQ
    dificuldadeDizer: RespostasCPQ
    dificuldadeIngerirQuentesFrios: RespostasCPQ
    irritado: RespostasCPQ
    timido: RespostasCPQ
    chateado: RespostasCPQ
    preocupado: RespostasCPQ
    evitouSorrir: RespostasCPQ
    discutiu: RespostasCPQ
    aborreceuChamaramPorApelidos: RespostasCPQ
    perguntaramSobreDente: RespostasCPQ
  }

  export type CPQUncheckedCreateWithoutExameInput = {
    id?: number
    dorNosDentes: RespostasCPQ
    feridas: RespostasCPQ
    mauHalito: RespostasCPQ
    restosDeAlimentoPreso: RespostasCPQ
    demorouMaisParaTerminarRefeicao: RespostasCPQ
    dificuldadeMorder: RespostasCPQ
    dificuldadeDizer: RespostasCPQ
    dificuldadeIngerirQuentesFrios: RespostasCPQ
    irritado: RespostasCPQ
    timido: RespostasCPQ
    chateado: RespostasCPQ
    preocupado: RespostasCPQ
    evitouSorrir: RespostasCPQ
    discutiu: RespostasCPQ
    aborreceuChamaramPorApelidos: RespostasCPQ
    perguntaramSobreDente: RespostasCPQ
  }

  export type CPQCreateOrConnectWithoutExameInput = {
    where: CPQWhereUniqueInput
    create: XOR<CPQCreateWithoutExameInput, CPQUncheckedCreateWithoutExameInput>
  }

  export type DataUpsertWithoutExamesInput = {
    update: XOR<DataUpdateWithoutExamesInput, DataUncheckedUpdateWithoutExamesInput>
    create: XOR<DataCreateWithoutExamesInput, DataUncheckedCreateWithoutExamesInput>
  }

  export type DataUpdateWithoutExamesInput = {
    dia?: IntFieldUpdateOperationsInput | number
    mes?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaUpdateManyWithoutDataInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarUpdateManyWithoutDataInput
  }

  export type DataUncheckedUpdateWithoutExamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    dia?: IntFieldUpdateOperationsInput | number
    mes?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaUncheckedUpdateManyWithoutDataInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarUncheckedUpdateManyWithoutDataInput
  }

  export type PessoaUpsertWithoutExamesInput = {
    update: XOR<PessoaUpdateWithoutExamesInput, PessoaUncheckedUpdateWithoutExamesInput>
    create: XOR<PessoaCreateWithoutExamesInput, PessoaUncheckedCreateWithoutExamesInput>
  }

  export type PessoaUpdateWithoutExamesInput = {
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    genero?: EnumGeneroFieldUpdateOperationsInput | Genero
    etniaPrincipal?: EnumEtniaFieldUpdateOperationsInput | Etnia
    etniaSecundaria?: NullableEnumEtniaFieldUpdateOperationsInput | Etnia | null
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaUpdateManyWithoutPessoaInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarUpdateManyWithoutPessoaInput
  }

  export type PessoaUncheckedUpdateWithoutExamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    genero?: EnumGeneroFieldUpdateOperationsInput | Genero
    etniaPrincipal?: EnumEtniaFieldUpdateOperationsInput | Etnia
    etniaSecundaria?: NullableEnumEtniaFieldUpdateOperationsInput | Etnia | null
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaUncheckedUpdateManyWithoutPessoaInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarUncheckedUpdateManyWithoutPessoaInput
  }

  export type CondicaoPeriodontalUpsertWithoutExameInput = {
    update: XOR<CondicaoPeriodontalUpdateWithoutExameInput, CondicaoPeriodontalUncheckedUpdateWithoutExameInput>
    create: XOR<CondicaoPeriodontalCreateWithoutExameInput, CondicaoPeriodontalUncheckedCreateWithoutExameInput>
  }

  export type CondicaoPeriodontalUpdateWithoutExameInput = {
    d17_16?: BoolFieldUpdateOperationsInput | boolean
    d21_11?: BoolFieldUpdateOperationsInput | boolean
    d27_26?: BoolFieldUpdateOperationsInput | boolean
    d31?: BoolFieldUpdateOperationsInput | boolean
    d37_36?: BoolFieldUpdateOperationsInput | boolean
    d47_46?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CondicaoPeriodontalUncheckedUpdateWithoutExameInput = {
    id?: IntFieldUpdateOperationsInput | number
    d17_16?: BoolFieldUpdateOperationsInput | boolean
    d21_11?: BoolFieldUpdateOperationsInput | boolean
    d27_26?: BoolFieldUpdateOperationsInput | boolean
    d31?: BoolFieldUpdateOperationsInput | boolean
    d37_36?: BoolFieldUpdateOperationsInput | boolean
    d47_46?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LocalUpsertWithoutExamesInput = {
    update: XOR<LocalUpdateWithoutExamesInput, LocalUncheckedUpdateWithoutExamesInput>
    create: XOR<LocalCreateWithoutExamesInput, LocalUncheckedCreateWithoutExamesInput>
  }

  export type LocalUpdateWithoutExamesInput = {
    municipio?: StringFieldUpdateOperationsInput | string
    escola?: StringFieldUpdateOperationsInput | string
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaUpdateManyWithoutLocalInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarUpdateManyWithoutLocalInput
  }

  export type LocalUncheckedUpdateWithoutExamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    municipio?: StringFieldUpdateOperationsInput | string
    escola?: StringFieldUpdateOperationsInput | string
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaUncheckedUpdateManyWithoutLocalInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarUncheckedUpdateManyWithoutLocalInput
  }

  export type UsuarioUpsertWithoutExamesInput = {
    update: XOR<UsuarioUpdateWithoutExamesInput, UsuarioUncheckedUpdateWithoutExamesInput>
    create: XOR<UsuarioCreateWithoutExamesInput, UsuarioUncheckedCreateWithoutExamesInput>
  }

  export type UsuarioUpdateWithoutExamesInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    papel?: EnumPapelFieldUpdateOperationsInput | Papel
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaUpdateManyWithoutUsuarioInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarUpdateManyWithoutUsuarioInput
    coordenaEquipe?: EquipeUpdateOneWithoutCoordenadorInput
    pertenceEquipe?: EquipeUpdateOneWithoutIntegrantesInput
  }

  export type UsuarioUncheckedUpdateWithoutExamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    papel?: EnumPapelFieldUpdateOperationsInput | Papel
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaUncheckedUpdateManyWithoutUsuarioInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarUncheckedUpdateManyWithoutUsuarioInput
    coordenaEquipe?: EquipeUncheckedUpdateOneWithoutCoordenadorInput
    idPertenceEquipe?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TraumatismoDentarioUpsertWithoutExameInput = {
    update: XOR<TraumatismoDentarioUpdateWithoutExameInput, TraumatismoDentarioUncheckedUpdateWithoutExameInput>
    create: XOR<TraumatismoDentarioCreateWithoutExameInput, TraumatismoDentarioUncheckedCreateWithoutExameInput>
  }

  export type TraumatismoDentarioUpdateWithoutExameInput = {
    d_12?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
    d_11?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
    d_21?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
    d_22?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
    d_32?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
    d_31?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
    d_41?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
    d_42?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
  }

  export type TraumatismoDentarioUncheckedUpdateWithoutExameInput = {
    id?: IntFieldUpdateOperationsInput | number
    d_12?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
    d_11?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
    d_21?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
    d_22?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
    d_32?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
    d_31?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
    d_41?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
    d_42?: EnumRespostasTraumatismoDentarioFieldUpdateOperationsInput | RespostasTraumatismoDentario
  }

  export type MarcadorConsumoAlimentarUpsertWithoutExameInput = {
    update: XOR<MarcadorConsumoAlimentarUpdateWithoutExameInput, MarcadorConsumoAlimentarUncheckedUpdateWithoutExameInput>
    create: XOR<MarcadorConsumoAlimentarCreateWithoutExameInput, MarcadorConsumoAlimentarUncheckedCreateWithoutExameInput>
  }

  export type MarcadorConsumoAlimentarUpdateWithoutExameInput = {
    data?: DataUpdateOneRequiredWithoutMarcadorConsumoAlimentarInput
    pessoa?: PessoaUpdateOneRequiredWithoutMarcadorConsumoAlimentarInput
    usuario?: UsuarioUpdateOneRequiredWithoutMarcadorConsumoAlimentarInput
    local?: LocalUpdateOneRequiredWithoutMarcadorConsumoAlimentarInput
    saladaCrua?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    legumesVerdurasCozidos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    frutasFrescasSaladaDeFrutas?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    feijao?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    leiteOuIogurte?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    batataFritaBatataDePacoteSalgadosFritos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    hamburgerEmbutidos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosSalgadosSalgadinhoDePacote?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    refrigerante?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  }

  export type MarcadorConsumoAlimentarUncheckedUpdateWithoutExameInput = {
    id?: IntFieldUpdateOperationsInput | number
    idData?: IntFieldUpdateOperationsInput | number
    idPessoa?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    idLocal?: IntFieldUpdateOperationsInput | number
    saladaCrua?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    legumesVerdurasCozidos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    frutasFrescasSaladaDeFrutas?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    feijao?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    leiteOuIogurte?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    batataFritaBatataDePacoteSalgadosFritos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    hamburgerEmbutidos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosSalgadosSalgadinhoDePacote?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    refrigerante?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  }

  export type DenteUpsertWithWhereUniqueWithoutExameInput = {
    where: DenteWhereUniqueInput
    update: XOR<DenteUpdateWithoutExameInput, DenteUncheckedUpdateWithoutExameInput>
    create: XOR<DenteCreateWithoutExameInput, DenteUncheckedCreateWithoutExameInput>
  }

  export type DenteUpdateWithWhereUniqueWithoutExameInput = {
    where: DenteWhereUniqueInput
    data: XOR<DenteUpdateWithoutExameInput, DenteUncheckedUpdateWithoutExameInput>
  }

  export type DenteUpdateManyWithWhereWithoutExameInput = {
    where: DenteScalarWhereInput
    data: XOR<DenteUpdateManyMutationInput, DenteUncheckedUpdateManyWithoutDentesInput>
  }

  export type DenteScalarWhereInput = {
    AND?: Enumerable<DenteScalarWhereInput>
    OR?: Enumerable<DenteScalarWhereInput>
    NOT?: Enumerable<DenteScalarWhereInput>
    id?: IntFilter | number
    exameId?: IntFilter | number
    leite?: BoolFilter | boolean
    removido?: EnumMotivoRemovidoNullableFilter | MotivoRemovido | null
    numero?: IntFilter | number
    oclusal?: IntNullableFilter | number | null
    mesial?: IntNullableFilter | number | null
    distal?: IntNullableFilter | number | null
    palatina?: IntNullableFilter | number | null
    vestibular?: IntNullableFilter | number | null
    trat?: IntNullableFilter | number | null
    pufa?: IntNullableFilter | number | null
  }

  export type SohoUpsertWithoutExameInput = {
    update: XOR<SohoUpdateWithoutExameInput, SohoUncheckedUpdateWithoutExameInput>
    create: XOR<SohoCreateWithoutExameInput, SohoUncheckedCreateWithoutExameInput>
  }

  export type SohoUpdateWithoutExameInput = {
    dificilComer?: EnumRespostasSohoFieldUpdateOperationsInput | RespostasSoho
    dificilBeber?: EnumRespostasSohoFieldUpdateOperationsInput | RespostasSoho
    dificilFalar?: EnumRespostasSohoFieldUpdateOperationsInput | RespostasSoho
    dificilBrincar?: EnumRespostasSohoFieldUpdateOperationsInput | RespostasSoho
    dificilDormir?: EnumRespostasSohoFieldUpdateOperationsInput | RespostasSoho
    deixouDeSorrirPorDentesFeios?: EnumRespostasSohoFieldUpdateOperationsInput | RespostasSoho
    deixouDeSorrirPorDentesDoendo?: EnumRespostasSohoFieldUpdateOperationsInput | RespostasSoho
  }

  export type SohoUncheckedUpdateWithoutExameInput = {
    id?: IntFieldUpdateOperationsInput | number
    dificilComer?: EnumRespostasSohoFieldUpdateOperationsInput | RespostasSoho
    dificilBeber?: EnumRespostasSohoFieldUpdateOperationsInput | RespostasSoho
    dificilFalar?: EnumRespostasSohoFieldUpdateOperationsInput | RespostasSoho
    dificilBrincar?: EnumRespostasSohoFieldUpdateOperationsInput | RespostasSoho
    dificilDormir?: EnumRespostasSohoFieldUpdateOperationsInput | RespostasSoho
    deixouDeSorrirPorDentesFeios?: EnumRespostasSohoFieldUpdateOperationsInput | RespostasSoho
    deixouDeSorrirPorDentesDoendo?: EnumRespostasSohoFieldUpdateOperationsInput | RespostasSoho
  }

  export type CPQUpsertWithoutExameInput = {
    update: XOR<CPQUpdateWithoutExameInput, CPQUncheckedUpdateWithoutExameInput>
    create: XOR<CPQCreateWithoutExameInput, CPQUncheckedCreateWithoutExameInput>
  }

  export type CPQUpdateWithoutExameInput = {
    dorNosDentes?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    feridas?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    mauHalito?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    restosDeAlimentoPreso?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    demorouMaisParaTerminarRefeicao?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    dificuldadeMorder?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    dificuldadeDizer?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    dificuldadeIngerirQuentesFrios?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    irritado?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    timido?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    chateado?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    preocupado?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    evitouSorrir?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    discutiu?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    aborreceuChamaramPorApelidos?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    perguntaramSobreDente?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
  }

  export type CPQUncheckedUpdateWithoutExameInput = {
    id?: IntFieldUpdateOperationsInput | number
    dorNosDentes?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    feridas?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    mauHalito?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    restosDeAlimentoPreso?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    demorouMaisParaTerminarRefeicao?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    dificuldadeMorder?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    dificuldadeDizer?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    dificuldadeIngerirQuentesFrios?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    irritado?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    timido?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    chateado?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    preocupado?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    evitouSorrir?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    discutiu?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    aborreceuChamaramPorApelidos?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
    perguntaramSobreDente?: EnumRespostasCPQFieldUpdateOperationsInput | RespostasCPQ
  }

  export type ExameCreateWithoutDentesInput = {
    data: DataCreateNestedOneWithoutExamesInput
    pessoa: PessoaCreateNestedOneWithoutExamesInput
    condicaoPeriodontal?: CondicaoPeriodontalCreateNestedOneWithoutExameInput
    local: LocalCreateNestedOneWithoutExamesInput
    usuario: UsuarioCreateNestedOneWithoutExamesInput
    traumatismoDentario?: TraumatismoDentarioCreateNestedOneWithoutExameInput
    marcadorConsumoAlimentar: MarcadorConsumoAlimentarCreateNestedOneWithoutExameInput
    fluoroseDentaria: FluoroseDentaria
    overjetMaxilarAnterior: number
    overjetMandibularAnterior: number
    mordidaAbertaVerticalAnterior: number
    relacaoMolarAnteroPosterior: RelacaoMolarAnteroPosterior
    observacao: string
    Soho?: SohoCreateNestedOneWithoutExameInput
    CPQ?: CPQCreateNestedOneWithoutExameInput
    arquivado?: boolean
  }

  export type ExameUncheckedCreateWithoutDentesInput = {
    id?: number
    idData: number
    idPessoa: number
    idCondicaoPeriodontal?: number | null
    idLocal: number
    idUsuario: number
    idTraumatismoDentario?: number | null
    idMarcadorConsumoAlimentar: number
    fluoroseDentaria: FluoroseDentaria
    overjetMaxilarAnterior: number
    overjetMandibularAnterior: number
    mordidaAbertaVerticalAnterior: number
    relacaoMolarAnteroPosterior: RelacaoMolarAnteroPosterior
    observacao: string
    Soho?: SohoUncheckedCreateNestedOneWithoutExameInput
    CPQ?: CPQUncheckedCreateNestedOneWithoutExameInput
    arquivado?: boolean
  }

  export type ExameCreateOrConnectWithoutDentesInput = {
    where: ExameWhereUniqueInput
    create: XOR<ExameCreateWithoutDentesInput, ExameUncheckedCreateWithoutDentesInput>
  }

  export type ExameUpsertWithoutDentesInput = {
    update: XOR<ExameUpdateWithoutDentesInput, ExameUncheckedUpdateWithoutDentesInput>
    create: XOR<ExameCreateWithoutDentesInput, ExameUncheckedCreateWithoutDentesInput>
  }

  export type ExameUpdateWithoutDentesInput = {
    data?: DataUpdateOneRequiredWithoutExamesInput
    pessoa?: PessoaUpdateOneRequiredWithoutExamesInput
    condicaoPeriodontal?: CondicaoPeriodontalUpdateOneWithoutExameInput
    local?: LocalUpdateOneRequiredWithoutExamesInput
    usuario?: UsuarioUpdateOneRequiredWithoutExamesInput
    traumatismoDentario?: TraumatismoDentarioUpdateOneWithoutExameInput
    marcadorConsumoAlimentar?: MarcadorConsumoAlimentarUpdateOneRequiredWithoutExameInput
    fluoroseDentaria?: EnumFluoroseDentariaFieldUpdateOperationsInput | FluoroseDentaria
    overjetMaxilarAnterior?: IntFieldUpdateOperationsInput | number
    overjetMandibularAnterior?: IntFieldUpdateOperationsInput | number
    mordidaAbertaVerticalAnterior?: IntFieldUpdateOperationsInput | number
    relacaoMolarAnteroPosterior?: EnumRelacaoMolarAnteroPosteriorFieldUpdateOperationsInput | RelacaoMolarAnteroPosterior
    observacao?: StringFieldUpdateOperationsInput | string
    Soho?: SohoUpdateOneWithoutExameInput
    CPQ?: CPQUpdateOneWithoutExameInput
    arquivado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExameUncheckedUpdateWithoutDentesInput = {
    id?: IntFieldUpdateOperationsInput | number
    idData?: IntFieldUpdateOperationsInput | number
    idPessoa?: IntFieldUpdateOperationsInput | number
    idCondicaoPeriodontal?: NullableIntFieldUpdateOperationsInput | number | null
    idLocal?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    idTraumatismoDentario?: NullableIntFieldUpdateOperationsInput | number | null
    idMarcadorConsumoAlimentar?: IntFieldUpdateOperationsInput | number
    fluoroseDentaria?: EnumFluoroseDentariaFieldUpdateOperationsInput | FluoroseDentaria
    overjetMaxilarAnterior?: IntFieldUpdateOperationsInput | number
    overjetMandibularAnterior?: IntFieldUpdateOperationsInput | number
    mordidaAbertaVerticalAnterior?: IntFieldUpdateOperationsInput | number
    relacaoMolarAnteroPosterior?: EnumRelacaoMolarAnteroPosteriorFieldUpdateOperationsInput | RelacaoMolarAnteroPosterior
    observacao?: StringFieldUpdateOperationsInput | string
    Soho?: SohoUncheckedUpdateOneWithoutExameInput
    CPQ?: CPQUncheckedUpdateOneWithoutExameInput
    arquivado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExameCreateWithoutTraumatismoDentarioInput = {
    data: DataCreateNestedOneWithoutExamesInput
    pessoa: PessoaCreateNestedOneWithoutExamesInput
    condicaoPeriodontal?: CondicaoPeriodontalCreateNestedOneWithoutExameInput
    local: LocalCreateNestedOneWithoutExamesInput
    usuario: UsuarioCreateNestedOneWithoutExamesInput
    marcadorConsumoAlimentar: MarcadorConsumoAlimentarCreateNestedOneWithoutExameInput
    fluoroseDentaria: FluoroseDentaria
    overjetMaxilarAnterior: number
    overjetMandibularAnterior: number
    mordidaAbertaVerticalAnterior: number
    relacaoMolarAnteroPosterior: RelacaoMolarAnteroPosterior
    observacao: string
    dentes?: DenteCreateNestedManyWithoutExameInput
    Soho?: SohoCreateNestedOneWithoutExameInput
    CPQ?: CPQCreateNestedOneWithoutExameInput
    arquivado?: boolean
  }

  export type ExameUncheckedCreateWithoutTraumatismoDentarioInput = {
    id?: number
    idData: number
    idPessoa: number
    idCondicaoPeriodontal?: number | null
    idLocal: number
    idUsuario: number
    idMarcadorConsumoAlimentar: number
    fluoroseDentaria: FluoroseDentaria
    overjetMaxilarAnterior: number
    overjetMandibularAnterior: number
    mordidaAbertaVerticalAnterior: number
    relacaoMolarAnteroPosterior: RelacaoMolarAnteroPosterior
    observacao: string
    dentes?: DenteUncheckedCreateNestedManyWithoutExameInput
    Soho?: SohoUncheckedCreateNestedOneWithoutExameInput
    CPQ?: CPQUncheckedCreateNestedOneWithoutExameInput
    arquivado?: boolean
  }

  export type ExameCreateOrConnectWithoutTraumatismoDentarioInput = {
    where: ExameWhereUniqueInput
    create: XOR<ExameCreateWithoutTraumatismoDentarioInput, ExameUncheckedCreateWithoutTraumatismoDentarioInput>
  }

  export type ExameUpsertWithoutTraumatismoDentarioInput = {
    update: XOR<ExameUpdateWithoutTraumatismoDentarioInput, ExameUncheckedUpdateWithoutTraumatismoDentarioInput>
    create: XOR<ExameCreateWithoutTraumatismoDentarioInput, ExameUncheckedCreateWithoutTraumatismoDentarioInput>
  }

  export type ExameUpdateWithoutTraumatismoDentarioInput = {
    data?: DataUpdateOneRequiredWithoutExamesInput
    pessoa?: PessoaUpdateOneRequiredWithoutExamesInput
    condicaoPeriodontal?: CondicaoPeriodontalUpdateOneWithoutExameInput
    local?: LocalUpdateOneRequiredWithoutExamesInput
    usuario?: UsuarioUpdateOneRequiredWithoutExamesInput
    marcadorConsumoAlimentar?: MarcadorConsumoAlimentarUpdateOneRequiredWithoutExameInput
    fluoroseDentaria?: EnumFluoroseDentariaFieldUpdateOperationsInput | FluoroseDentaria
    overjetMaxilarAnterior?: IntFieldUpdateOperationsInput | number
    overjetMandibularAnterior?: IntFieldUpdateOperationsInput | number
    mordidaAbertaVerticalAnterior?: IntFieldUpdateOperationsInput | number
    relacaoMolarAnteroPosterior?: EnumRelacaoMolarAnteroPosteriorFieldUpdateOperationsInput | RelacaoMolarAnteroPosterior
    observacao?: StringFieldUpdateOperationsInput | string
    dentes?: DenteUpdateManyWithoutExameInput
    Soho?: SohoUpdateOneWithoutExameInput
    CPQ?: CPQUpdateOneWithoutExameInput
    arquivado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExameUncheckedUpdateWithoutTraumatismoDentarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    idData?: IntFieldUpdateOperationsInput | number
    idPessoa?: IntFieldUpdateOperationsInput | number
    idCondicaoPeriodontal?: NullableIntFieldUpdateOperationsInput | number | null
    idLocal?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    idMarcadorConsumoAlimentar?: IntFieldUpdateOperationsInput | number
    fluoroseDentaria?: EnumFluoroseDentariaFieldUpdateOperationsInput | FluoroseDentaria
    overjetMaxilarAnterior?: IntFieldUpdateOperationsInput | number
    overjetMandibularAnterior?: IntFieldUpdateOperationsInput | number
    mordidaAbertaVerticalAnterior?: IntFieldUpdateOperationsInput | number
    relacaoMolarAnteroPosterior?: EnumRelacaoMolarAnteroPosteriorFieldUpdateOperationsInput | RelacaoMolarAnteroPosterior
    observacao?: StringFieldUpdateOperationsInput | string
    dentes?: DenteUncheckedUpdateManyWithoutExameInput
    Soho?: SohoUncheckedUpdateOneWithoutExameInput
    CPQ?: CPQUncheckedUpdateOneWithoutExameInput
    arquivado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DataCreateWithoutAvaliacaoSocioEconomicaInput = {
    dia: number
    mes: number
    ano: number
    exames?: ExameCreateNestedManyWithoutDataInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarCreateNestedManyWithoutDataInput
  }

  export type DataUncheckedCreateWithoutAvaliacaoSocioEconomicaInput = {
    id?: number
    dia: number
    mes: number
    ano: number
    exames?: ExameUncheckedCreateNestedManyWithoutDataInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarUncheckedCreateNestedManyWithoutDataInput
  }

  export type DataCreateOrConnectWithoutAvaliacaoSocioEconomicaInput = {
    where: DataWhereUniqueInput
    create: XOR<DataCreateWithoutAvaliacaoSocioEconomicaInput, DataUncheckedCreateWithoutAvaliacaoSocioEconomicaInput>
  }

  export type PessoaCreateWithoutAvaliacaoSocioEconomicaInput = {
    nascimento: Date | string
    nome: string
    genero: Genero
    etniaPrincipal: Etnia
    etniaSecundaria?: Etnia | null
    exames?: ExameCreateNestedManyWithoutPessoaInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarCreateNestedManyWithoutPessoaInput
  }

  export type PessoaUncheckedCreateWithoutAvaliacaoSocioEconomicaInput = {
    id?: number
    nascimento: Date | string
    nome: string
    genero: Genero
    etniaPrincipal: Etnia
    etniaSecundaria?: Etnia | null
    exames?: ExameUncheckedCreateNestedManyWithoutPessoaInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarUncheckedCreateNestedManyWithoutPessoaInput
  }

  export type PessoaCreateOrConnectWithoutAvaliacaoSocioEconomicaInput = {
    where: PessoaWhereUniqueInput
    create: XOR<PessoaCreateWithoutAvaliacaoSocioEconomicaInput, PessoaUncheckedCreateWithoutAvaliacaoSocioEconomicaInput>
  }

  export type LocalCreateWithoutAvaliacaoSocioEconomicaInput = {
    municipio: string
    escola: string
    exames?: ExameCreateNestedManyWithoutLocalInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarCreateNestedManyWithoutLocalInput
  }

  export type LocalUncheckedCreateWithoutAvaliacaoSocioEconomicaInput = {
    id?: number
    municipio: string
    escola: string
    exames?: ExameUncheckedCreateNestedManyWithoutLocalInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarUncheckedCreateNestedManyWithoutLocalInput
  }

  export type LocalCreateOrConnectWithoutAvaliacaoSocioEconomicaInput = {
    where: LocalWhereUniqueInput
    create: XOR<LocalCreateWithoutAvaliacaoSocioEconomicaInput, LocalUncheckedCreateWithoutAvaliacaoSocioEconomicaInput>
  }

  export type UsuarioCreateWithoutAvaliacaoSocioEconomicaInput = {
    nome?: string | null
    email: string
    senha: string
    ativo?: boolean
    papel: Papel
    exames?: ExameCreateNestedManyWithoutUsuarioInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarCreateNestedManyWithoutUsuarioInput
    coordenaEquipe?: EquipeCreateNestedOneWithoutCoordenadorInput
    pertenceEquipe?: EquipeCreateNestedOneWithoutIntegrantesInput
  }

  export type UsuarioUncheckedCreateWithoutAvaliacaoSocioEconomicaInput = {
    id?: number
    nome?: string | null
    email: string
    senha: string
    ativo?: boolean
    papel: Papel
    exames?: ExameUncheckedCreateNestedManyWithoutUsuarioInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarUncheckedCreateNestedManyWithoutUsuarioInput
    coordenaEquipe?: EquipeUncheckedCreateNestedOneWithoutCoordenadorInput
    idPertenceEquipe?: number | null
  }

  export type UsuarioCreateOrConnectWithoutAvaliacaoSocioEconomicaInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutAvaliacaoSocioEconomicaInput, UsuarioUncheckedCreateWithoutAvaliacaoSocioEconomicaInput>
  }

  export type DataUpsertWithoutAvaliacaoSocioEconomicaInput = {
    update: XOR<DataUpdateWithoutAvaliacaoSocioEconomicaInput, DataUncheckedUpdateWithoutAvaliacaoSocioEconomicaInput>
    create: XOR<DataCreateWithoutAvaliacaoSocioEconomicaInput, DataUncheckedCreateWithoutAvaliacaoSocioEconomicaInput>
  }

  export type DataUpdateWithoutAvaliacaoSocioEconomicaInput = {
    dia?: IntFieldUpdateOperationsInput | number
    mes?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    exames?: ExameUpdateManyWithoutDataInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarUpdateManyWithoutDataInput
  }

  export type DataUncheckedUpdateWithoutAvaliacaoSocioEconomicaInput = {
    id?: IntFieldUpdateOperationsInput | number
    dia?: IntFieldUpdateOperationsInput | number
    mes?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    exames?: ExameUncheckedUpdateManyWithoutDataInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarUncheckedUpdateManyWithoutDataInput
  }

  export type PessoaUpsertWithoutAvaliacaoSocioEconomicaInput = {
    update: XOR<PessoaUpdateWithoutAvaliacaoSocioEconomicaInput, PessoaUncheckedUpdateWithoutAvaliacaoSocioEconomicaInput>
    create: XOR<PessoaCreateWithoutAvaliacaoSocioEconomicaInput, PessoaUncheckedCreateWithoutAvaliacaoSocioEconomicaInput>
  }

  export type PessoaUpdateWithoutAvaliacaoSocioEconomicaInput = {
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    genero?: EnumGeneroFieldUpdateOperationsInput | Genero
    etniaPrincipal?: EnumEtniaFieldUpdateOperationsInput | Etnia
    etniaSecundaria?: NullableEnumEtniaFieldUpdateOperationsInput | Etnia | null
    exames?: ExameUpdateManyWithoutPessoaInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarUpdateManyWithoutPessoaInput
  }

  export type PessoaUncheckedUpdateWithoutAvaliacaoSocioEconomicaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    genero?: EnumGeneroFieldUpdateOperationsInput | Genero
    etniaPrincipal?: EnumEtniaFieldUpdateOperationsInput | Etnia
    etniaSecundaria?: NullableEnumEtniaFieldUpdateOperationsInput | Etnia | null
    exames?: ExameUncheckedUpdateManyWithoutPessoaInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarUncheckedUpdateManyWithoutPessoaInput
  }

  export type LocalUpsertWithoutAvaliacaoSocioEconomicaInput = {
    update: XOR<LocalUpdateWithoutAvaliacaoSocioEconomicaInput, LocalUncheckedUpdateWithoutAvaliacaoSocioEconomicaInput>
    create: XOR<LocalCreateWithoutAvaliacaoSocioEconomicaInput, LocalUncheckedCreateWithoutAvaliacaoSocioEconomicaInput>
  }

  export type LocalUpdateWithoutAvaliacaoSocioEconomicaInput = {
    municipio?: StringFieldUpdateOperationsInput | string
    escola?: StringFieldUpdateOperationsInput | string
    exames?: ExameUpdateManyWithoutLocalInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarUpdateManyWithoutLocalInput
  }

  export type LocalUncheckedUpdateWithoutAvaliacaoSocioEconomicaInput = {
    id?: IntFieldUpdateOperationsInput | number
    municipio?: StringFieldUpdateOperationsInput | string
    escola?: StringFieldUpdateOperationsInput | string
    exames?: ExameUncheckedUpdateManyWithoutLocalInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarUncheckedUpdateManyWithoutLocalInput
  }

  export type UsuarioUpsertWithoutAvaliacaoSocioEconomicaInput = {
    update: XOR<UsuarioUpdateWithoutAvaliacaoSocioEconomicaInput, UsuarioUncheckedUpdateWithoutAvaliacaoSocioEconomicaInput>
    create: XOR<UsuarioCreateWithoutAvaliacaoSocioEconomicaInput, UsuarioUncheckedCreateWithoutAvaliacaoSocioEconomicaInput>
  }

  export type UsuarioUpdateWithoutAvaliacaoSocioEconomicaInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    papel?: EnumPapelFieldUpdateOperationsInput | Papel
    exames?: ExameUpdateManyWithoutUsuarioInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarUpdateManyWithoutUsuarioInput
    coordenaEquipe?: EquipeUpdateOneWithoutCoordenadorInput
    pertenceEquipe?: EquipeUpdateOneWithoutIntegrantesInput
  }

  export type UsuarioUncheckedUpdateWithoutAvaliacaoSocioEconomicaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    papel?: EnumPapelFieldUpdateOperationsInput | Papel
    exames?: ExameUncheckedUpdateManyWithoutUsuarioInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarUncheckedUpdateManyWithoutUsuarioInput
    coordenaEquipe?: EquipeUncheckedUpdateOneWithoutCoordenadorInput
    idPertenceEquipe?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ExameCreateManyUsuarioInput = {
    id?: number
    idData: number
    idPessoa: number
    idCondicaoPeriodontal?: number | null
    idLocal: number
    idTraumatismoDentario?: number | null
    idMarcadorConsumoAlimentar: number
    fluoroseDentaria: FluoroseDentaria
    overjetMaxilarAnterior: number
    overjetMandibularAnterior: number
    mordidaAbertaVerticalAnterior: number
    relacaoMolarAnteroPosterior: RelacaoMolarAnteroPosterior
    observacao: string
    arquivado?: boolean
  }

  export type AvaliacaoSocioEconomicaCreateManyUsuarioInput = {
    id?: number
    idData: number
    idPessoa: number
    idLocal: number
    qtdPessoasResidencia: number
    qtdComodosDormitorio: number
    qtdBens: number
    qtdTotalRendaUltimoMes: number
    escolaridadeMae: Escolaridade
    escolaridadePai: Escolaridade
    recebeBeneficioSocial?: boolean | null
    filhoDorDente6Meses?: boolean | null
    filhoNivelDor: number
    filhoVisitouDentista?: boolean | null
    filhoUltimaConsulta: UltimaConsulta
    filhoLocalConsulta: LocalConsulta
    motivoUltimaConsulta: MotivoUltimaConsulta
    avaliacaoUltimaConsulta: AvaliacaoUltimaConsulta
    filhoAvaliacaoBucal: AvaliacaoBucal
    filhoQtdEscovacoesPorDia: FilhoQtdEscovacoesPorDia
    frequenciaTrocaEscovas: FrequenciaTrocaEscovas
    usaFioDental: boolean
    usaPastaComFluor: boolean
    arquivado?: boolean
  }

  export type MarcadorConsumoAlimentarCreateManyUsuarioInput = {
    id?: number
    idData: number
    idPessoa: number
    idLocal: number
    saladaCrua: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    legumesVerdurasCozidos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    frutasFrescasSaladaDeFrutas: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    feijao: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    leiteOuIogurte: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    batataFritaBatataDePacoteSalgadosFritos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    hamburgerEmbutidos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosSalgadosSalgadinhoDePacote: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    refrigerante: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  }

  export type ExameUpdateWithoutUsuarioInput = {
    data?: DataUpdateOneRequiredWithoutExamesInput
    pessoa?: PessoaUpdateOneRequiredWithoutExamesInput
    condicaoPeriodontal?: CondicaoPeriodontalUpdateOneWithoutExameInput
    local?: LocalUpdateOneRequiredWithoutExamesInput
    traumatismoDentario?: TraumatismoDentarioUpdateOneWithoutExameInput
    marcadorConsumoAlimentar?: MarcadorConsumoAlimentarUpdateOneRequiredWithoutExameInput
    fluoroseDentaria?: EnumFluoroseDentariaFieldUpdateOperationsInput | FluoroseDentaria
    overjetMaxilarAnterior?: IntFieldUpdateOperationsInput | number
    overjetMandibularAnterior?: IntFieldUpdateOperationsInput | number
    mordidaAbertaVerticalAnterior?: IntFieldUpdateOperationsInput | number
    relacaoMolarAnteroPosterior?: EnumRelacaoMolarAnteroPosteriorFieldUpdateOperationsInput | RelacaoMolarAnteroPosterior
    observacao?: StringFieldUpdateOperationsInput | string
    dentes?: DenteUpdateManyWithoutExameInput
    Soho?: SohoUpdateOneWithoutExameInput
    CPQ?: CPQUpdateOneWithoutExameInput
    arquivado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExameUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    idData?: IntFieldUpdateOperationsInput | number
    idPessoa?: IntFieldUpdateOperationsInput | number
    idCondicaoPeriodontal?: NullableIntFieldUpdateOperationsInput | number | null
    idLocal?: IntFieldUpdateOperationsInput | number
    idTraumatismoDentario?: NullableIntFieldUpdateOperationsInput | number | null
    idMarcadorConsumoAlimentar?: IntFieldUpdateOperationsInput | number
    fluoroseDentaria?: EnumFluoroseDentariaFieldUpdateOperationsInput | FluoroseDentaria
    overjetMaxilarAnterior?: IntFieldUpdateOperationsInput | number
    overjetMandibularAnterior?: IntFieldUpdateOperationsInput | number
    mordidaAbertaVerticalAnterior?: IntFieldUpdateOperationsInput | number
    relacaoMolarAnteroPosterior?: EnumRelacaoMolarAnteroPosteriorFieldUpdateOperationsInput | RelacaoMolarAnteroPosterior
    observacao?: StringFieldUpdateOperationsInput | string
    dentes?: DenteUncheckedUpdateManyWithoutExameInput
    Soho?: SohoUncheckedUpdateOneWithoutExameInput
    CPQ?: CPQUncheckedUpdateOneWithoutExameInput
    arquivado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExameUncheckedUpdateManyWithoutExamesInput = {
    id?: IntFieldUpdateOperationsInput | number
    idData?: IntFieldUpdateOperationsInput | number
    idPessoa?: IntFieldUpdateOperationsInput | number
    idCondicaoPeriodontal?: NullableIntFieldUpdateOperationsInput | number | null
    idLocal?: IntFieldUpdateOperationsInput | number
    idTraumatismoDentario?: NullableIntFieldUpdateOperationsInput | number | null
    idMarcadorConsumoAlimentar?: IntFieldUpdateOperationsInput | number
    fluoroseDentaria?: EnumFluoroseDentariaFieldUpdateOperationsInput | FluoroseDentaria
    overjetMaxilarAnterior?: IntFieldUpdateOperationsInput | number
    overjetMandibularAnterior?: IntFieldUpdateOperationsInput | number
    mordidaAbertaVerticalAnterior?: IntFieldUpdateOperationsInput | number
    relacaoMolarAnteroPosterior?: EnumRelacaoMolarAnteroPosteriorFieldUpdateOperationsInput | RelacaoMolarAnteroPosterior
    observacao?: StringFieldUpdateOperationsInput | string
    arquivado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvaliacaoSocioEconomicaUpdateWithoutUsuarioInput = {
    data?: DataUpdateOneRequiredWithoutAvaliacaoSocioEconomicaInput
    pessoa?: PessoaUpdateOneRequiredWithoutAvaliacaoSocioEconomicaInput
    local?: LocalUpdateOneRequiredWithoutAvaliacaoSocioEconomicaInput
    qtdPessoasResidencia?: IntFieldUpdateOperationsInput | number
    qtdComodosDormitorio?: IntFieldUpdateOperationsInput | number
    qtdBens?: IntFieldUpdateOperationsInput | number
    qtdTotalRendaUltimoMes?: IntFieldUpdateOperationsInput | number
    escolaridadeMae?: EnumEscolaridadeFieldUpdateOperationsInput | Escolaridade
    escolaridadePai?: EnumEscolaridadeFieldUpdateOperationsInput | Escolaridade
    recebeBeneficioSocial?: NullableBoolFieldUpdateOperationsInput | boolean | null
    filhoDorDente6Meses?: NullableBoolFieldUpdateOperationsInput | boolean | null
    filhoNivelDor?: IntFieldUpdateOperationsInput | number
    filhoVisitouDentista?: NullableBoolFieldUpdateOperationsInput | boolean | null
    filhoUltimaConsulta?: EnumUltimaConsultaFieldUpdateOperationsInput | UltimaConsulta
    filhoLocalConsulta?: EnumLocalConsultaFieldUpdateOperationsInput | LocalConsulta
    motivoUltimaConsulta?: EnumMotivoUltimaConsultaFieldUpdateOperationsInput | MotivoUltimaConsulta
    avaliacaoUltimaConsulta?: EnumAvaliacaoUltimaConsultaFieldUpdateOperationsInput | AvaliacaoUltimaConsulta
    filhoAvaliacaoBucal?: EnumAvaliacaoBucalFieldUpdateOperationsInput | AvaliacaoBucal
    filhoQtdEscovacoesPorDia?: EnumFilhoQtdEscovacoesPorDiaFieldUpdateOperationsInput | FilhoQtdEscovacoesPorDia
    frequenciaTrocaEscovas?: EnumFrequenciaTrocaEscovasFieldUpdateOperationsInput | FrequenciaTrocaEscovas
    usaFioDental?: BoolFieldUpdateOperationsInput | boolean
    usaPastaComFluor?: BoolFieldUpdateOperationsInput | boolean
    arquivado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvaliacaoSocioEconomicaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    idData?: IntFieldUpdateOperationsInput | number
    idPessoa?: IntFieldUpdateOperationsInput | number
    idLocal?: IntFieldUpdateOperationsInput | number
    qtdPessoasResidencia?: IntFieldUpdateOperationsInput | number
    qtdComodosDormitorio?: IntFieldUpdateOperationsInput | number
    qtdBens?: IntFieldUpdateOperationsInput | number
    qtdTotalRendaUltimoMes?: IntFieldUpdateOperationsInput | number
    escolaridadeMae?: EnumEscolaridadeFieldUpdateOperationsInput | Escolaridade
    escolaridadePai?: EnumEscolaridadeFieldUpdateOperationsInput | Escolaridade
    recebeBeneficioSocial?: NullableBoolFieldUpdateOperationsInput | boolean | null
    filhoDorDente6Meses?: NullableBoolFieldUpdateOperationsInput | boolean | null
    filhoNivelDor?: IntFieldUpdateOperationsInput | number
    filhoVisitouDentista?: NullableBoolFieldUpdateOperationsInput | boolean | null
    filhoUltimaConsulta?: EnumUltimaConsultaFieldUpdateOperationsInput | UltimaConsulta
    filhoLocalConsulta?: EnumLocalConsultaFieldUpdateOperationsInput | LocalConsulta
    motivoUltimaConsulta?: EnumMotivoUltimaConsultaFieldUpdateOperationsInput | MotivoUltimaConsulta
    avaliacaoUltimaConsulta?: EnumAvaliacaoUltimaConsultaFieldUpdateOperationsInput | AvaliacaoUltimaConsulta
    filhoAvaliacaoBucal?: EnumAvaliacaoBucalFieldUpdateOperationsInput | AvaliacaoBucal
    filhoQtdEscovacoesPorDia?: EnumFilhoQtdEscovacoesPorDiaFieldUpdateOperationsInput | FilhoQtdEscovacoesPorDia
    frequenciaTrocaEscovas?: EnumFrequenciaTrocaEscovasFieldUpdateOperationsInput | FrequenciaTrocaEscovas
    usaFioDental?: BoolFieldUpdateOperationsInput | boolean
    usaPastaComFluor?: BoolFieldUpdateOperationsInput | boolean
    arquivado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvaliacaoSocioEconomicaUncheckedUpdateManyWithoutAvaliacaoSocioEconomicaInput = {
    id?: IntFieldUpdateOperationsInput | number
    idData?: IntFieldUpdateOperationsInput | number
    idPessoa?: IntFieldUpdateOperationsInput | number
    idLocal?: IntFieldUpdateOperationsInput | number
    qtdPessoasResidencia?: IntFieldUpdateOperationsInput | number
    qtdComodosDormitorio?: IntFieldUpdateOperationsInput | number
    qtdBens?: IntFieldUpdateOperationsInput | number
    qtdTotalRendaUltimoMes?: IntFieldUpdateOperationsInput | number
    escolaridadeMae?: EnumEscolaridadeFieldUpdateOperationsInput | Escolaridade
    escolaridadePai?: EnumEscolaridadeFieldUpdateOperationsInput | Escolaridade
    recebeBeneficioSocial?: NullableBoolFieldUpdateOperationsInput | boolean | null
    filhoDorDente6Meses?: NullableBoolFieldUpdateOperationsInput | boolean | null
    filhoNivelDor?: IntFieldUpdateOperationsInput | number
    filhoVisitouDentista?: NullableBoolFieldUpdateOperationsInput | boolean | null
    filhoUltimaConsulta?: EnumUltimaConsultaFieldUpdateOperationsInput | UltimaConsulta
    filhoLocalConsulta?: EnumLocalConsultaFieldUpdateOperationsInput | LocalConsulta
    motivoUltimaConsulta?: EnumMotivoUltimaConsultaFieldUpdateOperationsInput | MotivoUltimaConsulta
    avaliacaoUltimaConsulta?: EnumAvaliacaoUltimaConsultaFieldUpdateOperationsInput | AvaliacaoUltimaConsulta
    filhoAvaliacaoBucal?: EnumAvaliacaoBucalFieldUpdateOperationsInput | AvaliacaoBucal
    filhoQtdEscovacoesPorDia?: EnumFilhoQtdEscovacoesPorDiaFieldUpdateOperationsInput | FilhoQtdEscovacoesPorDia
    frequenciaTrocaEscovas?: EnumFrequenciaTrocaEscovasFieldUpdateOperationsInput | FrequenciaTrocaEscovas
    usaFioDental?: BoolFieldUpdateOperationsInput | boolean
    usaPastaComFluor?: BoolFieldUpdateOperationsInput | boolean
    arquivado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MarcadorConsumoAlimentarUpdateWithoutUsuarioInput = {
    data?: DataUpdateOneRequiredWithoutMarcadorConsumoAlimentarInput
    pessoa?: PessoaUpdateOneRequiredWithoutMarcadorConsumoAlimentarInput
    local?: LocalUpdateOneRequiredWithoutMarcadorConsumoAlimentarInput
    exame?: ExameUpdateOneWithoutMarcadorConsumoAlimentarInput
    saladaCrua?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    legumesVerdurasCozidos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    frutasFrescasSaladaDeFrutas?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    feijao?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    leiteOuIogurte?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    batataFritaBatataDePacoteSalgadosFritos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    hamburgerEmbutidos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosSalgadosSalgadinhoDePacote?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    refrigerante?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  }

  export type MarcadorConsumoAlimentarUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    idData?: IntFieldUpdateOperationsInput | number
    idPessoa?: IntFieldUpdateOperationsInput | number
    idLocal?: IntFieldUpdateOperationsInput | number
    exame?: ExameUncheckedUpdateOneWithoutMarcadorConsumoAlimentarInput
    saladaCrua?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    legumesVerdurasCozidos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    frutasFrescasSaladaDeFrutas?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    feijao?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    leiteOuIogurte?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    batataFritaBatataDePacoteSalgadosFritos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    hamburgerEmbutidos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosSalgadosSalgadinhoDePacote?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    refrigerante?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  }

  export type MarcadorConsumoAlimentarUncheckedUpdateManyWithoutMarcadorConsumoAlimentarInput = {
    id?: IntFieldUpdateOperationsInput | number
    idData?: IntFieldUpdateOperationsInput | number
    idPessoa?: IntFieldUpdateOperationsInput | number
    idLocal?: IntFieldUpdateOperationsInput | number
    saladaCrua?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    legumesVerdurasCozidos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    frutasFrescasSaladaDeFrutas?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    feijao?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    leiteOuIogurte?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    batataFritaBatataDePacoteSalgadosFritos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    hamburgerEmbutidos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosSalgadosSalgadinhoDePacote?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    refrigerante?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  }

  export type UsuarioCreateManyPertenceEquipeInput = {
    id?: number
    nome?: string | null
    email: string
    senha: string
    ativo?: boolean
    papel: Papel
  }

  export type UsuarioUpdateWithoutPertenceEquipeInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    papel?: EnumPapelFieldUpdateOperationsInput | Papel
    exames?: ExameUpdateManyWithoutUsuarioInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaUpdateManyWithoutUsuarioInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarUpdateManyWithoutUsuarioInput
    coordenaEquipe?: EquipeUpdateOneWithoutCoordenadorInput
  }

  export type UsuarioUncheckedUpdateWithoutPertenceEquipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    papel?: EnumPapelFieldUpdateOperationsInput | Papel
    exames?: ExameUncheckedUpdateManyWithoutUsuarioInput
    avaliacaoSocioEconomica?: AvaliacaoSocioEconomicaUncheckedUpdateManyWithoutUsuarioInput
    MarcadorConsumoAlimentar?: MarcadorConsumoAlimentarUncheckedUpdateManyWithoutUsuarioInput
    coordenaEquipe?: EquipeUncheckedUpdateOneWithoutCoordenadorInput
  }

  export type UsuarioUncheckedUpdateManyWithoutIntegrantesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    papel?: EnumPapelFieldUpdateOperationsInput | Papel
  }

  export type ExameCreateManyDataInput = {
    id?: number
    idPessoa: number
    idCondicaoPeriodontal?: number | null
    idLocal: number
    idUsuario: number
    idTraumatismoDentario?: number | null
    idMarcadorConsumoAlimentar: number
    fluoroseDentaria: FluoroseDentaria
    overjetMaxilarAnterior: number
    overjetMandibularAnterior: number
    mordidaAbertaVerticalAnterior: number
    relacaoMolarAnteroPosterior: RelacaoMolarAnteroPosterior
    observacao: string
    arquivado?: boolean
  }

  export type AvaliacaoSocioEconomicaCreateManyDataInput = {
    id?: number
    idPessoa: number
    idLocal: number
    idUsuario: number
    qtdPessoasResidencia: number
    qtdComodosDormitorio: number
    qtdBens: number
    qtdTotalRendaUltimoMes: number
    escolaridadeMae: Escolaridade
    escolaridadePai: Escolaridade
    recebeBeneficioSocial?: boolean | null
    filhoDorDente6Meses?: boolean | null
    filhoNivelDor: number
    filhoVisitouDentista?: boolean | null
    filhoUltimaConsulta: UltimaConsulta
    filhoLocalConsulta: LocalConsulta
    motivoUltimaConsulta: MotivoUltimaConsulta
    avaliacaoUltimaConsulta: AvaliacaoUltimaConsulta
    filhoAvaliacaoBucal: AvaliacaoBucal
    filhoQtdEscovacoesPorDia: FilhoQtdEscovacoesPorDia
    frequenciaTrocaEscovas: FrequenciaTrocaEscovas
    usaFioDental: boolean
    usaPastaComFluor: boolean
    arquivado?: boolean
  }

  export type MarcadorConsumoAlimentarCreateManyDataInput = {
    id?: number
    idPessoa: number
    idUsuario: number
    idLocal: number
    saladaCrua: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    legumesVerdurasCozidos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    frutasFrescasSaladaDeFrutas: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    feijao: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    leiteOuIogurte: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    batataFritaBatataDePacoteSalgadosFritos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    hamburgerEmbutidos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosSalgadosSalgadinhoDePacote: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    refrigerante: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  }

  export type ExameUpdateWithoutDataInput = {
    pessoa?: PessoaUpdateOneRequiredWithoutExamesInput
    condicaoPeriodontal?: CondicaoPeriodontalUpdateOneWithoutExameInput
    local?: LocalUpdateOneRequiredWithoutExamesInput
    usuario?: UsuarioUpdateOneRequiredWithoutExamesInput
    traumatismoDentario?: TraumatismoDentarioUpdateOneWithoutExameInput
    marcadorConsumoAlimentar?: MarcadorConsumoAlimentarUpdateOneRequiredWithoutExameInput
    fluoroseDentaria?: EnumFluoroseDentariaFieldUpdateOperationsInput | FluoroseDentaria
    overjetMaxilarAnterior?: IntFieldUpdateOperationsInput | number
    overjetMandibularAnterior?: IntFieldUpdateOperationsInput | number
    mordidaAbertaVerticalAnterior?: IntFieldUpdateOperationsInput | number
    relacaoMolarAnteroPosterior?: EnumRelacaoMolarAnteroPosteriorFieldUpdateOperationsInput | RelacaoMolarAnteroPosterior
    observacao?: StringFieldUpdateOperationsInput | string
    dentes?: DenteUpdateManyWithoutExameInput
    Soho?: SohoUpdateOneWithoutExameInput
    CPQ?: CPQUpdateOneWithoutExameInput
    arquivado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExameUncheckedUpdateWithoutDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    idPessoa?: IntFieldUpdateOperationsInput | number
    idCondicaoPeriodontal?: NullableIntFieldUpdateOperationsInput | number | null
    idLocal?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    idTraumatismoDentario?: NullableIntFieldUpdateOperationsInput | number | null
    idMarcadorConsumoAlimentar?: IntFieldUpdateOperationsInput | number
    fluoroseDentaria?: EnumFluoroseDentariaFieldUpdateOperationsInput | FluoroseDentaria
    overjetMaxilarAnterior?: IntFieldUpdateOperationsInput | number
    overjetMandibularAnterior?: IntFieldUpdateOperationsInput | number
    mordidaAbertaVerticalAnterior?: IntFieldUpdateOperationsInput | number
    relacaoMolarAnteroPosterior?: EnumRelacaoMolarAnteroPosteriorFieldUpdateOperationsInput | RelacaoMolarAnteroPosterior
    observacao?: StringFieldUpdateOperationsInput | string
    dentes?: DenteUncheckedUpdateManyWithoutExameInput
    Soho?: SohoUncheckedUpdateOneWithoutExameInput
    CPQ?: CPQUncheckedUpdateOneWithoutExameInput
    arquivado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvaliacaoSocioEconomicaUpdateWithoutDataInput = {
    pessoa?: PessoaUpdateOneRequiredWithoutAvaliacaoSocioEconomicaInput
    local?: LocalUpdateOneRequiredWithoutAvaliacaoSocioEconomicaInput
    usuario?: UsuarioUpdateOneRequiredWithoutAvaliacaoSocioEconomicaInput
    qtdPessoasResidencia?: IntFieldUpdateOperationsInput | number
    qtdComodosDormitorio?: IntFieldUpdateOperationsInput | number
    qtdBens?: IntFieldUpdateOperationsInput | number
    qtdTotalRendaUltimoMes?: IntFieldUpdateOperationsInput | number
    escolaridadeMae?: EnumEscolaridadeFieldUpdateOperationsInput | Escolaridade
    escolaridadePai?: EnumEscolaridadeFieldUpdateOperationsInput | Escolaridade
    recebeBeneficioSocial?: NullableBoolFieldUpdateOperationsInput | boolean | null
    filhoDorDente6Meses?: NullableBoolFieldUpdateOperationsInput | boolean | null
    filhoNivelDor?: IntFieldUpdateOperationsInput | number
    filhoVisitouDentista?: NullableBoolFieldUpdateOperationsInput | boolean | null
    filhoUltimaConsulta?: EnumUltimaConsultaFieldUpdateOperationsInput | UltimaConsulta
    filhoLocalConsulta?: EnumLocalConsultaFieldUpdateOperationsInput | LocalConsulta
    motivoUltimaConsulta?: EnumMotivoUltimaConsultaFieldUpdateOperationsInput | MotivoUltimaConsulta
    avaliacaoUltimaConsulta?: EnumAvaliacaoUltimaConsultaFieldUpdateOperationsInput | AvaliacaoUltimaConsulta
    filhoAvaliacaoBucal?: EnumAvaliacaoBucalFieldUpdateOperationsInput | AvaliacaoBucal
    filhoQtdEscovacoesPorDia?: EnumFilhoQtdEscovacoesPorDiaFieldUpdateOperationsInput | FilhoQtdEscovacoesPorDia
    frequenciaTrocaEscovas?: EnumFrequenciaTrocaEscovasFieldUpdateOperationsInput | FrequenciaTrocaEscovas
    usaFioDental?: BoolFieldUpdateOperationsInput | boolean
    usaPastaComFluor?: BoolFieldUpdateOperationsInput | boolean
    arquivado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvaliacaoSocioEconomicaUncheckedUpdateWithoutDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    idPessoa?: IntFieldUpdateOperationsInput | number
    idLocal?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    qtdPessoasResidencia?: IntFieldUpdateOperationsInput | number
    qtdComodosDormitorio?: IntFieldUpdateOperationsInput | number
    qtdBens?: IntFieldUpdateOperationsInput | number
    qtdTotalRendaUltimoMes?: IntFieldUpdateOperationsInput | number
    escolaridadeMae?: EnumEscolaridadeFieldUpdateOperationsInput | Escolaridade
    escolaridadePai?: EnumEscolaridadeFieldUpdateOperationsInput | Escolaridade
    recebeBeneficioSocial?: NullableBoolFieldUpdateOperationsInput | boolean | null
    filhoDorDente6Meses?: NullableBoolFieldUpdateOperationsInput | boolean | null
    filhoNivelDor?: IntFieldUpdateOperationsInput | number
    filhoVisitouDentista?: NullableBoolFieldUpdateOperationsInput | boolean | null
    filhoUltimaConsulta?: EnumUltimaConsultaFieldUpdateOperationsInput | UltimaConsulta
    filhoLocalConsulta?: EnumLocalConsultaFieldUpdateOperationsInput | LocalConsulta
    motivoUltimaConsulta?: EnumMotivoUltimaConsultaFieldUpdateOperationsInput | MotivoUltimaConsulta
    avaliacaoUltimaConsulta?: EnumAvaliacaoUltimaConsultaFieldUpdateOperationsInput | AvaliacaoUltimaConsulta
    filhoAvaliacaoBucal?: EnumAvaliacaoBucalFieldUpdateOperationsInput | AvaliacaoBucal
    filhoQtdEscovacoesPorDia?: EnumFilhoQtdEscovacoesPorDiaFieldUpdateOperationsInput | FilhoQtdEscovacoesPorDia
    frequenciaTrocaEscovas?: EnumFrequenciaTrocaEscovasFieldUpdateOperationsInput | FrequenciaTrocaEscovas
    usaFioDental?: BoolFieldUpdateOperationsInput | boolean
    usaPastaComFluor?: BoolFieldUpdateOperationsInput | boolean
    arquivado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MarcadorConsumoAlimentarUpdateWithoutDataInput = {
    pessoa?: PessoaUpdateOneRequiredWithoutMarcadorConsumoAlimentarInput
    usuario?: UsuarioUpdateOneRequiredWithoutMarcadorConsumoAlimentarInput
    local?: LocalUpdateOneRequiredWithoutMarcadorConsumoAlimentarInput
    exame?: ExameUpdateOneWithoutMarcadorConsumoAlimentarInput
    saladaCrua?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    legumesVerdurasCozidos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    frutasFrescasSaladaDeFrutas?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    feijao?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    leiteOuIogurte?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    batataFritaBatataDePacoteSalgadosFritos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    hamburgerEmbutidos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosSalgadosSalgadinhoDePacote?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    refrigerante?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  }

  export type MarcadorConsumoAlimentarUncheckedUpdateWithoutDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    idPessoa?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    idLocal?: IntFieldUpdateOperationsInput | number
    exame?: ExameUncheckedUpdateOneWithoutMarcadorConsumoAlimentarInput
    saladaCrua?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    legumesVerdurasCozidos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    frutasFrescasSaladaDeFrutas?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    feijao?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    leiteOuIogurte?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    batataFritaBatataDePacoteSalgadosFritos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    hamburgerEmbutidos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosSalgadosSalgadinhoDePacote?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    refrigerante?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  }

  export type ExameCreateManyPessoaInput = {
    id?: number
    idData: number
    idCondicaoPeriodontal?: number | null
    idLocal: number
    idUsuario: number
    idTraumatismoDentario?: number | null
    idMarcadorConsumoAlimentar: number
    fluoroseDentaria: FluoroseDentaria
    overjetMaxilarAnterior: number
    overjetMandibularAnterior: number
    mordidaAbertaVerticalAnterior: number
    relacaoMolarAnteroPosterior: RelacaoMolarAnteroPosterior
    observacao: string
    arquivado?: boolean
  }

  export type AvaliacaoSocioEconomicaCreateManyPessoaInput = {
    id?: number
    idData: number
    idLocal: number
    idUsuario: number
    qtdPessoasResidencia: number
    qtdComodosDormitorio: number
    qtdBens: number
    qtdTotalRendaUltimoMes: number
    escolaridadeMae: Escolaridade
    escolaridadePai: Escolaridade
    recebeBeneficioSocial?: boolean | null
    filhoDorDente6Meses?: boolean | null
    filhoNivelDor: number
    filhoVisitouDentista?: boolean | null
    filhoUltimaConsulta: UltimaConsulta
    filhoLocalConsulta: LocalConsulta
    motivoUltimaConsulta: MotivoUltimaConsulta
    avaliacaoUltimaConsulta: AvaliacaoUltimaConsulta
    filhoAvaliacaoBucal: AvaliacaoBucal
    filhoQtdEscovacoesPorDia: FilhoQtdEscovacoesPorDia
    frequenciaTrocaEscovas: FrequenciaTrocaEscovas
    usaFioDental: boolean
    usaPastaComFluor: boolean
    arquivado?: boolean
  }

  export type MarcadorConsumoAlimentarCreateManyPessoaInput = {
    id?: number
    idData: number
    idUsuario: number
    idLocal: number
    saladaCrua: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    legumesVerdurasCozidos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    frutasFrescasSaladaDeFrutas: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    feijao: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    leiteOuIogurte: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    batataFritaBatataDePacoteSalgadosFritos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    hamburgerEmbutidos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosSalgadosSalgadinhoDePacote: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    refrigerante: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  }

  export type ExameUpdateWithoutPessoaInput = {
    data?: DataUpdateOneRequiredWithoutExamesInput
    condicaoPeriodontal?: CondicaoPeriodontalUpdateOneWithoutExameInput
    local?: LocalUpdateOneRequiredWithoutExamesInput
    usuario?: UsuarioUpdateOneRequiredWithoutExamesInput
    traumatismoDentario?: TraumatismoDentarioUpdateOneWithoutExameInput
    marcadorConsumoAlimentar?: MarcadorConsumoAlimentarUpdateOneRequiredWithoutExameInput
    fluoroseDentaria?: EnumFluoroseDentariaFieldUpdateOperationsInput | FluoroseDentaria
    overjetMaxilarAnterior?: IntFieldUpdateOperationsInput | number
    overjetMandibularAnterior?: IntFieldUpdateOperationsInput | number
    mordidaAbertaVerticalAnterior?: IntFieldUpdateOperationsInput | number
    relacaoMolarAnteroPosterior?: EnumRelacaoMolarAnteroPosteriorFieldUpdateOperationsInput | RelacaoMolarAnteroPosterior
    observacao?: StringFieldUpdateOperationsInput | string
    dentes?: DenteUpdateManyWithoutExameInput
    Soho?: SohoUpdateOneWithoutExameInput
    CPQ?: CPQUpdateOneWithoutExameInput
    arquivado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExameUncheckedUpdateWithoutPessoaInput = {
    id?: IntFieldUpdateOperationsInput | number
    idData?: IntFieldUpdateOperationsInput | number
    idCondicaoPeriodontal?: NullableIntFieldUpdateOperationsInput | number | null
    idLocal?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    idTraumatismoDentario?: NullableIntFieldUpdateOperationsInput | number | null
    idMarcadorConsumoAlimentar?: IntFieldUpdateOperationsInput | number
    fluoroseDentaria?: EnumFluoroseDentariaFieldUpdateOperationsInput | FluoroseDentaria
    overjetMaxilarAnterior?: IntFieldUpdateOperationsInput | number
    overjetMandibularAnterior?: IntFieldUpdateOperationsInput | number
    mordidaAbertaVerticalAnterior?: IntFieldUpdateOperationsInput | number
    relacaoMolarAnteroPosterior?: EnumRelacaoMolarAnteroPosteriorFieldUpdateOperationsInput | RelacaoMolarAnteroPosterior
    observacao?: StringFieldUpdateOperationsInput | string
    dentes?: DenteUncheckedUpdateManyWithoutExameInput
    Soho?: SohoUncheckedUpdateOneWithoutExameInput
    CPQ?: CPQUncheckedUpdateOneWithoutExameInput
    arquivado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvaliacaoSocioEconomicaUpdateWithoutPessoaInput = {
    data?: DataUpdateOneRequiredWithoutAvaliacaoSocioEconomicaInput
    local?: LocalUpdateOneRequiredWithoutAvaliacaoSocioEconomicaInput
    usuario?: UsuarioUpdateOneRequiredWithoutAvaliacaoSocioEconomicaInput
    qtdPessoasResidencia?: IntFieldUpdateOperationsInput | number
    qtdComodosDormitorio?: IntFieldUpdateOperationsInput | number
    qtdBens?: IntFieldUpdateOperationsInput | number
    qtdTotalRendaUltimoMes?: IntFieldUpdateOperationsInput | number
    escolaridadeMae?: EnumEscolaridadeFieldUpdateOperationsInput | Escolaridade
    escolaridadePai?: EnumEscolaridadeFieldUpdateOperationsInput | Escolaridade
    recebeBeneficioSocial?: NullableBoolFieldUpdateOperationsInput | boolean | null
    filhoDorDente6Meses?: NullableBoolFieldUpdateOperationsInput | boolean | null
    filhoNivelDor?: IntFieldUpdateOperationsInput | number
    filhoVisitouDentista?: NullableBoolFieldUpdateOperationsInput | boolean | null
    filhoUltimaConsulta?: EnumUltimaConsultaFieldUpdateOperationsInput | UltimaConsulta
    filhoLocalConsulta?: EnumLocalConsultaFieldUpdateOperationsInput | LocalConsulta
    motivoUltimaConsulta?: EnumMotivoUltimaConsultaFieldUpdateOperationsInput | MotivoUltimaConsulta
    avaliacaoUltimaConsulta?: EnumAvaliacaoUltimaConsultaFieldUpdateOperationsInput | AvaliacaoUltimaConsulta
    filhoAvaliacaoBucal?: EnumAvaliacaoBucalFieldUpdateOperationsInput | AvaliacaoBucal
    filhoQtdEscovacoesPorDia?: EnumFilhoQtdEscovacoesPorDiaFieldUpdateOperationsInput | FilhoQtdEscovacoesPorDia
    frequenciaTrocaEscovas?: EnumFrequenciaTrocaEscovasFieldUpdateOperationsInput | FrequenciaTrocaEscovas
    usaFioDental?: BoolFieldUpdateOperationsInput | boolean
    usaPastaComFluor?: BoolFieldUpdateOperationsInput | boolean
    arquivado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvaliacaoSocioEconomicaUncheckedUpdateWithoutPessoaInput = {
    id?: IntFieldUpdateOperationsInput | number
    idData?: IntFieldUpdateOperationsInput | number
    idLocal?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    qtdPessoasResidencia?: IntFieldUpdateOperationsInput | number
    qtdComodosDormitorio?: IntFieldUpdateOperationsInput | number
    qtdBens?: IntFieldUpdateOperationsInput | number
    qtdTotalRendaUltimoMes?: IntFieldUpdateOperationsInput | number
    escolaridadeMae?: EnumEscolaridadeFieldUpdateOperationsInput | Escolaridade
    escolaridadePai?: EnumEscolaridadeFieldUpdateOperationsInput | Escolaridade
    recebeBeneficioSocial?: NullableBoolFieldUpdateOperationsInput | boolean | null
    filhoDorDente6Meses?: NullableBoolFieldUpdateOperationsInput | boolean | null
    filhoNivelDor?: IntFieldUpdateOperationsInput | number
    filhoVisitouDentista?: NullableBoolFieldUpdateOperationsInput | boolean | null
    filhoUltimaConsulta?: EnumUltimaConsultaFieldUpdateOperationsInput | UltimaConsulta
    filhoLocalConsulta?: EnumLocalConsultaFieldUpdateOperationsInput | LocalConsulta
    motivoUltimaConsulta?: EnumMotivoUltimaConsultaFieldUpdateOperationsInput | MotivoUltimaConsulta
    avaliacaoUltimaConsulta?: EnumAvaliacaoUltimaConsultaFieldUpdateOperationsInput | AvaliacaoUltimaConsulta
    filhoAvaliacaoBucal?: EnumAvaliacaoBucalFieldUpdateOperationsInput | AvaliacaoBucal
    filhoQtdEscovacoesPorDia?: EnumFilhoQtdEscovacoesPorDiaFieldUpdateOperationsInput | FilhoQtdEscovacoesPorDia
    frequenciaTrocaEscovas?: EnumFrequenciaTrocaEscovasFieldUpdateOperationsInput | FrequenciaTrocaEscovas
    usaFioDental?: BoolFieldUpdateOperationsInput | boolean
    usaPastaComFluor?: BoolFieldUpdateOperationsInput | boolean
    arquivado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MarcadorConsumoAlimentarUpdateWithoutPessoaInput = {
    data?: DataUpdateOneRequiredWithoutMarcadorConsumoAlimentarInput
    usuario?: UsuarioUpdateOneRequiredWithoutMarcadorConsumoAlimentarInput
    local?: LocalUpdateOneRequiredWithoutMarcadorConsumoAlimentarInput
    exame?: ExameUpdateOneWithoutMarcadorConsumoAlimentarInput
    saladaCrua?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    legumesVerdurasCozidos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    frutasFrescasSaladaDeFrutas?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    feijao?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    leiteOuIogurte?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    batataFritaBatataDePacoteSalgadosFritos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    hamburgerEmbutidos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosSalgadosSalgadinhoDePacote?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    refrigerante?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  }

  export type MarcadorConsumoAlimentarUncheckedUpdateWithoutPessoaInput = {
    id?: IntFieldUpdateOperationsInput | number
    idData?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    idLocal?: IntFieldUpdateOperationsInput | number
    exame?: ExameUncheckedUpdateOneWithoutMarcadorConsumoAlimentarInput
    saladaCrua?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    legumesVerdurasCozidos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    frutasFrescasSaladaDeFrutas?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    feijao?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    leiteOuIogurte?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    batataFritaBatataDePacoteSalgadosFritos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    hamburgerEmbutidos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosSalgadosSalgadinhoDePacote?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    refrigerante?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  }

  export type ExameCreateManyLocalInput = {
    id?: number
    idData: number
    idPessoa: number
    idCondicaoPeriodontal?: number | null
    idUsuario: number
    idTraumatismoDentario?: number | null
    idMarcadorConsumoAlimentar: number
    fluoroseDentaria: FluoroseDentaria
    overjetMaxilarAnterior: number
    overjetMandibularAnterior: number
    mordidaAbertaVerticalAnterior: number
    relacaoMolarAnteroPosterior: RelacaoMolarAnteroPosterior
    observacao: string
    arquivado?: boolean
  }

  export type AvaliacaoSocioEconomicaCreateManyLocalInput = {
    id?: number
    idData: number
    idPessoa: number
    idUsuario: number
    qtdPessoasResidencia: number
    qtdComodosDormitorio: number
    qtdBens: number
    qtdTotalRendaUltimoMes: number
    escolaridadeMae: Escolaridade
    escolaridadePai: Escolaridade
    recebeBeneficioSocial?: boolean | null
    filhoDorDente6Meses?: boolean | null
    filhoNivelDor: number
    filhoVisitouDentista?: boolean | null
    filhoUltimaConsulta: UltimaConsulta
    filhoLocalConsulta: LocalConsulta
    motivoUltimaConsulta: MotivoUltimaConsulta
    avaliacaoUltimaConsulta: AvaliacaoUltimaConsulta
    filhoAvaliacaoBucal: AvaliacaoBucal
    filhoQtdEscovacoesPorDia: FilhoQtdEscovacoesPorDia
    frequenciaTrocaEscovas: FrequenciaTrocaEscovas
    usaFioDental: boolean
    usaPastaComFluor: boolean
    arquivado?: boolean
  }

  export type MarcadorConsumoAlimentarCreateManyLocalInput = {
    id?: number
    idData: number
    idPessoa: number
    idUsuario: number
    saladaCrua: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    legumesVerdurasCozidos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    frutasFrescasSaladaDeFrutas: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    feijao: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    leiteOuIogurte: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    batataFritaBatataDePacoteSalgadosFritos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    hamburgerEmbutidos: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosSalgadosSalgadinhoDePacote: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    refrigerante: FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  }

  export type ExameUpdateWithoutLocalInput = {
    data?: DataUpdateOneRequiredWithoutExamesInput
    pessoa?: PessoaUpdateOneRequiredWithoutExamesInput
    condicaoPeriodontal?: CondicaoPeriodontalUpdateOneWithoutExameInput
    usuario?: UsuarioUpdateOneRequiredWithoutExamesInput
    traumatismoDentario?: TraumatismoDentarioUpdateOneWithoutExameInput
    marcadorConsumoAlimentar?: MarcadorConsumoAlimentarUpdateOneRequiredWithoutExameInput
    fluoroseDentaria?: EnumFluoroseDentariaFieldUpdateOperationsInput | FluoroseDentaria
    overjetMaxilarAnterior?: IntFieldUpdateOperationsInput | number
    overjetMandibularAnterior?: IntFieldUpdateOperationsInput | number
    mordidaAbertaVerticalAnterior?: IntFieldUpdateOperationsInput | number
    relacaoMolarAnteroPosterior?: EnumRelacaoMolarAnteroPosteriorFieldUpdateOperationsInput | RelacaoMolarAnteroPosterior
    observacao?: StringFieldUpdateOperationsInput | string
    dentes?: DenteUpdateManyWithoutExameInput
    Soho?: SohoUpdateOneWithoutExameInput
    CPQ?: CPQUpdateOneWithoutExameInput
    arquivado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExameUncheckedUpdateWithoutLocalInput = {
    id?: IntFieldUpdateOperationsInput | number
    idData?: IntFieldUpdateOperationsInput | number
    idPessoa?: IntFieldUpdateOperationsInput | number
    idCondicaoPeriodontal?: NullableIntFieldUpdateOperationsInput | number | null
    idUsuario?: IntFieldUpdateOperationsInput | number
    idTraumatismoDentario?: NullableIntFieldUpdateOperationsInput | number | null
    idMarcadorConsumoAlimentar?: IntFieldUpdateOperationsInput | number
    fluoroseDentaria?: EnumFluoroseDentariaFieldUpdateOperationsInput | FluoroseDentaria
    overjetMaxilarAnterior?: IntFieldUpdateOperationsInput | number
    overjetMandibularAnterior?: IntFieldUpdateOperationsInput | number
    mordidaAbertaVerticalAnterior?: IntFieldUpdateOperationsInput | number
    relacaoMolarAnteroPosterior?: EnumRelacaoMolarAnteroPosteriorFieldUpdateOperationsInput | RelacaoMolarAnteroPosterior
    observacao?: StringFieldUpdateOperationsInput | string
    dentes?: DenteUncheckedUpdateManyWithoutExameInput
    Soho?: SohoUncheckedUpdateOneWithoutExameInput
    CPQ?: CPQUncheckedUpdateOneWithoutExameInput
    arquivado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvaliacaoSocioEconomicaUpdateWithoutLocalInput = {
    data?: DataUpdateOneRequiredWithoutAvaliacaoSocioEconomicaInput
    pessoa?: PessoaUpdateOneRequiredWithoutAvaliacaoSocioEconomicaInput
    usuario?: UsuarioUpdateOneRequiredWithoutAvaliacaoSocioEconomicaInput
    qtdPessoasResidencia?: IntFieldUpdateOperationsInput | number
    qtdComodosDormitorio?: IntFieldUpdateOperationsInput | number
    qtdBens?: IntFieldUpdateOperationsInput | number
    qtdTotalRendaUltimoMes?: IntFieldUpdateOperationsInput | number
    escolaridadeMae?: EnumEscolaridadeFieldUpdateOperationsInput | Escolaridade
    escolaridadePai?: EnumEscolaridadeFieldUpdateOperationsInput | Escolaridade
    recebeBeneficioSocial?: NullableBoolFieldUpdateOperationsInput | boolean | null
    filhoDorDente6Meses?: NullableBoolFieldUpdateOperationsInput | boolean | null
    filhoNivelDor?: IntFieldUpdateOperationsInput | number
    filhoVisitouDentista?: NullableBoolFieldUpdateOperationsInput | boolean | null
    filhoUltimaConsulta?: EnumUltimaConsultaFieldUpdateOperationsInput | UltimaConsulta
    filhoLocalConsulta?: EnumLocalConsultaFieldUpdateOperationsInput | LocalConsulta
    motivoUltimaConsulta?: EnumMotivoUltimaConsultaFieldUpdateOperationsInput | MotivoUltimaConsulta
    avaliacaoUltimaConsulta?: EnumAvaliacaoUltimaConsultaFieldUpdateOperationsInput | AvaliacaoUltimaConsulta
    filhoAvaliacaoBucal?: EnumAvaliacaoBucalFieldUpdateOperationsInput | AvaliacaoBucal
    filhoQtdEscovacoesPorDia?: EnumFilhoQtdEscovacoesPorDiaFieldUpdateOperationsInput | FilhoQtdEscovacoesPorDia
    frequenciaTrocaEscovas?: EnumFrequenciaTrocaEscovasFieldUpdateOperationsInput | FrequenciaTrocaEscovas
    usaFioDental?: BoolFieldUpdateOperationsInput | boolean
    usaPastaComFluor?: BoolFieldUpdateOperationsInput | boolean
    arquivado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvaliacaoSocioEconomicaUncheckedUpdateWithoutLocalInput = {
    id?: IntFieldUpdateOperationsInput | number
    idData?: IntFieldUpdateOperationsInput | number
    idPessoa?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    qtdPessoasResidencia?: IntFieldUpdateOperationsInput | number
    qtdComodosDormitorio?: IntFieldUpdateOperationsInput | number
    qtdBens?: IntFieldUpdateOperationsInput | number
    qtdTotalRendaUltimoMes?: IntFieldUpdateOperationsInput | number
    escolaridadeMae?: EnumEscolaridadeFieldUpdateOperationsInput | Escolaridade
    escolaridadePai?: EnumEscolaridadeFieldUpdateOperationsInput | Escolaridade
    recebeBeneficioSocial?: NullableBoolFieldUpdateOperationsInput | boolean | null
    filhoDorDente6Meses?: NullableBoolFieldUpdateOperationsInput | boolean | null
    filhoNivelDor?: IntFieldUpdateOperationsInput | number
    filhoVisitouDentista?: NullableBoolFieldUpdateOperationsInput | boolean | null
    filhoUltimaConsulta?: EnumUltimaConsultaFieldUpdateOperationsInput | UltimaConsulta
    filhoLocalConsulta?: EnumLocalConsultaFieldUpdateOperationsInput | LocalConsulta
    motivoUltimaConsulta?: EnumMotivoUltimaConsultaFieldUpdateOperationsInput | MotivoUltimaConsulta
    avaliacaoUltimaConsulta?: EnumAvaliacaoUltimaConsultaFieldUpdateOperationsInput | AvaliacaoUltimaConsulta
    filhoAvaliacaoBucal?: EnumAvaliacaoBucalFieldUpdateOperationsInput | AvaliacaoBucal
    filhoQtdEscovacoesPorDia?: EnumFilhoQtdEscovacoesPorDiaFieldUpdateOperationsInput | FilhoQtdEscovacoesPorDia
    frequenciaTrocaEscovas?: EnumFrequenciaTrocaEscovasFieldUpdateOperationsInput | FrequenciaTrocaEscovas
    usaFioDental?: BoolFieldUpdateOperationsInput | boolean
    usaPastaComFluor?: BoolFieldUpdateOperationsInput | boolean
    arquivado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MarcadorConsumoAlimentarUpdateWithoutLocalInput = {
    data?: DataUpdateOneRequiredWithoutMarcadorConsumoAlimentarInput
    pessoa?: PessoaUpdateOneRequiredWithoutMarcadorConsumoAlimentarInput
    usuario?: UsuarioUpdateOneRequiredWithoutMarcadorConsumoAlimentarInput
    exame?: ExameUpdateOneWithoutMarcadorConsumoAlimentarInput
    saladaCrua?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    legumesVerdurasCozidos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    frutasFrescasSaladaDeFrutas?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    feijao?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    leiteOuIogurte?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    batataFritaBatataDePacoteSalgadosFritos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    hamburgerEmbutidos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosSalgadosSalgadinhoDePacote?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    refrigerante?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  }

  export type MarcadorConsumoAlimentarUncheckedUpdateWithoutLocalInput = {
    id?: IntFieldUpdateOperationsInput | number
    idData?: IntFieldUpdateOperationsInput | number
    idPessoa?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    exame?: ExameUncheckedUpdateOneWithoutMarcadorConsumoAlimentarInput
    saladaCrua?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    legumesVerdurasCozidos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    frutasFrescasSaladaDeFrutas?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    feijao?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    leiteOuIogurte?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    batataFritaBatataDePacoteSalgadosFritos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    hamburgerEmbutidos?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosSalgadosSalgadinhoDePacote?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    bolachasBiscoitosDocesRecheadosDocesBalasChocolates?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
    refrigerante?: EnumFrequenciaIngestaoAlimentoBebidaUltimosSeteDiasFieldUpdateOperationsInput | FrequenciaIngestaoAlimentoBebidaUltimosSeteDias
  }

  export type DenteCreateManyExameInput = {
    id?: number
    leite?: boolean
    removido?: MotivoRemovido | null
    numero: number
    oclusal?: number | null
    mesial?: number | null
    distal?: number | null
    palatina?: number | null
    vestibular?: number | null
    trat?: number | null
    pufa?: number | null
  }

  export type DenteUpdateWithoutExameInput = {
    leite?: BoolFieldUpdateOperationsInput | boolean
    removido?: NullableEnumMotivoRemovidoFieldUpdateOperationsInput | MotivoRemovido | null
    numero?: IntFieldUpdateOperationsInput | number
    oclusal?: NullableIntFieldUpdateOperationsInput | number | null
    mesial?: NullableIntFieldUpdateOperationsInput | number | null
    distal?: NullableIntFieldUpdateOperationsInput | number | null
    palatina?: NullableIntFieldUpdateOperationsInput | number | null
    vestibular?: NullableIntFieldUpdateOperationsInput | number | null
    trat?: NullableIntFieldUpdateOperationsInput | number | null
    pufa?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DenteUncheckedUpdateWithoutExameInput = {
    id?: IntFieldUpdateOperationsInput | number
    leite?: BoolFieldUpdateOperationsInput | boolean
    removido?: NullableEnumMotivoRemovidoFieldUpdateOperationsInput | MotivoRemovido | null
    numero?: IntFieldUpdateOperationsInput | number
    oclusal?: NullableIntFieldUpdateOperationsInput | number | null
    mesial?: NullableIntFieldUpdateOperationsInput | number | null
    distal?: NullableIntFieldUpdateOperationsInput | number | null
    palatina?: NullableIntFieldUpdateOperationsInput | number | null
    vestibular?: NullableIntFieldUpdateOperationsInput | number | null
    trat?: NullableIntFieldUpdateOperationsInput | number | null
    pufa?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DenteUncheckedUpdateManyWithoutDentesInput = {
    id?: IntFieldUpdateOperationsInput | number
    leite?: BoolFieldUpdateOperationsInput | boolean
    removido?: NullableEnumMotivoRemovidoFieldUpdateOperationsInput | MotivoRemovido | null
    numero?: IntFieldUpdateOperationsInput | number
    oclusal?: NullableIntFieldUpdateOperationsInput | number | null
    mesial?: NullableIntFieldUpdateOperationsInput | number | null
    distal?: NullableIntFieldUpdateOperationsInput | number | null
    palatina?: NullableIntFieldUpdateOperationsInput | number | null
    vestibular?: NullableIntFieldUpdateOperationsInput | number | null
    trat?: NullableIntFieldUpdateOperationsInput | number | null
    pufa?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}