const isAdmin = (req, res, next) => {
    if (req.user.isAdmin) {
        next();
    } else {
        res.status(403).send({
            message: 'You are not authorized to access this resource'
        });
    }
}

module.exports = isAdmin;
