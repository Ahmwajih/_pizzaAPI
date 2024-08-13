const router = require('express').Router();


const { isAdmin } = require('../middlewares/authMiddleware')

const order = require('../controllers/order.controller');


router.route ('/order/:id')
.get(isAdmin, order.getOrder)
.put(isAdmin, order.updateOrder)
.delete(isAdmin, order.deleteOrder);


router.route('/order')
.get(isAdmin, order.getAllOrders)
.post(order.createOrder);


router.route('/order/history')
.get(order.getOrderHistory);


module.exports = router;