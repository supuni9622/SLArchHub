const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bidSchema = new Schema({
    bidProject: {
        type: String
    },
    biddingParty: {
        type:String
    },
    date: {
        type: String,
        default: Date.now
    },
    biddingPurpose: {
        type: String
    },
    designType: {
        type: String
    },
    budgetRate: {
        type: String
    },
    description: {
        type: String
    },
    materials: {
        type: String
    },
    folder: {
        type: String
    },
    proposals:{
        type: String
    }
}, {
    collection: 'bids'
  });

module.exports = mongoose.model('Bid', bidSchema)
