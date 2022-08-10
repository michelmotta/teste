import axios from "axios";

const ibgeApi = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades/estados/",
});

export async function getMunicipios(uf: String) {
  return await ibgeApi.get(`/${uf}/municipios`);
}

export async function getUfs() {
  return await ibgeApi.get("/");
}
