import React, { useEffect, useState } from "react";
import {
  FaEdit,
  FaMapMarkedAlt,
  FaMoneyBill,
  FaTooth,
  FaUser,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../Components/Card";

export default function AppIndex() {
  const [user, setUser] = useState<any>();
  const [renderSE, setRenderSE] = useState(true);
  const [renderEE, setRenderEE] = useState(true);
  const [renderCR, setRenderCR] = useState(true);
  const [renderGU, setRenderGU] = useState(true);
  const [renderLO, setRenderLO] = useState(true);

  const navegate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user")!);

      switch (user.role) {
        case "DENTISTA":
          setRenderSE(true);
          setRenderEE(true);
          setRenderCR(false);
          setRenderGU(false);
          setRenderLO(false);
          break;
        case "ASSISTENTE":
          setRenderSE(true);
          setRenderEE(true);
          setRenderCR(false);
          setRenderGU(false);
          setRenderLO(false);
          break;
        case "ARROLADOR":
          setRenderSE(true);
          setRenderEE(false);
          setRenderCR(false);
          setRenderGU(false);
          setRenderLO(false);
      }
      setUser(user);
    } else {
      navegate("/");
    }
  }, [navegate]);

  return (
    <div className="container mt-3">
      <h1 className="fs-3 lead text-center">
        Bem vindo(a) {user ? user.name : "Usuário"}!
      </h1>

      <div className="mt-5">
        <div className="row row-cols-1 row-cols-md-2 g-3">
          {renderSE && (
            <div className="col">
              <Link to="/app/socio-econ">
                <Card>
                  <FaMoneyBill size="4rem" />
                  <p className="m-0 mt-1 fs-3 lead text-center">
                    Avaliações socioeconômicas
                  </p>
                </Card>
              </Link>
            </div>
          )}
          {renderEE && (
            <div className="col">
              <Link to="/app/exame-epidemio">
                <Card>
                  <FaTooth size="4rem" />
                  <p className="m-0 mt-1 fs-3 lead text-center">
                    Exames epidemiológicos
                  </p>
                </Card>
              </Link>
            </div>
          )}
          {renderCR && (
            <div className="col">
              <Link to="/app/consultar-relatorios">
                <Card>
                  <FaEdit size="4rem" />
                  <p className="m-0 mt-1 fs-3 lead text-center">
                    Consultar relatórios
                  </p>
                </Card>
              </Link>
            </div>
          )}
          {renderGU && (
            <div className="col">
              <Link to="/app/users">
                <Card>
                  <FaUser size="4rem" />
                  <p className="m-0 mt-1 fs-3 lead text-center">
                    Gerenciar usuários
                  </p>
                </Card>
              </Link>
            </div>
          )}
          {renderLO && (
            <div className="col">
              <Link to="/app/locations">
                <Card>
                  <FaMapMarkedAlt size="4rem" />
                  <p className="m-0 mt-1 fs-3 lead text-center">
                    Gerenciar Locais
                  </p>
                </Card>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
