'use strict';

const router = require('express').Router();

const { register, login, logout } = require('../controllers/auth.controller');

const user  = require('../controllers/user.controller');

const  { isAdmin } = require('../middlewares/authMiddleware')


router.post('/register', user.register);
router.post('/login', user.login);
router.all('/logout', user.logout);


router.route('/')
    .get(isAdmin, user.getAllUsers)
    .post(isAdmin, user.createUser);

router.route('/:id')
    .get(isAdmin, user.getUser)
    .put(isAdmin, user.updateUser)
    .delete(isAdmin, user.deleteUser);


module.exports = router;