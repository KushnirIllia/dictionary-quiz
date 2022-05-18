import React from 'react'
import PropTypes from 'prop-types'

const QuizCard = ({ word, values, onSelect }) => {
  const handleInput = ({ target }) => {
    onSelect(target.value)
  }
  return (
    <div className="card">
      <div className="card-header">
        {word}
      </div>
      <div className="card-body">
        {values.map(value => (
          <div className="form-check" key={(Math.floor(Math.random() * 100) + value)}>
            <input className={`form-check-input`} type="radio" name="flexRadioDefault"
                   id={value} onClick={handleInput} value={value}/>
            <label className="form-check-label" htmlFor={value}>
              {value}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}
QuizCard.propTypes = {
  word: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default QuizCard