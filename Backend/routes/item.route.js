const router = require("express").Router();
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
})