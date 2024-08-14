const topping = require('../models/topping');

module.exports = {
    getAllToppings: async (req, res) => {
        const toppings = await topping.find();

        res.status(200).send({
            error: false,
            message: 'All toppings',
            toppings
        });
    },

    createTopping: async (req, res) => {
        const newTopping = await topping.create(req.body);

        res.status(201).send({
            error: false,
            message: 'Topping created',
            topping: newTopping
        });
    },

    getTopping: async (req, res) => {
        const foundTopping = await topping.findById(req.params.id);

        res.status(200).send({
            error: false,
            message: 'Topping found',
            topping: foundTopping
        });
    },

    updateTopping: async (req, res) => {
        const updatedTopping = await topping.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.status(200).send({
            error: false,
            message: 'Topping updated',
            topping: updatedTopping
        });
    },

    deleteTopping: async (req, res) => {
        const deletedTopping = await topping.findByIdAndDelete(req.params.id);

        res.status(200).send({
            error: false,
            message: 'Topping deleted',
            topping: deletedTopping
        });
    }
};