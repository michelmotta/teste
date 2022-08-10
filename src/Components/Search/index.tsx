import React, { PropsWithoutRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./index.scss";

export default function Search({
  executeSearch,
}: PropsWithoutRef<{
  executeSearch: (value: string) => void;
}>) {
  const [search, setSearch] = useState("");

  async function handleSearch(e: any) {
    e.preventDefault();
    executeSearch(search);
  }
  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        placeholder="Pesquisar por id do paciente"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={(e) => handleSearch(e)} className="search-button">
        <FiSearch />
      </button>
    </div>
  );
}
