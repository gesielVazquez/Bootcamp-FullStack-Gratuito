import { useState } from "react";
import ReactDOM from 'react-dom';


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
      <pre>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {allClicks}</p>
      <p>Average: {averg}</p>
      <p>Positive: {porc}%</p>
      </pre>

     </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    setGood(good + 1)
  }

  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleClickBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
    <h1>Give FeedBack</h1>
    <p>
      <button onClick = {handleClickGood}>Good</button>
      <button onClick = {handleClickNeutral}>Neutral</button>
      <button onClick = {handleClickBad}>Bad</button>
    </p>
      <Statistics good={good} neutral={neutral} bad={bad} />   
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)