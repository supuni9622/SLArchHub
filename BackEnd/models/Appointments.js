const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let appointmentSchema = new Schema({
  day: {
    type: Date
  },
  timeSlot: {
    type: String
  },
  client: {
    type: String
  },
  serviceProvider: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  userFrom : {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
  designType: {
    type: String
  },
  designCategory: {
    type: String
  },
  requirements: {
    type: String
  },
  status: {
    type: String
  },
  bookedDate: {
    type: Date,
    default: Date.now
  },
  bookedTime: {
    type: String
  }
}, {
    collection: 'appointments'
  });

module.exports = mongoose.model('Appointment', appointmentSchema)