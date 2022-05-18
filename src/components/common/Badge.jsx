import React from 'react'
import PropTypes from 'prop-types'

const Badge = ({children, color, classesName}) => {
  return (
    <div className={`badge bg-${color} ${classesName}`}>{children}</div>
  )
}
Badge.defaultProps = {
  color: 'success',
  classesName: ''
}
Badge.propTypes = {
  children:PropTypes.string.isRequired,
  color: PropTypes.string,
  classesName: PropTypes.string
}

export default Badge