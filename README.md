<div align="center">
<img src="https://github.com/nes-facom/2022.1_sbms-saude-bucal-frontend/blob/main/public/favicon.ico" width="100" />

## Saúde Bucal MS - Frontend

Software de coleta de dados de saúde bucal.

<img src="https://shields.io/badge/stack-React-5ed3f3?logo=react&style=flat-square" alt="stack-vuejs"/>
<img src="https://shields.io/badge/lang-TypeScript-3178C6?logo=typescript&style=flat-square" alt="lang-typescript"/>

</div>

# Frontend

## Configuração do runtime

Ambiente de execução: [NodeJS](https://nodejs.org/en/about/) v16.14.2 (Recomendado usar [NVM](https://github.com/nvm-sh/nvm) caso você já tenha uma versão do Node instalada)

Gerenciador de pacotes: NPM v8.5.0 (É instalado automaticamente com o NodeJS).

## Dependências externas

[Esta API](https://servicodados.ibge.gov.br/api/docs/localidades) para consultar cidades e estados. (Ou equivalente).


## Variáveis de ambiente

`REACT_APP_API_URL`: URL para a API do Backend.

## Ambientes de desenvolvimento e produção

Após definir as variáveis de ambiente e clonar o repositório, execute o seguinte comando para instalar as dependências:

```
npm i
```

### Ambiente de desenvolvimento

#### Configurando variáveis de ambiente

Crie um arquivo na raíz do repositório, chamado `.env`, e copie o conteúdo do arquivo `.env.example` nesse arquivo, e preencha os valores das variáveis de acordo com a descrição fornecida na seção **Variáveis de ambiente**.

#### Scripts

Para iniciar o servidor de desenvolzvimento, utilize o seguinte comando:

```
npm run start
```

### Ambiente de produção

#### Configurando variáveis de ambiente

Você pode utilizar o arquivo `.env` para gerenciar as variáveis de ambiente no ambiente de produção, porém não é recomendado. Verifique em seu serviço de hospedagem como é feita configuração de variáveis de ambiente.

Para "compilar" o projeto, utilize o seguinte comando

```
npm run build
```

PS.: Os arquivos compilados ficam no diretório `build/`.

O arquivo `index.html` é o _entry point_ da aplicação, e deve ser o arquivo servido quando o usuário acessar o site.

Para fazer _deploy_ em ambientes como [Vercel](https://vercel.com/solutions/react), [Netlify](https://www.netlify.com/blog/2016/07/22/deploy-react-apps-in-less-than-30-seconds/), entre outros, siga os passos fornecidos pelos respectivos ambientes.
