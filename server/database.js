import mongoose from 'mongoose';
// const mysql = require("mysql");

import dotenv from 'dotenv';

dotenv.config();

//MongoDB Connection
const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        //console.log("Connected to MongoDB!")
    } catch (err) {
        console.log("Error connecting to the MongoDB:", err)
    }
}

//MySQL Connection
// const mysqlConnection = mysql.createConnection({
//     host: process.env.MYSQL_HOST,
//     user: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//     database: process.env.MYSQL_DATABASE
// });

// mysqlConnection.connect((err) => {
//     if (err) {
//         console.log("Error connecting to MySQL:", err)
//     } else {
//         console.log("Connected to MySQL");
//     }
// });

export default { connectMongoDB }