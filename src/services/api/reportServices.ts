import api from "./api";

export async function generateExamsReport(token: string) {
  return await api.post(
    "/reports/exams",
    {},
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
}

export async function generateSocioeconsReport(token: string) {
  return await api.post(
    "/reports/socioEconomicEvaluations",
    {},
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
}
