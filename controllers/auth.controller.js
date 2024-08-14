const jwt = require('jsonwebtoken');
const User = require('../models/user');
const passEncrypt = require('../helpers/passEncrypt');
const tokenUser = require('../helpers/tokenUser');

module.exports = {
    register: async (req, res) => {
        const { username, password } = req.body;
        if (username && password) {
            const user = await User.findOne({ username });
            if (!user) {
                const newUser = await User.create({
                    username,
                    password: passEncrypt(password)
                });
                res.status(201).send({
                    error: false,
                    message: 'User created',
                    user: newUser
                });
            } else {
                res.status(400).send({
                    error: true,
                    message: 'Username already exists'
                });
            }
        } else {
            res.status(400).send({
                error: true,
                message: 'Username and password are required'
            });
        }
    },

    login: async (req, res) => {
        const { username, password } = req.body;
        if (username && password) {
            const user = await User.findOne({ username });
            if (user && user.password === passEncrypt(password)) {
                const tokens = await tokenUser({ username });
                res.status(200).send(tokens);
            } else {
                res.status(400).send({
                    error: true,
                    message: 'Invalid username or password'
                });
            }
        } else {
            res.status(400).send({
                error: true,
                message: 'Username and password are required'
            });
        }
    },

    logout: async (req, res) => {
        res.status(200).send({
            error: false,
            message: 'Logout success'
        });
    },
};