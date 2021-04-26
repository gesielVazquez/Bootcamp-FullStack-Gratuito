import React, { useState } from 'react'
import ReactDOM from 'react-dom'

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
    <p>
      <h1>Statistics</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)