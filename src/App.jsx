import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import Notification from './components/Notification/Notification'

function App() {
  const [feedback, setFeedback] = useState(() => {
    const parsedFeedback = JSON.parse(localStorage.getItem('feedback'));
    return (
      parsedFeedback || {
        good: 0,
        neutral: 0,
        bad: 0
      }
    )
  })

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback])

  const updateFeedback = (feedbackType) => {
    setFeedback({...feedback, [feedbackType]: feedback[feedbackType] + 1})
  }

  const totalFeedback = () => {
    const {good, neutral, bad} = feedback;
    return good + neutral + bad;
  }

  const total = totalFeedback()

  const positiveFeedbacks = Math.round(((feedback.good + feedback.neutral) / total) * 100);

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    })
  }

  return (
    <>
      <Description />
      <Options
      update={updateFeedback}
      total={total}
      resetFeedback={resetFeedback} 
      />
      {total ? (<Feedback {...feedback} total={total} positiveFeedbacks={positiveFeedbacks}
 />) : (<Notification />)}
    </>
  )
}

export default App
