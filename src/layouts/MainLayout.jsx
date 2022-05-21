import React from 'react'
import PropTypes from 'prop-types'

const MainLayout = ({title, children}) => {
  return (
    <>
      <h1>{title}</h1>
      <hr/>
      {children}
    </>
  )
}
MainLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children : PropTypes.any.isRequired
}

export default MainLayout