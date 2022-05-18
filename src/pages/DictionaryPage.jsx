import React, { useState } from 'react'
import ItemsList from '../components/common/ItemsList'
import { Link } from 'react-router-dom'
import { paginate } from '../utils/paginate'
import Pagination from '../components/common/Pagination'
import PropTypes from 'prop-types'
import Badge from '../components/common/Badge'

const DictionaryPage = ({ itemsList, onDeleteItem }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize,] = useState(3)
  const handleChangeCurrentPage = (page) => {
    setCurrentPage(page)
  }
  const cropItemsList = paginate(itemsList, currentPage, pageSize)
  return (
    <>
      <h1>Словник</h1>
      <hr/>
      {itemsList.length !== 0
        ? <>
          <div style={{ minHeight: '200px' }}>
            <ItemsList itemsList={cropItemsList} onDeleteItem={onDeleteItem}/>
          </div>
          <Pagination pageSize={pageSize} itemsLength={itemsList.length} currentPage={currentPage} onChangeCurrentPage={handleChangeCurrentPage}/>
          <Link to={'/quiz'}>Перевірити слова</Link>
        </>
        : <div className={'d-flex flex-column align-items-start'}>
          <Badge color={'danger'} classesName={'mb-4'}>У вас ще не додано жодного слова</Badge>
          <Link to={'/add'}>Додати слово</Link>
        </div>}
    </>
  )
}
DictionaryPage.propTypes = {
  itemsList: PropTypes.array.isRequired,
  onDeleteItem: PropTypes.func.isRequired
}

export default DictionaryPage