import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import Notification from './components/Notification/Notification'

const feedback = {
  good: 0,
  neutral: 0,
  bad: 0
}

function App() {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [total, setTotal] = useState(0)
    const [positive, setPositive] = useState(0)

    const updateGood = () => {
      setGood(good + 1)
    }
 
    const updateNeutral = () => {
      setNeutral(neutral + 1)
    }
 
    const updateBad = () => {
      setBad(bad + 1)
    }

    const updateTotal = () => {
      setTotal(good + neutral + bad)
    }

    const onReset = () => {
      setGood(0)
      setNeutral(0)
      setBad(0)
      setTotal(0)
      setPositive(0)
    }

    useEffect(() => {
      localStorage.setItem("feedback", JSON.stringify(feedback));
    }, [])

    useEffect(() => {
      setTotal(good + neutral + bad)
    }, [good, neutral, bad])
 
    useEffect(() => {
      setPositive(Math.round((good / total) * 100))
    }, [good, total])

  return (
    <>
      <Description />
      <Options updateGood={updateGood} updateNeutral={updateNeutral} updateBad={updateBad} updateTotal={updateTotal} total={total} onReset={onReset} feedback={feedback}/>
      {total ? 
      (<Feedback good={good} neutral={neutral} bad={bad} total={total} positive={positive} feedback={feedback}/>) : <Notification />}
    </>
  )
}

export default App
