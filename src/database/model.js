const mongoose = require("mongoose");

const PriceSchema = new mongoose.Schema({
    url: String,
    email: String,
    title: String,
    price: String,
    timestamp: { type: Date, default: Date.now }
});

const Price = mongoose.model("Price", PriceSchema);

const addTracking = async (url, email) => {
    await Price.create({ url, email });
};

module.exports = { Price, addTracking };