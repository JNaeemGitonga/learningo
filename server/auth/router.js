const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const {User} = require('../models')
const config = require('../config');
// const {JWT_SECRET} = require('../secret')
const bcrypt = require('bcryptjs');


const createAuthToken = user => {
	return jwt.sign({user}, config.JWT_SECRET, {
		subject: user.username,
		expiresIn: config.JWT_EXPIRY, 
		algorithm: 'HS256'
	});
};
 
const router = express.Router();

router.post('/login',
    (req, res) => {
	const authToken = createAuthToken(req.body);	
	User
		.findOne({
			username:req.body.username
		})
		.then(user => {
			if (user){
				let obj = { 
					authToken,
					user
				}
				bcrypt.compare(req.body.password,user.password)
				.then(isValid => {
				if (isValid) return res.json(obj)
				return res.sendStatus(401)
			})
			.catch(err => console.log(err))		
			}
		})
    } 
);  

router.get('/logout',function(req, res) {
	
	req.logout(); 
	} 
);  

router.post('/refresh',
	passport.authenticate('jwt', {session: false}),
	(req, res) => { 
		const authToken = createAuthToken(req.user);
		console.log('from line 43 login',req.user)
		res.json({authToken})
	}
);

module.exports = {router};
