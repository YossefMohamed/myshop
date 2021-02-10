const mongoose = require("mongoose");

const connectDB = () => {
  console.log(process.env.PASSWORD)
  mongoose
    .connect(
      "mongodb+srv://yossefegypt:0184738437@cluster0.cjhna.mongodb.net/my-shop?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    )
    .then((e) => console.log("connected"))
    .catch((e) => console.log(e.message));
};

module.exports = connectDB;
