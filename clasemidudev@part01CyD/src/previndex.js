import { useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";

const WarningNotUsed = () => {
    return <h1>Todavia no se ha usado el contador</h1>
}

const ListOfClicks = ({clicks}) =>{
    return <p>{clicks.join(", ")}</p>
}

const INICIAL_COUNTER_STATE = {
    left: 0,
    right: 0,
    mensaje: 'Mensaje en el estado'
}

const App = () => {

    //const [left, setLeft] = useState(0);
    //const [right, setRight] = useState(0);

    const [counters, setCounters] = useState(INICIAL_COUNTER_STATE);

    const [clicks, setClicks] = useState([]);

    const handleClickLeft = () => {
        const newCounterState = {
            ...counters,
            left: counters.left + 1,
        }
        setCounters(newCounterState);
        setClicks((prevClicks) => [...prevClicks, "L"]);
    };

    const handleClickRight = () => {
        const newCounterState = {
            ...counters,
            right: counters.right + 1,
        }
        setCounters(newCounterState);
        setClicks((prevClicks) => [...prevClicks, "R"]);
    }

    const handleCLickReset = () => {
        setCounters(INICIAL_COUNTER_STATE);
        setClicks([]);
    }

    return (
        <div>
            {counters.left}
            <button onClick={handleClickLeft}>Left</button>
            <button onClick={handleClickRight}>Right</button>
            {counters.right}
            <p>
                <button onClick={handleCLickReset}>Reset</button>
            </p>
            <p>Clicks Totales:  {clicks.length}</p>
            <p>{counters.mensaje}</p>
            {clicks.length === 0
            ? <WarningNotUsed />
            : <ListOfClicks clicks={clicks} />
            }

        </div>
    );
    
};

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);