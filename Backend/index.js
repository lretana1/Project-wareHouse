//import all necessary dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

app.use(express.json());



const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Listening on port: ${PORT}`))