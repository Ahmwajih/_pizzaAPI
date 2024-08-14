const express = require('express');
const router = express.Router();

router.use('/users', require('./user.routes'));
router.use('/pizzas', require('./pizza.routes'));
router.use('/toppings', require('./topping.routes'));
router.use('/orders', require('./order.routes'));
router.use('/auth', require('./auth.routes'));

module.exports = router;