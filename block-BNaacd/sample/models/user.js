var mongoose = require('mongoose')

var Schema = mongoose.Schema

var userSchema = new Schema({
    name: {type:String},
    email: {type:String, lowercase:true},
    age: {type:Number, default:0}
})