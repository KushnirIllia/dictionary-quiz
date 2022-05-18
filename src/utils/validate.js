export const validate = (data, config, items) => {
  const validation = (key, field, configObj) => {
    let status
    switch (key) {
      case 'isRequired':
        status = field.trim() === ''
        break
      case 'isMin':
        status = field.trim().length <= 2
        break
      case 'isSame':
        status = items && items.find(i => i.word === field.trim() || i.value === field.trim())
        break

      default:
        break
    }
    if (status) {
      return configObj.message
    }
  }
  const errors = {}
  for (let field in data) {
    for (let configKey in config[field]) {
      const error = validation(configKey, data[field], config[field][configKey])
      if (error && !errors[error]) {
        errors[field] = error
      }
    }
  }
  return errors
}