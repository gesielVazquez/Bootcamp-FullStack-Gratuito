import ReactDOM from "react-dom";
import { useState } from "react";

const rootElement = document.getElementById("root");

const Counter = ({number}) => {
  console.log("Counter render");
  return <h1>{number}</h1>
}

const App = (props) => {
  const [contadorValue,updateContador] = useState(7);
 
  /*
  const contador = useState(13);
  const contadorValue = contador[0];
  const updateContador = contador[1];
  */

  const handleClick = () => {
    updateContador(contadorValue + 1)
  };

  const handleCLickReset = () =>{
    updateContador(0)
  };

  const isEven = contadorValue % 2 === 0;
  const mesajePar = isEven ? "Es un Numero PAR" : "Es un Numero IMPAR";


  return (
    <div>
      <p>El valor del contador es:</p>
      <Counter number={contadorValue} />
      <p>{mesajePar}</p>
      <button onClick={handleClick}>Incrementar</button>
      <button onClick={handleCLickReset}>Reset</button>
    </div>
  )
}



ReactDOM.render(
  <App />,
  rootElement
)