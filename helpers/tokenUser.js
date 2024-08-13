'use strict';

const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const pwEncrypt = require('../helpers/passEncrypt');

module.exports = async (userData, withRefresh = true) => {
    const { username, password } = userData;

    if (username && password) {
        const user = await User.findOne({ username });
        if (user && user.password === pwEncrypt(password)) {
            const accessToken = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
            if (withRefresh) {
                const refreshToken = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '7d' });
                return {
                    error: false,
                    token: {
                        access: accessToken,
                        refresh: refreshToken
                    }
                };
            } else {
                return {
                    error: false,
                    token: {
                        access: accessToken
                    }
                };
            }
        } else {
            return {
                error: true,
                message: 'Invalid username or password'
            };
        }
    }
    return {
        error: true,
        message: 'Invalid username or password'
    };
};