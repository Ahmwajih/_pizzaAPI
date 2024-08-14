const pizza = require('../models/pizza');

module.exports = {
    getAllPizzas: async (req, res) => {
        const pizzas = await pizza.find();

        res.status(200).send({
            error: false,
            message: 'All pizzas',
            pizzas
        });
    },

    createPizza: async (req, res) => {
        const newPizza = await pizza.create(req.body);

        res.status(201).send({
            error: false,
            message: 'Pizza created',
            pizza: newPizza
        });
    },

    getPizza: async (req, res) => {
        const foundPizza = await pizza.findById(req.params.id);

        res.status(200).send({
            error: false,
            message: 'Pizza found',
            pizza: foundPizza
        });
    },

    updatePizza: async (req, res) => {
        const updatedPizza = await pizza.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.status(200).send({
            error: false,
            message: 'Pizza updated',
            pizza: updatedPizza
        });
    },

    deletePizza: async (req, res) => {
        const deletedPizza = await pizza.findByIdAndDelete(req.params.id);

        res.status(200).send({
            error: false,
            message: 'Pizza deleted',
            pizza: deletedPizza
        });
    }
};