import React from 'react'
import { useSelector } from 'react-redux'

const ResultCard = () => {
  const itemsLength = useSelector(state => state.main.listOfWords).length
  const countOfCorrectAnswers = useSelector(state => state.quiz.countOfCorrectAnswers)
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

export default ResultCard