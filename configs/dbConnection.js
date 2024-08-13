const  mongoose  =  require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const dbConnection = function(){
    mongoose.connect(process.env.MONGODB)
    .then(() => {
        console.log('**Connected to MongoDB**');
    })
    .catch((err) => {
        console.log('Error connecting to MongoDB', err);
    });
}

module.exports = {
    mongoose,
    dbConnection
};