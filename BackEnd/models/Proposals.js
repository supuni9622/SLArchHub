const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let proposalSchema = new Schema({
    bidProject:{
        type: String
    },
    proposalName: {
        type: String
    },
    bidAmount: {
        type:String
    },
    deliveryPeriod: {
        type: String
    },
    proposalDescription: {
        type: String
    },
    proposalFile: {
        type: String
    }
}, {
    collection: 'proposals'
  });

module.exports = mongoose.model('Proposal', proposalSchema)
