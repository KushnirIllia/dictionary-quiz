import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { useDispatch } from 'react-redux'
import { deleteWordAction } from '../../store/reducers/mainReducer'

const ItemsList = ({ itemsList }) => {
  const dispatch = useDispatch()
  const onDeleteItem = (itemWord) => {
    dispatch(deleteWordAction(itemWord))
  }
  const list = typeof itemsList === 'object'
    ? Object.keys(itemsList).map(key => ({ word: itemsList[key].word, value: itemsList[key].value }))
    : itemsList
  return (
    <ul className="list-group list-group-flush">
      {list.map(item => (
        <li
          key={item.word + '_90'}
          className="list-group-item d-flex justify-content-between align-items-center">
          {item.word} - {item.value}
          <Button color={'danger'} onClick={onDeleteItem.bind(this, item.word)}>delete</Button>
        </li>
      ))}
    </ul>
  )
}
ItemsList.propTypes = {
  itemsList: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
}

export default ItemsList