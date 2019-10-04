const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./newn.js')

//customize yargs version
yargs.version('1.1.0')
yargs.command({
    command:'add',
    describe:'add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
body:{
    describe: 'Note body',
    demandOption:true,
    type:'string'
}


    },
    handler:function(argv){
     notes.addNote(argv.title,argv.body)
    }
})
yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:{
        title:{
describe:'Note title',
demandOption:true,
type:'string'
        } 
    },
    handler:function(argv){
        console.log('removing the note')
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command:'list',
    describe:'list your notes',
    handler:function(){
        console.log('listing out all note')
    }
})
yargs.command({
    command:'read',
    describe:'read a note',
    handler:function(){
        console.log('reading a note')
    }
})
yargs.parse()
//console.log(yargs.argv)


