import Card from "../../Components/Card";
import { FaMoneyBill, FaTooth, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./index.scss";
import {
  generateExamsReport,
  generateSocioeconsReport,
} from "../../services/api/reportServices";
import { FiArrowLeft } from "react-icons/fi";

export default function ConsultarRelatorio() {
  const [user, setUser] = useState<any>();
  const [showRequests, setShowRequests] = useState<boolean>(false);
  const [examReportRequest, setExamReportRequest] = useState(false);
  const [socioEconReportRequest, setSocioEconReportRequest] = useState(false);

  async function generateExamReport() {
    if (!examReportRequest) {
      try {
        await generateExamsReport(user.token);
        setExamReportRequest(true);
      } catch (error) {
        console.log(error);
      }
    }
  }

  async function generateSocioeconReport() {
    if (!socioEconReportRequest) {
      try {
        await generateSocioeconsReport(user.token);
        setSocioEconReportRequest(true);
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")!);
    setUser(user);
    if (user.role === "ADMIN") {
      setShowRequests(true);
    }
  }, []);

  return (
    <div className="container mt-3">
      <h1 className="text-center lead fs-1">Relatórios</h1>
      <div>
        <Link className="col-auto" to="/app">
          <FiArrowLeft size="1.9rem" />
        </Link>
      </div>
      <div className="mt-5">
        {showRequests && (
          <>
            <h2 className="lead fs-2 text-center">Gerar Relatórios</h2>
            <div className="row row-cols-1 row-cols-md-2 g-3">
              <div className="col">
                <div
                  className={
                    socioEconReportRequest ? "exam-ready" : "card-div"
                  }
                  onClick={generateSocioeconReport}
                >
                  <Card done={socioEconReportRequest}>
                    {socioEconReportRequest ? (
                      <FaCheck size="4rem" />
                    ) : (
                      <FaMoneyBill size="4rem" />
                    )}
                    <p className="m-0 mt-1 fs-3 lead text-center">
                      Gerar Avaliações Socioeconômicas
                    </p>
                  </Card>
                </div>
              </div>
              <div className="col">
                <div
                  className={examReportRequest ? "exam-ready" : "card-div"}
                  onClick={generateExamReport}
                >
                  <Card done={examReportRequest}>
                    {examReportRequest ? (
                      <FaCheck size="4rem" />
                    ) : (
                      <FaTooth size="4rem" />
                    )}
                    <p className="m-0 mt-1 fs-3 lead text-center">
                      Gerar Exames Epidemiológicos
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </>
        )}
        <h2 className="lead fs-2 mt-4 text-center">Baixar Relatórios</h2>
        <div className="row row-cols-1 row-cols-md-2 g-3">
          <div className="col">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href={
                process.env.REACT_APP_API_URL +
                "/reports/socioEconomicEvaluations"
              }
            >
              <Card>
                <FaMoneyBill size="4rem" />
                <p className="m-0 mt-1 fs-3 lead text-center">
                  Avaliações socioeconômicas
                </p>
              </Card>
            </a>
          </div>
          <div className="col">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href={process.env.REACT_APP_API_URL + "/reports/exams"}
            >
              <Card>
                <FaTooth size="4rem" />
                <p className="m-0 mt-1 fs-3 lead text-center">
                  Exames Epidemiológicos
                </p>
              </Card>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
