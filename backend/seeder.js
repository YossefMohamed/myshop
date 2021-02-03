const mongoose = require("mongoose");

const products = require("./../frontend/src/products");
const users = require("./../frontend/src/user");
const connectDb = require("./database");

const User = require("./models/userModel");
const Product = require("./models/productModel");
const Order = require("./models/userModel");
connectDb();
console.log(products)
const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    const createUser = await User.insertMany(users);
    const adminUser = createUser[0]._id;
    const sampleProducts = products.map((p) => {
      return { ...p, user: adminUser };
    });
    await Product.insertMany(sampleProducts);
    console.log("Done");
  } catch (error) {
    console.log(error.message);
  }
};

importData();
