var express = require('express')
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/sample', (err) => {
    console.log(err ? err : 'coonected to database')
})
var app = express()

app.listen(3000, () => {
    console.log('server listening on port 3000')
})