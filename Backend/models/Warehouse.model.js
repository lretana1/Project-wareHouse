const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wareHouseSchema = new Schema({
    warehouse_id: Number,
    warehouse_cap: Number,
    remaining: Number,
    inventory: [ {
        item: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Item'
        },
        quantity: Number
    } ]
});

const Warehouse = mongoose.model("Warehouse", wareHouseSchema, "Warehouses")
module.exports = Warehouse;