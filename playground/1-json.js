const fs = require('fs')

const dataBuffer=fs.readFileSync('1json.json')
const dataJSON =dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'Gounther'
user.age =54

const uerJSON = JSON.stringify(user)
fs.writeFileSync('1json.json',uerJSON) 