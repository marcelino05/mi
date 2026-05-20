import { useState, useEffect } from "react";
import api from "../../services/api.js";
import Tabela from "./components/tables/Tabelas.jsx";
import Layout from "../../components/layout/Layout.jsx";

function Alunos() {
  return (
    <Layout>
      <div className="main_alunos">
        <div className="aluno_top">
          <h1>Alunos</h1>

          <button>
            <i className="bi bi-person-plus-fill"></i>
            Novo Aluno
          </button>
        </div>

        <div className="aluno_content">
          <Tabela />
        </div>
      </div>
    </Layout>
      );

}

export default Alunos;