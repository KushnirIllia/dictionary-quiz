import React, { useEffect, useState } from 'react'
import QuizCard from './QuizCard'
import { randomSelect } from '../../../utils/randomSelect'
import PropTypes from 'prop-types'
import ResultCard from '../ResultCard'
import Badge from '../../common/Badge'
import Button from '../../common/Button'

const Quiz = ({ itemsList, onChangeItemsList, onCountOfCorrectAnswers, itemsLength, countOfCorrectAnswers, onHideQuiz }) => {
  const [items, setItems] = useState([])
  const [data, setData] = useState()
  const [values, setValues] = useState([])
  const [showFeedback, setShowFeedback] = useState(false)
  useEffect(() => {
    setItems([...itemsList])
  }, [itemsList])
  useEffect(() => {
    valuesFunc(items)
  }, [items])
  useEffect(() => {
    const dataValue = values[Math.floor(Math.random() * values.length)]

    const dataObj = items.find(i => i.value === dataValue)
    setData(dataObj)
  }, [values])
  const valuesFunc = () => {
    const itemsList = [...items]
    if (itemsList.length > 0) {
      const values = []
      for (let i = 0; i < 4; i++) {
        const { value } = randomSelect(itemsList)
        if (!values[value]) {
          values.push(value)
        }
      }
      setValues(values)
    }
  }
  const handleSelect = (item) => {
    if (item === data.value) {
      onCountOfCorrectAnswers()
      setShowFeedback(true)
      setTimeout(() => {
        setShowFeedback(false)
      }, 1000)
      setValues([])
      onChangeItemsList(item)
    } else {
      setValues([])
      onChangeItemsList(item)
    }
  }

  return items && items.length > 0
    ? <>
      {values.length > 0 && data && values && <QuizCard values={values} word={data.word} onSelect={handleSelect}/>}
      {showFeedback && <Badge>Правильно</Badge>}
    </>
    : <>
      <ResultCard countOfCorrectAnswers={countOfCorrectAnswers} itemsLength={itemsLength}/>
      <Button onClick={onHideQuiz}>Повернутися</Button>
    </>
}
Quiz.propTypes = {
  itemsList: PropTypes.array,
  onChangeItemsList: PropTypes.func,
  onCountOfCorrectAnswers: PropTypes.func,
  onHideQuiz: PropTypes.func,
  itemsLength: PropTypes.number,
  countOfCorrectAnswers: PropTypes.number,
}

export default Quiz