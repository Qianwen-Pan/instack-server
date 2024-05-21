const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const inventoriesRouter = require("./routes/inventories");
const warehousesRouter = require("./routes/warehouses");
app.use("/inventories", inventoriesRouter);
app.use("/warehouses", warehousesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
