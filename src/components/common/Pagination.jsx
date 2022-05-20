import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { changeCurrentPageAction } from '../../store/reducers/mainReducer'

const Pagination = ({ itemsLength }) => {
  const dispatch = useDispatch()
  const currentPage = useSelector(state => state.main.currentPage)
  const pageSize = useSelector(state => state.main.pageSize)
  const changeCurrentPage = (page) => {
    dispatch(changeCurrentPageAction(page))
  }
  const countOfPages = Math.ceil(itemsLength / pageSize)
  let pages = []
  for (let i = 1; i < countOfPages + 1; i++) pages.push(i)
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map(page => (
          <li className={`page-item ${currentPage === page ? 'active' : ''}`} key={page + '_91'}>
            <button className="page-link" onClick={changeCurrentPage.bind(this, page)}>{page}</button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
Pagination.propTypes = {
  itemsLength: PropTypes.number.isRequired,
}

export default Pagination