import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import Card from "../../Components/Card";
import { FaUser } from "react-icons/fa";

export default function Home() {
  return (
    <div className="home">
      <h1 className="fs-3 lead text-center ">Bem vindo(a) ao sistema!</h1>
      <div className="mt-5 row row-cols-1 row-cols-md-2 g-3">
        <div className="col">
          <Link to="login">
            <Card>
              <FaUser size="4rem" strokeWidth={1} />
              <p>Faça Login</p>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
