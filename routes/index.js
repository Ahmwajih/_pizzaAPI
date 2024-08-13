const router = require('express').Router();

router.use('/auth', require('./auth.routes'));
router.use('/user', require('./user.routes'));
router.use('/pizza', require('./pizza.routes'));
router.use('/topping', require('./topping.routes'));
router.use('/order', require('./order.routes'));


module.exports = router;

