const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
const connectDB = require("./database");
const morgan = require("morgan");
const path = require("path");
require('dotenv').config({path: path.join(__dirname , './config.env')});

connectDB();
app.use(morgan("dev"));
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/users", userRoutes);

const port = process.env.PORT || 5000;


app.use((req, res, next) => {
  // console.log(res);
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});
if(process.env.NODE_ENV === "production"){
  app.use(express.static('client/build'))
  app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname ,"./../frontend/build/index.html"))
  })
}
app.use((err, req, res, next) => {
  // console.log(res);
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.json({
    message: err.message,
    stack: err.stack,
  });
});



app.listen(port, "0.0.0.0", function () {
  console.log("Listening to port:  " + port);
});
