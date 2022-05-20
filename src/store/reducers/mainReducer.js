const initialState = {
  listOfWords: [
    { word: 'juice', value: 'сік' },
    { word: 'dog', value: 'собака' },
    { word: 'crave', value: 'жадати' },
    { word: 'join', value: 'приєднатися' },
    { word: 'school', value: 'школа' },
    { word: 'ridiculous', value: 'смішний' },
    { word: 'auto', value: 'автоматичний' },
    { word: 'car', value: 'авто' },
    { word: 'fee', value: 'плата' },
    { word: 'debt', value: 'борг' },
  ],
  currentPage: 1,
  pageSize: 3,
}
export const ADD_WORD_TO_LIST = 'ADD_WORD_TO_LIST'
export const DELETE_WORD_FROM_LIST = 'DELETE_WORD_FROM_LIST'
export const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE'
export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WORD_TO_LIST:
      return { ...state, listOfWords: [...state.listOfWords, action.payload] }
    case DELETE_WORD_FROM_LIST:
      return { ...state, listOfWords: [...state.listOfWords.filter(i => i.word !== action.payload)] }
    case CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: action.payload }

    default:
      return state
  }
}
export const addWordAction = (payload) => ({ type: ADD_WORD_TO_LIST, payload })
export const deleteWordAction = (payload) => ({ type: DELETE_WORD_FROM_LIST, payload })
export const changeCurrentPageAction = (payload) => ({ type: CHANGE_CURRENT_PAGE, payload })