const Item = require("../models/item.model");

const findAll = async () => await Item.find();

const findById = async (id) => {
    try {
        const item = await Item.findById(id);
        if (item === null) {
            throw { status: 204, msg: `Item with ID:${id} could not be found` };
        }
        return item;
    } catch (err) {
        throw err;
    }
};

const createItem = async (newItem) => {
    try {
        const item = new Item(newItem);
        await item.save();
        return item;
    } catch (err) {
        throw err;
    }
};

const updateItem = async (id, item) => {
    try {
        await Item.findByIdAndUpdate(id, item);
    } catch (err) {
        throw { status: 400, msg: err };
    }
};

const deleteById = async (id) => await Item.findByIdAndDelete(id);

module.exports = { findAll, findById, createItem, updateItem, deleteById };