//import all necessary dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

app.use(express.json());

const connectToMongo = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected successfully to MongoDB`)
    } catch (err) {
        console.error(err.message);
        process.exit(1)
    }
}

connectToMongo();



const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Listening on port: ${PORT}`))