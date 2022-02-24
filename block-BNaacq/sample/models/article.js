var mongoose = require('mongoose')

var Schema = mongoose.Schema

var articleSchema = new Schema({
    title: {type:String, required:true},
    description: String,
    tags: [String],
    likes: [String],
    author: {type:Schema.Types.ObjectId, required:true},
    comments: [Schema.Types.ObjectId]
}, {timestamps:true})

var Article = mongoose.model('Article', articleSchema)

module.exports = Article