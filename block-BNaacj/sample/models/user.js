var mongoose = require('mongoose')

var Schema = mongoose.Schema

var userSchema = new Schema({
    name: {type:String},
    email: {type:String, lowercase:true},
    age: {type:Number, default:0},
    favourites: [String],
    marks: [Number],
    password: {type: Number, min:5, max: 15},
    createAt: {type:Date, default:Date.toLocaleString()}
}, {timestamps:true})