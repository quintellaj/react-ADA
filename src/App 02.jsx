import { useState } from "react";
import { useEffect } from "react";

const tarefas = [
  { id: "1", title: "Primeira Tarefa" },
  { id: "2", title: "Segunda Tarefa" },
  { id: "3", title: "Terceirarimeira Tarefa" },
  { id: "4", title: "Quarta Tarefa" },
];

export default function App() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    async function BuscarApi() {
      const resultado = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const resultadoFinal = await resultado.json();
      return resultadoFinal;
    }
    BuscarApi().then((res) => setTarefas(res));
  }, []);

  return (
    <div>
      <h1>Buscando Dados</h1>
      <ol>
        {tarefas.map((tarefa) => {
          return (
            <li key={tarefa.id}>
              {tarefa.title} {tarefa.completed ? " - Tarefa Completada" : null}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
