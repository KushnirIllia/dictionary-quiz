import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'


const MainLayout = ({title, children}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
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