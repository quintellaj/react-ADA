import { useEffect, useState } from "react";

const lista = [
  { id: "1", value: "Fruta" },
  { id: "2", value: "Legume" },
  { id: "3", value: "Carne" },
];

export default function MinhaLista() {
  const [produtos, setProdutos] = useState(lista);
  const [pesquisa, setPesquisa] = useState("x");

  useEffect(() => {
    if (pesquisa) {
      const novaLista = lista.filter((item) => {
        return item.value.toLowerCase().includes(pesquisa.toLowerCase());
      });
      setProdutos(novaLista);
    } else {
      setProdutos(MinhaLista);
    }
  }, [pesquisa]);

  return (
    <div>
      <h1>Efeitos Colaterias</h1>
      <input
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
        placehoLder="pesquise aqui"
      ></input>
      {produtos.map((item) => {
        return (
          <div key={item.id}>
            <h4>{item.value}</h4>
          </div>
        );
      })}
    </div>
  );

  // export default function minhaLista() {
  // const lista = [
  //   <h4 key="1">Item 01</h4>,
  //   <h4 key="2">Item 02</h4>,
  //   <h4 key="3">Item 03</h4>,
  //   <h4 key="4">Item 04</h4>,
  // ];

  // return lista.map((item) => {
  //   return (
  //     <div key="item.id">
  //       <h4>{item.value}</h4>
  //     </div>
  //   );
  // });
}
