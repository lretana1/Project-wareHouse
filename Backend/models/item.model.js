const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    imgURL: String
});

const Item = mongoose.model('Item', itemSchema, 'Item');

module.exports = Item;