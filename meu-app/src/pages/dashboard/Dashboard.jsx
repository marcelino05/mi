import api from "../../services/api.js";
import "./Dashboard.css";

// COMPONENTES
import Header from "../../components/header/Header.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Cards from "../../components/cards/Cards.jsx";
import Tabela from "../../components/tabela/Tabelas.jsx";

import { useState, useRef, useEffect } from "react";

function Dashboard() {
  const [dashboard, setDashboard] = useState({});
  const [table, setTable] = useState([]);

  const buscarDashboard = async () => {
    try {
      const result = await api.get("/dashboard");
      setDashboard(result.data);
    } catch (erro) {
      console.log(erro?.response?.data?.message || erro.message);

    }
  };

  const buscarTabela = async () => {
    try {
      const dataTable = await api.get("/alunos");
      setTable(dataTable.data.data);

    } catch (erro) {
      console.log(erro?.response?.data?.message || erro.message);

    }
  };

  const carregou = useRef(false)

  useEffect(() => {
    if (carregou.current) return
    carregou.current = true

    buscarDashboard();
    buscarTabela();
  }, []);

  return (
    <div className="container">
      <Sidebar />

      <main className="main">
        <Header />

        <section className="content">
          <Cards dashboard={dashboard} />
          <Tabela table={table} />
        </section>
      </main>
    </div>
  );
}

export default Dashboard;