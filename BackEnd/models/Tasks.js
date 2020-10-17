const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let taskSchema = new Schema({
    taskName: {
        type: String
    },
    clientName: {
        type:String
    },
    startDate: {
        type: Date
    },
    taskType: {
        type: String
    },
    sustainability: {
        type: Boolean
    },
    designCategory: {
        type: String
    },
    isWholeProcess: {
        type: Boolean
    },
    owner: {
        type:  Schema.Types.ObjectId ,
        ref: 'users',
        default: null
    },

    area: {
        type: String
    },
    materials1: {
        type: String
    },
    materials2: {
        type: String
    },
    materials3: {
        type: String
    },
    materials4: {
        type: String
    },
    materials5: {
        type: String
    },
    clientBrief: {
        type: String
    },
    budget: {
        type: String
    },
    location: {
        type: String
    },
    paymentType: {
        type: String
    },
    special: {
        type: String
    },

    architecturalProcess: {
        type: String
    },
    soilTest: {
        type: String
    },
    boq:{
        type: String
    },
    mcApproval: {
        type: String
    },
    plan: {
        type: String
    },
    changes: {
        type: String
    },

    soilEngineer: {
        type: String
    },
    quantitySurveyer: {
        type: String
    },
    mc: {
        type: String
    },
    constructionParty: {
        type: String
    },
    interiorDesigner: {
        type: String
    },
    landscapeDesigner: {
        type: String
    },
    
    earnings: {
        type: Number,
        default: 0
    },
    paySoil:{
        type: Number,
        default: 0
    },
    payQuantity:{
        type: Number,
        default: 0
    },
    payWeb:{
        type: Number,
        default: 0
    },
    otherCosts:{
        type: Number,
        default: 0
    },
    profit: {
        type: Number,
        default: 0
    },

    clientBriefStatus: {
        type: String,
        default: 'Pending'
    },
    soilTestStatus: {
        type: String,
        default: 'Pending'
    },
    sketchDesignStatus: {
        type: String,
        default: 'Pending'
    },
    discussionStatus: {
        type: String,
        default: 'Pending'
    },
    redesignStatus: {
        type: String,
        default: 'Pending'
    },
    mcApprovalStatus: {
        type: String,
        default: 'Pending'
    },
    boqStatus: {
        type: String,
        default: 'Pending'
    },
    finaleDesignStatus: {
        type: String,
        default: 'Pending'
    },
    paymentStatus: {
        type: String,
        default: 'Pending'
    },
    endDate: {
        type: Date
    }
}, {
    collection: 'tasks'
  });

module.exports = mongoose.model('Task', taskSchema)
