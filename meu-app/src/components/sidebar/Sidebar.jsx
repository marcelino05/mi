import "./Sidebar.css";

function Sidebar() {
    return (
        <aside className="sidebar">
            <h1 className="logo">MinhaTurma</h1>
            <nav className="nav">
                <ul>
                    <li>
                        <i className="bi bi-speedometer2"></i>
                        Dashboard
                    </li>

                    <li>
                        <i className="bi bi-people"></i>Alunos
                    </li>
                    <li>
                        <i className="bi bi-cash-stack"></i>Cobranças
                    </li>
                    <li>
                        <i className="bi bi-person"></i>Perfil
                    </li>
                </ul>
            </nav>
        </aside>
    );
}
export default Sidebar;
