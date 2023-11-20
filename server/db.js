const env = require("dotenv");
const mongoose = require("mongoose")
env.config();

//Conexion a la base de datos de MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true, useUnifiedTopology: true
        })
        console.log('Connection to the database successfully completed')
    } catch(error) {
        console.log(error)
    }
};

module.exports=connectDB