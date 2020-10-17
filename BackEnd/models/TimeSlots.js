const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let timeSlotsSchema = new Schema({
  mondayTime1: {
    type: String
  },
  mondayTime2: {
    type: String
  },
  mondayTime3: {
    type: String
  },
  mondayTime4: {
    type: String
  },
  mondayTime5: {
    type: String
  },
  tuesdayTime1: {
      type: String
  },
  tuesdayTime2: {
    type: String
},
tuesdayTime3: {
    type: String
},
tuesdayTime4: {
    type: String
},
tuesdayTime5: {
    type: String
},
wednusdayTime1: {

},
wednusdayTime2: {

},
wednusdayTime3: {

},
wednusdayTime4: {

},
wednusdayTime5: {

},
thursdayTime1:{
    type: String
},
thursdayTime2:{
    type: String
},
thursdayTime3:{
    type: String
},
thursdayTime4:{
    type: String
},
thursdayTime5:{
    type: String
},
fridayTime1:{
    type: String
},
fridayTime2:{
    type: String
},
fridayTime3:{
    type: String
},
fridayTime4:{
    type: String
},
fridayTime5:{
    type: String
},
saturdayTime1:{
    type: String
},
saturdayTime2:{
    type: String
},
saturdayTime3:{
    type: String
},
saturdayTime4:{
    type: String
},
saturdayTime5:{
    type: String
},
sundayTime1:{
    type: String
},
sundayTime2:{
    type: String
},
sundayTime3:{
    type: String
},
sundayTime4:{
    type: String
},
sundayTime5:{
    type: String
},
}, {
    collection: 'timeSlots'
  });

module.exports = mongoose.model('TimeSlot', timeSlotsSchema)