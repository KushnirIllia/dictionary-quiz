import React, { useEffect, useState } from 'react'
import Quiz from '../components/ui/Quiz/Quiz'
import Button from '../components/common/Button'
import Badge from '../components/common/Badge'
import PropTypes from 'prop-types'

const QuizPage = ({ itemsList }) => {
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizListOfWords, setQuizListOfWords] = useState()
  const [countOfCorrectAnswers, setCountOfCorrectAnswers] = useState(0)
  useEffect(() => {
    setQuizListOfWords(itemsList)
  }, [itemsList])
  const handleToggleQuiz = () => {
    setShowQuiz(prevState => !prevState)
    setQuizListOfWords(itemsList)
    setCountOfCorrectAnswers(0)
  }
  const handleCountOfAnswers = () => {
    setCountOfCorrectAnswers(prevState => prevState + 1)
  }
  const handleChangeItemsList = (itemValue) => {
    setQuizListOfWords(prevState => prevState.filter(i => i.value !== itemValue))
  }
  return quizListOfWords &&
    <>
      <h1>Тест</h1>
      <hr/>
      {showQuiz
        ? <>
          <Quiz
            itemsList={quizListOfWords}
            onChangeItemsList={handleChangeItemsList}
            onCountOfCorrectAnswers={handleCountOfAnswers}
            itemsLength={itemsList.length}
            countOfCorrectAnswers={countOfCorrectAnswers}
            onHideQuiz={handleToggleQuiz}/>
        </>
        : <div className={'d-flex flex-column align-items-start'}>
          <Button onClick={handleToggleQuiz} disabled={itemsList.length < 10}>Почати</Button>
          <Badge color={'danger'} classesName={'mt-4'}>Мін. кількість слів 10</Badge>
        </div>
      }
    </>
}
QuizPage.propTypes = {
  itemsList: PropTypes.array
}

export default QuizPage