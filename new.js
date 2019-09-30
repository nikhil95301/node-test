const chalk = require('chalk')
const getNotes = require('./newn.js')
const command = process.argv[2]
console.log(process.argv)
if(command === 'add'){
console.log('adding note!')
}
else if(command === 'remove'){
    console.log('removing notes')
}



