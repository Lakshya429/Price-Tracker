const express = require("express");
const router = express.Router();
const { addTracking } = require("../database/model");

router.post("/track", async (req, res) => {
    const { url, email } = req.body;
    if (!url || !email) return res.status(400).json({ error: "URL & email required" });
    await addTracking(url, email);
    res.json({ message: "Tracking started!" });
});

module.exports = router;