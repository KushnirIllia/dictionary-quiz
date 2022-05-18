import React, { useState } from 'react'
import NavBar from './components/ui/NavBar'
import { Redirect, Route, Switch } from 'react-router-dom'
import DictionaryPage from './pages/DictionaryPage'
import AddWordFormPage from './pages/AddWordFormPage'
import QuizPage from './pages/QuizPage'

const linksList = [
  { name: 'Онлайн словник', to: '/' },
  { name: 'Тест', to: '/quiz' },
  { name: 'Додавання слова', to: '/add' },
]
// const list = [
//   { word: 'juice', value: 'сік' },
//   { word: 'dog', value: 'собака' },
//   { word: 'crave', value: 'жадати' },
//   { word: 'join', value: 'приєднатися' },
//   { word: 'school', value: 'школа' },
//   { word: 'ridiculous', value: 'смішний' },
//   { word: 'auto', value: 'автоматичний' },
//   { word: 'car', value: 'авто' },
//   { word: 'fee', value: 'плата' },
//   { word: 'debt', value: 'борг' },
// ]
function App () {
  const [listOfWords, setListOfWords] = useState([])
  const handleSetWord = (item) => {
    let list = []
    list.push(item)
    setListOfWords(list.concat(listOfWords))
  }

  const handleDeleteItem = (itemName) => {
    setListOfWords(listOfWords.filter(item => item.word !== itemName))
  }

  return (
    <div className={'m-4'}>
      <NavBar label={'Словник'} linksList={linksList}/>
      <Switch>
        <Route
          path={'/add'}
          render={props => <AddWordFormPage props={props} onSetWord={handleSetWord} itemsList={listOfWords}/>}/>
        <Route
          path={'/quiz'}
          exact
          render={props => <QuizPage props={props} itemsList={listOfWords}/>}/>
        <Route
          path={'/'}
          exact
          render={props => <DictionaryPage props={props} itemsList={listOfWords} onDeleteItem={handleDeleteItem}/>}/>
        <Redirect to={'/'}/>
      </Switch>
    </div>
  )
}

export default App
