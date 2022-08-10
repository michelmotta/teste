import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

export default function Header() {
  const navigate = useNavigate();

  function findHome() {
    if (localStorage.getItem("user")) {
      navigate("/app");
    } else {
      navigate("/");
    }
  }

  return (
    <div className="header">
      <div className="pointer" onClick={findHome}>
        <h1 className="name">SBMS</h1>
      </div>
      <div className="pointer" onClick={findHome}>
        Home
      </div>
    </div>
  );
}
