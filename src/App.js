import React from 'react'
import NavBar from './components/ui/NavBar'
import { Redirect, Route, Switch } from 'react-router-dom'
import DictionaryPage from './pages/DictionaryPage'
import AddWordFormPage from './pages/AddWordFormPage'
import QuizPage from './pages/QuizPage'

function App () {
  return (
    <div className={'m-4'}>
      <NavBar/>
      <Switch>
        <Route
          path={'/add'}
          component={AddWordFormPage}/>
        <Route
          path={'/quiz'}
          exact
          component={QuizPage}/>
        <Route
          path={'/'}
          exact
          component={DictionaryPage}/>
        <Redirect to={'/'}/>
      </Switch>
    </div>
  )
}

export default App
