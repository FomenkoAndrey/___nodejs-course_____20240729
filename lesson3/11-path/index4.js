const path = require('path')

const filePath = '/home/user//docs/file.txt'
const normalizedPath = path.normalize(filePath)

console.log(normalizedPath)
