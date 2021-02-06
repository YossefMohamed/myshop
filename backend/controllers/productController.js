const handler = require("express-async-handler");

const Product = require("../models/productModel");

exports.getProducts = handler(async (req, res) => {
  const product = await Product.findById(req.params.id).populate({
    path: "reviews.user",
    select: "name img",
  });
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found !");
  }
});

exports.getProductById = handler(async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

exports.addReviewToProduct = handler(async (req, res) => {
  // console.log(req.user);
  const product = await Product.findById(req.params.productId);
  // console.log(product, "Asd");
  product.numberReviews++;
  product.reviews.push({ user: req.user._id, review: req.body.userReview , rating:req.body.rating });
  const productEdited = await product.save();
  res.json(productEdited);
});
