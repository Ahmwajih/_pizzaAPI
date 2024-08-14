module.exports = async (req, res, next) => {
    const User = require('../models/user.model');

    if (req.session.id) {
        const user = await User.findOne({ _id: req.session.id, password: req.session.password });
        if (user) {
            req.user = user;
        } else {
            req.session.destroy();
        }
    }
    next();
};