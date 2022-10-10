const Warehouse = require("../models/warehouse.model.js");

const findWarehouse = async () => await Warehouse.find().populate("inventory.item");

const findWarehouseById = async (id) => {
    try {
        const warehouse = await Warehouse.findById(id).populate('inventory.item');
        if (warehouse == null) throw { status: 204, msg: `Item:${id}, does not exist` };
        return warehouse;
    } catch (err) {
        throw { status: 500, msg: err.message };
    }
}

const removeItemById = async (id) => {
    await Warehouse.findByIdAndDelete(id);
}

const createWarehouse = async (wareHouseCreation) => {
    try {

        const wareHouse = new Warehouse(wareHouseCreation);
        await wareHouse.save();
        return wareHouse;

    } catch (err) {
        throw { status: 500, msg: err.message };
    }
};


const updateWarehouse = async (id, warehouseToUpdate) => {
    try {
        return await Warehouse.findByIdAndUpdate(id, warehouseToUpdate);
    } catch (err) {
        throw { status: 400, msg: err }
    }
}

const insertToWarehouse = async (id, itemToInsert) => {
    try {
        const item = { "_id": itemToInsert.item._id }
        const inventory = await Warehouse.findOneAndUpdate({ _id: id },
            {
                "$addToSet": {
                    "inventory": {
                        item: item,
                        quantity: itemToInsert.quantity
                    },
                }, "$inc": {
                    "remaining": -itemToInsert.quantity
                }
            })
    } catch (err) {
        throw { status: 400, msg: err }
    }
}

const removeItemFromWarehouse = async (warehouseId, id, data) => {
    try {
        const inventory = await Warehouse.findOneAndUpdate({ _id: warehouseId },
            {
                "$pull": {
                    "inventory": {
                        item: id,
                    },
                }, "$inc": {
                    "remaining": data.quantity
                }
            })
    } catch (err) {
        throw { status: 400, msg: err }
    }
}

const updateWarehouseItem = async (id, itemToUpdate) => {
    try {
        const ID2 = itemToUpdate.item._id
        const inventory = await Warehouse.updateOne({
            'inventory._id': ID2
        },
            {
                "$set": {
                    "inventory.$.quantity": itemToUpdate.quantity

                }, "$inc": {
                    "remaining": itemToUpdate.addOrMinus
                }
            })
        return inventory;
    } catch (err) {
        throw { status: 400, msg: err }
    }
}


module.exports = { findWarehouse, createWarehouse, findWarehouseById, removeItemById, updateWarehouse, updateWarehouseItem, removeItemFromWarehouse, insertToWarehouse }