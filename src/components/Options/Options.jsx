import css from "./Options.module.css"

const Options = ({addReview, total, resetFeedback}) => {
  return (
    <div className={css.buttonsDiv}>
        <button onClick={() => addReview('good')} className={css.feedbackButton}>Good</button>
        <button onClick={() => addReview('neutral')} className={css.feedbackButton}>Neutral</button>
        <button onClick={() => addReview('bad')} className={css.feedbackButton}>Bad</button>
        {total ? (<button onClick={resetFeedback} className={css.feedbackButton}>Reset</button>) : ''}
    </div>
  )
}

export default Options