const pizza = require('../models/pizza')

module.exports = {
    getAllPizzas: async (req, res) => {
        const pizzas = await pizza.find()

        res.status(200).send({
            error: false,
            message: 'All pizzas',
            pizzas
        })
    },

    createPizza: async (req, res) => {
        const pizzas = await pizza.create(req.body)

        res.status(201).send({
            error: false,
            message: 'Pizza created',
            pizzas
        })

    },

    getPizza: async (req, res) => {
        const pizzas = await pizza.findById(req.params.id)

        res.status(200).send({
            error: false,
            message: 'Pizza found',
            pizzas
        })

    },

    updatePizza: async (req, res) => {
        const pizzas = await pizza.findByIdAndUpdate(req.params.id, req.body, { new: true })

        res.status(200).send({
            error: false,
            message: 'Pizza updated',
            pizzas
        })
    },

    deletePizza: async (req, res) => {
        const pizzas = await pizza.findByIdAndDelete(req.params.id)

        res.status(200).send({
            error: false,
            message: 'Pizza deleted',
            pizzas
        })
    }
}