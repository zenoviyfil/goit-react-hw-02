import css from "./Options.module.css"

const Options = ({update, total, resetFeedback}) => {
  return (
    <div className={css.buttonsDiv}>
        <button onClick={() => update('good')} className={css.feedbackButton}>Good</button>
        <button onClick={() => update('neutral')} className={css.feedbackButton}>Neutral</button>
        <button onClick={() => update('bad')} className={css.feedbackButton}>Bad</button>
        {total ? (<button onClick={resetFeedback} className={css.feedbackButton}>Reset</button>) : ''}
    </div>
  )
}

export default Options