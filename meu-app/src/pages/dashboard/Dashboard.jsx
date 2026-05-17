import Header from "../../components/header/Header.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Cards from "../../components/cards/Cards.jsx";
import Tabela from "../../components/tabela/Tabelas.jsx";
import "./Dashboard.css";
import api from "../../services/api.js";
import { useState } from "react"

function Dashboard() {
  const [data, setData] = useState()

  async function getData() {
    try {
const result = await api.get("/")
    } catch (erro) {
      console.log(erro?.response?.data?.message)
    }
  }



  return (
    <div className="container">
      <Sidebar />

      <main className="main">
        <Header />

        <section className="content">
          <Cards />
          <Tabela />
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
