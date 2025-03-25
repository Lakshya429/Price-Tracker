const express = require("express");
const router = express.Router();
const { Price } = require("../database/model");

router.get("/prices", async (req, res) => {
    const prices = await Price.find();
    res.json(prices);
});

module.exports = router;
