import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { navBarReducer } from './reducers/navBarReducer'
import { mainReducer } from './reducers/mainReducer'
import { formReducer } from './reducers/formReducer'
import { quizReducer } from './reducers/quizReducer'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    })
    : compose

const rootReducers = combineReducers({
  navBar: navBarReducer,
  main: mainReducer,
  wordForm: formReducer,
  quiz: quizReducer
})

export const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)))