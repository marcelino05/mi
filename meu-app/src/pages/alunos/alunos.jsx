import { useState, useEffct } from "react";
import api from "../../services/api.js";

function Alunos() {
    const [nome, setNome] = useState("");
    const [classe, setClasse] = useState("");
    const [disciplina, setDiscipina] = useState("");

    const [alunos, setAlunos] = useState([]);

const carregarAlunos = async() => {
  const res = await api.get
}
}
