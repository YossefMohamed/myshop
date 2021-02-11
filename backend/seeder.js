const mongoose = require("mongoose");

const products = require("./../frontend/src/products");
const users = require("./../frontend/src/user");
// const connectDb = require("./database");
//
const User = require("./models/userModel");
const Product = require("./models/productModel");
const Order = require("./models/userModel");
const connectDB = () => {
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
connectDB();
// console.log(products);
const importData = async () => {
  try {
    // await Order.deleteMany();
    await Product.deleteMany();
    // await User.deleteMany();
    // const createUser = await User.insertMany(users);
    // const adminUser = createUser[0]._id;
    // const sampleProducts = products.map((p) => {
    //   return { ...p, user: adminUser };
    // });
    await Product.insertMany(products);
    console.log("Done");
  } catch (error) {
    console.log(error.message);
  }
};

importData();
