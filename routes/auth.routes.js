const router = require('express').Router();
const { register, login, logout } = require('../controllers/auth.controller');

router.all('/', (req, res) => {
    res.send({
        message: 'Welcome to our Pizza API. Please use /login to login, /register to register, /logout to logout'
    });
});

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

module.exports = router;