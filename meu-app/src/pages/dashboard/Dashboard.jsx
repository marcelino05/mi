import api from "../../services/api.js";
import Cards from "../../components/cards/Cards.jsx";
import Tabela from "../../components/tabela/Tabelas.jsx";
import Layout from "../../components/layout/Layout.jsx";

import { useState, useRef, useEffect } from "react";

function Dashboard() {
  const [dashboard, setDashboard] = useState({});
  const [table, setTable] = useState([]);

  const carregou = useRef(false);

  const buscarDashboard = async () => {
    const result = await api.get("/dashboard");
    setDashboard(result.data);
  };

  const buscarTabela = async () => {
    const dataTable = await api.get("/alunos");
    setTable(dataTable.data.data);
  };

  useEffect(() => {
    if (carregou.current) return;
    carregou.current = true;

    buscarDashboard();
    buscarTabela();
  }, []);

  return (
    <Layout>
      <Cards dashboard={dashboard} />
      <Tabela table={table} />
    </Layout>
  );
}

export default Dashboard;