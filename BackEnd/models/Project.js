const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let projectSchema = new Schema({
  name: {
    type: String
  },
  date:{
    type: Date,
    default: Date.now
  },
  creator: {
    type:  Schema.Types.ObjectId ,
    ref: 'users',
    default: null
  },
  images: {
    type: Array,
    default: []
  },
  description :{
    type: String
  },
  architect: {
    type: String
  },
  interiorDesigner: {
    type: String
  },
  landscapeDesigner: {
    type: String
  },
  constructionCompany: {
    type: String
  },
  startedDate: {
    type: String
  },
  finishedDate: {
    type: String
  },
  exteriorDesign:{
    type: Boolean,
    default: false
  },
  landscapeDesign:{
    type: Boolean,
    default: false
  },
  interiorDesign:{
    type: Boolean,
    default: false
  },
  designCategory: {
    type: String
  },
  sustainability:{
    type: Boolean
  },
  area: {
    type: String
  },
  bricks: {
      type: Boolean,
      default: false
    },
    stone: {
      type: Boolean,
      default: false
    },
    concrete: {
      type: Boolean,
      default: false
    },
    metal: {
      type: Boolean,
      default: false
    },
    wood: {
      type: Boolean,
      default: false
    },
    glass: {
      type: Boolean,
      default: false
    },
    bamboo: {
      type: Boolean,
      default: false
    },
    grass: {
      type: Boolean,
      default: false
    },
    marbal: {
      type: Boolean,
      default: false
    },
    sand: {
      type: Boolean,
      default: false
    },
  budget: {
    type: Number,
    default: 0
  },
  style: {
    type: String
  },
  storey: {
    type: String
  },
  bedRooms: {
    type: String
  },
  bathRooms: {
    type: String
  },
  projectFolder: {
    type: String
  },
  views: {
    type: Number,
    default: 0
},
  comments: [
    {
      type: mongoose.Schema.Types.ObjectID,
      ref: 'Comment'
    }
  ]
},  { 
      timestamps: true 
    }, {
    collection: 'projects'
  });


projectSchema.index({ 
  name:'text',
  description: 'text',
}, {
  weights: {
      name: 5,
      description: 1,
  }
})

const Project = mongoose.model('Project', projectSchema);

module.exports = { Project }