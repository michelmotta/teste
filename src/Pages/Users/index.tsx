import React, { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { FaTrash, FaTrashRestore } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import {
  getUsers,
  activateUser,
  deactivateUser,
} from "../../services/api/userServices";
import { Usuario } from "../../Types";
import { toast } from "react-toastify";

export default function Users() {
  const [userList, setUserList] = useState<Usuario[]>([]);
  const [change, setChange] = useState<boolean>(false);

  async function getSocioEconomicData() {
    const user = JSON.parse(localStorage.getItem("user")!);
    const response = await getUsers(user.token);
    const { data } = response;
    setUserList(data);
  }

  async function handleDeativateUser(id: number) {
    const user = JSON.parse(localStorage.getItem("user")!);
    if (user.id === id) {
      toast.warning("Você não pode deletar você mesmo!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
      return;
    }
    try {
      await deactivateUser(id, user.token);
      toast.success("Usuario desativado com sucesso", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
      setChange(true);
    } catch (error) {
      toast.error("Erro ao desativar usuario", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    }
  }

  async function handleAtivateUser(id: number) {
    const user = JSON.parse(localStorage.getItem("user")!);
    try {
      await activateUser(id, user.token);
      toast.success("Usuario ativado com sucesso", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
      setChange(true);
    } catch (e) {
      toast.error("Erro ao ativar usuario", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    }
  }

  const navigate = useNavigate();

  useEffect(() => {
    getSocioEconomicData();
    window.scrollTo(0, 0);
    setChange(false);
  }, [navigate, change]);

  return (
    <div className="container my-3">
      <h1 className="text-center lead fs-3">Usuários</h1>
      <div>
        <Link className="col-auto" to="/app">
          <FiArrowLeft size="1.9rem" />
        </Link>
      </div>
      <hr />
      <div className="mt-3 d-flex flex-column gap-4">
        <div>
          <Link to="/app/create-user">
            <button className="btn btn-primary btn-lg w-100">
              Novo usuário
            </button>
          </Link>
        </div>

        <div
          className="d-flex justify-content-between align-items-center px-4 fs-4"
          style={{
            borderRadius: "0.75rem",
          }}
        >
          <div>Nome</div>
          <div>Papel</div>
          <div>Gerenciar</div>
        </div>
        <hr className="m-0" />
        {userList.map((user) => {
          return (
            <div
              key={user.id}
              className="d-flex justify-content-between align-items-center p-3 px-4 fs-4 border border-primary"
              style={{
                borderRadius: "0.75rem",
              }}
            >
              <div>{user.nome}</div>

              <div>{user.papel}</div>
              <div>
                {user.ativo && (
                  <button
                    onClick={() => {
                      handleDeativateUser(user.id);
                    }}
                    className="btn btn-danger btn-sm"
                  >
                    <FaTrash />
                  </button>
                )}
                {!user.ativo && (
                  <button
                    onClick={() => {
                      handleAtivateUser(user.id);
                    }}
                    className="btn btn-success btn-sm"
                  >
                    <FaTrashRestore />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
