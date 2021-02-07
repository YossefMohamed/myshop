const handler = require("express-async-handler");
const Order = require("../models/orderModel");

exports.addOrder = handler(async function (req, res) {
  console.log("asdasdawd");
  console.table(req.body.orderItems);
  console.log("asdasdawd");
  if (!req.user._id || !req.body.orderItems)
    throw new Error("Your Cart Is Empty");

  const order = new Order();
  order.user = req.user._id;
  order.orderItems = req.body.orderItems;
  const myOrder = await order.save();

  res.status(200).json({
    status: "ok",
    order: myOrder,
  });
});

exports.getOrder = handler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) throw new Error("Order Not Found !");
  console.log();
  if (req.user._id === order.user) throw new Error("Not Auth. ");
  res.status(200).json({
    status: "200",
    order,
  });
});

exports.getAllOrders = handler(async (req, res) => {
  const order = await Order.find({ user: req.user._id });
  res.status(200).json({
    status: "200",
    order,
  });
});
