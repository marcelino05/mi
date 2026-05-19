import "./Sidebar.css";

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
            <i className="bi bi-graph-up-arrow"></i>
            <span>Dashboard</span>
          </li>

          <li>
            <i className="bi bi-people"></i>
            <span>Alunos</span>
          </li>

          <li>
            <i className="bi bi-cash-stack"></i>
            <span>Pagamento</span>
          </li>

          <li>
            <i className="bi bi-person-circle"></i>
            <span>Perfil</span>
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
