import "./Tabela.css";

function Tabela({ table }) {
  
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
        {table.map((aluno) => (
          <tr key={aluno.id}>
            <td>{aluno.nome}</td>
            <td>{aluno.classe}ª Classe</td>
            <td>{aluno.mes}</td>
            <td>{aluno.valor}</td>
            <td>
              <span className={aluno.pago ? "pago" : "pendente"}>
                {aluno.pago ? "Pago" : "Pendente"}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabela;