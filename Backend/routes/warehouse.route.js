const router = require("express").Router();
const { default: mongoose } = require("mongoose");
const { findWarehouse, createWarehouse, findWarehouseById, removeItemById, updateWarehouse, updateWarehouseItem, removeItemFromWarehouse, insertToWarehouse } = require("../controllers/warehouse.controller");

const validateObjectId = (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(204).send();
    } else {
        next;
    }
}

router.get("/", async (req, res) => {
    try {
        const warehouse = await findWarehouse();
        res.json(warehouse);
    } catch (err) {
        console.log("failure")
        res.status(500).json(err.message);
    }
});
router.get("/:id", validateObjectId, async (req, res) => {
    try {
        const item = await findWarehouseById(req.params.id);
        res.json(item)
    } catch (err) {
        res.status(err?.status ?? 500).json(err)
    }
})

router.post("/", async (req, res) => {
    try {
        const warehouse = await createWarehouse(req.body);
        res.status(201).json(warehouse);
    } catch (err) {
        res.status(err?.status ?? 500).json(err);
    }
});

module.exports = router;