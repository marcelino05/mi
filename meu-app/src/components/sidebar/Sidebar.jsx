import "./Sidebar.css";
import { Link } from "react-router-dom"

function Sidebar() {
  const logOut = () => {
    localStorage.removeItem("token")
    window.location.href = "/"
  }

  return (
    <aside className="sidebar">
      <h1 className="logo">MinhaTurma</h1>
      <hr />

      <nav className="nav">
        <ul>
          <li>
            <Link to="/dashboard" className="link">
              <i className="bi bi-graph-up-arrow"></i>
              <span>Dashboard</span>
            </Link>
          </li>

          <li>
            <Link to="/alunos" className="link">
              <i className="bi bi-people"></i>
              <span>Alunos</span>
            </Link>
          </li>

          <li>
            <Link to="pagamento" className="link">
              <i className="bi bi-cash-stack"></i>
              <span>Pagamento</span>
            </Link>
          </li>

          <li>
            <Link to="perfil" className="link">
              <i className="bi bi-person-circle"></i>
              <span>Perfil</span>
            </Link>
          </li>

          <li>
            <i className="bi bi-box-arrow-right"></i>
            <span onClick={logOut}>Sair</span>
          </li>
        </ul>
      </nav>
    </aside>

  );
}
export default Sidebar;
