import React, { useId } from 'react'
import PropTypes from 'prop-types'

const TextField = ({ type, placeholder, value, onChange, error, label, name }) => {
  const id = useId()
  const handleChange = ({ target }) => {
    onChange({name: target.name, value: target.value})
  }
  return (
    <div className={'input-group has-validation  mb-2'}>
      <label className="input-group-text" htmlFor={id}>{label}</label>
      <input id={id} name={name} type={type} className={`form-control ${error ? 'is-invalid' : ''}`}
             placeholder={placeholder} value={value}
             onChange={handleChange}/>
      {error && <div className={'invalid-feedback'}>{error}</div>}
    </div>
  )
}
TextField.defaultProps = {
  type: 'text'
}
TextField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
}

export default TextField