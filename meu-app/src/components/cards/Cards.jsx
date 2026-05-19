import "./Cards.css";

function Cards({ dashboard }) {
  return (
    <div className="cards">

      <div className="card alunos">
        <div className="card-top">
          <h3>Total alunos</h3>
          <i className="bi bi-people-fill icon alunos"></i>
        </div>
        <p>{dashboard.totalAlunos}</p>
      </div>

      <div className="card pendente">
        <div className="card-top">
          <h3>Pendente</h3>
          <i className="bi bi-hourglass-split icon pendente"></i>
        </div>
        <p>{dashboard.pendente}</p>
      </div>

      <div className="card pago">
        <div className="card-top">
          <h3>Pagos</h3>
          <i className="bi bi-check-circle-fill icon pago"></i>
        </div>
        <p>{dashboard.pagos}</p>
      </div>

      <div className="card receita">
        <div className="card-top">
          <h3>Saldo Total</h3>
          <i className="bi bi-cash-stack icon receita"></i>
        </div>
        <p>{dashboard.receita}</p>
      </div>

    </div>
  );
}

export default Cards;