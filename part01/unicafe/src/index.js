import { useState } from "react";
import ReactDOM from 'react-dom';

const Button = ({ text, handleClick }) => {
    return (
      <button onClick={handleClick}>{text}</button>
    )
}

const Statistic = ({ text, value}) => {
  return (
    <div>
      {text} {value}
    </div>
  )
}

const Statistics = ({good,neutral,bad}) => {
  const allClicks = good + neutral + bad;
  const averg = (good-bad)/allClicks;
  const porc = (good/allClicks)*100;

  return (allClicks === 0)
  ? (
    <div>
       <h1>Statistics</h1>   
       
         <h1>No FeedBack!!</h1>
       
   </div>
  )
  : (
    <div>
    <h1>Statistics</h1>
      <Statistic text="Good" value={good} />
      <Statistic text="Neutral" value={neutral} />
      <Statistic text="Bad" value={bad} />
      <Statistic text="All" value={allClicks} />
      <Statistic text="Average" value={averg} />
      <Statistic text="Positive" value={porc + ' %'} />
     </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
    <h1>Give FeedBack</h1>
    <p>
      <Button text="Good" handleClick={() => setGood(good + 1)} />
      <Button text="Neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="Bad" handleClick={() => setBad(bad + 1)} />
    </p>
      <Statistics good={good} neutral={neutral} bad={bad} />   
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)