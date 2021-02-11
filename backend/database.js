const mongoose = require("mongoose");

const connectDB = () => {
  console.log(process.env.PASSWORD)
  mongoose
    .connect(
     process.env.MONGODBURI,
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
