var express = require('express')
var mongoose = require('mongoose')

mongoose.connect('mogodb://localhost/sample')
var app = express()



app.listen(3000,() => {
    console.log('server listening on port 3000')
})