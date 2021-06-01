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
    level:{
        type:Number,
    	default: '1',
    },
    onlineAvatar:{
        type:String,
    	default: 'av1',
    },
    ExercisesDone:{
        type:Number,
    	default: '0',
    },
    ProgrammingLogic:{
        type:Number,
    	default: '0',
    },
    Speed:{
        type:Number,
    	default: '0',
    },
    Creativity:{
        type:Number,
    	default: '0',
    },
})

module.exports = mongoose.model('User', UserSchema);


