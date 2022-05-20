import React from 'react'
import QuizCard from './QuizCard'
import ResultCard from '../ResultCard'
import Badge from '../../common/Badge'
import Button from '../../common/Button'
import {
  addQuizListOfWords, addStartCounter, addStartCountOfCorrectAnswers,
  setQuizStatus,
} from '../../../store/reducers/quizReducer'
import { useDispatch, useSelector } from 'react-redux'

const Quiz = () => {
  const dispatch = useDispatch()
  const itemsList = useSelector(state => state.quiz.quizListOfWords)
  const counter = useSelector(state => state.quiz.counter)
  const isCorrect = useSelector(state => state.quiz.isCorrect)

  const restartQuiz = (list) => {
    dispatch(addStartCountOfCorrectAnswers())
    dispatch(setQuizStatus())
    dispatch(addQuizListOfWords(list))
    dispatch(addStartCounter())
  }
  const onHideQuiz = () => {
    restartQuiz(itemsList)
  }
  return counter < 10
    ? <>
      <QuizCard/>
      {isCorrect === undefined ? '' : <Badge>{isCorrect === true ? 'Правильно' : 'Не правильно'}</Badge>}
    </>
    : <>
      <ResultCard/>
      <Button onClick={onHideQuiz}>Повернутися</Button>
    </>
}

export default Quiz