const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
const connectDB = require("./database");
const morgan = require("morgan");
dotenv.config();
const path = require("path");
connectDB();
app.use(morgan("dev"));
console.log(path.join(__dirname, "public"));
app.use("/static", express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(cors());
app.use("/api/products", productRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/users", userRoutes);

const port = process.env.PORT || 5000;
const products = require("./../frontend/src/products");

app.get("/download", function (req, res) {
  const file = `${__dirname}/public/database.js`;
  res.download(file); // Set disposition and send it.
});
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

app.listen(port, "0.0.0.0", function () {
  console.log("Listening to port:  " + 5000);
});
