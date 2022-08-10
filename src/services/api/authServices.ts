import api from "./api";

type loginRequest = {
  email: string;
  senha: string;
};

type validateTokenRequest = {
  id: string;
  token: string;
};

type ResetPasswordInfo = {
  email: string;
  senhaAtual: string;
  senhaNova: string;
};

export async function login(loginInfo: loginRequest) {
  return await api.post("/auth/login", loginInfo);
}

export async function validateToken(validateTokenInfo: validateTokenRequest) {
  return await api.post("/auth/validate-token", validateTokenInfo);
}

export async function resetPassword(data: ResetPasswordInfo, token: string) {
  return await api.post("/auth/reset-password", data, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}
