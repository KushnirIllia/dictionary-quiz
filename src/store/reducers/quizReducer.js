import { randomSelect } from '../../utils/randomSelect'

const initialState = {
  quizListOfWords: [],
  countOfCorrectAnswers: -1,
  showQuiz: false,
  counter: 0,
  correctAnswer: undefined,
  values: undefined,
  isCorrect: undefined
}

export const SET_QUIZ_STATUS = 'SET_QUIZ_STATUS'
export const ADD_QUIZ_LIST = 'ADD_QUIZ_LIST'
export const FILTER_QUIZ_LIST = 'FILTER_QUIZ_LIST'
export const INCREASE_COUNT_OF_CORRECT_ANSWERS = 'INCREASE_COUNT_OF_CORRECT_ANSWERS'
export const ADD_START_COUNT_OF_CORRECT_ANSWERS = 'ADD_START_COUNT_OF_CORRECT_ANSWERS'
export const INCREASE_COUNTER = 'INCREASE_COUNTER'
export const ADD_START_COUNTER = 'ADD_START_COUNTER'
export const ADD_CORRECT_ANSWER = 'ADD_CORRECT_ANSWER'
export const GET_RANDOM_VALUES = 'GET_RANDOM_VALUES'
export const TOGGLE_IS_CORRECT = 'TOGGLE_IS_CORRECT'

function renderValues (itemsArr, correctAnsValue) {
  function shuffle (arr) {
    let array = [...arr]
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  let newItemsArr = [...itemsArr.filter(i => i.value !== correctAnsValue)]
  const values = []
  for (let i = 0; i < 3; i++) {
    const { value } = randomSelect(newItemsArr)
    values.push(value)
    newItemsArr = newItemsArr.filter(i => i.value !== value)
  }
  return shuffle([...values, correctAnsValue])
}

export const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUIZ_STATUS:
      return { ...state, showQuiz: !state.showQuiz }
    case ADD_QUIZ_LIST:
      return { ...state, quizListOfWords: action.payload }
    case FILTER_QUIZ_LIST:
      return { ...state, quizListOfWords: [...state.quizListOfWords.filter(i => i.value !== action.payload)] }
    case INCREASE_COUNT_OF_CORRECT_ANSWERS:
      return { ...state, countOfCorrectAnswers: state.countOfCorrectAnswers + 1 }
    case ADD_START_COUNT_OF_CORRECT_ANSWERS:
      return { ...state, countOfCorrectAnswers: initialState.countOfCorrectAnswers }
    case INCREASE_COUNTER:
      return { ...state, counter: state.counter + 1 }
    case ADD_START_COUNTER:
      return { ...state, counter: initialState.counter }
    case ADD_CORRECT_ANSWER:
      return { ...state, correctAnswer: action.payload }
    case GET_RANDOM_VALUES:
      return { ...state, values: renderValues(action.payload, state.correctAnswer.value) }
    case TOGGLE_IS_CORRECT:
      return { ...state, isCorrect: action.payload }
    default:
      return state
  }
}
export const setQuizStatus = (payload) => ({ type: SET_QUIZ_STATUS, payload })
export const addQuizListOfWords = (payload) => ({ type: ADD_QUIZ_LIST, payload })
export const filterQuizListOfWords = (payload) => ({ type: FILTER_QUIZ_LIST, payload })
export const increaseCountOfCorrectAnswers = () => ({ type: INCREASE_COUNT_OF_CORRECT_ANSWERS })
export const addStartCountOfCorrectAnswers = () => ({ type: ADD_START_COUNT_OF_CORRECT_ANSWERS })
export const increaseCounter = () => ({ type: INCREASE_COUNTER })
export const addStartCounter = () => ({ type: ADD_START_COUNTER })
export const addCorrectAnswer = (payload) => ({ type: ADD_CORRECT_ANSWER, payload })
export const getRandomValues = (payload) => ({ type: GET_RANDOM_VALUES, payload })
export const toggleIsCorrect = (payload) => ({ type: TOGGLE_IS_CORRECT, payload })
