import { Prisma, Usuario } from "../../Types";
import api from "./api";

type CreateUser = {
  nome: string;
  email: string;
  senha: string;
  papel: string;
  idEquipe: number | null;
};

export async function createUser(user: CreateUser, token: string) {
  return api.post<Usuario>("/users", user, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}

export async function getUsers(token: string) {
  return await api.get<Usuario[]>("/users", {
    headers: { Authorization: "Bearer " + token },
  });
}

export async function getUser(id: string, token: String) {
  return await api.get<Usuario>(`/users/${id}`, {
    headers: { Authorization: "Bearer " + token },
  });
}

export async function updateUser(
  id: string,
  user: Prisma.UsuarioUpdateInput,
  token: string
) {
  return await api.put<Usuario>(`/users/${id}`, user, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}

export async function activateUser(id: number, token: string) {
  return await api.post(
    `/users/${id.toString()}/activate`,
    {},
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
}

export async function deactivateUser(id: number, token: string) {
  return await api.post(
    `/users/${id.toString()}/deactivate`,
    {},
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
}
