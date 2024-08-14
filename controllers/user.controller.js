"use strict";

const User = require('../models/user');
const passEncrypt = require('../helpers/passEncrypt');

module.exports = {
    getAllUsers: async (req, res) => {
        const users = await User.find();

        res.status(200).send({
            error: false,
            message: 'All users',
            users
        });
    },

    createUser: async (req, res) => {
        const newUser = await User.create(req.body);

        res.status(201).send({
            error: false,
            message: 'User created',
            user: newUser
        });
    },

    getUser: async (req, res) => {
        const user = await User.findById(req.params.id);

        res.status(200).send({
            error: false,
            message: 'User found',
            user
        });
    },

    updateUser: async (req, res) => {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.status(200).send({
            error: false,
            message: 'User updated',
            user: updatedUser
        });
    },

    deleteUser: async (req, res) => {
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        res.status(200).send({
            error: false,
            message: 'User deleted',
            user: deletedUser
        });
    }
};