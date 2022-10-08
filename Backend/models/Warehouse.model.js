const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wareHouseSchema = new Schema({
    warehouse_id: Number,
    warehouse_availability: Number
});

const Warehouse = mongoose.model("Warehouse", wareHouseSchema, "Warehouses")
module.exports = Warehouse;