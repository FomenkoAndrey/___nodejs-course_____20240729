function getFormattedDate() {
  const date = new Date()
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
}

module.exports = { getFormattedDate }
