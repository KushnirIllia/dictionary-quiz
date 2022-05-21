import React, { useEffect } from 'react'
import Button from '../components/common/Button'
import TextField from '../components/common/form/TextField'
import { validate } from '../utils/validate'
import Badge from '../components/common/Badge'
import { addWordAction } from '../store/reducers/mainReducer'
import { useDispatch, useSelector } from 'react-redux'
import { changeDataField, clearDataFields, setErrorsForm, setStatusForm } from '../store/reducers/formReducer'
import MainLayout from '../layouts/MainLayout'

const AddWordFormPage = () => {
  const dispatch = useDispatch()
  const itemsList = useSelector(state => state.main.listOfWords)
  const data = useSelector(state => state.wordForm.data)
  const status = useSelector(state => state.wordForm.status)
  const errors = useSelector(state => state.wordForm.errors)

  const setWordData = (item) => {
    dispatch(addWordAction(item))
  }
  const changeField = (target) => {
    dispatch(changeDataField({ name: target.name.toLowerCase(), value: target.value.toLowerCase() }))
  }
  const clearFields = () => {
    dispatch(clearDataFields())
  }
  const setStatus = (status) => {
    dispatch(setStatusForm(status))
  }
  const setErrors = (errors) => {
    dispatch(setErrorsForm(errors))
  }
  useEffect(() => {
    validation()
  }, [data])

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
      clearFields()
      setWordData(data)
      setStatus(true)
      setTimeout(() => {
        setStatus(false)
      }, 2000)
    }
  }
  return (
    <MainLayout title={'Додати слово'}>
      <form onSubmit={handleSubmit} className={'m-4 d-flex flex-column align-items-start'}>
        <TextField label={'Слово'} onChange={changeField} name={'word'} placeholder={'dog'}
                   value={data.word} error={errors.word}/>
        <TextField label={'Переклад'} onChange={changeField} name={'value'} placeholder={'собака'}
                   value={data.value} error={errors.value}/>
        <div>
          <Button type={'submit'} text={'Додати слово'} disabled={!isValid}>Додати</Button>
        </div>
        {status && <Badge>Слово додане</Badge>}
      </form>
    </MainLayout>
  )
}
export default AddWordFormPage