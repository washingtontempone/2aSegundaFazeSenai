// A turma do colégio vai fazer uma excursão na serra e todos os alunos e monitores vão tomar um bondinho para subir até o pico de uma montanha. A cabine do bondinho pode levar 50 pessoas no máximo, contando alunos e monitores, durante uma viagem até o pico.

// Neste problema, dado como entrada o número de alunos A
// A e o número de monitores M
// M, você deve escrever um programa que diga se é possível ou não levar todos os alunos e monitores em apenas uma viagem!

// Entrada
// A primeira linha da entrada contém um inteiro A
// A, representando a quantidade de alunos. A segunda linha da entrada contém um inteiro M
// M, representando o número de monitores.

// Saída
// Seu programa deve imprimir uma linha contendo o caractere S
// S se é possível levar todos os alunos e monitores em apenas uma viagem, ou o caractere N
// N caso não seja possível.

// Restrições
// 1≤A≤50
// 1≤A≤50
// 1≤M≤50
// 1≤M≤50

import {useState} from 'react'

function Bondinho() {

    const[a,setA] = useState(0)
    const[m,setM] = useState(0)
    const[capacidade ,setCapacidade] = useState()

    function limite(){
       
        let soma = Number(a) + Number(m) 
        setCapacidade(soma)
        
    }

  return (
    <div>
        <h2>Bondinho</h2>

        <input type="Number" 
        placeholder='Quatidade de aluno'
        value={a}
        onChange={(e) => setA(e.target.value)}
        />

        <input type="Number" 
        placeholder='Quatidade de aluno'
        value={m}
        onChange={(e) => setM(e.target.value)}
        />
        <button onClick={limite}>Limite</button>

        {(capacidade !== null  && capacidade <= 30) && <p> Pode subir {capacidade} </p>}
          
        
         {(capacidade !== null  && capacidade > 30) && <p> Não pode subir {capacidade} </p>}
          
        


    </div>
  )
}

export default Bondinho