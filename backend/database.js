const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(
      `mongodb+srv://yossefegypt:${process.env.PASSWORD}@cluster0.cjhna.mongodb.net/my-shop?retryWrites=true&w=majority`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then((e) => console.log("connected"));
};

module.exports = connectDB;
