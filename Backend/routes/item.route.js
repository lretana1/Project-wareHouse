const router = require("express").Router();
const { findAll, findById, deleteById, updateItem, createItem } = require("../controllers/item.controller")
const mongoose = require("mongoose");


router.get("/", async (req, res) => {
    const items = await findAll();
    res.json(items);
});

router.get("/:id", async (req, res) => {
    try {
        const items = await findById(req.params.id);
        res.json(items);
    }
    catch (err) {
        console.log(err.message);
        res.status()
    }
});

router.post("/", async (req, res) => {
    try {
        const item = await createItem(req.body);
        res.status(201).json(item);
    } catch (err) {
        res.status(err?.status ?? 500).json(err);
    }
});

router.put("/:id", async (req, res) => {
    try {
        await updateItem(req.params.id, req.body);
        res.send.json(req.body)
    } catch (err) {
        res.status(err?.status ?? 500).json(err);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await deleteById(req.params.id);
        res.send("Successfully deleted!");
    } catch (err) {
        res.status(err?.status ?? 500).json(err)
    }
});

module.exports = router;