const { get } = require('mongoose')
const order = require('../models/order')

const pizza = require('../models/pizza')


module.exports = {

getAllOrders: async (req, res) => {
const orders = await res.getModelList(order)

res.status(200).send ({
 error: false,
 message: 'All orders',
 orders
})
},

createOrder : async (req, res) => {
    const orders = await order.create(req.body)

    res.status(201).send({
        error: false,
        message: 'Order created',
        orders
    })

},

getOrder: async (req, res) => {
    const orders = await order.findOne(req.params.id)

    res.status(200).send({
        error: false,
        message: 'Order found',
        orders
    })

},

updateOrder: async (req, res) => {
    const orders = await order.findByIdAndUpdate (req.params.id, req.body, {new: true})

    res.status(200).send({
        error: false,
        message: 'Order updated',
        orders
    })
},

deleteOrder: async (req, res) => {
    const orders = await order.findByIdAndDelete(req.params.id)

    res.status(200).send({
        error: false,
        message: 'Order deleted',
        orders
    })
},

//  order history
getOrderHistory: async (req, res) => {
    const orders = await order.find({user: req.user._id})

    res.status(200).send({
        error: false,
        message: 'Order history',
        orders
    })
}
}
    

