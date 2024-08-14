'use strict';

const crypto = require('node:crypto');

const keyCode = process.env.KEY_CODE;
const loopCount = 10_000;
const chartCount = 32;
const encType = 'sha256';

module.exports = (password) => {
    const key = crypto.pbkdf2Sync(password, keyCode, loopCount, chartCount, encType);
    return key.toString('hex');
};