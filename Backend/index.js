//import all necessary dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");


app.use(express.json());// parses incoming JSON requests
app.use(cors());//allows server to take requests.

const itemRouter = require("./routes/item.route");
app.use("/items", itemRouter);
const warehouseRouter = require("./routes/warehouse.route");
app.use("./warehouse", warehouseRouter);

const connectToMongo = async (req, res) => {
    //attempt to connect to MongoDB
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected successfully to MongoDB`)
    }
    //error is thrown for unsuccessful connection and exit out of the server. 
    catch (err) {
        console.error(err.message);
        process.exit(1)
    }
}

connectToMongo();

//Setting Port to a variable for readability
const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Listening on port: ${PORT}`))