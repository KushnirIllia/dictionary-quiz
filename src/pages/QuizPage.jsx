import React from 'react'
import Quiz from '../components/ui/Quiz/Quiz'
import Button from '../components/common/Button'
import Badge from '../components/common/Badge'
import { useDispatch, useSelector } from 'react-redux'
import { addQuizListOfWords, increaseCountOfCorrectAnswers, setQuizStatus } from '../store/reducers/quizReducer'

const QuizPage = () => {
  const dispatch = useDispatch()
  const itemsList = useSelector(state => state.main.listOfWords)
  const showQuiz = useSelector(state => state.quiz.showQuiz)
  const quizListOfWords = useSelector(state => state.quiz.quizListOfWords)
  const quizStatusChange = () => {
    dispatch(setQuizStatus())
  }
  const addQuizList = (list) => {
    dispatch(addQuizListOfWords(list))
  }
  const changeCountOfCorrectAnswers = () => {
    dispatch(increaseCountOfCorrectAnswers())
  }
  const handleToggleQuiz = () => {
    quizStatusChange()
    addQuizList(itemsList)
    changeCountOfCorrectAnswers(0)
  }
  const checkLength = itemsList.length < 10
  return quizListOfWords &&
    <>
      <h1>Тест</h1>
      <hr/>
      {showQuiz
        ? <>
          <Quiz/>
        </>
        : <div className={'d-flex flex-column align-items-start'}>
          <Button onClick={handleToggleQuiz} disabled={checkLength}>Почати</Button>
          {checkLength && <Badge color={'danger'} classesName={'mt-4'}>Мін. кількість слів 10</Badge>}
        </div>
      }
    </>
}

export default QuizPage