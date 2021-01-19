const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(`mongodb://localhost:27017/my-shop`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((e) => console.log("connected"));
};

module.exports = connectDB;
