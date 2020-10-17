const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let taskProggressSchema = new Schema({
  taskName: {
    type: String  
  },
  client: {
    type: String    
  },
  clientBrief: {
      type: String
  },
  soilTest: {
    type: String
  },
  sketchDesign: {
    type: String
  },
  discussion: {
    type: String
  },
  redesign: {
    type: String
  },
  mcApproval: {
    type: String
  },
  boq: {
    type: String
  },
  finaleDesign: {
      type: String
   },
  payAmount: {
    type: String
  },
  payment: {
    type: String
},
}, {
    collection: 'taskProggress'
  });

module.exports = mongoose.model('taskProggress', taskProggressSchema)