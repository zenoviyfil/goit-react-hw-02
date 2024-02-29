import css from "./Options.module.css"

const Options = ({updateGood, updateNeutral, updateBad, total, onReset}) => {
  return (
    <div>
        <button onClick={updateGood} className={css.feedbackButton}>Good</button>
        <button onClick={updateNeutral} className={css.feedbackButton}>Neutral</button>
        <button onClick={updateBad} className={css.feedbackButton}>Bad</button>
        {total ? (<button onClick={onReset} className={css.feedbackButton}>Reset</button>) : ''}
    </div>
  )
}

export default Options