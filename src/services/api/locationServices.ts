import { Local, Prisma } from "../../Types";
import api from "./api";

type CreateLocation = {
  escola: string;
  municipio: string;
};

export type listLocation = Omit<Local, "municipio" | "setorCensitario">;

export async function getLocations(token: String): Promise<listLocation[]> {
  const response = await api.get<listLocation[]>(`/locations`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data as listLocation[];
}

export async function getLocation(token: String, id: number) {
  const response = await api.get<listLocation>(`/locations/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function createLocation(location: CreateLocation, token: string) {
  return api.post<listLocation>("/locations", location, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}

export async function updateLocation(
  id: string,
  location: Prisma.LocalUpdateInput,
  token: string
) {
  return await api.put<listLocation>(`/locations/${id}`, location, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}

export async function deleteLocation(id: string, token: string) {
  return await api.delete(`/locations/${id}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}
