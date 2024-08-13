const express = require("express");
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");


app.use(require("cors")());

const { dbConnection } = require("./configs/dbConnection");
dbConnection();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 3000;

app.use(express.json());
require("express-async-errors");
const swaggerDocs = swaggerJsdoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));





app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


app.use(require('./routes/index'))  