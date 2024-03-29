'use strict';

require('dotenv').config();

exports.DATABASE_URL = process.env.DATABASE_URL ||
                      global.DATABASE_URL ||
                      'mongodb://localhost/speakez';

exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL ||
                       global.TEST_DATABASE_URL 
                    //   'mongodb://localhost/test-speakez';
exports.PORT = process.env.PORT ||8080;
exports.JWT_SECRET = process.env.JWT_SECRET || 'ebonyayes357september1775'; 
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';