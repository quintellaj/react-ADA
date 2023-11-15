import MeuCoponente from "./components/MeuComponente";
import MeuBotao from "./components/MeuBotao";
import MeuContador from "./components/MeuContador";
import MinhaLista from "./components/MinhaLista";

export default function App() {
  const tarefas = [
    { id: "1", title: "Primeira Tarefa" },
    { id: "2", title: "Segunda Tarefa" },
    { id: "3", title: "Terceirarimeira Tarefa" },
    { id: "4", title: "Quarta Tarefa" },
  ];
  return (
    <div>
      <h1>Buscando Dados</h1>
      <ol>
        {tarefas.map((tarefa) => {
          return <li key={tarefa.id}>tarefa.value</li>;
        })}
      </ol>
      {}
      // <h1>Listas - React</h1>
      // <MinhaLista />
      // <MeuCoponente />
      // <MeuBotao conteudo="Clique Aqui" />
      // <MeuBotao conteudo="Depois Aqui" />
      // <MeuBotao conteudo="E Por Fim, Aqui" />
      // <MeuContador /> */
    </div>
  );
}
