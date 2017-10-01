'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const questionsSchema = mongoose.Schema({
  language: {type:String},
  questions: {type:Array, ref:'ActualQuestions' },
});

const actualQuestionsSchema = mongoose.Schema({
  question:{type:String, required:true},
  translation:{type:String, required:true},
  answer:{type:String, required:true}
})
questionsSchema.methods.apiRepr = function() {
  return {
    id: this._id,
    language: this.language,
    questions: this.questions
  };
};

const userSchema = mongoose.Schema({
  googleId: {type: String},
  accessToken: {type: String},
  name: {type: String},
  username:{type:String},
  password: {type:String },
  firstName: {type:String},
  lastName: {type:String}
});

userSchema.methods.apiRepr = function() {
  return {
    id: this._id,
    googleId: this.googleId,
    name: this.name,
    username: this.username,
    password:{type:String}
  };
};

userSchema.methods.validatePassword = function(password) {
    return bcrypt.compare(password, this.password);
}
  
userSchema.statics.hashPassword = function(password) {
    return bcrypt.hash(password, 10);
}

const User = mongoose.model('User', userSchema);
const Question = mongoose.model('Question', questionsSchema);
const ActualQuestions = mongoose.model('ActualQuestions', actualQuestionsSchema);
module.exports = {User, Question};
