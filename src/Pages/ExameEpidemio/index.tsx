import React, { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import {
  archiveExam,
  getExams,
  searchExams,
} from "../../services/api/examServices";
import moment from "moment";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import Search from "../../Components/Search";

export default function ExameEpidemio() {
  const [examList, setExamList] = useState<any[]>([]);
  const [change, setChange] = useState<boolean>(false);

  async function getExamData() {
    const user = JSON.parse(localStorage.getItem("user")!);
    const { data } = await getExams(user.token);
    setExamList(data);
  }

  useEffect(() => {
    getExamData();
    setChange(false);
  }, [change]);

  function formatDate({ dia, mes, ano }: any) {
    const date = moment(`${ano}/${mes}/${dia}`, "YYYY/MM/DD").format(
      "DD/MM/YY"
    );
    return date;
  }

  async function handleDelete(id: number) {
    const user = JSON.parse(localStorage.getItem("user")!);
    try {
      await archiveExam(id, user.token);
      setChange(true);
      toast.success("Exame arquivado com sucesso!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    } catch (error) {
      toast.error("Não foi deletar o exame", {
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

  async function handleSearch(id: string) {
    const user = JSON.parse(localStorage.getItem("user")!);
    if (id === "") {
      getExamData();
    } else {
      const { data } = await searchExams(parseInt(id), user.token);
      setExamList(data);
    }
  }

  return (
    <div className="container my-3">
      <h1 className="text-center lead fs-3">Exame epidemiológico</h1>
      <div>
        <Link className="col-auto" to="/app">
          <FiArrowLeft size="1.9rem" />
        </Link>
      </div>
      <hr />
      <div className="mt-3 d-flex flex-column gap-4">
        <div>
          <Link to="/app/exame-epidemio-form">
            <button className="btn btn-primary btn-lg w-100">Novo exame</button>
          </Link>
        </div>
        <Search executeSearch={handleSearch} />
        <div className="d-flex justify-content-between align-items-center px-4 fs-5 ">
          <span className="text-primary">#</span>

          <span>Data</span>
          <span>Gerenciar</span>
        </div>
        {examList.map((examItem) => (
          <div
            key={examItem.id}
            className="d-flex justify-content-between align-items-center border border-primary p-3 px-4 fs-4"
            style={{
              borderRadius: "0.75rem",
            }}
          >
            <div className="text-primary">{examItem.id}</div>

            <div>{formatDate(examItem.data)}</div>
            <div>
              <button
                onClick={() => {
                  handleDelete(examItem.id);
                }}
                className="btn btn-danger btn-sm"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
