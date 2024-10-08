const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const auth = req.headers?.authorization || null;
    const accessToken = auth ? auth.split(' ')[1] : null;

    req.isLogin = false;

    jwt.verify(accessToken, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            req.isLogin = false;
            req.user = null;
        } else {
            req.isLogin = true;
            req.user = user;
        }
        next();
    });
};