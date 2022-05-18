import React from 'react'
import PropTypes from 'prop-types'

const Pagination = ({ itemsLength, pageSize, currentPage, onChangeCurrentPage }) => {
  const countOfPages = Math.ceil(itemsLength / pageSize)
  let pages = []
  for (let i = 1; i < countOfPages + 1; i++) pages.push(i)
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map(page => (
          <li className={`page-item ${currentPage === page ? 'active' : ''}`} key={page + '_91'}>
            <button className="page-link" onClick={onChangeCurrentPage.bind(this, page)}>{page}</button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
Pagination.propTypes = {
  itemsLength: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onChangeCurrentPage: PropTypes.func.isRequired,
}

export default Pagination