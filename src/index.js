const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const trackRoutes = require("./src/routes/track");
const priceRoutes = require("./src/routes/prices");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error(err));

app.use("/api", trackRoutes);
app.use("/api", priceRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));