function Tabela({ alunos }) {
  return (
    <table className="aluno_table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Classe</th>
          <th>Disciplina</th>
        </tr>
      </thead>

      <tbody>
        {alunos.map((aluno) => (
          <tr key={aluno.id}>
            <td>{aluno.nome}</td>
            <td>{aluno.classe}ª Classe</td>
            <td>{aluno.disciplina}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabela;