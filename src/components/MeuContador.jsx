import { useState } from "react";
import styles from "./button.Module.css?inline";

export default function MeuContador() {
  const [wcont, setContador] = useState(0);

  function aumentar() {
    setContador(wcont + 1);
  }

  function diminuir() {
    setContador(wcont - 1);
  }

  return (
    <div className="container">
      <h1>Meu Contador</h1>
      <h3>{wcont}</h3>
      {wcont > 5 ? <h1>Contador Muito Grande</h1> : null}
      <button onClick={aumentar} className={styles.myButton}>
        Aumentar
      </button>
      <button onClick={diminuir}>Diminuir</button>
    </div>
  );
}
