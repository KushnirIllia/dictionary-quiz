const initialState = {
  links: [
    { name: 'Онлайн словник', to: '/' },
    { name: 'Тест', to: '/quiz' },
    { name: 'Додавання слова', to: '/add' },
  ],
  label: 'Словник'
}

export const navBarReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
