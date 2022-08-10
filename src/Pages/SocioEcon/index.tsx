import React, { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import {
  getSocioEcons,
  searchSocios,
} from "../../services/api/socioEconServices";
import ListRow from "../../Components/ListRow";
import moment from "moment";
import Search from "../../Components/Search";

export default function SocioEcon() {
  const [socioEconomicList, setSocioEconomicList] = useState<any[]>([]);

  const navigate = useNavigate();

  async function getSocioEconomicData() {
    const user = JSON.parse(localStorage.getItem("user")!);
    const response: any = await getSocioEcons(user.token);
    const { data } = response;

    setSocioEconomicList(data);
  }

  useEffect(() => {
    getSocioEconomicData();
  }, [navigate]);

  function formatDate({ dia, mes, ano }: any) {
    const date = moment(`${ano}/${mes}/${dia}`, "YYYY/MM/DD").format(
      "DD/MM/YY"
    );
    return date;
  }

  async function handleSearch(id: string) {
    const user = JSON.parse(localStorage.getItem("user")!);
    if (id === "") {
      getSocioEconomicData();
    } else {
      const { data } = await searchSocios(parseInt(id), user.token);
      setSocioEconomicList(data);
    }
  }

  return (
    <div className="container my-3">
      <h1 className="text-center lead fs-3">Avaliação socioeconômica</h1>
      <div>
        <Link className="col-auto" to="/app">
          <FiArrowLeft size="1.9rem" />
        </Link>
      </div>
      <hr />
      <div className="mt-3 d-flex flex-column gap-4">
        <div>
          <Link to="/app/socio-econ-form">
            <button className="btn btn-primary btn-lg w-100">
              Nova avaliação
            </button>
          </Link>
        </div>
        <Search executeSearch={handleSearch} />
        <div
          className="d-flex justify-content-between align-items-center px-4 fs-4"
          style={{
            borderRadius: "0.75rem",
          }}
        >
          <div className="text-primary">#</div>

          <div>Data</div>
        </div>
        <hr className="m-0" />
        {socioEconomicList.map((socioEconomicItem) => {
          return (
            <ListRow
              key={socioEconomicItem.id}
              id={socioEconomicItem.id}
              date={formatDate(socioEconomicItem.data)}
            />
          );
        })}
      </div>
    </div>
  );
}
