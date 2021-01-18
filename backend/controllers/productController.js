const handler = require('express-async-handler')

const Product = require('../models/productModel')



exports.getProducts = handler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found !");
  }
})



exports.getProductById =handler(async (req, res) => {
    const products = await Product.find();
    res.json(products);
  })