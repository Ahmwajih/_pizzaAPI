" use strict ";

module.exports = (err, req, res, next) => {
  console.log(err);
  res.status(500).send({
    error: true,
    message: "Internal Server Error",
    body: req.body,
    cause: err.cause,
  });
};
