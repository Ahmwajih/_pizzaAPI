'use strict';


const crypto = require('node:crypto');

keyCode = process.env.KEY_CODE;
loopCount = 10_000;
chartCount = 32;
encType = 'sha256';

module.exports = (password) => {
    let key = crypto.pbkdf2Sync(password, keyCode, loopCount, chartCount, encType);
    return key.toString('hex');
};
