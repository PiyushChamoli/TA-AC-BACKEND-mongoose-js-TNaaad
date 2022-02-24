var mongoose = require('mongoose')

var Schema = mongoose.Schema

var commentSchema = new Schema({
    content: {type:String, required:true},
    author: {type:Schema.Types.ObjectId, required:true},
    article: {type:Schema.Types.ObjectId, required:true}
}, {timestamps:true})

var Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment