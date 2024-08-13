" use strict " ;


const User = require( ' ../models/user.model ' );
const { get } = require('mongoose');

const passEncrypt = require('../helpers/passEncrypt');


module.exports = {
    getAllUsers: async (req, res) => {
        const users = await User.find()

        res.status(200).send({
            error: false,
            message: 'All users',
            users
        })
    },

    createUser: async (req, res) => {
        const users = await User.create(req.body)

        res.status(201).send({
            error: false,
            message: 'User created',
            users
        })

    },

    getUser: async (req, res) => {
        const users = await User.findById(req.params.id)

        res.status(200).send({
            error: false,
            message: 'User found',
            users
        })

    },

    updateUser: async (req, res) => {
        const
        users = await User.findByIdAndUpdate
        (req.params.id, req.body, {
            new: true
        })
    },

    deleteUser: async (req, res) => {
        const users = await User.findByIdAndDelete(req.params.id)
    
        res.status(200).send({
            error: false,
            message: 'User deleted',
            users
        })
    }
}
    