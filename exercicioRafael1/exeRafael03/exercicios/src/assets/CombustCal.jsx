import {useState} from 'react'

function CombustCal() {

     const[alcool, setAlcool] = useState()
    const[gasolina, setGasolina] = useState()
    const[diesel, setDiesel] = useState()
    const[a, setA] = useState(0)
    const[g, setG] = useState(0)
    const[d, setD] = useState(0)

    function calcularAlcool(){
       setA ((cal) => cal + Number(alcool)) 
         
    }
     function calcularGasolina(){
       setG ((cal) => cal + Number(gasolina))          
    }
      function calcularDiesel(){
       setD ((cal) => cal + Number(diesel))          
    }

  return (
    <div>
        <h2>calcular combustivel</h2>
        
        <input type="Number" 
        placeholder='quantidade de alcool'
        value={alcool}
        onChange={(e) => setAlcool(e.target.value)}
        />
          <button onClick={calcularAlcool}>Alcool</button>
        Alcool Final {a}

        <input type="Number" 
        placeholder='quantidade de gasolia'
        value={gasolina}
        onChange={(e) => setGasolina(e.target.value)}
         />
           <button onClick={calcularGasolina}>Gasolina</button>
        Alcool Final {g}

        <input type="Number" 
        placeholder='quantidade de diesel'
        value={diesel}
        onChange={(e) => setDiesel(e.target.value)}
         />  
          <button onClick={calcularDiesel}>Diesel</button>
        Alcool Final {d}
      
    </div>
  )
}

export default CombustCal

{/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}