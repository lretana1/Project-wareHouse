const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: String,
    quantity: Number,
    price: Number,
});

const Item = mongoose.model('Item', itemSchema, 'Items');

module.exports = Item;