const order = require('../models/order');
const pizza = require('../models/pizza');

module.exports = {
    getAllOrders: async (req, res) => {
        const orders = await order.find();
        res.status(200).send({
            error: false,
            message: 'All orders',
            orders
        });
    },

    createOrder: async (req, res) => {
        const newOrder = await order.create(req.body);
        res.status(201).send({
            error: false,
            message: 'Order created',
            order: newOrder
        });
    },

    getOrder: async (req, res) => {
        const order = await order.findById(req.params.id);
        res.status(200).send({
            error: false,
            message: 'Order found',
            order
        });
    },

    updateOrder: async (req, res) => {
        const updatedOrder = await order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).send({
            error: false,
            message: 'Order updated',
            order: updatedOrder
        });
    },

    deleteOrder: async (req, res) => {
        const deletedOrder = await order.findByIdAndDelete(req.params.id);
        res.status(200).send({
            error: false,
            message: 'Order deleted',
            order: deletedOrder
        });
    },

    getOrderHistory: async (req, res) => {
        const orders = await order.find({ user: req.user._id });
        res.status(200).send({
            error: false,
            message: 'Order history',
            orders
        });
    }
};