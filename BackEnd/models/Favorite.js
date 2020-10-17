const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = mongoose.Schema({
    userFrom: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        default: null
    },
    projectId : {
        type: String,
        default: ''
    },
    projectName: {
        type: String,
        default: ''
    },
    projectDescription: {
        type: String,
        default: ''
    },
    projectCategory: {
        type: String,
        default: ''
    },
    projectArchitect: {
        type: String,
        default: ''
    },
    projectInteriorDesigner: {
        type: String,
        default: ''
    },
    projectLandscapeDesigner: {
        type: String,
        default: ''
    }
}, { timestamps: true })


const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = { Favorite }
