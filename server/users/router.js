const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const expressValidator = require('express-validator');

const {User} = require('../models');

const router = express.Router();

router.use(bodyParser.json())
// router.use(bodyParser.urlencoded())

// Post to register a new user
router.post('/signup', (req, res) => {
 
  const requiredFields = ['username','password'];
  const missingField = requiredFields.find(field => !(field in req.body));
  console.log('line 28')
  if (missingField) {
    return res.status(422).json({
      code: 422,
      reason: 'ValidationError',
      message: 'Missing field',
      location: missingField
    });  
  }

  const checkUsername1 = req.body.username.includes('@');
  const checkUsername2 = req.body.username.includes('.com')
console.log(checkUsername1, checkUsername2)
console.log('line 28')
  if (checkUsername1 === false || checkUsername2 === false) {
	  console.log('I work')
    return res.status(422).send({
      code: 422,
      reason: 'ValidationError',
      message: 'Must be a valid email',
      location: checkUsername1
    });  
  }

  const stringFields = [ 'username', 'password']
  const nonStringField = stringFields.find(field => (field in req.body) && typeof req.body[field] !== 'string');
  console.log('line 31')
  if (nonStringField) {
    return res.status(422).json({
      code: 422, 
      reason: 'ValidationError',
      message: 'Incorrect field type: expected string',
      location: nonStringField 
    });
  }

  const explicityTrimmedFields = ['username', 'password'];
  const nonTrimmedField = explicityTrimmedFields.find(field => req.body[field].toString().trim() !== req.body[field]);
  console.log('line 56')
  if (nonTrimmedField) {
    return res.status(422).json({
      code: 422,
      reason: 'ValidationError',
      message: 'Cannot start or end with whitespace',
      location: nonTrimmedField
    });
  }

  const sizedFields = {
    username: {
      min: 1
    },
    password: {
      min: 6,
      max: 72
    }
  };
  const tooSmallField = Object.keys(sizedFields).find(field =>
    'min' in sizedFields[field] &&
    req.body[field].trim().length < sizedFields[field].min
  );
  const tooLargeField = Object.keys(sizedFields).find(field =>
    'max' in sizedFields[field] &&
    req.body[field].trim().length > sizedFields[field].max
  );
  console.log('line 83')
  if (tooSmallField || tooLargeField) {
    return res.status(422).json({
      code: 422,
      reason: 'ValidationError',
      message: tooSmallField ?
        `Must be at least ${sizedFields[tooSmallField].min} characters long` :
        `Must be at most ${sizedFields[tooLargeField].max} characters long`,
      location: tooSmallField || tooLargeField
    });
  }

  let {username, password,firstName,lastName} = req.body;

 
  username = username.trim();
  console.log('line 100')
  return User  
    .find({username})
    
    .count()
    .then(count => {
      if (count > 0) {

        return Promise.reject({
          code: 422,
          reason: 'ValidationError',
          message: 'username already taken',
          location: 'username'
        });
      }
      return User.hashPassword(password)
    })
    .then(hash => {
      return User
        .create({
          username,
          password: hash,
          firstName,
          lastName
          
        })
    })
    .then(user => {
      
      return res.status(201).json(user.apiRepr());
    })
    .then( (res,req) => {

		// req.login(user, err => {
		// 	if (!err) res.redirect(`/api/connex/users/${req.user.username}`)
		// 		else console.log('We got an error', err)
		// })
    })//console.log("RES from back", username, 'password', password, "REQ from backend", req)
    .catch(err => {
      console.log("LOOK+++>",err)
      if (err.reason === 'ValidationError') { 
        return res.status(err.code).json(err);
      }
      res.status(500).json({code: 500, message: 'Internal server error'});
    });
});



module.exports = {router};