import React, { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { getLocations } from "../../services/api/locationServices";

export default function SocioEcon() {
  const [locationList, setLocationList] = useState<any[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function getSocioEconomicData() {
      const user = JSON.parse(localStorage.getItem("user")!);
      const response = await getLocations(user.token);

      setLocationList(response);
    }

    getSocioEconomicData();
  }, [navigate]);

  return (
    <div className="container my-3">
      <h1 className="text-center lead fs-3">Locais</h1>
      <div>
        <Link className="col-auto" to="/app">
          <FiArrowLeft size="1.9rem" />
        </Link>
      </div>
      <hr />
      <div className="mt-3 d-flex flex-column gap-4">
        <div>
          <Link to="/app/create-location">
            <button className="btn btn-primary btn-lg w-100">Novo Local</button>
          </Link>
        </div>
        <div
          className="d-flex justify-content-between align-items-center px-4 fs-4"
          style={{
            borderRadius: "0.75rem",
          }}
        >
          <div className="text-primary">#</div>

          <div>Município</div>

          <div>Escola</div>
        </div>
        <hr className="m-0" />
        {locationList.map((locationItem) => {
          return (
            <div
              className="d-flex justify-content-between align-items-center border border-primary p-3 px-4 fs-4"
              style={{
                borderRadius: "0.75rem",
              }}
            >
              <div className="text-primary">{locationItem.id}</div>

              <div>{locationItem.municipio}</div>

              <div>{locationItem.escola}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
