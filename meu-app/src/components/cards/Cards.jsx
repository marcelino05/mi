import "./Cards.css";

function Cards() {
  return (
    <div className="cards">

      <div className="card">
        <div className="card-top">
          <h3>Saldo Total</h3>
          <i className="bi bi-cash-stack icon"></i>
        </div>
        <p>2,250MT</p>
      </div>

      <div className="card">
        <div className="card-top">
          <h3>Total alunos</h3>
          <i className="bi bi-people-fill icon"></i>
        </div>
        <p>5</p>
      </div>

      <div className="card">
        <div className="card-top">
          <h3>Pagos</h3>
          <i className="bi bi-check-circle-fill icon"></i>
        </div>
        <p>3</p>
      </div>

    </div>
  );
}

export default Cards;