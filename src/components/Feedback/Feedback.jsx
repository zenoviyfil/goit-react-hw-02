import css from "./Feedback.module.css"

const Feedback = ({good, neutral, bad, total, positiveFeedbacks}) => {
  return (
    <div>
        <ul className={css.feedbacks}>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive: {positiveFeedbacks}%</li>
        </ul>
    </div>
  )
}

export default Feedback