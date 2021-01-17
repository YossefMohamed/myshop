const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
app.use(express.json());
app.use(cors());
const productRouter = require("./routes/productRoutes");
const connectDB = require("./database");

dotenv.config({ path: "./config.env" });
app.use("/api/products", productRouter);

connectDB();

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
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: err.stack,
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
