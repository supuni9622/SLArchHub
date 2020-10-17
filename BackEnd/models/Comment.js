const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }, 
    postId: {
        type: Schema.Types.ObjectId,
        ref: 'Project'
    },
    responseTo: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    content: {
        type: String
    }

}, { timestamps: true })


const Comment = mongoose.model('Comment', commentSchema);

module.exports = { Comment }
