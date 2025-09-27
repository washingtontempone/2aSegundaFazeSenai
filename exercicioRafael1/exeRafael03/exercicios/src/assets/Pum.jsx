// Escreva um programa que leia um valor inteiro N. Este N é a quantidade de linhas de saída que serão apresentadas na execução do programa.

// Entrada
// O arquivo de entrada contém um número inteiro positivo N.

// Saída
// Imprima a saída conforme o exemplo fornecido.

import { useState } from "react";

function Pum() {
  const [n, setN] = useState("");
  const [resultado, setResultado] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const N = parseInt(n);
    let arr = [];
    let num = 1;

    for (let i = 0; i < N; i++) {
      arr.push(`${num} ${num + 1} ${num + 2} PUM`);
      num += 4;
    }

    setResultado(arr);
  };

  return (
    <div>
      <h1>PUM Sequence</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={n}
          onChange={(e) => setN(e.target.value)}
          placeholder="Digite N"
        />
        <button type="submit">Gerar</button>
      </form>

      <div>
        {resultado.map((linha, index) => (
          <p key={index}>{linha}</p>
        ))}
      </div>
    </div>
  );
}

export default Pum;