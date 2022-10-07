const mongoose = reqquire("mongoose");
const Schema = mongoose.Schema;

const wareHouseSchema = new Schema({});

const Warehouse = mongoose.model("Warehouse", wareHouseSchema, "Warehouse")
module.exports = Warehouse;