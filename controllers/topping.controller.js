const topping = require('../models/topping');

module.exports = {
    getAllToppings: async (req, res) => {
        const toppings = await topping.find()

        res.status(200).send({
            error: false,
            message: 'All toppings',
            toppings
        })
    },

    createTopping: async (req, res) => {
        const toppings = await topping.create(req.body)

        res.status(201).send({
            error: false,
            message: 'Topping created',
            toppings
        })

    },

    getTopping: async (req, res) => {
        const toppings = await topping.findById(req.params.id)

        res.status(200).send({
            error: false,
            message: 'Topping found',
            toppings
        })

    },

    updateTopping: async (req, res) => {
        const toppings = await topping.findByIdAndUpdate(req.params.id, req.body, { new: true })

        res.status(200).send({
            error: false,
            message: 'Topping updated',
            toppings
        })
    },

    deleteTopping: async (req, res) => {
        const toppings = await topping.findByIdAndDelete(req.params.id)

        res.status(200).send({
            error: false,
            message: 'Topping deleted',
            toppings
        })
    }
}
