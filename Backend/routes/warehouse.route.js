const router = require("express").Router;
const { findWarehouse, createWarehouse } = require("../controllers/warehouse.controller");

router.post("/", async (req, res) => {
    try {
        const warehouse = await createWarehouse(req.body);
        res.status(201).json(warehouse);
    } catch (err) {
        res.status(err.status ?? 500).json(err);
    }
});

module.exports = router;