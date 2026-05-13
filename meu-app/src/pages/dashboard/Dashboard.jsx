import "./Dashboard.css";
import Header from "../../components/Header.jsx";
import Sindebar from "../../components/Sindebar.jsx";
import Cards from "../../components/Cards.jsx";
import Tabela from "../../components/Tabelas.jsx";
import api from "../../services/api.js";

function Dashboard() {
    return (
        <div className="container">
            <Sindebar />

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