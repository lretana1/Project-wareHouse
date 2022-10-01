const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    item_id: String,
    description: String,
    quantity: Number,
    price: Number,
    warehouse_id: String//references warehouse
});

const Item = mongoose.model('Item', itemSchema, 'Items');

module.exports = Item;