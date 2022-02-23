var express = require('express')
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/sample', (err) => {
    console.log(err ? err : 'connected to database')
})
var app = express()

app.get('/', (req,res) => {
    res.send('Home Page')
})

app.listen(3000, () => {
    console.log('server listening on port 3000')
})