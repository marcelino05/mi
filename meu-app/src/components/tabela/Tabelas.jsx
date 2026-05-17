import "./Tabela.css";

function Tabela() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Alunos</th>
          <th>Classe</th>
          <th>Mês</th>
          <th>Valor</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Marla</td>
          <td>12ª</td>
          <td>Julho</td>
          <td>450MT</td>
          <td className="pago">Pago</td>
        </tr>
        <tr>
          <td>Ebeneser</td>
          <td>5ª</td>
          <td>Agosto</td>
          <td>450MT</td>
          <td className="pago">Pago</td>
        </tr>
        <tr>
          <td>Omenadiel</td>
          <td>10ª</td>
          <td>Abril</td>
          <td>450MT</td>
          <td className="pago">Pago</td>
        </tr>
        <tr>
          <td>Sarai</td>
          <td>12ª</td>
          <td>Maio</td>
          <td>450MT</td>
          <td className="naoPago">Não pago</td>
        </tr>
        <tr>
          <td>Marcelino</td>
          <td>12ª</td>
          <td>Março</td>
          <td>450MT</td>
          <td className="naoPago">Não pago</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Tabela;
