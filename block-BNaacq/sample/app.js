var express = require('express')
var mongoose = require('mongoose')
var logger = require('morgan')

var User = require('./models/user')
var Article = require('./models/article')
var Comment = require('./models/comment')

mongoose.connect('mongodb://localhost/sample', (err) => {
    console.log(err ? err : 'connected to database')
})
var app = express()

// middleware
app.use(logger('dev'))

// routes
app.get('/', (req,res) => {
    res.send('Welcome')
})

app.listen(3000, () => {
    console.log('server listening on port 3000')
})