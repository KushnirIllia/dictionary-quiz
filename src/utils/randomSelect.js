export const randomSelect = (itemsArray) => {
  const rand = Math.floor(Math.random() * itemsArray.length)
  return itemsArray[rand]
}