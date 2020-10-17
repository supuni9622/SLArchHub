const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = mongoose.Schema({
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

}, { timestamps: true },
    {
    collection: 'bookings'
  })


const Booking = mongoose.model('Booking', bookingSchema);

module.exports = { Booking }