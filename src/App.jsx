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
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

    // const updateGood = () => {
    //   setGood(good + 1)
    // }
 
    // const updateNeutral = () => {
    //   setNeutral(neutral + 1)
    // }
 
    // const updateBad = () => {
    //   setBad(bad + 1)
    // }

    // const updateTotal = () => {
    //   setTotal(good + neutral + bad)
    // }

    // const onReset = () => {
    //   setGood(0)
    //   setNeutral(0)
    //   setBad(0)
    //   setTotal(0)
    //   setPositive(0)
    // }

    useEffect(() => {
      localStorage.setItem("feedback", JSON.stringify(feedback));
    }, [feedback])

    // useEffect(() => {
    //   setTotal(good + neutral + bad)
    // }, [good, neutral, bad])
 
    // useEffect(() => {
    //   setPositive(Math.round(((good + neutral) / total) * 100))
    // }, [good, neutral, total])

  return (
    <>
      <Description />
      <Options updateGood={updateGood} updateNeutral={updateNeutral} updateBad={updateBad} updateTotal={updateTotal} total={total} onReset={onReset} feedback={feedback}/>
      {total ? 
      (<Feedback good={feedback.good} neutral={feedback.neutral} bad={feedback.bad} total={total} positive={positive} feedback={feedback}/>) : <Notification />}
    </>
  )
}

export default App
