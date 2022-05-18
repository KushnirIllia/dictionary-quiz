import React from 'react'
import PropTypes from 'prop-types'

const ResultCard = ({ countOfCorrectAnswers, itemsLength }) => {
  const countOfCorrectAns = (countOfCorrectAnswers * 100 / itemsLength).toFixed(0)
  const countOfInCorrectAns = 100 - countOfCorrectAns
  return (
    <div className="alert alert-warning" role="alert">
      Ви пройшли тест! <br/>
      Правильно: <span>{countOfCorrectAns}%</span><br/>
      Не правильно: <span>{countOfInCorrectAns}%</span>
    </div>
  )
}
ResultCard.propTypes = {
  countOfCorrectAnswers: PropTypes.number,
  itemsLength: PropTypes.number,
}

export default ResultCard