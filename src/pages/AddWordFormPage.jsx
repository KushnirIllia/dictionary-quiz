import React, { useState, useEffect } from 'react'
import Button from '../components/common/Button'
import TextField from '../components/common/form/TextField'
import { validate } from '../utils/validate'
import PropTypes from 'prop-types'
import Badge from '../components/common/Badge'

const AddWordFormPage = ({ onSetWord, itemsList }) => {
  const [status, setStatus] = useState(false)
  const [data, setData] = useState({ word: '', value: '' })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    validation()
  }, [data])

  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }
  const validateSchema = {
    word: {
      isSame: { message: 'Таке поле вже існує' },
      isMin: { message: 'Мінімальна довжина = 2' },
      isRequired: { message: 'Поле має бути заповненим' },
    },
    value: {
      isSame: { message: 'Таке поле вже існує' },
      isMin: { message: 'Мінімальна довжина = 2' },
      isRequired: { message: 'Поле має бути заповненим' },
    }
  }
  const validation = () => {
    const errors = validate(data, validateSchema, itemsList)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }
  const isValid = Object.keys(errors).length === 0

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validation()

    if (!isValid) {
      return
    } else {
      setData({ word: '', value: '' })
      onSetWord(data)
      setStatus(true)
      setTimeout(() => {
        setStatus(false)
      }, 2000)
    }
  }
  return (
    <>
      <h1>Додати слово</h1>
      <hr/>
      <form onSubmit={handleSubmit} className={'m-4 d-flex flex-column align-items-start'}>
        <TextField label={'Слово'} onChange={handleChange} name={'word'} placeholder={'dog'} value={data.word} error={errors.word}/>
        <TextField label={'Переклад'} onChange={handleChange} name={'value'} placeholder={'собака'} value={data.value}
                   error={errors.value}/>
        <div>
          <Button type={'submit'} text={'Додати слово'} disabled={!isValid}>Додати</Button>
        </div>
        {status && <Badge>Слово додане</Badge>}
      </form>
    </>
  )
}
AddWordFormPage.propTypes = {
  onSetWord: PropTypes.func,
  itemsList: PropTypes.array
}

export default AddWordFormPage