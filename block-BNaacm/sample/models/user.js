var mongoose = require('mongoose')

var Schema = mongoose.Schema

var userSchema = new Schema({
    name: {type:String},
    email: {type:String, lowercase:true},
    age: {type:Number, default:0},
    favourites: [String],
    marks: [Number],
    password: {type: String, minlength:5, maxlength: 15},
    createAt: {type:Date, default: new Date()}
})

var User = mongoose.model('User', userSchema)

module.exports(User);