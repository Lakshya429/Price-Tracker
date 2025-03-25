const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const trackRoutes = require("./routes/track");
const priceRoutes = require("./routes/price");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
console.log(process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error:", err));


app.use("/api", trackRoutes);
app.use("/api", priceRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));