const express = require('express');
const app = express();

app.use(require('cors')());

const {dbConnection} = require('./configs/dbConnection');
dbConnection();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3000;

app.use(express.json());
require('express-async-errors')


app.get('/', (req, res) => {
    res.send('Hello World!');
    });


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

