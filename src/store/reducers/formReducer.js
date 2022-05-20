const initialState = {
  status: false,
  data: { word: '', value: '' },
  errors: {}
}

export const CHANGE_FIELD_OF_DATA = 'CHANGE_FIELD_OF_DATA'
export const CLEAR_FIELDS_OF_DATA = 'CLEAR_FIELDS_OF_DATA'
export const SET_STATUS = 'SET_STATUS'
export const SET_ERRORS = 'SET_ERRORS'

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FIELD_OF_DATA :
      return { ...state, data: { ...state.data, [action.payload.name]: action.payload.value } }
    case CLEAR_FIELDS_OF_DATA:
      return { ...state, data: initialState.data }
    case SET_STATUS:
      return { ...state, status: action.payload }
    case SET_ERRORS:
      return { ...state, errors: action.payload }

    default:
      return state
  }
}

export const changeDataField = (payload) => ({ type: CHANGE_FIELD_OF_DATA, payload })
export const clearDataFields = () => ({ type: CLEAR_FIELDS_OF_DATA })
export const setStatusForm = (payload) => ({ type: SET_STATUS, payload })
export const setErrorsForm = (payload) => ({ type: SET_ERRORS, payload })