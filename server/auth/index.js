const {router} = require('./router');
const {basicStrategy, jwtStrategy} = require('./strategies');
const {JWT_SECRET} = require('../config');
module.exports = {router, basicStrategy, jwtStrategy};

