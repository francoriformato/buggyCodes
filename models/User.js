const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  email:{
type:String,
required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  motto:{
        type:String,
        default:'The greatest programmer',
    },
    country:{
        type:String,
    	default: 'USA',
    },
})

module.exports = mongoose.model('User', UserSchema);


