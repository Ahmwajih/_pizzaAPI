const router = require('express').Router();


const { isAdmin } = require('../middlewares/authJWT')


router.route('/topping')
    .get(isAdmin, topping.getAllToppings)
    .post(isAdmin, topping.createTopping);

router.route('/topping/:id')
    .get(topping.getTopping)
    .put(isAdmin, topping.updateTopping)
    .delete(isAdmin, topping.deleteTopping);


module.exports = router;