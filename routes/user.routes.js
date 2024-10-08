'use strict';

const router = require('express').Router();
const { register, login, logout } = require('../controllers/auth.controller');
const user = require('../controllers/user.controller');
const { isAdmin } = require('../middlewares/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.all('/logout', logout);

router.route('/')
    .get(isAdmin, user.getAllUsers)
    .post(user.createUser);

router.route('/:id')
    .get(isAdmin, user.getUser)
    .put(isAdmin, user.updateUser)
    .delete(isAdmin, user.deleteUser);

module.exports = router;