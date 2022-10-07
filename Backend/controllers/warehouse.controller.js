const Warehouse = require("../models/warehouse.model.js");

const findWarehouse = async () => await Warehouse.find().populate("");

const createWarehouse = async wareHouseCreation => {
    try {

        const wareHouse = new Warehouse(wareHouseCreation);
        await wareHouse.save();
        return wareHouse;

    } catch (err) {
        throw { status: 500, msg: err.message };
    }
};
module.exports = { findWarehouse, createWarehouse }