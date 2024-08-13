const router = require('express').Router();

const { isAdmin } = require('../middlewares/authJWT')

router.route('pizza')
.get(pizza.getAllPizzas)
.post(isAdmin, pizza.createPizza);

router.route('/pizza/:id')
.get(pizza.getPizza)
.put(isAdmin, pizza.updatePizza)
.delete(isAdmin, pizza.deletePizza);


module.exports = router;