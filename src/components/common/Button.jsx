import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ color, disabled, type, onClick, children, classesNames }) => {
  return (
    <>
      <button type={type} disabled={disabled} className={`btn btn-${color} ${classesNames}`} onClick={onClick}>{children}</button>
    </>
  )
}
Button.defaultProps = {
  color: 'warning',
  type: 'button',
  classesNames: ''
}
Button.propTypes = {
  color: PropTypes.string,
  type: PropTypes.string,
  classesNames: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.array])
}

export default Button