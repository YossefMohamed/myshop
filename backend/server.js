const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./database");
const morgan = require("morgan");
dotenv.config({ path: "./config.env" });

connectDB();
app.use(morgan("dev"));

app.use(express.json());
app.use(cors());
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

const port = process.env.PORT || 5000;
const products = require("./../frontend/src/products");

app.use((req, res, next) => {
  // console.log(res);
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

app.use((err, req, res, next) => {
  // console.log(res);
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.json({
    message: err.message,
    stack: err.stack,
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
