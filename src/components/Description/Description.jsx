import css from './Description.module.css'

const Description = () => {
  return (
    <div>
        <h2 className={css.descriptionHeader}>Sip Happens Café</h2>
        <p className={css.descriptionText}>Please leave your feedback about our service by selecting one of the options below.</p>
    </div>
  )
}

export default Description