import { Pessoa } from "../../Types";
import api from "./api";

type createPersonType = {
  nascimento: string;
  nome: string;
  genero: string;
  etniaPrincipal: string;
  etniaSecundaria: string | null;
};

export async function getPeople() {
  return await api.get<Pessoa[]>(`/people`);
}

export async function getPerson(id: string) {
  return await api.get<Pessoa>(`/people/${id}`);
}

export async function createPerson(people: createPersonType, token: string) {
  return await api.post<Pessoa>("/people", people, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}

export async function personAge(id: string, token: string) {
  return await api.get(`/people/${id}/age`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}
