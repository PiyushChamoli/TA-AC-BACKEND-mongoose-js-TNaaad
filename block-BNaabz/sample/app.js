var express = require('express')
var mongoose = require('mongoose')

// instance
var app = express()
mongoose.connect("mongodb://localhost:27017/sample", (err) => {
    console.log(err ? err : "connected to database")
})

app.listen(3000, () => {
    console.log('server listening on port 3000')
})