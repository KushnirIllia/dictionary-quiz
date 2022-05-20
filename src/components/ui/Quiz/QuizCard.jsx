import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addCorrectAnswer,
  filterQuizListOfWords,
  getRandomValues,
  increaseCounter,
  increaseCountOfCorrectAnswers,
  toggleIsCorrect
} from '../../../store/reducers/quizReducer'
import { randomSelect } from '../../../utils/randomSelect'

const QuizCard = () => {
  const dispatch = useDispatch()
  const correctAnswer = useSelector(state => state.quiz.correctAnswer)
  const values = useSelector(state => state.quiz.values)
  const valuesList = useSelector(state => state.main.listOfWords)
  const itemsList = useSelector(state => state.quiz.quizListOfWords)

  const renderValues = (values) => {
    dispatch(getRandomValues(values))
  }
  const addRandomCorrectAnswer = (item) => {
    dispatch(addCorrectAnswer(item))
  }
  const changeCounter = () => {
    dispatch(increaseCounter())
  }
  const filterQuizList = (itemValue) => {
    dispatch(filterQuizListOfWords(itemValue))
  }
  const toggleIsCorrectState = (state) => {
    dispatch(toggleIsCorrect(state))
  }
  const changeCountOfCorrectAnswers = () => {
    dispatch(increaseCountOfCorrectAnswers())
  }

  useEffect(() => {
    addRandomCorrectAnswer(randomSelect(itemsList))
  }, [itemsList])
  useEffect(() => {
    if (correctAnswer && correctAnswer.value !== undefined) {
      renderValues(valuesList)
    }
  }, [correctAnswer, itemsList])
  const onClick = ({ target }) => {
    const selectValue = target.value
    changeCounter()
    if (selectValue === correctAnswer.value) {
      changeCountOfCorrectAnswers()
      toggleIsCorrectState(true)
      setTimeout(() => toggleIsCorrectState(undefined), 1000)
    } else {
      toggleIsCorrectState(false)
      setTimeout(() => toggleIsCorrectState(undefined), 1000)
    }
    filterQuizList(selectValue)

  }
  return correctAnswer && values &&
    <div className="card">
      <div className="card-header">
        {correctAnswer.word}
      </div>
      <div className="card-body">
        {values.map(value => (
          <div className="form-check" key={(Math.floor(Math.random() * 100) + value)}>
            <input className={`form-check-input`} type="radio" name="flexRadioDefault"
                   id={value} onClick={onClick} value={value}/>
            <label className="form-check-label" htmlFor={value}>
              {value}
            </label>
          </div>
        ))}
      </div>
    </div>

}

export default QuizCard