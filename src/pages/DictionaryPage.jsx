import React from 'react'
import ItemsList from '../components/common/ItemsList'
import { Link } from 'react-router-dom'
import { paginate } from '../utils/paginate'
import Pagination from '../components/common/Pagination'
import Badge from '../components/common/Badge'
import { useSelector } from 'react-redux'
import MainLayout from '../layouts/MainLayout'

const DictionaryPage = () => {
  const itemsList = useSelector(state => state.main.listOfWords)
  const currentPage = useSelector(state => state.main.currentPage)
  const pageSize = useSelector(state => state.main.pageSize)
  const cropItemsList = paginate(itemsList, currentPage, pageSize)
  return (
    <MainLayout title={'Словник'}>
      {itemsList.length !== 0
        ? <>
          <div style={{ minHeight: '200px' }}>
            <ItemsList itemsList={cropItemsList}/>
          </div>
          <div className={'d-flex align-items-center justify-content-between'}>
          <Pagination itemsLength={itemsList.length}/>
            <p>Кількість слів: <Badge>{itemsList.length}</Badge></p>
          </div>
          <Link to={'/quiz'}>Перевірити слова</Link>
        </>
        : <div className={'d-flex flex-column align-items-start'}>
          <Badge color={'danger'} classesName={'mb-4'}>У вас ще не додано жодного слова</Badge>
          <Link to={'/add'}>Додати слово</Link>
        </div>}
    </MainLayout>
  )
}

export default DictionaryPage