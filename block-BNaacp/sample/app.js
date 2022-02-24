var express = require('express')
var mongoose = require('mongoose')
var User = require('./models/user')

mongoose.connect('mongodb://localhost/sample', (err) => {
    console.log(err ? err : 'connected to database')
})

var app = express()

// middleware
app.use(express.json())


// routes
app.get('/', (req,res) => {
    res.send('Welcome')
})

// create user
app.post('/users', (req,res) => {
    console.log(req.body)
    User.create(req.body, (err,user) => {
        res.send(`${user.name} added successfully`)
    })
})

// get user
app.get('/users', (req,res) => {
    User.find({}, (err, users) => {
        res.json({allUsers: users})
        // next(err)
    })
})
app.get('/users/:id', (req,res) => {
    var id = req.params.id
    User.find({'_id':id}, (err, user) => {
        console.log(err)
        res.json(user)
    })
    User.findOne({'_id':id}, (err, user) => {
        console.log(err)
        res.json(user)
    })
    User.findById(id, (err, user) => {
        console.log(err)
        res.json(user)
    })
})

// update user
app.put('/users/:id', (req,res) => {
    var id = req.params.id
    User.update({'_id':id}, req.body, {new:true}, (err,user) => {
        console.log(err)
        res.json(user)
    })
    User.findOneAndUpdate({'_id':id}, req.body, {new:true}, (err,user) => {
        console.log(err)
        res.json(user)
    })
    User.findById(id, req.body, {new:true}, (err,user) => {
        console.log(err)
        res.json(user)
    })
})

// delete user
app.delete('/users/:id', (req,res) => {
    var id = req.params.id
    User.findByIdAndDelete(id, (err, user) => {
        if (err) return next(err)
        res.send(`User ${user.name} Deleted`)
    })
})

// error handling
app.use((req,res) => {
    res.send('PAGE NOT FOUND')
})
app.use((err,req,res) => {
    res.send(err)
})

app.listen(3000, () => {
    console.log('server listening on port 3000')
})