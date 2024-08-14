const express = require("express");
const app = express();
// const swaggerJsDoc = require("swagger-jsdoc");
// const swaggerUi = require("swagger-ui-express");
const dotenv = require("dotenv");
const loggingMiddleware = require('./middlewares/loggingMiddleware');
const { dbConnection } = require("./configs/dbConnection");

dotenv.config();
dbConnection();

const port = process.env.PORT || 3000;

app.use(require("cors")());
app.use(express.json());
require("express-async-errors");

app.use(loggingMiddleware);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(require('./routes/index'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

